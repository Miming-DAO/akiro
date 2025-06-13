/**
 * Environment Configuration Interface
 * 
 * This interface defines the structure of the environment configuration objects.
 */

export interface Environment {
  production: boolean;
  test: boolean;
  development: boolean;
  apiUrl: string;
  appName: string;
  version: string;
  // Add any other environment variables here
} 