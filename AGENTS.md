# Agent Guidelines for rel.js

## Commands
- `npm test` - Run all tests
- `npm run test:coverage` - Run tests with coverage
- `npm run test:browser` - Run browser tests
- `npm run test:dist` - Run distribution tests
- `npm run build` - Build all distributions
- `npm run generate-parser` - Generate ANTLR parser

## Code Style
- Use ES6+ imports/exports
- Follow existing visitor pattern for parser implementation
- Use camelCase for variables and functions
- Use PascalCase for classes
- No comments unless absolutely necessary
- Return objects with `expression` and `jsonLogic` properties from translate()
- Handle errors by throwing exceptions with descriptive messages
- Use vitest for testing with describe/it/expect pattern