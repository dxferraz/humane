import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:humane/Components/BottomTabNavigator/bottomTabNavigator_view.dart';
import 'package:humane/features/intro/page.dart';
import 'package:humane/libraries/introduction.dart';
import 'package:humane/Components/shared_components/TextLine.dart';
import 'package:humane/Components/shared_components/storageChips.dart';
import 'package:introduction_screen/introduction_screen.dart' hide IntroductionScreen;
import 'package:path/path.dart';

class OnBoardingPage extends StatefulWidget {
  @override
  _OnBoardingPageState createState() => _OnBoardingPageState();
}

class _OnBoardingPageState extends State<OnBoardingPage> {
  final introKey = GlobalKey<IntroductionScreenState>();

  void _onIntroEnd(context) {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => Home()),
    );
  }

  Widget _buildImage(String assetName) {
    return Align(
      child: SvgPicture.asset("assets/icons/$assetName.svg",
          width: MediaQuery.of(this.context).size.width * 0.35, semanticsLabel: 'Illustration'),
      alignment: Alignment.bottomCenter,
    );
  }

  Widget getChild(BuildContext context) => Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          StoragesChipOptions(onSelected: () {}),
          TextLine(
            text: "or",
            bottom: 7,
          ),
          Container(
            padding: const EdgeInsets.only(top: 0),
            child: Center(
              child: Text.rich(
                TextSpan(
                  text: "Don't have an account? ",
                  style: const TextStyle(fontFamily: "Montserrat-medium", color: Colors.black87),
                  children: <InlineSpan>[
                    TextSpan(
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          Navigator.of(context).pushNamed('signUp');
                        },
                      text: 'SIGN UP',
                      style: TextStyle(fontFamily: "Montserrat-medium", color: Theme.of(context).primaryColor),
                    ),
                  ],
                ),
              ),
            ),
          )
        ],
      );

  @override
  Widget build(BuildContext context) {
    return Introduction(
      globalBackgroundColor: Colors.white,
      key: introKey,
      onChange: (int c) {},
      pages: [
        IntroPage(image: 'intro1', title: "Do you need a storage?", child: getChild(context)),
        IntroPage(
            image: 'intro2', title: "Do you need a truck?", subtitle: "What kind of truck are you looking for?", child: getChild(context)),
        IntroPage(
            image: 'intro3',
            title: "Do you want to be a partner?",
            subtitle: "Come be part of our community of business!",
            child: getChild(context)),
      ],
      onDone: () => _onIntroEnd(context),
      //onSkip: () => _onIntroEnd(context), // You can override onSkip callback
      showSkipButton: true,
      skipFlex: 0,
      nextFlex: 0,
      skip: const Text(
        'Sign In',
        style: TextStyle(fontFamily: "Montserrat-regular"),
      ),
      onSkip: () {
        Navigator.of(context).pushNamed('signIn');
      },
      next: const Icon(Icons.arrow_forward),
      done: const Text('Done', style: TextStyle(fontWeight: FontWeight.w600)),
      dotsDecorator: DotsDecorator(
        size: const Size(10.0, 10.0),
        activeColor: Theme.of(context).primaryColor,
        color: Theme.of(context).primaryColor,
        activeSize: const Size(22.0, 10.0),
        activeShape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(25.0)),
        ),
      ),
    );
  }
}
