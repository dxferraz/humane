import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import '../repositories/IUserRepository.dart';

class ForgotPassword extends UseCase<String, ForgotPasswordParams> {
  final IUserRepository repository;
  ForgotPassword(this.repository);

  @override
  Future<Either<Failure, String>> call(ForgotPasswordParams param) async {
    return repository.forgotPassword(param.email);
  }
}

class ForgotPasswordParams extends Equatable {
  final String email;

  const ForgotPasswordParams({required this.email});

  @override
  List<Object> get props => [email];
}
