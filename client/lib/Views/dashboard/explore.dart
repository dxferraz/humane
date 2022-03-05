import 'package:flutter/material.dart' hide Title, Card;
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_svg/svg.dart';
import 'package:humane/Components/FilterDrawer/FilterDrawer.dart';
import 'package:humane/Components/shared_components/FilterButton.dart';
import 'package:humane/Components/shared_components/card.dart';
import 'package:humane/Components/shared_components/searchBar.dart';
import 'package:humane/features/lists_storages/domain/entities/Storage.dart';
import 'package:humane/Services/search_service.dart';
import 'package:humane/services/service_locator.dart';

class Explore extends HookWidget {
  int page = 1;
  late ValueNotifier<List<Storage>> storages;
  late ValueNotifier<bool> isLoading;
  GlobalKey<ScaffoldState> _drawerKey = GlobalKey<ScaffoldState>();

  Future<void> getStorages({bool reset = false}) async {
    isLoading.value = true;
    return getIt<SearchService>().all(page).listen((data) {
      if (reset) {
        storages.value = data;
        isLoading.value = false;
        return;
      }
      storages.value = storages.value + data;
      isLoading.value = false;
    }).asFuture();
  }

  Future<void> refetchStorages() async {
    if (isLoading.value == true) return;
    page = 1;
    await getStorages(reset: true);
  }

  void handleScrollFetch() async {
    if (isLoading.value == true) return;
    isLoading.value = true;
    page = page + 1;
    getStorages();
  }

  @override
  Widget build(BuildContext context) {
    //Set states
    isLoading = useState(true);
    storages = useState([]);

    //Get Storages on Init
    useEffect(() {
      getStorages();
      return;
    }, []);

    return Scaffold(
      key: _drawerKey,
      backgroundColor: Colors.transparent,
      drawer: FilterDrawer(),
      body: SafeArea(
        child: Container(
          margin: const EdgeInsets.only(bottom: 60.0),
          child: Container(
            child: Column(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.only(right: 25, left: 25, bottom: 10),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Container(
                            margin: EdgeInsets.only(right: 10),
                            child: SvgPicture.asset("assets/images/logo.svg", width: 80, semanticsLabel: 'Illustration'),
                          ),
                          SearchBar(),
                        ],
                      ),
                      FilterButton(
                        openDrawer: () => _drawerKey.currentState?.openDrawer(),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: NotificationListener<ScrollNotification>(
                      onNotification: (ScrollNotification scrollInfo) {
                        if (!isLoading.value && scrollInfo.metrics.pixels == scrollInfo.metrics.maxScrollExtent) {
                          handleScrollFetch();
                        }
                        return false;
                      },
                      child: RefreshIndicator(
                        color: Theme.of(context).primaryColor,
                        onRefresh: refetchStorages,
                        child: ListView(children: <Widget>[
                          Column(
                              children: storages.value
                                  .asMap()
                                  .map((index, storage) => MapEntry(
                                        index,
                                        Card(
                                            price: storage.price.toStringAsFixed(0),
                                            title: storage.name,
                                            subtitle: storage.description,
                                            features: storage.features,
                                            index: index),
                                      ))
                                  .values
                                  .toList()),
                          Offstage(
                            offstage: !isLoading.value,
                            child: Container(
                              height: storages.value.length == 0 ? MediaQuery.of(context).size.height : 40,
                              child: Center(
                                child: CircularProgressIndicator(
                                  valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                                  backgroundColor: Theme.of(context).primaryColor,
                                ),
                              ),
                            ),
                          ),
                        ]),
                      )),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
