import 'package:flutter/material.dart';
import 'package:humane/core/flavors/flavorConfig.dart';
import 'package:humane/entry.dart';

Future<void> main() async {
  entry(FlavorConfig()
    ..name = "STAGE"
    ..bannerColor = Colors.red
    ..appTitle = "Humane Staging"
    ..env = 'lib/core/flavors/env/.env.stage');
}
