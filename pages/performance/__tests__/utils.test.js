import { getFutureEvent, getPastEvent } from '../../../__fixtures__/Event';
import { removePastEvents, sortUpcomingEvents } from '../utils';

describe('removePastEvents', () => {
  it('when there are future and past events, then it removes the past events', () => {
    const pastEvent = getPastEvent();
    const futureEvent1 = getFutureEvent();
    const futureEvent2 = getFutureEvent();

    const actual = removePastEvents([pastEvent, futureEvent1, futureEvent2]);

    expect(actual.length).toBe(2);
    expect(actual).toContain(futureEvent1);
    expect(actual).toContain(futureEvent2);
  });

  it('when there are only future events, then it returns all the events', () => {
    const futureEvent1 = getFutureEvent();
    const futureEvent2 = getFutureEvent();
    const futureEvent3 = getFutureEvent();

    const actual = removePastEvents([futureEvent1, futureEvent2, futureEvent3]);

    expect(actual.length).toBe(3);
    expect(actual).toContain(futureEvent1);
    expect(actual).toContain(futureEvent2);
    expect(actual).toContain(futureEvent3);
  });

  it('when there are only past events, then it returns an empty array', () => {
    const pastEvent1 = getPastEvent();
    const pastEvent2 = getPastEvent();

    const actual = removePastEvents([pastEvent1, pastEvent2]);

    expect(actual.length).toBe(0);
  });

  it('when there are no events, then it returns an empty array', () => {
    const actual = removePastEvents([]);

    expect(actual.length).toBe(0);
  });
});

describe('sortUpcomingEvents', () => {
  it('when there are only events without end dates, then it sorts the events in chronological order (now => next year)', () => {
    const event1 = getFutureEvent({ hasEndDate: false });
    const event2 = getFutureEvent({ after: event1.startDate, hasEndDate: false });
    const event3 = getFutureEvent({ after: event2.startDate, hasEndDate: false });

    const actual = sortUpcomingEvents([event2, event3, event1]);

    expect(actual[0]).toBe(event1);
    expect(actual[1]).toBe(event2);
    expect(actual[2]).toBe(event3);
  });
});
