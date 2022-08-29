import faker from '../../../utils/faker';
import { Event } from '../../../__fixtures__/Event';
import { sortUpcomingEvents } from '../utils';

describe('sortUpcomingEvents', () => {
  const date1 = faker.date.future();
  const date2 = faker.date.future(undefined, date1);
  const date3 = faker.date.future(undefined, date2);

  it('when all events have no end date, then the events are sorted in chronological order (today > next year) by start date', () => {
    const event1 = new Event({ startDate: date1.toISOString(), endDate: null });
    const event2 = new Event({ startDate: date2.toISOString(), endDate: null });
    const event3 = new Event({ startDate: date3.toISOString(), endDate: null });

    const actual = sortUpcomingEvents([event2, event3, event1]);

    expect(actual[0]).toBe(event1);
    expect(actual[1]).toBe(event2);
    expect(actual[2]).toBe(event3);
  });

  it('when an event has an end date and has started, then it is sorted by end date', () => {
    const noEndDate1 = new Event({ startDate: date1.toISOString(), endDate: null });
    const withEndDate = new Event({
      startDate: faker.date.past().toISOString(),
      endDate: faker.date.future(undefined, date3).toISOString(),
    });
    const noEndDate2 = new Event({ startDate: date3.toISOString(), endDate: null });

    const actual = sortUpcomingEvents([noEndDate2, withEndDate, noEndDate1]);

    expect(actual[0]).toBe(noEndDate1);
    expect(actual[1]).toBe(noEndDate2);
    expect(actual[2]).toBe(withEndDate);
  });

  it('when an event has an end date but has not yet started, then it is sorted by start date', () => {
    const noEndDate1 = new Event({ startDate: date1.toISOString(), endDate: null });
    const withEndDate = new Event({
      startDate: date2.toISOString(),
      endDate: faker.date.future(undefined, date3).toISOString(),
    });
    const noEndDate2 = new Event({ startDate: date3.toISOString(), endDate: null });

    const actual = sortUpcomingEvents([noEndDate2, withEndDate, noEndDate1]);

    expect(actual[0]).toBe(noEndDate1);
    expect(actual[1]).toBe(withEndDate);
    expect(actual[2]).toBe(noEndDate2);
  });
});
