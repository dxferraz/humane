part of 'signUserBloc.dart';

abstract class SignUserEvent extends Equatable {
  @override
  List<Object> get props => [];
}

class SignInUserEvent extends SignUserEvent {
  final String email;
  final String password;

  SignInUserEvent({required this.email, required this.password});

  @override
  List<Object> get props => [email, password];
}

class SignUpUserEvent extends SignUserEvent {
  final String name;
  final String email;
  final String password;

  SignUpUserEvent({required this.name, required this.email, required this.password});

  @override
  List<Object> get props => [name, email, password];
}

class UpdateUserEvent extends SignUserEvent {
  final String? name;
  final String? email;
  final String? password;
  final String? birthdate;
  final String? phone;
  final Object? thumbnail;

  UpdateUserEvent({this.name, this.email, this.password, this.birthdate, this.phone, this.thumbnail});

  @override
  List<Object> get props {
    List<Object> props = [];
    name ?? props.add(name!);
    email ?? props.add(email!);
    password ?? props.add(password!);
    birthdate ?? props.add(birthdate!);
    phone ?? props.add(phone!);
    thumbnail ?? props.add(thumbnail!);

    return props;
  }
}
