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
});
