import { Instagram } from './Instagram';

export default {
  title: 'Icons/Instagram',
  component: Instagram,
  argTypes: {
    className: {
      control: { type: null },
    },
  },
};

const Template = (args) => <Instagram {...args} />;

export const Default = Template.bind({});
Default.args = {};
