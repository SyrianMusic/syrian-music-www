import Hero from '../../components/Hero';
import SiteLayout from '../../components/SiteLayout';
import SortedList from '../../components/SortedList';
import Tabs from '../../components/Tabs';
import Title from '../../components/Title';
import transcriptions from '../../data/transcriptions';
import { CompositionAPI } from '../../music';
import theme from '../../styles/theme';

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

const createSections = ({
  renderSectionId,
  renderTitle,
  renderText = defaultRenderText,
  sortItems = defaultSortItems,
}) =>
  Object.entries(transcriptions)
    .sort(sortItems)
    .reduce((acc, [id, transcription]) => {
      const sectionId = renderSectionId(transcription).toLowerCase().replace(' ', '-');
      const section = acc[sectionId];
      const item = {
        id,
        text: renderText(transcription),
        href: `/transcriptions/${transcription.filename}`,
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

const transcriptionsByComposer = createSections({
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

const transcriptionsByForm = createSections({
  renderSectionId: ({ form }) => `form-${form}`,
  renderTitle: ({ form }) => form,
});

const transcriptionsByMaqam = createSections({
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

const TranscriptionsPage = () => {
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

export const getStaticProps = async () => {
  const { data } = await CompositionAPI.getAllCompositions();
  return { props: data };
};

export default TranscriptionsPage;
