import 'dart:io';
import 'package:humane/features/lists_storages/domain/entities/Storage.dart';
import 'package:humane/Utils/AppExceptions.dart';
import 'package:humane/Utils/response.dart';
import 'package:humane/config.dart';
import 'package:http/http.dart';
import 'package:rxdart/rxdart.dart';

class SearchService {
  int currentPage = 0;
  final locations = BehaviorSubject<List<String>>();

  Stream<List<Storage>> all(int page) async* {
    List<Storage> storages = [];
    try {
      print("Access: " + endpoint + "/storage/all?page=$page");
      Map<String, dynamic> map = HandleResponse.returnResponse(await get(
        endpoint + "/storage/all?page=$page",
        headers: <String, String>{
          'Accept': 'application/json',
        },
      ));

      List<dynamic> locationsData = map['locations'];
      locations.add(locationsData.map((e) => e.toString()).toList());

      currentPage = map['storages']['current_page'];

      List<dynamic> data = map['storages']['data'];
      data.forEach((storage) {
        return storages.add(Storage.fromMap(storage)!);
      });
    } on SocketException {
      throw FetchDataException('No Internet connection');
    }
    yield storages;
  }
}
