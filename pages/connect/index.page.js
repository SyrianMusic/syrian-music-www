import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import config from '../../config.yaml';
import theme from '../../styles/theme';

const pageConfig = config.nav.connect;

const ConnectPage = () => (
  <SiteLayout className="gutters" pathname={pageConfig.href}>
    <Title>Connect</Title>
    <div>
      <Typography className="page-Connect-title" variant="h1" textAlign="center">
        Connect
      </Typography>
      <Typography size="lg">We want to hear from&nbsp;you!</Typography>
      <Typography size="lg">
        Email us at{' '}
        <a href="mailto:info@syrianmusic.org" target="_blank" rel="noopener noreferrer">
          info@syrianmusic.org
        </a>
        . To become a donor,{' '}
        <Link href="/donate">
          <a>fill out our donation&nbsp;form</a>.
        </Link>
      </Typography>
      <Typography size="lg">
        Follow us on{' '}
        <a href={pageConfig.links.instagram.href} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{' '}
        or&nbsp;
        <a href={pageConfig.links.facebook.href} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        .
      </Typography>
    </div>
    <style jsx>{`
      div :global(.page-Connect-title) {
        margin-bottom: ${theme.pxToRem(24)};
      }

      @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
        div {
          margin-bottom: ${theme.pxToRem(100)};
        }

        div :global(.page-Connect-title) {
          margin-bottom: ${theme.pxToRem(100)};
        }
      }
    `}</style>
  </SiteLayout>
);

export default ConnectPage;
