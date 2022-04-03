import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import '../repositories/IUserRepository.dart';

class SignOut extends UseCase<int, SignOutParams> {
  final IUserRepository repository;
  SignOut(this.repository);

  @override
  Future<Either<Failure, int>> call(SignOutParams param) async {
    return repository.signOut(param.id);
  }
}

class SignOutParams extends Equatable {
  final int id;
  const SignOutParams({required this.id});

  @override
  List<Object> get props => [id];
}
