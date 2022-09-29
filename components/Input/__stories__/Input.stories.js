import Input from '../Input';
import { getStoryTitle } from './utils';

export default {
  title: getStoryTitle('Input'),
  component: Input,
  parameters: { layout: 'centered' },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { defaultValue: 'Default value' };

export const Empty = Template.bind({});
Empty.args = {};

export const Focus = Template.bind({});
Focus.args = Default.args;
Focus.parameters = { pseudo: { focus: true } };

export const Error = Template.bind({});
Error.args = { ...Default.args, error: 'Error message' };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const Placeholder = Template.bind({});
Placeholder.args = { ...Default.args, placeholder: 'Placeholder', defaultValue: null };
