import 'package:flutter/material.dart';
import 'package:humane/core/components/PrimaryButton.dart';
import 'package:humane/core/theme/themeConstants.dart';

class MainDrawer extends StatefulWidget {
  MainDrawer({Key? key}) : super(key: key);

  @override
  State<MainDrawer> createState() => _MainDrawerState();
}

class _MainDrawerState extends State<MainDrawer> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Padding(
        padding: const EdgeInsets.all(25.0),
        child: Column(
          children: [
            Button(
              onPress: () {
                Navigator.pushNamed(context, 'signIn');
              },
              text: "Sign In",
              background: appDarkOrangeColor,
            ),
            Divider(),
            Button(
              onPress: () {
                Navigator.pushNamed(context, 'signUp');
              },
              text: "Sign Up",
              background: appDarkOrangeColor,
            ),
          ],
        ),
      ),
    );
  }
}
