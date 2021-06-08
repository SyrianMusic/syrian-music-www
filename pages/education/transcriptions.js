import Hero from '../../components/Hero';
import SiteLayout from '../../components/SiteLayout';
import SortedList from '../../components/SortedList';
import Tabs from '../../components/Tabs';
import Title from '../../components/Title';
import transcriptions from '../../data/transcriptions';

const createSections = ({ renderSectionId, renderTitle, renderText }) =>
  Object.entries(transcriptions).reduce((acc, [id, transcription]) => {
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
  renderText: ({ composer, form, maqam }) =>
    `${composer.first} ${composer.last} - ${form} ${maqam}`,
});

const transcriptionsByForm = createSections({
  renderSectionId: ({ form }) => `form-${form}`,
  renderTitle: ({ form }) => form,
  renderText: ({ composer, form, maqam }) =>
    `${form} ${maqam} - ${composer.first} ${composer.last}`,
});

const transcriptionsByMaqam = createSections({
  renderSectionId: ({ maqam }) => `maqam-${maqam}`,
  renderTitle: ({ maqam }) => maqam,
  renderText: ({ composer, form, maqam }) =>
    `${form} ${maqam} - ${composer.first} ${composer.last}`,
});

const tabs = [
  {
    id: 'form',
    label: 'Form',
    panel: <SortedList sections={Object.values(transcriptionsByForm)} />,
  },
  {
    id: 'composer',
    label: 'Composer',
    panel: <SortedList sections={Object.values(transcriptionsByComposer)} />,
  },
  {
    id: 'maqam',
    label: 'Maqam',
    panel: <SortedList sections={Object.values(transcriptionsByMaqam)} />,
  },
];

const TranscriptionsPage = () => {
  const selectedTab = '';

  return (
    <SiteLayout className="page-Transcriptions-SiteLayout" pathname="/education/transcriptions">
      <Title>Education and Preservation</Title>
      <Hero title="Transcriptions" />
      <Tabs label={`transcriptions-by-${selectedTab}`} tabs={tabs} />
    </SiteLayout>
  );
};

export default TranscriptionsPage;
