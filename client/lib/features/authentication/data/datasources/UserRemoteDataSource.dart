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
    QueryResult result = await _client.mutate(MutationOptions(
      document: gql(GqlQuery.createUserQuery),
      variables: variables,
    ));
    if (result.data == null) {
      if (result.exception != null && result.exception!.graphqlErrors.isNotEmpty) {
        List<String> messages =
            CreateUserFailure.fromMap(result.exception!.graphqlErrors[0].extensions!['exception']['response']['message'])!;
        return Left(CreateUserFailure(messages: messages));
      } else {
        return const Left(CreateUserFailure(messages: ['Something went wrong! Please Try again later... sorry!']));
      }
    }

    return Right(UserModel.fromMap(result.data!['createUser'])!);
  }

  @override
  Future<Either<Failure, User>> signIn({required String email, required String password}) async {
    final variables = {
      "input": {"email": email, "password": password}
    };
    QueryResult result = await _client.mutate(MutationOptions(
      document: gql(GqlQuery.loginUserQuery),
      variables: variables,
    ));

    print(result);
    LoginUserFailure defaultFailure =
        const LoginUserFailure(message: 'Something went wrong with your request! Please Try again later... sorry!');

    if (result.data == null) {
      if (result.exception != null && result.exception!.graphqlErrors.isNotEmpty) {
        final code = result.exception!.graphqlErrors[0].extensions!['exception']['response']['statusCode'];
        if (code == 401) {
          //Unauthorized
          return const Left(LoginUserFailure(message: "Wrong email or password, please try again!"));
        } else {
          return Left(defaultFailure);
        }
      } else {
        return Left(defaultFailure);
      }
    }
    return Right(UserModel.fromMap(result.data!['loginUser'])!);
  }
}
