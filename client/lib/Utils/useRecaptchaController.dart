import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_recaptcha_v2/flutter_recaptcha_v2.dart';

RecaptchaV2Controller useRecaptchaV2ControllerController() {
  return use(_RecaptchaControllerHook());
}

class _RecaptchaControllerHook extends Hook<RecaptchaV2Controller> {
  @override
  _RecaptchaControllerHookState createState() => _RecaptchaControllerHookState();
}

class _RecaptchaControllerHookState extends HookState<RecaptchaV2Controller, _RecaptchaControllerHook> {
  late RecaptchaV2Controller _controller;

  @override
  void initHook() {
    _controller = RecaptchaV2Controller();
  }

  @override
  void dispose() {
    _controller.dispose();
  }

  @override
  RecaptchaV2Controller build(BuildContext context) {
    return _controller;
  }
}
