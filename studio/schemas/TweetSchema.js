export const tweetSchema = {
  name: "tweets",
  title: "Tweets",
  type: "document",
  fields: [
    {
      name: "tweet",
      title: "Tweet",
      type: "document",
    },
    {
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
    },
    {
      name: "author",
      title: "Author",
      to: [{type: 'users'}],
    },
  ],
};