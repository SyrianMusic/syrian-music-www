import { gql } from '@apollo/client';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Image from '../../../components/Image';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography, { SectionHeader } from '../../../components/Typography';
import theme from '../../../styles/theme';
import { formatDate } from '../../../utils/date';
import logger from '../../../utils/logger';
import { EM_DASH, parseRichText } from '../../../utils/text';
import Biography from './Biography';
import ProgramWork from './ProgramWork';

const INTERMISSION = 'Intermission';

const Section = styled.section({
  marginTop: theme.pxToRem(30),
  marginBottom: theme.pxToRem(30),
  [theme.mq.mobileToDesktop]: {
    marginTop: theme.pxToRem(45),
    marginBottom: theme.pxToRem(45),
  },
});

const StyledSectionHeader = styled(SectionHeader)({
  marginBottom: theme.pxToRem(10),
  [theme.mq.mobileToDesktop]: {
    fontSize: theme.pxToRem(22.5),
    marginBottom: theme.pxToRem(30),
  },
});

export const eventPageQuery = gql`
  ${Image.fragments.asset}
  ${ProgramWork.fragments.english}
  ${ProgramWork.fragments.arabic}
  query eventPage($id: String!) {
    event(id: $id, locale: "en-US") {
      sys {
        id
      }
      name
      startDate
      image {
        ...Image
      }
      programEnglish: programCollection(locale: "en-US") {
        items {
          ...ProgramWorkEnglish
          ... on ProgramHeader {
            sys {
              id
            }
            headerText: text
          }
        }
      }
      programArabic: programCollection(locale: "ar-SY") {
        items {
          ...ProgramWorkArabic
          ... on ProgramHeader {
            sys {
              id
            }
            headerText: text
          }
        }
      }
      performers: performersCollection {
        items {
          sys {
            id
          }
          name
          roles
          image {
            ...Image
          }
          biography {
            json
          }
        }
      }
      acknowledgements {
        json
      }
    }
  }
`;

const propTypes = {
  image: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  programEnglish: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  programArabic: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  performers: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        roles: PropTypes.arrayOf(PropTypes.string),
        biography: PropTypes.shape({
          json: PropTypes.shape({}),
        }),
      }),
    ),
  }),
  acknowledgements: PropTypes.shape({
    json: PropTypes.shape({}),
  }),
};

const transformProgram = (english, arabic) => {
  let items = [];
  const itemsEnglish = english?.items || [];
  const itemsArabic = arabic?.items || [];

  const maxLength = Math.max(itemsEnglish.length, itemsArabic.length);

  if (maxLength > 0) {
    for (let i = 0; i < maxLength; i++) {
      const itemEnglish = itemsEnglish[i];
      const itemArabic = itemsArabic[i];

      if (itemEnglish?.__typename === 'ProgramHeader') {
        items = [
          ...items,
          {
            ...itemEnglish,
            headerText: {
              english: itemEnglish?.headerText,
              arabic: itemArabic?.headerText,
            },
          },
        ];
      } else if (itemEnglish?.__typename === 'MusicalWork') {
        items = [
          ...items,
          {
            ...itemEnglish,
            title: {
              english: itemEnglish.title,
              arabic:
                itemArabic?.title && itemArabic.title === itemEnglish.title
                  ? null
                  : itemArabic?.title,
            },
            composer: {
              english: itemEnglish.composer,
              arabic:
                itemArabic?.composer &&
                itemArabic.composer.firstName !== itemEnglish.composer?.firstName &&
                itemArabic.composer.lastName !== itemEnglish.composer?.lastName
                  ? itemArabic.composer
                  : null,
            },
          },
        ];
      }
    }
  }
  return { items };
};

const EventPage = ({
  acknowledgements,
  image,
  programEnglish,
  programArabic,
  name,
  performers,
  startDate,
}) => {
  const program = transformProgram(programEnglish, programArabic);
  const hasProgram = program?.items.length > 0;

  const composersById = new Map();
  if (hasProgram) {
    programEnglish.items
      .map(({ composer }) => composer)
      .filter(Boolean)
      .filter(({ biography }) => Boolean(biography))
      .forEach((composer) => {
        if (composer && !composersById.has(composer.sys.id)) {
          composersById.set(composer.sys.id, composer);
        }
      });
  }
  const hasComposers = composersById.size > 0;

  const hasPerformers = performers?.items.length > 0;

  const programStyles = {
    marginBottom: theme.pxToRem(20),
    p: {
      lineHeight: theme.pxToRem(20),
    },
    [theme.mq.mobileToDesktop]: {
      marginBottom: theme.pxToRem(30),
      p: {
        lineHeight: theme.pxToRem(30),
      },
    },
  };

  return (
    <SiteLayout>
      <Title>{name + ' | Event'}</Title>

      <div className="gutters">
        <Typography
          css={{
            marginBottom: theme.pxToRem(8),
            [theme.mq.mobileToDesktop]: {
              marginBottom: theme.pxToRem(10),
            },
          }}
          variant="h3"
          as="h1"
          textAlign="center">
          {name}
        </Typography>

        <Typography textAlign="center">{formatDate(new Date(startDate))}</Typography>

        <Image
          css={{
            width: '100%',
            height: 'auto',
            marginTop: theme.pxToRem(25),
            [theme.mq.mobileToDesktop]: {
              marginTop: theme.pxToRem(40),
            },
          }}
          url={image.url}
          width={image.width}
          height={image.height}
        />

        {hasProgram && (
          <Section>
            <StyledSectionHeader>Program</StyledSectionHeader>
            <ul>
              {program.items.map(({ __typename, ...data }) => {
                if (__typename === 'ProgramHeader') {
                  const englishText = data.headerText.english;
                  const isIntermission = englishText === INTERMISSION;

                  let arabicText;
                  if (data.headerText.arabic !== englishText) {
                    arabicText = data.headerText.arabic;
                  }

                  let css;
                  if (englishText === INTERMISSION) {
                    css = {
                      ':before': {
                        content: `"${EM_DASH} "`,
                      },
                      ':after': {
                        content: `" ${EM_DASH}"`,
                      },
                    };
                  }

                  return (
                    <Typography
                      key={data.sys.id}
                      css={[
                        programStyles,
                        { textDecoration: isIntermission ? 'none' : 'underline' },
                      ]}
                      textAlign="center">
                      <span css={css}>{englishText}</span>
                      {arabicText && (
                        <>
                          <br />
                          {arabicText}
                        </>
                      )}
                    </Typography>
                  );
                }

                if (__typename === 'MusicalWork') {
                  const id = data.sys.id;
                  return (
                    <ProgramWork
                      key={id}
                      css={programStyles}
                      composer={data.composer}
                      id={id}
                      transcription={data.transcription}
                      text={data.text}
                      title={data.title}
                    />
                  );
                }

                logger.error(`Unsupported item in program: __typename=<${__typename}>`);
              })}
            </ul>
          </Section>
        )}

        {hasComposers && (
          <Section>
            <StyledSectionHeader>Composers</StyledSectionHeader>
            {Array.from(composersById.values()).map((composer = {}) => {
              const { firstName, lastName, birthDate, birthPlace, deathDate, image, biography } =
                composer;

              let name;
              if (firstName && lastName) {
                name = `${firstName} ${lastName}`;
              }

              let subtitle;

              if (birthDate) {
                subtitle = new Date(birthDate).getUTCFullYear();
                subtitle += `${EM_DASH}${new Date(deathDate).getUTCFullYear() || 'Present'}`;
              }

              if (subtitle && birthPlace) {
                subtitle += `, ${birthPlace}`;
              } else if (birthPlace) {
                subtitle = birthPlace;
              }

              return (
                <Biography
                  key={composer.sys.id}
                  name={name}
                  subtitle={subtitle}
                  image={image}
                  biography={biography?.json}
                />
              );
            })}
          </Section>
        )}

        {hasPerformers && (
          <Section>
            <StyledSectionHeader>Performers</StyledSectionHeader>
            {performers.items.map((performer = {}) => {
              let subtitle;

              if (Array.isArray(performer?.roles) && performer.roles.length > 0) {
                subtitle = performer.roles.join(', ');
              }

              return (
                <Biography
                  key={performer.sys.id}
                  name={performer.name}
                  subtitle={subtitle}
                  image={performer?.image}
                  biography={performer.biography?.json}
                />
              );
            })}
          </Section>
        )}

        {acknowledgements && (
          <Section>
            <StyledSectionHeader>Special Thanks</StyledSectionHeader>
            {parseRichText(acknowledgements.json)}
          </Section>
        )}
      </div>
    </SiteLayout>
  );
};

EventPage.propTypes = propTypes;

export default EventPage;
