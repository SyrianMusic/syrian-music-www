import Hero from '../../components/Hero';
import EducationNav from '../../components/EducationNav';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import theme from '../../styles/theme';
import config from '../../config.yaml';

const EducationPage = () => (
  <SiteLayout className="page-Education-SiteLayout" pathname={config.nav.education.href}>
    <Title>Education and Preservation</Title>
    <Hero
      className="page-Education-Hero"
      title={<Typography variant="h3">Education and Preservation</Typography>}
      image={{
        src: '/images/education-hero.jpg',
        width: 1461,
        height: 822,
      }}>
      <Typography>
        The Syrian Music Preservation Initiative is a hub for Arabic music education, references,
        and workshops. Explore performance notes on specific performances by the organization,
        explanations on musical forms, translations, glossaries, and&nbsp;more.
      </Typography>
    </Hero>
    <EducationNav />
    <style global jsx>{`
      .page-Education-Hero {
        margin-bottom: ${theme.pxToRem(230)};
      }
    `}</style>
  </SiteLayout>
);

export default EducationPage;
