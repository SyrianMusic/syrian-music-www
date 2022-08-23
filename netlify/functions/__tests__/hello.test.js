import { handler as hello } from '../hello';

describe('hello', () => {
  it('returns a 200 status code', async () => {
    const res = await hello();
    expect(res.statusCode).toBe(200);
  });

  it('returns a message', async () => {
    const res = await hello();
    const { message } = JSON.parse(res.body);
    expect(message).toBe('Hello World');
  });
});
