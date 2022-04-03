import 'package:flutter/material.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/listActions/presentation/bloc/ListActionsBloc.dart';
import 'package:material_floating_search_bar/material_floating_search_bar.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SearchModel extends ChangeNotifier {
  late List<String> _suggestions = [];

  SearchModel() {
    List<String>? historyData = getIt<SharedPreferences>().getStringList('searchHistory');
    if (historyData != null) {
      _suggestions = getIt<SharedPreferences>().getStringList('searchHistory')!;
    }
  }

  List<String> get suggestions => _suggestions.reversed.toList();

  String _query = '';
  String get query => _query;

  void onQueryChanged(String query, FloatingSearchBarController controller) async {
    if (query == _query) return;

    _query = query;

    Map<String, dynamic> where = {
      "OR": [
        {
          "title": {"contains": query}
        },
        {
          "description": {"contains": query}
        }
      ]
    };
    getIt<ListActionsBloc>().add(GetDonationsEvent(where: where));

    try {
      _suggestions.firstWhere((q) => q == query);
    } catch (e) {
      if (query != "") {
        addItem(query);
      }
    }

    controller.query = query;
    controller.close();

    notifyListeners();
  }

  void addItem(String query) {
    if (_suggestions.length >= 5) {
      _suggestions.removeAt(0);
    }
    _suggestions.add(query);
    getIt<SharedPreferences>().setStringList('searchHistory', _suggestions);
    notifyListeners();
  }

  void clearItem(query) {
    _suggestions.remove(query);
    getIt<SharedPreferences>().setStringList('searchHistory', _suggestions);
    notifyListeners();
  }
}
