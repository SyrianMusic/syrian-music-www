import Hero from 'components/Hero';
import SiteLayout from 'components/SiteLayout';
import Title from 'components/Title';
import Typography from 'components/Typography';
import { HomeLinks } from 'components/HomeLinks';
import theme from 'styles/theme';

const HomePage = () => (
  <SiteLayout pathname="/">
    <Title>Home</Title>
    <h1 className="visually-hidden">Home</h1>
    <Hero
      className="page-Home-Hero"
      image={{
        src: '/images/instruments/syrian-oud-black-background.png',
        width: 1457,
        height: 820,
        srcSet: [
          {
            densityFactor: 2,
            src: '/images/instruments/syrian-oud-black-background@2x.png',
          },
          {
            densityFactor: 3,
            src: '/images/instruments/syrian-oud-black-background@3x.png',
          },
        ],
      }}>
      <Typography className="page-Home-hero-description" size="lg">
        Welcome to the Syrian Music Preservation Initiative where we promote and celebrate the
        diverse ethnic and regional musical traditions of Syria. At SMPI we pursue activities around
        preservation of, innovation to, research and education about the music which is dear to our
        hearts. We have a broad range of offerings including musical and dance performances, classes
        and workshops, seminars as well as digital resources and recordings. We encourage you to
        explore our&nbsp;site.
      </Typography>
    </Hero>
    <HomeLinks className="page-Home-links" />
    <style global jsx>
      {`
        .page-Home-Hero .page-Home-hero-description:last-child {
          margin-bottom: ${theme.pxToRem(48)};
        }

        .page-Home-links {
          margin-bottom: ${theme.pxToRem(39)};
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          .page-Home-Hero {
            margin-bottom: ${theme.pxToRem(88)};
          }

          .page-Home-links {
            margin-bottom: ${theme.pxToRem(75)};
          }
        }
      `}
    </style>
  </SiteLayout>
);

export default HomePage;
