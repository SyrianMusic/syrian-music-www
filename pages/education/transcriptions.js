import Hero from '../../components/Hero';
import SiteLayout from '../../components/SiteLayout';
import SortedList from '../../components/SortedList';
import Tabs from '../../components/Tabs';
import Title from '../../components/Title';
import transcriptions from '../../data/transcriptions';

const transcriptionsByForm = Object.entries(transcriptions).reduce((acc, [id, transcription]) => {
  const { composer, filename, form, maqam } = transcription;
  const sectionId = `form-${form}`.toLowerCase().replace(' ', '-');
  const section = acc[sectionId];
  const item = {
    id,
    text: `${form} ${maqam} - ${composer.first} ${composer.last}`,
    href: `/transcriptions/${filename}`,
  };

  if (!section) {
    return {
      ...acc,
      [sectionId]: {
        id: sectionId,
        title: form,
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

const tabs = [
  {
    id: 'form',
    label: 'Form',
    panel: <SortedList sections={Object.values(transcriptionsByForm)} />,
  },
  {
    id: 'composer',
    label: 'Composer',
    panel: <div>Composer panel</div>,
  },
  {
    id: 'maqam',
    label: 'Maqam',
    panel: <div>Maqam panel</div>,
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
