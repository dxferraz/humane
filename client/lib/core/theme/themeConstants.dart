import 'package:flutter/material.dart';

const appDarkOrangeColor = Color(0xFFF26419);
const appLightOrangeColor = Color(0xFFF6AE2D);
const appDarkBlueColor = Color(0xFF33658A);
const appLightBlueColor = Color(0xFF86BBD8);
const appGreyColor = Color(0xFF626262);

Map<int, Color> colorCodes = {
  50: const Color.fromRGBO(241, 102, 34, .1),
  100: const Color.fromRGBO(241, 102, 34, .2),
  200: const Color.fromRGBO(241, 102, 34, .3),
  300: const Color.fromRGBO(241, 102, 34, .4),
  400: const Color.fromRGBO(241, 102, 34, .5),
  500: const Color.fromRGBO(241, 102, 34, .6),
  600: const Color.fromRGBO(241, 102, 34, .7),
  700: const Color.fromRGBO(241, 102, 34, .8),
  800: const Color.fromRGBO(241, 102, 34, .9),
  900: const Color.fromRGBO(241, 102, 34, 1),
};
MaterialColor orangeColor = MaterialColor(0xFFf16622, colorCodes);

ThemeData lightTheme = ThemeData(

    //app global colors
    primarySwatch: orangeColor,
    primaryColor: appDarkOrangeColor,
    scaffoldBackgroundColor: Colors.white,
    fontFamily: 'Cairo',
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
        padding: MaterialStateProperty.all<EdgeInsetsGeometry>(
          const EdgeInsets.symmetric(horizontal: 40.0, vertical: 20.0),
        ),
        shape: MaterialStateProperty.all<OutlinedBorder>(
          RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(50.0),
          ),
        ),
      ),
    ),
    textTheme: TextTheme(),
    appBarTheme: const AppBarTheme(
      backgroundColor: Colors.transparent,
      elevation: 0,
    ),
    colorScheme: ColorScheme.fromSwatch().copyWith(secondary: appDarkBlueColor),
    brightness: Brightness.light);

ThemeData darktheme = ThemeData(brightness: Brightness.dark);
