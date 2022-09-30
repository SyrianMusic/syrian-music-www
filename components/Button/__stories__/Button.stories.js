import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { waitFor } from '@testing-library/react';
import { withStoryGrid } from '../../../.storybook/decorators';
import Button from '../Button';
import { getStoryTitle } from './utils';

export default {
  title: getStoryTitle('Button'),
  component: Button,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Label' };

export const Clicked = Template.bind({});
Clicked.args = Default.args;
Clicked.argTypes = { onClick: { action: true } };
Clicked.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};

export const Hover = Template.bind({});
Hover.args = Default.args;
Hover.parameters = { pseudo: { hover: true } };

export const Active = Template.bind({});
Active.args = Default.args;
Active.parameters = { pseudo: { active: true } };

export const Focus = Template.bind({});
Focus.args = Default.args;
Focus.parameters = { pseudo: { focus: true } };

export const HoverFocus = Template.bind({});
HoverFocus.args = Default.args;
HoverFocus.parameters = { pseudo: { hover: true, focus: true } };

export const HoverActive = Template.bind({});
HoverActive.args = Default.args;
HoverActive.parameters = { pseudo: { hover: true, active: true } };

export const FocusActive = Template.bind({});
FocusActive.args = Default.args;
FocusActive.parameters = { pseudo: { focus: true, active: true } };

export const HoverFocusActive = Template.bind({});
HoverFocusActive.args = Default.args;
HoverFocusActive.parameters = { pseudo: { hover: true, focus: true, active: true } };

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
