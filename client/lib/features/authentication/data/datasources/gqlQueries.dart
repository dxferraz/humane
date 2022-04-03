mixin GqlQuery {
  static String createUserQuery = '''
  mutation CreateUser(\$input: UserCreateInput!){
    createUser(data: \$input){
      name,
      email,
    }
  }
  ''';

  static String loginUserQuery = '''
  mutation LoginUser(\$input: UserLoginInput!){
    loginUser(data: \$input){
      name,
      email,
      thumbnail
    }
  }
  ''';

  static String forgotPasswordQuery = '''
  mutation ForgotPassword(\$input: ForgotPasswordInput!) {
    forgotPassword(data: \$input)
  }
  ''';
}
