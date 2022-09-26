import Button from '../Button';
import './grid.css';

export default {
  title: 'Button',
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

export const HoverFocusActive = Template.bind({});
HoverFocusActive.args = { ...Default.args, pseudo: { hover: true, focus: true, active: true } };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };
