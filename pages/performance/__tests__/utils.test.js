import { getFutureEvent } from '../../../__fixtures__/Event';
import { sortUpcomingEvents } from '../utils';

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
