# Environment Configuration System for Akiro ($AKR)

This document explains how the environment configuration system works in the Akiro ($AKR) project.

## Overview

The project uses a combination of Angular's built-in environment configuration system and .env files to manage environment-specific variables. This allows for dynamic switching between environments (development, test, production) without rebuilding the application.

## Environment Files

1. **Base Configuration**: `src/environments/environment.ts`
   - Contains the default environment configuration.
   - Used as a fallback when specific environment configurations are not available.

2. **Environment-specific Configurations**:
   - `src/environments/environment.development.ts` (Development)
   - `src/environments/environment.test.ts` (Test)
   - `src/environments/environment.production.ts` (Production)
   - Each file inherits from the base configuration and overrides specific values.

3. **.env Files**:
   - `.env` (Default development environment variables)
   - `.env.test` (Test environment variables)
   - `.env.production` (Production environment variables)

## Usage

### Using Environment Variables in Angular Components

Import the environment configuration in your TypeScript files:

```typescript
import { environment } from '../environments/environment';

// Access environment variables
const apiUrl = environment.apiUrl;
const isProduction = environment.production;
```

### Switching Environments

You can switch environments using npm scripts:

```bash
# Switch to development environment
npm run env:dev

# Switch to test environment
npm run env:test

# Switch to production environment
npm run env:prod
```

### Running the Application in Different Environments

Use the following npm scripts to run the application in different environments:

```bash
# Run in development environment
npm run start:dev

# Run in test environment
npm run start:test

# Run in production environment
npm run start:prod
```

### Building for Different Environments

Use the following npm scripts to build the application for different environments:

```bash
# Build for development
npm run build:dev

# Build for test
npm run build:test

# Build for production
npm run build:prod
```

## Adding New Environment Variables

1. Add the variable to the base environment file (`src/environments/environment.ts`).
2. Override the variable in environment-specific files if needed.
3. Add the variable to the .env files.

## Adding New Environments

1. Create a new environment file (e.g., `src/environments/environment.staging.ts`).
2. Create a new .env file (e.g., `.env.staging`).
3. Update the `angular.json` file to include the new environment.
4. Update the `switch-env.js` script to support the new environment.
5. Add new npm scripts to `package.json`. 