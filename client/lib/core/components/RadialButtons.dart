import 'package:flutter/material.dart';
import 'dart:math';
import 'package:vector_math/vector_math.dart' show radians;

class RadialMenu extends StatefulWidget {
  final bool showOpenButtons;
  final bool opened;
  final Widget mainButton;
  final List<Widget> optionButtons;
  const RadialMenu({Key? key, required this.opened, required this.mainButton, required this.optionButtons, required this.showOpenButtons})
      : super(key: key);

  @override
  _RadialMenuState createState() => _RadialMenuState();
}

class _RadialMenuState extends State<RadialMenu> with SingleTickerProviderStateMixin {
  late AnimationController controller;

  @override
  void initState() {
    super.initState();
    controller = AnimationController(duration: const Duration(milliseconds: 900), vsync: this);
  }

  void animate() async {
    if (widget.opened) {
      controller.reverse();
    } else {
      await Future.delayed(const Duration(microseconds: 550));
      controller.forward();
    }
  }

  @override
  Widget build(BuildContext context) {
    animate();
    return RadialAnimation(controller: controller, button: widget.mainButton, options: widget.optionButtons, show: widget.showOpenButtons);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}

class RadialAnimation extends StatelessWidget {
  final Widget button;
  final List<Widget> options;
  final bool show;
  final AnimationController controller;
  final Animation<double> rotation;
  final Animation<double> translation;

  RadialAnimation({Key? key, required this.controller, required this.button, required this.options, required this.show})
      : translation = Tween<double>(
          begin: 0.0,
          end: 100.0,
        ).animate(
          CurvedAnimation(parent: controller, curve: Curves.elasticOut),
        ),
        rotation = Tween<double>(
          begin: 0.0,
          end: 360.0,
        ).animate(
          CurvedAnimation(
            parent: controller,
            curve: const Interval(
              0.0,
              0.7,
              curve: Curves.decelerate,
            ),
          ),
        ),
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
        animation: controller,
        builder: (context, widget) {
          List<Widget> children = [];

          if (show) {
            options.asMap().forEach((index, child) => {children.add(_buildButton((90 * index).toDouble(), child: child))});
          }

          children.add(button);

          return Transform.rotate(angle: radians(rotation.value), child: Stack(alignment: Alignment.center, children: children));
        });
  }

  _buildButton(double angle, {required Widget child}) {
    final double rad = radians(angle);
    return Transform(
        transform: Matrix4.identity()..translate((translation.value) * cos(rad), (translation.value) * sin(rad)), child: child);
  }
}
