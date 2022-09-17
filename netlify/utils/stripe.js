import Stripe from 'stripe';
import { stripeSecretKey } from '../utils/environment';

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2022-08-01',
  appInfo: {
    // For sample support and debugging, not required for production:
    name: 'syrian-music-www',
    url: 'https://github.com/SyrianMusic/syrian-music-www',
  },
});

export default stripe;
