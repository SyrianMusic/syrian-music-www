import jwt from 'jsonwebtoken';
import { jwtClientSecret } from '../__mocks__/environment';

const setAuthHeaders = (token) =>
  Object.freeze({
    authorization: `Bearer ${token}`,
  });

const validToken = jwt.sign({}, jwtClientSecret);
export const validAuthHeaders = setAuthHeaders(validToken);

const invalidToken = jwt.sign({}, 'invalidClientSecret');
export const invalidAuthHeaders = setAuthHeaders(invalidToken);

export const testAuth = (handler, options = {}) => {
  it('when called with an invalid authorization header, then it returns a 401 status code', async () => {
    const res = await handler({
      ...options,
      headers: { ...options.headers, ...invalidAuthHeaders },
    });
    expect(res.statusCode).toBe(401);
  });

  it('when called without an authorization header, then it returns a 401 status code', async () => {
    let headers;

    if (options?.headers) {
      headers = { ...options.headers };
      delete headers.authorization;
    }

    const res = await handler({ ...options, headers });
    expect(res.statusCode).toBe(401);
  });
};
