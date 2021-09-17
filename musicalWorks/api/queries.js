import { gql } from '@apollo/client';

export const ALL_MUSICAL_WORKS_QUERY = gql`
  query {
    musicalWorkCollection {
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
