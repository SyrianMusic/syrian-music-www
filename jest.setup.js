process.env.TZ = 'UTC';

import { loadEnvConfig } from '@next/env';
import '@testing-library/jest-dom/extend-expect';

global.fetch = jest.fn();

jest.mock('./netlify/utils/environment');

export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
