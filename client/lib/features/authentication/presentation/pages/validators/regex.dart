import 'package:validators/validators.dart';

RegExp twoNamesRegex = new RegExp(r"(\w.+\s).+");
RegExp passwordRegex = new RegExp(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$#!%*?&]{6,20}$");

String? twoNamesValidator(String value) {
  if (twoNamesRegex.hasMatch(value)) return null;
  return "Please, enter a full name.";
}

String? emailValidator(String value) {
  if (isEmail(value)) return null;
  return "Please, enter a valid email.";
}

String? passwordValidator(String value) {
  if (passwordRegex.hasMatch(value)) return null;
  return "Invalid password, please see more info on the side.";
}

String? confirmPasswordValidator(String confirmation, String password) {
  if (confirmation == password) return null;
  return "Password must match.";
}

String? isEmpty(String string) {
  if (!isNull(string)) return null;
  return "Password cannot be empty.";
}
