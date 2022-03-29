import 'package:flutter/material.dart';

class MissingPersonsList extends StatefulWidget {
  MissingPersonsList({Key? key}) : super(key: key);

  @override
  State<MissingPersonsList> createState() => _MissingPersonsListState();
}

class _MissingPersonsListState extends State<MissingPersonsList> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("Missing Persons"),
    );
  }
}
