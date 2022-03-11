import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:humane/Utils/constants.dart';
import 'package:websafe_svg/websafe_svg.dart';

Widget introPage({
  required String urlImage,
  required String title,
  required String subtitle,
}) =>
    Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          height: 300,
          child: SvgPicture.asset(
            urlImage,
            width: 300,
          ),
        ),
        const SizedBox(height: 60),
        Text(
          title,
          style: const TextStyle(
            color: appGrey,
            fontFamily: 'Cairo',
            fontSize: 28,
            fontWeight: FontWeight.w700,
          ),
        ),
        const SizedBox(height: 20),
        Container(
          padding: const EdgeInsets.only(
            bottom: 10,
            right: 30,
            top: 10,
            left: 30,
          ),
          child: Text(
            subtitle,
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: appDarkBlue,
              fontSize: 20,
              fontFamily: 'Ubuntu',
            ),
          ),
        ),
      ],
    );
