import 'package:flutter/material.dart';

class CategoryChip extends StatelessWidget {
  final String category;
  final Gradient? gradient;
  final VoidCallback? onPressed;

  const CategoryChip({
    Key? key,
    required this.category,
    this.onPressed,
    this.gradient,
  }) : super(key: key);

  MaterialColor getCategoryColor(String name) {
    switch (name) {
      case "Home":
        return Colors.green;
      case "Clothes":
        return Colors.red;
      case "Furniture":
        return Colors.orange;
      case "Food":
      default:
        return Colors.blue;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          margin: const EdgeInsets.only(right: 8),
          padding: const EdgeInsets.only(top: 2, bottom: 2, left: 8, right: 8),
          decoration: BoxDecoration(
              gradient: LinearGradient(colors: [getCategoryColor(category).withOpacity(0.75), getCategoryColor(category).withOpacity(0.9)]),
              borderRadius: BorderRadius.circular(18),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey[500]!,
                  offset: const Offset(0.0, 1.5),
                  blurRadius: 1.5,
                ),
              ]),
          child: Material(
            color: Colors.transparent,
            child: InkWell(
                onTap: onPressed ?? () {},
                child: Center(
                  child: Text(
                    category,
                    style: const TextStyle(color: Colors.white, fontSize: 12),
                  ),
                )),
          ),
        ),
      ],
    );
  }
}
