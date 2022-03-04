import { Event } from '../../../__fixtures__';
import App from '../../_app.page';
import EventPage from '../EventPage';

export default {
  title: 'Pages/Event',
  component: EventPage,
};

const Template = (args) => <App Component={EventPage} pageProps={args} />;

export const Default = Template.bind({});
Default.args = new Event();
