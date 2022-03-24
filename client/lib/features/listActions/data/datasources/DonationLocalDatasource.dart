import 'package:humane/features/listActions/domain/entities/donation.dart';

abstract class IDonationLocalDatasource {
  Future<Donation?> getDonations(int page);
}

class DonationLocalDatasource extends IDonationLocalDatasource {
  @override
  Future<Donation?> getDonations(int page) async {
    throw UnimplementedError();
  }
}
