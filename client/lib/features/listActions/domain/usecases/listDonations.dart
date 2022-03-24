import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/repositories/IDonationRepository.dart';

class ListDonation extends UseCase<List<Donation>, PageParams> {
  final IDonationRepository repository;

  ListDonation(this.repository);

  @override
  Future<Either<Failure, List<Donation>>> call(PageParams param) async {
    return repository.getDonations(param.take, param.cursor);
  }
}

class PageParams extends Equatable {
  final int take;
  final int? cursor;

  const PageParams({required this.take, this.cursor});

  @override
  List<Object> get props => [take];
}
