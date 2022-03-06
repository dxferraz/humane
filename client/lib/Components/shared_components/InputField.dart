import 'package:flutter/material.dart';
import 'package:humane/icons.dart';

class InputField extends StatefulWidget {
  late String? hint;
  late Function? validator;
  late Function? onChanged;
  late Icon? icon;
  TextInputType type;
  bool hidden;
  double paddingBottom;
  late TextInputAction? textInputAction;
  late FocusNode? focusNode;
  late FocusNode? nextFocusNode;

  InputField(
      {this.textInputAction,
      this.nextFocusNode,
      this.focusNode,
      this.hint,
      this.icon,
      this.onChanged,
      this.validator,
      this.type = TextInputType.text,
      this.hidden = false,
      this.paddingBottom = 20});
  InputFieldState createState() => InputFieldState();
}

class InputFieldState extends State<InputField> {
  late bool hidden;

  @override
  void initState() {
    super.initState();
    hidden = widget.hidden;
  }

  void viewPassword() {
    setState(() {
      hidden = !hidden;
    });
  }

  void _fieldFocusChange(BuildContext context, FocusNode currentFocus, FocusNode nextFocus) {
    currentFocus.unfocus();
    FocusScope.of(context).requestFocus(nextFocus);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.only(bottom: widget.paddingBottom),
        child: TextFormField(
          onFieldSubmitted: (value) {
            _fieldFocusChange(context, widget.focusNode!, widget.nextFocusNode!);
          },
          focusNode: widget.focusNode,
          textInputAction: widget.textInputAction,
          // onChanged: widget.onChanged,
          obscureText: hidden,
          keyboardType: widget.type,
          style: TextStyle(fontSize: 20.0, color: Colors.black, fontFamily: "Montserrat-light"),
          decoration: InputDecoration(
            prefixIcon: Container(width: 0, alignment: Alignment(-1, -0.8), padding: EdgeInsets.only(top: 9, right: 0), child: widget.icon),
            suffixIcon: widget.hidden == true
                ? Container(
                    width: 0,
                    alignment: Alignment(-1, -0.8),
                    padding: EdgeInsets.only(top: 9, right: 0),
                    child: GestureDetector(onTap: this.viewPassword, child: Icon(hidden ? HumaneIcons.eye : HumaneIcons.hide)))
                : null,
            contentPadding: const EdgeInsets.only(left: 14.0, bottom: 8.0, top: 8.0),
            hintText: widget.hint,
          ),
          // validator: widget.validator),
        ));
  }
}
