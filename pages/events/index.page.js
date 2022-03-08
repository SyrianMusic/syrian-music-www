const EventsPage = () => null;

export const getStaticProps = async () => {
  return {
    redirect: {
      destination: '/performance',
      permanent: true,
    },
  };
};

export default EventsPage;
