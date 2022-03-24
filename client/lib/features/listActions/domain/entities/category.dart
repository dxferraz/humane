import 'package:equatable/equatable.dart';

class Category extends Equatable {
  final int id;
  final String title;

  const Category({required this.id, required this.title});

  @override
  List<Object> get props => [id, title];
}
