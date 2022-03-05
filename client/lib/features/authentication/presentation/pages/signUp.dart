import 'package:flutter/material.dart' hide Title;
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_recaptcha_v2/flutter_recaptcha_v2.dart';
import 'package:flutter_svg/svg.dart';
import 'package:humane/Components/shared_components/InputField.dart';
import 'package:humane/Components/shared_components/Line.dart';
import 'package:humane/Components/shared_components/TextLine.dart';

import 'package:humane/Components/shared_components/Title.dart';
import 'package:humane/Components/shared_components/Button.dart';
import 'package:humane/Services/auth_service.dart';
import 'package:humane/Services/service_locator.dart';
import 'package:humane/Utils/useRecaptchaController.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/icons.dart';
import 'package:humane/utils/regex.dart';

class SignUp extends HookWidget {
  final _formKey = GlobalKey<FormState>();
  late RecaptchaV2Controller recaptchaV2Controller;
  final FocusNode _nameFocus = FocusNode();
  final FocusNode _emailFocus = FocusNode();
  final FocusNode _passwordFocus = FocusNode();
  final FocusNode _confirmPasswordFocus = FocusNode();
  late String name;
  late String email;
  late String password;
  late String confirmPassword;

  handleSignUp() {
    // if (_formKey.currentState!.validate() && recaptchaV2Controller.token != null) {
    // getIt<AuthService>()
    //     .register(
    //         name: name,
    //         email: email,
    //         password: password,
    //         passwordConfirmation: confirmPassword,
    //         recaptcha: recaptchaV2Controller.token)
    //     .listen((User user) {
    //   print(user.name);
    // });
    // }
  }

  @override
  Widget build(BuildContext context) {
    ValueNotifier<bool> recaptchaVerified = useState(false);
    ValueNotifier<bool> recaptchaToggle = useState(false);
    recaptchaV2Controller = useRecaptchaV2ControllerController();
    return Scaffold(
      body: Container(
        child: SingleChildScrollView(
          child: Stack(
            children: <Widget>[
              Positioned(
                top: 0,
                right: 0,
                child: Container(
                  child: SvgPicture.asset("assets/icons/signup.svg", width: 220, semanticsLabel: 'Illustration'),
                ),
              ),
              SafeArea(
                child: Container(
                  alignment: Alignment.center,
                  height: MediaQuery.of(context).size.height,
                  padding: EdgeInsets.only(left: 30, right: 30),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        GestureDetector(
                          onTap: () {
                            Navigator.pop(context);
                          },
                          child: Container(
                            padding: EdgeInsets.only(bottom: 5),
                            child: Icon(HumaneIcons.back, color: Theme.of(context).primaryColor),
                          ),
                        ),
                        Title(text: "Sign Up"),
                        Line(),
                        Text(
                          'Register here',
                          style: TextStyle(
                            color: Colors.black,
                            fontFamily: "Montserrat-light",
                          ),
                        ),
                        Container(
                          padding: EdgeInsets.symmetric(vertical: 20),
                          child: Row(
                            children: <Widget>[
                              Container(
                                width: 40,
                                height: 40,
                                child: SvgPicture.asset("assets/icons/facebook.svg", semanticsLabel: 'Facebook Logo'),
                              ),
                              Container(
                                width: 0.8,
                                height: 40,
                                margin: new EdgeInsets.symmetric(horizontal: 15.0),
                                decoration: BoxDecoration(
                                  border: Border.all(
                                    color: Colors.grey,
                                    width: 0.5,
                                  ),
                                ),
                              ),
                              Container(
                                width: 40,
                                height: 40,
                                decoration: new BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: new BorderRadius.all(Radius.circular(5)),
                                  boxShadow: [
                                    BoxShadow(
                                      color: Colors.grey,
                                      blurRadius: 4.0, // has the effect of softening the shadow
                                      spreadRadius: 1.0, // has the effect of extending the shadow
                                      offset: Offset(
                                        0, // horizontal, move right 10
                                        0, // vertical, move down 10
                                      ),
                                    )
                                  ],
                                ),
                                padding: EdgeInsets.all(5),
                                child: SvgPicture.asset("assets/icons/google.svg", semanticsLabel: 'Google Logo'),
                              ),
                            ],
                          ),
                        ),
                        TextLine(text: "or register with"),
                        InputField(
                            hint: "Full Name",
                            focusNode: _nameFocus,
                            nextFocusNode: _emailFocus,
                            textInputAction: TextInputAction.next,
                            icon: Icon(HumaneIcons.male),
                            validator: twoNamesValidator,
                            paddingBottom: 15,
                            onChanged: (value) {
                              name = value.trim();
                            }),
                        InputField(
                            hint: "Email",
                            focusNode: _emailFocus,
                            nextFocusNode: _passwordFocus,
                            textInputAction: TextInputAction.next,
                            type: TextInputType.emailAddress,
                            icon: Icon(HumaneIcons.mail),
                            validator: emailValidator,
                            paddingBottom: 15,
                            onChanged: (value) {
                              email = value.trim();
                            }),
                        InputField(
                            hint: "Password",
                            focusNode: _passwordFocus,
                            nextFocusNode: _confirmPasswordFocus,
                            textInputAction: TextInputAction.next,
                            icon: Icon(HumaneIcons.padlock),
                            hidden: true,
                            validator: passwordValidator,
                            paddingBottom: 15,
                            onChanged: (value) {
                              print(value);
                              password = value;
                            }),
                        InputField(
                            hint: "Confirm Password",
                            focusNode: _confirmPasswordFocus,
                            textInputAction: TextInputAction.done,
                            icon: Icon(HumaneIcons.shield),
                            hidden: true,
                            paddingBottom: 15,
                            onChanged: (value) {
                              confirmPassword = value;
                            }),
                        Container(
                          padding: EdgeInsets.only(bottom: 20),
                          child: Row(
                            children: <Widget>[
                              SizedBox(
                                width: 20,
                                height: 20,
                                child: Theme(
                                  data: ThemeData(unselectedWidgetColor: Theme.of(context).primaryColor),
                                  child: Checkbox(
                                    activeColor: Colors.white,
                                    checkColor: Theme.of(context).primaryColor,
                                    value: recaptchaVerified.value,
                                    onChanged: (bool? value) {
                                      // recaptchaV2Controller.show();
                                      // recaptchaToggle.value = !recaptchaToggle.value;
                                    },
                                  ),
                                ),
                              ),
                              Container(
                                padding: EdgeInsets.only(left: 10),
                                child: Text(
                                  'Verify your are not a robot',
                                  style: TextStyle(
                                    color: Theme.of(context).primaryColor,
                                    fontFamily: "Montserrat-regular",
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        Button(
                          text: 'Sign Up',
                          onPress: handleSignUp,
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              RecaptchaV2(
                apiKey: "6Lfnid8UAAAAAM0xIV4PhsdZuW7jJpEsTPjNLaqF",
                apiSecret: "6Lfnid8UAAAAAMx9K_m8WUxHkmjjszW8j90m_aUO",
                controller: recaptchaV2Controller,
                onVerifiedError: (err) {
                  print(err);
                },
                onVerifiedSuccessfully: (success) {
                  // print(recaptchaV2Controller.token);
                  if (success) {
                    recaptchaVerified.value = true;
                  } else {
                    recaptchaVerified.value = false;
                    print("Failed to verify.");
                  }
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}
