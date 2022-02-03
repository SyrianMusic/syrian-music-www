import { getNextEvent } from '../utils';

describe('getNextEvent', () => {
  const today = new Date(1900, 1, 2);

  jest.spyOn(global.Date, 'now');
  global.Date.now.mockReturnValue(today.valueOf());

  beforeEach(() => {
    global.Date.now.mockClear();
  });

  afterAll(() => {
    global.Date.now.mockRestore();
  });

  it('filters out past events', () => {
    const pastEvent = new Date(1900, 1, 1);
    const nextEvent = getNextEvent([pastEvent]);
    expect(nextEvent).toBe(null);
  });

  it('returns the next event', () => {
    const nextEvent = { date: new Date(1900, 1, 4) };
    const laterEvent = { date: new Date(1900, 1, 5) };
    expect(getNextEvent([laterEvent, nextEvent])).toBe(nextEvent);
  });
});
