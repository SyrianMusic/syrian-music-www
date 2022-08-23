import jwt from 'jsonwebtoken';
import { handler as hello } from '../hello';

const CLIENT_SECRET = 'clientSecret';
jest.mock('../../../utils/environment', () => ({ jwtClientSecret: CLIENT_SECRET }));

const setupSuccessResponse = async () => {
  const token = jwt.sign({}, CLIENT_SECRET);
  return await hello({ headers: { authorization: `Bearer ${token}` } });
};

describe('hello', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('when given a valid JWT token, then it returns a 200 status code', async () => {
    const res = await setupSuccessResponse();
    expect(res.statusCode).toBe(200);
  });

  it('when given a valid JWT token, then it returns a message', async () => {
    const res = await setupSuccessResponse();
    const { message } = JSON.parse(res.body);
    expect(message).toBe('Hello World');
  });

  it('when not given a JWT token, then it returns a 401 status code', async () => {
    const res = await hello();
    expect(res.statusCode).toBe(401);
  });

  it('when given an invalid JWT token, then it returns a 401 status code', async () => {
    const token = jwt.sign({}, 'invalidClientSecret');
    const res = await hello({ headers: { authorization: `Bearer ${token}` } });
    expect(res.statusCode).toBe(401);
  });
});
