import 'package:flutter/material.dart' hide Card, Title;
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/core/components/Card.dart';
import 'package:humane/core/components/CardShimmed.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';
import 'package:humane/features/listActions/presentation/bloc/ListActionsBloc.dart';

class DonationList extends StatefulWidget {
  const DonationList({Key? key}) : super(key: key);

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
        getDonations();
      }
    });
    super.initState();
  }

  getDonations() {
    _listActionsBloc.add(GetDonationsEvent());
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
          if (state is LoadingDonationsState) {
            return ListView.builder(
              controller: _scrollController,
              itemCount: 2,
              itemBuilder: (context, index) {
                return const CardShimmed();
              },
            );
          }

          if (state is ErrorDonationsState) {
            return Opacity(
              opacity: 0.6,
              child: Column(
                children: [
                  SizedBox(width: 150, child: SvgPicture.asset("assets/icons/no-connection.svg")),
                  state.message != null
                      ? Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 80.0),
                          child: Text(
                            state.message!,
                            textAlign: TextAlign.center,
                            style: const TextStyle(color: appDarkBlue, fontSize: 20, fontWeight: FontWeight.bold),
                          ),
                        )
                      : Container()
                ],
              ),
            );
          }
          if (state is ListInitialState) {
            _listActionsBloc.add(GetDonationsEvent());
          }
          // Using ListView.builder is has a better performance than scrollview
          return ListView.builder(
            controller: _scrollController,
            itemCount: _listActionsBloc.list.length,
            itemBuilder: (context, index) {
              return Card.buildDonationCard(_listActionsBloc.list[index]);
            },
          );
        },
      ),
    );
  }
}
