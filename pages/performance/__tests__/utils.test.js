import faker from '../../../utils/faker';
import { Event } from '../../../__fixtures__/Event';
import { sortUpcomingEvents } from '../utils';

describe('sortUpcomingEvents', () => {
  it('filters out past events', () => {
    const futureDate = faker.date.future();
    const pastDate = faker.date.past();
    const futureEvent = new Event({ startDate: futureDate.toISOString() });
    const pastEvent = new Event({ startDate: pastDate.toISOString() });

    const actual = sortUpcomingEvents([pastEvent, futureEvent]);

    expect(actual.length).toBe(1);
    expect(actual[0]).toBe(futureEvent);
  });

  it('sorts the upcoming events', () => {
    const nextDate = faker.date.future();
    const followingDate = faker.date.future(undefined, nextDate);
    const nextEvent = new Event({ startDate: nextDate.toISOString() });
    const followingEvent = new Event({ startDate: followingDate.toISOString() });

    const actual = sortUpcomingEvents([followingEvent, nextEvent]);

    expect(actual[0]).toBe(nextEvent);
    expect(actual[1]).toBe(followingEvent);
  });
});
