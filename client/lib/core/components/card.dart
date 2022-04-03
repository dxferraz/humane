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
import 'package:cached_network_image/cached_network_image.dart';
// ignore: import_of_legacy_library_into_null_safe
import 'package:webview_flutter/webview_flutter.dart';

class Card extends HookWidget {
  final String title;
  final String description;
  final List<image.Image>? thumbnails;
  final String? author;
  final String? authorThumbnail;
  final String date;
  final String? category;
  final String? zipCode;

  const Card(
      {Key? key,
      required this.title,
      this.description = "",
      this.category,
      this.thumbnails,
      this.author,
      this.authorThumbnail,
      this.zipCode,
      required this.date})
      : super(key: key);

  static Widget buildDonationCard(Edge<Donation> donation) {
    return Card(
      author: donation.node.user.name,
      authorThumbnail: donation.node.user.thumbnail,
      title: donation.node.title,
      description: donation.node.description,
      thumbnails: donation.node.thumbnails,
      date: donation.node.createdAt,
      category: donation.node.category.title,
      zipCode: donation.node.zipCode,
    );
  }

  @override
  Widget build(BuildContext context) {
    DateTime tempDate = DateFormat("yyyy-MM-ddThh:mm:ssZ").parse(date, true);

    return Stack(
      children: <Widget>[
        Container(
          margin: const EdgeInsets.only(left: 15, right: 15, bottom: 15),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.9),
            borderRadius: const BorderRadius.all(Radius.circular(10)),
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
                              Offstage(
                                offstage: authorThumbnail == null,
                                child: SizedBox(
                                  width: 50,
                                  child: ClipOval(
                                    child: Image.network(authorThumbnail!),
                                  ),
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
                                  Text(
                                    "Posted on " +
                                        tempDate.day.toString() +
                                        '-' +
                                        tempDate.month.toString() +
                                        "-" +
                                        tempDate.year.toString(),
                                    style: const TextStyle(fontSize: 12),
                                  ),
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
                        onSelected: (result) {
                          if (result == 1) {
                            // For text purpose only

                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => WebView(
                                  initialUrl: 'http://www.google.com/maps/search/' + zipCode!,
                                ),
                              ),
                            );
                          }
                        },
                        itemBuilder: (context) {
                          List<PopupMenuItem> selectOptions = [];
                          if (zipCode != null) {
                            selectOptions.add(PopupMenuItem(
                              child: const Text("See Location"),
                              value: 1,
                              onTap: () {},
                            ));
                          }

                          return selectOptions;
                        },
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
                          return CachedNetworkImage(
                            imageUrl: i.url,
                            placeholder: (context, url) => const SizedBox(
                              width: 100,
                              child: Image(
                                image: AssetImage('assets/images/pulse.gif'),
                              ),
                            ),
                            imageBuilder: (context, imageProvider) => Stack(
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
                                          image: imageProvider,
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                Container(
                                  decoration: BoxDecoration(
                                    image: DecorationImage(
                                      fit: BoxFit.contain,
                                      image: imageProvider,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          );
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
