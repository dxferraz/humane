import 'package:dartz/dartz.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';

abstract class IUserRepository {
  Future<Either<Failure, User>> signIn(String email, String password);
  Future<Either<Failure, User>> signUp(String name, String email, String password);
  Future<Either<Failure, User>> updatePassword(String password);
  Future<Either<Failure, String>> forgotPassword(String email);
}
