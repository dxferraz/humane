import 'dart:convert';
import 'package:humane/features/authentication/data/models/userModel.dart';
import 'package:humane/features/authentication/domain/entities/User.dart';
import 'package:humane/features/listActions/data/models/categoryModel.dart';
import 'package:humane/features/listActions/domain/entities/Image.dart';
import 'package:humane/features/listActions/domain/entities/category.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';

class DonationModel extends Donation {
  const DonationModel(
      {required id,
      required thumbnails,
      required title,
      required description,
      required createdAt,
      required category,
      required address,
      required zipCode,
      required user})
      : super(
            id: id,
            thumbnails: thumbnails,
            title: title,
            description: description,
            category: category,
            createdAt: createdAt,
            address: address,
            zipCode: zipCode,
            user: user);

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'thumbnails': thumbnails,
      'title': title,
      'description': description,
      'createdAt': createdAt,
      'category': category,
      'address': address,
      'zipCode': zipCode,
      'user': user,
    };
  }

  static Donation? fromMap(Map<String, dynamic> map) {
    List<dynamic> thumbnailsData = map['thumbnails'];
    List<Image> thumbnails = [];

    for (var thumbnail in thumbnailsData) {
      thumbnails.add(Image(url: thumbnail['url']));
    }
    User user = UserModel.fromMap(map['user'])!;
    Category category = CategoryModel.fromMap(map['category'])!;

    return Donation(
      id: map['id'],
      thumbnails: thumbnails,
      title: map['title'],
      createdAt: map['timeStamp'],
      description: map['description'],
      category: category,
      address: map['address'],
      zipCode: map['zipCode'],
      user: user,
    );
  }

  String toJson() => json.encode(toMap());

  static Donation? fromJson(String source) => fromMap(json.decode(source));
}
