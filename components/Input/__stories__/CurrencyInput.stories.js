import CurrencyInput from '../CurrencyInput';
import Label from '../Label';
import { getStoryTitle, InputGrid, InputStory } from './utils';

export default {
  title: getStoryTitle('CurrencyInput'),
  component: CurrencyInput,
  parameters: { layout: 'centered' },
};

const Template = (args) => <CurrencyInput {...args} />;

export const Default = Template.bind({});
Default.args = { defaultValue: '1234567.89' };

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
Placeholder.args = { ...Default.args, placeholder: '$100.00', defaultValue: null };

export const All = () => (
  <InputGrid>
    <InputStory>
      <Label>Default</Label>
      <Default {...Default.args} />
    </InputStory>
    <InputStory>
      <Label>Empty</Label>
      <Empty {...Empty.args} />
    </InputStory>
    <InputStory className="pseudo-focus">
      <Label>Focus</Label>
      <Focus {...Focus.args} />
    </InputStory>
    <InputStory>
      <Label>Error</Label>
      <Error {...Error.args} />
    </InputStory>
    <InputStory>
      <Label>Disabled</Label>
      <Disabled {...Disabled.args} />
    </InputStory>
    <InputStory>
      <Label>Placeholder</Label>
      <Placeholder {...Placeholder.args} />
    </InputStory>
  </InputGrid>
);
