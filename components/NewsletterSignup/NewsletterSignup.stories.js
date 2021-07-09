import { NewsletterSignup } from './NewsletterSignup';

export default {
  title: 'Newsletter Signup',
  component: NewsletterSignup,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <NewsletterSignup {...args} />;

export const Default = Template.bind({});
Default.args = {};
