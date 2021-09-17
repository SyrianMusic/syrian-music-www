import { BaseAPI } from '../../api';
import { ALL_MUSICAL_WORKS_QUERY } from './queries';

export class MusicalWorkAPI extends BaseAPI {
  static async getAllMusicalWorks() {
    return await super.query(ALL_MUSICAL_WORKS_QUERY);
  }
}
