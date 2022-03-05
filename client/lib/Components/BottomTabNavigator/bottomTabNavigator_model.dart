import 'package:scoped_model/scoped_model.dart';

class HomeModel extends Model {
  int selectedPosition = 1; //Start Position to position 1

  setSelectedPosition(int index) {
    this.selectedPosition = index;
    notifyListeners();
  }
}
