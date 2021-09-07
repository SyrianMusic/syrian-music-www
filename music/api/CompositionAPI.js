import { BaseAPI } from '../../api';
import * as queries from '../apollo/queries';

export class CompositionAPI extends BaseAPI {
  static async getAllCompositions() {
    return await super.query(queries.ALL_COMPOSITIONS_QUERY);
  }
}
