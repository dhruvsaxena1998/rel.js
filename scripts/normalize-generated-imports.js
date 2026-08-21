import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const generatedFiles = [
  'RELLexer.js',
  'RELParser.js',
  'RELListener.js',
  'RELVisitor.js'
];

for (const file of generatedFiles) {
  const path = resolve('generated', file);
  const source = readFileSync(path, 'utf8').replace(
    "import antlr4 from 'antlr4';",
    "import antlr4 from '../internal/antlr4.js';"
  );
  writeFileSync(path, source);
}
