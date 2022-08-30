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

export const formatDateRange = (startDate, endDate) => {
  if (!endDate || startDate === endDate) {
    return formatDateTime(startDate);
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  const separator = '–';

  const hasSameYear = start.getFullYear() === end.getFullYear();

  if (!hasSameYear) {
    return `${formatDate(start)}${separator}${formatDate(end)}`;
  }

  const formattedStart = formatDateParts(start);
  const formattedEnd = formatDateParts(end);

  const hasSameMonth = start.getMonth() === end.getMonth();

  if (!hasSameMonth) {
    return `${formattedStart.month} ${formattedStart.day}${separator}${formattedEnd.month} ${formattedEnd.day}, ${formattedStart.year}`;
  }

  const hasSameDate = start.getDate() === end.getDate();

  if (!hasSameDate) {
    return `${formattedStart.month} ${formattedStart.day}${separator}${formattedEnd.day}, ${formattedStart.year}`;
  }

  return formatDateTime(startDate);
};
