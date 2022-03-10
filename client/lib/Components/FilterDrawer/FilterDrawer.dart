import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:humane/Components/shared_components/Line.dart';
import 'package:humane/icons.dart';

class FilterDrawer extends HookWidget {
  late ValueNotifier<String> location;
  late ValueNotifier<String> sortBy;
  late ValueNotifier<String> max;
  late ValueNotifier<String> min;

  List<Map<String, String>> order = [
    {'title': 'Maior Preço', 'value': 'desc'},
    {'title': 'Menor Preço', 'value': 'asc'},
    {'title': 'Mais Relevante', 'value': 'review'}
  ];

  @override
  Widget build(BuildContext context) {
    location = useState('');
    sortBy = useState('');
    max = useState('');
    min = useState('');

    return Drawer(
      child: SafeArea(
        child: Container(
          padding: EdgeInsets.all(20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.only(bottom: 5),
                child: Row(
                  children: <Widget>[
                    Text(
                      'Filtros',
                      style: TextStyle(color: Theme.of(context).secondaryHeaderColor, fontWeight: FontWeight.bold, fontSize: 20.0),
                    ),
                  ],
                ),
              ),
              Line(
                padding: 0,
              ),
              Padding(
                padding: const EdgeInsets.only(top: 20),
                child: Text(
                  "Organizar por:",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: IntrinsicHeight(
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: order
                        .map((e) => Expanded(
                              flex: 1,
                              child: RaisedButton(
                                color: sortBy.value == e['value'] ? Theme.of(context).primaryColor : Colors.white,
                                onPressed: () {
                                  sortBy.value = e['value']!;
                                },
                                child: Text(
                                  e['title']!,
                                  textAlign: TextAlign.center,
                                  style: TextStyle(fontSize: 10, color: sortBy.value == e['value'] ? Colors.white : Colors.black),
                                ),
                              ),
                            ))
                        .toList(),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 20),
                child: Text(
                  "Faixa de Preço:",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Row(
                  mainAxisSize: MainAxisSize.max,
                  children: <Widget>[
                    Expanded(
                      flex: 1,
                      child: Container(
                        padding: const EdgeInsets.only(right: 10),
                        child: TextFormField(
                            initialValue: min.value,
                            onChanged: (_min) {
                              min.value = _min;
                            },
                            textInputAction: TextInputAction.next,
                            textAlign: TextAlign.end,
                            keyboardType: TextInputType.number,
                            decoration: new InputDecoration(prefix: Text("R\$"), suffix: Text(",00"), hintText: "Mínimo")),
                      ),
                    ),
                    Expanded(
                      flex: 1,
                      child: Container(
                        padding: const EdgeInsets.all(0),
                        child: TextFormField(
                            initialValue: max.value,
                            onChanged: (_max) {
                              max.value = _max;
                            },
                            textInputAction: TextInputAction.next,
                            textAlign: TextAlign.end,
                            keyboardType: TextInputType.number,
                            decoration: new InputDecoration(suffix: Text(",00"), prefix: Text("R\$"), hintText: "Máximo")),
                      ),
                    )
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 20),
                child: Text(
                  "Por Localidade:",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
              Row(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  Expanded(
                    child: Container(
                      padding: EdgeInsets.only(top: 8),
                      child: StreamBuilder<List<String>>(
                        // stream: getIt<SearchService>().locations.stream,
                        builder: (BuildContext context, AsyncSnapshot<List<String>> snapshot) {
                          print(snapshot.data);
                          if (snapshot.data == null) {
                            return LinearProgressIndicator();
                          }
                          return DropdownButton<String>(
                            hint: Text("Todas as Localidades"),
                            value: location.value,
                            iconSize: 24,
                            elevation: 16,
                            // style: TextStyle(color: Colors.deepPurple),
                            underline: Container(
                              height: 1,
                              color: Colors.grey,
                            ),
                            icon: Icon(
                              Icons.arrow_drop_down,
                              color: Colors.transparent,
                            ),
                            onChanged: (String? _location) {
                              location.value = _location!;
                            },
                            items: snapshot.data?.map<DropdownMenuItem<String>>((String value) {
                              return DropdownMenuItem<String>(
                                value: value,
                                child: Text(value),
                              );
                            }).toList(),
                          );
                        },
                      ),
                    ),
                  ),
                  Offstage(
                    offstage: location.value == null,
                    child: GestureDetector(
                      onTap: () {
                        location.value = '';
                      },
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 10),
                        child: Icon(
                          HumaneIcons.close,
                          size: 10,
                        ),
                      ),
                    ),
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
