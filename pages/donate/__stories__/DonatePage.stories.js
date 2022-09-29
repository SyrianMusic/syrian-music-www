import App from '../../_app.page';
import { pageParameters } from '../../__stories__/config';
import DonatePage from '../DonatePage';

export default {
  title: 'Pages/Donate',
  component: DonatePage,
  parameters: pageParameters,
  argTypes: { submitPayment: { action: 'submitPayment' } },
};

const Template = (args) => {
  return <App Component={DonatePage} pageProps={{ ...args }} />;
};

export const Default = Template.bind({});
Default.args = {
  CardElement: () => <div>Card Element</div>,
};
