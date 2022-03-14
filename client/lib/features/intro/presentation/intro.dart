import 'package:flutter/material.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/core/components/GradientButton.dart';
import 'package:humane/features/intro/presentation/pages.dart';
import 'package:shared_preferences/shared_preferences.dart';
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

  bool isLastPage = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                colors: [
                  Colors.white,
                  Color(0xFFD9F1FF),
                ],
              ),
            ),
            padding: const EdgeInsets.only(bottom: 125),
            child: PageView(
              controller: controller,
              onPageChanged: (index) {
                setState(() {
                  isLastPage = index == 2;
                });
              },
              children: [
                introPage(
                  context: context,
                  urlImage: 'assets/images/connectIllustration.svg',
                  title: 'Conectando Pessoas',
                  subtitle: 'Um aplicativo que conecta doadores com pessoas necessitadas.',
                ),
                introPage(
                  context: context,
                  urlImage: 'assets/images/donationIllustration.svg',
                  title: 'Doe qualquer coisa',
                  subtitle: 'Através do aplicativo é possível doar roupas, móveis e qualquer objeto!',
                ),
                introPage(
                  context: context,
                  urlImage: 'assets/images/developerIllustration.svg',
                  title: 'Seja um parceiro!',
                  subtitle: 'Ajude os nossos desenvolvedores a manter este aplicativo com a sua doação!',
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.only(top: 20),
            height: 80,
            child: Image.asset(
              'assets/images/humaneLogo.png',
              width: double.infinity,
            ),
          ),
          Positioned(
            bottom: 0,
            child: Container(
              width: MediaQuery.of(context).size.width,
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
                          onDotClicked: (index) => controller.animateToPage(
                            index,
                            duration: const Duration(milliseconds: 500),
                            curve: Curves.easeIn,
                          ),
                        ),
                      ),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      TextButton(
                        onPressed: () => Navigator.pushNamed(context, 'signUp'),
                        child: const Text(
                          'Pular',
                          style: TextStyle(
                            color: appLightOrange,
                            fontFamily: 'Cairo',
                            fontSize: 16,
                          ),
                        ),
                      ),
                      isLastPage
                          ? GradientButton(
                              onPressed: () async {
                                final prefs = await SharedPreferences.getInstance();
                                prefs.setBool('showHome', true);
                                Navigator.pushNamed(context, 'signIn');
                              },
                              text: 'Fazer Login',
                              bottomLeftColor: appDarkOrange,
                              topRightColor: appLightOrange,
                            )
                          : GradientButton(
                              onPressed: () {
                                controller.nextPage(
                                  duration: const Duration(milliseconds: 500),
                                  curve: Curves.fastOutSlowIn,
                                );
                              },
                              text: 'Continuar',
                              bottomLeftColor: appDarkOrange,
                              topRightColor: appLightOrange,
                            ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
