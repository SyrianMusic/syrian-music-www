import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { waitFor } from '@testing-library/react';
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

export const All = () => (
  <div className="story-grid">
    <div>
      <Button>Default</Button>
    </div>
    <div className="pseudo-hover">
      <Button>Hover</Button>
    </div>
    <div className="pseudo-focus">
      <Button>Focus</Button>
    </div>
    <div className="pseudo-active">
      <Button>Active</Button>
    </div>
    <div className="pseudo-hover pseudo-focus">
      <Button>Hover Focus</Button>
    </div>
    <div className="pseudo-hover pseudo-active">
      <Button>Hover Active</Button>
    </div>
    <div className="pseudo-focus pseudo-active">
      <Button>Focus Active</Button>
    </div>
    <div className="pseudo-hover pseudo-focus pseudo-active">
      <Button>Hover Focus Active</Button>
    </div>
    <div className="disabled">
      <Button disabled>Disabled</Button>
    </div>
  </div>
);

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

export const HoverFocusActive = Template.bind({});
HoverFocusActive.args = Default.args;
HoverFocusActive.parameters = { pseudo: { hover: true, focus: true, active: true } };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };
