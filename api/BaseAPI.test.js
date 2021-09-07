import { BaseAPI } from './BaseAPI';
import { apolloClient } from '../apollo';

jest.mock('../apollo');

describe('BaseAPI', () => {
  it('uses ApolloClient to make queries', () => {
    expect(BaseAPI.query).toBe(apolloClient.query);
  });
});
