// This file determines which environment configuration to use
// It reads from package.json scripts or environment variables

import { Environment } from './environment.interface';

// Import all environments
import { environment as baseEnv } from './environment';
import { environment as devEnv } from './environment.development';
import { environment as testEnv } from './environment.test';
import { environment as prodEnv } from './environment.production';

// Determine which environment to use
function getEnvironment(): Environment {
  // Check for NODE_ENV environment variable
  const nodeEnv = process.env['NODE_ENV'] || '';
  
  if (nodeEnv.includes('prod')) {
    return prodEnv;
  } else if (nodeEnv.includes('test')) {
    return testEnv;
  } else if (nodeEnv.includes('dev')) {
    return devEnv;
  }

  // Fallback to checking for Angular CLI environment
  const commandLineArgs = process.argv || [];
  const isProduction = commandLineArgs.includes('--configuration=production');
  const isTest = commandLineArgs.includes('--configuration=test');
  
  if (isProduction) {
    return prodEnv;
  } else if (isTest) {
    return testEnv;
  }
  
  // Default to development environment
  return devEnv;
}

// Export the appropriate environment
export const environment: Environment = getEnvironment(); 