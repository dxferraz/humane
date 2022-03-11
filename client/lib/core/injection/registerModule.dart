import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:injectable/injectable.dart';

@module
abstract class IRegisterModule {
  @lazySingleton
  GraphQLClient get gqlClient {
    final HttpLink httpLink = HttpLink(
      dotenv.env['API_URL_GRAPHQL']!,
    );

    final AuthLink authLink = AuthLink(
      getToken: () async => 'Bearer <YOUR_PERSONAL_ACCESS_TOKEN>',
      // OR
      // getToken: () => 'Bearer <YOUR_PERSONAL_ACCESS_TOKEN>',
    );

    final Link link = authLink.concat(httpLink);

    return GraphQLClient(
      cache: GraphQLCache(),
      link: link,
    );
  }
}

class RegisterModule extends IRegisterModule {}
