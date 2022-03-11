import 'package:flutter/material.dart';
import 'package:humane/icons.dart';

class InputField extends StatefulWidget {
  late String? hint;
  late String? Function(String?)? validator;
  late String? Function(String?)? onChanged;
  late Icon? icon;
  TextInputType type;
  bool hidden;
  double paddingBottom;
  String? tooltip;
  late TextInputAction? textInputAction;
  late FocusNode? focusNode;
  late FocusNode? nextFocusNode;

  InputField(
      {Key? key,
      this.textInputAction,
      this.nextFocusNode,
      this.focusNode,
      this.hint,
      this.icon,
      this.onChanged,
      this.validator,
      this.type = TextInputType.text,
      this.tooltip,
      this.hidden = false,
      this.paddingBottom = 20})
      : super(key: key);

  @override
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
      child: Row(
        children: [
          Expanded(
            child: TextFormField(
              onFieldSubmitted: (value) {
                if (widget.focusNode != null && widget.nextFocusNode != null) {
                  _fieldFocusChange(context, widget.focusNode!, widget.nextFocusNode!);
                }
              },
              focusNode: widget.focusNode,
              textInputAction: widget.textInputAction,
              onChanged: widget.onChanged,
              obscureText: hidden,
              keyboardType: widget.type,
              style: TextStyle(fontSize: 20.0, color: Theme.of(context).secondaryHeaderColor, fontFamily: "Montserrat-light"),
              decoration: InputDecoration(
                focusColor: Colors.amberAccent,
                prefixIcon: Container(
                    width: 0, alignment: const Alignment(-1, -0.8), padding: const EdgeInsets.only(top: 9, right: 0), child: widget.icon),
                suffixIcon: widget.hidden == true
                    ? Container(
                        width: 0,
                        alignment: const Alignment(-1, -0.8),
                        padding: const EdgeInsets.only(top: 9, right: 0),
                        child: GestureDetector(onTap: viewPassword, child: Icon(hidden ? Humane.eye : Humane.hide)))
                    : null,
                contentPadding: const EdgeInsets.only(left: 14.0, bottom: 8.0, top: 8.0),
                hintText: widget.hint,
              ),
              validator: widget.validator,
            ),
          ),
          Offstage(
            offstage: widget.tooltip == null,
            child: InkWell(
              child: Tooltip(
                padding: const EdgeInsets.all(20),
                message: widget.tooltip ?? "",
                child: Icon(
                  Humane.info,
                  color: Theme.of(context).primaryColor,
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
