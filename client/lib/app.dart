import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/core/flavors/flavorConfig.dart';
import 'package:humane/routes.dart';
import 'package:shared_preferences/shared_preferences.dart';

class HumaneApp extends StatelessWidget {
  final FlavorConfig config;
  final SharedPreferences prefs;

  const HumaneApp({Key? key, required this.config, required this.prefs}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final showHome = prefs.getBool('showHome') ?? false;

    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      currentFocus.focusedChild?.unfocus();
    }

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: const SystemUiOverlayStyle(
        statusBarColor: appDarkOrange,
      ),
      child: MaterialApp(
        builder: (context, child) {
          if (config.name.isEmpty) {
            return Container(child: child);
          }
          return Banner(message: config.name, color: config.bannerColor, location: BannerLocation.bottomEnd, child: child);
        },
        title: config.appTitle,
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
            primarySwatch: orangeColor, primaryColor: primaryColor, secondaryHeaderColor: secondaryHeaderColor, fontFamily: 'Cairo'),
        initialRoute: showHome ? 'signIn' : 'intro',
        routes: routes,
      ),
    );
  }
}
