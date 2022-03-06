// library flutter_recaptcha_v2;

// import 'package:humane/Components/shared_components/Button.dart';
// import 'package:webview_flutter/webview_flutter.dart';
// import 'package:flutter/foundation.dart';
// import 'package:flutter/material.dart';
// import 'package:http/http.dart' as http;
// import 'dart:convert';

// class RecaptchaV2 extends StatefulWidget {
//   final String apiKey;
//   final String apiSecret;
//   final String pluginURL = "https://recaptcha-flutter-plugin.firebaseapp.com/";
//   final RecaptchaV2Controller controller;

//   final ValueChanged<bool> onVerifiedSuccessfully;
//   final ValueChanged<String> onVerifiedError;

//   RecaptchaV2({
//     this.apiKey,
//     this.apiSecret,
//     RecaptchaV2Controller controller,
//     this.onVerifiedSuccessfully,
//     this.onVerifiedError,
//   })  : controller = controller ?? RecaptchaV2Controller(),
//         assert(apiKey != null, "Google ReCaptcha API KEY is missing."),
//         assert(apiSecret != null, "Google ReCaptcha API SECRET is missing.");

//   @override
//   State<StatefulWidget> createState() => _RecaptchaV2State();
// }

// class _RecaptchaV2State extends State<RecaptchaV2> {
//   RecaptchaV2Controller controller;
//   WebViewController webViewController;

//   void verifyToken(String token) async {
//     String url = "https://www.google.com/recaptcha/api/siteverify";
//     http.Response response = await http.post(url, body: {
//       "secret": widget.apiSecret,
//       "response": token,
//     });

//     // print("Response status: ${response.statusCode}");
//     // print("Response body: ${response.body}");

//     if (response.statusCode == 200) {
//       dynamic json = jsonDecode(response.body);
//       if (json['success']) {
//         widget.onVerifiedSuccessfully(true);
//       } else {
//         widget.onVerifiedSuccessfully(false);
//         widget.onVerifiedError(json['error-codes'].toString());
//       }
//     }

//     // hide captcha
//     controller.hide();
//   }

//   void onListen() {
//     if (controller.visible) {
//       if (webViewController != null) {
//         webViewController.clearCache();
//         webViewController.reload();
//       }
//     }
//     setState(() {
//       controller.visible;
//     });
//   }

//   @override
//   void initState() {
//     controller = widget.controller;
//     controller.addListener(onListen);
//     super.initState();
//   }

//   @override
//   void didUpdateWidget(RecaptchaV2 oldWidget) {
//     if (widget.controller != oldWidget.controller) {
//       oldWidget.controller.removeListener(onListen);
//       controller = widget.controller;
//       controller.removeListener(onListen);
//     }
//     super.didUpdateWidget(oldWidget);
//   }

//   @override
//   void dispose() {
//     controller.removeListener(onListen);
//     controller.dispose();
//     super.dispose();
//   }

//   @override
//   Widget build(BuildContext context) {
//     return controller.visible
//         ? Container(
//             child: Stack(
//               children: <Widget>[
//                 Container(
//                   width: MediaQuery.of(context).size.width,
//                   height: MediaQuery.of(context).size.height,
//                   decoration:
//                       BoxDecoration(color: Color.fromRGBO(0, 0, 0, 0.7)),
//                 ),
//                 Container(
//                   height: MediaQuery.of(context).size.height,
//                   alignment: Alignment.center,
//                   child: Container(
//                     alignment: Alignment.center,
//                     width: 320,
//                     height: 540,
//                     child: WebView(
//                       initialUrl:
//                           "${widget.pluginURL}?api_key=${widget.apiKey}",
//                       javascriptMode: JavascriptMode.unrestricted,
//                       javascriptChannels: <JavascriptChannel>[
//                         JavascriptChannel(
//                           name: 'RecaptchaFlutterChannel',
//                           onMessageReceived: (JavascriptMessage receiver) {
//                             // print(receiver.message);
//                             String _token = receiver.message;
//                             if (_token.contains("verify")) {
//                               _token = _token.substring(7);
//                             }
//                             controller._token = _token;
//                             verifyToken(_token);
//                           },
//                         ),
//                       ].toSet(),
//                       onWebViewCreated: (_controller) {
//                         webViewController = _controller;
//                       },
//                     ),
//                   ),
//                 ),
//                 Container(
//                   alignment: Alignment.center,
//                   height: MediaQuery.of(context).size.height,
//                   padding: EdgeInsets.symmetric(horizontal: 30),
//                   child: Align(
//                     alignment: Alignment.bottomCenter,
//                     child: SizedBox(
//                       height: 60,
//                       child: Row(
//                         mainAxisSize: MainAxisSize.max,
//                         children: <Widget>[
//                           Expanded(
//                             child: Button(
//                               text: "CANCEL RECAPTCHA",
//                               onPress: () {
//                                 controller.hide();
//                               },
//                             ),
//                           ),
//                         ],
//                       ),
//                     ),
//                   ),
//                 ),
//               ],
//             ),
//           )
//         : Container();
//   }
// }

// class RecaptchaV2Controller extends ChangeNotifier {
//   bool isDisposed = false;
//   List<VoidCallback> _listeners = [];
//   String _token;

//   bool _visible = false;
//   bool get visible => _visible;
//   String get token => _token;

//   void show() {
//     _visible = true;
//     if (!isDisposed) notifyListeners();
//   }

//   void hide() {
//     _visible = false;
//     if (!isDisposed) notifyListeners();
//   }

//   @override
//   void dispose() {
//     _listeners = [];
//     isDisposed = true;
//     super.dispose();
//   }

//   @override
//   void addListener(listener) {
//     _listeners.add(listener);
//     super.addListener(listener);
//   }

//   @override
//   void removeListener(listener) {
//     _listeners.remove(listener);
//     super.removeListener(listener);
//   }
// }
