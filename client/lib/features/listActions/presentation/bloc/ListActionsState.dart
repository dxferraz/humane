part of 'ListActionsBloc.dart';

class ListInitialState extends ListActionsState {
  @override
  List<Object> get props => [];
}

abstract class ListActionsState extends Equatable {
  const ListActionsState();
}

/***** List Tab state *****/
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

/***** End of List Tab state *****/

/***** Get Donations state *****/
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

/***** End of Get Donations state *****/

