import Hero from '../../components/Hero';
import Image from '../../components/Image';
import SiteLayout from '../../components/SiteLayout';
import Title from '../../components/Title';
import Typography from '../../components/Typography';
import config from '../../config.yaml';
import theme from '../../styles/theme';

const pageConfig = config.nav.performance;

const PerformancePage = () => (
  <SiteLayout pathname={pageConfig.href}>
    <Title>Performance</Title>
    <h1 className="visually-hidden">Performance</h1>
    <Hero
      title={
        <Typography className="page-Performance-title" variant="h3" as="div">
          <span>
            <h2>Featured performance</h2>
          </span>
          <span>Zakhrafa زخرفة</span>
        </Typography>
      }
      subtitle={
        <Typography className="page-Performance-subtitle" variant="h3" as="div">
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
    <section>
      <h1 className="visually-hidden">Performing Groups</h1>
      <article>
        <div>
          <Image src="/images/takht-al-nagham-logo.svg" width={395} height={429} />
        </div>
        <div>
          <Typography variant="h3">Takht al-Nagham</Typography>
          <Typography>
            Takht al-Nagham, the performing arm of the SMPI, a New York-based ensemble featuring the
            sound of a traditional <i>takht</i> (Arab chamber music group). <i>Nagham</i> is the
            Arabic word for melody, and is commonly used as a synonym for the Arab
            Maqam&nbsp;system.
          </Typography>
        </div>
      </article>
      <article>
        <div>
          <Typography variant="h3">Raqs al-Samah</Typography>
          <Typography>
            Samah Dance (Raqs al-Samah in Arabic) is a Syrian dance that was created to accompany
            the Muwashahat genre centuries ago. It is a group dance designed as an interaction
            between males and females in an elegant and eloquent expressive&nbsp;milieu.
          </Typography>
        </div>
      </article>
    </section>
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

        section {
          margin-top: ${theme.pxToRem(100)};
        }

        article {
          border-top: ${theme.pxToRem(1)} solid ${theme.color.black};
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: ${theme.pxToRem(100)} ${theme.pxToRem(theme.layout.gutterWidth / 2)}
            ${theme.pxToRem(225)};
        }

        article > div:not(:first-child) {
          margin-top: ${theme.pxToRem(50)};
        }

        article > div:last-child {
          flex: 1;
        }

        @media screen and (min-width: ${theme.breakpoint.mobileToDesktop}px) {
          article {
            flex-direction: row;
            align-items: flex-start;
            padding-left: ${theme.pxToRem(theme.layout.gutterWidth)};
            padding-right: ${theme.pxToRem(theme.layout.gutterWidth)};
          }

          article > div:not(:first-child) {
            margin-top: 0;
            padding-left: ${theme.pxToRem(195)};
          }
        }
      `}
    </style>
  </SiteLayout>
);

export default PerformancePage;