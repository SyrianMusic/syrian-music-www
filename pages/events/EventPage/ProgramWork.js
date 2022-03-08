import { gql } from '@apollo/client';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Typography from '../../../components/Typography';
import theme from '../../../styles/theme';
import { DEFAULT_COMPOSER } from '../../../utils/text';

const fragments = {
  program: gql`
    fragment ProgramWork on MusicalWork {
      sys {
        id
      }
      title
      composer {
        sys {
          id
        }
        firstName
        lastName
        birthDate
        birthPlace
        deathDate
        image {
          ...Image
        }
        biography {
          json
        }
      }
      transcription {
        __typename
      }
      text {
        __typename
      }
    }
  `,
};

const propTypes = {
  composer: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
  id: PropTypes.string.isRequired,
  transcription: PropTypes.object,
  text: PropTypes.object,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  composer: DEFAULT_COMPOSER,
  transcription: undefined,
  text: null,
};

const ProgramWork = ({ composer: composerProp, id, transcription, text, title }) => {
  const composer = composerProp || DEFAULT_COMPOSER;
  const hasTranscription = transcription;
  const hasTranslation = text;

  let linkText;

  const transcriptionText = 'transcription';
  const translationText = 'translation';

  if (hasTranscription && hasTranslation) {
    linkText = `${transcriptionText} and ${translationText}`;
  } else if (hasTranscription) {
    linkText = transcriptionText;
  } else if (hasTranslation) {
    linkText = translationText;
  }

  return (
    <li
      key={id}
      css={{
        ':not(:last-child)': {
          marginBottom: theme.pxToRem(25),
        },
      }}>
      <Typography
        css={{
          marginBottom: 0,
        }}
        textAlign="center">
        {title}
      </Typography>
      <Typography
        css={{
          marginBottom: 0,
        }}
        textAlign="center">
        {composer.firstName} {composer.lastName}
      </Typography>
      {linkText && (
        <Typography textAlign="center">
          <Link href={`/education/transcriptions/${id}`}>
            <a>View {linkText}</a>
          </Link>
        </Typography>
      )}
    </li>
  );
};

ProgramWork.propTypes = propTypes;
ProgramWork.defaultProps = defaultProps;
ProgramWork.fragments = fragments;
export default ProgramWork;
