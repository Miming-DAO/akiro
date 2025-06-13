/**
 * Environment Switcher Script
 * 
 * This script copies the appropriate .env file based on the environment argument.
 * Usage: node switch-env.js [environment]
 * 
 * Examples:
 *   node switch-env.js development
 *   node switch-env.js test
 *   node switch-env.js production
 */

const fs = require('fs');
const path = require('path');

// Get the environment from command line arguments
const args = process.argv.slice(2);
const env = args[0] || 'development';

// Define the paths
const envFiles = {
  development: '.env',
  test: '.env.test',
  production: '.env.production'
};

// Check if the environment is valid
if (!envFiles[env]) {
  console.error(`Error: Environment "${env}" is not supported.`);
  console.error('Supported environments: development, test, production');
  process.exit(1);
}

// Read the environment file
try {
  const sourceEnvFile = envFiles[env];
  const envContent = fs.readFileSync(sourceEnvFile, 'utf-8');
  
  // Write to .env file
  fs.writeFileSync('.env', envContent);
  
  console.log(`Successfully switched to ${env} environment.`);
  console.log(`Environment variables loaded from ${sourceEnvFile}`);
} catch (error) {
  console.error(`Error: Failed to switch environment: ${error.message}`);
  process.exit(1);
} 