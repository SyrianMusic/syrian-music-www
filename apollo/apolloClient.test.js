import { ApolloClient } from '@apollo/client';
import { apolloClient } from './apolloClient';

jest.mock('@apollo/client');

describe('apolloClient', () => {
  it('returns an instance of an ApolloClient', () => {
    expect(apolloClient).toBeInstanceOf(ApolloClient);
  });

  xit("sets the ApolloClient's URI from the API_URI environment variable", () => {
    expect(ApolloClient).toHaveBeenCalledWith(
      expect.objectContaining({
        uri: 'API_URI',
      }),
    );
  });

  xit('adds the API_KEY environment variable as the authorization token', () => {
    expect(ApolloClient).toHaveBeenCalledWith(
      expect.objectContaining({
        headers: expect.objectContaining({
          authorization: 'Bearer API_KEY',
        }),
      }),
    );
  });
});
