import { emptyEventCollection, Event, EventCollection } from '../../../__fixtures__/Event';
import App from '../../_app.page';
import { pageParameters } from '../../__stories__/config';
import PerformancePage from '../PerformancePage';
import { pastEvents, upcomingEvents } from '../__fixtures__/events';
import { PAGE_PATH } from './config';

export default {
  title: PAGE_PATH,
  component: PerformancePage,
  excludeStories: ['Template'],
  parameters: pageParameters,
};

export const Template = (args) => <App Component={PerformancePage} pageProps={args} />;

export const Default = Template.bind({});
Default.args = {
  upcomingEvents: new EventCollection({
    events: [new Event(upcomingEvents[0])],
  }),
  pastEvents: new EventCollection({
    events: pastEvents.map((event) => new Event(event)),
  }),
};

export const NoEvents = Template.bind({});
NoEvents.args = {
  ...Default.args,
  upcomingEvents: emptyEventCollection,
  pastEvents: emptyEventCollection,
};

export const NoUpcomingEvents = Template.bind({});
NoUpcomingEvents.args = {
  ...Default.args,
  upcomingEvents: emptyEventCollection,
};

export const NoPastEvents = Template.bind({});
NoPastEvents.args = {
  ...Default.args,
  pastEvents: emptyEventCollection,
};
