import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/app.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/core/theme/themeConstants.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';
import 'package:humane/features/listActions/presentation/bloc/ListActionsBloc.dart';
import 'package:humane/features/listActions/presentation/components/SearchMode.dart';
import 'package:humane/icons.dart';
import 'package:material_floating_search_bar/material_floating_search_bar.dart';
import 'package:implicitly_animated_list/implicitly_animated_list.dart';

class TopMenu extends StatefulWidget {
  final GlobalKey<ScaffoldState> drawersKey;

  const TopMenu({Key? key, required this.drawersKey}) : super(key: key);

  @override
  State<TopMenu> createState() => _TopMenuState();
}

class _TopMenuState extends State<TopMenu> {
  final controller = FloatingSearchBarController();
  SearchModel model = SearchModel();
  final SignUserBloc _userBloc = getIt<SignUserBloc>();

  @override
  void initState() {
    _userBloc.add(AmISignedInEvent());
    model.addListener(() {
      setState(() {});
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    List<Widget> actions = [
      FloatingSearchBarAction.searchToClear(
        showIfClosed: false,
      ),
    ];

    Widget buildItem(BuildContext context, dynamic query) {
      return Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          InkWell(
            onTap: () {
              model.onQueryChanged(query, controller);
              FloatingSearchBar.of(context)?.close();
            },
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 5),
              child: Row(
                children: [
                  const SizedBox(
                    width: 36,
                    child: AnimatedSwitcher(duration: Duration(milliseconds: 500), child: Icon(Icons.history, key: Key('history'))),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          query,
                        ),
                      ],
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      model.clearItem(query);
                    },
                    child: const SizedBox(
                      width: 45,
                      height: 50,
                      child: AnimatedSwitcher(duration: Duration(milliseconds: 500), child: Icon(Icons.close)),
                    ),
                  ),
                ],
              ),
            ),
          ),
          if (model.suggestions.isNotEmpty && query != model.suggestions.last)
            const Divider(height: 0),
        ],
      );
    }

    List<Widget> filterButton = [
      SizedBox(
        height: 32,
        child: ElevatedButton(
          style: ElevatedButton.styleFrom(primary: appDarkBlue, shape: const CircleBorder(), padding: const EdgeInsets.all(15)),
          onPressed: () {
            widget.drawersKey.currentState!.openEndDrawer();
          },
          child: Transform.translate(
            offset: const Offset(0, isWebPlatform ? 0 : -9),
            child: const Icon(
              Humane.filter,
              size: 20,
              color: Colors.white,
            ),
          ),
        ),
      ),
    ];

    Widget buildExpandableBody() {
      return Container(
        padding: const EdgeInsets.symmetric(vertical: 16),
        child: Material(
          color: Colors.white,
          borderRadius: BorderRadius.circular(8),
          clipBehavior: Clip.antiAlias,
          child: ImplicitlyAnimatedList(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemData: model.suggestions,
            insertDuration: const Duration(milliseconds: 700),
            itemBuilder: (buildContext, String i) {
              return buildItem(buildContext, i);
            },
          ),
        ),
      );
    }

    return Stack(
      children: [
        Container(
          color: Colors.white,
          child: SizedBox(
            height: 70,
            child: Row(
              children: [
                SizedBox(
                  width: size.width * 0.2,
                  child: Padding(
                    padding: const EdgeInsets.only(
                        top: 25, right: 10, left: 10, bottom: 10),
                    child: Center(
                      child: FloatingActionButton(
                        heroTag: "DrawerMenu",
                        elevation: 0,
                        backgroundColor: Colors.transparent,
                        onPressed: () {
                          widget.drawersKey.currentState!.openDrawer();
                        },
                        child: BlocBuilder<SignUserBloc, SignUserState>(
                          bloc: _userBloc,
                          builder: (BuildContext context, SignUserState state) {
                            // TODO: add fallback if user doesn't have a thumbnail
                            if (state is SignedUser) {
                              return SizedBox(
                                width: 35,
                                child: ClipOval(
                                  //TODO: use image in base64 to avoid redownload
                                  child: Image.network(state.user.thumbnail!),
                                ),
                              );
                            }
                            return const Icon(
                              Humane.menu,
                              size: 25,
                              color: appDarkBlue,
                            );
                          },
                        ),
                      ),
                    ),
                  ),
                ),
                SizedBox(
                  width: size.width * 0.6,
                ),
                SizedBox(
                  width: size.width * 0.2,
                  child: Padding(
                    padding: const EdgeInsets.only(
                        top: 15, right: 10, left: 10, bottom: 0),
                    child: Center(
                      child: FloatingActionButton(
                        heroTag: "MessagesButton",
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
        Center(
          child: SizedBox(
            width: size.width * 0.6,
            child: Padding(
              padding: const EdgeInsets.only(top: 22),
              child: FloatingSearchBar(
                height: 42,
                automaticallyImplyDrawerHamburger: false,
                automaticallyImplyBackButton: false,
                leadingActions: filterButton,
                margins: const EdgeInsets.all(0),
                backdropColor: Colors.transparent,
                controller: controller,
                clearQueryOnClose: false,
                hint: 'Search...',
                iconColor: Colors.grey,
                transitionDuration: const Duration(milliseconds: 800),
                transitionCurve: Curves.easeInOutCubic,
                physics: const BouncingScrollPhysics(),
                openAxisAlignment: 0.0,
                actions: actions,
                progress: null,
                debounceDelay: const Duration(milliseconds: 1000),
                onQueryChanged: (String query) {
                  model.onQueryChanged(query, controller);
                },
                onKeyEvent: (KeyEvent keyEvent) {
                  if (keyEvent.logicalKey == LogicalKeyboardKey.escape) {
                    controller.close();
                    return;
                  }
                },
                onFocusChanged: (bool focus) {
                  controller.query = model.query;
                },
                closeOnBackdropTap: true,
                scrollPadding: EdgeInsets.zero,
                transition: CircularFloatingSearchBarTransition(spacing: 16),
                builder: (context, _) => buildExpandableBody(),
              ),
            ),
          ),
        ),
        BlocBuilder<ListActionsBloc, ListActionsState>(
          bloc: getIt<ListActionsBloc>(),
          builder: (BuildContext context, state) {
            return Offstage(
              offstage: state is! LoadingDonationsState,
              child: const Padding(
                padding: EdgeInsets.only(top: 70),
                child: LinearProgressIndicator(),
              ),
            );
          },
        ),
      ],
    );
  }
}
