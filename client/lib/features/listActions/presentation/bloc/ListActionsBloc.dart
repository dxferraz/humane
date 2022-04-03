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

// Number of donations to return per request:
const take = 10;

class ListActionsBloc extends Bloc<ListActionsEvent, ListActionsState> {
  ListDonation listDonationUseCase;
  PageInfo? donationPageInfo;
  Map<String, dynamic>? donationWhereClause;
  List<Edge<Donation>> list = [];

  ListActionsBloc({required this.listDonationUseCase}) : super(ListInitialState()) {
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

    // Check if page info has end cursor, if no edges are returned, the end cursor is null.
    int? cursor = donationPageInfo == null
        ? null
        : donationPageInfo!.endCursor != null
            ? int.parse(donationPageInfo!.endCursor!)
            : null;

    PageParams page = PageParams(take: take, cursor: cursor);

    // Check for where clauses (filter/search)
    // If the term/filter changed, we clean all the cursors and the list.
    if (event is GetDonationsEvent && event.where != null) {
      if (event.where != donationWhereClause) {
        page.cursor = null;
        list = [];
      }
      donationWhereClause = event.where;
    }

    // We set the where clause here so it can be reused in future calls (scrolling the page for example).
    page.where = donationWhereClause;

    Either<Failure, Pagination<Donation>> failuireOrDonation = await listDonationUseCase(page);

    failuireOrDonation.fold((error) {
      if (error is RequestErrorFailure) {
        emit(ErrorDonationsState(message: error.message));
      }
    }, (Pagination<Donation> page) {
      donationPageInfo = page.pageInfo;
      list = list + page.edges;

      emit(LoadedDonationsState(listDonation: list));
    });
  }

  _onOpenMissingPersonsEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ShowMissingPersonsState());
  }

  _onOpenNecessitiesEvent(ListActionsEvent event, Emitter<ListActionsState> emit) {
    emit(ShowNecessitiesState());
  }
}
