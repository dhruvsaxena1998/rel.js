# REL.js Build System

Comprehensive build configuration for distributing REL.js across the JavaScript ecosystem.

## Overview

REL.js uses a modern build system that generates multiple output formats to ensure compatibility across different JavaScript environments:

- **ESM (ES Modules)** - Modern JavaScript modules for Node.js 16+ and modern bundlers
- **CommonJS** - Traditional Node.js modules for maximum compatibility
- **UMD (Universal Module Definition)** - Browser-compatible format that works with AMD, CommonJS, and global variables
- **TypeScript Declarations** - Full TypeScript support with `.d.ts` files
- **Source Maps** - Debug support for all builds
- **Minified Versions** - Production-optimized builds

## Build Outputs

### Generated Files

```
dist/
├── index.esm.js          # ESM build with source maps
├── index.esm.js.map      # ESM source map
├── index.esm.min.js      # Minified ESM build
├── index.esm.min.js.map  # Minified ESM source map
├── index.cjs             # CommonJS build with source maps
├── index.cjs.map         # CommonJS source map
├── index.min.cjs         # Minified CommonJS build
├── index.min.cjs.map     # Minified CommonJS source map
├── index.umd.js          # UMD build with source maps
├── index.umd.js.map      # UMD source map
├── index.umd.min.js      # Minified UMD build
├── index.umd.min.js.map  # Minified UMD source map
└── index.d.ts            # TypeScript declarations
```

### Package.json Configuration

The package.json is configured with proper entry points for different module systems:

```json
{
  "main": "dist/index.cjs",
  "module": "dist/index.esm.js",
  "browser": "dist/index.umd.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "browser": "./dist/index.umd.js",
      "import": "./dist/index.esm.js",
      "require": "./dist/index.cjs",
      "default": "./dist/index.esm.js"
    }
  }
}
```

## Build Scripts

### Available Commands

```bash
# Full production build
npm run build

# Individual build targets
npm run build:esm      # ESM build only
npm run build:cjs      # CommonJS build only
npm run build:umd      # UMD build only
npm run build:types    # TypeScript declarations only

# Development and production builds
npm run build:dev      # Development build with debugging
npm run build:prod     # Production build with minification

# Minification
npm run build:minify   # Minify existing builds

# Utilities
npm run build:clean    # Clean dist directory
```

### Build Process

1. **Clean**: Remove existing dist directory
2. **ESM Build**: Generate ES modules for modern environments
3. **CommonJS Build**: Generate CommonJS for Node.js compatibility
4. **UMD Build**: Generate browser-compatible universal modules
5. **TypeScript Declarations**: Generate .d.ts files for TypeScript support
6. **Minification**: Create minified versions for production

## Usage Examples

### Node.js (ESM)

```javascript
import { translate, convertFromJsonLogic } from 'rel.js';

const result = translate('@age > 18');
console.log(result.jsonLogic);
```

### Node.js (CommonJS)

```javascript
const { translate, convertFromJsonLogic } = require('rel.js');

const result = translate('@age > 18');
console.log(result.jsonLogic);
```

### Browser (UMD)

```html
<script src="https://unpkg.com/rel.js/dist/index.umd.min.js"></script>
<script>
  const result = REL.translate('@age > 18');
  console.log(result.jsonLogic);
</script>
```

### TypeScript

```typescript
import { translate, TranslationResult } from 'rel.js';

const result: TranslationResult = translate('@age > 18');
console.log(result.jsonLogic);
```

### Webpack/Vite/Rollup

Modern bundlers will automatically pick the appropriate format:

```javascript
import { translate } from 'rel.js';
// Bundler automatically selects the best format
```

## Build Configuration

### ESBuild Settings

- **Target**: Node.js 16+, ES2020, modern browsers
- **External Dependencies**: `antlr4`, `json-logic-js` (peer dependencies)
- **Source Maps**: Generated for all builds
- **Tree Shaking**: Enabled for optimal bundle size
- **Minification**: Available for production builds

### Browser Compatibility

- Chrome 80+
- Firefox 78+
- Safari 14+
- Edge 80+
- Node.js 16+

## Development

### Adding New Build Targets

1. Edit `build.config.js` to add new configuration
2. Update `package.json` scripts if needed
3. Test the new build target
4. Update documentation

### Custom Build Configuration

You can use the build configuration programmatically:

```javascript
import { buildAll } from './build.config.js';

// Run custom build
await buildAll();
```

## Publishing

### Pre-publish Checks

The following checks run automatically before publishing:

1. **Tests**: All tests must pass (`npm test`)
2. **Build**: Production build must succeed (`npm run build:prod`)
3. **Type Checking**: TypeScript declarations must be valid
4. **File Validation**: All required files must be present

### NPM Scripts

- `prepublishOnly`: Runs tests and production build
- `prepack`: Ensures production build is ready

### Manual Publishing

```bash
# Ensure everything is ready
npm run test
npm run build:prod

# Publish to NPM
npm publish
```

## Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are installed
2. **Import Errors**: Verify the correct import syntax for your environment
3. **TypeScript Errors**: Ensure TypeScript declarations are up to date
4. **Browser Issues**: Use the UMD build for direct browser usage

### Debug Mode

For debugging build issues:

```bash
# Enable verbose logging
DEBUG=* npm run build

# Build individual targets
npm run build:esm
npm run build:cjs
npm run build:umd
```

## Performance

### Bundle Sizes

- **ESM**: ~207KB (unminified), ~96KB (minified)
- **CommonJS**: ~205KB (unminified), ~112KB (minified)
- **UMD**: ~238KB (unminified), ~97KB (minified)
- **TypeScript Declarations**: ~2KB

### Optimization

- External dependencies reduce bundle size
- Tree shaking eliminates unused code
- Minification reduces production bundle size by ~50%
- Source maps enable debugging without impacting runtime performance

## Contributing

When contributing to the build system:

1. Test all build targets
2. Verify browser compatibility
3. Update documentation
4. Ensure TypeScript declarations are accurate
5. Test with different module systems