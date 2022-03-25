import 'dart:convert';
import 'package:humane/features/listActions/domain/entities/donation.dart';

class DonationModel extends Donation {
  const DonationModel(
      {required id,
      required thumbnails,
      required title,
      required description,
      required category,
      required address,
      required zipCode,
      required user})
      : super(
            id: id, thumbnails: thumbnails, title: title, description: description, category: category, address: address, zipCode: zipCode);

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'thumbnails': thumbnails,
      'title': title,
      'description': description,
      'category': category,
      'address': address,
      'zipCode': zipCode,
    };
  }

  static Donation? fromMap(Map<String, dynamic> map) {
    return Donation(
      id: map['id'],
      thumbnails: map['thumbnails'],
      title: map['title'],
      description: map['description'],
      category: map['category'],
      address: map['address'],
      zipCode: map['zipCode'],
    );
  }

  String toJson() => json.encode(toMap());

  static Donation? fromJson(String source) => fromMap(json.decode(source));
}
