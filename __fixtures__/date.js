import faker from '../utils/faker';

export const today = new Date(faker.date.future(undefined, '2032-03-23T21:13:37.118Z'));

export const addDays = (date, days) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

const addMonths = (date, months) =>
  new Date(date.getFullYear(), date.getMonth() + months, date.getDate());

export const yesterday = addDays(today, -1);
export const tomorrow = addDays(today, 1);
export const nextWeek = addDays(today, 7);
export const nextMonth = addMonths(today, 1);

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
