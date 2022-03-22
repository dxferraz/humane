import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:humane/core/components/Background.dart';
import 'package:humane/core/components/InputField.dart' as i;
import 'package:humane/core/components/LoadingButton.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';
import 'package:humane/features/authentication/presentation/pages/validators/regex.dart';
import 'package:humane/icons.dart';
import 'package:humane/core/components/Line.dart';
import 'package:humane/core/components/TextLine.dart';
import 'package:humane/core/components/Title.dart';

class NewSignInUI extends StatelessWidget {
  final _formKey = GlobalKey<FormState>();
  final FocusNode _emailFocus = FocusNode();
  final FocusNode _passwordFocus = FocusNode();
  late String email;
  late String password;

  @override
  NewSignInUI({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(),
      endDrawer: IconButton(
        onPressed: () {
          Navigator.pop(context);
        },
        icon: Icon(Humane.back, color: Theme.of(context).primaryColor),
      ),
      body: Container(
        color: Colors.green,
        child: Column(
          children: [],
        ),
      ),
    );
  }
}
