import { validAuthHeaders, testAuth } from '../../utils/__helpers__/auth';
import { handler as subscribe } from '../subscribe';

const Request = ({ httpMethod = 'POST', body = {} } = {}) => {
  return {
    headers: validAuthHeaders,
    httpMethod,
    body: JSON.stringify(body),
  };
};

describe('subscribe', () => {
  it('when HTTP method is not POST, then it returns a 405 status code', async () => {
    const req = Request({ httpMethod: 'GET' });
    const res = await subscribe(req);
    expect(res.statusCode).toBe(405);
  });

  testAuth(subscribe, Request());
});
