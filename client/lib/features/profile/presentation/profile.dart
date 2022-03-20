import 'package:flutter/material.dart';
import 'package:humane/Utils/colors.dart';

class Profile extends StatelessWidget {
  final Widget firstIcon;
  final String title;
  final double height, childHeight;

  const Profile({
    Key? key,
    this.firstIcon = const Icon(Icons.airlines_sharp),
    this.title = "Profile",
    this.height = 150,
    this.childHeight = 150,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          ClipPath(
            clipper: AppBarProfileClipper(childHeight),
            child: Container(
              padding: const EdgeInsets.only(top: 30.0),
              color: appLightBlue,
              height: height,
              child: Container(),
            ),
          )
        ],
      ),
    );
  }
}

class AppBarProfileClipper extends CustomClipper<Path> {
  final double childHeight;

  AppBarProfileClipper(this.childHeight);

  @override
  Path getClip(Size size) {
    var path = Path();
    path.moveTo(0, size.height * 0.5);
    path.quadraticBezierTo(size.width / 2, size.height, size.width, size.height * 0.5);
    path.lineTo(size.width, 0);
    path.lineTo(0, 0);
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => true;
}
