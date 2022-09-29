import CurrencyInput from '../CurrencyInput';
import { getStoryTitle } from './utils';

export default {
  title: getStoryTitle('CurrencyInput'),
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
Error.args = { isTouched: true, required: true, error: 'Error message' };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const Placeholder = Template.bind({});
Placeholder.args = { ...Default.args, placeholder: '100.00', defaultValue: null };
