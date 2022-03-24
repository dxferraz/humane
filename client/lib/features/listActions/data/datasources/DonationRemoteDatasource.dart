import 'package:dartz/dartz.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/listActions/data/datasources/gqlQueries.dart';
import 'package:humane/features/listActions/data/models/donationModel.dart';
import 'package:humane/features/listActions/domain/entities/category.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';

abstract class IDonationRemoteDatasource {
  Future<Either<Failure, List<Donation>>> getDonations(int take, int? cursor);
}

class DonationRemoteDatasource extends IDonationRemoteDatasource {
  final GraphQLClient _client;

  DonationRemoteDatasource(this._client);

  @override
  Future<Either<Failure, List<Donation>>> getDonations(int take, int? cursor) async {
    final variables = {
      "input": {"take": take, "cursor": cursor}
    };
    QueryResult result = await _client.mutate(MutationOptions(
      document: gql(GqlQuery.getDonations),
      variables: variables,
    ));

    if (result.data == null) {
      return const Left(CreateUserFailure(messages: ['Something went wrong! Please Try again later... sorry!']));
    }

    List<Donation> donations = [];

    List<dynamic> nodes = result.data!['donations']['edges'];

    for (var node in nodes) {
      donations.add(DonationModel.fromMap(node['node'])!);
    }

    return Right(donations);
  }
}
