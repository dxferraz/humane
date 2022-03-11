import 'package:flutter/material.dart';

class Title extends StatelessWidget {
  String text;
  Color? color;
  double size;
  TextAlign align;
  EdgeInsets padding = const EdgeInsets.all(0);

  Title({required this.text, this.size = 30, this.align = TextAlign.start, this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding,
      child: Text(text,
          textAlign: align,
          style: TextStyle(fontSize: size, fontFamily: "LEMONMILK-bold", color: color ?? Theme.of(context).secondaryHeaderColor)),
    );
  }
}