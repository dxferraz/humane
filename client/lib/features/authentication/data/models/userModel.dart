import 'dart:convert';
import 'package:humane/features/authentication/domain/entities/User.dart';

class UserModel extends User {
  const UserModel({required name, required email, birthdate, role, phone, thumbnail})
      : super(name: name, email: email, birthdate: birthdate, role: role, phone: phone);

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'email': email,
      'birthdate': birthdate,
      'role': role,
      'phone': phone,
      'thumbnail': thumbnail,
    };
  }

  static User? fromMap(Map<String, dynamic> map) {
    return User(
      name: map['name'],
      email: map['email'],
      birthdate: map['birthdate'],
      phone: map['phone'],
      thumbnail: map['thumbnail'],
      role: map['role'],
    );
  }

  String toJson() => json.encode(toMap());

  static User? fromJson(String source) => fromMap(json.decode(source));
}
