export type JSONPrimitive = string | number | boolean | null;

export type JSONValue =
  | JSONPrimitive
  | JSONValue[]
  | { [key: string]: JSONValue };

export interface TranslationResult {
  expression: string;
  jsonLogic: JSONValue;
}

export interface RELErrorOptions {
  expression?: unknown;
  location?: {
    line: number;
    column: number;
  };
  cause?: unknown;
}

export class RELError extends Error {
  constructor(message: string, options?: RELErrorOptions);
  name: 'RELError';
  expression?: unknown;
  location?: {
    line: number;
    column: number;
  };
}

export function translate(expression: string): TranslationResult;

export function convertFromJsonLogic(jsonLogic: JSONValue): string;
