import SiteLayout from '../components/SiteLayout';
import Title from '../components/Title';
import Typography from '../components/Typography';
import config from '../config.yaml';
import theme from '../styles/theme';

const pageConfig = config.nav.connect;

const ConnectPage = () => (
  <SiteLayout className="gutters page-Connect-root" pathname={pageConfig.href}>
    <Title>Connect</Title>
    <Typography variant="h1">Connect</Typography>
    <Typography className="page-Connect-text">We want to hear from you!</Typography>
    <Typography className="page-Connect-text">
      Email us at{' '}
      <a href="mailto:info@syrianmusic.org" target="_blank" rel="noopener noreferrer">
        info@syrianmusic.org
      </a>
      . To become a donor,{' '}
      <a href={pageConfig.links.donate.href} target="_blank" rel="noopener noreferrer">
        fill out our donation form
      </a>
      .
    </Typography>
    <Typography className="page-Connect-text">
      Follow us on{' '}
      <a href={pageConfig.links.instagram.href} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>{' '}
      or{' '}
      <a href={pageConfig.links.facebook.href} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      .
    </Typography>
    <style jsx>
      {`
        :global(.page-Connect-root .page-Connect-text) {
          font-size: ${theme.pxToRem(85)};
          line-height: ${theme.pxToRem(102)};
        }
      `}
    </style>
  </SiteLayout>
);

export default ConnectPage;
