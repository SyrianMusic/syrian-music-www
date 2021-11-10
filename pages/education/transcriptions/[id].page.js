import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import cx from 'classnames';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography, { SectionHeader } from '../../../components/Typography';
import { MusicalWorkAPI } from '../../../musicalWorks';
import { musicalWorkPropShape } from './propTypes';

const PDF_VIEWER_ID = 'pdf-viewer';

const PdfWrapper = styled.div`
  height: 0;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.pxToPercent(11, 8.5)};
  position: relative;

  #${PDF_VIEWER_ID} {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

const TranscriptionSection = styled.section`
  margin-top: ${({ theme }) => theme.pxToRem(25)};

  ${({ theme }) => theme.mq.md} {
    margin-top: ${({ theme }) => theme.pxToRem(42)};
  }
`;

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
        divId: PDF_VIEWER_ID,
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

      <Typography variant="h3" as="h1" textAlign="center">
        {musicalWork?.title}
      </Typography>

      <Typography size="lg" textAlign="center">
        {composer}
      </Typography>

      <TranscriptionSection className={cx('gutters')}>
        <SectionHeader className="page-Transcription-transcription-header" as="h1">
          The Transcription
        </SectionHeader>

        <PdfWrapper>
          <div id={PDF_VIEWER_ID} />
        </PdfWrapper>
      </TranscriptionSection>
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
