import 'package:dartz/dartz.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/data/datasources/database/user.dao.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';

abstract class IUserLocalDataSource {
  Future<Either<Failure, User>> getUser();
  Future<Either<Failure, int>> deleteUser(int id);
  Future<int> insertUser(User user);
}

class UserLocalDataSource extends IUserLocalDataSource {
  IUserDao userDB;

  UserLocalDataSource(this.userDB);

  @override
  Future<Either<Failure, int>> deleteUser(int id) {
    return userDB.deleteUser(id);
  }

  @override
  Future<Either<Failure, User>> getUser() {
    return userDB.getUser();
  }

  @override
  Future<int> insertUser(User user) {
    return userDB.addUser(user);
  }
}
