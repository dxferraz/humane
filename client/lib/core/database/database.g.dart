// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'database.dart';

// **************************************************************************
// MoorGenerator
// **************************************************************************

// ignore_for_file: unnecessary_brace_in_string_interps, unnecessary_this
class UserTableData extends DataClass implements Insertable<UserTableData> {
  final int? id;
  final String name;
  final String email;
  final int? birthdate;
  final String? role;
  final String? phone;
  final String? thumbnail;
  UserTableData(
      {this.id,
      required this.name,
      required this.email,
      this.birthdate,
      this.role,
      this.phone,
      this.thumbnail});
  factory UserTableData.fromData(Map<String, dynamic> data, {String? prefix}) {
    final effectivePrefix = prefix ?? '';
    return UserTableData(
      id: const IntType().mapFromDatabaseResponse(data['${effectivePrefix}id']),
      name: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}name'])!,
      email: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}email'])!,
      birthdate: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}birthdate']),
      role: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}role']),
      phone: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}phone']),
      thumbnail: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}thumbnail']),
    );
  }
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (!nullToAbsent || id != null) {
      map['id'] = Variable<int?>(id);
    }
    map['name'] = Variable<String>(name);
    map['email'] = Variable<String>(email);
    if (!nullToAbsent || birthdate != null) {
      map['birthdate'] = Variable<int?>(birthdate);
    }
    if (!nullToAbsent || role != null) {
      map['role'] = Variable<String?>(role);
    }
    if (!nullToAbsent || phone != null) {
      map['phone'] = Variable<String?>(phone);
    }
    if (!nullToAbsent || thumbnail != null) {
      map['thumbnail'] = Variable<String?>(thumbnail);
    }
    return map;
  }

  UserTableCompanion toCompanion(bool nullToAbsent) {
    return UserTableCompanion(
      id: id == null && nullToAbsent ? const Value.absent() : Value(id),
      name: Value(name),
      email: Value(email),
      birthdate: birthdate == null && nullToAbsent
          ? const Value.absent()
          : Value(birthdate),
      role: role == null && nullToAbsent ? const Value.absent() : Value(role),
      phone:
          phone == null && nullToAbsent ? const Value.absent() : Value(phone),
      thumbnail: thumbnail == null && nullToAbsent
          ? const Value.absent()
          : Value(thumbnail),
    );
  }

  factory UserTableData.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return UserTableData(
      id: serializer.fromJson<int?>(json['id']),
      name: serializer.fromJson<String>(json['name']),
      email: serializer.fromJson<String>(json['email']),
      birthdate: serializer.fromJson<int?>(json['birthdate']),
      role: serializer.fromJson<String?>(json['role']),
      phone: serializer.fromJson<String?>(json['phone']),
      thumbnail: serializer.fromJson<String?>(json['thumbnail']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int?>(id),
      'name': serializer.toJson<String>(name),
      'email': serializer.toJson<String>(email),
      'birthdate': serializer.toJson<int?>(birthdate),
      'role': serializer.toJson<String?>(role),
      'phone': serializer.toJson<String?>(phone),
      'thumbnail': serializer.toJson<String?>(thumbnail),
    };
  }

  UserTableData copyWith(
          {int? id,
          String? name,
          String? email,
          int? birthdate,
          String? role,
          String? phone,
          String? thumbnail}) =>
      UserTableData(
        id: id ?? this.id,
        name: name ?? this.name,
        email: email ?? this.email,
        birthdate: birthdate ?? this.birthdate,
        role: role ?? this.role,
        phone: phone ?? this.phone,
        thumbnail: thumbnail ?? this.thumbnail,
      );
  @override
  String toString() {
    return (StringBuffer('UserTableData(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('email: $email, ')
          ..write('birthdate: $birthdate, ')
          ..write('role: $role, ')
          ..write('phone: $phone, ')
          ..write('thumbnail: $thumbnail')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode =>
      Object.hash(id, name, email, birthdate, role, phone, thumbnail);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is UserTableData &&
          other.id == this.id &&
          other.name == this.name &&
          other.email == this.email &&
          other.birthdate == this.birthdate &&
          other.role == this.role &&
          other.phone == this.phone &&
          other.thumbnail == this.thumbnail);
}

class UserTableCompanion extends UpdateCompanion<UserTableData> {
  final Value<int?> id;
  final Value<String> name;
  final Value<String> email;
  final Value<int?> birthdate;
  final Value<String?> role;
  final Value<String?> phone;
  final Value<String?> thumbnail;
  const UserTableCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
    this.email = const Value.absent(),
    this.birthdate = const Value.absent(),
    this.role = const Value.absent(),
    this.phone = const Value.absent(),
    this.thumbnail = const Value.absent(),
  });
  UserTableCompanion.insert({
    this.id = const Value.absent(),
    required String name,
    required String email,
    this.birthdate = const Value.absent(),
    this.role = const Value.absent(),
    this.phone = const Value.absent(),
    this.thumbnail = const Value.absent(),
  })  : name = Value(name),
        email = Value(email);
  static Insertable<UserTableData> custom({
    Expression<int?>? id,
    Expression<String>? name,
    Expression<String>? email,
    Expression<int?>? birthdate,
    Expression<String?>? role,
    Expression<String?>? phone,
    Expression<String?>? thumbnail,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (email != null) 'email': email,
      if (birthdate != null) 'birthdate': birthdate,
      if (role != null) 'role': role,
      if (phone != null) 'phone': phone,
      if (thumbnail != null) 'thumbnail': thumbnail,
    });
  }

  UserTableCompanion copyWith(
      {Value<int?>? id,
      Value<String>? name,
      Value<String>? email,
      Value<int?>? birthdate,
      Value<String?>? role,
      Value<String?>? phone,
      Value<String?>? thumbnail}) {
    return UserTableCompanion(
      id: id ?? this.id,
      name: name ?? this.name,
      email: email ?? this.email,
      birthdate: birthdate ?? this.birthdate,
      role: role ?? this.role,
      phone: phone ?? this.phone,
      thumbnail: thumbnail ?? this.thumbnail,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int?>(id.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (email.present) {
      map['email'] = Variable<String>(email.value);
    }
    if (birthdate.present) {
      map['birthdate'] = Variable<int?>(birthdate.value);
    }
    if (role.present) {
      map['role'] = Variable<String?>(role.value);
    }
    if (phone.present) {
      map['phone'] = Variable<String?>(phone.value);
    }
    if (thumbnail.present) {
      map['thumbnail'] = Variable<String?>(thumbnail.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('UserTableCompanion(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('email: $email, ')
          ..write('birthdate: $birthdate, ')
          ..write('role: $role, ')
          ..write('phone: $phone, ')
          ..write('thumbnail: $thumbnail')
          ..write(')'))
        .toString();
  }
}

class $UserTableTable extends UserTable
    with TableInfo<$UserTableTable, UserTableData> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $UserTableTable(this.attachedDatabase, [this._alias]);
  final VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int?> id = GeneratedColumn<int?>(
      'id', aliasedName, true,
      type: const IntType(),
      requiredDuringInsert: false,
      defaultConstraints: 'PRIMARY KEY AUTOINCREMENT');
  final VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String?> name = GeneratedColumn<String?>(
      'name', aliasedName, false,
      additionalChecks:
          GeneratedColumn.checkTextLength(minTextLength: 6, maxTextLength: 32),
      type: const StringType(),
      requiredDuringInsert: true);
  final VerificationMeta _emailMeta = const VerificationMeta('email');
  @override
  late final GeneratedColumn<String?> email = GeneratedColumn<String?>(
      'email', aliasedName, false,
      type: const StringType(), requiredDuringInsert: true);
  final VerificationMeta _birthdateMeta = const VerificationMeta('birthdate');
  @override
  late final GeneratedColumn<int?> birthdate = GeneratedColumn<int?>(
      'birthdate', aliasedName, true,
      type: const IntType(), requiredDuringInsert: false);
  final VerificationMeta _roleMeta = const VerificationMeta('role');
  @override
  late final GeneratedColumn<String?> role = GeneratedColumn<String?>(
      'role', aliasedName, true,
      type: const StringType(), requiredDuringInsert: false);
  final VerificationMeta _phoneMeta = const VerificationMeta('phone');
  @override
  late final GeneratedColumn<String?> phone = GeneratedColumn<String?>(
      'phone', aliasedName, true,
      type: const StringType(), requiredDuringInsert: false);
  final VerificationMeta _thumbnailMeta = const VerificationMeta('thumbnail');
  @override
  late final GeneratedColumn<String?> thumbnail = GeneratedColumn<String?>(
      'thumbnail', aliasedName, true,
      type: const StringType(), requiredDuringInsert: false);
  @override
  List<GeneratedColumn> get $columns =>
      [id, name, email, birthdate, role, phone, thumbnail];
  @override
  String get aliasedName => _alias ?? 'user_table';
  @override
  String get actualTableName => 'user_table';
  @override
  VerificationContext validateIntegrity(Insertable<UserTableData> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('name')) {
      context.handle(
          _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('email')) {
      context.handle(
          _emailMeta, email.isAcceptableOrUnknown(data['email']!, _emailMeta));
    } else if (isInserting) {
      context.missing(_emailMeta);
    }
    if (data.containsKey('birthdate')) {
      context.handle(_birthdateMeta,
          birthdate.isAcceptableOrUnknown(data['birthdate']!, _birthdateMeta));
    }
    if (data.containsKey('role')) {
      context.handle(
          _roleMeta, role.isAcceptableOrUnknown(data['role']!, _roleMeta));
    }
    if (data.containsKey('phone')) {
      context.handle(
          _phoneMeta, phone.isAcceptableOrUnknown(data['phone']!, _phoneMeta));
    }
    if (data.containsKey('thumbnail')) {
      context.handle(_thumbnailMeta,
          thumbnail.isAcceptableOrUnknown(data['thumbnail']!, _thumbnailMeta));
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  UserTableData map(Map<String, dynamic> data, {String? tablePrefix}) {
    return UserTableData.fromData(data,
        prefix: tablePrefix != null ? '$tablePrefix.' : null);
  }

  @override
  $UserTableTable createAlias(String alias) {
    return $UserTableTable(attachedDatabase, alias);
  }
}

abstract class _$LocalDatabase extends GeneratedDatabase {
  _$LocalDatabase(QueryExecutor e) : super(SqlTypeSystem.defaultInstance, e);
  late final $UserTableTable userTable = $UserTableTable(this);
  late final UserDao userDao = UserDao(this as LocalDatabase);
  @override
  Iterable<TableInfo> get allTables => allSchemaEntities.whereType<TableInfo>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities => [userTable];
}
