import 'package:flutter/material.dart';

class MissingPersonsList extends StatefulWidget {
  const MissingPersonsList({Key? key}) : super(key: key);

  @override
  State<MissingPersonsList> createState() => _MissingPersonsListState();
}

class _MissingPersonsListState extends State<MissingPersonsList> with AutomaticKeepAliveClientMixin<MissingPersonsList> {
  bool shouldKeepAlive = true;
  @override
  bool get wantKeepAlive => shouldKeepAlive;

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return const Text("Missing Persons");
  }
}
