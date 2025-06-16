# JSONLogic Visitor Test Suite

This document describes the comprehensive test suite for the `JSONLogicVisitor` class in `internal/jsonlogic.visitor.js`.

## Overview

The test suite provides extensive coverage for the JSONLogic visitor implementation, which translates REL expressions into JSONLogic-compatible objects. The visitor uses the ANTLR4 visitor pattern to traverse parse trees and generate appropriate JSONLogic structures.

## Test Structure

### Test Categories

1. **Constructor Tests**
   - Validates proper initialization of lambda context

2. **Entry Point Tests**
   - Tests the main `visitExpression` method

3. **Conditional Expression Tests**
   - `visitIfThenElse` - if-then-else with elseif chains
   - `visitLogicalOr` - pass-through to logical OR

4. **Logical Expression Tests**
   - `visitOrExpression` - OR operations
   - `visitLogicalAnd` - pass-through to logical AND
   - `visitAndExpression` - AND operations
   - `visitEquality` - pass-through to equality

5. **Equality Expression Tests**
   - `visitEqualExpression` - equality (==)
   - `visitStrictEqualExpression` - strict equality (===)
   - `visitNotEqualExpression` - inequality (!=)
   - `visitStrictNotEqualExpression` - strict inequality (!==)
   - `visitRelational` - pass-through to relational

6. **Relational Expression Tests**
   - `visitGreaterThanExpression` - greater than (>)
   - `visitGreaterThanOrEqualExpression` - greater than or equal (>=)
   - `visitLessThanExpression` - less than (<)
   - `visitLessThanOrEqualExpression` - less than or equal (<=)
   - `visitBetweenExpression` - between operations
   - `visitInExpression` - in operations
   - `visitNotInExpression` - not in operations
   - `visitAdditive` - pass-through to additive

7. **Arithmetic Expression Tests**
   - `visitAddExpression` - addition (+)
   - `visitSubtractExpression` - subtraction (-)
   - `visitMultiplicative` - pass-through to multiplicative
   - `visitMultiplyExpression` - multiplication (*)
   - `visitDivideExpression` - division (/)
   - `visitModuloExpression` - modulo (%)
   - `visitUnary` - pass-through to unary

8. **Unary Expression Tests**
   - `visitNotExpression` - logical NOT (!)
   - `visitDoubleNotExpression` - double NOT (!!)
   - `visitPostfix` - pass-through to postfix

9. **Postfix Expression Tests**
   - `visitPropertyAccess` - dot notation property access
   - `visitPrimary` - pass-through to primary

10. **Primary Expression Tests**
    - `visitVariableExpression` - variable expressions
    - `visitBareIdentifierExpression` - bare identifier expressions
    - `visitLiteralExpression` - literal expressions
    - `visitFunctionCallExpression` - function call expressions
    - `visitParenthesizedExpression` - parenthesized expressions

11. **Identifier and Variable Tests**
    - `visitBareIdentifier` - bare identifier handling
    - `visitVariable` - variable reference handling
    - `visitVariableName` - variable name construction

12. **Literal Tests**
    - `visitNumberLiteral` - integer and float parsing
    - `visitStringLiteral` - string parsing with escape sequences
    - `visitBooleanLiteral` - boolean parsing
    - `visitArrayLiteral` - array literal handling
    - `visitArray` - array construction

13. **Function Call Tests**
    - `visitFunctionCall` - function call routing
    - `handleRegularFunctionCall` - built-in and custom functions
    - `handleArrayMethodCall` - array methods with lambda support

14. **Lambda Context Management Tests**
    - `enterLambdaContext` - lambda context initialization
    - `exitLambdaContext` - lambda context cleanup
    - `visitLambdaExpression` - lambda expression processing
    - `transformLambdaVariables` - variable transformation in lambda context
    - `transformVariableReference` - variable reference transformation

15. **Error Handling Tests**
    - `visitChildren` - fallback error handling

16. **Integration Tests**
    - Complex nested expressions
    - Array methods with complex lambdas
    - Property access chains

## Test Coverage

The test suite achieves **100% code coverage** with:
- **100% Statement Coverage**
- **100% Branch Coverage** 
- **100% Function Coverage**

## Mock Infrastructure

### MockContext Class
A comprehensive mock implementation that simulates ANTLR4 context objects:
- Supports method mocking
- Handles child node management
- Provides text extraction capabilities

### Helper Functions
- `createMockContext()` - Creates mock context objects with custom methods
- `createTerminalNode()` - Creates mock terminal nodes for tokens

## Key Test Patterns

### 1. Method Delegation Tests
Tests that verify pass-through methods correctly delegate to child expressions:
```javascript
it('should pass through to logical OR expression', () => {
    const mockLogicalOrExpr = createMockContext();
    const ctx = createMockContext({
        logicalOrExpression: () => mockLogicalOrExpr
    });

    const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ or: 'result' });
    
    const result = visitor.visitLogicalOr(ctx);
    
    expect(visitSpy).toHaveBeenCalledWith(mockLogicalOrExpr);
    expect(result).toEqual({ or: 'result' });
});
```

### 2. JSONLogic Generation Tests
Tests that verify correct JSONLogic object generation:
```javascript
it('should create OR JSONLogic', () => {
    const ctx = createMockContext({
        logicalOrExpression: () => createMockContext(),
        logicalAndExpression: () => createMockContext()
    });

    const visitSpy = vi.spyOn(visitor, 'visit')
        .mockReturnValueOnce({ var: 'a' })
        .mockReturnValueOnce({ var: 'b' });

    const result = visitor.visitOrExpression(ctx);

    expect(result).toEqual({
        "or": [{ var: 'a' }, { var: 'b' }]
    });
});
```

### 3. Lambda Context Tests
Tests that verify proper lambda context management:
```javascript
it('should handle lambda context cleanup on error', () => {
    const args = [createMockContext(), createMockContext()];
    const visitSpy = vi.spyOn(visitor, 'visit')
        .mockReturnValueOnce([1, 2, 3]);

    const visitLambdaSpy = vi.spyOn(visitor, 'visitLambdaExpression')
        .mockImplementation(() => {
            throw new Error('Lambda error');
        });

    const enterLambdaSpy = vi.spyOn(visitor, 'enterLambdaContext');
    const exitLambdaSpy = vi.spyOn(visitor, 'exitLambdaContext');

    expect(() => {
        visitor.handleArrayMethodCall('map', args);
    }).toThrow('Lambda error');

    expect(enterLambdaSpy).toHaveBeenCalled();
    expect(exitLambdaSpy).toHaveBeenCalled();
});
```

## Running Tests

### Basic Test Run
```bash
npm test
```

### Test with Coverage
```bash
npx vitest run --coverage
```

### Watch Mode
```bash
npx vitest
```

## Test Files

- `internal/jsonlogic.visitor.test.js` - Main test suite (90 tests)
- `vitest.config.js` - Vitest configuration

## Dependencies

- **Vitest** - Test framework
- **@vitest/coverage-v8** - Coverage reporting
- **vi** - Mocking utilities

## Best Practices Demonstrated

1. **Comprehensive Mocking** - All ANTLR4 dependencies are properly mocked
2. **Edge Case Testing** - Tests cover error conditions and edge cases
3. **Integration Testing** - Complex scenarios are tested end-to-end
4. **Spy Verification** - Method calls and arguments are verified
5. **Error Handling** - Exception scenarios are properly tested
6. **Context Management** - Lambda context lifecycle is thoroughly tested

## Maintenance

When adding new visitor methods:
1. Add corresponding test cases following existing patterns
2. Mock any new context methods required
3. Verify JSONLogic output format
4. Test both success and error scenarios
5. Update integration tests if needed

The test suite serves as both validation and documentation for the JSONLogic visitor implementation.