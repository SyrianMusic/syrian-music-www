import SiteLayout from '../components/SiteLayout';
import Title from '../components/Title';

function HomePage() {
  return (
    <>
      <Title title="Home" />
      <SiteLayout />
      <style global jsx>
        {`
          main {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}

export default HomePage;
