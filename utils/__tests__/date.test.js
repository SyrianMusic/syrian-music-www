import { formatDate, formatDateRange, formatDateTime } from '../date';

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
    const actual = formatDate(date);
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
    const actual = formatDateTime(date);
    expect(actual).toBe(expected);
  });
});

describe('formatDateRange', () => {
  it('when there is no end date, then it returns the formatted start date and time', () => {
    const startDate = new Date(1900, 0, 1, 12).toISOString();
    const endDate = null;
    const expected = '12PM January 1, 1900';

    const actual = formatDateRange(startDate, endDate);

    expect(actual).toBe(expected);
  });

  it('when the years are not the same, then it joins the two full dates', () => {
    const startDate = new Date(1900, 0, 1).toISOString();
    const endDate = new Date(2000, 0, 1).toISOString();
    const expected = 'January 1, 1900–January 1, 2000';

    const actual = formatDateRange(startDate, endDate);

    expect(actual).toBe(expected);
  });

  it('when the years are the same but the months are different, then it joins the dates between months', () => {
    const startDate = new Date(1900, 0, 1).toISOString();
    const endDate = new Date(1900, 11, 31).toISOString();
    const expected = 'January 1–December 31, 1900';

    const actual = formatDateRange(startDate, endDate);

    expect(actual).toBe(expected);
  });

  it('when the months and years are the same but the days are the different, then it joins the dates between days', () => {
    const startDate = new Date(1900, 0, 1).toISOString();
    const endDate = new Date(1900, 0, 31).toISOString();
    const expected = 'January 1–31, 1900';

    const actual = formatDateRange(startDate, endDate);

    expect(actual).toBe(expected);
  });

  it('when the the days, months, and years are the same but the day periods (AM/PM) are different, then it joins the dates between the times', () => {
    const startDate = new Date(1900, 0, 1, 11).toISOString();
    const endDate = new Date(1900, 0, 1, 12).toISOString();
    const expected = '11AM–12PM January 1, 1900';

    const actual = formatDateRange(startDate, endDate);

    expect(actual).toBe(expected);
  });

  it('when the day periods (AM/PM), days, months, and years are the same but the hours are different, then it joins the dates between the hours', () => {
    const startDate = new Date(1900, 0, 1, 12).toISOString();
    const endDate = new Date(1900, 0, 1, 16).toISOString();
    const expected = '12–4PM January 1, 1900';

    const actual = formatDateRange(startDate, endDate);

    expect(actual).toBe(expected);
  });

  it('when the hours, day periods (AM/PM), days, months, and years are the same, then it returns the formatted date and time', () => {
    const startDate = new Date(1900, 0, 1, 12).toISOString();
    const endDate = new Date(1900, 0, 1, 12).toISOString();
    const expected = '12PM January 1, 1900';

    const actual = formatDateRange(startDate, endDate);

    expect(actual).toBe(expected);
  });
});
