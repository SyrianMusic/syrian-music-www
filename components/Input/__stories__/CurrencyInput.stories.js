import CurrencyInput from '../CurrencyInput';

export default {
  title: 'CurrencyInput',
  component: CurrencyInput,
  argTypes: { onChange: { action: 'onChange' } },
};

const Template = (args) => <CurrencyInput {...args} />;

export const Default = Template.bind({});
Default.args = { id: 'id', label: 'Label', name: 'name' };
