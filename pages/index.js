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
        Welcome to the Syrian Music Preservation Initiative where we promote and celebrate the
        diverse ethnic and regional musical traditions of Syria. At SMPI we pursue activities around
        preservation of, innovation to, research and education about the music which is dear to our
        hearts. We have a broad range of offerings including musical and dance performances, classes
        and workshops, seminars as well as digital resources and recordings. We encourage you to
        explore our&nbsp;site.
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
