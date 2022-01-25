import { TextInput } from '../TextInput';
import { argTypes, parameters, storybookBasePath } from './config';

const helpText = 'Help text';
const error = 'Error message';

export default {
  title: storybookBasePath + 'TextInput',
  component: TextInput,
  argTypes: {
    ...argTypes,
    label: {
      defaultValue: 'Label',
      control: { type: 'text' },
    },
  },
  parameters,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = { value: 'Value' };

export const Focus = Template.bind({});
Focus.args = { ...Default.args };
Focus.parameters = { pseudo: { focus: true } };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const HelpText = Template.bind({});
HelpText.args = { ...Default.args, helpText };

export const Error = Template.bind({});
Error.args = { ...Default.args, error };

export const HelpTextAndError = Template.bind({});
HelpTextAndError.args = { ...Default.args, error, helpText };

export const Empty = Template.bind({});
Empty.args = { value: '' };

export const EmptyFocus = Template.bind({});
EmptyFocus.args = { ...Empty.args };
EmptyFocus.parameters = { pseudo: { focus: true } };

export const EmptyDisabled = Template.bind({});
EmptyDisabled.args = { ...Empty.args, disabled: true };
