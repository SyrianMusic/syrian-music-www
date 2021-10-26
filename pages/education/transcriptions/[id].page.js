import PropTypes from 'prop-types';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography from '../../../components/Typography';
import { MusicalWorkAPI } from '../../../musicalWorks';
import { musicalWorkPropShape } from './propTypes';

const TranscriptionPage = ({ musicalWork }) => {
  return (
    <SiteLayout
      className="page-Transcription-SiteLayout"
      pathname={`/education/transcriptions/${musicalWork?.id}`}>
      <Title>{musicalWork?.title}</Title>
      <Typography className="page-Transcription-title" variant="h3" as="h1" textAlign="center">
        {musicalWork?.title}
      </Typography>
      <style jsx>{``}</style>
    </SiteLayout>
  );
};

TranscriptionPage.propTypes = {
  musicalWork: PropTypes.shape(musicalWorkPropShape),
};

export const getStaticPaths = async () => {
  return {
    // TODO: Get all ids
    paths: [{ params: { id: '3ifFhMIhFdduvI7MEflZxK' } }],
    // TODO: Properly set fallback
    fallback: true,
  };
};

export const getStaticProps = async () => {
  const { data } = await MusicalWorkAPI.getMusicalWork('3ifFhMIhFdduvI7MEflZxK');
  return { props: data };
};

export default TranscriptionPage;
