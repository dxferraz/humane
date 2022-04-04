import 'package:flutter/material.dart';
import 'package:humane/icons.dart';

class FilterButton extends StatelessWidget {
  final VoidCallback openDrawer;
  const FilterButton({Key? key, required this.openDrawer}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent.withOpacity(0.1),
      borderRadius: BorderRadius.circular(50),
      child: InkWell(
        borderRadius: BorderRadius.circular(50),
        radius: 100,
        splashColor: Theme.of(context).secondaryHeaderColor,
        onTap: openDrawer,
        child: const Padding(
          padding: EdgeInsets.all(8.0),
          child: Icon(
            Humane.filter,
            size: 25,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
