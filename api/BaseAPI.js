import { apolloClient } from '../apollo';

export class BaseAPI {
  static async query(query) {
    return await apolloClient.query({ query });
  }
}
