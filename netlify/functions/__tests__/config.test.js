import jwt from 'jsonwebtoken';
import { handler as config } from '../config';

const CLIENT_SECRET = 'clientSecret';
const STRIPE_PUBLISHABLE_KEY = 'stripePublishableKey';

jest.mock('../../utils/environment', () => ({
  jwtClientSecret: CLIENT_SECRET,
  stripePublishableKey: STRIPE_PUBLISHABLE_KEY,
}));

const setupSuccessResponse = async () => {
  const token = jwt.sign({}, CLIENT_SECRET);
  return await config({ headers: { authorization: `Bearer ${token}` }, httpMethod: 'GET' });
};

describe('config', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('when requested using any other HTTP method but GET, then it returns a 405 status code', async () => {
    const res = await config({ httpMethod: 'POST' });
    expect(res.statusCode).toBe(405);
  });

  it('when given a valid JWT token, then it returns a 200 status code', async () => {
    const res = await setupSuccessResponse();
    expect(res.statusCode).toBe(200);
  });

  it('when given a valid JWT token, then it returns the Stripe publishable key', async () => {
    const res = await setupSuccessResponse();
    const { stripePublishableKey } = JSON.parse(res.body);
    expect(stripePublishableKey).toBe(STRIPE_PUBLISHABLE_KEY);
  });

  it('when not given a JWT token, then it returns a 401 status code', async () => {
    const res = await config({ httpMethod: 'GET' });
    expect(res.statusCode).toBe(401);
  });

  it('when given an invalid JWT token, then it returns a 401 status code', async () => {
    const token = jwt.sign({}, 'invalidClientSecret');
    const res = await config({ headers: { authorization: `Bearer ${token}` }, httpMethod: 'GET' });
    expect(res.statusCode).toBe(401);
  });
});
