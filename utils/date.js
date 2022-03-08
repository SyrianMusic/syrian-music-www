const formatDateParts = (dateString) => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
  });
  let month;
  let day;
  let year;
  let hour;
  let dayPeriod;
  formatter.formatToParts(date).forEach(({ type, value }) => {
    switch (type) {
      case 'month':
        month = value;
        break;
      case 'day':
        day = value;
        break;
      case 'year':
        year = value;
        break;
      case 'hour':
        hour = value;
        break;
      case 'dayPeriod':
        dayPeriod = value;
        break;
      default:
        break;
    }
  });
  return {
    month,
    day,
    year,
    hour,
    dayPeriod,
  };
};

export const formatDateTime = (dateString) => {
  const { month, day, year, hour, dayPeriod } = formatDateParts(dateString);
  return `${hour}${dayPeriod} ${month} ${day}, ${year}`;
};

export const formatDate = (dateString) => {
  const { month, day, year } = formatDateParts(dateString);
  return `${month} ${day}, ${year}`;
};
