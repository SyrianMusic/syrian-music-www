export const today = new Date(1900, 1, 2);

export const addDays = (date, days) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

export const yesterday = addDays(today, -1);
export const tomorrow = addDays(today, 1);

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
