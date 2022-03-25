import 'dart:convert';
import 'package:humane/features/listActions/domain/entities/pagination.dart';

class PaginationModel extends Pagination {
  const PaginationModel({
    required edges,
    required pageInfo,
  }) : super(
          edges: edges,
          pageInfo: pageInfo,
        );

  Map<String, dynamic> toMap() {
    return {
      'edges': edges,
      'pageInfo': pageInfo,
    };
  }

  static Pagination? fromMap(Map<String, dynamic> map) {
    return Pagination(
      edges: map['edges'],
      pageInfo: map['pageInfo'],
    );
  }

  String toJson() => json.encode(toMap());

  static Pagination? fromJson(String source) => fromMap(json.decode(source));
}

class EdgeModel<T> extends Edge {
  EdgeModel({
    required cursor,
    required node,
  }) : super(
          cursor: cursor,
          node: node,
        );

  Map<String, dynamic> toMap() {
    return {
      'cursor': cursor,
      'node': node,
    };
  }

  static Edge? fromMap(Map<String, dynamic> map) {
    return Edge(
      cursor: map['cursor'],
      node: map['node'],
    );
  }

  String toJson() => json.encode(toMap());

  static Edge? fromJson(String source) => fromMap(json.decode(source));
}

class PageInfoModel extends PageInfo {
  PageInfoModel({
    required endCursor,
    required hasNextPage,
  }) : super(
          endCursor: endCursor,
          hasNextPage: hasNextPage,
        );

  Map<String, dynamic> toMap() {
    return {
      'endCursor': endCursor,
      'hasNextPage': hasNextPage,
    };
  }

  static PageInfo? fromMap(Map<String, dynamic> map) {
    return PageInfo(
      endCursor: map['endCursor'],
      hasNextPage: map['hasNextPage'],
    );
  }

  String toJson() => json.encode(toMap());

  static PageInfo? fromJson(String source) => fromMap(json.decode(source));
}
