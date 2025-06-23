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
  // Social media links
  socialMedia: {
    x: string;
    twitter: string;
    github: string;
    linkedin: string;
    dexscreener: string;
    telegram: string;
    youtube: string;
  };
  // Add any other environment variables here
} 