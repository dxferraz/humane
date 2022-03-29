import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:humane/core/errors/failures.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';
import 'package:humane/features/listActions/domain/usecases/listDonations.dart';
import 'package:rxdart/transformers.dart';

part 'ListActionsEvent.dart';
part 'ListActionsState.dart';

class ListActionsBloc extends Bloc<ListActionsEvent, ListActionsState> {
  ListDonation listDonation;
  PageInfo? donationPageInfo;
  int TAKE_NUMBER_OF_ITEMS_PER_REQUEST = 10;

  ListActionsBloc({required this.listDonation}) : super(ListInitialState()) {
    on<OpenDonationEvent>(_onOpenDonationEvent, transformer: (events, mapper) {
      return events.debounceTime(const Duration(milliseconds: 100)).asyncExpand(mapper);
    });
    on<OpenMissingPersonsEvent>(_onOpenMissingPersonsEvent);
    on<OpenNecessitiesEvent>(_onOpenNecessitiesEvent);
    on<GetDonationsEvent>(_onGetDonationEvent);
  }

  EventTransformer<Event> debounceSequential<Event>(Duration duration) {
    return (events, mapper) => events.debounceTime(duration).asyncExpand(mapper);
  }

  _onOpenDonationEvent(ListActionsEvent event, Emitter<ListActionsState> emit) async {
    emit(ShowDonationsState());
  }

  _onGetDonationEvent(ListActionsEvent event, Emitter<ListActionsState> emit) async {
    emit(LoadingDonationsState());
    // Number of donations to return per request:

    int? cursor = donationPageInfo == null ? null : int.parse(donationPageInfo!.endCursor);

    PageParams page = PageParams(take: TAKE_NUMBER_OF_ITEMS_PER_REQUEST, cursor: cursor);

    Either<Failure, Pagination<Donation>> FailuireOrDonation = await listDonation(page);

    FailuireOrDonation.fold(
        (error) => {
              if (error is RequestErrorFailure) {emit(ErrorDonationsState(message: error.message))}
            }, (Pagination<Donation> page) {
      donationPageInfo = page.pageInfo;
      emit(LoadedDonationsState(listDonation: page.edges));
    });
  }

  _onOpenMissingPersonsEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ShowMissingPersonsState());
  }

  _onOpenNecessitiesEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ShowNecessitiesState());
  }
}
