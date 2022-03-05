import 'package:circular_bottom_navigation/circular_bottom_navigation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

CircularBottomNavigationController useCircularBottomNavigationController(int selectedPos) {
  return use(_CircularBottomNavigationControllerHook(selectedPos: selectedPos));
}

class _CircularBottomNavigationControllerHook extends Hook<CircularBottomNavigationController> {
  int selectedPos = 1;
  _CircularBottomNavigationControllerHook({
    required this.selectedPos,
  });
  @override
  _CircularBottomNavigationControllerHookState createState() => _CircularBottomNavigationControllerHookState();
}

class _CircularBottomNavigationControllerHookState
    extends HookState<CircularBottomNavigationController, _CircularBottomNavigationControllerHook> {
  late CircularBottomNavigationController _navigationController;

  @override
  void initHook() {
    _navigationController = new CircularBottomNavigationController(hook.selectedPos);
  }

  @override
  void dispose() {
    _navigationController.dispose();
  }

  @override
  CircularBottomNavigationController build(BuildContext context) {
    return _navigationController;
  }
}
