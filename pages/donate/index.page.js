import { useEffect, useState } from 'react';
import DonatePage from './DonatePage';
import { createPaymentIntent } from '../../api';

const DonatePageContainer = () => {
  const [amount] = useState(0.5);
  const [intentSecret, setIntentSecret] = useState(null);

  const onSubmit = () => {};

  useEffect(() => {
    const onMount = async () => {
      const { clientSecret } = await createPaymentIntent({ amount });
      setIntentSecret(clientSecret);
    };

    onMount().catch(console.error);
  }, []);

  return <DonatePage onSubmit={onSubmit} />;
};

export default DonatePageContainer;
