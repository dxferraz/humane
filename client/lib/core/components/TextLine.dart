import 'package:flutter/material.dart';

class TextLine extends StatefulWidget {
  final String text;
  final double bottom;

  const TextLine({Key? key, required this.text, this.bottom = 20}) : super(key: key);

  @override
  TextLineState createState() => TextLineState();
}

class TextLineState extends State<TextLine> {
  final GlobalKey _textBox = GlobalKey();
  double? textBoxSize;

  void getSizes(_) {
    // final RenderBox renderTextBox = _textBox.currentContext.findRenderObject();
    // setState(() {
    //   textBoxSize = renderTextBox.size.width;
    // });
  }

  @override
  void initState() {
    WidgetsBinding.instance?.addPostFrameCallback(getSizes);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double lineWidth = textBoxSize != null ? (width - textBoxSize! - 60) / 2 : 50;
    return Container(
      padding: EdgeInsets.only(bottom: widget.bottom),
      width: double.infinity,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Container(
            width: lineWidth,
            margin: const EdgeInsets.symmetric(vertical: 10.0),
            decoration: BoxDecoration(
              border: Border.all(
                color: Colors.grey,
                width: 0.5,
              ),
            ),
          ),
          Container(
              key: _textBox,
              padding: const EdgeInsets.only(left: 5, right: 5),
              child: Text(widget.text,
                  style: const TextStyle(
                    color: Colors.black,
                    fontFamily: "Montserrat-light",
                  ))),
          Container(
            width: lineWidth,
            margin: const EdgeInsets.symmetric(vertical: 10.0),
            decoration: BoxDecoration(
              border: Border.all(
                color: Colors.grey,
                width: 0.5,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
