import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/core/flavors/flavorConfig.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'app.dart';

Future<void> entry(FlavorConfig config) async {
  await dotenv.load(fileName: config.env);
  await setup(config);
  runApp(HumaneApp(config: config));
}
