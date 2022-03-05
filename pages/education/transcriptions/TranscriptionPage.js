import { gql } from '@apollo/client';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import Button from '../../../components/Button';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography, { SectionHeader } from '../../../components/Typography';
import theme from '../../../styles/theme';
import { DEFAULT_COMPOSER } from '../../../utils/text';

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

const transformTranslation = (arabicText, translatedText) => {
  let hasMultipleTexts = false;
  let hasTranslation = false;
  let stanzas = [];

  const arabicParagraphs = extractContext(arabicText);
  const translatedParagraphs = extractContext(translatedText);

  const lengthArabic = arabicParagraphs.length;
  const lengthTranslated = translatedParagraphs.length;

  if (lengthArabic && lengthTranslated) {
    hasMultipleTexts = true;
  } else if (lengthTranslated) {
    hasTranslation = true;
  }

  const maxLength = Math.max(lengthArabic || 0, lengthTranslated || 0);

  if (maxLength) {
    for (let i = 0; i < maxLength; i++) {
      let lines = [];
      const arabicLines = arabicParagraphs[i];
      const translatedLines = translatedParagraphs[i];

      const maxLineLength = Math.max(arabicLines?.length || 0, translatedLines?.length || 0);

      if (maxLineLength) {
        for (let j = 0; j < maxLineLength; j++) {
          let arabic;
          if (Array.isArray(arabicLines)) {
            arabic = arabicLines[j];
          }

          let translated;
          if (Array.isArray(translatedLines)) {
            translated = translatedLines[j];
          }

          lines = [...lines, { arabic, translated }];
        }
      }

      stanzas = [...stanzas, lines];
    }
  }

  return { hasMultipleTexts, hasTranslation, stanzas };
};

const TranscriptionPage = ({ adobeKey, musicalWork, arabic }) => {
  const [isAdobeReady, setIsAdobeReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const composer = musicalWork?.composer
    ? `${musicalWork?.composer?.firstName} ${musicalWork?.composer?.lastName}`
    : DEFAULT_COMPOSER;
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

  let paragraphCss;
  let translation;
  let translationSectionTitle = 'Translation';

  if (arabic?.text || musicalWork?.text) {
    const { hasMultipleTexts, hasTranslation, stanzas } = transformTranslation(
      arabic?.text,
      musicalWork?.text,
    );

    if (hasMultipleTexts) {
      paragraphCss = {
        '&:not(:last-child)': {
          marginBottom: '2em',
        },
        [theme.mq.mobileToDesktop]: {
          '&:not(:last-child)': {
            marginBottom: '2em',
          },
        },
      };
    } else if (!hasTranslation) {
      translationSectionTitle = 'Text';
    }

    translation = stanzas.map((lines) => {
      const firstLine = lines[0];
      const key = `${firstLine.translated}${firstLine.arabic}`;

      return (
        <Typography key={key} css={paragraphCss} textAlign="center">
          {lines.map((line) => {
            const lineKey = `line-${line.translated}${line.arabic}`;
            return (
              <span
                css={{
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  marginBottom: hasMultipleTexts ? '1em' : 0,
                }}
                key={lineKey}>
                {[line.arabic, line.translated].filter(Boolean).map((content) => {
                  return (
                    <span key={content} css={{ display: 'block' }}>
                      {content}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </Typography>
      );
    });
  }

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
        {composer}
      </Typography>

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

      {translation && (
        <Section id="transcription" className="gutters">
          <SectionHeader as="h1">{translationSectionTitle}</SectionHeader>
          {translation}
        </Section>
      )}
    </SiteLayout>
  );
};

export const transcriptionPageQuery = gql`
  query transcriptionPage($id: String!) {
    musicalWork(id: $id, locale: "en-US") {
      sys {
        id
      }
      composer {
        firstName
        lastName
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

TranscriptionPage.propTypes = {
  adobeKey: PropTypes.string.isRequired,
  musicalWork: PropTypes.shape({
    sys: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    composer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
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

export default TranscriptionPage;
