import { BaseAPI } from './BaseAPI';
import { apolloClient } from '../apollo';

jest.mock('../apollo');

describe('BaseAPI', () => {
  it('uses ApolloClient to make queries', () => {
    const query = 'QUERY';
    BaseAPI.query(query);
    expect(apolloClient.query).toHaveBeenCalledWith(
      expect.objectContaining({
        query,
      }),
    );
  });
});
