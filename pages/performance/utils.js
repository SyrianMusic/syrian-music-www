const getSortDate = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (startDate < new Date(Date.now()) && endDate) {
    return endDate;
  }

  return startDate;
};

export const sortUpcomingEvents = (events) => {
  let upcomingEvents = [];

  if (Array.isArray(events) && events.length) {
    upcomingEvents = [...events].sort((event1, event2) => {
      const sortDate1 = getSortDate(event1?.startDate, event1?.endDate);
      const sortDate2 = getSortDate(event2?.startDate, event2?.endDate);

      if (sortDate1 > sortDate2) {
        return 1;
      }

      if (sortDate1 < sortDate2) {
        return -1;
      }

      return 0;
    });
  }

  return upcomingEvents;
};
