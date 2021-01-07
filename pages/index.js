import Head from 'next/head';

function HomePage() {
  return (
    <main>
      <Head>
        <title>Syrian Music Preservation Initiative</title>
      </Head>
      <h1 className="visually-hidden">Syrian Music Preservation Initiative</h1>
      <img
        className="logo"
        src="/images/SMPI_logo.png"
        alt="Syrian Music Preservation Initiative logo"
      />
      <style jsx>
        {`
          main {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .logo {
            max-width: 31.25rem;
            width: 80%;
          }
        `}
      </style>
    </main>
  );
}

export default HomePage;
