import NewsletterSignup from './NewsletterSignup';
import { subscribe } from '../../api';
import { useCallback } from 'react';

const NewsletterSignupContainer = () => {
  const subscribeCb = useCallback(async ({ component, email, url }) => {
    try {
      return await subscribe({ component, email, url });
    } catch (e) {
      console.error(e);
      return {
        error: new Error(e.message),
      };
    }
  }, []);

  return <NewsletterSignup subscribe={subscribeCb} />;
};

export default NewsletterSignupContainer;
