import 'package:drift/drift.dart';

class UserTable extends Table {
  IntColumn get id => integer().autoIncrement().nullable()();
  TextColumn get name => text().withLength(min: 6, max: 32)();
  TextColumn get email => text()();
  IntColumn get birthdate => integer().nullable()();
  TextColumn get role => text().nullable()();
  TextColumn get phone => text().nullable()();
  TextColumn get thumbnail => text().nullable()();
}
