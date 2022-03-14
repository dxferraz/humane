import 'package:flutter/material.dart';

class Background extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry? padding;

  const Background({Key? key, required this.child, this.padding}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: child,
      padding: padding ?? const EdgeInsets.all(0),
      width: MediaQuery.of(context).size.width,
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          colors: [
            Colors.white,
            Color(0xFFD9F1FF),
          ],
        ),
      ),
    );
  }
}
