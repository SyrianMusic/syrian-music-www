import { BaseAPI } from '../../api';
import { ALL_COMPOSITIONS_QUERY } from './queries';

export class CompositionAPI extends BaseAPI {
  static async getAllCompositions() {
    return await super.query(ALL_COMPOSITIONS_QUERY);
  }
}
