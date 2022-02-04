import { getNextEvent } from '../utils';
import { addOneDay, mockDateNow, subtractOneDay, today } from '../__helpers__/date';

describe('getNextEvent', () => {
  mockDateNow();

  it('filters out past events', () => {
    const pastEvent = { date: subtractOneDay(today) };
    const nextEvent = getNextEvent([pastEvent]);
    expect(nextEvent).toBe(null);
  });

  it('returns the next event', () => {
    const nextEvent = { date: addOneDay(today) };
    const laterEvent = { date: addOneDay(nextEvent.date) };
    const ne = getNextEvent([laterEvent, nextEvent]);
    expect(ne).toBe(nextEvent);
  });
});
