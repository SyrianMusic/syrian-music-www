const ORDER_ASCENDING = 'asc';
const ORDER_DESCENDING = 'desc';

const sortDates = (date1, date2, { order = ORDER_ASCENDING } = {}) => {
  if (date1 > date2) {
    return order === ORDER_ASCENDING ? 1 : -1;
  }

  if (date1 < date2) {
    return order === ORDER_ASCENDING ? -1 : 1;
  }

  return 0;
};

export const sortPastEvents = (events) => {
  let pastEvents = [];

  if (Array.isArray(events) && events.length) {
    const getSortDate = (startDate, endDate) => {
      return endDate ? new Date(endDate) : new Date(startDate);
    };

    pastEvents = [...events].sort((event1, event2) => {
      const sortDate1 = getSortDate(event1?.startDate, event1?.endDate);
      const sortDate2 = getSortDate(event2?.startDate, event2?.endDate);
      return sortDates(sortDate1, sortDate2, { order: ORDER_DESCENDING });
    });
  }

  return pastEvents;
};

export const sortUpcomingEvents = (events) => {
  let upcomingEvents = [];

  if (Array.isArray(events) && events.length) {
    const getSortDate = (start, end) => {
      const startDate = new Date(start);
      const endDate = new Date(end);

      if (startDate < new Date(Date.now()) && endDate) {
        return endDate;
      }

      return startDate;
    };

    upcomingEvents = [...events].sort((event1, event2) => {
      const sortDate1 = getSortDate(event1?.startDate, event1?.endDate);
      const sortDate2 = getSortDate(event2?.startDate, event2?.endDate);
      return sortDates(sortDate1, sortDate2, { order: ORDER_ASCENDING });
    });
  }

  return upcomingEvents;
};
