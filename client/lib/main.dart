import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'app.dart';

Future<void> main() async {
  // TODO: Create cmd to change env on package.json
  // Init environment variables
  await dotenv.load(fileName: '.env.dev');
  final prefs = await SharedPreferences.getInstance();
  final showHome = prefs.getBool('showHome') ?? false;
  setup();
  runApp(HumaneApp(showHome: showHome));
}
