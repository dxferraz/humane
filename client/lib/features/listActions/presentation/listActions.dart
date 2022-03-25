import 'package:flutter/material.dart' hide Card, Title;
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/core/components/NetworkError.dart';
import 'package:humane/core/components/card.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';
import 'package:humane/features/listActions/presentation/bloc/ListActionsBloc.dart';
import 'package:humane/features/listActions/presentation/components/MainMenu.dart';
import 'package:humane/features/listActions/presentation/components/TopMenu.dart';

class ListActions extends StatefulWidget {
  @override
  ListRecentPostsState createState() => ListRecentPostsState();
}

class ListRecentPostsState extends State<ListActions> with SingleTickerProviderStateMixin {
  final ScrollController _scrollController = ScrollController();
  final ListActionsBloc _listActionsBloc = getIt<ListActionsBloc>();
  List<Edge<Donation>> list = [];
  bool loading = false;

  @override
  void initState() {
    _listActionsBloc.add(OpenDonationEvent());

    _scrollController.addListener(() {
      if (_scrollController.position.pixels >= _scrollController.position.maxScrollExtent && !loading) {
        _listActionsBloc.add(OpenDonationEvent());
      }
      super.initState();
    });
  }

  List<Widget> _buildCards(List<Edge<Donation>> donations) {
    return donations.map((donation) => Card(title: donation.node.title, subtitle: donation.node.description, thumbnails: null)).toList();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 224, 233, 242),
      body: BlocListener(
        bloc: _listActionsBloc,
        listener: (BuildContext context, state) async {
          if (state is LoadedDonationsState) {
            setState(() {
              list = list + state.listDonation;
            });
            await Future.delayed(const Duration(seconds: 1));
            setState(() {
              loading = false;
            });
          }

          if (state is LoadingDonationsState) {
            setState(() {
              loading = true;
            });
          }
        },
        child: BlocBuilder<ListActionsBloc, ListActionsState>(
          bloc: _listActionsBloc,
          builder: (BuildContext context, state) {
            List<Widget> children = [];
            children.add(TopMenu());

            if (state is ErrorDonationsState) {
              children.add(Padding(
                padding: const EdgeInsets.only(top: 85.0, bottom: 70),
                child: NetworkError(message: state.message),
              ));
            }

            return Stack(
              children: [
                Padding(
                  padding: const EdgeInsets.only(top: 85.0, bottom: 70),
                  child: SingleChildScrollView(
                    controller: _scrollController,
                    child: Column(
                      children: _buildCards(list),
                    ),
                  ),
                ),
                TopMenu(),
                Offstage(
                  offstage: state is! LoadingDonationsState,
                  child: const Padding(
                    padding: EdgeInsets.only(top: 70),
                    child: LinearProgressIndicator(),
                  ),
                ),
                MainMenu(
                  state: state,
                )
              ],
            );
          },
        ),
      ),
    );
  }
}
