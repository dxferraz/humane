import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/core/components/RadialButtons.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/listActions/presentation/bloc/ListActionsBloc.dart';
import 'package:humane/features/listActions/presentation/components/MenuBackground.dart';
import 'package:humane/icons.dart';

class MainMenu extends StatefulWidget {
  final ListActionsState state;

  const MainMenu({Key? key, required this.state}) : super(key: key);

  @override
  _MainMenuState createState() => _MainMenuState();
}

class _MainMenuState extends State<MainMenu> with TickerProviderStateMixin {
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

    if (widget.state is ListInitialState || (widget.state is LoadedDonationsState)) {
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
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [
                    orangeColor,
                    Colors.orange,
                  ],
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.2),
                    spreadRadius: 3,
                    blurRadius: 4,
                    offset: Offset(0, 5), // changes position of shadow
                  ),
                ],
                shape: BoxShape.circle,
              ),
              child: FloatingActionButton(
                onPressed: () async {
                  if (activeIndex != 2) return;
                  setState(() {
                    menuOpened = !menuOpened;
                    showOpenButtons = true;
                  });
                  if (!menuOpened) {
                    openAnimationController.forward();
                  } else {
                    await Future.delayed(const Duration(seconds: 1));
                    openAnimationController.reverse();
                    await Future.delayed(const Duration(seconds: 1));
                    setState(() {
                      showOpenButtons = false;
                    });
                  }
                },
                backgroundColor: Colors.transparent,
                elevation: 0,
                child: Offstage(
                  offstage: menuOpened,
                  child: const Icon(Humane.close),
                ),
              ),
            ),
          ),
        ),
      ),
    );

    Widget openMenuTitle = Offstage(
      offstage: !showOpenButtons,
      child: Center(
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
      ),
    );

    Widget blackBackground = Offstage(
      offstage: !showOpenButtons,
      child: Container(
        width: size.width,
        height: size.height,
        color: Colors.black.withAlpha((200 * (1 - openAnimation.value)).toInt()),
      ),
    );
    Widget mainButton = Align(
      alignment: Alignment.bottomLeft,
      child: SizedBox(
        width: size.width,
        height: 150 + size.height * (1 - openAnimation.value),
        child: menuRadial,
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

    Widget sideButtons = BlocProvider<ListActionsBloc>(
      create: (BuildContext context) => getIt<ListActionsBloc>(),
      child: BlocBuilder<ListActionsBloc, ListActionsState>(
        builder: (context, state) {
          return Offstage(
            offstage: !menuOpened,
            child: Align(
              alignment: Alignment.bottomCenter,
              child: SizedBox(
                width: size.width,
                height: 70,
                child: Padding(
                  padding: const EdgeInsets.only(top: 10.0),
                  child: Row(
                    children: [
                      _buildSideButton(activeIndex == 1, size, Offset(activeIndex == 1 ? -8 : -6, activeIndex == 1 ? -29 : 0),
                          "Necessities", Humane.help, () {
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
        },
      ),
    );

    Widget gradient = Align(
      alignment: Alignment.bottomCenter,
      child: Container(
        width: size.width,
        height: 110,
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            stops: [0.15, 0.35],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              Color.fromARGB(0, 224, 233, 242),
              Color.fromARGB(255, 224, 233, 242),
            ],
          ),
        ),
      ),
    );

    return Stack(
      children: [gradient, menuBackground, blackBackground, openMenuTitle, mainButton, sideButtons],
    );
  }

  Widget _buildSideButton(bool active, Size size, Offset translateOffset, String text, IconData icon, onTap) {
    return GestureDetector(
      onTap: onTap,
      child: SizedBox(
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
                style: const TextStyle(fontWeight: FontWeight.normal, color: Colors.white),
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
      onPressed: () async {},
    ),
    FloatingActionButton(
      backgroundColor: Colors.green,
      child: const Icon(Humane.sleep),
      elevation: 0,
      onPressed: () async {},
    ),
    FloatingActionButton(
      backgroundColor: Colors.orange,
      child: Transform.translate(offset: const Offset(-5, 0), child: const Icon(Humane.furniture)),
      elevation: 0,
      onPressed: () async {},
    ),
    FloatingActionButton(
      backgroundColor: Colors.blue,
      child: const Icon(Humane.food),
      elevation: 0,
      onPressed: () async {},
    )
  ];

  @override
  void dispose() {
    openAnimationController.dispose();
    super.dispose();
  }
}
