import { apolloClient } from '../apollo';

export class BaseAPI {
  static query = apolloClient.query;
}
