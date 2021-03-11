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
      <Bio
        className="page-About-bio"
        title="Samer Ali, Founder and Artistic Director"
        text={`A native of Syria, Samer Ali is a physician, violinist, composer, founder and artistic director of the Syrian Music Preservation Initiative.
Samer has led Takht al-Nagham, SMPI’s ensemble, in New York at Alwan for the Arts, Scandinavia House, and Roulette Intermedium; as well as at the Kennedy center in Washington, DC with Syrian soprano Lubana al-Quntar.
He began studying western classical violin at the age of eight with Fawaz al-Ali and Ali Farran, and later pursued intensive conservatory studies with Ali Mukhtar Babayev. He studied the Arab music traditions with Simon Shaheen, Anwar Hariri, and Muhammad Qadri Dalal.
In Damascus, he co-founded Awj Ensemble, and has continued to perform in the US with groups like the Bronx Orchestra and the National Arab Orchestra.
In medicine, Samer received his M.D. from Syria and later graduated from medical residency in Anatomic and Clinical Pathology at Mount Sinai Hospital. He is currently a Surgical Pathology Fellow at Lenox Hill Hospital in New York.
`}
        image={{
          src: '/images/people/samer-ali.png',
          srcSet: [
            {
              densityFactor: 2,
              src: '/images/people/samer-ali@2x.png',
            },
            {
              densityFactor: 3,
              src: '/images/people/samer-ali@3x.png',
            },
          ],
          width: 317,
          height: 1107,
        }}
      />
      <Bio
        className="page-About-bio"
        title="Marissa Arciola, President"
        text={`Marissa is a bassist, strategist and leader with a unique combination of artistic and business experience helping her build on founder Samer Ali’s vision of the SMPI.
Marissa completed her undergraduate degree in double bass performance at the Eastman School of Music under the tutelage of renowned soloist, James VanDemark. During this time, she also studied with Curtis Buris of the National Symphony Orchestra.  While completing her MBA and MA in Arts Administration at SMU, Marissa continued to study bass with Thomas Lederer of the Dallas Symphony Orchestra.
After her studies, Marissa has worked with a number of nonprofit organizations while playing with groups ranging from classical, rock, and Middle Eastern music.
As President of the SMPI board, and member of Takht al-Nagham, Marissa helps to move the organization forward both programmatically and financially, by putting a focus on the digital initiatives, prioritizing projects and growing donation and fundraising prospects.`}
        image={{
          src: '/images/people/marissa-arciola.png',
          srcSet: [
            {
              densityFactor: 2,
              src: '/images/people/marissa-arciola@2x.png',
            },
            {
              densityFactor: 3,
              src: '/images/people/marissa-arciola@3x.png',
            },
          ],
          width: 317,
          height: 1107,
        }}
        flipped
      />
    </section>
    <style jsx>
      {`
        section {
          margin-top: ${theme.pxToRem(95)};
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
