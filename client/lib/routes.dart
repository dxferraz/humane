import 'package:flutter/material.dart';
import 'package:humane/features/listRecentPosts/presentation/listRecentPosts.dart';
import 'features/authentication/presentation/pages/forgotPassword.dart';
import 'features/authentication/presentation/pages/signIn.dart';
import 'features/authentication/presentation/pages/signUp.dart';
import 'features/intro/presentation/intro.dart';

final routes = {
  'intro': (BuildContext context) => const IntroPage(),
  'home': (BuildContext context) => ListRecentPosts(),
  'signIn': (BuildContext context) => SignIn(),
  'signUp': (BuildContext context) => SignUp(),
  'forgotPassword': (BuildContext context) => ForgotPassword(),
};
