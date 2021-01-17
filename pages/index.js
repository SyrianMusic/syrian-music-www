import SiteLayout from '../components/SiteLayout';
import Hero from '../components/Hero';
import Title from '../components/Title';
import theme from '../styles/theme';

const HomePage = () => {
  return (
    <>
      <Title title="Home" />
      <SiteLayout className="page-Home-SiteLayout" pathname="/">
        <Hero
          className="page-Home-Hero"
          title="Welcome to the Syrian Music Preservation Initiative"
          image={{
            src: '/images/home-hero.jpg',
            width: 1457,
            height: 820,
          }}
          content={
            <>
              a non-profit organization dedicated to the preservation, protection and celebration of
              the musical traditions of classical Arabic music. The initiatives of this organization
              serve as both a connection to our history and as a source of pride for future
              generations.
            </>
          }
        />
      </SiteLayout>
      <style global jsx>
        {`
          main {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          :global(.page-Home-SiteLayout) :global(.page-Home-Hero) {
            margin: ${theme.pxToRem(108)} auto ${theme.pxToRem(235)};
            width: ${theme.pxToRem(1461)};
          }
        `}
      </style>
    </>
  );
};

export default HomePage;
