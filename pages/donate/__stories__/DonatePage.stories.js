import { pageParameters } from '../../__stories__/config';
import App from '../../_app.page';
import DonatePage from '../DonatePage';

export default {
  title: 'Pages/Donate',
  component: DonatePage,
  parameters: pageParameters,
  argTypes: { onChange: { action: 'change' }, onSubmit: { action: 'submit' } },
};

const Template = (args) => <App Component={DonatePage} pageProps={args} />;

export const Default = Template.bind({});
Default.args = {
  CardElement: () => <div>Card Element</div>,
};
