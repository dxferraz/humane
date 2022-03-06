import '../models/user_model.dart';

abstract class SignInDataSource {
  /// Post http://endpoint.com/api/auth/login endpoint.
  ///
  /// Throws a [ServerException] for all error codes.
  Future<UserModel> signIn({String email, String password});
}