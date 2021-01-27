import Hero from '../components/Hero';
import SiteLayout from '../components/SiteLayout';
import Title from '../components/Title';
import Typography from '../components/Typography';

const PerformancePage = () => (
  <SiteLayout>
    <Title>Performance</Title>
    <Hero
      title={
        <Typography className="page-Performance-title" variant="h3">
          <span>Featured performance</span>
          <span>Zakhrafa زخرفة</span>
        </Typography>
      }
      subtitle={
        <Typography className="page-Performance-subtitle" variant="h3">
          <span>Brooklyn Maqam</span>
          <span>March 2019</span>
        </Typography>
      }
      video={{
        title: 'Zakhrafa زخرفة',
        id: 'n6VjsvT6o3s',
      }}>
      <Typography>
        Zakhrafa, composed by Samer Ali, was performed during the first anniversary celebration of
        Brooklyn Maqam, a new community organization devoted to the middle-eastern music scene in
        New&nbsp;York.
      </Typography>
    </Hero>
    <style jsx>
      {`
        :global(.page-Performance-title),
        :global(.page-Performance-subtitle) {
          display: flex;
          justify-content: space-between;
        }

        :global(.page-Performance-title) span:first-child,
        :global(.page-Performance-subtitle) span:first-child {
          padding-right: 1em;
          text-align: left;
        }
      `}
    </style>
  </SiteLayout>
);

export default PerformancePage;
