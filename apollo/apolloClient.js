import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError, ...rest }) => {
  console.log({ rest });
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: process.env.API_URI,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
