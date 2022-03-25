part of 'ListActionsBloc.dart';

class ListInitialState extends ListActionsState {
  @override
  List<Object> get props => [];
}

abstract class ListActionsState extends Equatable {
  const ListActionsState();
}

class LoadingDonationsState extends ListActionsState {
  @override
  List<Object> get props => [];
}

class LoadedDonationsState extends ListActionsState {
  List<Edge<Donation>> listDonation;

  LoadedDonationsState({required this.listDonation});

  @override
  List<Object> get props => [listDonation];
}

class ErrorDonationsState extends ListActionsState {
  String? message;

  ErrorDonationsState({this.message});

  @override
  List<Object> get props => [];
}

class ListMissingPersonsState extends ListActionsState {
  @override
  List<Object?> get props => [];
}

class ListNecessitiesState extends ListActionsState {
  @override
  List<Object?> get props => [];
}
