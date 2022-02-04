import { render, screen, within } from '@testing-library/react';
import api from '../api';
import PerformancePage from '../index.page';
import { addOneDay, mockDateNow, today } from '../__helpers__/date';

jest.mock('../api');

describe('PerformancePage', () => {
  mockDateNow();

  const upcomingEventTitle = 'Event title';
  const upcomingEvent = {
    title: upcomingEventTitle,
    date: addOneDay(today),
    image: {
      src: '',
      width: 0,
      height: 0,
    },
    cta: {
      text: 'text',
      href: 'https://syrianmusic.org',
    },
  };

  const getUpcomingEventsSection = () => {
    const upcomingEvents = screen.queryByText('Upcoming Performances', { exact: false });
    return upcomingEvents ? upcomingEvents.closest('section') : null;
  };

  const getUpcomingEvent = () => {
    const upcomingEventsSection = getUpcomingEventsSection();
    return upcomingEventsSection
      ? within(upcomingEventsSection).queryByText(upcomingEventTitle)
      : null;
  };

  describe('given that there is an upcoming performance', () => {
    beforeEach(() => {
      api.getEvents.mockReturnValue([upcomingEvent]);
      render(<PerformancePage />);
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
      api.getEvents.mockReturnValue([]);
      render(<PerformancePage />);
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
