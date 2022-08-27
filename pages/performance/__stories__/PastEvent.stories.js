import { Event, EventCollection } from '../../../__fixtures__/Event';
import PastEvent from '../PastEvent';
import { pastEvents } from '../__fixtures__/events';
import { PAGE_PATH } from './config';
import { Default as PageDefault, Template as PageTemplate } from './PerformancePage.stories';

export default {
  title: PAGE_PATH + '/PastEvent',
  component: PastEvent,
  excludeStories: ['pastEvents'],
  argTypes: {
    className: {
      control: { type: null },
    },
  },
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

export const Default = Template.bind({});
Default.args = {
  events: pastEvents.slice(0, 1),
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
