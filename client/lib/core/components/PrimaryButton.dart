import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  final VoidCallback onPress;
  final String text;
  final Color background;

  const Button({
    Key? key,
    required this.onPress,
    required this.text,
    required this.background,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        ElevatedButton(
          style: ButtonStyle(
            backgroundColor: MaterialStateProperty.all(background),
            shape: MaterialStateProperty.all(
              RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(30),
              ),
            ),
          ),
          onPressed: onPress,
          child: Text(
            text.toUpperCase(),
            style: const TextStyle(fontSize: 16, fontFamily: "Cairo"),
          ),
        ),
      ],
    );
  }
}
