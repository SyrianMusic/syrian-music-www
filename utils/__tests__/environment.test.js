const NODE_ENVS = {
  PRODUCTION: 'production',
  PREVIEW: 'preview',
  DEVELOPMENT: 'development',
  TEST: 'test',
};

describe('environment', () => {
  let environment;
  let originalEnv;

  beforeAll(() => {
    originalEnv = process.env;
  });

  const testEnv = {
    ADOBE_KEY_SYRIANMUSIC: 'ADOBE_KEY_SYRIANMUSIC',
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

    it('sets adobeKey', () => {
      expect(environment.adobeKey).toBe(testEnv.ADOBE_KEY_SYRIANMUSIC);
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

    it('sets adobeKey', () => {
      expect(environment.adobeKey).toBe(testEnv.ADOBE_KEY_NETLIFY);
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

    it('sets adobeKey', () => {
      expect(environment.adobeKey).toBe(testEnv.ADOBE_KEY_SYRIANMUSIC);
    });

    it('sets stripeKey', () => {
      expect(environment.stripeKey).toBe(testEnv.STRIPE_KEY_TEST);
    });
  });

  describe("given NODE_ENV is 'test'", () => {
    beforeEach(() => {
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

    it('sets adobeKey', () => {
      expect(environment.adobeKey).toBe(null);
    });
  });

  describe('jwtClientSecret', () => {
    const JWT_CLIENT_SECRET = 'JWT_CLIENT_SECRET';

    it.each(Object.values(NODE_ENVS))(
      'when the NODE_ENV is "%s", then it is set to JWT_CLIENT_SECRET',
      (nodeEnv) => {
        process.env.JWT_CLIENT_SECRET = JWT_CLIENT_SECRET;
        process.env.NODE_ENV = nodeEnv;
        jest.isolateModules(() => {
          environment = require('../environment').default;
        });
        expect(environment.jwtClientSecret).toBe(JWT_CLIENT_SECRET);
      },
    );
  });
});
