import 'package:flutter/material.dart';

class MissingPersonsList extends StatefulWidget {
  MissingPersonsList({Key? key}) : super(key: key);

  @override
  State<MissingPersonsList> createState() => _MissingPersonsListState();
}

class _MissingPersonsListState extends State<MissingPersonsList> with AutomaticKeepAliveClientMixin<MissingPersonsList> {
  @override
  bool shouldKeepAlive = true;
  @override
  bool get wantKeepAlive => shouldKeepAlive;

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return Container(
      child: Text("Missing Persons"),
    );
  }
}
