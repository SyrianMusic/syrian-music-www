describe('environment', () => {
  let environment;
  let originalEnv;

  beforeAll(() => {
    originalEnv = process.env;
  });

  const testEnv = {
    STRIPE_KEY_PRD: 'STRIPE_KEY_PRD',
    STRIPE_KEY_TEST: 'STRIPE_KEY_TEST',
  };

  beforeEach(() => {
    process.env = { ...originalEnv, ...testEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe("given NODE_ENV is 'production'", () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
      jest.isolateModules(() => {
        environment = require('../environment').default;
      });
    });

    it('sets the nodeEnv', () => {
      expect(environment.nodeEnv).toBe('production');
    });

    it('sets isProduction', () => {
      expect(environment.isProduction).toBe(true);
    });

    it('sets stripeKey', () => {
      expect(environment.stripeKey).toBe(testEnv.STRIPE_KEY_PRD);
    });
  });

  describe("given NODE_ENV is 'preview'", () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'preview';
      jest.isolateModules(() => {
        environment = require('../environment').default;
      });
    });

    it('sets the nodeEnv', () => {
      expect(environment.nodeEnv).toBe('preview');
    });

    it('sets isProduction', () => {
      expect(environment.isProduction).toBe(false);
    });

    it('sets stripeKey', () => {
      expect(environment.stripeKey).toBe(testEnv.STRIPE_KEY_TEST);
    });
  });

  describe("given NODE_ENV is 'development'", () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development';
      jest.isolateModules(() => {
        environment = require('../environment').default;
      });
    });

    it('sets the nodeEnv', () => {
      expect(environment.nodeEnv).toBe('development');
    });

    it('sets isProduction', () => {
      expect(environment.isProduction).toBe(false);
    });

    it('sets stripeKey', () => {
      expect(environment.stripeKey).toBe(testEnv.STRIPE_KEY_TEST);
    });
  });

  describe("given NODE_ENV is 'test'", () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'test';
      jest.isolateModules(() => {
        environment = require('../environment').default;
      });
    });

    it('sets the nodeEnv', () => {
      expect(environment.nodeEnv).toBe('test');
    });

    it('sets isProduction', () => {
      expect(environment.isProduction).toBe(false);
    });

    it('sets stripeKey', () => {
      expect(environment.stripeKey).toBe(testEnv.STRIPE_KEY_TEST);
    });
  });
});
