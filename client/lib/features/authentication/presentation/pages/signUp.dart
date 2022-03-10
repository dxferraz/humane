import 'package:humane/Components/shared_components/InputField.dart';
import 'package:humane/Components/shared_components/Line.dart';
import 'package:humane/Components/shared_components/TextLine.dart';
import 'package:humane/Components/shared_components/Title.dart';
import 'package:humane/Components/shared_components/Button.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/authentication/presentation/bloc/sign_user_bloc.dart';
import 'package:humane/icons.dart';
import 'package:humane/utils/regex.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_svg/svg.dart';

class SignUp extends HookWidget {
  final _formKey = GlobalKey<FormState>();
  final FocusNode _nameFocus = FocusNode();
  final FocusNode _emailFocus = FocusNode();
  final FocusNode _passwordFocus = FocusNode();
  final FocusNode _confirmPasswordFocus = FocusNode();
  late String name;
  late String email;
  late String password;
  late String confirmPassword;

  @override
  Widget build(BuildContext context) {
    ValueNotifier<bool> recaptchaToggle = useState(false);

    return BlocProvider<SignUserBloc>(
      create: (BuildContext context) => getIt<SignUserBloc>(),
      child: Scaffold(
        body: SingleChildScrollView(
          child: Stack(
            children: <Widget>[
              Positioned(
                top: 0,
                right: 0,
                child: Image.asset(
                  "assets/icons/signup.png",
                  height: 220,
                  fit: BoxFit.scaleDown,
                ),
              ),
              SafeArea(
                child: Container(
                  alignment: Alignment.center,
                  height: MediaQuery.of(context).size.height,
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
                            icon: const Icon(HumaneIcons.male),
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
                            icon: const Icon(HumaneIcons.mail),
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
                            icon: const Icon(HumaneIcons.padlock),
                            hidden: true,
                            validator: passwordValidator,
                            paddingBottom: 15,
                            onChanged: (value) {
                              password = value;
                            }),
                        InputField(
                            hint: "Confirm Password",
                            focusNode: _confirmPasswordFocus,
                            textInputAction: TextInputAction.done,
                            icon: const Icon(HumaneIcons.shield),
                            hidden: true,
                            paddingBottom: 15,
                            onChanged: (value) {
                              confirmPassword = value;
                            }),
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
                                    activeColor: Colors.white,
                                    checkColor: Theme.of(context).primaryColor,
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
                          onPress: () => {},
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
    );
  }
}
