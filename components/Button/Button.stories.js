import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: { type: null },
    },
    children: {
      defaultValue: 'Children',
      control: { type: 'text' },
    },
    color: {
      control: { type: 'radio', options: Button.colors },
    },
    onClick: {
      control: { type: null },
    },
    variant: {
      control: { type: 'radio', options: Button.variants },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const White = Template.bind({});
White.args = {
  color: 'white',
};
White.argTypess = {
  color: { control: { type: null } },
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};
Outlined.argTypes = {
  variant: { control: { type: null } },
};

export const OutlinedWhite = Template.bind({});
OutlinedWhite.args = {
  color: 'white',
  variant: 'outlined',
};
OutlinedWhite.argTypes = {
  color: { control: { type: null } },
  variant: { control: { type: null } },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.argTypes = {
  disabled: { control: { type: null } },
};

export const DisabledWhite = Template.bind({});
DisabledWhite.args = {
  color: 'white',
  disabled: true,
};
DisabledWhite.argTypes = {
  color: { control: { type: null } },
  disabled: { control: { type: null } },
};

export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
  disabled: true,
  variant: 'outlined',
};
DisabledOutlined.argTypes = {
  disabled: { control: { type: null } },
  variant: { control: { type: null } },
};

export const DisabledOutlinedWhite = Template.bind({});
DisabledOutlinedWhite.args = {
  color: 'white',
  disabled: true,
  variant: 'outlined',
};
DisabledOutlinedWhite.argTypes = {
  color: { control: { type: null } },
  disabled: { control: { type: null } },
  variant: { control: { type: null } },
};
