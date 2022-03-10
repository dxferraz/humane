import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:humane/features/authentication/data/datasources/gqlQueries.dart';
import '../models/user_model.dart';

abstract class IUserRemoteDataSource {
  Future<UserModel?> signIn({required String email, required String password});
  Future<UserModel?> signUp({required String name, required String email, required String password});
}

class UserRemoteDataSource extends IUserRemoteDataSource {
  final GraphQLClient _client;

  UserRemoteDataSource(this._client);

  @override
  Future<UserModel?> signUp({required String name, required String email, required String password}) async {
    try {
      final result = await _client.query(QueryOptions(
        document: gql(GqlQuery.createUserQuery),
        variables: {
          "data": {name: name, email: email, password: password}
        },
      ));
      print(result.data);
      if (result.data == null) {
        return null;
      }
      // return result.data?['characters']['results'].map((e) => CharacterModel.fromJson(e)).cast<CharacterModel>().toList();
    } on Exception catch (exception) {
      print(exception);
      // throw excptn.ServerException();
    }
  }

  @override
  Future<UserModel> signIn({required String email, required String password}) {
    // TODO: implement signIn
    throw UnimplementedError();
  }
}
