import 'package:flutter/material.dart';
import 'dart:math';
import 'package:vector_math/vector_math.dart' show radians, Vector3;

class RadialMenu extends StatefulWidget {
  bool opened;
  Widget button;
  RadialMenu({required this.opened, required this.button});

  @override
  _RadialMenuState createState() => _RadialMenuState();
}

class _RadialMenuState extends State<RadialMenu> with SingleTickerProviderStateMixin {
  late AnimationController controller;

  @override
  void initState() {
    super.initState();
    controller = AnimationController(duration: Duration(milliseconds: 900), vsync: this);
  }

  void animate() async {
    if (widget.opened) {
      controller.reverse();
    } else {
      await Future.delayed(Duration(microseconds: 550));
      controller.forward();
    }
  }

  @override
  Widget build(BuildContext context) {
    animate();
    return RadialAnimation(controller: controller, button: widget.button);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }
}

class RadialAnimation extends StatelessWidget {
  Widget button;
  RadialAnimation({Key? key, required this.controller, required this.button})
      : translation = Tween<double>(
          begin: 0.0,
          end: 100.0,
        ).animate(
          CurvedAnimation(parent: controller, curve: Curves.elasticOut),
        ),
        scale = Tween<double>(
          begin: 1.5,
          end: 0.0,
        ).animate(
          CurvedAnimation(parent: controller, curve: Curves.fastOutSlowIn),
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

  final AnimationController controller;
  final Animation<double> rotation;
  final Animation<double> translation;
  final Animation<double> scale;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
        animation: controller,
        builder: (context, widget) {
          return Transform.rotate(
              angle: radians(rotation.value),
              child: Stack(alignment: Alignment.center, children: <Widget>[
                _buildButton(0, color: Colors.red, icon: Icons.access_alarm_rounded),
                _buildButton(90, color: Colors.green, icon: Icons.access_alarm_rounded),
                _buildButton(180, color: Colors.orange, icon: Icons.access_alarm_rounded),
                _buildButton(270, color: Colors.blue, icon: Icons.access_alarm_rounded),
                button,
                // Transform.scale(
                //   scale: scale.value - 1,
                //   child: FloatingActionButton(child: Icon(Icons.access_alarm_rounded), onPressed: () {}, backgroundColor: Colors.red),
                // ),
                // Transform.scale(scale: scale.value, child: FloatingActionButton(child: Icon(Icons.access_alarm_rounded), onPressed: () {})),
              ]));
        });
  }

  _buildButton(double angle, {Color? color, IconData? icon}) {
    final double rad = radians(angle);
    return Transform(
        transform: Matrix4.identity()..translate((translation.value) * cos(rad), (translation.value) * sin(rad)),
        child: FloatingActionButton(child: Icon(icon), backgroundColor: color, onPressed: () {}, elevation: 0));
  }
}
