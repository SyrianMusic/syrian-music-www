import { Event } from '../../../__fixtures__/Event';
import App from '../../_app.page';
import EventsPage from '../EventsPage';

export default {
  title: 'Pages/Events',
  component: EventsPage,
};

const Template = (args) => <App Component={EventsPage} pageProps={args} />;

const defaultEvent = new Event();

export const Default = Template.bind({});
Default.args = {
  content: {
    ...defaultEvent.summary.json,
    content: [
      {
        nodeType: 'heading-3',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Heading 3',
            marks: [],
            data: {},
          },
        ],
      },
      ...defaultEvent.summary.json.content,
    ],
  },
};
