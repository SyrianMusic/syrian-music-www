import { addDays, today, yesterday } from '../../../__fixtures__/date';
import { quenchTheThirsty, syrianOrnaments } from '../../../__fixtures__/Event';
import faker from '../../../utils/faker';

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

let futureDate = faker.date.future(undefined, today);

export const upcomingEvents = events.map((event) => {
  futureDate = faker.date.future(undefined, futureDate);

  return {
    ...event,
    startDate: futureDate.toISOString(),
  };
});
