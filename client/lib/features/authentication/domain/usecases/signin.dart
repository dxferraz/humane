import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import '../repositories/IUserRepository.dart';

class SignIn extends UseCase<User, SignInParams> {
  final IUserRepository repository;
  SignIn(this.repository);

  @override
  Future<Either<Failure, User>> call(SignInParams param) async {
    return await repository.signIn(param.email, param.password);
  }
}

class SignInParams extends Equatable {
  final String email;
  final String password;
  const SignInParams({required this.email, required this.password});

  @override
  List<Object> get props => [email, password];
}
