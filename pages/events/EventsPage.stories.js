import { EventsPage } from './EventsPage';
import App from '../_app.page';
import { data } from './Events.fixture.json';

export default {
  title: 'Pages/Events',
  component: EventsPage,
};

const Template = (args) => <App Component={EventsPage} pageProps={args} />;

export const Default = Template.bind({});
Default.args = {
  content: data.events.content.json,
};
