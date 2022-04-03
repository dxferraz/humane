import 'package:flare_flutter/flare_actor.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:humane/core/components/Background.dart';
import 'package:humane/core/components/GradientButton.dart';
import 'package:humane/core/components/Title.dart';
import 'package:humane/utils/colors.dart';

class Successful extends StatefulWidget {
  final String title;
  final String paragraph;
  final String nextPage;
  final int seconds;

  const Successful({Key? key, required this.nextPage, this.title = '', this.paragraph = '', this.seconds = 2}) : super(key: key);

  @override
  State<StatefulWidget> createState() => SuccessfulState();
}

class SuccessfulState extends State<Successful> with SingleTickerProviderStateMixin {
  AnimationController? controller;
  Animation<double>? animation;

  @override
  void initState() {
    controller = AnimationController(vsync: this, duration: const Duration(milliseconds: 500));
    animation = Tween<double>(begin: 0, end: 1).animate(controller!);

    startAnimation();
    navigateToHomeAfterTime();
    super.initState();
  }

  void navigateToHomeAfterTime() async {
    Future.delayed(
      const Duration(milliseconds: 1800),
      () {
        Navigator.pushNamed(context, 'home');
      },
    );
  }

  void startAnimation() async {
    Future.delayed(
      const Duration(milliseconds: 1600),
      () {
        controller?.forward();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Background(
          padding: const EdgeInsets.only(bottom: 125, top: 70),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const SizedBox(
                width: 400,
                height: 200,
                child:
                    FlareActor("assets/animations/successCheck.flr", alignment: Alignment.center, fit: BoxFit.contain, animation: "init"),
              ),
              FadeTransition(
                opacity: animation!,
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 20,
                  ),
                  child: Column(
                    children: [
                      Title(
                        align: TextAlign.center,
                        text: widget.title,
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 25.0, vertical: 15),
                        child: Text(
                          widget.paragraph,
                          textAlign: TextAlign.center,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: GradientButton(
                            onPressed: () {
                              Navigator.pushNamed(context, 'home');
                            },
                            text: "Go to Home",
                            bottomLeftColor: appDarkOrange,
                            topRightColor: Colors.orange),
                      )
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
