import 'package:humane/core/flavors/flavorConfig.dart';
import 'package:humane/core/injection/registerModule.dart';
import 'package:humane/core/network/networkInfo.dart';
import 'package:humane/features/authentication/data/datasources/UserLocalDataSource.dart';
import 'package:humane/features/authentication/data/datasources/UserRemoteDataSource.dart';
import 'package:humane/features/authentication/data/repositories/UserRepository.dart';
import 'package:humane/features/authentication/domain/repositories/IUserRepository.dart';
import 'package:humane/features/authentication/domain/usecases/forgotPassword.dart';
import 'package:humane/features/authentication/domain/usecases/signIn.dart';
import 'package:humane/features/authentication/domain/usecases/signUp.dart';
import 'package:humane/features/authentication/presentation/bloc/signUserBloc.dart';
import 'package:data_connection_checker/data_connection_checker.dart';
import 'package:get_it/get_it.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:humane/features/listActions/data/datasources/DonationLocalDatasource.dart';
import 'package:humane/features/listActions/data/datasources/DonationRemoteDatasource.dart';
import 'package:humane/features/listActions/data/repositories/DonationRepository.dart';
import 'package:humane/features/listActions/domain/repositories/IDonationRepository.dart';
import 'package:humane/features/listActions/domain/usecases/listDonations.dart';
import 'package:humane/features/listActions/presentation/bloc/ListActionsBloc.dart';
import 'package:shared_preferences/shared_preferences.dart';

final getIt = GetIt.instance;

Future<void> setup(config) async {
  final registerModule = RegisterModule();

  // Shared Preferences
  getIt.registerSingleton(await SharedPreferences.getInstance());

  // Flavor Config
  getIt.registerLazySingleton<FlavorConfig>(() => config);

  //Scoped Models
  getIt.registerFactory<SignUserBloc>(() => SignUserBloc(signIn: getIt(), signUp: getIt(), forgotPassword: getIt()));
  getIt.registerLazySingleton<ListActionsBloc>(() => ListActionsBloc(listDonationUseCase: getIt()));
  getIt.registerLazySingleton<GraphQLClient>(() => registerModule.gqlClient);

  //Use cases
  getIt.registerLazySingleton<SignIn>(() => SignIn(getIt()));
  getIt.registerLazySingleton<SignUp>(() => SignUp(getIt()));
  getIt.registerLazySingleton<ForgotPassword>(() => ForgotPassword(getIt()));
  getIt.registerLazySingleton<ListDonation>(() => ListDonation(getIt()));
  // Repository
  getIt.registerLazySingleton<IUserRepository>(() => UserRepository(remoteDataSource: getIt(), localDataSource: getIt()));
  getIt.registerLazySingleton<IDonationRepository>(() => DonationRepository(remoteDatasource: getIt(), localDatasource: getIt()));

  // Data sources
  getIt.registerLazySingleton<IUserRemoteDataSource>(
    () => UserRemoteDataSource(getIt<GraphQLClient>()),
  );
  getIt.registerLazySingleton<IUserLocalDataSource>(
    () => UserLocalDataSource(),
  );
  getIt.registerLazySingleton<IDonationRemoteDatasource>(
    () => DonationRemoteDatasource(getIt<GraphQLClient>()),
  );
  getIt.registerLazySingleton<IDonationLocalDatasource>(
    () => DonationLocalDatasource(),
  );

  // Network Checker
  getIt.registerLazySingleton<INetworkInfo>(() => NetworkInfo(getIt()));

  //External
  getIt.registerLazySingleton<DataConnectionChecker>(() => DataConnectionChecker());
}
