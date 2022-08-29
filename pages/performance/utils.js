export const isPastEvent = (event) => {
  const hasStartDatePassed = new Date(event.startDate) < new Date(Date.now());

  if (!event.endDate) return hasStartDatePassed;

  const hasEndDatePassed = new Date(event.endDate) < new Date(Date.now());
  return hasStartDatePassed && hasEndDatePassed;
};

export const removePastEvents = (events) => events.filter((event) => !isPastEvent(event));

export const sortUpcomingEvents = (events) => {
  let upcomingEvents = [];

  if (Array.isArray(events) && events.length) {
    const filteredEvents = removePastEvents(events);
    upcomingEvents = filteredEvents.sort((event1, event2) => {
      const startDate1 = new Date(event1?.startDate);
      const startDate2 = new Date(event2?.startDate);

      if (startDate1 > startDate2) {
        return 1;
      }
      if (startDate1 < startDate2) {
        return -1;
      }
      return 0;
    });
  }

  return upcomingEvents;
};
