import { withAuth } from '../auth';
import { invalidAuthHeaders, validAuthHeaders } from '../__helpers__/auth';

describe('withAuth', () => {
  it('when called with a valid authorization header, then it calls the handler', async () => {
    const handler = jest.fn();
    await withAuth(handler)({ headers: validAuthHeaders });
    expect(handler).toHaveBeenCalled();
  });

  it('when called with an invalid authorization header, then it does not call the handler', async () => {
    const handler = jest.fn();
    await withAuth(handler)({ headers: invalidAuthHeaders });
    expect(handler).not.toHaveBeenCalled();
  });

  it('when called without an authorization header, then it does not call the handler', async () => {
    const handler = jest.fn();
    await withAuth(jest.fn())({ headers: {} });
    expect(handler).not.toHaveBeenCalled();
  });

  it('when called with an invalid authorization header, then it returns a 401 status code', async () => {
    const res = await withAuth(jest.fn())({ headers: invalidAuthHeaders });
    expect(res.statusCode).toBe(401);
  });

  it('when called without an authorization header, then it returns a 401 status code', async () => {
    const res = await withAuth(jest.fn())({ headers: {} });
    expect(res.statusCode).toBe(401);
  });
});
