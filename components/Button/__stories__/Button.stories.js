import { Button } from '../Button';
import { argTypes, decorators, parameters, storybookBasePath } from './config';

export default {
  title: storybookBasePath + 'Button',
  component: Button,
  argTypes,
  decorators,
  parameters,
};

const Template = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.argTypes = {};

export const Default = Template.bind({});
Default.args = {};

export const Hover = Template.bind({});
Hover.args = { ...Default.args };
Hover.parameters = { pseudo: { hover: true } };

export const Focus = Template.bind({});
Focus.args = { ...Default.args };
Focus.parameters = { pseudo: { focus: true } };

export const Active = Template.bind({});
Active.args = { ...Default.args };
Active.parameters = { pseudo: { active: true } };

export const AllStates = Template.bind({});
AllStates.args = { ...Default.args };
AllStates.parameters = { pseudo: { active: true, focus: true, hover: true } };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };
