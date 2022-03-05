import 'package:flutter/material.dart';
import 'package:flare_splash_screen/flare_splash_screen.dart' as S;
import 'package:humane/features/intro/intro.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(color: Colors.white),
      child: S.SplashScreen.navigate(
        name: 'assets/GoStorages.flr',
        next: (_) => OnBoardingPage(),
        until: () => Future.delayed(Duration(seconds: 1)),
        startAnimation: 'start',
      ),
    );
  }
}
