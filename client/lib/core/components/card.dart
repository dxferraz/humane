import 'dart:ui';
import 'package:humane/core/components/CategoryChip.dart';
import 'package:humane/features/listActions/domain/entities/donation.dart';
import 'package:humane/features/listActions/domain/entities/pagination.dart';
import 'package:intl/intl.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:humane/Utils/colors.dart';
import 'package:humane/Utils/string.dart';
import 'package:humane/features/listActions/domain/entities/Image.dart' as image;
import 'package:carousel_slider/carousel_slider.dart';

class Card extends HookWidget {
  String title;
  String description;
  List<image.Image>? thumbnails;
  String? author;
  String? authorThumbnail;
  String date;
  String? category;

  Card(
      {Key? key,
      required this.title,
      this.description = "",
      this.category,
      this.thumbnails,
      this.author,
      this.authorThumbnail,
      required this.date})
      : super(key: key);

  static List<Widget> buildDonationCards(List<Edge<Donation>> donations) {
    return donations
        .map(
          (donation) => Card(
            author: donation.node.user!.name,
            authorThumbnail: donation.node.user!.thumbnail,
            title: donation.node.title,
            description: donation.node.description,
            thumbnails: donation.node.thumbnails,
            date: donation.node.createdAt,
            category: donation.node.category.title,
          ),
        )
        .toList();
  }

  @override
  Widget build(BuildContext context) {
    DateTime tempDate = DateFormat("yyyy-MM-ddThh:mm:ssZ").parse(date, true);
    return Stack(
      children: <Widget>[
        Container(
          margin: const EdgeInsets.only(left: 25, right: 25, bottom: 15),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.9),
            borderRadius: BorderRadius.all(Radius.circular(10)),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.1),
                blurRadius: 19.0, // has the effect of softening the shadow
                spreadRadius: 1.0, // has the effect of extending the shadow
                offset: const Offset(
                  1.0, // horizontal, move right 10
                  1.0, // vertical, move down 10
                ),
              )
            ],
          ),
          child: InkWell(
            splashColor: Theme.of(context).primaryColor,
            highlightColor: Theme.of(context).primaryColor.withOpacity(0.6),
            borderRadius: BorderRadius.circular(11),
            onTap: () {},
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Container(
                  color: Colors.transparent,
                  padding: const EdgeInsets.only(left: 15, right: 15, top: 15, bottom: 0),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Center(
                        child: Padding(
                          padding: const EdgeInsets.only(right: 8.0),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              SizedBox(
                                width: 50,
                                child: ClipOval(
                                  child: Image.network(authorThumbnail!),
                                ),
                              ),
                              author != null ? Text(author!) : Container()
                            ],
                          ),
                        ),
                      ),
                      Container(
                        width: 1,
                        color: Colors.grey.withAlpha(100),
                        height: 70,
                      ),
                      Expanded(
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 8.0),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: <Widget>[
                              Text(
                                capitalizeFirst(title),
                                maxLines: 2,
                                style: const TextStyle(
                                    overflow: TextOverflow.ellipsis,
                                    fontSize: 16,
                                    height: 1.5,
                                    color: appDarkBlue,
                                    fontWeight: FontWeight.w700),
                              ),
                              Row(
                                children: [
                                  category != null ? CategoryChip(category: category!) : Container(),
                                  Text("Posted on " +
                                      tempDate.day.toString() +
                                      '-' +
                                      tempDate.month.toString() +
                                      "-" +
                                      tempDate.year.toString()),
                                ],
                              )
                            ],
                          ),
                        ),
                      ),
                      PopupMenuButton(
                        offset: const Offset(0, 35),
                        icon: const Icon(
                          Icons.more_vert,
                          color: appDarkBlue,
                        ),
                        itemBuilder: (context) => [
                          PopupMenuItem(
                            child: Text("First"),
                            value: 1,
                            onTap: () {},
                          ),
                          PopupMenuItem(child: Text("Second"), value: 2, onTap: () {})
                        ],
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(bottom: 10, top: 10, right: 15, left: 15),
                  child: Text(
                    description,
                    maxLines: 5,
                    style: const TextStyle(fontSize: 16, height: 1.5, overflow: TextOverflow.ellipsis),
                  ),
                ),
                LayoutBuilder(
                  builder: (BuildContext context, BoxConstraints constraints) {
                    if (thumbnails == null) return Container();
                    return ClipRRect(
                      borderRadius: const BorderRadius.only(bottomLeft: Radius.circular(10), bottomRight: Radius.circular(10)),
                      child: CarouselSlider(
                        options: CarouselOptions(height: 300.0, viewportFraction: 1, initialPage: 0, enableInfiniteScroll: true),
                        items: thumbnails!.map((i) {
                          NetworkImage image = NetworkImage(
                            i.url,
                          );

                          return Stack(
                            children: <Widget>[
                              Opacity(
                                opacity: 0.7,
                                child: ClipRect(
                                  child: Container(
                                    child: BackdropFilter(
                                      filter: ImageFilter.blur(sigmaX: 6.0, sigmaY: 6.0),
                                      child: Container(),
                                    ),
                                    decoration: BoxDecoration(
                                      image: DecorationImage(
                                        fit: BoxFit.fitWidth,
                                        image: image,
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              Container(
                                decoration: BoxDecoration(
                                  image: DecorationImage(
                                    fit: BoxFit.contain,
                                    image: image,
                                  ),
                                ),
                              ),
                            ],
                          );

                          // return Container(
                          //   width: MediaQuery.of(context).size.width,
                          //   margin: EdgeInsets.symmetric(horizontal: 5.0),
                          //   decoration: BoxDecoration(color: Colors.amber),
                          //   child: Image.network(i.url),
                          // );
                        }).toList(),
                      ),
                    );
                  },
                ),
                // ClipRRect(
                //   borderRadius: BorderRadius.only(bottomLeft: Radius.circular(10), bottomRight: Radius.circular(10)),
                //   child: thumbnails != null ? Image.network(thumbnails!) : Container(),
                // ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
