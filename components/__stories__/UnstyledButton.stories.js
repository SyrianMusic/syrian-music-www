import UnstyledButton from '../UnstyledButton';
import './grid.css';

export default {
  title: 'UnstyledButton',
  component: UnstyledButton,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
};

export const All = () => (
  <div className="story-grid">
    <div>
      <UnstyledButton>Default</UnstyledButton>
    </div>
    <div className="pseudo-hover">
      <UnstyledButton>Hover</UnstyledButton>
    </div>
    <div className="pseudo-focus">
      <UnstyledButton>Focus</UnstyledButton>
    </div>
    <div className="pseudo-active">
      <UnstyledButton>Active</UnstyledButton>
    </div>
    <div className="pseudo-hover pseudo-focus">
      <UnstyledButton>Hover Focus</UnstyledButton>
    </div>
    <div className="pseudo-hover pseudo-active">
      <UnstyledButton>Hover Active</UnstyledButton>
    </div>
    <div className="pseudo-focus pseudo-active">
      <UnstyledButton>Focus Active</UnstyledButton>
    </div>
    <div className="pseudo-hover pseudo-focus pseudo-active">
      <UnstyledButton>Hover Focus Active</UnstyledButton>
    </div>
    <div className="disabled">
      <UnstyledButton disabled>Disabled</UnstyledButton>
    </div>
  </div>
);

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

export const HoverFocusActive = Template.bind({});
HoverFocusActive.args = { ...Default.args, pseudo: { hover: true, focus: true, active: true } };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };
