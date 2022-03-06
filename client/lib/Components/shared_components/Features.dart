import 'package:flutter/material.dart';

import 'package:humane/features/lists_storages/domain/entities/Feature.dart';
import 'package:humane/icons.dart';

class Features extends StatelessWidget {
  final List<Feature> features;
  final double iconSize = 25;

  const Features({
    required Key key,
    required this.features,
  }) : super(key: key);

  Widget renderIcon(BuildContext context, Feature feature) {
    switch (feature.name) {
      case "individual_alarm":
        {
          return Icon(
            HumaneIcons.alert,
            size: iconSize,
            color: Theme.of(context).primaryColor,
          );
        }

      case "eletronic_gate_access":
        {
          return Icon(
            HumaneIcons.wifi,
            size: iconSize,
            color: Theme.of(context).primaryColor,
          );
        }

      default:
        {
          return Container();
        }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Row(
        children:
            features.map((feature) => Container(padding: EdgeInsets.only(left: 4, top: 5), child: renderIcon(context, feature))).toList());
  }
}
