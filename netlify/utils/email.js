import mailchimp from '@mailchimp/mailchimp_marketing';
import { mailchimpKey } from './environment';

mailchimp.setConfig({
  apiKey: mailchimpKey,
  server: 'us1',
});

const EmailService = () => {
  return {
    async ping() {
      return await mailchimp.ping.get();
    },
  };
};

export default EmailService;
