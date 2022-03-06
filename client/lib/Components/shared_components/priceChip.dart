import 'package:flutter/material.dart';

enum PRICE { perMonth, perDay, perSemester, perYear }

class PriceChip extends StatelessWidget {
  late final String price;
  late final Gradient gradient;
  late final VoidCallback onPressed;

  PriceChip({
    Key? key,
    required this.price,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          padding: EdgeInsets.only(top: 5, bottom: 5, left: 10, right: 10),
          decoration: BoxDecoration(
              gradient: LinearGradient(
                  colors: [Theme.of(context).primaryColor.withOpacity(0.75), Theme.of(context).primaryColor.withOpacity(0.9)]),
              borderRadius: BorderRadius.circular(18),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey[500]!,
                  offset: Offset(0.0, 1.5),
                  blurRadius: 1.5,
                ),
              ]),
          child: Material(
            color: Colors.transparent,
            child: InkWell(
                onTap: onPressed,
                child: Center(
                  child: Text(
                    '\$$price',
                    style: TextStyle(color: Colors.white, fontSize: 18),
                  ),
                )),
          ),
        ),
        Text(
          'per month',
          style: TextStyle(
            color: Colors.black87,
            fontSize: 11,
          ),
        ),
      ],
    );
  }
}
