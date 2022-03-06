// import 'package:humane/Data/user/moor_user_database.dart';
// import 'package:moor/moor.dart';

// part 'user_dao.g.dart';

// //DAO (Data Access Objects)
// @UseDao(tables: [Users])
// class UsersDao extends DatabaseAccessor<GoStoragesDatabase> with _$UsersDaoMixin {
//   UsersDao(GoStoragesDatabase db) : super(db);

//   Future<User> get getUser => select(users).getSingle();

//   Stream<User> get watchUser => select(users).watchSingle();

//   Future<int> addUser(UsersCompanion entry) {
//     return into(users).insert(entry);
//   }

//   Future updateUser(User entry) {
//     return update(users).replace(entry);
//   }

//   Future deleteUser(User entry) {
//     return delete(users).delete(entry);
//   }
// }
