import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/domain/usecases/signin.dart';
import 'package:humane/features/authentication/domain/usecases/signup.dart';

import '../../domain/entities/User.dart';
part 'signUserEvent.dart';
part 'signUserState.dart';

class SignUserBloc extends Bloc<SignUserEvent, SignUserState> {
  SignIn signIn;
  SignUp signUp;

  SignUserBloc({required this.signIn, required this.signUp}) : super(SignUserInitial()) {
    on<SignUpUserEvent>(_onSignUpUserEvent);
  }

  void _onSignUpUserEvent(SignUpUserEvent event, Emitter<SignUserState> emit) async {
    emit(LoadingUser());
    Either<Failure, User> failureOrUser = await signUp(SignUpParams(name: event.name, email: event.email, password: event.password));

    failureOrUser.fold((l) {
      if (l is CreateUserFailure) {
        emit(ErrorUser(messages: l.messages));
      }
    }, (r) => emit(SignedUser(r)));
  }
}
