import { getNextEvent, getUpcomingEvents } from '../utils';
import { addDays, mockDateNow, nextWeek, tomorrow, yesterday } from '../../../__fixtures__/date';
import { Event } from '../../../__fixtures__/Event';

describe('getUpcomingEvents', () => {
  mockDateNow();

  const nextEvent = new Event({ startDate: tomorrow.toISOString() });

  it('filters out past events', () => {
    const pastEvent = new Event({ startDate: yesterday.toISOString() });
    const actual = getUpcomingEvents([pastEvent, nextEvent]);
    expect(actual.length).toBe(1);
    expect(actual[0]).toBe(nextEvent);
  });

  it('sorts the upcoming events', () => {
    const nextEvent = new Event({ startDate: tomorrow.toISOString() });
    const followingEvent = new Event({ startDate: nextWeek.toISOString() });
    const actual = getUpcomingEvents([followingEvent, nextEvent]);
    expect(actual[0]).toBe(nextEvent);
    expect(actual[1]).toBe(followingEvent);
  });
});

describe('getNextEvent', () => {
  mockDateNow();

  const nextEvent = new Event({ startDate: tomorrow.toISOString() });

  it('returns the next event if there are later events', () => {
    const laterEvent = new Event({ startDate: addDays(tomorrow, 1).toISOString() });
    const actual = getNextEvent([laterEvent, nextEvent]);
    expect(actual).toBe(nextEvent);
  });
});
