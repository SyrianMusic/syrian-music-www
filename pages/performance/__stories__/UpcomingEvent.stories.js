import UpcomingEvent from '../UpcomingEvent';
import { Event, EventCollection } from '../../../__fixtures__/Event';
import {
  Template as PerformancePageTemplate,
  Default as PerformancePageDefault,
} from './PerformancePage.stories';
import { PAGE_PATH } from './config';

export default {
  title: PAGE_PATH + '/UpcomingEvent',
  component: UpcomingEvent,
  argTypes: {
    className: {
      control: { type: null },
    },
  },
};

const Template = (args) => {
  const pageArgs = {
    ...PerformancePageDefault.args,
    upcomingEvents: new EventCollection({
      events: [new Event(args.event)],
    }),
  };
  return <PerformancePageTemplate {...pageArgs} />;
};

export const Default = Template.bind({});
Default.args = {
  event: {
    image: {
      width: 432,
      height: 287,
      url: 'https://via.placeholder.com/432x287',
    },
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
      url: 'https://via.placeholder.com/432x688',
    },
  },
};

export const NoLocation = Template.bind({});
NoLocation.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    location: null,
  },
};

export const NoSummary = Template.bind({});
NoSummary.args = {
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

const getLongSummary = () => {
  const defaultSummary = new Event().summary;
  return {
    ...defaultSummary,
    json: {
      ...defaultSummary.json,
      content: [
        ...defaultSummary.json.content,
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
    },
  };
};

export const LongSummary = Template.bind({});
LongSummary.args = {
  ...Default.args,
  event: {
    ...Default.args.event,
    summary: getLongSummary(),
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
