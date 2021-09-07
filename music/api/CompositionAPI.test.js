import { BaseAPI } from '../../api';
import { CompositionAPI } from './CompositionAPI';
import * as queries from '../apollo/queries';

jest.mock('../../api');

describe('CompositionAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllCompositions', () => {
    it('returns the result of the ALL_COMPOSITIONS_QUERY', async () => {
      const mockQuery = jest.spyOn(BaseAPI, 'query').mockImplementation(async () => true);
      const actual = await CompositionAPI.getAllCompositions();
      expect(BaseAPI.query).toHaveBeenCalledWith(queries.ALL_COMPOSITIONS_QUERY);
      expect(actual).toBe(true);
      mockQuery.mockRestore();
    });

    it('throws an error when the query fails', async () => {
      const mockQuery = jest.spyOn(BaseAPI, 'query').mockImplementation(async () => {
        throw new Error();
      });
      expect(async () => {
        await await CompositionAPI.getAllCompositions();
      }).rejects.toThrow();
      mockQuery.mockRestore();
    });
  });
});
