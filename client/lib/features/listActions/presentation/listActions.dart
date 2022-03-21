import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/listActions/bloc/ListActionsBloc.dart';
import 'package:humane/features/listActions/components/MainMenu.dart';
import 'package:humane/features/listActions/components/TopMenu.dart';

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

    return BlocProvider<ListActionsBloc>(
      create: (BuildContext context) => getIt<ListActionsBloc>(),
      child: Scaffold(
        backgroundColor: Colors.white,
        body: BlocBuilder<ListActionsBloc, ListActionsState>(
          builder: (BuildContext context, state) {
            return Stack(children: [
              TopMenu(),
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
