import 'package:circular_bottom_navigation/circular_bottom_navigation.dart';
import 'package:circular_bottom_navigation/tab_item.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_svg/svg.dart';
import 'package:humane/Components/BottomTabNavigator/bottomTabNavigator_model.dart';
import 'package:humane/Utils/useCircularBottomNavigationController.dart';
import 'package:humane/Views/dashboard/explore.dart';
import 'package:humane/Views/dashboard/myStorages.dart';
import 'package:humane/Views/dashboard/profile.dart';
import 'package:humane/icons.dart';
import 'package:humane/services/service_locator.dart';
import 'package:scoped_model/scoped_model.dart';

class Home extends HookWidget {
  final List<Widget> screens = [MyStorage(), Explore(), Profile()];

  int selectedPos = 1;
  double bottomNavBarHeight = 60;
  late CircularBottomNavigationController _navigationController;

  List<TabItem> tabItems = List.of([
    new TabItem(HumaneIcons.warehouse, "My Storages", Color(0xFFFF2E63), labelStyle: TextStyle(fontFamily: "Montserrat-regular")),
    new TabItem(HumaneIcons.search, "Explore", Color(0xFFFF2E63), labelStyle: TextStyle(fontFamily: "Montserrat-regular")),
    new TabItem(HumaneIcons.user, "Profile", Color(0xFFFF2E63), labelStyle: TextStyle(fontFamily: "Montserrat-regular")),
  ]);

  Widget bottomNav(HomeModel model) {
    return CircularBottomNavigation(
      tabItems,
      controller: _navigationController,
      barHeight: bottomNavBarHeight,
      barBackgroundColor: Colors.white,
      animationDuration: const Duration(milliseconds: 300),
      selectedCallback: (int? index) {
        if (index != null) {
          model.setSelectedPosition(index);
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    _navigationController = useCircularBottomNavigationController(selectedPos);
    return ScopedModel<HomeModel>(
        model: getIt<HomeModel>(),
        child: Scaffold(
          body: ScopedModelDescendant<HomeModel>(
            builder: (context, child, model) => Stack(
              children: <Widget>[
                Positioned(
                  top: 0,
                  right: 0,
                  child: Container(
                    child: SvgPicture.asset("assets/icons/detailTop.svg", width: 220, semanticsLabel: 'Illustration'),
                  ),
                ),
                IndexedStack(
                  index: model.selectedPosition,
                  children: screens,
                ),
                Align(alignment: Alignment.bottomCenter, child: bottomNav(model))
              ],
            ),
          ),
        ));
  }
}
