import 'dart:math';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_hooks/flutter_hooks.dart';

class Profile extends HookWidget {
  double getNipHeight(double nipHeight) => sqrt(2 * pow(nipHeight, 2));

  @override
  Widget build(BuildContext context) {
    AnimationController _controller = useAnimationController(duration: Duration(seconds: 2));
    CurvedAnimation curvedController = CurvedAnimation(parent: _controller, curve: Curves.bounceOut);
    Animation moveDown = Tween<double>(begin: 0, end: 200).animate(curvedController);
    _controller.forward();

    Widget child = Container(
      margin: const EdgeInsets.symmetric(vertical: 60, horizontal: 20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 5.0, // has the effect of softening the shadow
            spreadRadius: 1.0, // has the effect of extending the shadow
            offset: const Offset(
              10.0, // horizontal, move right 10
              10.0, // vertical, move down 10
            ),
          )
        ],
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Stack(alignment: Alignment.bottomCenter, children: <Widget>[
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 20),
              child: Center(
                  child: Text(
                "You don't have any storages yet! You don't have any storages yet!You don't have any storages yet!You don't have any storages yet!You don't have any storages yet!You don't have any storages yet!",
                style: TextStyle(fontFamily: "Montserrat-bold", color: Theme.of(context).secondaryHeaderColor),
              )),
            ),
            Transform(
              origin: const Offset(50, 50),
              transform: Matrix4.translationValues(-50 / 2, getNipHeight(50) / 2, 0)..rotateZ(pi / 4),
              child: Container(
                width: 50,
                height: 50,
                decoration: BoxDecoration(
                  color: Colors.white,
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.1),
                      blurRadius: 5.0, // has the effect of softening the shadow
                      spreadRadius: 1.0, // has the effect of extending the shadow
                      offset: const Offset(
                        10.0, // horizontal, move right 10
                        10.0, // vertical, move down 10
                      ),
                    )
                  ],
                ),
              ),
            ),
          ]),
        ],
      ),
    );

    return Scaffold(
      backgroundColor: Colors.transparent,
      body: Column(
        children: <Widget>[
          AnimatedBuilder(
            animation: _controller,
            builder: (BuildContext context, Widget? child) => Transform.translate(offset: Offset(0, moveDown.value), child: child),
          ),
        ],
      ),
    );
  }
}
