import { CaretIcon } from './Caret';

export default {
  title: 'Icons/Caret',
  component: CaretIcon,
  argTypes: {
    className: {
      control: { type: null },
    },
    color: {
      control: {
        type: 'select',
        defaultValue: CaretIcon.defaultProps.color,
        options: Object.keys(CaretIcon.colors).reduce((acc, curr) => {
          return { ...acc, [curr]: curr };
        }, {}),
      },
    },
  },
};

const Template = (args) => <CaretIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ColorPrimary = Template.bind({});
ColorPrimary.storyName = 'Color: Primary';
ColorPrimary.args = {
  color: 'primary',
};

export const ColorAccentTan = Template.bind({});
ColorAccentTan.storyName = 'Color: Accent Tan';
ColorAccentTan.args = {
  color: 'accentTan',
};
