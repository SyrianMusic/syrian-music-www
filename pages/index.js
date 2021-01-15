import SiteLayout from '../components/SiteLayout';
import Hero from '../components/Hero';
import Title from '../components/Title';
import theme from '../styles/theme';

function HomePage() {
  return (
    <>
      <Title title="Home" />
      <SiteLayout className="page-Home-SiteLayout">
        <Hero className="page-Home-Hero" />
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
}

export default HomePage;
