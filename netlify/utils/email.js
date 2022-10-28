const mailchimp = require('@mailchimp/mailchimp_marketing');
import { mailchimpKey } from './environment';
import logger from './logger';

const LIST_ID = '66a839666b';

mailchimp.setConfig({
  apiKey: mailchimpKey,
  server: 'us1',
});

const EmailService = () => {
  return {
    async ping() {
      return await mailchimp.ping.get();
    },

    async subscribe({ email } = {}) {
      try {
        const res = await mailchimp.lists.setListMember(LIST_ID, email, {
          email_address: email,
          status_if_new: 'subscribed',
          status: 'subscribed',
        });
        logger.info(res);
        return res;
      } catch (e) {
        logger.error(JSON.stringify(e));

        const mailchimpError = JSON.parse(e.response.text);

        const error = {
          status: mailchimpError.status,
          code: mailchimpError.title,
          message: mailchimpError.detail,
        };

        logger.error('Mailchimp returned an error:', error);

        return {
          error: {
            status: error.status || 500,
            message:
              'Unfortunately, we are unable to sign you up to our mailing list. Refresh the page and try again with a different email address.',
          },
        };
      }
    },
  };
};

export default EmailService;
