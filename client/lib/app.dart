import 'package:flutter/material.dart';
import 'package:humane/config.dart';
import 'package:humane/routes.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      currentFocus.focusedChild?.unfocus();
    }

    // Colors
    Color primaryColor = const Color(0xFFFF2E63);
    Color secondaryHeaderColor = const Color(0xFF010A43);

    return MaterialApp(
      title: appName,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primaryColor: primaryColor, secondaryHeaderColor: secondaryHeaderColor, fontFamily: "Montserrat-regular"),
      initialRoute: 'splashscreen',
      routes: routes,
    );
  }
}
