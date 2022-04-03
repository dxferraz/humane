import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class HLoading extends HookWidget {
  const HLoading({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    AnimationController _wrapperMovement = useAnimationController(duration: const Duration(seconds: 1));
    CurvedAnimation _curveAnimation = CurvedAnimation(parent: _wrapperMovement, curve: Curves.easeInOut);
    Animation moveLeft = Tween(begin: 0.0, end: MediaQuery.of(context).size.width - 140).animate(_curveAnimation);

    _wrapperMovement.forward();

    _wrapperMovement.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        _wrapperMovement.reverse();
      }
      if (status == AnimationStatus.dismissed) {
        _wrapperMovement.forward();
      }
    });

    return Row(
      children: [1, 2, 3, 4, 5, 6]
          .map(
            (e) => AnimatedBuilder(
              animation: _wrapperMovement,
              builder: (BuildContext context, Widget? child) => Transform.translate(
                offset: Offset(moveLeft.value + e * 10, 0.0),
                child: Container(
                  width: 10.0,
                  height: 10.0,
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(5), color: Theme.of(context).primaryColor),
                ),
              ),
            ),
          )
          .toList(),
    );
  }
}
