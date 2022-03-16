import 'package:flutter/material.dart';
import 'package:humane/core/theme/themeConstants.dart';
import 'package:humane/core/components/PrimaryButton.dart';
import 'package:humane/icons.dart';
import 'package:flutter/material.dart' hide Title;

class StoragesChipOptions extends StatefulWidget {
  List<String> options;
  Function onSelected;

  StoragesChipOptions({Key? key, this.options = const ['For me', "For my family", 'For my business'], required this.onSelected})
      : super(key: key);

  @override
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
                        Humane.male,
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
          background: appDarkOrangeColor,
          text: "Search",
          onPress: () {},
        ),
      ],
    );
  }
}
