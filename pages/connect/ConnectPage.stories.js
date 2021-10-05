import { ConnectPage } from './ConnectPage';

export default {
  title: 'Pages/Connect',
  component: ConnectPage,
};

const Template = (args) => <ConnectPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
