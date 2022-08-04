import { gql } from '@apollo/client';
import { BaseAPI } from '../../api';
import logger from '../../utils/logger';
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
    throw new Error(`Could not fetch ID for slug: ${slug}`);
  }
  const foundEvents = data?.events?.items;

  if (Array.isArray(foundEvents) && foundEvents.length === 1) {
    return data?.events?.items[0].sys.id;
  }
  return null;
};

const fetchEventData = async (id) => {
  const { data, error } = await BaseAPI.query(eventPageQuery, {
    variables: { id },
  });
  if (error) {
    throw new Error(`Could not fetch data for event ID: ${id}`);
  }
  return data.event;
};

export const getStaticProps = async (context) => {
  let id;
  try {
    id = await fetchIdFromSlug(context.params.slug);
    const eventData = await fetchEventData(id);
    if (!eventData) {
      return { notFound: true };
    }
    return { props: eventData };
  } catch (e) {
    logger.error(`Could not generate event page: slug=<${context.params.slug}> id=<${id}>`);
  }
};

export default EventPage;
