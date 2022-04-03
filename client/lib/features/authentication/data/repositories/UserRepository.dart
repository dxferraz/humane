import 'package:humane/core/errors/failures.dart';
import 'package:dartz/dartz.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/authentication/data/datasources/UserLocalDataSource.dart';
import 'package:humane/features/authentication/data/datasources/UserRemoteDataSource.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/authentication/domain/repositories/IUserRepository.dart';
import 'package:shared_preferences/shared_preferences.dart';

class UserRepository extends IUserRepository {
  IUserRemoteDataSource remoteDataSource;
  IUserLocalDataSource localDataSource;

  UserRepository({required this.remoteDataSource, required this.localDataSource});

  @override
  Future<Either<Failure, User>> signIn(String email, String password) async {
    Either<Failure, User> failureOrUser = await remoteDataSource.signIn(email: email, password: password);

    failureOrUser.fold((error) => null, (user) => localDataSource.insertUser(user));
    return failureOrUser;
  }

  @override
  Future<Either<Failure, User>> signUp(String name, String email, String password) async {
    Either<Failure, User> failureOrUser = await remoteDataSource.signUp(name: name, email: email, password: password);

    failureOrUser.fold((error) => null, (user) => localDataSource.insertUser(user));
    return failureOrUser;
  }

  @override
  Future<Either<Failure, String>> forgotPassword(String email) {
    return remoteDataSource.forgotPassword(email: email);
  }

  @override
  Future<Either<Failure, int>> signOut(int id) async {
    getIt<SharedPreferences>().setString('sign_token', '');
    return await localDataSource.deleteUser(id);
  }

  @override
  Future<Either<Failure, User>> updatePassword(String password) {
    return remoteDataSource.updatePassword(password: password);
  }

  @override
  Future<Either<Failure, User>> me() async {
    return localDataSource.getUser();
  }
}
