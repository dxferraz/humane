// import 'dart:io';
// import 'package:humane/Data/user/user_dao.dart';
// import 'package:moor/moor.dart';
// import 'package:moor_ffi/moor_ffi.dart';
// import 'package:path_provider/path_provider.dart';
// import 'package:path/path.dart' as p;

// part 'moor_user_database.g.dart';

// // run `flutter packages pub run build_runner watch` to compile this file;

// class Users extends Table {
//   IntColumn get id => integer().autoIncrement()();
//   TextColumn get name => text().withLength(min: 2, max: 40)();
//   TextColumn get lastName => text()();
//   TextColumn get email => text()();
//   TextColumn get photo_url => text()();
//   TextColumn get token => text()();
// }

// LazyDatabase _openConnection() {
//   // the LazyDatabase util lets us find the right location for the file async.
//   return LazyDatabase(() async {
//     // put the database file, called db.sqlite here, into the documents folder
//     // for your app.
//     final dbFolder = await getApplicationDocumentsDirectory();
//     final file = File(p.join(dbFolder.path, 'db.sqlite'));
//     return VmDatabase(file);
//   });
// }

// @UseMoor(tables: [Users], daos: [UsersDao])
// class GoStoragesDatabase extends _$GoStoragesDatabase {
//   GoStoragesDatabase() : super(_openConnection());

//   @override
//   int get schemaVersion => 5;
// }
