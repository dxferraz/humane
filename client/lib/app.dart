import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:humane/routes.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      currentFocus.focusedChild?.unfocus();
    }

    // Colors
    Color primaryColor = const Color(0xFFf16622);
    Color secondaryHeaderColor = const Color(0xFF34658a);

    return MaterialApp(
      title: dotenv.env['APP_NAME']!,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primaryColor: primaryColor, secondaryHeaderColor: secondaryHeaderColor, fontFamily: "Montserrat-regular"),
      initialRoute: 'onBoarding',
      routes: routes,
    );
  }
}
