import React from 'react';
import Person from '../../components/Person';
import Rule from '../../components/Rule';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import config from '../../config.yaml';
import data from '../../data';
import theme from '../../styles/theme';
import { portableTextMap } from '../../utils/text';
import { typography } from '../../styles/mixins';

const pageData = data.pages.about;

const AboutPage = () => (
  <SiteLayout pathname={config.nav.about.href}>
    <Title>About</Title>
    <Typography className="page-About-title" variant="h1" textAlign="center">
      About
    </Typography>

    <section className="gutters" id="mission">
      <Typography variant="h3" as="h1">
        Mission
      </Typography>

      {pageData.mission.map(({ _key, children } = {}) => {
        return (
          <Typography key={_key} className="page-About-mission">
            {children.map(portableTextMap)}
          </Typography>
        );
      })}
    </section>

    <section className="gutters" id="our-story">
      <Typography variant="h3" as="h1">
        Our Story
      </Typography>
      {pageData.story.map(({ _key, children } = {}) => {
        return (
          <Typography key={_key} className="page-About-story">
            {children.map(portableTextMap)}
          </Typography>
        );
      })}
    </section>

    <section className="page-About-who-we-are" id="who-we-are">
      <Typography className="gutters" variant="h3" as="h1">
        Who We Are
      </Typography>
      {pageData.people.map((id, i) => {
        return (
          <React.Fragment key={id}>
            <Person className="page-About-person" {...data.people[id]} />
            {i !== pageData.people.length - 1 && <Rule className="page-About-rule" />}
          </React.Fragment>
        );
      })}
    </section>
    <style jsx>
      {`
        section {
          margin-top: ${theme.pxToRem(26)};
        }

        .page-About-who-we-are {
          margin-bottom: ${theme.pxToRem(23)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          section {
            margin-top: ${theme.pxToRem(102)};
          }

          section :global(.page-About-person:not(:last-child)) {
            margin-bottom: ${theme.pxToRem(48)};
          }

          section :global(.page-About-rule) {
            display: none;
          }

          section :global(.page-About-mission),
          section :global(.page-About-story) {
            ${typography.lg.desktop};
          }

          .page-About-who-we-are {
            margin-bottom: ${theme.pxToRem(96)};
          }
        }
      `}
    </style>
  </SiteLayout>
);

export default AboutPage;
