import 'package:equatable/equatable.dart';

class Image extends Equatable {
  final String url;

  const Image({required this.url});

  @override
  List<Object> get props => [url];
}
