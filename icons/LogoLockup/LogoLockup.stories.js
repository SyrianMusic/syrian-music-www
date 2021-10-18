import { LogoLockup } from './LogoLockup';

export default {
  title: 'Icons/LogoLockup',
  component: LogoLockup,
  argTypes: {
    className: {
      control: { type: null },
    },
  },
};

const Template = (args) => <LogoLockup {...args} />;

export const Default = Template.bind({});
Default.args = {};
