import 'package:flutter/material.dart';
import 'package:humane/core/flavors/flavorConfig.dart';
import 'package:humane/entry.dart';

Future<void> main() async {
  entry(FlavorConfig()
    ..name = "PROD"
    ..bannerColor = Colors.red
    ..appTitle = "Humane"
    ..env = 'lib/core/flavors/env/.env.prod');
}
