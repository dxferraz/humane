import 'package:equatable/equatable.dart';

abstract class Failure extends Equatable {
  const Failure([List properties = const <dynamic>[]]) : super();
}

class CreateUserFailure extends Failure {
  List<String>? messages;

  CreateUserFailure({this.messages});

  static List<String>? fromMap(List<dynamic> map) {
    List<String> list = [];
    map.forEach((c) => list.add(c));
    return list;
  }

  @override
  List<Object?> get props => [messages];
}
