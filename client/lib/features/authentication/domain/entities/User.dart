import 'package:equatable/equatable.dart';

class User extends Equatable {
  final int id;
  final String name;
  final String email;
  final int? birthdate;
  final String? role;
  final String? phone;
  final String? thumbnail;

  const User({required this.id, required this.name, required this.email, this.birthdate, this.role, this.phone, this.thumbnail});

  @override
  List<Object> get props => [name, email];
}
