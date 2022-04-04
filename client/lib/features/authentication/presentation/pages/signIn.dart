import 'package:flutter/material.dart' hide Title;
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:humane/core/components/Background.dart';
import 'package:humane/core/components/InputField.dart' as input;
import 'package:humane/core/components/LoadingButton.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/core/theme/themeConstants.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';
import 'package:humane/features/authentication/presentation/pages/validators/regex.dart';
import 'package:humane/icons.dart';
import 'package:humane/core/components/TextLine.dart';
import 'package:humane/core/components/Title.dart';

// ignore: must_be_immutable
class SignIn extends HookWidget {
  final _formKey = GlobalKey<FormState>();
  final FocusNode _emailFocus = FocusNode();
  final FocusNode _passwordFocus = FocusNode();
  late String email;
  late String password;

  @override
  SignIn({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

    return BlocProvider<SignUserBloc>(
      create: (BuildContext context) => getIt<SignUserBloc>(),
      child: BlocListener<SignUserBloc, SignUserState>(
        listener: (context, state) {
          if (state is SignedUser) {
            // Clear form on success
            Navigator.of(context).pushNamed('home');
            _formKey.currentState?.reset();
          }
          // Go to Home Page
          if (state is ErrorUser &&
              state.messages != null &&
              state.messages!.isNotEmpty) {
            String message = state.messages!.join("\n");
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(message),
                duration: const Duration(seconds: 2),
                action: SnackBarAction(
                  label: 'HIDE',
                  onPressed: () {},
                ),
              ),
            );
          }
        },
        child: Scaffold(
          appBar: AppBar(
            leading: IconButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              icon: Icon(
                Humane.back,
                color: appDarkBlueColor,
              ),
            ),
            centerTitle: true,
          ),
          key: _scaffoldKey,
          body: SingleChildScrollView(
            child: Background(
              child: BlocBuilder<SignUserBloc, SignUserState>(
                builder: (context, state) {
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
                      height: MediaQuery.of(context).size.height,
                      child: Form(
                        key: _formKey,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: <Widget>[
                            const Text(
                              'Sign In',
                              style: TextStyle(
                                fontSize: 36,
                                fontWeight: FontWeight.bold,
                                color: appDarkOrangeColor,
                              ),
                            ),
                            const SizedBox(height: 40),
                            SvgPicture.asset(
                              'assets/images/SignInIllustration.svg',
                              width: MediaQuery.of(context).size.width / 2,
                            ),
                            const SizedBox(height: 30),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: const [
                                Text(
                                  'Fazer login com:',
                                  style: TextStyle(
                                    color: appGreyColor,
                                    fontSize: 18,
                                  ),
                                  textAlign: TextAlign.center,
                                ),
                              ],
                            ),
                            const SizedBox(height: 15),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: <Widget>[
                                FloatingActionButton.extended(
                                  onPressed: () {},
                                  label: const Text("Google"),
                                  icon: SvgPicture.asset(
                                    "assets/icons/google.svg",
                                    width: 30,
                                    height: 30,
                                  ),
                                  backgroundColor: Colors.white,
                                  foregroundColor: Colors.black,
                                ),
                                const SizedBox(width: 20),
                                FloatingActionButton.extended(
                                  onPressed: () {},
                                  label: const Text("Facebook"),
                                  icon: SvgPicture.asset(
                                    "assets/icons/facebook.svg",
                                    width: 32,
                                    height: 32,
                                  ),
                                  backgroundColor: Color(0xFF3b5999),
                                  foregroundColor: Colors.white,
                                ),
                              ],
                            ),
                            const SizedBox(height: 10),
                            TextLine(text: "ou preencha os campos abaixo:"),
                            input.InputField(
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
                            input.InputField(
                              onChanged: ([_password]) {
                                password = _password!;
                                return;
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
                              paddingBottom: 3,
                            ),
                            Container(
                              alignment: Alignment.centerRight,
                              child: GestureDetector(
                                onTap: () {
                                  Navigator.of(context)
                                      .pushNamed('forgotPassword');
                                },
                                child: Text(
                                  'Esqueceu a senha?',
                                  style: TextStyle(
                                    color: Theme.of(context).primaryColor,
                                    decoration: TextDecoration.underline,
                                    fontSize: 16,
                                  ),
                                ),
                              ),
                            ),
                            const SizedBox(height: 20),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                ElevatedButton(
                                  onPressed: () {
                                    Navigator.of(context).pushNamed('signUp');
                                  },
                                  child: const Text(
                                    'Criar uma conta',
                                  ),
                                ),
                                LoadingButton(
                                  state: buttonState,
                                  text: 'Entrar',
                                  onPress: () {
                                    if (buttonState !=
                                        LoadingButtonStates.submitting) {
                                      submitForm(context);
                                    }
                                  },
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                  ));
                },
              ),
            ),
          ),
        ),
      ),
    );
  }

  submitForm(BuildContext context) {
    FocusManager.instance.primaryFocus?.unfocus();
    if (_formKey.currentState?.validate() != false) {
      BlocProvider.of<SignUserBloc>(context).add(
        SignInUserEvent(email: email, password: password),
      );
    }
  }
}
