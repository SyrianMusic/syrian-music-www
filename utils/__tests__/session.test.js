import { v4 as uuidv4 } from 'uuid';
import faker from '../faker';
import { getSessionId } from '../session';

jest.mock('uuid');

const SESSION_ID_KEY = 'sessionId';

describe('getSessionId', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test(`when there is no ${SESSION_ID_KEY} in local storage, then a unique id is generated and stored to local storage`, () => {
    jest.spyOn(Storage.prototype, 'getItem');
    jest.spyOn(Storage.prototype, 'setItem');
    const expected = faker.datatype.uuid();
    uuidv4.mockReturnValue(expected);
    window.localStorage.getItem.mockReturnValue(null);

    const actual = getSessionId();

    expect(actual).toBe(expected);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(SESSION_ID_KEY);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(SESSION_ID_KEY, expected);
  });

  test(`when there is a ${SESSION_ID_KEY} in local storage, then it returns the sessionId from localStorage`, () => {
    jest.spyOn(Storage.prototype, 'getItem');
    jest.spyOn(Storage.prototype, 'setItem');
    const expected = faker.datatype.uuid();
    window.localStorage.getItem.mockReturnValue(expected);

    const actual = getSessionId();

    expect(actual).toBe(expected);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(SESSION_ID_KEY);
    expect(window.localStorage.setItem).not.toHaveBeenCalled();
  });
});
