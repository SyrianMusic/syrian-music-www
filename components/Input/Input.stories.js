import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    className: {
      control: { type: null },
    },
    label: {
      defaultValue: 'Label',
    },
    name: {
      defaultValue: 'name',
    },
    placeholder: {
      defaultValue: 'Placeholder',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Value = Template.bind({});
Value.args = {
  value: 'Value',
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const RequiredValue = Template.bind({});
RequiredValue.args = {
  required: true,
  value: 'Value',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledValue = Template.bind({});
DisabledValue.args = {
  disabled: true,
  value: 'Value',
};

export const Success = Template.bind({});
Success.args = {
  success: 'This is a success message.',
};

export const SuccessValue = Template.bind({});
SuccessValue.args = {
  success: 'This is a success message.',
  value: 'Value',
};

export const Error = Template.bind({});
Error.args = {
  error: 'This is an error message.',
};

export const ErrorValue = Template.bind({});
ErrorValue.args = {
  error: 'This is an error message.',
  value: 'Value',
};
