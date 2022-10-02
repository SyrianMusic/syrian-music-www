import styled from '@emotion/styled';
import SiteLayout from '../../components/SiteLayout';
import Typography, { SectionHeader } from '../../components/Typography';
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

const TBD = styled.span({
  backgroundColor: 'red',
  color: 'white',
});

const CarnegieLandingPage = () => {
  return (
    <SiteLayout>
      <Typography variant="h1" textAlign="center">
        Play with SMPI at Carnegie Hall
      </Typography>

      <Section>
        <SectionHeader>Overview</SectionHeader>

        <Typography>
          Education is an important part of SMPI’s mission. Because of this, we will be offering a
          unique opportunity as part of our Carnegie Hall performance on May 19, 2023. For one piece
          on our program, we will open the stage to advanced amateurs and enthusiasts to join Takht
          al-Nagham. Participants will be required to audition on the piece in <TBD>DATE-TBD</TBD>{' '}
          and if accepted, will participate in a number of workshops and special rehearsals in
          addition to the dress rehearsal<sup>*</sup> at Carnegie Hall and the performance.
        </Typography>

        <Typography>
          The application will require a fee of $50 and those who pass the audition will be asked to
          donate $500 to cover the costs of participation.
        </Typography>

        <Typography>
          Participants will be able to purchase tickets within a block of seats dedicated to winners
          and their guests. Participants and 2 guests will be invited to attend the post-concert
          reception at Carnegie Hall.
        </Typography>

        <Footnote>
          <sup>*</sup> Attendance at all workshops and rehearsals will be required for final
          participation
        </Footnote>

        <Footnote>
          <TBD>
            <sup>**</sup>
          </TBD>{' '}
          Participants are responsible for their own transportation and accommodation for all
          audition, rehearsal and performance activities.
        </Footnote>
      </Section>

      <Section>
        <SectionHeader>How To Apply</SectionHeader>

        <Typography>
          Download your application here and submit it to info@syrianmusic.org no later than 11:59PM
          EST on January 2, 2023.
        </Typography>

        <Typography>Donate $XX by January XX, 2023, for your application fee.</Typography>

        <Typography>
          Only XX number of applications will be accepted. If your application is not accepted, your
          application fee will be refunded.
        </Typography>
      </Section>

      <Section>
        <SectionHeader>Audition Resources</SectionHeader>
      </Section>

      <Section>
        <SectionHeader>Timeline</SectionHeader>
      </Section>
    </SiteLayout>
  );
};

export default CarnegieLandingPage;
