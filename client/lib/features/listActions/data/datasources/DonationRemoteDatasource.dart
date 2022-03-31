import 'package:dartz/dartz.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/listActions/data/datasources/gqlQueries.dart';
import 'package:humane/features/listActions/data/models/donationModel.dart';
import 'package:humane/features/listActions/data/models/paginationModel.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';

abstract class IDonationRemoteDatasource {
  Future<Either<Failure, Pagination<Donation>>> getDonations(int take, int? cursor, Map<String, dynamic>? where);
}

class DonationRemoteDatasource extends IDonationRemoteDatasource {
  final GraphQLClient _client;

  DonationRemoteDatasource(this._client);

  @override
  Future<Either<Failure, Pagination<Donation>>> getDonations(int take, int? cursor, Map<String, dynamic>? where) async {
    Map<String, dynamic> input = {
      "take": take,
      "cursor": cursor,
    };
    // Add where clause if defined
    if (where != null) {
      input['where'] = where;
    }

    Map<String, dynamic> variables = {"input": input};

    QueryResult result = await _client.query(
      QueryOptions(
        document: gql(GqlQuery.getDonations),
        variables: variables,
      ),
    );

    if (result.data == null) {
      return const Left(RequestErrorFailure(message: 'Something went wrong with your request! Please, try again later... Sorry!'));
    }

    List<Edge<Donation>> edges = [];

    List<dynamic> edgesData = result.data!['donations']['edges'];
    Map<String, dynamic> pageInfoData = result.data!['donations']['pageInfo'];

    for (var edge in edgesData) {
      edges.add(Edge<Donation>(cursor: edge['cursor'], node: DonationModel.fromMap(edge['node'])!));
    }

    PageInfo pageInfo = PageInfoModel.fromMap(pageInfoData)!;
    return Right(Pagination(edges: edges as List<Edge<Donation>>, pageInfo: pageInfo));
  }
}
