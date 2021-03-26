import Hero from '../../components/Hero';
import Image from '../../components/Image';
import Rule from '../../components/Rule';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import config from '../../config.yaml';
import theme from '../../styles/theme';
import { typography } from '../../styles/mixins';

const pageConfig = config.nav.performance;

const PerformancePage = () => (
  <SiteLayout className="page-Performance-root" pathname={pageConfig.href}>
    <Title>Performance</Title>

    <Hero
      className="page-Performance-hero"
      title="Performance"
      subtitle={
        <Typography className="page-Performance-subtitle" variant="h3" as="div">
          <span>Zakhrafa</span>
          <span>Roulette</span>
        </Typography>
      }
      video={{
        title: 'Zakhrafa زخرفة',
        id: 'n6VjsvT6o3s',
      }}>
      <Typography size="lg">
        Zakhrafa, composed by Samer Ali, was performed at Roulette Intermedium as part of the first
        anniversary celebration of Brooklyn Maqam Hang in 2019. The piece is in Nahawand Maqam and
        written in a new perspective of the Longa form. It features a newly-composed rhythm in 12/8
        named&nbsp;Muzakhraf.
      </Typography>
    </Hero>

    <Rule />

    <section>
      <h1 className="visually-hidden">Performing Groups</h1>
      <article id="takht-al-nagham" className="gutters">
        <Image
          className="page-Performance-takht-al-nagham-logo"
          src="/images/logos/takht-al-nagham-logo.svg"
          width={197.5}
          height={214.5}
        />
        <div>
          <Typography variant="h3">Takht al-Nagham</Typography>
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
        </div>
      </article>
    </section>
    <style jsx>
      {`
        :global(.page-Performance-subtitle) {
          display: flex;
          justify-content: space-between;
        }

        :global(.page-Performance-subtitle) span:first-child {
          padding-right: 1em;
          text-align: left;
        }

        section {
          margin-top: ${theme.pxToRem(50)};
          margin-bottom: ${theme.pxToRem(23)};
        }

        article :global(.page-Performance-takht-al-nagham-logo) {
          margin: 0 auto ${theme.pxToRem(46)};
          height: auto;
          width: ${theme.pxToRem(230)};
        }

        article > div:last-child {
          margin-top: ${theme.pxToRem(25)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          :global(.page-Performance-hero) {
            margin-bottom: ${theme.pxToRem(96)};
          }

          section {
            margin-bottom: ${theme.pxToRem(75)};
          }

          article :global(.page-Performance-takht-al-nagham-logo) {
            ${typography.h3.desktop};
            float: right;
            margin: 2em 0 ${theme.pxToRem(75)} ${theme.pxToRem(78)};
            width: ${theme.pxToRem(240)};
          }
        }
      `}
    </style>
  </SiteLayout>
);

export default PerformancePage;
