import { gql } from '@apollo/client';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Image from '../../../components/Image';
import SiteLayout from '../../../components/SiteLayout';
import Title from '../../../components/Title';
import Typography, { SectionHeader } from '../../../components/Typography';
import theme from '../../../styles/theme';
import { formatDate } from '../../../utils/date';
import { EM_DASH, parseRichText } from '../../../utils/text';
import ProgramWork from './ProgramWork';
import Biography from './Biography';

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
  ${ProgramWork.fragments.program}
  query eventPage($id: String!) {
    event(id: $id) {
      sys {
        id
      }
      name
      startDate
      image {
        ...Image
      }
      program: programCollection {
        items {
          ...ProgramWork
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
  program: PropTypes.shape({
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

const EventPage = ({ acknowledgements, image, program, name, performers, startDate }) => {
  const hasProgram = program?.items.length > 0;

  const composersById = new Map();
  if (hasProgram) {
    program.items
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
                  return (
                    <Typography
                      key={data.sys.id}
                      css={{ marginTop: theme.pxToRem(40) }}
                      size="lg"
                      textAlign="center">
                      <u>{data.headerText}</u>
                    </Typography>
                  );
                }

                if (__typename === 'MusicalWork') {
                  const id = data.sys.id;
                  return (
                    <ProgramWork
                      key={id}
                      composer={data.composer}
                      id={id}
                      transcription={data.transcription}
                      text={data.text}
                      title={data.title}
                    />
                  );
                }
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
