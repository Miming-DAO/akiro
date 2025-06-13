// Production environment configuration

import { Environment } from './environment.interface';
import { environment as baseEnv } from './environment';

export const environment: Environment = {
  ...baseEnv,
  production: true,
  test: false,
  development: false,
  // Override or add production-specific configuration
  apiUrl: 'https://api.akiro-coin.com/api',
}; 