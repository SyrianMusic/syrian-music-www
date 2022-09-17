import { stripePublishableKey } from '../../utils/environment';
import { validAuthHeaders, testAuth } from '../../utils/__helpers__/auth';
import { handler as config } from '../config';

const Request = ({ httpMethod = 'GET' } = {}) => ({
  headers: validAuthHeaders,
  httpMethod,
});

describe('config', () => {
  it('it returns the Stripe publishable key', async () => {
    const req = Request();
    const res = await config(req);
    const actual = JSON.parse(res.body);
    expect(actual.stripePublishableKey).toBe(stripePublishableKey);
  });

  it('it returns a 200 status code', async () => {
    const req = Request();
    const res = await config(req);
    expect(res.statusCode).toBe(200);
  });

  it('when HTTP method is not GET, then it returns a 405 status code', async () => {
    const req = Request({ httpMethod: 'POST' });
    const res = await config(req);
    expect(res.statusCode).toBe(405);
  });

  testAuth(config, Request());
});
