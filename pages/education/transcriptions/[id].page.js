import { gql } from '@apollo/client';
import { BaseAPI } from '../../../api';
import environment from '../../../utils/environment';
import TranscriptionPage, { transcriptionPageQuery } from './TranscriptionPage';

export default TranscriptionPage;

export const getStaticPaths = async () => {
  const { data } = await BaseAPI.query(gql`
    query allTranscriptions {
      musicalWorkCollection {
        items {
          sys {
            id
          }
        }
      }
    }
  `);

  return {
    paths: data.musicalWorkCollection.items.map((item) => ({ params: { id: item.sys.id } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { data } = await BaseAPI.query(transcriptionPageQuery, {
    variables: { id: context.params.id },
  });
  return { props: { adobeKey: environment.adobeKey, ...data } };
};
