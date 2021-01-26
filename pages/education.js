import Hero from '../components/Hero';
import SiteLayout from '../components/SiteLayout';
import Title from '../components/Title';
import config from '../config.yaml';
import theme from '../styles/theme';

const EducationPage = () => (
  <SiteLayout className="page-Education-SiteLayout" pathname={config.nav.education.href}>
    <Title>Education and Preservation</Title>
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
          The Syrian Music Preservation Initiative is a hub for Arabic music education, references,
          and workshops. Explore performance notes on specific performances by the organization,
          explanations on musical forms, translations, glossaries, and more.
        </>
      }
    />
    <style global jsx>
      {`
        .page-Education-Hero {
          margin: 0 auto;
          width: ${theme.pxToRem(1461)};
        }
      `}
    </style>
  </SiteLayout>
);

export default EducationPage;
