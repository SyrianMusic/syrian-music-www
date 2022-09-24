import faker from '../../../utils/faker';
import stripe from '../../utils/stripe';
import { testAuth, validAuthHeaders } from '../../utils/__helpers__/auth';
import { handler as createPaymentIntent } from '../create-payment-intent';
import StripeAuthenticationError from '../__fixtures__/StripeAuthenticationError';
import StripeInvalidRequestError from '../__fixtures__/StripeInvalidRequestError';

jest.mock('../../utils/logger');
jest.mock('../../utils/stripe');

const Request = ({ httpMethod = 'POST', body = {} } = {}) => {
  const { amount = faker.finance.amount(0.5), idempotencyKey } = body;

  return {
    headers: validAuthHeaders,
    httpMethod,
    body: JSON.stringify({ amount, idempotencyKey }),
  };
};

describe('create-payment-intent', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('responds with the Stripe client secret', async () => {
    const req = Request();
    const mockClientSecret = faker.datatype.uuid();
    stripe.paymentIntents.create.mockResolvedValue({ client_secret: mockClientSecret });

    const res = await createPaymentIntent(req);

    expect(res.statusCode).toBe(200);
    const { clientSecret } = JSON.parse(res.body);
    expect(clientSecret).toBe(mockClientSecret);
  });

  it('multiplies the amount by 100', async () => {
    const amount = 50;
    const req = Request({ body: { amount } });

    await createPaymentIntent(req);

    expect(stripe.paymentIntents.create).toHaveBeenCalledWith(
      expect.objectContaining({ amount: 5000 }),
      expect.anything(),
    );
  });

  it('sends the idempotency key as an option', async () => {
    const idempotencyKey = faker.datatype.uuid();
    const req = Request({ body: { idempotencyKey } });

    await createPaymentIntent(req);

    expect(stripe.paymentIntents.create).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ idempotencyKey }),
    );
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
    stripe.paymentIntents.create.mockRejectedValue(StripeAuthenticationError);

    const res = await createPaymentIntent(req);

    expect(res.statusCode).toBe(401);
    const { error } = JSON.parse(res.body);
    expect(error.message).toBe('The Stripe secret key is not set in this environment.');
  });

  testAuth(createPaymentIntent, Request());
});
