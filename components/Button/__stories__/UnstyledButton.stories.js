import { withStoryGrid } from '../../../.storybook/decorators';
import UnstyledButton from '../UnstyledButton';
import { getStoryTitle } from './utils';

export default {
  title: getStoryTitle('UnstyledButton'),
  component: UnstyledButton,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

const Template = (args) => <UnstyledButton {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Label' };

export const Hover = Template.bind({});
Hover.args = { ...Default.args, pseudo: { hover: true } };

export const Active = Template.bind({});
Active.args = { ...Default.args, pseudo: { active: true } };

export const Focus = Template.bind({});
Focus.args = { ...Default.args, pseudo: { focus: true } };

export const HoverFocus = Template.bind({});
HoverFocus.args = { ...Default.args, pseudo: { hover: true, focus: true } };

export const HoverActive = Template.bind({});
HoverActive.args = { ...Default.args, pseudo: { hover: true, active: true } };

export const FocusActive = Template.bind({});
FocusActive.args = Default.args;
FocusActive.parameters = { pseudo: { focus: true, active: true } };

export const HoverFocusActive = Template.bind({});
HoverFocusActive.args = { ...Default.args, pseudo: { hover: true, focus: true, active: true } };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };

export const All = () => (
  <>
    <div>
      <Default>Default</Default>
    </div>
    <div className="pseudo-hover">
      <Hover {...Hover.args}>Hover</Hover>
    </div>
    <div className="pseudo-focus">
      <Focus {...Focus.args}>Focus</Focus>
    </div>
    <div className="pseudo-active">
      <Active {...Active.args}>Active</Active>
    </div>
    <div className="pseudo-hover pseudo-focus">
      <HoverFocus {...HoverFocus.args}>Hover Focus</HoverFocus>
    </div>
    <div className="pseudo-hover pseudo-active">
      <HoverActive {...HoverActive.args}>Hover Active</HoverActive>
    </div>
    <div className="pseudo-focus pseudo-active">
      <FocusActive {...FocusActive.args}>Focus Active</FocusActive>
    </div>
    <div className="pseudo-hover pseudo-focus pseudo-active">
      <HoverFocusActive {...HoverFocusActive.args}>Hover Focus Active</HoverFocusActive>
    </div>
    <div>
      <Disabled {...Disabled.args}>Disabled</Disabled>
    </div>
  </>
);
All.decorators = [withStoryGrid];
