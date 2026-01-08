#!/usr/bin/env node

/**
 * Generate TypeScript declaration files for REL.js
 * This script creates .d.ts files for better TypeScript support
 */

import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure dist directory exists
try {
  mkdirSync('dist', { recursive: true });
} catch (err) {
  // Directory might already exist
}

// TypeScript declarations content
const typeDefinitions = `/**
 * REL.js - Rule Expression Language
 * TypeScript definitions for better developer experience
 */

/**
 * JSONLogic object structure
 */
export interface JSONLogicObject {
  [operator: string]: any;
}

/**
 * Translation result from REL to JSONLogic
 */
export interface TranslationResult {
  /** The original REL expression */
  expression: string;
  /** The compiled JSONLogic object */
  jsonLogic: JSONLogicObject;
}

/**
 * REL parsing error with location information
 */
export interface RELError extends Error {
  name: 'RELError';
  /** Location of the error in the expression */
  location?: {
    line: number;
    column: number;
  };
  /** The original expression that caused the error */
  expression?: string;
}

/**
 * Translates a REL expression into JSONLogic format
 * 
 * @param expression - The REL expression to translate
 * @returns Translation result with original expression and JSONLogic object
 * @throws {RELError} When the expression contains syntax errors
 * 
 * @example
 * \`\`\`typescript
 * import { translate } from 'rel.js';
 * 
 * const result = translate('@age > 18 and @hasLicense == true');
 * console.log(result.jsonLogic);
 * // Output: { "and": [{">=": [{"var": "age"}, 18]}, {"==": [{"var": "hasLicense"}, true]}] }
 * \`\`\`
 */
export function translate(expression: string): TranslationResult;

/**
 * Converts a JSONLogic object back to a REL expression string
 * 
 * @param jsonLogic - The JSONLogic object to convert
 * @returns The equivalent REL expression string
 * @throws {Error} When the JSONLogic object cannot be converted
 * 
 * @example
 * \`\`\`typescript
 * import { convertFromJsonLogic } from 'rel.js';
 * 
 * const jsonLogic = {
 *   "and": [
 *     {">=": [{"var": "age"}, 21]},
 *     {"==": [{"var": "hasLicense"}, true]}
 *   ]
 * };
 * 
 * const relExpression = convertFromJsonLogic(jsonLogic);
 * console.log(relExpression);
 * // Output: "@age >= 21 and @hasLicense == true"
 * \`\`\`
 */
export function convertFromJsonLogic(jsonLogic: JSONLogicObject): string;

/**
 * Default export containing all functions
 */
declare const _default: {
  translate: typeof translate;
  convertFromJsonLogic: typeof convertFromJsonLogic;
};

export default _default;
`;

// Write the TypeScript declarations
writeFileSync('dist/index.d.ts', typeDefinitions, 'utf8');

console.log('✅ TypeScript declarations generated successfully at dist/index.d.ts');