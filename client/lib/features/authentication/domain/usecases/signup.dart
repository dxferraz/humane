import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/core/usecases/usecase.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/authentication/domain/repositories/IUserRepository.dart';

class SignUp extends UseCase<User, SignInParams> {
  IUserRepository repository;

  SignUp(this.repository);

  @override
  Future<Either<Failure, User>> call(SignInParams param) async {
    return await repository.signUp(param.name, param.email, param.password)!;
  }
}

class SignInParams extends Equatable {
  final String name;
  final String email;
  final String password;
  const SignInParams({required this.name, required this.email, required this.password});

  @override
  List<Object> get props => [name, email, password];
}
