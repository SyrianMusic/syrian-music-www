import environment from '../utils/environment';

export const today = new Date(environment.now());

export const addDays = (date, days) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

export const yesterday = addDays(today, -1);
export const tomorrow = addDays(today, 1);
export const nextWeek = addDays(today, 7);

export const mockDateNow = () => {
  jest.spyOn(global.Date, 'now');
  global.Date.now.mockReturnValue(today.valueOf());

  beforeEach(() => {
    global.Date.now.mockClear();
  });

  afterAll(() => {
    global.Date.now.mockRestore();
  });
};
