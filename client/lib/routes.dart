import 'package:flutter/material.dart';
import 'package:humane/features/intro/intro.dart';
import 'package:humane/features/spashscreen/splashScreen.dart';
import 'Components/BottomTabNavigator/bottomTabNavigator_view.dart';
import 'features/authentication/presentation/pages/forgotPassword.dart';
import 'features/authentication/presentation/pages/signIn.dart';
import 'features/authentication/presentation/pages/signUp.dart';

final routes = {
  'splashscreen': (BuildContext context) => SplashScreen(),
  'signIn': (BuildContext context) => SignIn(),
  'signUp': (BuildContext context) => SignUp(),
  'forgotPassword': (BuildContext context) => ForgotPassword(),
  'search': (BuildContext context) => Home(),
  'onBoarding': (BuildContext context) => OnBoardingPage()
};