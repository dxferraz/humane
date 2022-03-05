import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';

class UserModel extends User {
  UserModel({
    required name,
    required email,
    required lastName,
    photo_url,
    required token,
  }) : super(name: name, token: token, email: email, lastName: lastName, photo_url: photo_url);

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'email': email,
      'lastName': lastName,
      'photo_url': photo_url,
      'token': token,
    };
  }

  static User? fromMap(Map<String, dynamic> map) {
    if (map == null) return null;

    return User(
      name: map['name'],
      email: map['email'],
      lastName: map['lastName'],
      photo_url: map['photo_url'],
      token: map['token'],
    );
  }

  String toJson() => json.encode(toMap());

  static User? fromJson(String source) => fromMap(json.decode(source));
}
