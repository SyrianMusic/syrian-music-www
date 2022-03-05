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

const EventPage = ({ acknowledgements, composers, image, name, performers, startDate }) => {
  const hasProgram = false;
  const hasComposers = composers?.items.length > 0;
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
          </Section>
        )}

        {hasComposers && (
          <Section>
            <StyledSectionHeader>Composers</StyledSectionHeader>
            {composers.items.map((composer = {}) => {
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

        <Section>
          <StyledSectionHeader>Special Thanks</StyledSectionHeader>
          {parseRichText(acknowledgements?.json)}
        </Section>
      </div>
    </SiteLayout>
  );
};

export const eventPageQuery = gql`
  ${Image.fragments.asset}
  query eventPage($id: String!) {
    event(id: $id) {
      name
      startDate
      image {
        ...Image
      }
      composers: composersCollection {
        items {
          sys {
            id
          }
          firstName
          lastName
          birthDate
          birthPlace
          deathDate
          image {
            ...Image
          }
          biography {
            json
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

EventPage.propTypes = {
  image: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }),
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  composers: PropTypes.shape({
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

export default EventPage;
