mixin GqlQuery {
  static String createUserQuery = '''
  mutation{
  createUser(\$data: User){
    name
  }
}
  ''';
}
