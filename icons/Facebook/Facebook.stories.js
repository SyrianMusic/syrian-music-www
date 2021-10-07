import { Facebook } from './Facebook';

export default {
  title: 'Icons/Facebook',
  component: Facebook,
  argTypes: {
    className: {
      control: { type: null },
    },
  },
};

const Template = (args) => <Facebook {...args} />;

export const Default = Template.bind({});
Default.args = {};
