import 'dart:convert';
import 'package:humane/features/authentication/domain/entities/User.dart';

class UserModel extends User {
  const UserModel({
    required name,
    required email,
  }) : super(name: name, email: email);

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'email': email,
    };
  }

  static User? fromMap(Map<String, dynamic> map) {
    return User(
      name: map['name'],
      email: map['email'],
    );
  }

  String toJson() => json.encode(toMap());

  static User? fromJson(String source) => fromMap(json.decode(source));
}
