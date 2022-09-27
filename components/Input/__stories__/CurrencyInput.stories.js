import CurrencyInput from '../CurrencyInput';

export default {
  title: 'CurrencyInput',
  component: CurrencyInput,
  parameters: { layout: 'centered' },
};

const Template = (args) => <CurrencyInput {...args} />;

export const Default = Template.bind({});
Default.args = { defaultValue: '100.00' };

export const Empty = Template.bind({});
Empty.args = {};

export const Focus = Template.bind({});
Focus.args = Default.args;
Focus.parameters = { pseudo: { focus: true } };

export const Error = Template.bind({});
Error.args = { ...Empty.args, required: true };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const Placeholder = Template.bind({});
Placeholder.args = { ...Default.args, placeholder: '100.00', defaultValue: null };
