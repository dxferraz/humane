import 'package:get_it/get_it.dart';
import 'package:humane/Components/BottomTabNavigator/bottomTabNavigator_model.dart';
// import 'package:humane/Data/user/moor_user_database.dart';
// import 'package:humane/Data/user/user_dao.dart';
import 'package:humane/Services/auth_service.dart';

import 'package:humane/Services/search_service.dart';

final getIt = GetIt.instance;

void setup() {
  //Scoped Models
  getIt.registerSingleton<HomeModel>(HomeModel());

  //Services
  // getIt.registerSingleton<UsersDao>(GoStoragesDatabase().usersDao);
  // getIt.registerSingleton<AuthService>(AuthService());
  getIt.registerSingleton<SearchService>(SearchService());
}
