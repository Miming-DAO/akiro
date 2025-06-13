# Akiro Coin

Akiro Coin landing page made with Angular.

## Technologies Used

- **Angular**: Version 19.1.0
- **Angular Material**: Version 19.2.18
- **TailwindCSS**: Version 3.4.1
- **RxJS**: Version 7.8.0
- **TypeScript**: Version 5.7.2

## Development Environment Setup

### Prerequisites

- Node.js (v16.x or higher recommended)
- npm (v8.x or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/akiro-coin.git
   cd akiro-coin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

This application supports multiple environments (development, test, and production).

### Standard Development Server

```bash
npm start
```

This will start the application on `http://localhost:4200/`.

### Environment-Specific Servers

The application can be run with specific environment configurations:

```bash
# Run with development environment
npm run start:dev

# Run with test environment
npm run start:test

# Run with production environment
npm run start:prod
```

### Switching Environments

You can also switch the active environment without restarting the server:

```bash
# Switch to development environment
npm run env:dev

# Switch to test environment
npm run env:test

# Switch to production environment
npm run env:prod
```

## Building for Production

To build the application for different environments:

```bash
# Build for development
npm run build:dev

# Build for test
npm run build:test

# Build for production
npm run build:prod
```

Build artifacts will be stored in the `dist/` directory.

## Environment Configuration System

Akiro Coin uses a flexible environment configuration system. For detailed information about how environments are configured and managed, please refer to [ENV_DOCS.md](ENV_DOCS.md).

## Running Tests

### Unit Tests

```bash
npm test
```

This executes the unit tests via [Karma](https://karma-runner.github.io).

## Project Structure

- `src/app/shared`: Contains shared components like navbar and footer
- `src/environments`: Contains environment-specific configuration files

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'type: Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
