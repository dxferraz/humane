import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/core/components/Button.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';

class MainDrawer extends StatefulWidget {
  const MainDrawer({Key? key}) : super(key: key);

  @override
  State<MainDrawer> createState() => _MainDrawerState();
}

class _MainDrawerState extends State<MainDrawer> {
  final SignUserBloc _signBloc = getIt<SignUserBloc>();

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      elevation: 0,
      child: Padding(
        padding: const EdgeInsets.all(25.0),
        child: BlocBuilder<SignUserBloc, SignUserState>(
          bloc: _signBloc,
          builder: (context, state) {
            List<Widget> children;
            if (state is SignedUser) {
              children = [
                Button(
                  onPress: () {
                    _signBloc.add(SignOutUserEvent());
                    Navigator.of(context).pop();
                  },
                  text: "Sign Out",
                ),
              ];
            } else {
              children = [
                Button(
                  onPress: () {
                    Navigator.pushNamed(context, 'signIn');
                  },
                  text: "Sign In",
                ),
                const Divider(),
                Button(
                  onPress: () {
                    Navigator.pushNamed(context, 'signUp');
                  },
                  text: "Sign Up",
                ),
              ];
            }
            return Column(children: children);
          },
        ),
      ),
    );
  }
}
