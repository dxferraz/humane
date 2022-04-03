import 'package:flutter/material.dart';
import 'package:flutter/material.dart' hide Title;
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:humane/icons.dart';

// ignore: must_be_immutable
class SearchBar extends HookWidget {
  ValueNotifier<bool>? isOpened;

  SearchBar({Key? key, this.isOpened}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    isOpened = useState(false);

    return Container(
      color: Colors.transparent,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Container(
            decoration: BoxDecoration(
              color: Colors.transparent,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.1),
                  blurRadius: 30, // has the effect of softening the shadow
                  spreadRadius: 0.1, // has the effect of extending the shadow
                  offset: const Offset(
                    0.2, // horizontal, move right 10
                    0.2, // vertical, move down 10
                  ),
                )
              ],
            ),
            child: AnimatedContainer(
                padding: EdgeInsets.only(right: isOpened!.value ? 10 : 0),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(90),
                  color: Colors.white,
                ),
                duration: const Duration(microseconds: 500),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    AnimatedContainer(
                      height: 43,
                      width: !isOpened!.value ? 0 : 150,
                      duration: const Duration(milliseconds: 500),
                      child: TextFormField(
                          onChanged: (_email) {},
                          textInputAction: TextInputAction.next,
                          decoration: const InputDecoration(
                              border: InputBorder.none,
                              focusedBorder: InputBorder.none,
                              enabledBorder: InputBorder.none,
                              errorBorder: InputBorder.none,
                              disabledBorder: InputBorder.none,
                              contentPadding: EdgeInsets.only(left: 15, right: 15),
                              hintText: "Ex: 3 x 4 m ")),
                    ),
                    Material(
                      color: Colors.transparent,
                      child: InkWell(
                        borderRadius: BorderRadius.circular(40),
                        onTap: () {
                          isOpened!.value = !isOpened!.value;
                        },
                        child: AnimatedPadding(
                          padding: EdgeInsets.all(isOpened!.value ? 0 : 10),
                          duration: const Duration(milliseconds: 500),
                          child: const Icon(
                            Humane.search,
                            size: 22,
                          ),
                        ),
                      ),
                    ),
                  ],
                )),
          ),
        ],
      ),
    );
  }
}
