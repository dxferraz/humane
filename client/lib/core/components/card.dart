import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class Card extends HookWidget {
  String title;
  String subtitle;
  String? thumbnails;

  Card({required this.title, this.subtitle = "", this.thumbnails});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Container(
          margin: const EdgeInsets.only(left: 25, right: 25, bottom: 15),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.9),
            borderRadius: BorderRadius.all(Radius.circular(10)),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.1),
                blurRadius: 19.0, // has the effect of softening the shadow
                spreadRadius: 1.0, // has the effect of extending the shadow
                offset: const Offset(
                  1.0, // horizontal, move right 10
                  1.0, // vertical, move down 10
                ),
              )
            ],
          ),
          child: InkWell(
            splashColor: Theme.of(context).primaryColor,
            highlightColor: Theme.of(context).primaryColor.withOpacity(0.6),
            borderRadius: BorderRadius.circular(11),
            onTap: () {},
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Container(
                  color: Colors.transparent,
                  padding: const EdgeInsets.only(left: 15, right: 15, top: 15, bottom: 8),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Expanded(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(
                              title,
                              style: TextStyle(fontSize: 16),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(bottom: 10, right: 15, left: 15),
                  child: Text(
                    subtitle,
                    style: TextStyle(fontSize: 12),
                  ),
                ),
                ClipRRect(
                  borderRadius: BorderRadius.only(bottomLeft: Radius.circular(10), bottomRight: Radius.circular(10)),
                  child: thumbnails != null ? Image.network(thumbnails!) : Container(),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
