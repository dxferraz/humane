RegExp twoNamesRegex = new RegExp(r"(\w.+\s).+");
RegExp emailRegex = new RegExp(
    r"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
RegExp passwordRegex = new RegExp(r"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*?]{6,}$");

String? twoNamesValidator(String value) {
  if (twoNamesRegex.hasMatch(value)) return null;
  return "Please, enter a full name.";
}

String? emailValidator(String value) {
  if (emailRegex.hasMatch(value)) return null;
  return "Please, enter a valid email.";
}

String? passwordValidator(String value) {
  if (passwordRegex.hasMatch(value)) return null;
  return "Minimum six characters, at least one number";
}

String? confirmPasswordValidator(String confirmation, String password) {
  if (confirmation == password) return null;
  return "Password must match.";
}
