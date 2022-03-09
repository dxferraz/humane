import 'dart:async';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/features/authentication/domain/usecases/signin.dart';
import 'package:humane/features/authentication/domain/usecases/signup.dart';
part 'sign_user_event.dart';
part 'sign_user_state.dart';

class SignUserBloc extends Bloc<SignUserEvent, SignUserState> {
  SignIn signIn;
  SignUp signUp;

  SignUserBloc({required this.signIn, required this.signUp}) : super(SignUserInitial());

  @override
  Stream<SignUserState> mapEventToState(
    SignUserEvent event,
  ) async* {
    // Sign In
    if (event is SignInUserEvent) {
      print(event);
    }
  }
}
