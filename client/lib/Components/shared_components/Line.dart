import 'package:flutter/material.dart';

class Line extends StatelessWidget {
  final double width;
  final double height;
  final double padding;
  final Color? color;

  const Line({Key? key, this.width = 50, this.height = 2, this.padding = 10, this.color}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      margin: EdgeInsets.symmetric(vertical: padding),
      decoration: BoxDecoration(
        border: Border.all(
          color: color ?? Theme.of(context).primaryColor,
          width: height,
        ),
      ),
    );
  }
}
