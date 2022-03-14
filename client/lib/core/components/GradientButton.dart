// ignore_for_file: file_names
import 'package:flutter/material.dart';

class GradientButton extends StatelessWidget {
  final VoidCallback onPressed;
  final String text;
  final Color bottomLeftColor;
  final Color topRightColor;

  const GradientButton({
    Key? key,
    required this.onPressed,
    required this.text,
    required this.bottomLeftColor,
    required this.topRightColor,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ButtonStyle(
        backgroundColor: MaterialStateProperty.all(Colors.transparent),
        elevation: MaterialStateProperty.all(0),
      ),
      onPressed: onPressed,
      child: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
            colors: <Color>[
              topRightColor,
              bottomLeftColor,
            ],
          ),
          borderRadius: const BorderRadius.all(
            Radius.circular(30),
          ),
        ),
        padding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
        child: Text(
          text,
          style: /*ButtonTextStyle()*/ const TextStyle(
            fontFamily: 'Cairo',
            fontSize: 16,
          ),
        ),
      ),
    );
  }
}
