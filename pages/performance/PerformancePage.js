import { gql } from '@apollo/client';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Hero from '../../components/Hero';
import Image from '../../components/Image';
import Rule from '../../components/Rule';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography, { SectionHeader } from '../../components/Typography';
import config from '../../config.yaml';
import { gutters } from '../../styles/mixins';
import theme from '../../styles/theme';
import UpcomingEvent from './UpcomingEvent';
import { getNextEvent } from './utils';

const pageConfig = config.nav.performance;

export const performancePageQuery = gql`
  ${UpcomingEvent.fragments.event}
  query performancePage($now: DateTime!) {
    upcomingEvents: eventCollection(where: { startDate_gt: $now }) {
      items {
        sys {
          id
        }
        ...UpcomingEvent
      }
    }
  }
`;

const Section = styled.section({
  marginTop: theme.spacing.get(48),
  marginBottom: theme.spacing.get(32),
  [theme.mq.mobileToDesktop]: {
    marginBottom: theme.spacing.get(56),
  },
});

const PerformancePage = ({ upcomingEvents }) => {
  const nextEvent = getNextEvent(upcomingEvents?.items);

  return (
    <SiteLayout className="page-Performance-root" pathname={pageConfig.href}>
      <Title>Performance</Title>

      {nextEvent && (
        <Section
          id="upcoming-performances"
          data-testid="upcoming-performances"
          css={css`
            ${gutters.margin.mobile};
            ${theme.mq.mobileToDesktop} {
              ${gutters.margin.desktop};
            }
          `}>
          <SectionHeader variant="h3" as="h1" css={{ marginBottom: theme.spacing.get(24) }}>
            Upcoming <br css={{ [theme.mq.mobileToDesktop]: { display: 'none' } }} />
            Performances
          </SectionHeader>
          <UpcomingEvent className="page-Performances-event" event={nextEvent} />
        </Section>
      )}

      <Hero
        subtitle={
          <Typography variant="h3" as="div">
            Zakhrafa | Roulette
          </Typography>
        }
        video={{
          title: 'Zakhrafa زخرفة',
          id: 'n6VjsvT6o3s',
        }}>
        <Typography>
          Zakhrafa, composed by Samer Ali, was performed at Roulette Intermedium as part of the
          first anniversary celebration of Brooklyn Maqam Hang in 2019. The piece is in Nahawand
          Maqam and written in a new perspective of the Longa form. It features a newly-composed
          rhythm in 12/8 named&nbsp;Muzakhraf.
        </Typography>
      </Hero>

      <Section className={cx('page-Performance-groups', 'gutters')}>
        <h1 className="visually-hidden">Performing Groups</h1>

        <Rule
          className="page-Performance-rule"
          color={Rule.colors.accent}
          css={{
            display: 'none',
            [theme.mq.mobileToDesktop]: {
              display: 'block',
              marginLeft: 0,
              marginRight: 0,
            },
          }}
        />

        <article id="takht-al-nagham">
          <Typography variant="h3">Takht al-Nagham</Typography>

          <Image
            className="page-Performance-takht-al-nagham-logo"
            css={{
              margin: `${theme.spacing.get(8)} auto ${theme.spacing.get(24)}`,
              height: 'auto',
              width: theme.pxToRem(232),
              [theme.mq.mobileToDesktop]: {
                float: 'right',
                marginBottom: theme.spacing.get(72),
                marginLeft: theme.spacing.get(72),
                position: 'relative',
                top:
                  (theme.typography.h3.lineHeightDesktop +
                    theme.typography.h3.marginBottomDesktop) *
                  -1,
                width: theme.pxToRem(240),
              },
            }}
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
        </article>
      </Section>
      <style jsx>
        {`
          .page-Performances-upcoming :global(.page-Performances-event) {
            margin-top: ${theme.pxToRem(36)};
            margin-bottom: ${theme.pxToRem(48)};
          }

          article :global(.page-Performance-takht-al-nagham-logo) {
          }

          article > div:last-child {
            margin-top: ${theme.pxToRem(25)};
          }

          @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
            .page-Performances-upcoming-heading br {
              display: none;
            }

            .page-Performances-upcoming :global(.page-Performances-event) {
              margin-top: ${theme.pxToRem(72)};
              margin-bottom: ${theme.pxToRem(84)};
            }

            article :global(.page-Performance-takht-al-nagham-logo) {
            }
          }
        `}
      </style>
    </SiteLayout>
  );
};

PerformancePage.propTypes = {
  upcomingEvents: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default PerformancePage;
