import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:humane/Utils/constants.dart';
import 'package:humane/routes.dart';

class HumaneApp extends StatelessWidget {
  const HumaneApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      currentFocus.focusedChild?.unfocus();
    }

    // We're using HiveStore for persistence,
    // so we need to initialize Hive.
    // await initHiveForFlutter();

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: const SystemUiOverlayStyle(
        systemNavigationBarContrastEnforced: true,
        statusBarColor: Colors.transparent,
      ),
      child: MaterialApp(
        title: dotenv.env['APP_NAME']!,
        debugShowCheckedModeBanner: false,
        theme: ThemeData(primaryColor: appDarkOrange, secondaryHeaderColor: appDarkBlue, fontFamily: "Cairo"),
        initialRoute: 'intro',
        routes: routes,
      ),
    );
  }
}
