export const sortUpcomingEvents = (events) => {
  let upcomingEvents = [];

  if (Array.isArray(events) && events.length) {
    upcomingEvents = [...events].sort((event1, event2) => {
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
