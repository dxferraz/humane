import 'package:flutter/material.dart' hide Title;
import 'package:flutter_svg/svg.dart';
import 'package:humane/Components/shared_components/HLoading.dart';

class MyStorage extends StatefulWidget {
  @override
  MyStorageState createState() {
    return MyStorageState();
  }
}

class MyStorageState extends State<MyStorage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: SingleChildScrollView(
        child: Stack(
          children: <Widget>[
            SafeArea(
              child: Container(
                padding: EdgeInsets.symmetric(vertical: 30),
                margin: EdgeInsets.all(15),
                decoration: new BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.all(Radius.circular(10)),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.1),
                      blurRadius: 5.0, // has the effect of softening the shadow
                      spreadRadius: 1.0, // has the effect of extending the shadow
                      offset: Offset(
                        1.0, // horizontal, move right 10
                        1.0, // vertical, move down 10
                      ),
                    )
                  ],
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: <Widget>[
                    Center(
                        child: Text(
                      "You don't have any storages yet!",
                      style: TextStyle(fontFamily: "Montserrat-bold", color: Theme.of(context).secondaryHeaderColor),
                    )),
                    SvgPicture.asset("assets/icons/storage.svg", width: MediaQuery.of(context).size.width * 0.8, semanticsLabel: 'storage'),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
