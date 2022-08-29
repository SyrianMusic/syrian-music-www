import { render, screen } from '@testing-library/react';
import { EventCollection, getFutureEvent } from '../../../__fixtures__/Event';
import PerformancePage from '../PerformancePage';

const queryUpcomingPerformancesSection = () =>
  screen.queryByText('Upcoming Performances', { exact: false });

describe('PerformancePage', () => {
  it('when there is an upcoming event, then it displays the Upcoming Performances section', () => {
    const futureEvent = getFutureEvent();
    const upcomingEvents = new EventCollection({ events: [futureEvent] });

    render(<PerformancePage upcomingEvents={upcomingEvents} />);

    expect(queryUpcomingPerformancesSection()).toBeInTheDocument();
  });

  it('when there are no upcoming events, then it does not display the Upcoming Performances section', () => {
    const upcomingEvents = new EventCollection({ events: [] });

    render(<PerformancePage upcomingEvents={upcomingEvents} />);

    expect(queryUpcomingPerformancesSection()).not.toBeInTheDocument();
  });

  it('when there is an upcoming event, then it displays the event', () => {
    const futureEvent = getFutureEvent();
    const upcomingEvents = new EventCollection({ events: [futureEvent] });

    render(<PerformancePage upcomingEvents={upcomingEvents} />);

    expect(screen.queryByText(futureEvent.name)).toBeInTheDocument();
  });
});
