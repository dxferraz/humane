import 'package:flutter/material.dart' hide Card, Title;
import 'package:humane/features/listActions/presentation/components/DonationList.dart';
import 'package:humane/features/listActions/presentation/components/FilterDrawer.dart';
import 'package:humane/features/listActions/presentation/components/MainDrawer.dart';
import 'package:humane/features/listActions/presentation/components/MainMenu.dart';
import 'package:humane/features/listActions/presentation/components/MissingPersonsList.dart';
import 'package:humane/features/listActions/presentation/components/NecessitiesList.dart';
import 'package:humane/features/listActions/presentation/components/TopMenu.dart';

class ListActions extends StatefulWidget {
  const ListActions({Key? key}) : super(key: key);

  @override
  ListRecentPostsState createState() => ListRecentPostsState();
}

class ListRecentPostsState extends State<ListActions> with SingleTickerProviderStateMixin {
  final GlobalKey<ScaffoldState> _drawersKey = GlobalKey(); // Create a key
  final int _currentIndex = 0;
  late PageController _pageController;
  late List<Widget> pages;

  @override
  void initState() {
    _pageController = PageController(initialPage: _currentIndex);
    pages = [
      const DonationList(),
      const NecessitiesList(),
      const MissingPersonsList(),
    ];

    super.initState();
  }

  void goToPage(int index) {
    if (_pageController.hasClients) {
      _pageController.jumpToPage(index);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _drawersKey,
      drawer: const MainDrawer(),
      endDrawer: const FilterDrawer(),
      backgroundColor: const Color.fromARGB(255, 224, 233, 242),
      body: Stack(
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 70.0, bottom: 70),
            child: PageView(children: pages, controller: _pageController, physics: const NeverScrollableScrollPhysics()),
          ),
          TopMenu(drawersKey: _drawersKey),
          MainMenu(onTabChange: goToPage)
        ],
      ),
    );
  }
}
