import 'package:flutter/material.dart';

class NecessitiesList extends StatefulWidget {
  NecessitiesList({Key? key}) : super(key: key);

  @override
  State<NecessitiesList> createState() => _NecessitiesListState();
}

class _NecessitiesListState extends State<NecessitiesList> with AutomaticKeepAliveClientMixin<NecessitiesList> {
  @override
  bool shouldKeepAlive = true;
  @override
  bool get wantKeepAlive => shouldKeepAlive;

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return Container(
      child: Text("Necessities"),
    );
  }
}
