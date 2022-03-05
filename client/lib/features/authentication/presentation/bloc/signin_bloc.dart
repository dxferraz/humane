import 'dart:async';
import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
part 'signin_event.dart';
part 'signin_state.dart';

class SigninBloc extends Bloc<SigninEvent, SigninState> {
  SigninBloc() : super(SigninInitial());
  @override
  Stream<SigninState> mapEventToState(
    SigninEvent event,
  ) async* {
    // TODO: implement mapEventToState
  }
}
