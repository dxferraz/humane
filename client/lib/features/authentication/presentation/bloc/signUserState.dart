part of 'signUserBloc.dart';

abstract class SignUserState extends Equatable {
  const SignUserState();
}

class SignUserInitial extends SignUserState {
  @override
  List<Object> get props => [];
}

class ErrorUser extends SignUserState {
  final List<String>? messages;

  const ErrorUser({this.messages});

  @override
  List<Object?> get props => [messages];
}

class LoadingUser extends SignUserState {
  @override
  List<Object?> get props => [];
}

class SignedUser extends SignUserState {
  final User user;

  const SignedUser(this.user);

  @override
  List<Object> get props => [user];
}

class EmailSent extends SignUserState {
  final String message;

  const EmailSent(this.message);

  @override
  List<Object> get props => [message];
}
