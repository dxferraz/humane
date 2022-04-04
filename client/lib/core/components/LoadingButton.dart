import 'package:flutter/material.dart';

enum LoadingButtonStates { init, submitting, completed }

class LoadingButton extends StatefulWidget {
  final VoidCallback onPress;
  final String text;
  final LoadingButtonStates state;
  const LoadingButton({Key? key, required this.onPress, required this.state, required this.text}) : super(key: key);

  @override
  LoadingButtonState createState() => LoadingButtonState();
}

class LoadingButtonState extends State<LoadingButton> {
  bool isAnimating = true;

  SizedBox spinner = const SizedBox(
    width: 15,
    height: 15,
    child: CircularProgressIndicator(
      color: Colors.white,
    ),
  );

  @override
  Widget build(BuildContext context) {
    final buttonWidth = MediaQuery.of(context).size.width;
    // update the UI depending on below variable values
    final isDone = widget.state == LoadingButtonStates.completed;

    return Container(
      alignment: Alignment.center,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        onEnd: () => setState(
          () {
            isAnimating = !isAnimating;
          },
        ),
        //width: widget.state == LoadingButtonStates.init ? buttonWidth : 40,

        // If Button State is Submiting or Completed  show 'buttonCircular' widget as below
        child: buildButton(isDone),
      ),
      // child: circularContainer(true)),
    );
  }

  // If Button State is init : show Normal submit button
  Widget buildButton(bool done) => ElevatedButton(
        style: ElevatedButton.styleFrom(
          shape: const StadiumBorder(),
          primary: done ? Colors.green : Theme.of(context).primaryColor,
        ),
        onPressed: widget.onPress,
        child: widget.state == LoadingButtonStates.init
            ? Text(
                widget.text,
                style: const TextStyle(
                  fontSize: 16,
                  fontFamily: "Montserrat-regular",
                ),
              )
            : done
                ? const Icon(Icons.done, size: 20, color: Colors.white)
                : spinner,
      );
}
