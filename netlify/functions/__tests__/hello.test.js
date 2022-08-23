import { handler as hello } from '../hello';

const setupSuccessResponse = async () => {
  const token = 'token';
  return await hello({ headers: { Authorization: `Bearer ${token}` } });
};

describe('hello', () => {
  it('when passed a valid JWT token, then it returns a 200 status code', async () => {
    const res = await setupSuccessResponse();
    expect(res.statusCode).toBe(200);
  });

  it('when passed a valid JWT token, then it returns a message', async () => {
    const res = await setupSuccessResponse();
    const { message } = JSON.parse(res.body);
    expect(message).toBe('Hello World');
  });

  it('when not passed a JWT token, then it returns a 401 status code', async () => {
    const res = await hello();
    expect(res.statusCode).toBe(401);
  });
});
