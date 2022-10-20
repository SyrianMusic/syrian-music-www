import { withStoryGrid } from '../../../.storybook/decorators';
import CurrencyInput from '../CurrencyInput';
import Label from '../Label';
import { getStoryTitle } from './utils';

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

export const HelperText = Template.bind({});
HelperText.args = { ...Default.args, helperText: 'Helper text' };

export const HelperTextAndError = Template.bind({});
HelperTextAndError.args = { ...Error.args, helperText: 'Helper text' };

export const All = () => (
  <>
    <div>
      <Label>Default</Label>
      <Default {...Default.args} />
    </div>
    <div>
      <Label>Empty</Label>
      <Empty {...Empty.args} />
    </div>
    <div className="pseudo-focus">
      <Label>Focus</Label>
      <Focus {...Focus.args} />
    </div>
    <div>
      <Label>Error</Label>
      <Error {...Error.args} />
    </div>
    <div>
      <Label>Disabled</Label>
      <Disabled {...Disabled.args} />
    </div>
    <div>
      <Label>Placeholder</Label>
      <Placeholder {...Placeholder.args} />
    </div>
  </>
);
All.decorators = [withStoryGrid];
