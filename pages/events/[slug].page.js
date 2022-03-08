import { gql } from '@apollo/client';
import { BaseAPI } from '../../api';
import EventPage, { eventPageQuery } from './EventPage';

export const getStaticPaths = async () => {
  const { data } = await BaseAPI.query(gql`
    query eventPageIds {
      eventCollection {
        items {
          slug
        }
      }
    }
  `);

  return {
    paths: data.eventCollection.items.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
};

const fetchIdFromSlug = async (slug) => {
  const { data, error } = await BaseAPI.query(
    gql`
      query eventCollectionQuery($slug: String) {
        events: eventCollection(where: { slug: $slug }) {
          items {
            sys {
              id
            }
          }
        }
      }
    `,
    { variables: { slug } },
  );

  if (error) {
    throw new Error('Could not fetch ID: ' + error.message);
  }
  const foundEvents = data?.events?.items;

  if (Array.isArray(foundEvents) && foundEvents.length === 1) {
    return data?.events?.items[0].sys.id;
  }
  return null;
};

export const getStaticProps = async (context) => {
  const id = await fetchIdFromSlug(context.params.slug);
  // TODO: Handle error
  const { data } = await BaseAPI.query(eventPageQuery, {
    variables: { id },
  });
  if (!data.event) {
    return { notFound: true };
  }
  return { props: data.event };
};

export default EventPage;
