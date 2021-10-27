import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography, { SectionHeader } from '../../../components/Typography';
import { MusicalWorkAPI } from '../../../musicalWorks';
import theme from '../../../styles/theme';
import { musicalWorkPropShape } from './propTypes';

const TranscriptionPage = ({ adobeKey, musicalWork }) => {
  const [isAdobeReady, setIsAdobeReady] = useState(false);
  const composer = `${musicalWork?.composer?.firstName} ${musicalWork?.composer?.lastName}`;

  useEffect(() => {
    document.addEventListener('adobe_dc_view_sdk.ready', () => {
      setIsAdobeReady(true);
    });
  });

  useEffect(() => {
    if (isAdobeReady && musicalWork?.transcription?.url) {
      var adobeDCView = new window.AdobeDC.View({
        clientId: adobeKey,
        divId: 'adobe-dc-view',
      });
      adobeDCView.previewFile(
        {
          content: {
            location: {
              url: musicalWork?.transcription?.url,
            },
          },
          // TODO: Parse from URL
          metaData: { fileName: 'KhaskiyyaRamez_SamaiBayati.pdf' },
        },
        { embedMode: 'SIZED_CONTAINER' },
      );
    }
  }, [isAdobeReady, musicalWork?.transcription?.url]);

  return (
    <SiteLayout
      className="page-Transcription-SiteLayout"
      pathname={`/education/transcriptions/${musicalWork?.id}`}>
      <script src="https://documentcloud.adobe.com/view-sdk/main.js" async defer></script>
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

        <div className="page-Transcription-pdf-wrapper">
          <div id="adobe-dc-view" />
        </div>
      </section>
      <style jsx>{`
        :global(.page-Transcription-transcription) {
          margin-top: ${theme.pxToRem(25)};
        }

        .page-Transcription-pdf-wrapper {
          height: 0;
          width: 100%;
          padding-bottom: ${theme.pxToPercent(11, 8.5)};
          position: relative;
        }

        .page-Transcription-pdf-wrapper #adobe-dc-view {
          position: absolute;
          height: 100%;
          width: 100%;
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
  adobeKey: PropTypes.string.isRequired,
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
  return { props: { ...data, adobeKey: process.env.ADOBE_KEY } };
};

export default TranscriptionPage;
