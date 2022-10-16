import { BaseAPI } from '../../api';
import EventsPage, { eventsPageQuery } from './EventsPage';

export const getStaticProps = async () => {
  const { data } = await BaseAPI.query(eventsPageQuery, {
    variables: { now: new Date(Date.now()).toISOString() },
  });
  return { props: data };
};

export default EventsPage;
