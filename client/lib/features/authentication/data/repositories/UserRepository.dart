import 'package:humane/core/errors/failures.dart';
import 'package:dartz/dartz.dart';
import 'package:humane/features/authentication/data/datasources/UserLocalDataSource.dart';
import 'package:humane/features/authentication/data/datasources/UserRemoteDataSource.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/authentication/domain/repositories/IUserRepository.dart';

class UserRepository extends IUserRepository {
  IUserRemoteDataSource remoteDataSource;
  IUserLocalDataSource localDataSource;

  UserRepository({required this.remoteDataSource, required this.localDataSource});

  @override
  Future<Either<Failure, User>> signIn(String email, String password) {
    return remoteDataSource.signIn(email: email, password: password);
  }

  @override
  Future<Either<Failure, User>> signUp(String name, String email, String password) {
    return remoteDataSource.signUp(name: name, email: email, password: password);
  }
}
