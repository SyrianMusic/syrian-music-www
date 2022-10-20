import Input from '../Input';
import Label from '../Label';
import { getStoryTitle } from './utils';
import { withStoryGrid } from '../../../.storybook/decorators';

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
Error.args = { isTouched: true, required: true, error: 'Error message' };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const Placeholder = Template.bind({});
Placeholder.args = { ...Default.args, placeholder: 'Placeholder', defaultValue: null };

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
