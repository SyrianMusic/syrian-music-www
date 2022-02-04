export const getNextEvent = (events) => {
  let upcomingEvents = [];

  if (Array.isArray(events) && events.length) {
    const now = new Date(Date.now());
    upcomingEvents = events
      .filter((event) => event.date > now)
      .sort((event1, event2) => {
        if (event1?.date > event2?.date) {
          return 1;
        }
        if (event1?.date < event2?.date) {
          return -1;
        }
        return 0;
      });
  }

  if (upcomingEvents.length > 0) {
    return upcomingEvents[0];
  }

  return null;
};
