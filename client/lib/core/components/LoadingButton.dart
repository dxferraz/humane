import 'package:flutter/material.dart';

enum LoadingButtonStates { init, submitting, completed }

class LoadingButton extends StatefulWidget {
  VoidCallback onPress;
  String text;
  LoadingButtonStates state;
  LoadingButton({Key? key, required this.onPress, required this.state, required this.text}) : super(key: key);

  @override
  LoadingButtonState createState() => LoadingButtonState();
}

class LoadingButtonState extends State<LoadingButton> {
  bool isAnimating = true;

  @override
  Widget build(BuildContext context) {
    final buttonWidth = MediaQuery.of(context).size.width;
    // update the UI depending on below variable values
    final isInit = isAnimating || widget.state == LoadingButtonStates.init;
    final isDone = widget.state == LoadingButtonStates.completed;

    return Container(
      alignment: Alignment.center,
      child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          onEnd: () => setState(() {
                isAnimating = !isAnimating;
              }),
          width: widget.state == LoadingButtonStates.init ? buttonWidth : 70,

          // If Button State is Submiting or Completed  show 'buttonCircular' widget as below
          child: isInit ? buildButton() : circularContainer(isDone)),
    );
  }

  // If Button State is init : show Normal submit button
  Widget buildButton() => ElevatedButton(
        style: ElevatedButton.styleFrom(shape: const StadiumBorder(), primary: Theme.of(context).primaryColor),
        onPressed: widget.onPress,
        child: Text(widget.text),
      );
  // this is custom Widget to show rounded container
  // here is state is submitting, we are showing loading indicator on container then.
  // if it completed then showing a Icon.
  Widget circularContainer(bool done) {
    final color = done ? Colors.green : Theme.of(context).secondaryHeaderColor;
    return Container(
      decoration: BoxDecoration(shape: BoxShape.circle, color: color),
      child: Center(
        child: done
            ? const Icon(Icons.done, size: 50, color: Colors.white)
            : const CircularProgressIndicator(
                color: Colors.white,
              ),
      ),
    );
  }
}
