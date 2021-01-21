import Hero from '../components/Hero';
import SiteLayout from '../components/SiteLayout';
import Title from '../components/Title';
import VisualNav from '../components/VisualNav';
import theme from '../styles/theme';

const horizontalPadding = 50;

const HomePage = () => (
  <SiteLayout className="page-Home-SiteLayout" pathname="/">
    <Title>Home</Title>
    <h1 className="visually-hidden">Home</h1>
    <Hero
      className="page-Home-Hero"
      image={{
        src: '/images/home-hero.jpg',
        width: 1457,
        height: 820,
      }}
      content={
        <>
          The Syrian Music Preservation Initiative promotes and celebrates the diverse ethnic and
          regional musical traditions of Syria through preservation, innovation, research, and
          education. Its activities include music and dance performances, classes, workshops, and
          seminars, as well as digital resources and&nbsp;recordings.
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
