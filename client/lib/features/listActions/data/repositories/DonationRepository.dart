import 'package:humane/features/listActions/data/datasources/DonationLocalDatasource.dart';
import 'package:humane/features/listActions/data/datasources/DonationRemoteDatasource.dart';
import 'package:humane/features/listActions/domain/entities/category.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:dartz/dartz.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';
import 'package:humane/features/listActions/domain/repositories/IDonationRepository.dart';

class DonationRepository extends IDonationRepository {
  IDonationRemoteDatasource remoteDatasource;
  IDonationLocalDatasource localDatasource;

  DonationRepository({required this.remoteDatasource, required this.localDatasource});

  @override
  Future<Either<Failure, User>> createDonation(
      List<String> thumbnails, String title, String description, Category category, String address, String zipCode) {
    // TODO: implement createDonation
    throw UnimplementedError();
  }

  @override
  Future<Either<Failure, Pagination<Donation>>> getDonations(int take, int? cursor, Map<String, dynamic>? where) async {
    return this.remoteDatasource.getDonations(take, cursor, where);
  }
}
