part of 'ListActionsBloc.dart';

abstract class ListActionsEvent extends Equatable {
  @override
  List<Object> get props => [];
}

// Tab events

class OpenNecessitiesEvent extends ListActionsEvent {
  @override
  List<Object> get props => [];
}

class OpenDonationEvent extends ListActionsEvent {
  @override
  List<Object> get props => [];
}

class OpenMissingPersonsEvent extends ListActionsEvent {
  @override
  List<Object> get props => [];
}

// Donation events

class GetDonationsEvent extends ListActionsEvent {
  Map<String, dynamic>? where;

  GetDonationsEvent({this.where});

  @override
  List<Object> get props => [];
}
