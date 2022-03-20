import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/listActions/bloc/ListActionsBloc.dart';
import 'package:humane/features/listActions/components/MainMenu.dart';
import 'package:humane/icons.dart';

class ListActions extends StatefulWidget {
  @override
  ListRecentPostsState createState() => ListRecentPostsState();
}

class ListRecentPostsState extends State<ListActions> with SingleTickerProviderStateMixin {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    Widget topMenu = Container(
      child: SizedBox(
        height: 65,
        child: Row(
          children: [
            Container(
              width: size.width * 0.2,
              child: Padding(
                padding: EdgeInsets.only(top: 35, right: 10, left: 10, bottom: 10),
                child: Center(
                  child: FloatingActionButton(
                    elevation: 0,
                    backgroundColor: Colors.transparent,
                    onPressed: () {
                      print('hey');
                    },
                    child: const Icon(
                      Humane.menu,
                      size: 30,
                      color: appDarkBlue,
                    ),
                  ),
                ),
              ),
            ),
            Container(
              width: size.width * 0.6,
              child: Padding(
                padding: const EdgeInsets.only(top: 35, right: 50, left: 50, bottom: 0),
                child: Image.asset('assets/images/logoName.png'),
              ),
            ),
            Container(
              width: size.width * 0.2,
              child: Padding(
                padding: EdgeInsets.only(top: 30, right: 10, left: 10, bottom: 0),
                child: Center(
                  child: FloatingActionButton(
                    elevation: 0,
                    backgroundColor: Colors.transparent,
                    onPressed: () {
                      print('hey');
                    },
                    child: const Icon(
                      Humane.message,
                      size: 35,
                      color: appDarkBlue,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
    return BlocProvider<ListActionsBloc>(
      create: (BuildContext context) => getIt<ListActionsBloc>(),
      child: Scaffold(
        backgroundColor: Colors.white,
        body: BlocBuilder<ListActionsBloc, ListActionsState>(
          builder: (BuildContext context, state) {
            return Stack(children: [
              topMenu,
              MainMenu(
                state: state,
              ),
            ]);
          },
        ),
      ),
    );
  }
}
