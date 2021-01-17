import SiteLayout from '../components/SiteLayout';
import Hero from '../components/Hero';
import Title from '../components/Title';
import theme from '../styles/theme';

const EducationPage = () => {
  return (
    <>
      <Title title="Education and Preservation" />
      <SiteLayout className="page-Education-SiteLayout" pathname="/education">
        <Hero
          className="page-Education-Hero"
          title="Education and Preservation"
          image={{
            src: '/images/education-hero.jpg',
            width: 1461,
            height: 822,
          }}
          content={
            <>
              The Syrian Music Preservation Initiative is a hub for Arabic music education,
              references, and workshops. Explore performance notes on specific performances by the
              organization, explanations on musical forms, translations, glossaries, and more.
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

          :global(.page-Education-SiteLayout) :global(.page-Education-Hero) {
            margin: ${theme.pxToRem(108)} auto ${theme.pxToRem(235)};
            width: ${theme.pxToRem(1461)};
          }
        `}
      </style>
    </>
  );
};

export default EducationPage;
