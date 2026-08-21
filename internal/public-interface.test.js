import { describe, expect, it } from 'vitest';
import { RELError, convertFromJsonLogic, translate } from '../index.js';

describe('public interface', () => {
  it('translates REL and converts JSONLogic through the package entry point', () => {
    const translated = translate('@age >= 18');

    expect(translated).toEqual({
      expression: '@age >= 18',
      jsonLogic: { '>=': [{ var: 'age' }, 18] }
    });
    expect(convertFromJsonLogic(translated.jsonLogic)).toBe('@age >= 18');
  });

  it.each([undefined, null, 42, {}, []])('rejects non-string input %j', expression => {
    expect(() => translate(expression)).toThrow(RELError);
    expect(() => translate(expression)).toThrow('REL expression must be a string');
  });

  it('reports syntax error location and expression', () => {
    const expression = '@age > > 18';

    try {
      translate(expression);
      throw new Error('Expected translate to throw');
    } catch (error) {
      expect(error).toBeInstanceOf(RELError);
      expect(error.name).toBe('RELError');
      expect(error.expression).toBe(expression);
      expect(error.location).toEqual({ line: 1, column: 7 });
    }
  });

  it('uses RELError for reverse-conversion failures', () => {
    const invalidJsonLogic = { first: [], second: [] };

    expect(() => convertFromJsonLogic(invalidJsonLogic)).toThrow(RELError);
    expect(() => convertFromJsonLogic(invalidJsonLogic)).toThrow(
      'Failed to convert JSONLogic to REL: Invalid JSONLogic: object must have exactly one key'
    );
  });
});
