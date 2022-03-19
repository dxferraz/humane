import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/core/components/RadialButtons.dart';
import 'package:humane/features/listActions/bloc/ListActionsBloc.dart';
import 'package:humane/features/listActions/components/MenuBackground.dart';
import 'package:humane/features/listActions/presentation/listActions.dart';
import 'package:humane/icons.dart';

class MainMenu extends StatefulWidget {
  ListActionsState state;

  MainMenu({required this.state});

  @override
  MainMenuState createState() => MainMenuState();
}

class MainMenuState extends State<MainMenu> with TickerProviderStateMixin {
  late AnimationController openAnimationController;

  late Animation<double> openAnimation;
  bool showOpenButtons = false;
  bool menuOpened = true;
  double buttomSize = 70;
  double menuSize = 70;
  double menuRadialPosition = 0;
  double curvePosition = 0;

  @override
  void initState() {
    openAnimationController = AnimationController(vsync: this, duration: const Duration(milliseconds: 300));

    openAnimation = Tween<double>(begin: 1, end: 0).animate(openAnimationController)
      ..addListener(() {
        setState(() {});
      });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    double prevPos = curvePosition;
    int activeIndex = 2;
    Widget donationIcon;
    Widget missingPersonIcon;
    Widget NecessitiesIcon;

    if (widget.state is ListDonationsState) {
      activeIndex = 2;
      menuRadialPosition = size.width * 0.5 - buttomSize / 2;
      curvePosition = 0;
    }

    if (widget.state is ListNecessitiesState) {
      activeIndex = 1;
      menuRadialPosition = size.width * 0.17 - buttomSize / 2;
      curvePosition = -size.width * 0.33;
    }

    if (widget.state is ListMissingPersonsState) {
      activeIndex = 3;
      menuRadialPosition = size.width * 0.83 - buttomSize / 2;
      curvePosition = size.width * 0.33;
    }

    double movePos = curvePosition;

    print(activeIndex);

    Widget menuRadial = RadialMenu(
      showOpenButtons: showOpenButtons,
      opened: menuOpened,
      optionButtons: openMenuButtons,
      mainButton: AnimatedPositioned(
        curve: Curves.ease,
        duration: const Duration(milliseconds: 300),
        left: menuRadialPosition,
        child: SizedBox(
          height: buttomSize,
          width: buttomSize,
          child: FittedBox(
            child: FloatingActionButton(
              backgroundColor: orangeColor,
              child: Offstage(
                offstage: menuOpened,
                child: Icon(Humane.close),
              ),
              // child: const Icon(Humane.donate),
              elevation: 0.1,
              onPressed: () async {
                setState(() {
                  menuOpened = !menuOpened;
                  showOpenButtons = true;
                });
                if (!menuOpened) {
                  openAnimationController.forward();
                } else {
                  await Future.delayed(const Duration(seconds: 1));
                  openAnimationController.reverse();
                  setState(() {
                    showOpenButtons = false;
                  });
                }
              },
            ),
          ),
        ),
      ),
    );

    Widget openMenuTitle = Center(
      heightFactor: 5,
      child: Opacity(
        opacity: (1 - openAnimation.value),
        child: const Padding(
          padding: EdgeInsets.symmetric(horizontal: 50.0),
          child: Text(
            "What king of donation do you want to make?",
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white, fontSize: 22),
          ),
        ),
      ),
    );

    Widget blackBackground = Container(
      width: size.width,
      height: size.height,
      color: Colors.black.withAlpha((200 * (1 - openAnimation.value)).toInt()),
    );

    Widget mainButton = Align(
      alignment: Alignment.bottomLeft,
      child: SizedBox(
        width: size.width,
        height: size.height,
        child: Transform.translate(
            offset: Offset(0, (size.height / 2.55 * (openAnimation.value)) + (size.height / 10) * (1 - openAnimation.value)),
            child: menuRadial),
      ),
    );

    Widget menuBackground = Align(
      alignment: Alignment.bottomCenter,
      child: TweenAnimationBuilder(
        curve: Curves.ease,
        duration: const Duration(milliseconds: 300),
        tween: Tween<double>(begin: prevPos, end: curvePosition),
        builder: (BuildContext context, double value, Widget? child) {
          return CustomPaint(
            size: Size(size.width, menuSize),
            painter: MenuBackground(upDownAnimation: openAnimation.value, horizontalAnimation: value),
          );
        },
      ),
    );

    Widget sideButtons = Offstage(
      offstage: !menuOpened,
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          width: size.width,
          height: 70,
          child: Padding(
            padding: const EdgeInsets.only(top: 10.0),
            child: Row(
              children: [
                _buildSideButton(
                    activeIndex == 1, size, Offset(activeIndex == 1 ? -8 : -6, activeIndex == 1 ? -29 : 0), "Necessities", Humane.help, () {
                  BlocProvider.of<ListActionsBloc>(context).add(OpenNecessitiesEvent());
                }),
                _buildSideButton(activeIndex == 2, size, Offset(1, activeIndex == 2 ? -31 : 0), "Donations", Humane.donate, () {
                  BlocProvider.of<ListActionsBloc>(context).add(OpenDonationEvent());
                }),
                _buildSideButton(activeIndex == 3, size, Offset(3, activeIndex == 3 ? -31 : 0), "Missing Persons", Humane.find, () {
                  BlocProvider.of<ListActionsBloc>(context).add(OpenMissingPersonsEvent());
                })
              ],
            ),
          ),
        ),
      ),
    );

    return Stack(
      children: [menuBackground, blackBackground, openMenuTitle, mainButton, sideButtons],
    );
  }

  Widget _buildSideButton(bool active, Size size, Offset translateOffset, String text, IconData icon, onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: size.width * 0.33,
        child: Column(
          children: [
            Transform.translate(
              offset: translateOffset,
              child: Icon(
                icon,
                size: (active ? 35 : 22),
                color: Colors.white,
              ),
            ),
            SizedBox(
              height: 25,
              child: Text(
                text,
                style: TextStyle(fontWeight: FontWeight.normal, color: Colors.white),
              ),
            ),
          ],
        ),
      ),
    );
  }

  List<Widget> openMenuButtons = [
    FloatingActionButton(
      backgroundColor: Colors.red,
      child: const Icon(Humane.clothes),
      elevation: 0,
      onPressed: () async {
        print('hey');
      },
    ),
    FloatingActionButton(
      backgroundColor: Colors.green,
      child: const Icon(Humane.sleep),
      elevation: 0,
      onPressed: () async {
        print('hey');
      },
    ),
    FloatingActionButton(
      backgroundColor: Colors.orange,
      child: Transform.translate(offset: Offset(-5, 0), child: const Icon(Humane.furniture)),
      elevation: 0,
      onPressed: () async {
        print('hey');
      },
    ),
    FloatingActionButton(
      backgroundColor: Colors.blue,
      child: const Icon(Humane.food),
      elevation: 0,
      onPressed: () async {
        print('hey');
      },
    )
  ];

  @override
  void dispose() {
    openAnimationController.dispose();
    super.dispose();
  }
}
