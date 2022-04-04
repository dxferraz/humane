import 'package:equatable/equatable.dart';

class PageInfo extends Equatable {
  final String? endCursor;
  final bool hasNextPage;

  const PageInfo({required this.endCursor, required this.hasNextPage});

  @override
  List<Object> get props => [hasNextPage];
}

class Edge<T> extends Equatable {
  final String cursor;
  final T node;

  const Edge({required this.cursor, required this.node});

  @override
  List<Object> get props => [cursor];
}

class Pagination<T> extends Equatable {
  final List<Edge<T>> edges;
  final PageInfo pageInfo;

  const Pagination({
    required this.edges,
    required this.pageInfo,
  });

  @override
  List<Object> get props => [edges, pageInfo];
}
