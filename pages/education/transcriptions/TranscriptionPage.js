import { gql } from '@apollo/client';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import Button from '../../../components/Button';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography, { SectionHeader } from '../../../components/Typography';
import theme from '../../../styles/theme';
import { DEFAULT_COMPOSER_ENGLISH, parseRichText } from '../../../utils/text';

const PDF_VIEWER_ID = 'pdf-viewer';

const Section = styled.section`
  margin-top: ${theme.pxToRem(25)};
`;

const PdfWrapper = styled.div`
  box-shadow: 0px 0px 40px -20px ${theme.color.withOpacity(theme.color.black, 0.75)};
  height: 0;
  width: 100%;
  margin-top: ${theme.pxToRem(20)};
  margin-bottom: ${theme.pxToRem(26)};
  padding-bottom: ${theme.pxToPercent(11, 8.5)};
  position: relative;

  ${theme.mq.md} {
    margin-top: ${theme.pxToRem(30)};
    margin-bottom: ${theme.pxToRem(90)};
  }

  #${PDF_VIEWER_ID} {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: ${theme.zIndex.transcriptions.pdfViewer};
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: ${theme.zIndex.transcriptions.errorMessage};
`;

// TODO: Remove important flags when button is converted to emotion
const PdfReloadButton = styled(Button)`
  font-size: inherit !important;
  text-decoration-color: inherit !important;
`;

const extractContext = (text) => {
  const paragraphs = text?.json?.content;
  if (Array.isArray(text?.json?.content)) {
    return paragraphs
      .map(({ content }) => content.map(({ value }) => value).join('\n'))
      .map((text) => text.split('\n'))
      .filter(Boolean);
  }
  return [];
};

const transformText = (text) => {
  const paragraphs = extractContext(text);
  return paragraphs.map((lines) => {
    return (
      <Typography key={lines[0]} textAlign="center">
        {lines.map((line) => {
          return (
            <span
              key={line}
              css={{
                display: 'block',
              }}>
              {line}
            </span>
          );
        })}
      </Typography>
    );
  });
};

export const transcriptionPageQuery = gql`
  query transcriptionPage($id: String!) {
    musicalWork(id: $id, locale: "en-US") {
      sys {
        id
      }
      analysis {
        json
      }
      composer {
        firstName
        lastName
      }
      description {
        json
      }
      iqa {
        name
      }
      maqam {
        name
      }
      text {
        json
      }
      title
      transcription {
        url
      }
    }
    arabic: musicalWork(id: $id, locale: "ar-SY") {
      text {
        json
      }
    }
  }
`;

const propTypes = {
  adobeKey: PropTypes.string.isRequired,
  musicalWork: PropTypes.shape({
    sys: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    analysis: PropTypes.shape({
      json: PropTypes.object,
    }),
    composer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    description: PropTypes.shape({
      json: PropTypes.object,
    }),
    iqa: PropTypes.shape({
      name: PropTypes.string,
    }),
    maqam: PropTypes.shape({
      name: PropTypes.string,
    }),
    text: PropTypes.shape({
      json: PropTypes.object,
    }),
    title: PropTypes.string,
    transcription: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  arabic: PropTypes.shape({
    text: PropTypes.shape({
      json: PropTypes.object,
    }),
  }),
};

const TranscriptionPage = ({ adobeKey, musicalWork, arabic }) => {
  const [isAdobeReady, setIsAdobeReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const composer = musicalWork?.composer || DEFAULT_COMPOSER_ENGLISH;
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
    <SiteLayout
      className="page-Transcriptions-root"
      pathname={`/education/transcriptions/${musicalWork?.sys?.id}`}>
      <script src="https://documentcloud.adobe.com/view-sdk/main.js" async defer></script>

      <Title>{title}</Title>

      <Typography
        css={{
          marginBottom: '0.25em',
          [theme.mq.mobileToDesktop]: {
            marginBottom: '0.25em',
          },
        }}
        variant="h3"
        as="h1"
        textAlign="center">
        {musicalWork?.title}
      </Typography>

      <Typography
        css={{
          marginBottom: '1.5em',
          [theme.mq.mobileToDesktop]: {
            marginBottom: '1.5em',
          },
        }}
        size="lg"
        textAlign="center">
        {composer.firstName} {composer.lastName}
      </Typography>

      {musicalWork.description && (
        <div css={{ marginBottom: theme.pxToRem(50) }}>
          {parseRichText(musicalWork.description.json)}
        </div>
      )}

      {musicalWork?.maqam && (
        <section id="maqam" className="gutters">
          <SectionHeader as="h1">Maqam</SectionHeader>

          <Typography>{musicalWork.maqam.name}</Typography>
        </section>
      )}

      {musicalWork?.iqa && (
        <Section id="iqa" className="gutters">
          <SectionHeader as="h1">Iqa (Rhythm)</SectionHeader>

          <Typography>{musicalWork.iqa.name}</Typography>
        </Section>
      )}

      {musicalWork?.transcription && (
        <Section id="transcription" className="gutters">
          <SectionHeader as="h1">Transcription</SectionHeader>

          <PdfWrapper>
            {hasError && (
              <ErrorMessage>
                <Typography textAlign="center">
                  Sorry, we are having trouble loading this transcription.{' '}
                  <PdfReloadButton onClick={reloadPdf}>Try again.</PdfReloadButton>
                </Typography>
              </ErrorMessage>
            )}
            <div id={PDF_VIEWER_ID} />
          </PdfWrapper>
        </Section>
      )}

      {arabic.text && (
        <Section id="transcription" className="gutters">
          <SectionHeader as="h1">Text</SectionHeader>
          {transformText(arabic.text)}
        </Section>
      )}

      {musicalWork.text && (
        <Section id="transcription" className="gutters">
          <SectionHeader as="h1">Translation</SectionHeader>
          {transformText(musicalWork.text)}
        </Section>
      )}

      {musicalWork.analysis && (
        <Section id="analysis" className="gutters">
          <SectionHeader as="h1">Analysis</SectionHeader>
          {parseRichText(musicalWork.analysis.json)}
        </Section>
      )}
    </SiteLayout>
  );
};

TranscriptionPage.propTypes = propTypes;

export default TranscriptionPage;
