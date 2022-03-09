import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:humane/Services/service_locator.dart';
import 'app.dart';

Future<void> main() async {
  // TODO: Create cmd to change env on package.json
  // Init environment variables
  await dotenv.load(fileName: '.env.dev');

  setup();
  runApp(MyApp());
}
