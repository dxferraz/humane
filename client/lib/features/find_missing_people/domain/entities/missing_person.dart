import 'package:equatable/equatable.dart';

class MissingPerson extends Equatable {
  final String name;
  final int age;
  final String disappearanceDay;
  final String eyeColor;
  final String hairColor;
  final String height;
  final String weight;

  const MissingPerson({
    required this.name,
    required this.age,
    required this.disappearanceDay,
    required this.eyeColor,
    required this.hairColor,
    required this.height,
    required this.weight,
  });

  @override
  List<Object> get props => [
        name,
        age,
        disappearanceDay,
        eyeColor,
        hairColor,
        height,
        weight,
      ];
}