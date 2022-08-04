import { gql } from '@apollo/client';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Typography from '../../../components/Typography';
import { DEFAULT_COMPOSER_ARABIC, DEFAULT_COMPOSER_ENGLISH } from '../../../utils/text';

const fragments = {
  english: gql`
    fragment ProgramWorkEnglish on MusicalWork {
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
  arabic: gql`
    fragment ProgramWorkArabic on MusicalWork {
      composer {
        firstName
        lastName
      }
      title
      text {
        __typename
      }
    }
  `,
};

const propTypes = {
  className: PropTypes.string,
  composer: PropTypes.shape({
    arabic: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
    english: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
  }),
  id: PropTypes.string.isRequired,
  transcription: PropTypes.object,
  text: PropTypes.object,
  title: PropTypes.shape({
    english: PropTypes.string.isRequired,
    arabic: PropTypes.string,
  }),
  translation: PropTypes.object,
};

const defaultProps = {
  className: undefined,
  composer: DEFAULT_COMPOSER_ENGLISH,
  transcription: undefined,
  text: null,
};

const ProgramWork = ({
  className,
  composer: composerProp,
  id,
  transcription,
  text,
  translation,
  title,
}) => {
  const composerArabic = composerProp.arabic || DEFAULT_COMPOSER_ARABIC;
  const composerEnglish = composerProp.english || DEFAULT_COMPOSER_ENGLISH;
  const hasTranscription = transcription;
  const hasText = Boolean(text);
  const hasTranslation = Boolean(translation);

  let linkText;

  const transcriptionText = 'transcription';
  const translationText = 'translation';
  const textText = 'text';

  if (hasTranscription && hasTranslation) {
    linkText = `${transcriptionText} & ${translationText}`;
  } else if (hasTranscription && hasText) {
    linkText = `${transcriptionText} & ${textText}`;
  } else if (hasTranscription) {
    linkText = transcriptionText;
  } else if (hasTranslation) {
    linkText = translationText;
  } else if (hasText) {
    linkText = textText;
  }

  return (
    <li key={id} className={className}>
      <Typography textAlign="center">
        - {title.english}, composer: {composerEnglish.firstName} {composerEnglish.lastName}
        {(title.arabic || composerArabic) && (
          <>
            <br />
            {title.arabic}
            {title.arabic && composerArabic && ', لحن: '}
            {composerArabic && `${composerArabic.firstName} ${composerArabic.lastName}`}
          </>
        )}
        {linkText && (
          <>
            <br />
            <Link href={`/education/transcriptions/${id}`}>
              <a>View {linkText}</a>
            </Link>
          </>
        )}
      </Typography>
    </li>
  );
};

ProgramWork.propTypes = propTypes;
ProgramWork.defaultProps = defaultProps;
ProgramWork.fragments = fragments;
export default ProgramWork;
