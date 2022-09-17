import '../__helpers__/matchMedia.mock';
import { render, screen } from '@testing-library/react';
import faker from '../../../utils/faker';
import { Event, EventCollection } from '../../../__fixtures__/Event';
import PerformancePage from '../PerformancePage';

const queryUpcomingPerformancesSection = () =>
  screen.queryByText('Upcoming Performances', { exact: false });

describe('PerformancePage', () => {
  const futureEvent = new Event({ startDate: faker.date.future().toISOString() });

  it('when there is an upcoming event, then it displays the Upcoming Performances section', () => {
    const upcomingEvents = new EventCollection({
      events: [futureEvent],
    });

    render(<PerformancePage upcomingEvents={upcomingEvents} />);

    expect(queryUpcomingPerformancesSection()).toBeInTheDocument();
  });

  it('when there are no upcoming events, then it does not display the Upcoming Performances section', () => {
    const upcomingEvents = new EventCollection({ events: [] });

    render(<PerformancePage upcomingEvents={upcomingEvents} />);

    expect(queryUpcomingPerformancesSection()).not.toBeInTheDocument();
  });

  it('when there is an upcoming event, then it displays the event', () => {
    const upcomingEvents = new EventCollection({
      events: [futureEvent],
    });

    render(<PerformancePage upcomingEvents={upcomingEvents} />);

    expect(screen.queryByText(futureEvent.name)).toBeInTheDocument();
  });
});
