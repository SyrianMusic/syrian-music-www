import { DonatePage } from './DonatePage';
import App from '../_app.page';

export default {
  title: 'Pages/Donate',
  component: DonatePage,
};

const Template = (args) => <App Component={DonatePage} pageProps={args} />;

export const Default = Template.bind({});
Default.args = {
  stripeKey: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
};
