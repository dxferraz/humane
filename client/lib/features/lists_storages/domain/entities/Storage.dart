import 'dart:convert';

import 'package:humane/features/lists_storages/domain/entities/Feature.dart';

class Storage {
  int id;
  String name;
  String description;
  String type;
  double price;
  String periodicity;
  double width;
  double height;
  double length;
  String unit;
  String placement;
  List<Feature> features;
  List<dynamic> images;

  Storage({
    required this.id,
    required this.name,
    required this.description,
    required this.type,
    required this.price,
    required this.periodicity,
    required this.width,
    required this.height,
    required this.length,
    required this.unit,
    required this.placement,
    required this.features,
    required this.images,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'description': description,
      'type': type,
      'price': price,
      'periodicity': periodicity,
      'width': width,
      'height': height,
      'length': length,
      'unit': unit,
      'placement': placement,
      'features': features,
      'images': images,
    };
  }

  static Storage? fromMap(Map<String, dynamic> map) {
    if (map == null) return null;
    double price = double.parse(map['price'].toString());
    double width = double.parse(map['width'].toString());
    double height = double.parse(map['height'].toString());
    double length = double.parse(map['length'].toString());

    List<Feature> features = [];
    List<dynamic> featuresMap = map['features'];
    featuresMap.forEach((feature) {
      features.add(Feature.fromMap(feature)!);
    });

    return Storage(
      id: map['id'],
      name: map['name'],
      description: map['description'],
      type: map['type'],
      price: price,
      periodicity: map['periodicity'],
      width: width,
      height: height,
      length: length,
      unit: map['unit'],
      placement: map['placement'],
      features: features,
      images: List<dynamic>.from(map['images']),
    );
  }

  String toJson() => json.encode(toMap());

  static Storage? fromJson(String source) => fromMap(json.decode(source));
}
