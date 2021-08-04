import { Event } from '../Event';
import eventImage1x from './event-image.png';
import eventImage2x from './event-image@2x.png';
import eventImage3x from './event-image@3x.png';
import eventImagePortrait1x from './event-image-portrait.png';
import eventImagePortrait2x from './event-image-portrait@2x.png';
import eventImagePortrait3x from './event-image-portrait@3x.png';

export default {
  title: 'Event',
  component: Event,
  argTypes: {
    className: {
      control: { type: null },
    },
    image: {
      defaultValue: {
        src: eventImage1x,
        srcSet: [
          {
            densityFactor: 2,
            src: eventImage2x,
          },
          {
            densityFactor: 3,
            src: eventImage3x,
          },
        ],
      },
    },
    title: {
      defaultValue: 'World Refugee Day',
    },
    description: {
      defaultValue:
        'A community festival featuring the stories and culture of refugees and immigrants of New York.',
    },
    date: {
      defaultValue: new Date(Date.UTC(2020, 5, 20, 4)),
    },
    cta: {
      defaultValue: {
        text: 'Get tickets',
        href: '#',
      },
    },
  },
};

const Template = (args) => <Event {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ImagePortrait = Template.bind({});
ImagePortrait.storyName = 'Image: Portrait';
ImagePortrait.args = {
  image: {
    src: eventImagePortrait1x,
    srcSet: [
      {
        densityFactor: 2,
        src: eventImagePortrait2x,
      },
      {
        densityFactor: 3,
        src: eventImagePortrait3x,
      },
    ],
  },
};

export const Slug = Template.bind({});
Slug.args = {
  slug: 'Online Event',
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  description: undefined,
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac arcu eu ante facilisis varius. Vivamus diam ligula, pulvinar vitae hendrerit a, imperdiet vel lorem. Integer et eros sapien. Sed ullamcorper ante odio, vel imperdiet nisi feugiat in. Sed mattis eros convallis est auctor dapibus. Nam malesuada dictum pulvinar. Fusce porttitor venenatis eleifend. Aenean blandit placerat dignissim. Vivamus sed felis consequat, eleifend dui placerat, mollis lorem. Mauris non vestibulum lacus, et porttitor risus. Nam sollicitudin ex sed libero dignissim commodo. Phasellus at velit nibh. Integer varius vitae lorem non cursus. Nullam ut metus purus. Vivamus a facilisis urna, ut mattis sapien.',
};

export const DateAM = Template.bind({});
DateAM.storyName = 'Date: AM';
DateAM.args = {
  date: new Date(Date.UTC(2020, 5, 20, 12)),
};

export const DatePM = Template.bind({});
DatePM.storyName = 'Date: PM';
DatePM.args = {
  date: new Date(Date.UTC(2020, 5, 21, 0)),
};

export const DateMidnight = Template.bind({});
DateMidnight.storyName = 'Date: Midnight';
DateMidnight.args = {
  date: new Date(Date.UTC(2020, 5, 20, 4)),
};
