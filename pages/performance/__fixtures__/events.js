import faker from '../../../utils/faker';
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

let pastDate = faker.date.past();

export const pastEvents = events.map((event) => {
  pastDate = faker.date.future(undefined, pastDate);
  return { ...event, startDate: pastDate.toISOString() };
});

let futureDate = faker.date.future(undefined, '2032-03-23');

export const upcomingEvents = events.map((event) => {
  futureDate = faker.date.future(undefined, futureDate);
  return { ...event, startDate: futureDate.toISOString() };
});
