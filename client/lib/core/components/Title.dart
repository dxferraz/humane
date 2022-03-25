import 'package:flutter/material.dart';
import 'package:humane/Utils/colors.dart';

class Title extends StatelessWidget {
  String text;
  Color? color;
  double size;
  TextAlign align;
  EdgeInsets padding = const EdgeInsets.all(0);

  Title({Key? key, required this.text, this.size = 30, this.align = TextAlign.start, this.color}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding,
      child: Text(
        text,
        textAlign: align,
        style: TextStyle(
          color: color ?? appDarkOrange,
          fontFamily: 'Cairo',
          fontSize: 22,
          fontWeight: FontWeight.w700,
        ),
      ),
    );
  }
}
