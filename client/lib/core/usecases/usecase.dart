import 'package:dartz/dartz.dart';
import 'package:humane/core/errors/failures.dart';

abstract class UseCase<Type, Params> {
  Future<Either<Failure, Type>> call(Params param);
}
