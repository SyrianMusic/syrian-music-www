import SectionHeader from '../SectionHeader';

export default {
  title: 'SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <SectionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Upcoming Performances',
};
