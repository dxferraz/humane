import 'package:flutter/material.dart';

class MenuBackground extends CustomPainter {
  double upDownAnimation;
  double horizontalAnimation;
  MenuBackground({required this.upDownAnimation, required this.horizontalAnimation});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint();
    var rect = Offset.zero & size;
    paint.shader = const LinearGradient(
      begin: Alignment.topCenter,
      end: Alignment.bottomCenter,
      colors: [
        Color(0xFF7f92ad),
        Color(0xFF35658a),
      ],
    ).createShader(rect);

    // final pointPaint = Paint();
    // pointPaint.color = Colors.redAccent;

    // final moveToPaint = Paint();
    // moveToPaint.color = Colors.lightGreenAccent;

    // final linePaint = Paint()
    //   ..color = Colors.purple
    //   ..style = PaintingStyle.stroke
    //   ..strokeWidth = 0.5;

    double width = size.width;
    //Left Curve down
    width = 430;
    double horizontalAnim = horizontalAnimation + (size.width - width) / 2;

    Path menuPath = Path();
    // Path linePath = Path();

    //Initial Point
    Offset leftStartCurveDown = Offset(width * 0.36 + horizontalAnim, 0);
    // canvas.drawCircle(leftStartCurveDown, 1, moveToPaint);
    menuPath.moveTo(leftStartCurveDown.dx, leftStartCurveDown.dy);
    // linePath.moveTo(leftStartCurveDown.dx, leftStartCurveDown.dy);

    Offset finalLeftStartCurveDown = Offset(width * 0.396 + horizontalAnim, size.height * 0.15 * upDownAnimation);
    Offset controlLeftStartCurveDown = Offset(width * 0.39 + horizontalAnim, size.height * -0.01 * upDownAnimation);
    // canvas.drawCircle(finalLeftStartCurveDown, 1, moveToPaint);
    // canvas.drawCircle(controlLeftStartCurveDown, 1, pointPaint);
    // linePath.quadraticBezierTo(
    //     controlLeftStartCurveDown.dx, controlLeftStartCurveDown.dy, finalLeftStartCurveDown.dx, finalLeftStartCurveDown.dy);
    menuPath.quadraticBezierTo(
        controlLeftStartCurveDown.dx, controlLeftStartCurveDown.dy, finalLeftStartCurveDown.dx, finalLeftStartCurveDown.dy);

    //LeftMainCurve
    Offset middlePoint = Offset(width * 0.5 + horizontalAnim, size.height * 0.6 * upDownAnimation);
    Offset controlLeftMainCurve = Offset(width * 0.42 + horizontalAnim, size.height * 0.57 * upDownAnimation);
    // canvas.drawCircle(controlLeftMainCurve, 1, pointPaint);
    // canvas.drawCircle(middlePoint, 1, moveToPaint);
    // linePath.quadraticBezierTo(controlLeftMainCurve.dx, controlLeftMainCurve.dy, middlePoint.dx, middlePoint.dy);
    menuPath.quadraticBezierTo(controlLeftMainCurve.dx, controlLeftMainCurve.dy, middlePoint.dx, middlePoint.dy);

    //RightMainCurve
    Offset finalRightStartCurveDown = Offset(width * 0.604 + horizontalAnim, size.height * 0.15 * upDownAnimation);
    Offset controlRightMainCurve = Offset(width * 0.580 + horizontalAnim, size.height * 0.57 * upDownAnimation);
    // canvas.drawCircle(finalRightStartCurveDown, 1, moveToPaint);
    // canvas.drawCircle(controlRightMainCurve, 1, pointPaint);
    // linePath.quadraticBezierTo(
    //     controlRightMainCurve.dx, controlRightMainCurve.dy, finalRightStartCurveDown.dx, finalRightStartCurveDown.dy);
    menuPath.quadraticBezierTo(
        controlRightMainCurve.dx, controlRightMainCurve.dy, finalRightStartCurveDown.dx, finalRightStartCurveDown.dy);

    //Left Curve down
    Offset rightStartCurveDown = Offset(width * 0.64 + horizontalAnim, 0 * upDownAnimation);
    Offset controlRightStartCurveDown = Offset(width * 0.61 + horizontalAnim, size.height * -0.01 * upDownAnimation);
    // canvas.drawCircle(rightStartCurveDown, 1, moveToPaint);
    // canvas.drawCircle(controlRightStartCurveDown, 1, pointPaint);
    // linePath.quadraticBezierTo(
    //     controlRightStartCurveDown.dx, controlRightStartCurveDown.dy, rightStartCurveDown.dx, rightStartCurveDown.dy);
    menuPath.quadraticBezierTo(
        controlRightStartCurveDown.dx, controlRightStartCurveDown.dy, rightStartCurveDown.dx, rightStartCurveDown.dy);

    //EndRight
    Offset endRight = Offset(size.width, 0);
    // canvas.drawCircle(endRight, 1, moveToPaint);
    // linePath.lineTo(endRight.dx, endRight.dy);
    menuPath.lineTo(endRight.dx, endRight.dy);

    //EndRightBottom
    Offset endRightBottom = Offset(size.width, size.height);
    // canvas.drawCircle(endRightBottom, 1, moveToPaint);
    // linePath.lineTo(endRightBottom.dx, endRightBottom.dy);
    menuPath.lineTo(endRightBottom.dx, endRightBottom.dy);

    //EndLeftBottom
    Offset endLeftBottom = Offset(0, size.height);
    // canvas.drawCircle(endLeftBottom, 1, moveToPaint);
    // linePath.lineTo(endLeftBottom.dx, endLeftBottom.dy);
    menuPath.lineTo(endLeftBottom.dx, endLeftBottom.dy);

    //Origin
    Offset origin = const Offset(0, 0);
    // canvas.drawCircle(origin, 1, moveToPaint);
    // linePath.lineTo(origin.dx, origin.dy);
    menuPath.lineTo(origin.dx, origin.dy);
    // linePath.close();
    menuPath.close();
    // canvas.drawPath(linePath, linePaint);
    canvas.drawShadow(menuPath.shift(const Offset(0, -6)), Colors.black.withAlpha(80), 2.0, true);
    canvas.drawPath(menuPath, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
