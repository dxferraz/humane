import 'package:flutter/material.dart' hide Card;
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/core/components/Card.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';
import 'package:humane/features/listActions/presentation/bloc/ListActionsBloc.dart';

class DonationList extends StatefulWidget {
  DonationList({Key? key}) : super(key: key);

  @override
  State<DonationList> createState() => _DonationListState();
}

class _DonationListState extends State<DonationList> with AutomaticKeepAliveClientMixin<DonationList> {
  final ScrollController _scrollController = ScrollController();
  final ListActionsBloc _listActionsBloc = getIt<ListActionsBloc>();
  List<Edge<Donation>> list = [];
  bool shouldKeepAlive = true;
  bool loading = false;

  @override
  bool get wantKeepAlive => shouldKeepAlive;

  @override
  void initState() {
    _scrollController.addListener(() {
      if (_scrollController.position.pixels >= _scrollController.position.maxScrollExtent && !loading) {
        _listActionsBloc.add(GetDonationsEvent());
      }
    });
    super.initState();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return BlocListener(
      bloc: _listActionsBloc,
      listener: (BuildContext context, state) async {
        if (state is LoadedDonationsState) {
          list = state.listDonation;
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
      child: Padding(
        padding: const EdgeInsets.only(top: 20.0),
        child: BlocBuilder<ListActionsBloc, ListActionsState>(
          bloc: _listActionsBloc,
          builder: (BuildContext context, state) {
            if (state is ListInitialState) {
              _listActionsBloc.add(GetDonationsEvent());
            }
            // Using ListView.builder is has a better performance than scrollview
            return ListView.builder(
              controller: _scrollController,
              itemCount: list.length,
              itemBuilder: (context, index) {
                return Card.buildDonationCard(list[index]);
              },
            );
          },
        ),
      ),
    );
  }
}
