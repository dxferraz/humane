import 'package:flutter/material.dart';
import 'package:humane/Utils/constants.dart';
import 'package:humane/features/intro/pages.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class IntroPage extends StatefulWidget {
  const IntroPage({Key? key}) : super(key: key);

  @override
  State<IntroPage> createState() => _IntroPageState();
}

class _IntroPageState extends State<IntroPage> {
  final controller = PageController();

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              colors: [
                Colors.white,
                Color(0xFFD9F1FF),
              ],
            ),
          ),
          padding: const EdgeInsets.only(bottom: 125, top: 70),
          child: PageView(
            controller: controller,
            children: [
              introPage(
                urlImage: 'assets/images/chatIllustration.svg',
                title: 'Conectando Pessoas',
                subtitle:
                    'Um aplicativo que conecta doadores com pessoas necessitadas.',
              ),
              introPage(
                urlImage: 'assets/images/donation.png',
                title: 'Doe qualquer coisa',
                subtitle:
                    'Através do aplicativo é possível doar roupas, móveis e qualquer objeto!',
              ),
              introPage(
                urlImage: 'assets/images/login.png',
                title: 'Faça o login',
                subtitle: '',
              ),
            ],
          ),
        ),
        bottomSheet: Container(
          color: const Color(0xFFD9F1FF),
          padding: const EdgeInsets.symmetric(horizontal: 20),
          height: 125,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Center(
                    child: SmoothPageIndicator(
                      controller: controller,
                      count: 3,
                      effect: const ExpandingDotsEffect(
                        dotHeight: 10,
                        dotWidth: 10,
                        spacing: 10,
                        dotColor: Colors.grey,
                        activeDotColor: appDarkOrange,
                      ),
                      onDotClicked: (index) => controller.animateToPage(index,
                          duration: const Duration(milliseconds: 500),
                          curve: Curves.easeIn),
                    ),
                  ),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  TextButton(
                    onPressed: () => controller.jumpToPage(2),
                    child: const Text(
                      'Pular',
                      style: TextStyle(
                        color: appLightOrange,
                        fontFamily: 'Cairo',
                        fontSize: 16,
                      ),
                    ),
                  ),
                  ElevatedButton(
                    style: ButtonStyle(
                      shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30),
                        ),
                      ),
                      padding: MaterialStateProperty.all<EdgeInsets>(
                        const EdgeInsets.only(
                          bottom: 5,
                          right: 15,
                          top: 5,
                          left: 15,
                        ),
                      ),
                      backgroundColor:
                          MaterialStateProperty.all<Color>(appDarkOrange),
                    ),
                    onPressed: () => controller.nextPage(
                        duration: const Duration(milliseconds: 500),
                        curve: Curves.easeInOut),
                    child: const Text(
                      'Continuar',
                      style: TextStyle(
                        fontFamily: 'Cairo',
                        fontSize: 16,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      );
}
