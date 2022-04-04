import 'package:flutter/material.dart';
import 'package:humane/features/listActions/presentation/listActions.dart';
import 'package:humane/features/profile/presentation/profile.dart';
import 'features/authentication/presentation/pages/forgotPassword.dart';
import 'features/authentication/presentation/pages/signIn.dart';
import 'features/authentication/presentation/pages/signUp.dart';
import 'features/intro/presentation/intro.dart';
   
final routes = {
  'intro': (BuildContext context) => const IntroPage(),
  'profile': (BuildContext context) => const Profile(),
  'home': (BuildContext context) => const ListActions(),
  'signIn': (BuildContext context) => SignIn(),
  'signUp': (BuildContext context) => SignUp(),
  'forgotPassword': (BuildContext context) => const ForgotPassword(),
};
