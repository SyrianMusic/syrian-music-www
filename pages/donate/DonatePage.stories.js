import { DonatePage } from './DonatePage';

export default {
  title: 'Pages/Donate',
  component: DonatePage,
};

const Template = (args) => <DonatePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
