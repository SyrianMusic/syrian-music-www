import { BaseAPI } from '../../api';
import PerformancePage, { performancePageQuery } from './PerformancePage';

export const getStaticProps = async () => {
  const { data } = await BaseAPI.query(performancePageQuery, {
    variables: { now: new Date(Date.now()).toISOString() },
  });
  return { props: data };
};

export default PerformancePage;
