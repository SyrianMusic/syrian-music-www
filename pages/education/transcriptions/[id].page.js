import PropTypes from 'prop-types';
import { MusicalWorkAPI } from '../../../musicalWorks';
import { musicalWorkPropShape } from './propTypes';

const TranscriptionPage = ({ musicalWork }) => {
  return <div>{JSON.stringify({ musicalWork })}</div>;
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
