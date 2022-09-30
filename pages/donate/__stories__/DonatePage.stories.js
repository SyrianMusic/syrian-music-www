import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import App from '../../_app.page';
import { pageParameters } from '../../__stories__/config';
import DonatePage from '../DonatePage';

export default {
  title: 'Pages/Donate',
  component: DonatePage,
  parameters: pageParameters,
};

const Template = (args) => <App Component={DonatePage} pageProps={args} />;

export const Default = Template.bind({});
Default.args = {
  CardElement: () => <div>Card Element</div>,
  // TODO: This isn't working as expected
  submitPayment: action('submitPayment')({ paymentIntent: {} }),
};

const fillInputs = async (canvas) => {
  await userEvent.type(canvas.getByLabelText('Your Email'), 'info@syrianmusic.org');
  await userEvent.type(canvas.getByLabelText('Your Contribution'), '1000');
};

export const Filled = Template.bind({});
Filled.args = Default.args;
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  fillInputs(canvas);
};

export const InputErrors = Template.bind({});
InputErrors.args = Default.args;
InputErrors.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByLabelText('Your Email'), 'info@syrianmusic.');
  await userEvent.type(canvas.getByLabelText('Your Contribution'), '1000');
  await userEvent.clear(canvas.getByLabelText('Your Contribution'));
  await userEvent.tab({ shift: true });
  await userEvent.tab({ shift: true });
  await waitFor(() => expect(canvas.queryByText('Please fill out this field.')).toBe(true));
};

// TODO: This is causing Chromatic to fail
// export const Success = Template.bind({});
// Success.args = Default.args;
// Success.play = async ({ args, canvasElement }) => {
//   const canvas = within(canvasElement);

//   fillInputs(canvas);

//   await userEvent.click(canvas.getByText('Donate'));
//   await waitFor(() => expect(args.submitPayment).toHaveBeenCalled());
// };

// TODO: This is causing Chromatic to fail
// export const Error = Template.bind({});
// Error.args = {
//   ...Default.args,
//   submitPayment: action('submitPayment')({ error: { message: 'Error message' } }),
// };
// Error.play = async ({ args, canvasElement }) => {
//   const canvas = within(canvasElement);

//   fillInputs(canvas);

//   await userEvent.click(canvas.getByText('Donate'));
//   await waitFor(() => expect(args.submitPayment).toHaveBeenCalled());
// };
