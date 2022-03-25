import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';

class PageInfo extends Equatable {
  final String endCursor;
  final bool hasNextPage;

  const PageInfo({required this.endCursor, required this.hasNextPage});

  @override
  List<Object> get props => [endCursor, hasNextPage];
}

class Edge<T> extends Equatable {
  String cursor;
  T node;

  Edge({required this.cursor, required this.node});

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
