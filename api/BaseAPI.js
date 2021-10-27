import { apolloClient } from '../apollo';

export class BaseAPI {
  static async query(query, options = {}) {
    return await apolloClient.query({ query, ...options });
  }
}
