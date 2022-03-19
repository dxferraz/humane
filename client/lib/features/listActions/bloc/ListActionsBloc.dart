import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

part 'ListActionsEvent.dart';
part 'signUserState.dart';

class ListActionsBloc extends Bloc<ListActionsEvent, ListActionsState> {
  ListActionsBloc() : super(ListDonationsState()) {
    on<OpenDonationEvent>(_onOpenDonationEvent);
    on<OpenMissingPersonsEvent>(_onOpenMissingPersonsEvent);
    on<OpenNecessitiesEvent>(_onOpenNecessitiesEvent);
  }

  _onOpenDonationEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ListDonationsState());
  }

  _onOpenMissingPersonsEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ListMissingPersonsState());
  }

  _onOpenNecessitiesEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ListNecessitiesState());
  }
}
