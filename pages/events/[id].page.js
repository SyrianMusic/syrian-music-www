import { gql } from '@apollo/client';
import { BaseAPI } from '../../api';
import EventPage, { eventPageQuery } from './EventPage';

export const getStaticPaths = async () => {
  const { data } = await BaseAPI.query(gql`
    query eventPageIds {
      eventCollection {
        items {
          sys {
            id
          }
        }
      }
    }
  `);

  return {
    paths: data.eventCollection.items.map((item) => ({ params: { id: item.sys.id } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { data } = await BaseAPI.query(eventPageQuery, {
    variables: { id: context.params.id },
  });
  return { props: data.event };
};

export default EventPage;
