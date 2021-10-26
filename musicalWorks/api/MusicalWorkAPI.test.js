import { BaseAPI } from '../../api';
import { MusicalWorkAPI } from './MusicalWorkAPI';
import * as queries from './queries';

jest.mock('../../api');

describe('MusicalWorkAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllMusicalWorks', () => {
    it('returns the result of the ALL_MUSICAL_WORKS_QUERY', async () => {
      const mockQuery = jest.spyOn(BaseAPI, 'query').mockImplementation(async () => true);
      const actual = await MusicalWorkAPI.getAllMusicalWorks();
      expect(BaseAPI.query).toHaveBeenCalledWith(queries.ALL_MUSICAL_WORKS_QUERY);
      expect(actual).toBe(true);
      mockQuery.mockRestore();
    });

    it('throws an error when the query fails', async () => {
      const mockQuery = jest.spyOn(BaseAPI, 'query').mockImplementation(async () => {
        throw new Error();
      });
      expect(async () => {
        await MusicalWorkAPI.getAllMusicalWorks();
      }).rejects.toThrow();
      mockQuery.mockRestore();
    });
  });
});
