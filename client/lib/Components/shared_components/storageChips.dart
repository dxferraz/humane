import 'package:flutter/material.dart';
import 'package:humane/icons.dart';
import 'package:humane/Components/shared_components/Button.dart';
import 'package:flutter/material.dart' hide Title;

class StoragesChipOptions extends StatefulWidget {
  List<String> options;
  Function onSelected;

  StoragesChipOptions({Key? key, this.options = const ['For me', "For my family", 'For my business'], required this.onSelected})
      : super(key: key);

  StoragesChipOptionsState createState() => StoragesChipOptionsState();
}

class StoragesChipOptionsState extends State<StoragesChipOptions> {
  String sizePreference = '';
  bool climateControl = false;

  @override
  Widget build(BuildContext context) {
    int i = -1;
    return Column(
      children: <Widget>[
        Container(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children: widget.options.map((option) {
                i++;
                return Container(
                  padding: EdgeInsets.only(top: 0),
                  child: ChoiceChip(
                    avatar: Container(
                      child: Icon(
                        i == 0
                            ? HumaneIcons.male
                            : i == 1
                                ? HumaneIcons.mother
                                : HumaneIcons.shop,
                        size: 17,
                        color: sizePreference == option ? Colors.white : Colors.black,
                      ),
                    ),
                    selectedColor: Theme.of(context).primaryColor,
                    label: Text(
                      option,
                      style: TextStyle(fontSize: 14, color: sizePreference == option ? Colors.white : Colors.black),
                    ),
                    selected: sizePreference == option,
                    onSelected: (bool selected) {
                      setState(() {
                        sizePreference = selected ? option : '';
                        widget.onSelected(sizePreference, climateControl);
                      });
                    },
                  ),
                );
              }).toList()),
        ),
        Button(
          text: "Search",
          onPress: () {},
        ),
      ],
    );
  }
}
