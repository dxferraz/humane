import '../models/userModel.dart';

abstract class IUserLocalDataSource {
  Future<UserModel?> signIn({required String email, required String password});
  Future<UserModel?> signUp({required String name, required String email, required String password});
}

class UserLocalDataSource extends IUserLocalDataSource {
  UserLocalDataSource();

  @override
  Future<UserModel?> signIn({required String email, required String password}) {
    // TODO: implement signIn
    throw UnimplementedError();
  }

  @override
  Future<UserModel?> signUp({required String name, required String email, required String password}) {
    // TODO: implement signUp
    throw UnimplementedError();
  }
}
