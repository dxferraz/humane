import 'package:dartz/dartz.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/data/datasources/gqlQueries.dart';
import 'package:humane/features/authentication/data/models/userModel.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';

abstract class IUserRemoteDataSource {
  Future<Either<Failure, User>> signIn({required String email, required String password});
  Future<Either<Failure, User>> signUp({required String name, required String email, required String password});
}

class UserRemoteDataSource extends IUserRemoteDataSource {
  final GraphQLClient _client;

  UserRemoteDataSource(this._client);

  @override
  Future<Either<Failure, User>> signUp({required String name, required String email, required String password}) async {
    final variables = {
      "input": {"name": name, "email": email, "password": password}
    };
    final result = await _client.query(QueryOptions(
      document: gql(GqlQuery.createUserQuery),
      variables: variables,
    ));
    print(result);
    if (result.data == null) {
      if (result.exception != null && result.exception!.graphqlErrors.isNotEmpty) {
        List<String> messages =
            CreateUserFailure.fromMap(result.exception!.graphqlErrors[0].extensions!['exception']['response']['message'])!;
        return Left(CreateUserFailure(messages: messages));
      } else {
        return Left(CreateUserFailure(messages: const ['Something went wrong! Please Try again later... sorry!']));
      }
    }
    return Right(UserModel.fromMap(result.data!)!);
  }

  @override
  Future<Either<Failure, User>> signIn({required String email, required String password}) {
    // TODO: implement signIn
    throw UnimplementedError();
  }
}
