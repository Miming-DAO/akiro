// This file serves as the base environment configuration
// It will be overridden by environment-specific files

import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  test: false,
  development: true,
  // Add your common configuration here
  apiUrl: 'http://localhost:8000/api',
  appName: 'Akiro Coin',
  version: '1.0.0',
}; 