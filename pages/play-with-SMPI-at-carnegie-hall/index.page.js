import styled from '@emotion/styled';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SiteLayout from '../../components/SiteLayout';
import Typography, { SectionHeader } from '../../components/Typography';
import Video from '../../components/Video';
import { gutterMarginStyles } from '../../styles/mixins';
import theme from '../../styles/theme';

const Section = styled.section([
  gutterMarginStyles,
  {
    marginTop: theme.spacing.get(24),

    h3: {
      marginBottom: theme.spacing.get(16),
    },
  },
]);

const Body = styled(Typography)({
  fontSize: theme.pxToRem(15),
  lineHeight: theme.pxToRem(20),

  [theme.mq.mobileToDesktop]: {
    fontSize: theme.pxToRem(20),
    lineHeight: theme.pxToRem(25),
  },
});

const Footnote = styled(Typography)({
  fontSize: theme.pxToRem(10),
  lineHeight: theme.pxToRem(12),

  ':not(:last-child)': {
    marginBottom: 0,
  },

  [theme.mq.mobileToDesktop]: {
    fontSize: theme.pxToRem(15),
    lineHeight: theme.pxToRem(20),
  },
});

const Table = styled.table({
  fontSize: theme.pxToRem(12),
  lineHeight: theme.pxToRem(20),
  width: '100%',

  [theme.mq.mobileToDesktop]: {
    fontSize: theme.pxToRem(18),
    lineHeight: theme.pxToRem(20),
  },

  tr: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  'tr:nth-child(odd)': {
    backgroundColor: '#fff5ea',
  },

  td: {
    padding: theme.spacing.get(24),
  },

  'td:nth-child(1)': {
    color: theme.color.accentTan,
    textAlign: 'center',
  },

  'td:nth-child(2)': {
    flex: 1,
    paddingLeft: 0,
  },
});

const TimelineEvent = ({ date, children }) => (
  <tr>
    <td>{date}</td>
    <td>{children}</td>
  </tr>
);

TimelineEvent.propTypes = { date: PropTypes.string, children: PropTypes.node };

TimelineEvent.defaultProps = { date: 'XX/XX/XX', children: undefined };

const APPLICATION_FEE = '$20';

const CarnegieLandingPage = () => {
  return (
    <SiteLayout>
      <Typography variant="h1" textAlign="center">
        Play with SMPI at Carnegie Hall
      </Typography>

      <Section>
        <SectionHeader css={{ display: 'none' }}>Table of Contents</SectionHeader>

        <Body as="ul" textAlign="center">
          <li>
            <a href="#overview">Overview</a>
          </li>

          <li>
            <a href="#how-to-apply">How To Apply</a>
          </li>

          <li>
            <a href="#audition-resources">Audition Resources</a>
          </li>

          <li>
            <a href="#timeline">Timeline</a>
          </li>
        </Body>
      </Section>

      <div
        css={{
          marginTop: theme.spacing.get(24),
          marginBottom: theme.spacing.get(32),

          [theme.mq.mobileToDesktop]: gutterMarginStyles,
        }}>
        <picture
          css={{
            display: 'block',
            width: theme.pxToRem(375),
            height: theme.pxToRem(192),

            [theme.mq.mobileToDesktop]: {
              width: '100%',
              height: 'auto',
            },
          }}>
          <source
            media={`(min-width: ${theme.breakpoint.mobileToDesktop}px)`}
            srcSet="/images/events/takht-al-nagham-roulette-700x394.png 1x, /images/events/takht-al-nagham-roulette-700x394@2x.png 2x, /images/events/takht-al-nagham-roulette-700x394@3x.png 3x"
          />
          <source
            media={`(max-width: ${theme.breakpoint.mobileToDesktop - 1}px)`}
            srcSet="/images/events/takht-al-nagham-roulette-375x192.png 1x, /images/events/takht-al-nagham-roulette-375x192@2x.png 2x, /images/events/takht-al-nagham-roulette-375x192@3x.png 3x"
          />
          <img
            css={{ width: '100%', height: 'auto' }}
            src="/images/events/takht-al-nagham-roulette-375x192.png"
            alt=""
            height="192"
            width="375"
          />
        </picture>
      </div>

      <Section id="overview">
        <SectionHeader>Overview</SectionHeader>

        <Body>
          Education is an important part of SMPI&rsquo;s mission. Because of this, we will be
          offering a unique opportunity as part of our Carnegie Hall performance on May 19, 2023.
          For one piece on our program, we will open the stage to advanced amateurs and enthusiasts
          to join Takht al-Nagham. Participants will be required to audition on the piece in
          February 2022 (date TBD) and if accepted, will participate in a number of workshops and
          special rehearsals in addition to the dress rehearsal<sup>*</sup> at Carnegie Hall and the
          performance<sup>**</sup>.
        </Body>

        <Body>
          The application will require a fee of {APPLICATION_FEE} and those who pass the audition
          will be asked to donate $200 to cover the costs of participation.
        </Body>

        <Body>
          Guests of participants will be able to purchase special tickets and will be invited to
          special events surrounding the performance.
        </Body>

        <Footnote>
          <sup>*</sup> Attendance at all workshops and rehearsals will be required for final
          participation
        </Footnote>

        <Footnote>
          <sup>**</sup> Participants are responsible for their own transportation and accommodation
          for all audition, rehearsal and performance activities.
        </Footnote>
      </Section>

      <Section id="how-to-apply">
        <SectionHeader>How To Apply</SectionHeader>

        <Body>
          <a
            href="/assets/SMPI Carnegie Hall Application.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Download your application
          </a>{' '}
          and submit it to{' '}
          <a href="mailto:info@syrianmusic.org?subject=Carnegie Hall Audition">
            info@syrianmusic.org
          </a>{' '}
          no later than 11:59PM EST on January 2, 2023.
        </Body>

        <Body>
          <Link href="/donate">
            <a>Donate</a>
          </Link>{' '}
          {APPLICATION_FEE} by January 31, 2023, for your application fee.
        </Body>
      </Section>

      <Section id="audition-resources">
        <SectionHeader>Audition Resources</SectionHeader>

        <Video
          css={{ marginTop: theme.spacing.get(32), marginBottom: theme.spacing.get(32) }}
          id="-StVc2u293w"
          title="Sama’i Bayati Qadim"
        />

        <Body>Sama&rsquo;i Bayati Qadim</Body>

        <Body>
          <Link href="/education/transcriptions/1u52qDSIT2505qfBqtRMgP">
            <a>View transcription here</a>
          </Link>
        </Body>
      </Section>

      <Section id="timeline">
        <SectionHeader>Timeline</SectionHeader>

        <Table>
          <tbody>
            <TimelineEvent date="01/22/2023">Application Submission Due</TimelineEvent>
            <TimelineEvent date="02/08/2023">Deadline to Sign up for Audition Time</TimelineEvent>
            <TimelineEvent date="02/11/2023">Live Audition</TimelineEvent>
            <TimelineEvent date="02/21/2023">Acceptance announcements</TimelineEvent>
            <TimelineEvent date="03/02/2023">Winner Orientation and Workshop</TimelineEvent>
            <TimelineEvent date="03/11/2023">Winner In Person Rehearsal</TimelineEvent>
            <TimelineEvent date="03/30/2023">Winner Workshop</TimelineEvent>
            <TimelineEvent date="04/15/2023">Winner Rehearsal</TimelineEvent>
            <TimelineEvent date="05/06/2023">Full Rehearsal</TimelineEvent>
            <TimelineEvent
              date={
                <>
                  Week of
                  <br />
                  05/15/2023
                </>
              }>
              Dress rehearsal at Carnegie Hall
            </TimelineEvent>
            <TimelineEvent date="05/19/2023">Performance</TimelineEvent>
          </tbody>
        </Table>
      </Section>

      <Typography
        css={{ marginTop: theme.spacing.get(32), marginBottom: theme.spacing.get(32) }}
        variant="h3"
        textAlign="center">
        Good Luck!
      </Typography>
    </SiteLayout>
  );
};

export default CarnegieLandingPage;
