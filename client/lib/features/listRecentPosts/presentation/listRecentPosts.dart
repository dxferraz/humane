import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:humane/core/theme/themeConstants.dart';
import 'package:humane/core/components/RadialButtons.dart';

class ListRecentPosts extends StatefulWidget {
  @override
  ListRecentPostsState createState() => ListRecentPostsState();
}

class ListRecentPostsState extends State<ListRecentPosts> with SingleTickerProviderStateMixin {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  late AnimationController controller;
  late Animation<double> animation;
  bool menuOpened = true;
  double buttomSize = 70;
  double menuSize = 70;

  List<Widget> buttons = [
    FloatingActionButton(
      backgroundColor: appLightBlueColor,
      child: const Icon(Icons.shopping_basket),
      elevation: 0.1,
      onPressed: () async {},
    ),
    FloatingActionButton(
      backgroundColor: appLightBlueColor,
      child: const Icon(Icons.shopping_basket),
      elevation: 0.1,
      onPressed: () async {},
    ),
    FloatingActionButton(
      backgroundColor: appLightBlueColor,
      child: const Icon(Icons.shopping_basket),
      elevation: 0.1,
      onPressed: () async {},
    ),
    FloatingActionButton(
      backgroundColor: appLightBlueColor,
      child: const Icon(Icons.shopping_basket),
      elevation: 0.1,
      onPressed: () async {},
    )
  ];

  @override
  void initState() {
    controller = AnimationController(vsync: this, duration: const Duration(milliseconds: 300));
    animation = Tween<double>(begin: 1, end: 0).animate(controller)
      ..addListener(() {
        setState(() {
          // The state that has changed here is the animation object’s value.
        });
      });

    super.initState();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    return Scaffold(
      body: Stack(children: [
        Align(
            alignment: Alignment.bottomCenter,
            child: CustomPaint(
              size: Size(size.width, menuSize),
              painter: MenuBackground(animation: animation.value),
            )),
        Container(
          width: size.width,
          height: size.height,
          color: Colors.black.withAlpha((200 * (1 - animation.value)).toInt()),
        ),
        Center(
          heightFactor: 5,
          child: Opacity(
            opacity: (1 - animation.value),
            child: const Padding(
              padding: EdgeInsets.symmetric(horizontal: 50.0),
              child: Text(
                "What king of donation do you want to make?",
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white, fontSize: 22),
              ),
            ),
          ),
        ),
        Positioned(
          bottom: 40 + (1 - animation.value) * (size.height / 4),
          right: (size.width / 2) - buttomSize / 2,
          child: RadialMenu(
            opened: menuOpened,
            button: SizedBox(
              height: buttomSize,
              width: buttomSize,
              child: FittedBox(
                child: FloatingActionButton(
                  backgroundColor: orangeColor,
                  child: const Icon(Icons.shopping_basket),
                  elevation: 0.1,
                  onPressed: () async {
                    setState(() {
                      menuOpened = !menuOpened;
                    });
                    if (!menuOpened) {
                      controller.forward();
                    } else {
                      await Future.delayed(Duration(seconds: 1));
                      controller.reverse();
                    }
                  },
                ),
              ),
            ),
          ),
        ),
      ]),
    );
  }
}

class MenuBackground extends CustomPainter {
  double animation;
  MenuBackground({required this.animation});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint();
    var rect = Offset.zero & size;
    paint.shader = const LinearGradient(
      begin: Alignment.topCenter,
      end: Alignment.bottomCenter,
      colors: [
        Color(0xFF7f92ad),
        Color(0xFF35658a),
      ],
    ).createShader(rect);

    Path path = Path();
    path.moveTo(size.width * 0.5, size.height * 0.6 * animation);
    path.cubicTo(size.width * 0.45, size.height * 0.6 * animation, size.width * 0.41, size.height * 0.36 * animation, size.width * 0.4,
        size.height * 0.2 * animation);
    path.cubicTo(size.width * 0.398, size.height * 0.17 * animation, size.width * 0.395, size.height * 0.14 * animation, size.width * 0.393,
        size.height * 0.12 * animation);
    path.cubicTo(size.width * 0.385, 0, size.width * 0.37, 0, size.width * 0.35, 0);
    path.lineTo(0, 0);
    path.lineTo(0, size.height);
    path.lineTo(size.width * 0.5, size.height);
    path.close();

    canvas.drawPath(path, paint);
    Float64List matrix = Float64List.fromList([-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, size.width, 0, 0, 1]);
    canvas.transform(matrix);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
