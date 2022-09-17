import faker from '../../../utils/faker';
import stripe from '../../utils/stripe';
import { testAuth, validAuthHeaders } from '../../utils/__helpers__/auth';
import { handler as createPaymentIntent } from '../create-payment-intent';
import StripeAuthenticationError from '../__fixtures__/StripeAuthenticationError';
import StripeInvalidRequestError from '../__fixtures__/StripeInvalidRequestError';

jest.mock('../../utils/logger');
jest.mock('../../utils/stripe');

const Request = ({ httpMethod = 'POST', body = { amount: 0.5 } } = {}) => ({
  headers: validAuthHeaders,
  httpMethod,
  body: JSON.stringify(body),
});

describe('create-payment-intent', () => {
  it('responds with the Stripe client secret', async () => {
    const req = Request();
    const mockClientSecret = faker.datatype.uuid();
    stripe.paymentIntents.create.mockResolvedValueOnce({ client_secret: mockClientSecret });

    const res = await createPaymentIntent(req);

    expect(res.statusCode).toBe(200);
    const { clientSecret } = JSON.parse(res.body);
    expect(clientSecret).toBe(mockClientSecret);
  });

  it('when the HTTP method is not POST, then it responds with an error', async () => {
    const req = Request({ httpMethod: 'GET' });

    const res = await createPaymentIntent(req);

    expect(res.statusCode).toBe(405);
  });

  it('when the request does not contain an amount, then it responds with an error', async () => {
    const req = Request({ body: { amount: null } });

    const res = await createPaymentIntent(req);

    expect(res.statusCode).toBe(400);
    const { error } = JSON.parse(res.body);
    expect(error.message).toBe('The request did not contain an amount.');
  });

  it('when the request contains an amount that is not a valid number, then it responds with an error', async () => {
    const req = Request({ body: { amount: [] } });

    const res = await createPaymentIntent(req);

    expect(res.statusCode).toBe(400);
    const { error } = JSON.parse(res.body);
    expect(error.message).toBe('The request did not contain a numeric amount.');
  });

  it('when the request contains an amount that is below $0.50, then it responds with an error', async () => {
    const req = Request({ body: { amount: 0.01 } });
    stripe.paymentIntents.create.mockImplementationOnce(({ amount }) => {
      if (amount < 50) {
        throw StripeInvalidRequestError;
      }
      return faker.datatype.uuid();
    });

    const res = await createPaymentIntent(req);

    expect(res.statusCode).toBe(400);
    const { error } = JSON.parse(res.body);
    expect(error.message).toBe('Amount must be at least $0.50 usd');
  });

  it('when the Stripe secret key is not set, then it responds with an error', async () => {
    const req = Request();
    stripe.paymentIntents.create.mockRejectedValueOnce(StripeAuthenticationError);

    const res = await createPaymentIntent(req);

    expect(res.statusCode).toBe(401);
    const { error } = JSON.parse(res.body);
    expect(error.message).toBe('The Stripe secret key is not set in this environment.');
  });

  testAuth(createPaymentIntent, Request());
});
