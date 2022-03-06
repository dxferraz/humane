import 'package:flutter/material.dart';
import 'package:humane/icons.dart';

class FilterButton extends StatelessWidget {
  VoidCallback openDrawer;
  FilterButton({required this.openDrawer});

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
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Icon(
            HumaneIcons.filter,
            size: 25,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
