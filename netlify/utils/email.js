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

    async subscribe({ component, email, url } = {}) {
      try {
        const res = await mailchimp.lists.setListMember(LIST_ID, email, {
          email_address: email,
          status_if_new: 'pending',
          status: 'pending',
          merge_fields: {
            SIGNUPCOMP: component,
            SIGNUPURL: url,
          },
        });

        logger.info('%s was successfully subscribed to the mailing list.', res.email_address);

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
              'Unfortunately, we are unable to sign you up to our mailing list. Please try again with a different email address.',
          },
        };
      }
    },
  };
};

export default EmailService;
