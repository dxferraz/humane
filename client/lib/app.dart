import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/routes.dart';

class HumaneApp extends StatelessWidget {
  const HumaneApp({Key? key, required this.showHome}) : super(key: key);

  final bool showHome;

  @override
  Widget build(BuildContext context) {
    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      currentFocus.focusedChild?.unfocus();
    }

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: const SystemUiOverlayStyle(
        systemNavigationBarContrastEnforced: true,
        statusBarColor: Colors.transparent,
      ),
      child: MaterialApp(
        title: dotenv.env['APP_NAME']!,
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
            primaryColor: appDarkOrange,
            secondaryHeaderColor: appDarkBlue,
            fontFamily: "Cairo"),
        initialRoute: showHome ? 'signUp' : 'intro',
        routes: routes,
      ),
    );
  }
}
