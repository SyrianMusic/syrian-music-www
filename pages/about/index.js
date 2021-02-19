import Image from '../../components/Image';
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

    <section className="gutter--right page-About-who-we-are">
      <Image
        className="page-About-who-we-are-image"
        src="/images/about-samer.jpg"
        width={739}
        height={1108}
      />
      <div className="page-About-who-we-are-text">
        <Typography variant="h1">Who We Are</Typography>
        <Typography variant="h3">Samer Ali, Founder and Artistic Director</Typography>
        <Typography>
          A native of Syria, Dr. Samer Ali is a physician, Arab-violinist, musical director of Takht
          al-Nagham and founder and president of the Syrian Music Preservation&nbsp;Initiative.
        </Typography>
        <Typography>
          Samer led Takht al-Nagham in New York City at Alwan for the Arts, Scandinavia House, and
          Roulette Intermedium; and featured Syria&apos;s celebrated soprano Lubana al-Quntar at the
          Kennedy Center in Washington D.C. He currently performs with the National Arab Orchestra
          and the New York Arabic Orchestra. He began studying western classical violin at the age
          of eight with Fawaz al-Ali, and later pursued intensive conservatory studies with Ali
          Mukhtar Babayev. He studied the Arab violin and classical music traditions with Ali Farran
          and Ziad Ajjan (both students of prolific scholar Mahmoud Ajjan), composer Khaleel Haj
          Hussein, violinist and oudist Simon Shaheen, violinist Anwar Hariri, and scholar and
          oudist Muhammad Qadri&nbsp;Dalal.
        </Typography>
      </div>
    </section>
    <style jsx>
      {`
        section {
          margin-top: ${theme.pxToRem(190)};
        }

        .page-About-who-we-are {
          display: flex;
        }

        :global(.page-About-who-we-are-image) {
          align-self: flex-end;
        }

        .page-About-who-we-are-text {
          margin-left: ${theme.pxToRem(40)};
          margin-bottom: ${theme.pxToRem(35)};
          flex: 1;
        }
      `}
    </style>
  </SiteLayout>
);

export default AboutPage;
