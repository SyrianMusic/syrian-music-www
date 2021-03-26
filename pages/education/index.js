import EducationNav from '../../components/EducationNav';
import Hero from '../../components/Hero';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import config from '../../config.yaml';
import theme from '../../styles/theme';

const EducationPage = () => (
  <SiteLayout className="page-Education-SiteLayout" pathname={config.nav.education.href}>
    <Title>Education and Preservation</Title>
    <Hero
      className="page-Education-Hero"
      title="Education and Preservation"
      image={{
        src: '/images/instruments/syrian-qanun.png',
        srcSet: [
          {
            densityFactor: 2,
            src: '/images/instruments/syrian-qanun@2x.png',
          },
          {
            densityFactor: 3,
            src: '/images/instruments/syrian-qanun@3x.png',
          },
        ],
        width: 730,
        height: 411,
      }}></Hero>
    <EducationNav className="page-Education-education-nav" />
    <style global jsx>{`
      @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        .page-Education-Hero {
          margin-bottom: ${theme.pxToRem(72)};
        }

        .page-Education-education-nav {
          margin-bottom: ${theme.pxToRem(72)};
        }
      }
    `}</style>
  </SiteLayout>
);

export default EducationPage;
