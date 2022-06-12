// These imports are only needed to open the database
import 'dart:io';
import 'package:drift/native.dart';
import 'package:humane/features/authentication/data/datasources/database/user.dao.dart';
import 'package:humane/features/authentication/data/datasources/database/user.table.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as p;
import 'package:drift/drift.dart';

part 'database.g.dart';

@DriftDatabase(tables: [UserTable], daos: [UserDao])
class LocalDatabase extends _$LocalDatabase {
  // we tell the database where to store the data with this constructor
  LocalDatabase() : super(_openConnection());

  // You should bump this number whenever you change or add a table definition. 
  @override
  int get schemaVersion => 1;
}

LazyDatabase _openConnection() {
  // the LazyDatabase util lets us find the right location for the file async.
  return LazyDatabase(() async {
    // put the database file, called db.sqlite here, into the documents folder
    // for your app.
    final dbFolder = await getApplicationDocumentsDirectory();
    final file = File(p.join(dbFolder.path, 'db.sqlite'));
    return NativeDatabase(file);
  });
}
