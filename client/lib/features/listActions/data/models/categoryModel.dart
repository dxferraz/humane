import 'package:humane/features/listActions/domain/entities/category.dart';

class CategoryModel extends Category {
  CategoryModel({
    required id,
    required title,
  }) : super(
          id: id,
          title: title,
        );

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
    };
  }

  static Category? fromMap(Map<String, dynamic> map) {
    return Category(
      id: map['id'],
      title: map['title'],
    );
  }
}
