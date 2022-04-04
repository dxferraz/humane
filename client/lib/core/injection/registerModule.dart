import 'dart:async';
import 'dart:convert';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:injectable/injectable.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

@module
abstract class IRegisterModule {
  // Get user token on request
  FutureOr<Map<String, dynamic>?> httpResponseDecoder(http.Response httpResponse) async {
    String? headerToken = httpResponse.headers['authorization'];
    if (headerToken != null) {
      final prefs = await SharedPreferences.getInstance();
      prefs.setString('sign_token', headerToken);
    }
    return json.decode(
      utf8.decode(
        httpResponse.bodyBytes,
      ),
    ) as Map<String, dynamic>?;
  }

  @lazySingleton
  GraphQLClient get gqlClient {
    final HttpLink httpLink = HttpLink(
      dotenv.env['API_URL_GRAPHQL']!,
      httpResponseDecoder: httpResponseDecoder,
    );

    // If token is set, set in every request
    final AuthLink authLink = AuthLink(
      getToken: () async {
        final prefs = await SharedPreferences.getInstance();
        String? token = prefs.getString('sign_token');
        if (token != null || token != '') {
          return token;
        }
        return null;
      },
    );

    final Link link = authLink.concat(httpLink);

    return GraphQLClient(
      cache: GraphQLCache(),
      link: link,
    );
  }
}

class RegisterModule extends IRegisterModule {}
