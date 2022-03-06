import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:humane/Utils/AppExceptions.dart';

class HandleResponse {
  static Map<String, dynamic> returnResponse(http.Response response) {
    switch (response.statusCode) {
      case 200:
        Map<String, dynamic> responseJson = json.decode(response.body.toString());
        return responseJson;
      case 400:
        throw BadRequestException(response.body.toString());
      case 401:
      case 403:
        throw UnauthorisedException(response.body.toString());
      case 500:
      default:
        throw FetchDataException(
            'Error occured while Communication with Server with StatusCode : ${response.statusCode} - ${response.body}');
    }
  }
}
