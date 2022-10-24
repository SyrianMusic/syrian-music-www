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

    it('sets adobeKey', () => {
      expect(environment.adobeKey).toBe(null);
    });
  });

  describe('jwtClientSecret', () => {
    const NEXT_PUBLIC_JWT_CLIENT_SECRET = 'NEXT_PUBLIC_JWT_CLIENT_SECRET';

    it.each(Object.values(NODE_ENVS))(
      'when the NODE_ENV is "%s", then it is set to NEXT_PUBLIC_JWT_CLIENT_SECRET',
      (nodeEnv) => {
        process.env.NEXT_PUBLIC_JWT_CLIENT_SECRET = NEXT_PUBLIC_JWT_CLIENT_SECRET;
        process.env.NODE_ENV = nodeEnv;
        let jwtClientSecret;
        jest.isolateModules(() => {
          jwtClientSecret = require('../environment').jwtClientSecret;
        });
        expect(jwtClientSecret).toBe(NEXT_PUBLIC_JWT_CLIENT_SECRET);
      },
    );
  });
});
