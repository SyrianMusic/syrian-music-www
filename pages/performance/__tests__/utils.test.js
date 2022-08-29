import faker from '../../../utils/faker';
import { Event, getFutureEvent, getPastEvent } from '../../../__fixtures__/Event';
import { isPastEvent, removePastEvents, sortUpcomingEvents } from '../utils';

const futureDate = faker.date.future().toISOString();
const pastDate = faker.date.past().toISOString();

describe('isPastEvent', () => {
  it('when the event has not yet started, then it returns false', () => {
    const event = new Event({ startDate: futureDate });

    const actual = isPastEvent(event);

    expect(actual).toBe(false);
  });

  it('when the event has already started but not yet ended, then it returns false', () => {
    const event = new Event({ startDate: pastDate, endDate: futureDate });

    const actual = isPastEvent(event);

    expect(actual).toBe(false);
  });

  it('when the event has already started and has no end date, then it returns true', () => {
    const event = new Event({ startDate: pastDate, endDate: null });

    const actual = isPastEvent(event);

    expect(actual).toBe(true);
  });

  it('when the event has already started and ended, then it returns true', () => {
    const event = new Event({
      startDate: pastDate,
      endDate: faker.date.between(pastDate, new Date(Date.now())),
    });

    const actual = isPastEvent(event);

    expect(actual).toBe(true);
  });
});

describe('removePastEvents', () => {
  it('when there are events with start dates in both the future and the past, then it removes the events with start dates in the past', () => {
    const pastEvent = getPastEvent();
    const futureEvent1 = getFutureEvent();
    const futureEvent2 = getFutureEvent();

    const actual = removePastEvents([pastEvent, futureEvent1, futureEvent2]);

    expect(actual.length).toBe(2);
    expect(actual).toContain(futureEvent1);
    expect(actual).toContain(futureEvent2);
  });

  it('when there are only events with start dates in the future, then it returns all the events', () => {
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
    const event1 = getFutureEvent({ setEndDate: false });
    const event2 = getFutureEvent({ after: event1.startDate, setEndDate: false });
    const event3 = getFutureEvent({ after: event2.startDate, setEndDate: false });

    const actual = sortUpcomingEvents([event2, event3, event1]);

    expect(actual[0]).toBe(event1);
    expect(actual[1]).toBe(event2);
    expect(actual[2]).toBe(event3);
  });
});
