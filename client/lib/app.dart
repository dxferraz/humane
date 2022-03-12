import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:humane/routes.dart';

class HumaneApp extends StatelessWidget {
  const HumaneApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      currentFocus.focusedChild?.unfocus();
    }

    // Colors
    Color primaryColor = const Color(0xFFf16622);
    Color secondaryHeaderColor = const Color(0xFF34658a);

    Map<int, Color> colorCodes = {
      50: Color.fromRGBO(241, 102, 34, .1),
      100: Color.fromRGBO(241, 102, 34, .2),
      200: Color.fromRGBO(241, 102, 34, .3),
      300: Color.fromRGBO(241, 102, 34, .4),
      400: Color.fromRGBO(241, 102, 34, .5),
      500: Color.fromRGBO(241, 102, 34, .6),
      600: Color.fromRGBO(241, 102, 34, .7),
      700: Color.fromRGBO(241, 102, 34, .8),
      800: Color.fromRGBO(241, 102, 34, .9),
      900: Color.fromRGBO(241, 102, 34, 1),
    };
    MaterialColor orangeColor = MaterialColor(0xFFf16622, colorCodes);

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: const SystemUiOverlayStyle(
        statusBarColor: Color(0xFFf16622),
      ),
      child: MaterialApp(
        title: dotenv.env['APP_NAME']!,
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
            primarySwatch: orangeColor,
            primaryColor: primaryColor,
            secondaryHeaderColor: secondaryHeaderColor,
            fontFamily: "Montserrat-regular"),
        initialRoute: 'signIn',
        routes: routes,
      ),
    );
  }
}
