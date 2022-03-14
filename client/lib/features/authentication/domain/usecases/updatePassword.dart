import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import '../repositories/IUserRepository.dart';

class UpdatePassword extends UseCase<User, UpdatePasswordParams> {
  final IUserRepository repository;
  UpdatePassword(this.repository);

  @override
  Future<Either<Failure, User>> call(UpdatePasswordParams param) async {
    return repository.updatePassword(param.password);
  }
}

class UpdatePasswordParams extends Equatable {
  final String password;

  const UpdatePasswordParams({required this.password});

  @override
  List<Object> get props => [password];
}
