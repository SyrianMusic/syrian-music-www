import Hero from '../../components/Hero';
import SiteLayout from '../../components/SiteLayout';
import Tabs from '../../components/Tabs';
import Title from '../../components/Title';

const tabs = [
  {
    id: 'form',
    label: 'Form',
    panel: <div>Form panel</div>,
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
