// import 'dart:convert';

// import 'package:flutter/material.dart';
// import 'package:humane/config.dart';
// import 'package:humane/features/authentication/domain/entities/User.dart';
// import 'package:http/http.dart';
// import 'package:rxdart/subjects.dart';

// class AuthService {
//   String accessToken;
//   BehaviorSubject<User> user = BehaviorSubject<User>();

//   Stream<User> login(
//       {required String email, required String password}) async* {
//     Response response = await post(
//       endpoint + 'auth/login',
//       headers: <String, String>{
//         'Accept': 'application/json',
//       },
//       body: jsonEncode(<String, String>{'email': email, 'password': password}),
//     );
//     String json = response.body;
//     Map<String, dynamic> map = jsonDecode(json);
//     User _user = User.fromMap(map['user']);
//     user.add(_user);
//     accessToken = map['access_token'];

//     yield _user;
//   }

//   Stream<User> register({
//     required String name,
//     required String email,
//     required String password,
//     required String passwordConfirmation,
//     required String recaptcha,
//     String provider = 'GOSTORAGES',
//     String providerId,
//     String providerToken,
//     String photoUrl,
//   }) async* {
//     print("Access: " + endpoint + '/auth/register');
//     Response response = await post(
//       endpoint + '/auth/register',
//       headers: <String, String>{
//         'Accept': 'application/json',
//       },
//       body: jsonEncode(<String, String>{
//         'name': name,
//         'email': email,
//         'password': password,
//         'password_confirmation': passwordConfirmation,
//         'recaptcha': recaptcha,
//         'provider': provider,
//         'providerId': providerId,
//         'provider_token': providerToken,
//         'photo_url': photoUrl
//       }),
//     );
//     String json = response.body;
//     Map<String, dynamic> map = jsonDecode(json);
//     print(map);
//     User _user = User.fromMap(map['user']);
//     user.add(_user);
//     accessToken = map['access_token'];
//     yield _user;
//   }
// }
