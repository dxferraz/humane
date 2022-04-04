import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  final VoidCallback onPress;
  final String text;

  const Button({Key? key, required this.onPress, required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        ElevatedButton(
          onPressed: onPress,
          child: Text(text.toUpperCase(), style: const TextStyle(fontSize: 16, fontFamily: "Montserrat-regular")),
        ),
      ],
    );
  }
}