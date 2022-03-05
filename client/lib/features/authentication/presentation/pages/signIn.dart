import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_recaptcha_v2/flutter_recaptcha_v2.dart';
import 'package:humane/Components/shared_components/InputField.dart' as I;
import 'package:humane/Services/service_locator.dart';
import 'package:humane/icons.dart';
import 'package:humane/libraries/recaptcha.dart';
import 'package:flutter_svg/svg.dart';
import 'package:humane/Components/shared_components/Line.dart';
import 'package:humane/Components/shared_components/TextLine.dart';
import 'package:humane/Components/shared_components/Title.dart';
import 'package:humane/Components/shared_components/Button.dart';
import 'package:humane/services/service_locator.dart';

class SignIn extends HookWidget {
  final _formKey = GlobalKey<FormState>();
  final RecaptchaV2Controller recaptchaV2Controller = RecaptchaV2Controller();
  final FocusNode _emailFocus = FocusNode();
  final FocusNode _passwordFocus = FocusNode();
  late String email;
  late String password;

  handleSignIn(BuildContext context) {
    // if (_formKey.currentState.validate()) {
    // getIt<AuthService>()
    //     .login(email: email, password: password)
    //     .listen((event) {
    //   Navigator.of(context).pushReplacementNamed('search');
    // });
    // }
  }

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
                            child: Icon(HumaneIcons.back, color: Theme.of(context).primaryColor),
                          ),
                        ),
                        Title(text: "Sign In"),
                        Line(),
                        Text(
                          'Enter via social networks',
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
                        TextLine(text: "or continue with"),
                        I.InputField(
                            onChanged: (_email) {
                              email = _email;
                            },
                            hint: "Email",
                            textInputAction: TextInputAction.next,
                            focusNode: _emailFocus,
                            nextFocusNode: _passwordFocus,
                            type: TextInputType.emailAddress,
                            icon: Icon(HumaneIcons.mail)),
                        I.InputField(
                            onChanged: ([_password]) {
                              password = _password;
                            },
                            hint: "Password",
                            textInputAction: TextInputAction.done,
                            focusNode: _passwordFocus,
                            icon: Icon(HumaneIcons.padlock),
                            hidden: true,
                            paddingBottom: 3),
                        Container(
                          padding: EdgeInsets.only(bottom: 20),
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
                          padding: EdgeInsets.only(bottom: 20),
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
                                      if (recaptchaVerified.value == false) {
                                        recaptchaV2Controller.show();
                                        recaptchaToggle.value = !recaptchaToggle.value;
                                      }
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
                          text: 'Sign In',
                          onPress: () {
                            handleSignIn(context);
                          },
                        ),
                        Container(
                          padding: EdgeInsets.only(top: 20),
                          child: Center(
                            child: Text.rich(
                              TextSpan(
                                text: "Don't have an account? ",
                                style: TextStyle(fontFamily: "Montserrat-medium", color: Theme.of(context).secondaryHeaderColor),
                                children: <InlineSpan>[
                                  TextSpan(
                                    recognizer: new TapGestureRecognizer()
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
              RecaptchaV2(
                  apiKey: "6Lfnid8UAAAAAM0xIV4PhsdZuW7jJpEsTPjNLaqF",
                  apiSecret: "6Lfnid8UAAAAAMx9K_m8WUxHkmjjszW8j90m_aUO",
                  controller: recaptchaV2Controller,
                  onVerifiedError: (err) {
                    print(err);
                  },
                  onVerifiedSuccessfully: (success) {
                    if (success) {
                      recaptchaVerified.value = true;
                    } else {
                      recaptchaVerified.value = false;
                    }
                  }),
            ],
          ),
        ),
      ),
    );
  }
}
