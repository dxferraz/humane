import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/authentication/domain/repositories/sign_in_repository.dart';

class SignIn extends UseCase<User, SignInParams> {
  final SignInRepository repository;
  SignIn(this.repository);

  @override
  Future<Either<Failure, User>> call(SignInParams params) async {
    return await repository.signIn(params.email, params.password)!;
  }
}

class SignInParams extends Equatable {
  String email;

  String password;

  SignInParams({required this.email, required this.password});

  @override
  List<Object> get props => [email, password];
}
