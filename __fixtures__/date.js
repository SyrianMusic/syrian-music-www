import faker from '../utils/faker';

export const today = new Date(faker.date.between());

export const addDays = (date, days) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

const addMonths = (date, months) =>
  new Date(date.getFullYear(), date.getMonth() + months, date.getDate());

export const lastMonth = addMonths(today, -1);
export const lastWeek = addDays(today, -7);
export const yesterday = addDays(today, -1);
export const tomorrow = addDays(today, 1);
export const nextWeek = addDays(today, 7);
export const nextMonth = addMonths(today, 1);

export const getDateRange = ({ same = null, past = false } = {}) => {
  const startYear = past ? 1950 : 2050;
  let startDate = faker.date.future(past ? 50 : undefined, `${startYear}-01-01`);
  let endDate = new Date(startDate);

  switch (same) {
    case 'dayPeriod':
      startDate.setHours(20);
      endDate.setHours(22);
      break;
    case 'day':
      startDate.setHours(11);
      endDate.setHours(12);
      break;
    case 'month':
      startDate = faker.date.soon(15, new Date(startDate.getFullYear(), startDate.getMonth(), 1));
      endDate = faker.date.between(
        startDate,
        new Date(startDate.getFullYear(), startDate.getMonth(), 30),
      );
      break;
    case 'year':
      startDate = faker.date.soon(6 * 30, new Date(startDate.getFullYear(), 1, 1));
      endDate = faker.date.between(startDate, new Date(startDate.getFullYear(), 12, 31));
      break;
    default:
      endDate = faker.date.future(undefined, new Date(startDate.getFullYear() + 1, 1, 1));
  }

  return { startDate, endDate };
};

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
