mixin GqlQuery {
  static String getDonations = ''' query GetDonations(\$input: DonationsPageInput!) {
  donations(data: \$input){
    edges{
      node{
        title
        description
        thumbnails{
          url
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
