import { Event, EventCollection, getDateRange } from '../../../__fixtures__/';
import { pageParameters } from '../../__stories__/config';
import PastEvent from '../EventsPage/PastEvent';
import { pastEvents } from '../__fixtures__/events';
import { PAGE_PATH } from './config';
import { Default as PageDefault, Template as PageTemplate } from './EventsPage.stories';

export default {
  title: PAGE_PATH + '/PastEvent',
  component: PastEvent,
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
    pastEvents: new EventCollection({
      events: args.events.map((event) => new Event(event)),
    }),
  };
  return <PageTemplate {...pageArgs} />;
};

const defaultEvent = pastEvents[0];

export const Default = Template.bind({});
Default.args = {
  events: [defaultEvent],
};

export const MultipleEvents2 = Template.bind({});
MultipleEvents2.args = {
  ...Default.args,
  events: pastEvents.slice(0, 2),
};

export const MultipleEvents3 = Template.bind({});
MultipleEvents3.args = {
  ...Default.args,
  events: pastEvents,
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  ...Default.args,
  events: [
    { ...pastEvents[0], name: 'This event title is very long and will span multiple rows' },
    ...pastEvents,
  ],
};

export const LongLocation = Template.bind({});
LongLocation.args = {
  ...Default.args,
  events: [
    { ...pastEvents[0], location: 'This event location is very long and will span multiple rows' },
    ...pastEvents,
  ],
};

export const DateRange = Template.bind({});
DateRange.args = {
  ...Default.args,
  events: [{ ...defaultEvent, ...getDateRange({ past: true }) }],
};

export const DateRangeSameYear = Template.bind({});
DateRangeSameYear.args = {
  ...Default.args,
  events: [{ ...defaultEvent, ...getDateRange({ same: 'year', past: true }) }],
};

export const DateRangeSameMonth = Template.bind({});
DateRangeSameMonth.args = {
  ...Default.args,
  events: [{ ...defaultEvent, ...getDateRange({ same: 'month', past: true }) }],
};

export const DateRangeSameDay = Template.bind({});
DateRangeSameDay.args = {
  ...Default.args,
  events: [{ ...defaultEvent, ...getDateRange({ same: 'day', past: true }) }],
};

export const DateRangeSameDayPeriod = Template.bind({});
DateRangeSameDayPeriod.storyName = 'Date Range Same AM/PM';
DateRangeSameDayPeriod.args = {
  ...Default.args,
  events: [{ ...defaultEvent, ...getDateRange({ same: 'dayPeriod', past: true }) }],
};
