import Bio from '../../components/Bio';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import config from '../../config.yaml';
import theme from '../../styles/theme';

const AboutPage = () => (
  <SiteLayout pathname={config.nav.about.href}>
    <Title>About</Title>
    <Typography className="gutters page-About-title" variant="h1">
      About
    </Typography>
    <Typography className="gutters">
      The Syrian Music Preservation Initiative promotes and celebrates the diverse ethnic and
      regional musical traditions of Syria through preservation, innovation, research, and
      education. Its activities include music and dance performances, classes, workshops, and
      seminars, as well as digital resources and&nbsp;recordings.
    </Typography>

    <section className="gutters">
      <Typography variant="h1">Our Story</Typography>
      <Typography>
        The Syrian Music Preservation Initiative is dedicated to preserving and invigorating the
        diverse ethnic and regional music traditions of Syria (including but not limited to Arabic,
        Kurdish, Armenian and Syriac). Our performances promote the musical heritage of this region
        by presenting older works that are less known to the greater public as well as supporting
        contemporary exploration of the traditional forms by commissioning composers from Syria and
        the diaspora. In this way, we celebrate the past, present and future of Syrian&nbsp;music.
      </Typography>
      <Typography>
        We strive to preserve the Syrian compositional practices by researching their history and
        context, translating lyrics, providing transcriptions, documenting our performances, and
        most importantly, by making our digital resources accessible to artists, scholars and
        communities&nbsp;worldwide.
      </Typography>
      <Typography>
        With our work on performance and preservation, we are building a community of music lovers,
        scholars and historians to help support our final goal: education. The performing arm of
        SMPI, Takht al-Nagham, is made up of both Syrian and non-Syrian performers and invites
        soloists and composers from across the globe to support all three pillars of the
        organization. Through workshops, seminars, lectures and performance about musical traditions
        and historical context, we hope to grow a multi-generational, global community by making our
        educational, archival and performance resources all available&nbsp;digitally.
      </Typography>
    </section>

    <section className="page-About-who-we-are">
      <Typography className="gutter--right" variant="h1">
        Who We Are
      </Typography>
      <Bio className="page-About-bio" />
      <Bio className="page-About-bio" flipped />
    </section>
    <style jsx>
      {`
        section {
          margin-top: ${theme.pxToRem(190)};
        }

        section :global(.page-About-bio .component-Bio-title) {
          margin-top: 2em;
        }

        section :global(.page-About-bio:nth-child(2) .component-Bio-title) {
          margin-top: 0;
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          section :global(.page-About-bio .component-Bio-title) {
            margin-top: 3em;
          }
        }
      `}
    </style>
  </SiteLayout>
);

export default AboutPage;
