import { gql } from '@apollo/client';
import styled from '@emotion/styled';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from '../../components/Image';
import Rule from '../../components/Rule';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography, { SectionHeader } from '../../components/Typography';
import Video from '../../components/Video';
import config from '../../config.yaml';
import { gutterMarginStyles } from '../../styles/mixins';
import theme from '../../styles/theme';
import PastEvent, { eventPropShape as pastEventPropShape } from './PastEvent';
import PastEventsList from './PastEventsList';
import UpcomingEvent, { eventPropShape as upcomingEventPropShape } from './UpcomingEvent';
import UpcomingEventsList from './UpcomingEventsList';
import { sortPastEvents, sortUpcomingEvents } from './utils';
import { css } from '@emotion/react';

const pageConfig = config.nav.performance;

const spacingStyles = css({
  marginBottom: theme.spacing.get(32),
  [theme.mq.mobileToDesktop]: {
    marginBottom: theme.spacing.get(56),
  },
});

const Section = styled.section([gutterMarginStyles, spacingStyles]);

const Ensemble = styled.article([spacingStyles]);

const ensembleRuleStyles = css({
  display: 'none',

  [theme.mq.mobileToDesktop]: {
    display: 'block',
    marginTop: theme.spacing.get(56),
    marginLeft: 0,
    marginRight: 0,
  },
});

const ensembleImageStyles = css({
  margin: `${theme.spacing.get(8)} auto ${theme.spacing.get(24)}`,
  height: 'auto',
  width: theme.pxToRem(232),
  [theme.mq.mobileToDesktop]: {
    float: 'right',
    marginBottom: theme.spacing.get(72),
    marginLeft: theme.spacing.get(72),
    position: 'relative',
    top: (theme.typography.h3.lineHeightDesktop + theme.typography.h3.marginBottomDesktop) * -1,
    width: theme.pxToRem(240),
  },
});

export const performancePageQuery = gql`
  ${UpcomingEvent.fragments.event}
  ${PastEvent.fragments.event}
  query performancePage($now: DateTime!) {
    upcomingEvents: eventCollection(
      where: { OR: [{ startDate_gt: $now }, { endDate_gt: $now }] }
      order: [endDate_ASC, startDate_ASC]
      limit: 3
    ) {
      items {
        sys {
          id
        }
        ...UpcomingEvent
      }
    }
    pastEvents: eventCollection(
      where: {
        OR: [
          { AND: [{ endDate_exists: false }, { startDate_lt: $now }] }
          { AND: [{ endDate_exists: true }, { endDate_lt: $now }] }
        ]
      }
      order: [startDate_DESC]
    ) {
      items {
        sys {
          id
        }
        ...PastEvent
      }
    }
  }
`;

const propTypes = {
  upcomingEvents: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(upcomingEventPropShape)).isRequired,
  }).isRequired,
  pastEvents: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(pastEventPropShape)).isRequired,
  }).isRequired,
};

const PerformancePage = (props) => {
  const upcomingEvents = sortUpcomingEvents(props.upcomingEvents?.items);
  const pastEvents = sortPastEvents(props.pastEvents?.items);

  const hasUpcomingEvents = upcomingEvents.length > 0;
  const hasPastEvents = pastEvents?.length > 0;

  return (
    <SiteLayout pathname={pageConfig.href}>
      <Title>Performance</Title>

      {hasUpcomingEvents && (
        <Section id="upcoming-events">
          <SectionHeader
            as="h1"
            css={{
              marginBottom: theme.spacing.get(24),
              [theme.mq.mobileToDesktop]: { marginBottom: 0 },
            }}>
            Upcoming Events
          </SectionHeader>
          <UpcomingEventsList upcomingEvents={upcomingEvents} />
        </Section>
      )}

      {hasPastEvents && (
        <Section id="previous-events">
          <SectionHeader
            as="h1"
            css={{
              marginBottom: theme.spacing.get(24),
              [theme.mq.mobileToDesktop]: { marginBottom: 0 },
            }}>
            Previous Events
          </SectionHeader>
          <PastEventsList pastEvents={pastEvents} />
        </Section>
      )}

      {(hasUpcomingEvents || hasPastEvents) && (
        <Rule color={Rule.colors.accent} css={gutterMarginStyles} />
      )}

      <Section>
        <Video
          id="CAV5mtbuuC8"
          title="Muwashah Maqam Huzam Takht al-Nagham Lubana AlQuntar موشح غزالٌ, مقام هزام, تخت النغم, لبانة القنطار"
        />
        <Typography css={{ marginTop: theme.spacing.get(32) }} variant="h3" as="div">
          Muwashah in Huzam maqam | Roulette
        </Typography>
        <Typography css={{ marginTop: theme.spacing.get(16) }}>
          Muwashah Ghazalon Zarani, composed by Khalil Haj Hussein from Latakia, Syria. The piece is
          in Huzam maqam and Murabba’ rhythm (13/4) and was performed by Takht al-Nagham featuring
          Lubana al-Quntar in March 2022 as part of a concert co-produced by Robert Browning
          Associates and Roulette Intermedium.
        </Typography>
      </Section>

      <Section>
        <h1 className="visually-hidden">Performing Groups</h1>

        <Rule color={Rule.colors.accent} css={ensembleRuleStyles} />

        <Ensemble id="takht-al-nagham">
          <Typography variant="h3">Takht al-Nagham</Typography>

          <Image
            css={ensembleImageStyles}
            src="/images/logos/takht-al-nagham-logo.svg"
            width={197.5}
            height={214.5}
          />

          <Typography>
            Takht al-nagham is SMPI&apos;s performing ensemble. Based in New York City, the group
            features a traditional Takht (Arab chamber music group). &ldquo;Nagham&rdquo; is the
            Arabic word for melody; it is commonly used as a synonym for the Arab Maqam system. The
            Takht is committed to performing the classical and folk Syrian repertoire with
            traditional acoustic instruments. In order to familiarize audiences in the U.S. with the
            original structure of the musical traditions, the Takht presents its sets (called
            Waslah) in the manner that they were originally performed. The Takht includes skilled
            Syrian and non-Syrian musicians who perform without reading from sheet music, rely
            heavily on improvisations, and are deeply immersed in the Syrian musical tradition.
          </Typography>
          <Typography>
            As a part of some performances Takht al-Nagham includes the Samah Dance. This dance
            (Raqs al-Samah in Arabic) is a centuries old Syrian dance that accompanies the
            Muwashahat musical form. It is a group dance designed as an interaction between males
            and females in an elegant and eloquent expressive milieu. It has a spiritual character
            incorporating both foot and hand movements which requires dancers to be very familiar
            with the complex rhythmic and melodic content of every Muwashah piece. The development
            of Samah mirrors that of classical Syrian music.
          </Typography>
          <Typography>
            The Takht al-Nagham logo was created by celebrated Syrian artist Mouneer al-Shaarani.
          </Typography>
        </Ensemble>

        <Rule color={Rule.colors.accent} css={ensembleRuleStyles} />

        <Ensemble id="youth-ensemble">
          <Typography variant="h3">Youth Ensemble</Typography>

          <Image
            css={ensembleImageStyles}
            src="http://via.placeholder.com/198x215&text=%20"
            width={198}
            height={215}
          />

          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus
            vitae odio condimentum porta. Sed bibendum odio eu lobortis ultrices. Nunc in tellus
            sapien. Vivamus at eros vitae lacus vulputate imperdiet. Morbi malesuada lorem et elit
            blandit luctus. Quisque congue ex id ipsum efficitur hendrerit. Nam convallis quis magna
            non laoreet. Nunc bibendum cursus urna et tristique. Aliquam volutpat arcu at justo
            commodo, eget ornare lectus fringilla. Suspendisse ac malesuada diam. Nulla orci libero,
            suscipit at ipsum nec, vulputate malesuada libero. Phasellus auctor ultricies ligula sit
            amet dignissim. Mauris sit amet hendrerit sapien. Curabitur purus nunc, eleifend et
            sollicitudin sed, euismod id tortor. Curabitur condimentum pretium orci, nec scelerisque
            magna lobortis ut. Ut pretium.
          </Typography>
          <Typography>
            Aenean eu maximus nibh. Fusce egestas diam velit, semper vulputate velit tincidunt
            vitae. Etiam dictum pellentesque urna, et blandit ante hendrerit eu. Integer eget
            euismod ipsum. Nulla eleifend, dui et rhoncus cursus, ante mauris posuere lorem, et
            volutpat erat velit ut eros. Donec sit amet quam eu libero mattis dignissim id id felis.
            Vivamus lacus velit, sollicitudin eget nisl eget, interdum dapibus mauris. Sed euismod,
            odio in porttitor semper, nulla mauris lobortis sem, vel volutpat ipsum arcu nec lectus.
            Ut faucibus, tellus eget cursus sodales, neque odio tincidunt risus.
          </Typography>
        </Ensemble>
      </Section>
    </SiteLayout>
  );
};

PerformancePage.propTypes = propTypes;

export default PerformancePage;
