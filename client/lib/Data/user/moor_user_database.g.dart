// // GENERATED CODE - DO NOT MODIFY BY HAND

// part of 'moor_user_database.dart';

// // **************************************************************************
// // MoorGenerator
// // **************************************************************************

// // ignore_for_file: unnecessary_brace_in_string_interps, unnecessary_this
// class User extends DataClass implements Insertable<User> {
//   final int id;
//   final String name;
//   final String lastName;
//   final String email;
//   final String photo_url;
//   final String token;
//   User(
//       {required this.id,
//       required this.name,
//       required this.lastName,
//       required this.email,
//       required this.photo_url,
//       required this.token});
//   factory User.fromData(Map<String, dynamic> data, GeneratedDatabase db,
//       {String prefix}) {
//     final effectivePrefix = prefix ?? '';
//     final intType = db.typeSystem.forDartType<int>();
//     final stringType = db.typeSystem.forDartType<String>();
//     return User(
//       id: intType.mapFromDatabaseResponse(data['${effectivePrefix}id']),
//       name: stringType.mapFromDatabaseResponse(data['${effectivePrefix}name']),
//       lastName: stringType
//           .mapFromDatabaseResponse(data['${effectivePrefix}last_name']),
//       email:
//           stringType.mapFromDatabaseResponse(data['${effectivePrefix}email']),
//       photo_url: stringType
//           .mapFromDatabaseResponse(data['${effectivePrefix}photo_url']),
//       token:
//           stringType.mapFromDatabaseResponse(data['${effectivePrefix}token']),
//     );
//   }
//   @override
//   Map<String, Expression> toColumns(bool nullToAbsent) {
//     final map = <String, Expression>{};
//     if (!nullToAbsent || id != null) {
//       map['id'] = Variable<int>(id);
//     }
//     if (!nullToAbsent || name != null) {
//       map['name'] = Variable<String>(name);
//     }
//     if (!nullToAbsent || lastName != null) {
//       map['last_name'] = Variable<String>(lastName);
//     }
//     if (!nullToAbsent || email != null) {
//       map['email'] = Variable<String>(email);
//     }
//     if (!nullToAbsent || photo_url != null) {
//       map['photo_url'] = Variable<String>(photo_url);
//     }
//     if (!nullToAbsent || token != null) {
//       map['token'] = Variable<String>(token);
//     }
//     return map;
//   }

//   UsersCompanion toCompanion(bool nullToAbsent) {
//     return UsersCompanion(
//       id: id == null && nullToAbsent ? const Value.absent() : Value(id),
//       name: name == null && nullToAbsent ? const Value.absent() : Value(name),
//       lastName: lastName == null && nullToAbsent
//           ? const Value.absent()
//           : Value(lastName),
//       email:
//           email == null && nullToAbsent ? const Value.absent() : Value(email),
//       photo_url: photo_url == null && nullToAbsent
//           ? const Value.absent()
//           : Value(photo_url),
//       token:
//           token == null && nullToAbsent ? const Value.absent() : Value(token),
//     );
//   }

//   factory User.fromJson(Map<String, dynamic> json,
//       {ValueSerializer serializer}) {
//     serializer ??= moorRuntimeOptions.defaultSerializer;
//     return User(
//       id: serializer.fromJson<int>(json['id']),
//       name: serializer.fromJson<String>(json['name']),
//       lastName: serializer.fromJson<String>(json['lastName']),
//       email: serializer.fromJson<String>(json['email']),
//       photo_url: serializer.fromJson<String>(json['photo_url']),
//       token: serializer.fromJson<String>(json['token']),
//     );
//   }
//   @override
//   Map<String, dynamic> toJson({ValueSerializer serializer}) {
//     serializer ??= moorRuntimeOptions.defaultSerializer;
//     return <String, dynamic>{
//       'id': serializer.toJson<int>(id),
//       'name': serializer.toJson<String>(name),
//       'lastName': serializer.toJson<String>(lastName),
//       'email': serializer.toJson<String>(email),
//       'photo_url': serializer.toJson<String>(photo_url),
//       'token': serializer.toJson<String>(token),
//     };
//   }

//   User copyWith(
//           {int id,
//           String name,
//           String lastName,
//           String email,
//           String photo_url,
//           String token}) =>
//       User(
//         id: id ?? this.id,
//         name: name ?? this.name,
//         lastName: lastName ?? this.lastName,
//         email: email ?? this.email,
//         photo_url: photo_url ?? this.photo_url,
//         token: token ?? this.token,
//       );
//   @override
//   String toString() {
//     return (StringBuffer('User(')
//           ..write('id: $id, ')
//           ..write('name: $name, ')
//           ..write('lastName: $lastName, ')
//           ..write('email: $email, ')
//           ..write('photo_url: $photo_url, ')
//           ..write('token: $token')
//           ..write(')'))
//         .toString();
//   }

//   @override
//   int get hashCode => $mrjf($mrjc(
//       id.hashCode,
//       $mrjc(
//           name.hashCode,
//           $mrjc(
//               lastName.hashCode,
//               $mrjc(email.hashCode,
//                   $mrjc(photo_url.hashCode, token.hashCode))))));
//   @override
//   bool operator ==(dynamic other) =>
//       identical(this, other) ||
//       (other is User &&
//           other.id == this.id &&
//           other.name == this.name &&
//           other.lastName == this.lastName &&
//           other.email == this.email &&
//           other.photo_url == this.photo_url &&
//           other.token == this.token);
// }

// class UsersCompanion extends UpdateCompanion<User> {
//   final Value<int> id;
//   final Value<String> name;
//   final Value<String> lastName;
//   final Value<String> email;
//   final Value<String> photo_url;
//   final Value<String> token;
//   const UsersCompanion({
//     this.id = const Value.absent(),
//     this.name = const Value.absent(),
//     this.lastName = const Value.absent(),
//     this.email = const Value.absent(),
//     this.photo_url = const Value.absent(),
//     this.token = const Value.absent(),
//   });
//   UsersCompanion.insert({
//     this.id = const Value.absent(),
//     required String name,
//     required String lastName,
//     required String email,
//     required String photo_url,
//     required String token,
//   })  : name = Value(name),
//         lastName = Value(lastName),
//         email = Value(email),
//         photo_url = Value(photo_url),
//         token = Value(token);
//   static Insertable<User> custom({
//     Expression<int> id,
//     Expression<String> name,
//     Expression<String> lastName,
//     Expression<String> email,
//     Expression<String> photo_url,
//     Expression<String> token,
//   }) {
//     return RawValuesInsertable({
//       if (id != null) 'id': id,
//       if (name != null) 'name': name,
//       if (lastName != null) 'last_name': lastName,
//       if (email != null) 'email': email,
//       if (photo_url != null) 'photo_url': photo_url,
//       if (token != null) 'token': token,
//     });
//   }

//   UsersCompanion copyWith(
//       {Value<int> id,
//       Value<String> name,
//       Value<String> lastName,
//       Value<String> email,
//       Value<String> photo_url,
//       Value<String> token}) {
//     return UsersCompanion(
//       id: id ?? this.id,
//       name: name ?? this.name,
//       lastName: lastName ?? this.lastName,
//       email: email ?? this.email,
//       photo_url: photo_url ?? this.photo_url,
//       token: token ?? this.token,
//     );
//   }

//   @override
//   Map<String, Expression> toColumns(bool nullToAbsent) {
//     final map = <String, Expression>{};
//     if (id.present) {
//       map['id'] = Variable<int>(id.value);
//     }
//     if (name.present) {
//       map['name'] = Variable<String>(name.value);
//     }
//     if (lastName.present) {
//       map['last_name'] = Variable<String>(lastName.value);
//     }
//     if (email.present) {
//       map['email'] = Variable<String>(email.value);
//     }
//     if (photo_url.present) {
//       map['photo_url'] = Variable<String>(photo_url.value);
//     }
//     if (token.present) {
//       map['token'] = Variable<String>(token.value);
//     }
//     return map;
//   }

//   @override
//   String toString() {
//     return (StringBuffer('UsersCompanion(')
//           ..write('id: $id, ')
//           ..write('name: $name, ')
//           ..write('lastName: $lastName, ')
//           ..write('email: $email, ')
//           ..write('photo_url: $photo_url, ')
//           ..write('token: $token')
//           ..write(')'))
//         .toString();
//   }
// }

// class $UsersTable extends Users with TableInfo<$UsersTable, User> {
//   final GeneratedDatabase _db;
//   final String _alias;
//   $UsersTable(this._db, [this._alias]);
//   final VerificationMeta _idMeta = const VerificationMeta('id');
//   GeneratedIntColumn _id;
//   @override
//   GeneratedIntColumn get id => _id ??= _constructId();
//   GeneratedIntColumn _constructId() {
//     return GeneratedIntColumn('id', $tableName, false,
//         hasAutoIncrement: true, declaredAsPrimaryKey: true);
//   }

//   final VerificationMeta _nameMeta = const VerificationMeta('name');
//   GeneratedTextColumn _name;
//   @override
//   GeneratedTextColumn get name => _name ??= _constructName();
//   GeneratedTextColumn _constructName() {
//     return GeneratedTextColumn('name', $tableName, false,
//         minTextLength: 2, maxTextLength: 40);
//   }

//   final VerificationMeta _lastNameMeta = const VerificationMeta('lastName');
//   GeneratedTextColumn _lastName;
//   @override
//   GeneratedTextColumn get lastName => _lastName ??= _constructLastName();
//   GeneratedTextColumn _constructLastName() {
//     return GeneratedTextColumn(
//       'last_name',
//       $tableName,
//       false,
//     );
//   }

//   final VerificationMeta _emailMeta = const VerificationMeta('email');
//   GeneratedTextColumn _email;
//   @override
//   GeneratedTextColumn get email => _email ??= _constructEmail();
//   GeneratedTextColumn _constructEmail() {
//     return GeneratedTextColumn(
//       'email',
//       $tableName,
//       false,
//     );
//   }

//   final VerificationMeta _photo_urlMeta = const VerificationMeta('photo_url');
//   GeneratedTextColumn _photo_url;
//   @override
//   GeneratedTextColumn get photo_url => _photo_url ??= _constructPhotoUrl();
//   GeneratedTextColumn _constructPhotoUrl() {
//     return GeneratedTextColumn(
//       'photo_url',
//       $tableName,
//       false,
//     );
//   }

//   final VerificationMeta _tokenMeta = const VerificationMeta('token');
//   GeneratedTextColumn _token;
//   @override
//   GeneratedTextColumn get token => _token ??= _constructToken();
//   GeneratedTextColumn _constructToken() {
//     return GeneratedTextColumn(
//       'token',
//       $tableName,
//       false,
//     );
//   }

//   @override
//   List<GeneratedColumn> get $columns =>
//       [id, name, lastName, email, photo_url, token];
//   @override
//   $UsersTable get asDslTable => this;
//   @override
//   String get $tableName => _alias ?? 'users';
//   @override
//   final String actualTableName = 'users';
//   @override
//   VerificationContext validateIntegrity(Insertable<User> instance,
//       {bool isInserting = false}) {
//     final context = VerificationContext();
//     final data = instance.toColumns(true);
//     if (data.containsKey('id')) {
//       context.handle(_idMeta, id.isAcceptableOrUnknown(data['id'], _idMeta));
//     }
//     if (data.containsKey('name')) {
//       context.handle(
//           _nameMeta, name.isAcceptableOrUnknown(data['name'], _nameMeta));
//     } else if (isInserting) {
//       context.missing(_nameMeta);
//     }
//     if (data.containsKey('last_name')) {
//       context.handle(_lastNameMeta,
//           lastName.isAcceptableOrUnknown(data['last_name'], _lastNameMeta));
//     } else if (isInserting) {
//       context.missing(_lastNameMeta);
//     }
//     if (data.containsKey('email')) {
//       context.handle(
//           _emailMeta, email.isAcceptableOrUnknown(data['email'], _emailMeta));
//     } else if (isInserting) {
//       context.missing(_emailMeta);
//     }
//     if (data.containsKey('photo_url')) {
//       context.handle(_photo_urlMeta,
//           photo_url.isAcceptableOrUnknown(data['photo_url'], _photo_urlMeta));
//     } else if (isInserting) {
//       context.missing(_photo_urlMeta);
//     }
//     if (data.containsKey('token')) {
//       context.handle(
//           _tokenMeta, token.isAcceptableOrUnknown(data['token'], _tokenMeta));
//     } else if (isInserting) {
//       context.missing(_tokenMeta);
//     }
//     return context;
//   }

//   @override
//   Set<GeneratedColumn> get $primaryKey => {id};
//   @override
//   User map(Map<String, dynamic> data, {String tablePrefix}) {
//     final effectivePrefix = tablePrefix != null ? '$tablePrefix.' : null;
//     return User.fromData(data, _db, prefix: effectivePrefix);
//   }

//   @override
//   $UsersTable createAlias(String alias) {
//     return $UsersTable(_db, alias);
//   }
// }

// abstract class _$GoStoragesDatabase extends GeneratedDatabase {
//   _$GoStoragesDatabase(QueryExecutor e)
//       : super(SqlTypeSystem.defaultInstance, e);
//   $UsersTable _users;
//   $UsersTable get users => _users ??= $UsersTable(this);
//   UsersDao _usersDao;
//   UsersDao get usersDao => _usersDao ??= UsersDao(this as GoStoragesDatabase);
//   @override
//   Iterable<TableInfo> get allTables => allSchemaEntities.whereType<TableInfo>();
//   @override
//   List<DatabaseSchemaEntity> get allSchemaEntities => [users];
// }
