import 'package:humane/core/errors/failures.dart';
import 'package:dartz/dartz.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/authentication/domain/repositories/sign_in_repository.dart';

class UserRepositoryImplementation extends SignInRepository {
  UserRepositoryImplementation();

  @override
  Future<Either<Failure, User>>? signIn(String email, String password) {}
}
