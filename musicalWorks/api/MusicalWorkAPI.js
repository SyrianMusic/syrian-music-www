import { BaseAPI } from '../../api';
import { ALL_MUSICAL_WORKS_QUERY, MUSICAL_WORK_QUERY } from './queries';

export class MusicalWorkAPI extends BaseAPI {
  static async getAllMusicalWorks() {
    return await super.query(ALL_MUSICAL_WORKS_QUERY);
  }

  static async getMusicalWork(id) {
    return await super.query(MUSICAL_WORK_QUERY, { variables: { id } });
  }
}
