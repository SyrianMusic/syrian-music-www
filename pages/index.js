import Hero from '../components/Hero';
import SiteLayout from '../components/SiteLayout';
import Title from '../components/Title';
import VisualNav from '../components/VisualNav';
import theme from '../styles/theme';

const horizontalPadding = 50;

const HomePage = () => (
  <SiteLayout className="page-Home-SiteLayout" pathname="/">
    <Title>Home</Title>
    <Hero
      className="page-Home-Hero"
      title={'Welcome to the Syrian Music Preservation\u00A0Initiative'}
      image={{
        src: '/images/home-hero.jpg',
        width: 1457,
        height: 820,
      }}
      content={
        <>
          a non-profit organization dedicated to the preservation, protection and celebration of the
          musical traditions of classical Arabic music. The initiatives of this organization serve
          as both a connection to our history and as a source of pride for future{'\u00A0'}
          generations.
        </>
      }
    />
    <VisualNav className="page-Home-visual-nav" />
    <style global jsx>
      {`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .page-Home-SiteLayout > .page-Home-Hero {
          margin: ${theme.pxToRem(108)} auto ${theme.pxToRem(235)};
        }

        .page-Home-SiteLayout > .page-Home-visual-nav {
          margin-bottom: ${theme.pxToRem(390 + horizontalPadding * 2)};
        }
      `}
    </style>
  </SiteLayout>
);

export default HomePage;
