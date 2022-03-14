import 'package:flutter/material.dart' hide Title;
import 'package:flutter_svg/flutter_svg.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/core/components/Title.dart';

Widget introPage({
  required BuildContext context,
  required String urlImage,
  required String title,
  required String subtitle,
}) =>
    Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const SizedBox(height: 60),
        SizedBox(
          height: MediaQuery.of(context).size.height * 0.25,
          child: SvgPicture.asset(
            urlImage,
            width: 200,
          ),
        ),
        const SizedBox(height: 20),
        Title(
          text: title,
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
