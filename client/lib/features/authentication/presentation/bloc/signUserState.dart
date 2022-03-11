part of 'signUserBloc.dart';

abstract class SignUserState extends Equatable {
  const SignUserState();
}

class SignUserInitial extends SignUserState {
  @override
  List<Object> get props => [];
}

class ErrorUser extends SignUserState {
  List<String>? messages;

  ErrorUser({this.messages});

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
