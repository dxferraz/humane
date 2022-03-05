import 'dart:convert';

import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';

class User extends Equatable {
  final String name;
  final String email;
  final String lastName;
  final String photo_url;
  final String token;

  User({
    required this.name,
    required this.email,
    required this.lastName,
    required this.photo_url,
    required this.token,
  });

  @override
  // TODO: implement props
  List<Object> get props => [name, email, lastName, photo_url, token];
}
