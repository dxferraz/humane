import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_recaptcha_v2/flutter_recaptcha_v2.dart';
import 'package:humane/Components/shared_components/InputField.dart';
import 'package:humane/libraries/recaptcha.dart';
import 'package:humane/Components/shared_components/Line.dart';
import 'package:humane/Components/shared_components/Title.dart';
import 'package:humane/Components/shared_components/Button.dart';
import '../../../../icons.dart';

class ForgotPassword extends StatefulWidget {
  @override
  ForgotPasswordState createState() {
    return ForgotPasswordState();
  }
}

class ForgotPasswordState extends State<ForgotPassword> {
  final _formKey = GlobalKey<FormState>();
  RecaptchaV2Controller recaptchaV2Controller = RecaptchaV2Controller();
  bool recaptchaVerified = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: <Widget>[
            Container(
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
                    Title(text: "Forgot Password"),
                    Line(),
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 8.0),
                      child: Text(
                        'Enter the email you used for registration:',
                        style: TextStyle(
                          color: Colors.black,
                          fontFamily: "Montserrat-light",
                        ),
                      ),
                    ),
                    InputField(hint: "Email", type: TextInputType.emailAddress, icon: Icon(HumaneIcons.mail)),
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
                                value: recaptchaVerified,
                                onChanged: (bool? value) {
                                  if (recaptchaVerified == false) {
                                    recaptchaV2Controller.show();
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
                      text: 'Recover Password',
                      onPress: () {},
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
            RecaptchaV2(
              apiKey: "6Lfnid8UAAAAAM0xIV4PhsdZuW7jJpEsTPjNLaqF",
              apiSecret: "6Lfnid8UAAAAAMx9K_m8WUxHkmjjszW8j90m_aUO",
              controller: recaptchaV2Controller,
              onVerifiedError: (err) {
                print(err);
              },
              onVerifiedSuccessfully: (success) {
                setState(() {
                  if (success) {
                    setState(() {
                      recaptchaVerified = true;
                    });
                  } else {
                    setState(() {
                      recaptchaVerified = false;
                    });
                    print("Failed to verify.");
                  }
                });
              },
            ),
          ],
        ),
      ),
    );
  }
}
