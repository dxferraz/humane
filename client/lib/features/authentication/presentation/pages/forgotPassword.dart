import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:humane/Components/shared_components/InputField.dart';
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

  bool recaptchaVerified = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Stack(
          children: <Widget>[
            Container(
              padding: const EdgeInsets.only(left: 30, right: 30),
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
                        padding: const EdgeInsets.only(bottom: 5),
                        child: Icon(HumaneIcons.back, color: Theme.of(context).primaryColor),
                      ),
                    ),
                    Title(text: "Forgot Password"),
                    const Line(),
                    const Padding(
                      padding: EdgeInsets.symmetric(vertical: 8.0),
                      child: Text(
                        'Enter the email you used for registration:',
                        style: TextStyle(
                          color: Colors.black,
                          fontFamily: "Montserrat-light",
                        ),
                      ),
                    ),
                    InputField(hint: "Email", type: TextInputType.emailAddress, icon: const Icon(HumaneIcons.mail)),
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
                                value: recaptchaVerified,
                                onChanged: (bool? value) {
                                  if (recaptchaVerified == false) {}
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
                      text: 'Recover Password',
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
          ],
        ),
      ),
    );
  }
}
