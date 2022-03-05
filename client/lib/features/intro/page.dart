import 'package:flutter/material.dart' hide Title;
import 'package:flutter_svg/svg.dart';
import 'package:humane/Components/shared_components/Line.dart';
import 'package:humane/Components/shared_components/Title.dart';

class IntroPage extends StatelessWidget {
  String image;
  String title;
  String subtitle;
  late Widget child;

  IntroPage({Key? key, required this.image, this.title = "", this.subtitle = "", required this.child}) : super(key: key);

  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        SvgPicture.asset("assets/icons/$image.svg", width: MediaQuery.of(context).size.width, semanticsLabel: 'Illustration'),
        Container(
          height: MediaQuery.of(context).size.height * 0.5,
          padding: const EdgeInsets.only(top: 18, left: 30, right: 30),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Title(
                text: title,
                size: 20,
                align: TextAlign.center,
              ),
              Line(),
              subtitle != ""
                  ? Container(
                      padding: const EdgeInsets.symmetric(vertical: 20),
                      child: Text(
                        subtitle,
                        textAlign: TextAlign.center,
                        style: const TextStyle(fontSize: 18),
                      ),
                    )
                  : Container(),
              Container(child: child)
            ],
          ),
        ),
      ],
    );
  }
}
