import 'package:dartz/dartz.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/listActions/domain/entities/category.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';

abstract class IDonationRepository {
  Future<Either<Failure, User>> createDonation(
      List<String> thumbnails, String title, String description, Category category, String address, String zipCode);
  // Future<Either<Failure, User>> updateDonation(String name, String email, String password);
  // Future<Either<Failure, User>> deleteDonation(String password);
  Future<Either<Failure, Pagination<Donation>>> getDonations(int take, int? cursor, Map<String, dynamic>? where);
}
