import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:humane/shared_components/InputField.dart' as I;
import 'package:humane/icons.dart';
import 'package:flutter_svg/svg.dart';
import 'package:humane/shared_components/Line.dart';
import 'package:humane/shared_components/TextLine.dart';
import 'package:humane/shared_components/Title.dart';
import 'package:humane/shared_components/Button.dart';

class SignIn extends HookWidget {
  final _formKey = GlobalKey<FormState>();
  final FocusNode _emailFocus = FocusNode();
  final FocusNode _passwordFocus = FocusNode();
  late String email;
  late String password;

  @override
  Widget build(BuildContext context) {
    ValueNotifier<bool> recaptchaVerified = useState(false);
    ValueNotifier<bool> recaptchaToggle = useState(false);
    return Scaffold(
      body: Container(
        child: SingleChildScrollView(
          child: Stack(
            children: <Widget>[
              Positioned(
                top: 0,
                right: 0,
                child: Container(
                  child: SvgPicture.asset("assets/icons/signin.svg", width: 220, semanticsLabel: 'Illustration'),
                ),
              ),
              SafeArea(
                child: Container(
                  padding: EdgeInsets.only(left: 30, right: 30),
                  alignment: Alignment.center,
                  height: MediaQuery.of(context).size.height,
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
                            child: Icon(Humane.back, color: Theme.of(context).primaryColor),
                          ),
                        ),
                        Title(text: "Sign In"),
                        const Line(),
                        const Text(
                          'Enter via social networks',
                          style: TextStyle(
                            color: Colors.black,
                            fontFamily: "Montserrat-light",
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(vertical: 20),
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
                                margin: const EdgeInsets.symmetric(horizontal: 15.0),
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
                                decoration: const BoxDecoration(
                                  color: Colors.white,
                                  borderRadius: BorderRadius.all(Radius.circular(5)),
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
                                padding: const EdgeInsets.all(5),
                                child: SvgPicture.asset("assets/icons/google.svg", semanticsLabel: 'Google Logo'),
                              ),
                            ],
                          ),
                        ),
                        TextLine(text: "or continue with"),
                        I.InputField(
                            onChanged: (_email) {
                              email = _email!;
                            },
                            hint: "Email",
                            textInputAction: TextInputAction.next,
                            focusNode: _emailFocus,
                            nextFocusNode: _passwordFocus,
                            type: TextInputType.emailAddress,
                            icon: const Icon(Humane.mail)),
                        I.InputField(
                            onChanged: ([_password]) {
                              password = _password!;
                            },
                            hint: "Password",
                            textInputAction: TextInputAction.done,
                            focusNode: _passwordFocus,
                            icon: const Icon(Humane.padlock),
                            hidden: true,
                            paddingBottom: 3),
                        Container(
                          padding: const EdgeInsets.only(bottom: 20),
                          alignment: Alignment.centerRight,
                          child: GestureDetector(
                            onTap: () {
                              Navigator.of(context).pushNamed('forgotPassword');
                            },
                            child: Text(
                              'Forgot Password?',
                              style: TextStyle(
                                color: Theme.of(context).primaryColor,
                                fontFamily: "Montserrat-regular",
                              ),
                            ),
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.only(bottom: 20),
                          child: Row(
                            children: <Widget>[
                              SizedBox(
                                width: 20,
                                height: 20,
                                child: Theme(
                                  data: ThemeData(unselectedWidgetColor: Theme.of(context).primaryColor),
                                  child: Checkbox(
                                    checkColor: Theme.of(context).primaryColor,
                                    activeColor: Colors.white,
                                    value: recaptchaVerified.value,
                                    onChanged: (bool? value) {
                                      //TODO: Implement Recaptcha
                                      if (recaptchaVerified.value == false) {
                                        recaptchaToggle.value = !recaptchaToggle.value;
                                      }
                                    },
                                  ),
                                ),
                              ),
                              Container(
                                padding: const EdgeInsets.only(left: 10),
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
                          text: 'Sign In',
                          onPress: () {},
                        ),
                        Container(
                          padding: const EdgeInsets.only(top: 20),
                          child: Center(
                            child: Text.rich(
                              TextSpan(
                                text: "Don't have an account? ",
                                style: TextStyle(fontFamily: "Montserrat-medium", color: Theme.of(context).secondaryHeaderColor),
                                children: <InlineSpan>[
                                  TextSpan(
                                    recognizer: TapGestureRecognizer()
                                      ..onTap = () {
                                        Navigator.of(context).pushNamed('signUp');
                                      },
                                    text: 'SIGN UP',
                                    style: TextStyle(fontFamily: "Montserrat-medium", color: Theme.of(context).primaryColor),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
