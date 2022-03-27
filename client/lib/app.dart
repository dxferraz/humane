import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:humane/core/flavors/flavorConfig.dart';
import 'package:humane/core/theme/themeConstants.dart';
import 'package:humane/core/theme/themeManager.dart';
import 'package:humane/routes.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:humane/core/injection/injection.dart';

ThemeManager _themeManager = ThemeManager();

class HumaneApp extends StatelessWidget {
  final FlavorConfig config;

  const HumaneApp({Key? key, required this.config}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final showIntro = getIt<SharedPreferences>().getBool('showIntro') ?? true;

    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      currentFocus.focusedChild?.unfocus();
    }

    SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);

    return AnnotatedRegion<SystemUiOverlayStyle>(
      //Set status bar icon color
      value: SystemUiOverlayStyle.dark.copyWith(
        statusBarColor: Colors.transparent,
        statusBarIconBrightness: Brightness.light,
      ),
      child: MaterialApp(
        builder: (context, child) {
          if (config.name.isEmpty) {
            return Container(child: child);
          }
          return Banner(
            message: config.name,
            color: config.bannerColor,
            location: BannerLocation.bottomEnd,
            child: child,
          );
        },
        title: config.appTitle,
        debugShowCheckedModeBanner: false,
        theme: lightTheme,
        darkTheme: darktheme,
        themeMode: _themeManager.themeMode,
        //TODO Implement Theme switch button
        //initialRoute: showHome ? 'signIn' : 'intro',
        initialRoute: 'home',
        routes: routes,
      ),
    );
  }
}
