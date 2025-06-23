// This file serves as the base environment configuration
// It will be overridden by environment-specific files

import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  test: false,
  development: true,
  // Add your common configuration here
  apiUrl: 'http://localhost:8000/api',
  appName: 'Akiro  ($AKR)',
  version: '1.0.0',
  // Social media links
  socialMedia: {
    twitter: 'https://twitter.com/akirocoin',
    github: 'https://github.com/akirocoin',
    linkedin: 'https://linkedin.com/company/akirocoin',
    youtube: 'https://youtube.com/akirocoin'
  }
}; 