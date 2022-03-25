import 'package:flutter/material.dart' hide Card;
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:humane/core/components/card.dart';
import 'package:humane/core/injection/injection.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/presentation/bloc/ListActionsBloc.dart';
import 'package:humane/features/listActions/presentation/components/MainMenu.dart';
import 'package:humane/features/listActions/presentation/components/TopMenu.dart';

class ListActions extends StatefulWidget {
  @override
  ListRecentPostsState createState() => ListRecentPostsState();
}

class ListRecentPostsState extends State<ListActions> with SingleTickerProviderStateMixin {
  @override
  void initState() {
    super.initState();
  }

  List<Widget> _buildCards(List<Donation> donations) {
    return donations.map((donation) => Card(title: donation.title, subtitle: donation.description, thumbnails: null)).toList();
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    return BlocProvider<ListActionsBloc>(
      // Dispatch initial event to load donations
      create: (BuildContext context) => getIt<ListActionsBloc>()..add(OpenDonationEvent()),
      child: Scaffold(
        backgroundColor: const Color.fromARGB(255, 224, 233, 242),
        body: BlocBuilder<ListActionsBloc, ListActionsState>(
          builder: (BuildContext context, state) {
            List<Widget> children = [];
            children.add(TopMenu());

            if (state is LoadedDonationsState) {
              children.add(Padding(
                padding: const EdgeInsets.only(top: 85.0, bottom: 70),
                child: SingleChildScrollView(child: Column(children: _buildCards(state.listDonation))),
              ));
            }

            if (state is LoadingDonationsState) {
              children.add(const Padding(
                padding: EdgeInsets.only(top: 70),
                child: LinearProgressIndicator(),
              ));
            }

            children.add(MainMenu(
              state: state,
            ));

            return Stack(children: children);
          },
        ),
      ),
    );
  }
}
