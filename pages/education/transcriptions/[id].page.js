import PropTypes from 'prop-types';
import cx from 'classnames';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography, { SectionHeader } from '../../../components/Typography';
import { MusicalWorkAPI } from '../../../musicalWorks';
import theme from '../../../styles/theme';
import { musicalWorkPropShape } from './propTypes';

const TranscriptionPage = ({ musicalWork }) => {
  const composer = `${musicalWork?.composer?.firstName} ${musicalWork?.composer?.lastName}`;

  return (
    <SiteLayout
      className="page-Transcription-SiteLayout"
      pathname={`/education/transcriptions/${musicalWork?.id}`}>
      <Title>{`${musicalWork?.title} - ${composer}`}</Title>
      <Typography className="page-Transcription-title" variant="h3" as="h1" textAlign="center">
        {musicalWork?.title}
      </Typography>
      <Typography className="page-Transcription-composer" size="lg" textAlign="center">
        {composer}
      </Typography>
      <section className={cx('page-Transcription-transcription', 'gutters')}>
        <SectionHeader className="page-Transcription-transcription-header" as="h1">
          The Transcription
        </SectionHeader>

        <embed
          title={`Transcription of ${musicalWork?.title} by ${composer}`}
          src={`${musicalWork?.transcription?.url}#page=2`}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </section>
      <style jsx>{`
        :global(.page-Transcription-transcription) {
          margin-top: ${theme.pxToRem(25)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          :global(.page-Transcription-transcription) {
            margin-top: ${theme.pxToRem(42)};
          }
        }
      `}</style>
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
  // TODO: Get real id
  const { data } = await MusicalWorkAPI.getMusicalWork('3ifFhMIhFdduvI7MEflZxK');
  return { props: data };
};

export default TranscriptionPage;
