import 'package:flutter/material.dart';
import 'package:humane/core/theme/themeConstants.dart';

class Title extends StatelessWidget {
  final String text;
  final Color? color;
  final double size;
  final TextAlign align;
  final EdgeInsets padding = const EdgeInsets.all(0);

  const Title({Key? key, required this.text, this.size = 30, this.align = TextAlign.start, this.color}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: padding,
      child: Text(
        text,
        textAlign: align,
        style: TextStyle(
          color: color ?? appDarkOrangeColor,
          fontFamily: 'Cairo',
          fontSize: 22,
          fontWeight: FontWeight.w700,
        ),
      ),
    );
  }
}
