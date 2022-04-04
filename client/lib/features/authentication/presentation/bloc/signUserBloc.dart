import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/authentication/domain/usecases/amISignedIn.dart';
import 'package:humane/features/authentication/domain/usecases/forgotPassword.dart';
import 'package:humane/features/authentication/domain/usecases/signIn.dart';
import 'package:humane/features/authentication/domain/usecases/signOut.dart';
import 'package:humane/features/authentication/domain/usecases/signUp.dart';
part 'signUserEvent.dart';
part 'signUserState.dart';

class SignUserBloc extends Bloc<SignUserEvent, SignUserState> {
  SignIn signIn;
  SignUp signUp;
  SignOut signOut;
  AmISignIn amISignedIn;
  ForgotPassword forgotPassword;
  User? loggedUser;

  SignUserBloc({required this.signIn, required this.signOut, required this.signUp, required this.amISignedIn, required this.forgotPassword})
      : super(SignUserInitial()) {
    on<SignUpUserEvent>(_onSignUpUserEvent);
    on<SignInUserEvent>(_onSignInUserEvent);
    on<ForgetPasswordEvent>(_onForgetPasswordEvent);
    on<AmISignedInEvent>(_onAmISignedInEvent);
    on<SignOutUserEvent>(_onSignOutUserEvent);
  }

  void _onSignOutUserEvent(SignOutUserEvent event, Emitter<SignUserState> emit) async {
    if (loggedUser == null) return;
    Either<Failure, int> failureOrInt = await signOut(SignOutParams(id: loggedUser!.id));
    failureOrInt.fold((error) {}, (id) {
      loggedUser = null;
      emit(SignUserInitial());
    });
  }

  void _onAmISignedInEvent(AmISignedInEvent event, Emitter<SignUserState> emit) async {
    emit(LoadingUser());
    Either<Failure, User> failureOrUser = await amISignedIn(const AmIsignedParams());

    failureOrUser.fold((error) {}, (user) {
      loggedUser = user;
      emit(SignedUser(user));
    });
  }

  void _onSignUpUserEvent(SignUpUserEvent event, Emitter<SignUserState> emit) async {
    if (loggedUser != null) return;
    emit(LoadingUser());
    Either<Failure, User> failureOrUser = await signUp(SignUpParams(name: event.name, email: event.email, password: event.password));

    failureOrUser.fold((l) {
      if (l is CreateUserFailure) {
        emit(ErrorUser(messages: l.messages));
      }
    }, (user) {
      loggedUser = user;
      emit(SignedUser(user));
    });
  }

  void _onSignInUserEvent(SignInUserEvent event, Emitter<SignUserState> emit) async {
    if (loggedUser != null) return;
    emit(LoadingUser());
    Either<Failure, User> failureOrUser = await signIn(SignInParams(email: event.email, password: event.password));

    failureOrUser.fold((l) {
      if (l is LoginUserFailure) {
        emit(ErrorUser(messages: [l.message]));
      }
    }, (user) {
      loggedUser = user;
      emit(SignedUser(user));
    });
  }

  void _onForgetPasswordEvent(ForgetPasswordEvent event, Emitter<SignUserState> emit) async {
    emit(LoadingUser());
    Either<Failure, String> failureOrMessage = await forgotPassword(ForgotPasswordParams(email: event.email));

    failureOrMessage.fold((l) {
      if (l is LoginUserFailure) {
        emit(ErrorUser(messages: [l.message]));
      }
    }, (user) => emit(EmailSent(user)));
  }
}
