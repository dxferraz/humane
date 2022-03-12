import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/core/components/Background.dart';
import 'package:humane/core/components/InputField.dart';
import 'package:humane/core/components/Line.dart';
import 'package:humane/core/components/Title.dart';
import 'package:humane/core/components/Button.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';
import 'package:humane/features/authentication/presentation/pages/validators/regex.dart';
import 'package:humane/icons.dart';
import 'package:humane/core/components/LoadingButton.dart';

class ForgotPassword extends StatefulWidget {
  @override
  ForgotPasswordState createState() {
    return ForgotPasswordState();
  }
}

class ForgotPasswordState extends State<ForgotPassword> {
  final _formKey = GlobalKey<FormState>();
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  late String email;

  @override
  Widget build(BuildContext context) {
    return BlocProvider<SignUserBloc>(
      create: (BuildContext context) => getIt<SignUserBloc>(),
      child: BlocListener<SignUserBloc, SignUserState>(
        listener: (context, state) async {
          if (state is EmailSent) {
            // Clear form on success
            _formKey.currentState?.reset();
          }

          if (state is ErrorUser && state.messages != null && state.messages!.isNotEmpty) {}

          // Go to Home Page
          if (state is EmailSent) {
            String message = state.message;
            _scaffoldKey.currentState!.showSnackBar(
              SnackBar(
                content: Text(message),
                duration: const Duration(seconds: 5),
                action: SnackBarAction(
                  label: 'BACK',
                  onPressed: () {
                    Navigator.of(context).pushNamed('signIn');
                  },
                ),
              ),
            );
            await Future.delayed(Duration(seconds: 5));
            Navigator.of(context).pushNamed('signIn');
          }
        },
        child: Scaffold(
          key: _scaffoldKey,
          body: BlocBuilder<SignUserBloc, SignUserState>(
            builder: (context, state) {
              LoadingButtonStates buttonState = LoadingButtonStates.init;
              if (state is ErrorUser) {
                buttonState = LoadingButtonStates.init;
              }

              if (state is LoadingUser) {
                buttonState = LoadingButtonStates.submitting;
              }

              return Background(
                child: SafeArea(
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
                                  child: Icon(Humane.back, color: Theme.of(context).primaryColor),
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
                              InputField(
                                onChanged: (_email) {
                                  email = _email!;
                                },
                                hint: "Email",
                                type: TextInputType.emailAddress,
                                validator: (value) {
                                  return emailValidator(value!);
                                },
                                onSubmit: () => submitForm(context),
                                icon: const Icon(Humane.mail),
                              ),
                              LoadingButton(
                                state: buttonState,
                                text: 'Sign Up',
                                onPress: () {
                                  if (buttonState != LoadingButtonStates.submitting) {
                                    submitForm(context);
                                  }
                                },
                              )
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }

  submitForm(BuildContext context) {
    FocusManager.instance.primaryFocus?.unfocus();
    if (_formKey.currentState?.validate() != false) {
      BlocProvider.of<SignUserBloc>(context).add(ForgetPasswordEvent(email: email));
    }
  }
}
