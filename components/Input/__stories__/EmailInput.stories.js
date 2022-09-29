import EmailInput from '../EmailInput';
import { getStoryTitle } from './utils';

export default {
  title: getStoryTitle('EmailInput'),
  component: EmailInput,
  parameters: { layout: 'centered' },
};

const Template = (args) => <EmailInput {...args} />;

export const Default = Template.bind({});
Default.args = { defaultValue: 'email@example.com' };

export const Empty = Template.bind({});
Empty.args = {};

export const Focus = Template.bind({});
Focus.args = Default.args;
Focus.parameters = { pseudo: { focus: true } };

export const Error = Template.bind({});
Error.args = {
  defaultValue: 'not an email address',
  isTouched: true,
  required: true,
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const Placeholder = Template.bind({});
Placeholder.args = { ...Default.args, placeholder: 'email@example.com', defaultValue: null };