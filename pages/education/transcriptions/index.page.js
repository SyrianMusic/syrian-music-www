import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import { BaseAPI } from '../../../api';
import Hero from '../../../components/Hero';
import SiteLayout from '../../../components/SiteLayout';
import SortedList from '../../../components/SortedList';
import Tabs from '../../../components/Tabs';
import Title from '../../../components/Title';
import theme from '../../../styles/theme';
import { DEFAULT_COMPOSER_ENGLISH } from '../../../utils/text';

const defaultRenderText = ({ composer, title }) => {
  return `${title} - ${composer.first} ${composer.last}`;
};

const defaultSortItems = (
  [, { composer: composer1, title: title1 }],
  [, { composer: composer2, title: title2 }],
) => {
  if (title1 < title2) {
    return -1;
  }
  if (title1 > title2) {
    return 1;
  }
  if (composer1.last < composer2.last) {
    return -1;
  }
  if (composer1.last > composer2.last) {
    return 1;
  }
  if (composer1.first < composer2.first) {
    return -1;
  }
  if (composer1.first > composer2.first) {
    return 1;
  }
  return 0;
};

const createSections = (
  musicalWorks = [],
  { renderSectionId, renderTitle, renderText = defaultRenderText, sortItems = defaultSortItems },
) =>
  musicalWorks
    .map((composition) => {
      const id = composition?.sys?.id;

      const composer = composition?.composer || DEFAULT_COMPOSER_ENGLISH;

      return [
        id,
        {
          composer: {
            first: composer.firstName,
            last: composer.lastName,
          },
          form: composition?.form?.name,
          maqam: composition?.maqam?.name,
          title: composition?.title,
          href: `/education/transcriptions/${id}`,
        },
      ];
    })
    .sort(sortItems)
    .reduce((acc, [id, transcription]) => {
      const sectionId = renderSectionId(transcription).toLowerCase().replace(' ', '-');
      const section = acc[sectionId];
      const item = {
        id,
        text: renderText(transcription),
        href: transcription.href,
      };

      if (!section) {
        return {
          ...acc,
          [sectionId]: {
            id: sectionId,
            title: renderTitle(transcription),
            items: [item],
          },
        };
      }
      return {
        ...acc,
        [sectionId]: {
          ...section,
          items: [...section.items, item],
        },
      };
    }, {});

const getComposerLetter = ({ last }) => last.replace("'", '')[0];

const getTranscriptionsByComposer = (musicalWorks) =>
  createSections(musicalWorks, {
    renderSectionId: ({ composer }) => `composers-${getComposerLetter(composer)}`,
    renderTitle: ({ composer }) => getComposerLetter(composer),
    renderText: ({ composer, title }) => `${composer.first} ${composer.last} - ${title}`,
    sortItems: (
      [, { composer: composer1, title: title1 }],
      [, { composer: composer2, title: title2 }],
    ) => {
      if (composer1.last < composer2.last) {
        return -1;
      }
      if (composer1.last > composer2.last) {
        return 1;
      }
      if (composer1.first < composer2.first) {
        return -1;
      }
      if (composer1.first > composer2.first) {
        return 1;
      }
      if (title1 < title2) {
        return -1;
      }
      if (title1 > title2) {
        return 1;
      }
      return 0;
    },
  });

const getTranscriptionsByForm = (musicalWorks) =>
  createSections(musicalWorks, {
    renderSectionId: ({ form }) => `form-${form}`,
    renderTitle: ({ form }) => form,
  });

const getTranscriptionsByMaqam = (musicalWorks) =>
  createSections(musicalWorks, {
    renderSectionId: ({ maqam }) => `maqam-${maqam}`,
    renderTitle: ({ maqam }) => maqam,
  });

const sortSections = (sections) =>
  Object.entries(sections)
    .sort(([key1], [key2]) => {
      if (key1 < key2) {
        return -1;
      } else if (key1 > key2) {
        return 1;
      }
      return 0;
    })
    .map(([, value]) => value);

const TranscriptionsPage = ({ musicalWorkCollection }) => {
  const transcriptionsByComposer = getTranscriptionsByComposer(musicalWorkCollection?.items);
  const transcriptionsByMaqam = getTranscriptionsByMaqam(musicalWorkCollection?.items);
  const transcriptionsByForm = getTranscriptionsByForm(musicalWorkCollection?.items);

  const tabs = [
    {
      id: 'maqam',
      label: 'Maqam',
      panel: (
        <SortedList
          className="page-Transcriptions-panel"
          sections={sortSections(transcriptionsByMaqam)}
        />
      ),
    },

    {
      id: 'composer',
      label: 'Composer',
      panel: (
        <SortedList
          className="page-Transcriptions-panel"
          sections={sortSections(transcriptionsByComposer)}
        />
      ),
    },
    {
      id: 'form',
      label: 'Form',
      panel: (
        <SortedList
          className="page-Transcriptions-panel"
          sections={sortSections(transcriptionsByForm)}
        />
      ),
    },
  ];

  return (
    <SiteLayout className="page-Transcriptions-SiteLayout" pathname="/education/transcriptions">
      <Title>Education and Preservation</Title>
      <Hero title="Transcriptions" />
      <Tabs renderLabel={({ selectedTab }) => `transcriptions-by-${selectedTab}`} tabs={tabs} />
      <style jsx>
        {`
          :global(.page-Transcriptions-panel) {
            padding: 0 ${theme.pxToRem(56)};
          }

          @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
            :global(.page-Transcriptions-panel) {
              padding: 0;
            }
          }
        `}
      </style>
    </SiteLayout>
  );
};

TranscriptionsPage.propTypes = {
  musicalWorkCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        composer: PropTypes.shape({
          firstName: PropTypes.string,
          lastName: PropTypes.string,
        }),
        form: PropTypes.shape({ name: PropTypes.string }),
        maqam: PropTypes.shape({ name: PropTypes.string }),
        title: PropTypes.string,
        sys: PropTypes.shape({ id: PropTypes.string }),
      }),
    ),
  }).isRequired,
};

export const getStaticProps = async () => {
  const { data } = await BaseAPI.query(
    gql`
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
    `,
  );
  return { props: data };
};

export default TranscriptionsPage;
