import 'package:humane/shared_components/InputField.dart';
import 'package:humane/shared_components/Line.dart';
import 'package:humane/shared_components/TextLine.dart';
import 'package:humane/shared_components/Title.dart';
import 'package:humane/shared_components/Button.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';
import 'package:humane/icons.dart';
import 'package:humane/features/authentication/presentation/pages/validators/regex.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_svg/svg.dart';

class SignUp extends HookWidget {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final FocusNode _nameFocus = FocusNode();
  final FocusNode _emailFocus = FocusNode();
  final FocusNode _passwordFocus = FocusNode();
  final FocusNode _confirmPasswordFocus = FocusNode();
  String name = '';
  String email = '';
  String password = '';
  String confirmPassword = '';

  @override
  Widget build(BuildContext buildContext) {
    ValueNotifier<bool> recaptchaToggle = useState(false);
    AutovalidateMode autovalidateMode = AutovalidateMode.onUserInteraction;

    final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

    return BlocProvider<SignUserBloc>(
      create: (BuildContext context) => getIt<SignUserBloc>(),
      child: Scaffold(
        key: _scaffoldKey,
        body: BlocListener<SignUserBloc, SignUserState>(
          listener: (context, state) {
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
          child: SingleChildScrollView(
            child: Stack(
              children: <Widget>[
                SafeArea(
                  child: Container(
                    alignment: Alignment.center,
                    height: MediaQuery.of(buildContext).size.height,
                    padding: const EdgeInsets.only(left: 30, right: 30),
                    child: Form(
                      autovalidateMode: autovalidateMode,
                      key: _formKey,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          GestureDetector(
                            onTap: () {
                              Navigator.pop(buildContext);
                            },
                            child: Container(
                              padding: const EdgeInsets.only(bottom: 5),
                              child: Icon(Humane.back, color: Theme.of(buildContext).primaryColor),
                            ),
                          ),
                          Title(text: "Sign Up"),
                          const Line(),
                          const Text(
                            'Register here',
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
                          TextLine(text: "or register with"),
                          InputField(
                              hint: "Full Name",
                              focusNode: _nameFocus,
                              nextFocusNode: _emailFocus,
                              textInputAction: TextInputAction.next,
                              icon: const Icon(Humane.male),
                              validator: (value) {
                                return twoNamesValidator(value!);
                              },
                              paddingBottom: 15,
                              onChanged: (value) {
                                name = value!.trim();
                              }),
                          InputField(
                              hint: "Email",
                              focusNode: _emailFocus,
                              nextFocusNode: _passwordFocus,
                              textInputAction: TextInputAction.next,
                              type: TextInputType.emailAddress,
                              icon: const Icon(Humane.mail),
                              validator: (value) {
                                return emailValidator(value!);
                              },
                              paddingBottom: 15,
                              onChanged: (value) {
                                email = value!.trim();
                              }),
                          InputField(
                              tooltip:
                                  "Passwords must have at least 6 and maximum 20 characters;\nPasswords must contain at least 1 upper case letter;\nPasswords must contain at least 1 lower case letter;\nPasswords must contain at least 1 number;\nPasswords must contain at least 1 special character;",
                              hint: "Password",
                              focusNode: _passwordFocus,
                              nextFocusNode: _confirmPasswordFocus,
                              textInputAction: TextInputAction.next,
                              icon: const Icon(Humane.padlock),
                              hidden: true,
                              validator: (value) {
                                return passwordValidator(value!);
                              },
                              paddingBottom: 15,
                              onChanged: (value) {
                                password = value!;
                              }),
                          InputField(
                              hint: "Confirm Password",
                              focusNode: _confirmPasswordFocus,
                              textInputAction: TextInputAction.done,
                              icon: const Icon(Humane.shield),
                              hidden: true,
                              paddingBottom: 15,
                              validator: (value) {
                                return confirmPasswordValidator(value!, password);
                              },
                              onChanged: (value) {
                                confirmPassword = value!;
                              }),
                          Container(
                            padding: const EdgeInsets.only(bottom: 20),
                            child: Row(
                              children: <Widget>[
                                SizedBox(
                                  width: 20,
                                  height: 20,
                                  child: Theme(
                                    data: ThemeData(unselectedWidgetColor: Theme.of(buildContext).primaryColor),
                                    child: Checkbox(
                                      activeColor: Colors.white,
                                      checkColor: Theme.of(buildContext).primaryColor,
                                      value: recaptchaToggle.value,
                                      onChanged: (bool? value) async {
                                        //TODO: Implement Recaptcha
                                        recaptchaToggle.value = !recaptchaToggle.value;
                                      },
                                    ),
                                  ),
                                ),
                                Container(
                                  padding: const EdgeInsets.only(left: 10),
                                  child: Text(
                                    'Verify your are not a robot',
                                    style: TextStyle(
                                      color: Theme.of(buildContext).primaryColor,
                                      fontFamily: "Montserrat-regular",
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          BlocBuilder<SignUserBloc, SignUserState>(
                            builder: (context, state) {
                              return Button(
                                text: 'Sign Up',
                                onPress: () => submitForm(context),
                              );
                            },
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  submitForm(BuildContext context) {
    print(_formKey.currentState?.validate());
    if (_formKey.currentState?.validate() != false) {
      BlocProvider.of<SignUserBloc>(context).add(SignUpUserEvent(email: email, password: password, name: name));
    } else {}
  }
}
