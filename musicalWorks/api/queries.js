import { gql } from '@apollo/client';

export const MUSICAL_WORK_QUERY = gql`
  query findMusicalWork($id: String!) {
    musicalWork(id: $id) {
      sys {
        id
      }
      title
      composer {
        firstName
        lastName
      }
      transcription {
        url
      }
    }
  }
`;

export const ALL_MUSICAL_WORKS_QUERY = gql`
  query allMusicalWorks {
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
      }
    }
  }
`;
