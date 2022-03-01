import { Event, EventCollection } from '../../../__fixtures__/Event';
import App from '../../_app.page';
import PerformancePage from '../PerformancePage';
import { PAGE_PATH } from './config';
import { Default as UpcomingEvent } from './UpcomingEvent.stories';

export default {
  title: PAGE_PATH,
  component: PerformancePage,
  excludeStories: ['Template'],
};

export const Template = (args) => {
  return <App Component={PerformancePage} pageProps={args} />;
};

export const Default = Template.bind({});
Default.args = {
  upcomingEvents: new EventCollection({
    events: [new Event(UpcomingEvent.args.event)],
  }),
};
