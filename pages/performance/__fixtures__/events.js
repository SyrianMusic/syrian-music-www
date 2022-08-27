import { addDays, tomorrow, yesterday } from '../../../__fixtures__/date';
import { quenchTheThirsty, syrianOrnaments } from '../../../__fixtures__/Event';

const events = [
  {
    ...syrianOrnaments,
    image: {
      width: 704,
      height: 352,
      url: 'https://via.placeholder.com/704x352',
    },
  },
  {
    ...quenchTheThirsty,
    image: {
      width: 704,
      height: 352,
      url: 'https://via.placeholder.com/704x352',
    },
  },
  {
    ...syrianOrnaments,
    name: 'Another Event',
    image: {
      width: 704,
      height: 352,
      url: 'https://via.placeholder.com/704x352',
    },
  },
];

export const pastEvents = events.map((event, i) => ({
  ...event,
  startDate: addDays(yesterday, i * -7).toISOString(),
}));

export const upcomingEvents = events.map((event, i) => ({
  ...event,
  startDate: addDays(tomorrow, i * 7).toISOString(),
}));
