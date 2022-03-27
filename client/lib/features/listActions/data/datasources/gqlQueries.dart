mixin GqlQuery {
  static String getDonations = ''' query GetDonations(\$input: DonationsPageInput!) {
  donations(data: \$input){
    edges{
      node{
        title
        zipCode
        description
        timeStamp
        category{
          title
        }
        thumbnails{
          url
        }
        user{
          name
          thumbnail
        }
      }
      cursor
    }
    pageInfo{
      hasNextPage
      endCursor
    }
  }
} ''';
}
