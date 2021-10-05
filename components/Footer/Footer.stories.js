import { Footer } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Pathname = Template.bind({});
Pathname.args = { pathname: '/transcriptions' };
