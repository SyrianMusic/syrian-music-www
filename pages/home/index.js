import Hero from '../../components/Hero';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import HomeLinks from './HomeLinks';

const HomePage = () => (
  <SiteLayout pathname="">
    <Title>Home</Title>
    <h1 className="visually-hidden">Home</h1>
    <Hero
      css={{
        marginBottom: theme.pxToRem(48),
        [theme.mq.mobileToDesktop]: {
          marginBottom: theme.pxToRem(88),
        },
      }}
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
      <Typography size="md">
        Welcome to the Syrian Music Preservation Initiative where we promote and celebrate the
        diverse ethnic and regional musical traditions of&nbsp;Syria.
      </Typography>
    </Hero>
    <HomeLinks
      css={{
        marginBottom: theme.pxToRem(39),

        [theme.mq.mobileToDesktop]: {
          marginBottom: theme.pxToRem(75),
        },
      }}
    />
  </SiteLayout>
);

export default HomePage;
