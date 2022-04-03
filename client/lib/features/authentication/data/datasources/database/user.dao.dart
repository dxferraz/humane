import 'package:dartz/dartz.dart';
import 'package:flutter/foundation.dart';
import 'package:humane/core/database/database.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/data/datasources/database/user.table.dart';
import 'package:humane/features/authentication/data/models/userModel.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:drift/drift.dart';

part 'user.dao.g.dart';

abstract class IUserDao {
  Future<int> addUser(User user);
  Future<Either<Failure, User>> getUser();
  Future<Either<Failure, int>> deleteUser(int id);
}

@DriftAccessor(tables: [UserTable])
class UserDao extends DatabaseAccessor<LocalDatabase> with _$UserDaoMixin implements IUserDao {
  UserDao(LocalDatabase db) : super(db);

  @override
  Future<Either<Failure, User>> getUser() async {
    try {
      UserTableData userData = await select(userTable).getSingle();
      User user = UserModel.fromMap(userData.toJson())!;
      return Right(user);
    } catch (e) {
      if (kDebugMode) {
        print(e);
      }
      return const Left(LoginUserFailure(message: ''));
    }
  }

  @override
  Future<int> addUser(User user) {
    UserTableData userData = UserTableData(
      name: user.name,
      birthdate: user.birthdate,
      role: user.role,
      thumbnail: user.thumbnail,
      email: user.email,
    );
    return into(userTable).insert(userData);
  }

  @override
  Future<Either<Failure, int>> deleteUser(int id) async {
    try {
      int deletedId = await (delete(userTable)..where((t) => t.id.equals(id))).go();
      return Right(deletedId);
    } catch (e) {
      if (kDebugMode) {
        print(e);
      }
      return Left(SignOutUserFailure(message: e.toString()));
    }
  }
}
