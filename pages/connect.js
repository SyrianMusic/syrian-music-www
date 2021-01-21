import SiteLayout from '../components/SiteLayout';
import Title from '../components/Title';
import Typography from '../components/Typography';

const ConnectPage = () => (
  <SiteLayout>
    <Title>Connect</Title>
    <Typography variant="h1">Connect</Typography>
    <Typography>We want to hear from you!</Typography>
    <Typography>
      Fill out our contact form, or email{' '}
      <a href="mailto:info@syrianmusic.org" target="_blank" rel="noopener noreferrer">
        info@syrianmusic.org
      </a>
      . To become a donor, download the donation form.
    </Typography>
    <Typography>Follow us on Instagram, Facebook, or&nbsp;YouTube.</Typography>
    <style jsx>
      {`
        > p {
          color: red;
        }
      `}
    </style>
  </SiteLayout>
);

export default ConnectPage;
