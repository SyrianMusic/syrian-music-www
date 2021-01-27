import Hero from '../components/Hero';
import SiteLayout from '../components/SiteLayout';
import Title from '../components/Title';
import Typography from '../components/Typography';
import VisualNav from '../components/VisualNav';
import theme from '../styles/theme';

const HomePage = () => (
  <SiteLayout pathname="/">
    <Title>Home</Title>
    <h1 className="visually-hidden">Home</h1>
    <Hero
      className="page-Home-Hero"
      image={{
        src: '/images/home-hero.jpg',
        width: 1457,
        height: 820,
      }}>
      <Typography>
        The Syrian Music Preservation Initiative promotes and celebrates the diverse ethnic and
        regional musical traditions of Syria through preservation, innovation, research, and
        education. Its activities include music and dance performances, classes, workshops, and
        seminars, as well as digital resources and&nbsp;recordings.
      </Typography>
    </Hero>
    <VisualNav className="page-Home-visual-nav" />
    <style global jsx>
      {`
        .page-Home-Hero {
          margin-bottom: ${theme.pxToRem(235)};
        }
      `}
    </style>
  </SiteLayout>
);

export default HomePage;
