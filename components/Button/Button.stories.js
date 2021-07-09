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

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};
Primary.argTypess = {
  color: { control: { type: null } },
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  color: 'primary',
  disabled: true,
};
PrimaryDisabled.argTypes = {
  color: { control: { type: null } },
  disabled: { control: { type: null } },
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
Secondary.argTypess = {
  color: { control: { type: null } },
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  color: 'secondary',
  disabled: true,
};
SecondaryDisabled.argTypes = {
  color: { control: { type: null } },
  disabled: { control: { type: null } },
};

export const FilledPrimary = Template.bind({});
FilledPrimary.args = {
  color: 'primary',
  variant: 'filled',
};
FilledPrimary.argTypes = {
  color: { control: { type: null } },
  variant: { control: { type: null } },
};

export const FilledPrimaryDisabled = Template.bind({});
FilledPrimaryDisabled.args = {
  color: 'primary',
  disabled: true,
  variant: 'filled',
};
FilledPrimaryDisabled.argTypes = {
  color: { control: { type: null } },
  disabled: { control: { type: null } },
  variant: { control: { type: null } },
};

export const FilledSecondary = Template.bind({});
FilledSecondary.args = {
  color: 'secondary',
  variant: 'filled',
};
FilledSecondary.argTypes = {
  color: { control: { type: null } },
  variant: { control: { type: null } },
};

export const FilledSecondaryDisabled = Template.bind({});
FilledSecondaryDisabled.args = {
  color: 'secondary',
  disabled: true,
  variant: 'filled',
};
FilledSecondaryDisabled.argTypes = {
  color: { control: { type: null } },
  disabled: { control: { type: null } },
  variant: { control: { type: null } },
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  color: 'primary',
  variant: 'outlined',
};
OutlinedPrimary.argTypes = {
  color: { control: { type: null } },
  variant: { control: { type: null } },
};

export const OutlinedPrimaryDisabled = Template.bind({});
OutlinedPrimaryDisabled.args = {
  color: 'primary',
  disabled: true,
  variant: 'outlined',
};
OutlinedPrimaryDisabled.argTypes = {
  color: { control: { type: null } },
  disabled: { control: { type: null } },
  variant: { control: { type: null } },
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  color: 'secondary',
  variant: 'outlined',
};
OutlinedSecondary.argTypes = {
  color: { control: { type: null } },
  variant: { control: { type: null } },
};

export const OutlinedSecondaryDisabled = Template.bind({});
OutlinedSecondaryDisabled.args = {
  color: 'secondary',
  disabled: true,
  variant: 'outlined',
};
OutlinedSecondaryDisabled.argTypes = {
  color: { control: { type: null } },
  disabled: { control: { type: null } },
  variant: { control: { type: null } },
};
