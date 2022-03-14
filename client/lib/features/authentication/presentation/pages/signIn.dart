import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:humane/core/components/Background.dart';
import 'package:humane/core/components/InputField.dart' as I;
import 'package:humane/core/components/LoadingButton.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';
import 'package:humane/features/authentication/presentation/pages/validators/regex.dart';
import 'package:humane/icons.dart';
import 'package:humane/core/components/Line.dart';
import 'package:humane/core/components/TextLine.dart';
import 'package:humane/core/components/Title.dart';
import 'package:humane/core/components/Button.dart';

class SignIn extends HookWidget {
  final _formKey = GlobalKey<FormState>();
  final FocusNode _emailFocus = FocusNode();
  final FocusNode _passwordFocus = FocusNode();
  late String email;
  late String password;

  @override
  Widget build(BuildContext context) {
    final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
    ValueNotifier<bool> recaptchaToggle = useState(false);

    return BlocProvider<SignUserBloc>(
      create: (BuildContext context) => getIt<SignUserBloc>(),
      child: BlocListener<SignUserBloc, SignUserState>(
        listener: (context, state) {
          if (state is SignedUser) {
            // Clear form on success
            _formKey.currentState?.reset();
          }
          // Go to Home Page
          if (state is ErrorUser && state.messages != null && state.messages!.isNotEmpty) {
            String message = state.messages!.join("\n");
            _scaffoldKey.currentState!.showSnackBar(SnackBar(
              content: Text(message),
              duration: const Duration(seconds: 2),
              action: SnackBarAction(
                label: 'HIDE',
                onPressed: () {},
              ),
            ));
          }
        },
        child: Scaffold(
          key: _scaffoldKey,
          body: SingleChildScrollView(
            child: Background(
              child: BlocBuilder<SignUserBloc, SignUserState>(builder: (context, state) {
                LoadingButtonStates buttonState = LoadingButtonStates.init;
                if (state is ErrorUser) {
                  buttonState = LoadingButtonStates.init;
                }

                if (state is LoadingUser) {
                  buttonState = LoadingButtonStates.submitting;
                }

                return (SafeArea(
                  child: Container(
                    padding: const EdgeInsets.only(left: 30, right: 30),
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
                              padding: const EdgeInsets.only(bottom: 5),
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
                                SizedBox(
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
                            icon: const Icon(Humane.mail),
                            validator: (value) {
                              return emailValidator(value!);
                            },
                          ),
                          I.InputField(
                              onChanged: ([_password]) {
                                password = _password!;
                              },
                              hint: "Password",
                              textInputAction: TextInputAction.done,
                              focusNode: _passwordFocus,
                              icon: const Icon(Humane.padlock),
                              hidden: true,
                              validator: (value) {
                                return isEmpty(value!);
                              },
                              onSubmit: () => submitForm(context),
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
                          LoadingButton(
                            state: buttonState,
                            text: 'Sign Up',
                            onPress: () {
                              if (buttonState != LoadingButtonStates.submitting) {
                                submitForm(context);
                              }
                            },
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
                ));
              }),
            ),
          ),
        ),
      ),
    );
  }

  submitForm(BuildContext context) {
    FocusManager.instance.primaryFocus?.unfocus();
    if (_formKey.currentState?.validate() != false) {
      BlocProvider.of<SignUserBloc>(context).add(SignInUserEvent(email: email, password: password));
    }
  }
}
