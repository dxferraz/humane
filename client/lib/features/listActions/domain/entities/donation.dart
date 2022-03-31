import 'package:equatable/equatable.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/listActions/domain/entities/Image.dart';
import 'package:humane/features/listActions/domain/entities/category.dart';

class Donation extends Equatable {
  final int? id;
  final List<Image> thumbnails;
  final String title;
  final String description;
  final Category category;
  final String address;
  final String zipCode;
  final String createdAt;
  final User user;

  const Donation(
      {this.id,
      required this.thumbnails,
      required this.title,
      required this.description,
      required this.category,
      required this.address,
      required this.zipCode,
      required this.createdAt,
      required this.user});

  @override
  List<Object> get props => [thumbnails, title, description, category, address, zipCode, createdAt];
}
