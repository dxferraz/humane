import 'package:flutter/material.dart';

class FilterDrawer extends StatefulWidget {
  FilterDrawer({Key? key}) : super(key: key);

  @override
  State<FilterDrawer> createState() => _FilterDrawerState();
}

class _FilterDrawerState extends State<FilterDrawer> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          Container(
            child: Text("Filter"),
          ),
        ],
      ),
    );
  }
}
