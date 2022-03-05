import 'dart:convert';

class Feature {
  int id;
  String name;
  String description;

  Feature({
    required this.id,
    required this.name,
    required this.description,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'description': description,
    };
  }

  static Feature? fromMap(Map<String, dynamic> map) {
    if (map == null) return null;

    return Feature(
      id: map['id'],
      name: map['name'],
      description: map['description'],
    );
  }

  String toJson() => json.encode(toMap());

  static Feature? fromJson(String source) => fromMap(json.decode(source));
}
