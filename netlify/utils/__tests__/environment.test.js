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

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
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

  describe('stripePublishableKey', () => {
    const STRIPE_KEY_LIVE = 'STRIPE_KEY_LIVE';
    const STRIPE_KEY_TEST = 'STRIPE_KEY_TEST';

    const setupStripeEnvVars = () => {
      process.env.STRIPE_KEY_LIVE = STRIPE_KEY_LIVE;
      process.env.STRIPE_KEY_TEST = STRIPE_KEY_TEST;
    };

    it(`when the NODE_ENV is "${NODE_ENVS.PRODUCTION}", then it is set to STRIPE_KEY_LIVE`, () => {
      process.env.NODE_ENV = NODE_ENVS.PRODUCTION;
      setupStripeEnvVars();
      jest.isolateModules(() => {
        environment = require('../environment').default;
      });
      expect(environment.stripePublishableKey).toBe(STRIPE_KEY_LIVE);
    });

    it.each([NODE_ENVS.DEVELOPMENT, NODE_ENVS.PREVIEW, NODE_ENVS.TEST])(
      'when the NODE_ENV is "%s", then it is set to STRIPE_KEY_TEST',
      (nodeEnv) => {
        process.env.NODE_ENV = nodeEnv;
        setupStripeEnvVars();
        jest.isolateModules(() => {
          environment = require('../environment').default;
        });
        expect(environment.stripePublishableKey).toBe(STRIPE_KEY_TEST);
      },
    );
  });

  describe('stripeSecretKey', () => {
    const STRIPE_SECRET_KEY_LIVE = 'STRIPE_SECRET_KEY_LIVE';
    const STRIPE_SECRET_KEY_TEST = 'STRIPE_SECRET_KEY_TEST';

    const setupStripeEnvVars = () => {
      process.env.STRIPE_SECRET_KEY_LIVE = STRIPE_SECRET_KEY_LIVE;
      process.env.STRIPE_SECRET_KEY_TEST = STRIPE_SECRET_KEY_TEST;
    };

    it(`when the NODE_ENV is "${NODE_ENVS.PRODUCTION}", then it is set to STRIPE_SECRET_KEY_LIVE`, () => {
      process.env.NODE_ENV = NODE_ENVS.PRODUCTION;
      setupStripeEnvVars();
      jest.isolateModules(() => {
        environment = require('../environment').default;
      });
      expect(environment.stripeSecretKey).toBe(STRIPE_SECRET_KEY_LIVE);
    });

    it.each([NODE_ENVS.DEVELOPMENT, NODE_ENVS.PREVIEW, NODE_ENVS.TEST])(
      'when the NODE_ENV is "%s", then it is set to STRIPE_SECRET_KEY_TEST',
      (nodeEnv) => {
        process.env.NODE_ENV = nodeEnv;
        setupStripeEnvVars();
        jest.isolateModules(() => {
          environment = require('../environment').default;
        });
        expect(environment.stripeSecretKey).toBe(STRIPE_SECRET_KEY_TEST);
      },
    );
  });
});
