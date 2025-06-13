// Development environment configuration

import { Environment } from './environment.interface';
import { environment as baseEnv } from './environment';

export const environment: Environment = {
  ...baseEnv,
  production: false,
  test: false,
  development: true,
  // Override or add development-specific configuration
  apiUrl: 'http://localhost:8000/api',
}; 