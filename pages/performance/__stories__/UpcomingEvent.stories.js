import UpcomingEvent from '../UpcomingEvent';
import eventImage3x from './event-image@3x.png';
import eventImagePortrait3x from './event-image-portrait@3x.png';

export default {
  title: 'UpcomingEvent',
  component: UpcomingEvent,
  argTypes: {
    className: {
      control: { type: null },
    },
  },
};

const Template = (args) => <UpcomingEvent {...args} />;

export const Default = Template.bind({});
Default.args = {
  event: {
    name: 'World Refugee Day',
    startDate: new Date(Date.UTC(2020, 5, 20, 4)).toISOString(),
    image: {
      width: 287,
      height: 432,
      url: eventImage3x,
    },
    summary: {
      json: {
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'A community festival featuring the stories and culture of refugees and immigrants of New York. ',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
    },
    url: '#',
  },
};

export const ImagePortrait = Template.bind({});
ImagePortrait.storyName = 'Image: Portrait';
ImagePortrait.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    image: {
      width: 432,
      height: 688,
      url: eventImagePortrait3x,
    },
  },
};

export const Location = Template.bind({});
Location.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    location: 'Online Event',
  },
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    summary: {
      json: {
        data: {},
        content: [],
        nodeType: 'document',
      },
    },
  },
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    summary: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac arcu eu ante facilisis varius. Vivamus diam ligula, pulvinar vitae hendrerit a, imperdiet vel lorem. Integer et eros sapien. Sed ullamcorper ante odio, vel imperdiet nisi feugiat in. Sed mattis eros convallis est auctor dapibus. Nam malesuada dictum pulvinar.\nFusce porttitor venenatis eleifend. Aenean blandit placerat dignissim. Vivamus sed felis consequat, eleifend dui placerat, mollis lorem. Mauris non vestibulum lacus, et porttitor risus. Nam sollicitudin ex sed libero dignissim commodo. Phasellus at velit nibh. Integer varius vitae lorem non cursus. Nullam ut metus purus. Vivamus a facilisis urna, ut mattis sapien.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
    },
  },
};

export const DateAM = Template.bind({});
DateAM.storyName = 'Date: AM';
DateAM.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    startDate: new Date(Date.UTC(2020, 5, 20, 12)),
  },
};

export const DatePM = Template.bind({});
DatePM.storyName = 'Date: PM';
DatePM.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    startDate: new Date(Date.UTC(2020, 5, 21, 0)),
  },
};

export const DateMidnight = Template.bind({});
DateMidnight.storyName = 'Date: Midnight';
DateMidnight.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    startDate: new Date(Date.UTC(2020, 5, 20, 4)),
  },
};
