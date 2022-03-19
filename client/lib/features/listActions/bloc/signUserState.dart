part of 'ListActionsBloc.dart';

abstract class ListActionsState extends Equatable {
  const ListActionsState();
}

class ListDonationsState extends ListActionsState {
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
