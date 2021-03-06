import 'package:humane/features/listActions/domain/entities/Image.dart';

class ImageModel extends Image {
  const ImageModel({
    required url,
  }) : super(
          url: url,
        );

  Map<String, dynamic> toMap() {
    return {
      'url': url,
    };
  }
}
