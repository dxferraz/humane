import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:humane/core/theme/themeConstants.dart';
import 'package:humane/icons.dart';
import 'package:material_floating_search_bar/material_floating_search_bar.dart';

class TopMenu extends StatefulWidget {
  GlobalKey<ScaffoldState> drawersKey;

  TopMenu({Key? key, required this.drawersKey}) : super(key: key);

  @override
  State<TopMenu> createState() => _TopMenuState();
}

class _TopMenuState extends State<TopMenu> {
  final controller = FloatingSearchBarController();

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    List<Widget> actions = [
      FloatingSearchBarAction.searchToClear(
        showIfClosed: false,
      ),
    ];

    Widget buildBody() {
      return Column(
          // children: [
          //   Expanded(
          //     child: IndexedStack(
          //       index: min(index, 2),
          //       children: const [
          //         Map(),
          //         SomeScrollableContent(),
          //         FloatingSearchAppBarExample(),
          //       ],
          //     ),
          //   ),
          //   buildBottomNavigationBar(),
          // ],
          );
    }

    Widget buildExpandableBody() {
      return Container(
          //   padding: const EdgeInsets.symmetric(vertical: 16),
          //   child: Material(
          //     color: Colors.white,
          //     borderRadius: BorderRadius.circular(8),
          //     clipBehavior: Clip.antiAlias,
          //     child: ImplicitlyAnimatedList<Place>(
          //       shrinkWrap: true,
          //       physics: const NeverScrollableScrollPhysics(),
          //       items: model.suggestions,
          //       insertDuration: const Duration(milliseconds: 700),
          //       itemBuilder: (context, animation, item, i) {
          //         return SizeFadeTransition(
          //           animation: animation,
          //           child: buildItem(context, item),
          //         );
          //       },
          //       updateItemBuilder: (context, animation, item) {
          //         return FadeTransition(
          //           opacity: animation,
          //           child: buildItem(context, item),
          //         );
          //       },
          //       areItemsTheSame: (a, b) => a == b,
          //     ),
          //   ),
          );
    }

    return Stack(
      children: [
        Align(
          alignment: Alignment.topCenter,
          child: Container(
            width: size.width,
            height: 110,
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                stops: [0.15, 0.35],
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
                colors: [
                  Color.fromARGB(0, 224, 233, 242),
                  Color.fromARGB(255, 224, 233, 242),
                ],
              ),
            ),
          ),
        ),
        Container(
          color: Colors.white,
          child: SizedBox(
            height: 70,
            child: Row(
              children: [
                SizedBox(
                  width: size.width * 0.2,
                  child: Padding(
                    padding: const EdgeInsets.only(top: 25, right: 10, left: 10, bottom: 10),
                    child: Center(
                      child: FloatingActionButton(
                        elevation: 0,
                        backgroundColor: Colors.transparent,
                        onPressed: () {
                          widget.drawersKey.currentState!.openDrawer();
                        },
                        child: const Icon(
                          Humane.menu,
                          size: 25,
                          color: appDarkBlueColor,
                        ),
                      ),
                    ),
                  ),
                ),
                SizedBox(
                  width: size.width * 0.6,
                  child: Padding(
                    padding: const EdgeInsets.only(top: 15),
                    child: FloatingSearchBar(
                      automaticallyImplyDrawerHamburger: false,
                      leadingActions: [
                        ElevatedButton(
                          style: ElevatedButton.styleFrom(
                              primary: appDarkBlueColor, shape: const CircleBorder(), padding: const EdgeInsets.all(15)),
                          onPressed: () {
                            widget.drawersKey.currentState!.openEndDrawer();
                          },
                          child: const Icon(
                            Humane.filter,
                            size: 20,
                            color: Colors.white,
                          ),
                        ),
                      ],
                      margins: const EdgeInsets.all(0),
                      backdropColor: Colors.transparent,
                      automaticallyImplyBackButton: false,
                      controller: controller,
                      clearQueryOnClose: true,
                      hint: 'Search...',
                      iconColor: Colors.grey,
                      transitionDuration: const Duration(milliseconds: 800),
                      transitionCurve: Curves.easeInOutCubic,
                      physics: const BouncingScrollPhysics(),
                      openAxisAlignment: 0.0,
                      actions: actions,
                      progress: null,
                      debounceDelay: const Duration(milliseconds: 500),
                      onQueryChanged: (String query) {},
                      onKeyEvent: (KeyEvent keyEvent) {
                        if (keyEvent.logicalKey == LogicalKeyboardKey.escape) {
                          controller.query = "";
                          controller.close();
                        }
                      },
                      onFocusChanged: (bool focus) {},
                      closeOnBackdropTap: true,
                      scrollPadding: EdgeInsets.zero,
                      transition: CircularFloatingSearchBarTransition(spacing: 16),
                      builder: (context, _) => buildExpandableBody(),
                      body: buildBody(),
                    ),
                  ),
                ),
                SizedBox(
                  width: size.width * 0.2,
                  child: Padding(
                    padding: const EdgeInsets.only(top: 15, right: 10, left: 10, bottom: 0),
                    child: Center(
                      child: FloatingActionButton(
                        elevation: 0,
                        backgroundColor: Colors.transparent,
                        onPressed: () {},
                        child: const Icon(
                          Humane.message,
                          size: 25,
                          color: appDarkBlueColor,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
