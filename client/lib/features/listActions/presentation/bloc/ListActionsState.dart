part of 'ListActionsBloc.dart';

class ListInitialState extends ListActionsState {
  @override
  List<Object> get props => [];
}

abstract class ListActionsState extends Equatable {
  const ListActionsState();
}

///  List Tab state
class ShowDonationsState extends ListActionsState {
  @override
  List<Object> get props => [];
}

class ShowMissingPersonsState extends ListActionsState {
  @override
  List<Object> get props => [];
}

class ShowNecessitiesState extends ListActionsState {
  @override
  List<Object> get props => [];
}

/// Get Donations state
class LoadingDonationsState extends ListActionsState {
  @override
  List<Object> get props => [];
}

class LoadedDonationsState extends ListActionsState {
  final List<Edge<Donation>> listDonation;

  const LoadedDonationsState({required this.listDonation});

  @override
  List<Object> get props => [listDonation];
}

class ErrorDonationsState extends ListActionsState {
  final String? message;

  const ErrorDonationsState({this.message});

  @override
  List<Object> get props => [];
}

/***** End of Get Donations state *****/

