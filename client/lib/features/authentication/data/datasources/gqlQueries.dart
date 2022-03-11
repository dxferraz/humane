mixin GqlQuery {
  static String createUserQuery = '''
  mutation CreateUser(\$input: UserCreateInput!){
    createUser(data: \$input){
      name
    }
  }
  ''';
}
