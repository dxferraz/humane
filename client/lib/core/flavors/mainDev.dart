import 'package:flutter/material.dart';
import 'package:humane/core/flavors/flavorConfig.dart';
import 'package:humane/entry.dart';

Future<void> main() async {
  entry(FlavorConfig()
    ..name = "DEV"
    ..bannerColor = Colors.green
    ..appTitle = "Humane Dev"
    ..env = 'lib/core/flavors/env/.env.dev');
}
