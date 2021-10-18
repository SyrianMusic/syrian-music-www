import { loadEnvConfig } from '@next/env';
import '@testing-library/jest-dom/extend-expect';

global.fetch = jest.fn();

export default async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
