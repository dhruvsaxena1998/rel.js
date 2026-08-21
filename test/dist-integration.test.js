import { createRequire } from 'node:module';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import vm from 'node:vm';
import { describe, expect, it } from 'vitest';

const distPath = resolve('dist');
const require = createRequire(import.meta.url);

describe('distribution', () => {
  it.each([
    'index.esm.js',
    'index.esm.js.map',
    'index.cjs',
    'index.cjs.map',
    'index.umd.js',
    'index.umd.js.map',
    'index.d.ts'
  ])('contains %s', file => {
    expect(existsSync(resolve(distPath, file))).toBe(true);
  });

  it.each([
    'index.esm.js.map',
    'index.cjs.map',
    'index.umd.js.map'
  ])('contains a valid %s', file => {
    const sourceMap = JSON.parse(readFileSync(resolve(distPath, file), 'utf8'));

    expect(sourceMap.version).toBe(3);
    expect(sourceMap.sources.length).toBeGreaterThan(0);
    expect(sourceMap.mappings.length).toBeGreaterThan(0);
  });

  it('exports the same interface from ESM and CommonJS', async () => {
    const esm = await import(pathToFileURL(resolve(distPath, 'index.esm.js')));
    const commonjs = require(resolve(distPath, 'index.cjs'));
    const expression = '@price < 100 and @available == true';

    expect(Object.keys(esm).sort()).toEqual([
      'RELError',
      'convertFromJsonLogic',
      'translate'
    ]);
    expect(Object.keys(commonjs).sort()).toEqual(Object.keys(esm).sort());
    expect(commonjs.translate(expression)).toEqual(esm.translate(expression));
  });

  it('executes the browser bundle without module loaders', () => {
    const source = readFileSync(resolve(distPath, 'index.umd.js'), 'utf8');
    const context = {};

    vm.runInNewContext(source, context);

    expect(context.REL.translate('@age > 18')).toEqual({
      expression: '@age > 18',
      jsonLogic: { '>': [{ var: 'age' }, 18] }
    });
  });

  it('keeps browser output below 300 KiB', () => {
    expect(statSync(resolve(distPath, 'index.umd.js')).size).toBeLessThan(300 * 1024);
  });

  it('declares the runtime interface without a phantom default export', () => {
    const declarations = readFileSync(resolve(distPath, 'index.d.ts'), 'utf8');

    expect(declarations).toContain('export class RELError');
    expect(declarations).toContain('export function translate');
    expect(declarations).toContain('export function convertFromJsonLogic');
    expect(declarations).not.toContain('export default');
  });
});
