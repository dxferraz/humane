import 'package:humane/core/injection/registerModule.dart';
import 'package:humane/core/network/networkInfo.dart';
import 'package:humane/features/authentication/data/datasources/UserLocalDataSource.dart';
import 'package:humane/features/authentication/data/datasources/UserRemoteDataSource.dart';
import 'package:humane/features/authentication/data/repositories/UserRepository.dart';
import 'package:humane/features/authentication/domain/repositories/IUserRepository.dart';
import 'package:humane/features/authentication/domain/usecases/signin.dart';
import 'package:humane/features/authentication/domain/usecases/signup.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';
import 'package:data_connection_checker/data_connection_checker.dart';
import 'package:get_it/get_it.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

final getIt = GetIt.instance;

void setup() {
  final registerModule = RegisterModule();

  //Scoped Models
  getIt.registerFactory<SignUserBloc>(() => SignUserBloc(signIn: getIt(), signUp: getIt()));
  getIt.registerLazySingleton<GraphQLClient>(() => registerModule.gqlClient);

  //Use cases
  getIt.registerLazySingleton<SignIn>(() => SignIn(getIt()));
  getIt.registerLazySingleton<SignUp>(() => SignUp(getIt()));

  // Repository
  getIt.registerLazySingleton<IUserRepository>(() => UserRepository(remoteDataSource: getIt(), localDataSource: getIt()));

  // Data sources
  getIt.registerLazySingleton<IUserRemoteDataSource>(
    () => UserRemoteDataSource(getIt<GraphQLClient>()),
  );
  getIt.registerLazySingleton<IUserLocalDataSource>(
    () => UserLocalDataSource(),
  );

  // Network Checker
  getIt.registerLazySingleton<INetworkInfo>(() => NetworkInfo(getIt()));

  //External
  getIt.registerLazySingleton<DataConnectionChecker>(() => DataConnectionChecker());
}
