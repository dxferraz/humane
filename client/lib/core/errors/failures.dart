import 'package:equatable/equatable.dart';

abstract class Failure extends Equatable {
  const Failure([List properties = const <dynamic>[]]) : super();
}

class CreateUserFailure extends Failure {
  final List<String>? messages;

  const CreateUserFailure({this.messages});

  static List<String>? fromMap(List<dynamic> map) {
    List<String> list = [];
    for (var c in map) {
      list.add(c);
    }

    return list;
  }

  @override
  List<Object?> get props => [messages];
}

class LoginUserFailure extends Failure {
  final String message;

  const LoginUserFailure({required this.message});

  @override
  List<Object?> get props => [message];
}

class SignOutUserFailure extends Failure {
  final String? message;

  const SignOutUserFailure({this.message});

  @override
  List<Object?> get props => [message];
}

class RequestErrorFailure extends Failure {
  final String message;

  const RequestErrorFailure({required this.message});

  @override
  List<Object?> get props => [message];
}
