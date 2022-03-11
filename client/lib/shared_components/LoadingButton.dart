import 'package:flutter/material.dart';

class LoadingButton extends StatefulWidget {
  const LoadingButton({Key? key}) : super(key: key);

  @override
  LoadingButtonState createState() => LoadingButtonState();
}

bool isAnimating = true;

enum LoadingButtonStates { init, submitting, completed }

class LoadingButtonState extends State<LoadingButton> {
  LoadingButtonStates state = LoadingButtonStates.init;

  @override
  Widget build(BuildContext context) {
    final buttonWidth = MediaQuery.of(context).size.width;
    // update the UI depending on below variable values
    final isInit = isAnimating || state == LoadingButtonStates.init;
    final isDone = state == LoadingButtonStates.completed;

    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        padding: const EdgeInsets.all(40),
        child: AnimatedContainer(
            duration: const Duration(milliseconds: 300),
            onEnd: () => setState(() {
                  isAnimating = !isAnimating;
                }),
            width: state == LoadingButtonStates.init ? buttonWidth : 70,
            height: 60,
            // If Button State is Submiting or Completed  show 'buttonCircular' widget as below
            child: isInit ? buildButton() : circularContainer(isDone)),
      ),
    );
  }

  // If Button State is init : show Normal submit button
  Widget buildButton() => ElevatedButton(
        style: ElevatedButton.styleFrom(shape: const StadiumBorder()),
        onPressed: () async {
          // here when button is pressed
          // we are changing the state
          // therefore depending on state our button UI changed.
          setState(() {
            state = LoadingButtonStates.submitting;
          });
          //await 2 sec // you need to implement your server response here.
          await Future.delayed(Duration(seconds: 2));
          setState(() {
            state = LoadingButtonStates.completed;
          });
          await Future.delayed(Duration(seconds: 2));
          setState(() {
            state = LoadingButtonStates.init;
          });
        },
        child: const Text('SUBMIT'),
      );
  // this is custom Widget to show rounded container
  // here is state is submitting, we are showing loading indicator on container then.
  // if it completed then showing a Icon.
  Widget circularContainer(bool done) {
    final color = done ? Colors.green : Colors.blue;
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
