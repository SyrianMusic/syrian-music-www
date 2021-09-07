import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.API_URI,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.API_KEY}`,
  },
});
