import { render, screen, within } from '@testing-library/react';
import { mockDateNow, tomorrow } from '../../../__fixtures__/date';
import { Event, EventCollection } from '../../../__fixtures__/Event';
import PerformancePage from '../PerformancePage';

describe('PerformancePage', () => {
  mockDateNow();

  const upcomingEvent = new Event({ name: 'Upcoming event', startDate: tomorrow.toISOString() });

  const getUpcomingEventsSection = () => {
    const upcomingEvents = screen.queryByText('Upcoming Performances', { exact: false });
    return upcomingEvents ? upcomingEvents.closest('section') : null;
  };

  const getUpcomingEvent = () => {
    const upcomingEventsSection = getUpcomingEventsSection();
    return upcomingEventsSection
      ? within(upcomingEventsSection).queryByText(upcomingEvent.name)
      : null;
  };

  describe('given that there is an upcoming performance', () => {
    beforeEach(() => {
      const upcomingEvents = new EventCollection({ events: [upcomingEvent] });
      render(<PerformancePage upcomingEvents={upcomingEvents} />);
    });

    it('displays the upcoming performances section', () => {
      const upcomingEventsSection = getUpcomingEventsSection();
      expect(upcomingEventsSection).toBeInTheDocument();
    });

    it('displays the event information', () => {
      const upcomingEvent = getUpcomingEvent();
      expect(upcomingEvent).toBeInTheDocument();
    });
  });

  describe('given that there is not an upcoming performance', () => {
    beforeEach(() => {
      const upcomingEvents = new EventCollection({ events: [] });
      render(<PerformancePage upcomingEvents={upcomingEvents} />);
    });

    it('does not display the upcoming performances section', () => {
      const upcomingEventsSection = getUpcomingEventsSection();
      expect(upcomingEventsSection).toBe(null);
    });

    it('does not display the event information', () => {
      const upcomingEvent = getUpcomingEvent();
      expect(upcomingEvent).toBe(null);
    });
  });
});
