import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  final VoidCallback onPress;
  final String text;

  Button({required this.onPress, required this.text});

  Widget build(BuildContext context) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          RaisedButton(
            shape: RoundedRectangleBorder(borderRadius: new BorderRadius.circular(18.0), side: BorderSide(color: Colors.red)),
            color: Theme.of(context).primaryColor,
            textColor: Colors.white,
            onPressed: onPress,
            child: Text(text.toUpperCase(), style: TextStyle(fontSize: 16, fontFamily: "Montserrat-regular")),
          ),
        ],
      ),
    );
  }
}
