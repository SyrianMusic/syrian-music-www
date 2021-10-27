import { gql } from '@apollo/client';
import { BaseAPI } from '../../api';
import { EventsPage } from './EventsPage';

export const getStaticProps = async () => {
  const query = gql`
    query events($id: String!) {
      events(id: $id) {
        sys {
          id
        }
        content {
          json
        }
      }
    }
  `;
  const variables = { id: '4iJK0Na5QAcDrisQbaFXSL' };
  const { data } = await BaseAPI.query(query, { variables });
  return { props: { content: data.events.content.json } };
};

export default EventsPage;
