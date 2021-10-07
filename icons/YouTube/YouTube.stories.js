import { YouTube } from './YouTube';

export default {
  title: 'Icons/YouTube',
  component: YouTube,
  argTypes: {
    className: {
      control: { type: null },
    },
  },
};

const Template = (args) => <YouTube {...args} />;

export const Default = Template.bind({});
Default.args = {};
