export const today = new Date(1900, 1, 2);
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

export const addOneDay = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
export const subtractOneDay = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
