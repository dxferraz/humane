import 'package:dartz/dartz.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';

abstract class SignInRepository {
  Future<Either<Failure, User>>? signIn(String email, String password);
}
