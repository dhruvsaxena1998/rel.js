/**
 * Build configuration for REL.js
 * Comprehensive build setup for multiple output formats
 */

import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));

// Common build options
const commonOptions = {
  entryPoints: ['index.js'],
  bundle: true,
  sourcemap: true,
  external: ['antlr4', 'json-logic-js'],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.VERSION': `"${pkg.version}"`
  },
  banner: {
    js: `/**
 * REL.js v${pkg.version}
 * ${pkg.description}
 * 
 * @author ${pkg.author}
 * @license ${pkg.license}
 */`
  }
};

// Build configurations
const buildConfigs = [
  // ESM build
  {
    ...commonOptions,
    format: 'esm',
    platform: 'node',
    conditions: ['node'],
    outfile: 'dist/index.esm.js',
    target: ['node16', 'es2020']
  },
  
  // CommonJS build
  {
    ...commonOptions,
    format: 'cjs',
    platform: 'node',
    conditions: ['node'],
    outfile: 'dist/index.cjs',
    target: ['node16', 'es2020']
  },
  
  // UMD build for browsers
  {
    ...commonOptions,
    external: ['json-logic-js'], // Bundle antlr4 for browser compatibility
    format: 'iife',
    platform: 'browser',
    globalName: 'REL',
    outfile: 'dist/index.umd.js',
    target: ['es2020', 'chrome80', 'firefox78', 'safari14']
  },
  
  // Minified ESM build
  {
    ...commonOptions,
    format: 'esm',
    platform: 'node',
    conditions: ['node'],
    outfile: 'dist/index.esm.min.js',
    target: ['node16', 'es2020'],
    minify: true
  },
  
  // Minified CommonJS build
  {
    ...commonOptions,
    format: 'cjs',
    platform: 'node',
    conditions: ['node'],
    outfile: 'dist/index.min.cjs',
    target: ['node16', 'es2020'],
    minify: true
  },
  
  // Minified UMD build for browsers
  {
    ...commonOptions,
    external: ['json-logic-js'], // Bundle antlr4 for browser compatibility
    format: 'iife',
    platform: 'browser',
    globalName: 'REL',
    outfile: 'dist/index.umd.min.js',
    target: ['es2020', 'chrome80', 'firefox78', 'safari14'],
    minify: true
  }
];

// Build function
export async function buildAll() {
  console.log('🚀 Starting REL.js build process...');
  
  try {
    // Build all configurations in parallel
    const buildPromises = buildConfigs.map(async (config) => {
      const result = await build(config);
      console.log(`✅ Built ${config.outfile}`);
      return result;
    });
    
    await Promise.all(buildPromises);
    
    // Generate TypeScript declarations
    console.log('📝 Generating TypeScript declarations...');
    await import('./scripts/generate-types.js');
    
    console.log('🎉 Build completed successfully!');
    console.log('\n📦 Generated files:');
    console.log('  - dist/index.esm.js (ESM)');
    console.log('  - dist/index.cjs (CommonJS)');
    console.log('  - dist/index.umd.js (UMD/Browser)');
    console.log('  - dist/index.esm.min.js (ESM Minified)');
    console.log('  - dist/index.min.cjs (CommonJS Minified)');
    console.log('  - dist/index.umd.min.js (UMD Minified)');
    console.log('  - dist/index.d.ts (TypeScript Declarations)');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Run build if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  buildAll();
}