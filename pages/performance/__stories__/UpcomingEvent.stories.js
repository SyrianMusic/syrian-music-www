import faker from '../../../utils/faker';
import { today } from '../../../__fixtures__';
import {
  Event,
  EventCollection,
  quenchTheThirsty,
  syrianOrnaments,
} from '../../../__fixtures__/Event';
import { pageParameters } from '../../__stories__/config';
import UpcomingEvent from '../UpcomingEvent';
import { PAGE_PATH } from './config';
import { Default as PageDefault, Template as PageTemplate } from './PerformancePage.stories';

export default {
  title: PAGE_PATH + '/UpcomingEvent',
  component: UpcomingEvent,
  argTypes: {
    className: {
      control: { type: null },
    },
  },
  parameters: pageParameters,
};

const Template = (args) => {
  const pageArgs = {
    ...PageDefault.args,
    upcomingEvents: new EventCollection({
      events: args.events.map((event) => new Event(event)),
    }),
  };
  return <PageTemplate {...pageArgs} />;
};

const startDate1 = faker.date.future(undefined, today);
const startDate2 = faker.date.future(undefined, startDate1);
const startDate3 = faker.date.future(undefined, startDate2);

export const Default = Template.bind({});
Default.args = {
  events: [
    {
      ...syrianOrnaments,
      startDate: startDate1.toISOString(),
      image: {
        width: 704,
        height: 352,
        url: 'https://via.placeholder.com/704x352',
      },
    },
  ],
};

export const MultipleEvents2 = Template.bind({});
MultipleEvents2.args = {
  ...Default.args,
  events: [...Default.args.events, { ...quenchTheThirsty, startDate: startDate2.toISOString() }],
};

export const MultipleEvents3 = Template.bind({});
MultipleEvents3.args = {
  ...MultipleEvents2.args,
  events: [
    ...MultipleEvents2.args.events,
    { ...quenchTheThirsty, name: 'Another Event', startDate: startDate3.toISOString() },
  ],
};

export const ImagePortrait = Template.bind({});
ImagePortrait.storyName = 'Image: Portrait';
ImagePortrait.args = {
  ...Default.args,
  events: [
    {
      ...Default.args.events[0],
      image: {
        width: 352,
        height: 704,
        url: 'https://via.placeholder.com/352x704',
      },
    },
  ],
};

export const NoLocation = Template.bind({});
NoLocation.args = {
  ...Default.args,
  events: [
    {
      ...Default.args.events[0],
      location: null,
    },
  ],
};

export const NoSummary = Template.bind({});
NoSummary.args = {
  ...Default.args,
  events: [
    {
      ...Default.args.events[0],
      summary: {
        json: {
          data: {},
          content: [],
          nodeType: 'document',
        },
      },
    },
  ],
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
  events: [
    {
      ...Default.args.events[0],
      summary: getLongSummary(),
    },
  ],
};

export const DateAM = Template.bind({});
DateAM.storyName = 'Date: AM';
DateAM.args = {
  ...Default.args,
  events: [
    {
      ...Default.args.events[0],
      startDate: new Date(
        startDate1.getFullYear(),
        startDate1.getMonth(),
        startDate1.getDate(),
        8,
      ).toISOString(),
    },
  ],
};

export const DatePM = Template.bind({});
DatePM.storyName = 'Date: PM';
DatePM.args = {
  ...Default.args,
  events: [
    {
      ...Default.args.events[0],
      startDate: new Date(
        startDate1.getFullYear(),
        startDate1.getMonth(),
        startDate1.getDate(),
        8 + 12,
      ).toISOString(),
    },
  ],
};

export const DateMidnight = Template.bind({});
DateMidnight.storyName = 'Date: Midnight';
DateMidnight.args = {
  ...Default.args,
  events: [
    {
      ...Default.args.events[0],
      startDate: new Date(
        startDate1.getFullYear(),
        startDate1.getMonth(),
        startDate1.getDate(),
        0,
      ).toISOString(),
    },
  ],
};
