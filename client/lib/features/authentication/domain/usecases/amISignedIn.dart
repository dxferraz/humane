import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import '../repositories/IUserRepository.dart';

class AmISignIn extends UseCase<User, AmIsignedParams> {
  final IUserRepository repository;
  AmISignIn(this.repository);

  @override
  Future<Either<Failure, User>> call(AmIsignedParams param) async {
    return repository.me();
  }
}

class AmIsignedParams extends Equatable {
  const AmIsignedParams();

  @override
  List<Object> get props => [];
}
