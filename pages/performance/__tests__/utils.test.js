import { getNextEvent } from '../utils';
import { addDays, mockDateNow, tomorrow, yesterday } from '../../../__fixtures__/date';
import { Event } from '../../../__fixtures__/Event';

describe('getNextEvent', () => {
  mockDateNow();

  const nextEvent = new Event({ startDate: tomorrow.toISOString() });

  it('filters out past events', () => {
    const pastEvent = new Event({ startDate: yesterday.toISOString() });
    const actual = getNextEvent([pastEvent, nextEvent]);
    expect(actual).toBe(nextEvent);
  });

  it('returns the next event if there are later events', () => {
    const laterEvent = new Event({ startDate: addDays(tomorrow, 1).toISOString() });
    const actual = getNextEvent([laterEvent, nextEvent]);
    expect(actual).toBe(nextEvent);
  });
});
