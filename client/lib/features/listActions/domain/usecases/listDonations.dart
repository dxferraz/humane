import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';
import 'package:humane/features/listActions/domain/repositories/IDonationRepository.dart';

class ListDonation extends UseCase<Pagination<Donation>, PageParams> {
  final IDonationRepository repository;

  ListDonation(this.repository);

  @override
  Future<Either<Failure, Pagination<Donation>>> call(PageParams param) async {
    return repository.getDonations(param.take, param.cursor, param.where);
  }
}

// ignore: must_be_immutable
class PageParams extends Equatable {
  final int take;
  int? cursor;
  Map<String, dynamic>? where;

  PageParams({required this.take, required this.cursor, this.where});

  @override
  List<Object> get props => [take];
}
