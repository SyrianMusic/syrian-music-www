import Hero from '../../components/Hero';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
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
  </SiteLayout>
);

export default EducationPage;
