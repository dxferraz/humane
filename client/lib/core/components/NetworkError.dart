import 'package:flutter/material.dart' hide Title;
import 'package:flutter_svg/flutter_svg.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/core/components/Title.dart';

class NetworkError extends StatelessWidget {
  final String? message;

  const NetworkError({Key? key, this.message}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: 0.75,
      child: Column(mainAxisAlignment: MainAxisAlignment.center, crossAxisAlignment: CrossAxisAlignment.center, children: [
        SvgPicture.asset(
          "assets/icons/no-connection.svg",
          width: 120,
        ),
        Padding(
          padding: const EdgeInsets.all(50.0),
          child: Title(
            color: appDarkBlue,
            text: message ?? "",
            align: TextAlign.center,
          ),
        ),
      ]),
    );
  }
}
