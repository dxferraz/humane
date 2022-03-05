// import 'package:humane/Services/auth_service.dart';
// import 'package:humane/Services/service_locator.dart';
// import 'package:humane/services/service_locator.dart';
// import 'package:http_interceptor/interceptor_contract.dart';
// import 'package:http_interceptor/models/request_data.dart';
// import 'package:http_interceptor/models/response_data.dart';

// class LoggingInterceptor implements InterceptorContract {
//   @override
//   Future<RequestData> interceptRequest({RequestData data}) async {
//     try {
//       data.headers["Accept"] = "application/json";
//       if (getIt<AuthService>().accessToken == null) return data;
//       data.headers["Authorization"] =
//           "Bearer " + getIt<AuthService>().accessToken;
//     } catch (e) {
//       print(e);
//     }
//     return data;
//   }

//   @override
//   Future<ResponseData> interceptResponse({ResponseData data}) async {
//     return data;
//   }
// }
