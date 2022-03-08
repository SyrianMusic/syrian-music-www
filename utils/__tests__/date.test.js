import * as dateUtils from '../date';

describe('formatDate', () => {
  it.each([
    {
      name: 'UTC date',
      date: '2022-03-12T20:00:00.000Z',
      expected: 'March 12, 2022',
    },
    {
      name: 'Local date',
      date: '2022-03-12T20:00:00.000-05:00',
      expected: 'March 13, 2022',
    },
  ])('properly formats the date ($name)', ({ date, expected }) => {
    const actual = dateUtils.formatDate(date);
    expect(actual).toBe(expected);
  });
});

describe('formatDateTime', () => {
  it.each([
    {
      name: 'UTC date',
      date: '2022-03-12T20:00:00.000Z',
      expected: '8PM March 12, 2022',
    },
    {
      name: 'Local date',
      date: '2022-03-12T20:00:00.000-05:00',
      expected: '1AM March 13, 2022',
    },
  ])('properly formats the datetime ($name)', ({ date, expected }) => {
    const actual = dateUtils.formatDateTime(date);
    expect(actual).toBe(expected);
  });
});
