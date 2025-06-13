// Test environment configuration

import { Environment } from './environment.interface';
import { environment as baseEnv } from './environment';

export const environment: Environment = {
  ...baseEnv,
  production: false,
  test: true,
  development: false,
  // Override or add test-specific configuration
  apiUrl: 'http://test-api.akiro-coin.com/api',
}; 