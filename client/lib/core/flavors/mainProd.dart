import 'package:humane/core/flavors/flavorConfig.dart';
import 'package:humane/entry.dart';

Future<void> main() async {
  entry(FlavorConfig()
    ..appTitle = "Humane"
    ..env = 'lib/core/flavors/env/.env.prod');
}
