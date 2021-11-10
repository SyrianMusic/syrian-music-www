import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { gql } from '@apollo/client';
import { BaseAPI } from '../../../api';
import Button from '../../../components/Button';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography, { SectionHeader } from '../../../components/Typography';
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

const PdfReloadButton = styled(Button)`
  font-size: inherit !important;
`;

const TranscriptionSection = styled.section`
  margin-top: ${({ theme }) => theme.pxToRem(25)};

  ${({ theme }) => theme.mq.md} {
    margin-top: ${({ theme }) => theme.pxToRem(42)};
  }
`;

const TranscriptionPage = ({ adobeKey, musicalWork }) => {
  const [isAdobeReady, setIsAdobeReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const composer = `${musicalWork?.composer?.firstName} ${musicalWork?.composer?.lastName}`;
  const title = `${musicalWork?.title} - ${composer}`;
  const transcriptionUrl = musicalWork?.transcription?.url;

  useEffect(() => {
    // TODO: Maybe move to context
    document.addEventListener('adobe_dc_view_sdk.ready', () => {
      setIsAdobeReady(true);
    });
  });

  const loadPdf = useCallback(() => {
    try {
      const adobeDCView = new window.AdobeDC.View({
        clientId: adobeKey,
        divId: PDF_VIEWER_ID,
      });

      adobeDCView.previewFile(
        {
          content: {
            location: { url: transcriptionUrl },
          },
          metaData: { fileName: `${title}.pdf` },
        },
        { embedMode: 'SIZED_CONTAINER' },
      );
    } catch (e) {
      // TODO: Send to error logger
      console.error(e);
      setHasError(true);
    }
  }, [setHasError]);

  const reloadPdf = useCallback(() => {
    setHasError(false);
  }, [setHasError]);

  useEffect(() => {
    if (isAdobeReady && transcriptionUrl && !hasError) {
      loadPdf();
    }
  }, [hasError, isAdobeReady, transcriptionUrl]);

  return (
    <SiteLayout pathname={`/education/transcriptions/${musicalWork?.id}`}>
      <script src="https://documentcloud.adobe.com/view-sdk/main.js" async defer></script>

      <Title>{title}</Title>

      <Typography variant="h3" as="h1" textAlign="center">
        {musicalWork?.title}
      </Typography>

      <Typography size="lg" textAlign="center">
        {composer}
      </Typography>

      {musicalWork?.maqam && (
        <section id="maqam" className="gutters">
          <SectionHeader as="h1">Maqam</SectionHeader>

          <Typography>{musicalWork.maqam.name}</Typography>
        </section>
      )}

      <TranscriptionSection id="transcription" className="gutters">
        <SectionHeader as="h1">The Transcription</SectionHeader>

        {hasError && (
          <div>
            Sorry, we are having trouble loading this transcription.{' '}
            <PdfReloadButton onClick={reloadPdf}>Try again.</PdfReloadButton>
          </div>
        )}
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

export const ALL_TRANSCRIPTIONS_QUERY = gql`
  query allTranscriptions {
    musicalWorkCollection {
      items {
        sys {
          id
        }
      }
    }
  }
`;

export const getStaticPaths = async () => {
  const { data } = await BaseAPI.query(ALL_TRANSCRIPTIONS_QUERY);

  return {
    paths: data.musicalWorkCollection.items.map((item) => ({ params: { id: item.sys.id } })),
    fallback: false,
  };
};

export const TRANSCRIPTION_DETAIL_PAGE_QUERY = gql`
  query transcriptionDetailPage($id: String!) {
    musicalWork(id: $id) {
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
      transcription {
        url
      }
    }
  }
`;

export const getStaticProps = async (context) => {
  const { data } = await BaseAPI.query(TRANSCRIPTION_DETAIL_PAGE_QUERY, {
    variables: { id: context.params.id },
  });
  return { props: { adobeKey: process.env.ADOBE_KEY, musicalWork: data.musicalWork } };
};

export default TranscriptionPage;
