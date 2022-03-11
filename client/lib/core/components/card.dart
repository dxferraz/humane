// import 'package:flutter/material.dart';
// import 'package:flutter_hooks/flutter_hooks.dart';
// import 'package:humane/Components/shared_components/Features.dart';
// import 'package:humane/Components/shared_components/priceChip.dart';
// import 'package:angles/angles.dart';

// class Card extends HookWidget {
//   String title;
//   String subtitle;
//   String price;
//   List<Object> features;
//   int index;
//   late AnimationController _controller;
//   late Animation _moveRight;
//   late CurvedAnimation _curve;

//   Card({required this.title, this.subtitle = "", required this.price, required this.features, required this.index});

//   @override
//   Widget build(BuildContext context) {
//     index++;
//     if (index > 4) {
//       index = 0;
//     }
//     _controller = useAnimationController(duration: Duration(milliseconds: index * 700));
//     _curve = CurvedAnimation(parent: _controller, curve: Curves.easeOut);
//     _moveRight = Tween(begin: -index * 100.0, end: 0.0).animate(_curve);
//     _controller.forward();

//     return Stack(
//       children: <Widget>[
//         AnimatedBuilder(
//           animation: _controller,
//           builder: (BuildContext context, Widget? child) => Transform.translate(
//             offset: Offset(_moveRight.value, 0),
//             child: Container(
//               margin: EdgeInsets.only(left: 25, right: 25, bottom: 15),
//               decoration: new BoxDecoration(
//                 color: Colors.white.withOpacity(0.9),
//                 borderRadius: BorderRadius.all(Radius.circular(10)),
//                 boxShadow: [
//                   BoxShadow(
//                     color: Colors.black.withOpacity(0.1),
//                     blurRadius: 19.0, // has the effect of softening the shadow
//                     spreadRadius: 1.0, // has the effect of extending the shadow
//                     offset: Offset(
//                       1.0, // horizontal, move right 10
//                       1.0, // vertical, move down 10
//                     ),
//                   )
//                 ],
//               ),
//               child: InkWell(
//                 splashColor: Theme.of(context).primaryColor,
//                 highlightColor: Theme.of(context).primaryColor.withOpacity(0.6),
//                 borderRadius: BorderRadius.circular(11),
//                 onTap: () {},
//                 child: Column(
//                   mainAxisAlignment: MainAxisAlignment.center,
//                   crossAxisAlignment: CrossAxisAlignment.stretch,
//                   children: <Widget>[
//                     Container(
//                       color: Colors.transparent,
//                       padding: EdgeInsets.only(left: 15, right: 15, top: 15, bottom: 8),
//                       child: Row(
//                         crossAxisAlignment: CrossAxisAlignment.center,
//                         mainAxisAlignment: MainAxisAlignment.start,
//                         children: <Widget>[
//                           Expanded(
//                             child: Column(
//                               mainAxisAlignment: MainAxisAlignment.center,
//                               crossAxisAlignment: CrossAxisAlignment.start,
//                               children: <Widget>[
//                                 Text(
//                                   title,
//                                   style: TextStyle(fontFamily: "Montserrat-bold", fontSize: 16),
//                                 ),
//                                 Features(features: features, key: new Key('1'))
//                               ],
//                             ),
//                           ),
//                           PriceChip(
//                             price: price,
//                           )
//                         ],
//                       ),
//                     ),
//                     Padding(
//                       padding: EdgeInsets.only(bottom: 10, right: 15, left: 15),
//                       child: Text(
//                         subtitle,
//                         style: TextStyle(fontSize: 12),
//                       ),
//                     ),
//                     ClipRRect(
//                       borderRadius: BorderRadius.only(bottomLeft: Radius.circular(10), bottomRight: Radius.circular(10)),
//                       child: Image.network(
//                         'https://bluebirdstorage.ca/assets/img/article/about-us.jpg',
//                       ),
//                     ),
//                   ],
//                 ),
//               ),
//             ),
//           ),
//         ),
//         Transform.rotate(
//           angle: Angle.fromDegrees(-45.0).radians,
//           child: null,
//         )
//       ],
//     );
//   }
// }
