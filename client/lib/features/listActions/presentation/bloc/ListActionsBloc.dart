import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/usecases/listDonations.dart';

part 'ListActionsEvent.dart';
part 'ListActionsState.dart';

class ListActionsBloc extends Bloc<ListActionsEvent, ListActionsState> {
  ListDonation listDonation;

  ListActionsBloc({required this.listDonation}) : super(ListInitialState()) {
    on<OpenDonationEvent>(_onOpenDonationEvent);
    on<OpenMissingPersonsEvent>(_onOpenMissingPersonsEvent);
    on<OpenNecessitiesEvent>(_onOpenNecessitiesEvent);
  }

  _onOpenDonationEvent(ListActionsEvent event, Emitter<ListActionsState> emit) async {
    emit(LoadingDonationsState());
    const page = PageParams(take: 10);
    Either<Failure, List<Donation>> FailuireOrDonation = await listDonation(page);

    FailuireOrDonation.fold((a) => {}, (List<Donation> list) => emit(LoadedDonationsState(listDonation: list)));
    ;
  }

  _onOpenMissingPersonsEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ListMissingPersonsState());
  }

  _onOpenNecessitiesEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ListNecessitiesState());
  }
}
