import { gql } from '@apollo/client';

export const ALL_COMPOSITIONS_QUERY = gql`
  query {
    compositionCollection {
      items {
        sys {
          id
        }
        title
        composer {
          firstName
          lastName
        }
        maqam {
          name
        }
        form {
          name
        }
        transcription {
          url
        }
      }
    }
  }
`;