import 'package:flutter/material.dart';
import 'Components/BottomTabNavigator/bottomTabNavigator_view.dart';
import 'features/authentication/presentation/pages/forgotPassword.dart';
import 'features/authentication/presentation/pages/signIn.dart';
import 'features/authentication/presentation/pages/signUp.dart';

final routes = {
  'signIn': (BuildContext context) => SignIn(),
  'signUp': (BuildContext context) => SignUp(),
  'forgotPassword': (BuildContext context) => ForgotPassword(),
  'search': (BuildContext context) => Home(),
};
