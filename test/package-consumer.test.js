import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import vm from 'node:vm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

const projectRoot = resolve(import.meta.dirname, '..');
let consumerRoot;

beforeAll(() => {
  consumerRoot = mkdtempSync(join(tmpdir(), 'rel-js-consumer-'));
  const packageRoot = join(consumerRoot, 'node_modules', 'rel.js');
  mkdirSync(packageRoot, { recursive: true });

  const packOutput = execFileSync('npm', [
    'pack',
    '--ignore-scripts',
    '--json',
    '--pack-destination',
    consumerRoot
  ], {
    cwd: projectRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      npm_config_cache: join(consumerRoot, '.npm-cache')
    }
  });
  const [{ filename }] = JSON.parse(packOutput);

  execFileSync('tar', [
    '-xzf',
    join(consumerRoot, filename),
    '--strip-components=1',
    '-C',
    packageRoot
  ]);

  symlinkSync(
    join(projectRoot, 'node_modules', 'antlr4'),
    join(consumerRoot, 'node_modules', 'antlr4'),
    'junction'
  );
  symlinkSync(
    join(projectRoot, 'node_modules', 'json-logic-js'),
    join(consumerRoot, 'node_modules', 'json-logic-js'),
    'junction'
  );
});

afterAll(() => {
  rmSync(consumerRoot, { recursive: true, force: true });
});

describe('installed package', () => {
  it('translates through the ESM entry point', () => {
    const scriptPath = join(consumerRoot, 'consumer.mjs');
    writeFileSync(scriptPath, `
      import { RELError, translate } from 'rel.js';
      const result = translate('@age >= 18');
      process.stdout.write(JSON.stringify({ result, errorName: RELError.name }));
    `);

    const output = execFileSync(process.execPath, [scriptPath], {
      cwd: consumerRoot,
      encoding: 'utf8'
    });

    expect(JSON.parse(output)).toEqual({
      result: {
        expression: '@age >= 18',
        jsonLogic: { '>=': [{ var: 'age' }, 18] }
      },
      errorName: 'RELError'
    });
  });

  it('translates through the CommonJS entry point', () => {
    const scriptPath = join(consumerRoot, 'consumer.cjs');
    writeFileSync(scriptPath, `
      const { RELError, translate } = require('rel.js');
      const result = translate('@score < 100');
      process.stdout.write(JSON.stringify({ result, errorName: RELError.name }));
    `);

    const output = execFileSync(process.execPath, [scriptPath], {
      cwd: consumerRoot,
      encoding: 'utf8'
    });

    expect(JSON.parse(output)).toEqual({
      result: {
        expression: '@score < 100',
        jsonLogic: { '<': [{ var: 'score' }, 100] }
      },
      errorName: 'RELError'
    });
  });

  it('translates through the browser entry point', () => {
    const browserBundle = readFileSync(
      join(consumerRoot, 'node_modules', 'rel.js', 'dist', 'index.umd.js'),
      'utf8'
    );
    const context = {};

    vm.runInNewContext(browserBundle, context);

    expect(context.REL.translate('@active == true')).toEqual({
      expression: '@active == true',
      jsonLogic: { '==': [{ var: 'active' }, true] }
    });
    expect(context.REL.RELError.name).toBe('RELError');
  });
});
