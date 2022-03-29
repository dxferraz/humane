import 'package:flutter/material.dart';

class NecessitiesList extends StatefulWidget {
  NecessitiesList({Key? key}) : super(key: key);

  @override
  State<NecessitiesList> createState() => _NecessitiesListState();
}

class _NecessitiesListState extends State<NecessitiesList> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("Necessities"),
    );
  }
}
