import { describe, it, expect, beforeEach, vi } from 'vitest';
import JSONLogicVisitor from './jsonlogic.visitor.js';

// Mock context objects that would normally be provided by ANTLR4
class MockContext {
    constructor(data = {}) {
        Object.assign(this, data);
        this._children = [];
    }

    getText() {
        return this.text || '';
    }

    getChildCount() {
        return this._children.length;
    }

    getChild(index) {
        return this._children[index];
    }

    addChild(child) {
        this._children.push(child);
        return this;
    }
}

// Helper function to create mock contexts with specific methods
function createMockContext(methods = {}) {
    const ctx = new MockContext();
    Object.assign(ctx, methods);
    return ctx;
}

// Helper to create mock terminal nodes
function createTerminalNode(text) {
    return {
        getText: () => text,
        getSymbol: () => ({ text })
    };
}

describe('JSONLogicVisitor', () => {
    let visitor;

    beforeEach(() => {
        visitor = new JSONLogicVisitor();
    });

    describe('Constructor', () => {
        it('should initialize with proper lambda context', () => {
            expect(visitor.lambdaContext).toEqual({
                isInLambda: false,
                externalVariables: new Set()
            });
        });
    });

    describe('Entry Point', () => {
        describe('visitExpression', () => {
            it('should visit conditional expression', () => {
                const mockConditionalExpr = createMockContext();
                const ctx = createMockContext({
                    conditionalExpression: () => mockConditionalExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ result: 'test' });
                
                const result = visitor.visitExpression(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockConditionalExpr);
                expect(result).toEqual({ result: 'test' });
            });
        });
    });

    describe('Conditional Expressions', () => {
        describe('visitIfThenElse', () => {
            it('should handle simple if-then-else', () => {
                const ctx = createMockContext({
                    logicalOrExpression: () => [
                        createMockContext() // condition
                    ],
                    conditionalExpression: () => [
                        createMockContext(), // then
                        createMockContext()  // else
                    ]
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce(true)      // condition
                    .mockReturnValueOnce('then')    // then
                    .mockReturnValueOnce('else');   // else

                const result = visitor.visitIfThenElse(ctx);

                expect(result).toEqual({
                    "if": [true, 'then', 'else']
                });
            });

            it('should handle if-elseif-else chains', () => {
                const ctx = createMockContext({
                    logicalOrExpression: () => [
                        createMockContext(), // condition1
                        createMockContext()  // condition2 (elseif)
                    ],
                    conditionalExpression: () => [
                        createMockContext(), // then1
                        createMockContext(), // then2 (elseif then)
                        createMockContext()  // else
                    ]
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce(true)       // condition1
                    .mockReturnValueOnce('then1')    // then1
                    .mockReturnValueOnce(false)      // condition2
                    .mockReturnValueOnce('then2')    // then2
                    .mockReturnValueOnce('else');    // else

                const result = visitor.visitIfThenElse(ctx);

                expect(result).toEqual({
                    "if": [true, 'then1', false, 'then2', 'else']
                });
            });
        });

        describe('visitLogicalOr', () => {
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
        });
    });

    describe('Logical Expressions', () => {
        describe('visitOrExpression', () => {
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
        });

        describe('visitLogicalAnd', () => {
            it('should pass through to logical AND expression', () => {
                const mockLogicalAndExpr = createMockContext();
                const ctx = createMockContext({
                    logicalAndExpression: () => mockLogicalAndExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ and: 'result' });
                
                const result = visitor.visitLogicalAnd(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockLogicalAndExpr);
                expect(result).toEqual({ and: 'result' });
            });
        });

        describe('visitAndExpression', () => {
            it('should create AND JSONLogic', () => {
                const ctx = createMockContext({
                    logicalAndExpression: () => createMockContext(),
                    equalityExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce({ var: 'b' });

                const result = visitor.visitAndExpression(ctx);

                expect(result).toEqual({
                    "and": [{ var: 'a' }, { var: 'b' }]
                });
            });
        });

        describe('visitEquality', () => {
            it('should pass through to equality expression', () => {
                const mockEqualityExpr = createMockContext();
                const ctx = createMockContext({
                    equalityExpression: () => mockEqualityExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ "==": 'result' });
                
                const result = visitor.visitEquality(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockEqualityExpr);
                expect(result).toEqual({ "==": 'result' });
            });
        });
    });

    describe('Equality Expressions', () => {
        describe('visitEqualExpression', () => {
            it('should create equality JSONLogic', () => {
                const ctx = createMockContext({
                    equalityExpression: () => createMockContext(),
                    relationalExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitEqualExpression(ctx);

                expect(result).toEqual({
                    "==": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitStrictEqualExpression', () => {
            it('should create strict equality JSONLogic', () => {
                const ctx = createMockContext({
                    equalityExpression: () => createMockContext(),
                    relationalExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitStrictEqualExpression(ctx);

                expect(result).toEqual({
                    "===": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitNotEqualExpression', () => {
            it('should create not equal JSONLogic', () => {
                const ctx = createMockContext({
                    equalityExpression: () => createMockContext(),
                    relationalExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitNotEqualExpression(ctx);

                expect(result).toEqual({
                    "!=": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitStrictNotEqualExpression', () => {
            it('should create strict not equal JSONLogic', () => {
                const ctx = createMockContext({
                    equalityExpression: () => createMockContext(),
                    relationalExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitStrictNotEqualExpression(ctx);

                expect(result).toEqual({
                    "!==": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitRelational', () => {
            it('should pass through to relational expression', () => {
                const mockRelationalExpr = createMockContext();
                const ctx = createMockContext({
                    relationalExpression: () => mockRelationalExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ ">": 'result' });
                
                const result = visitor.visitRelational(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockRelationalExpr);
                expect(result).toEqual({ ">": 'result' });
            });
        });
    });

    describe('Relational Expressions', () => {
        describe('visitGreaterThanExpression', () => {
            it('should create greater than JSONLogic', () => {
                const ctx = createMockContext({
                    relationalExpression: () => createMockContext(),
                    additiveExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitGreaterThanExpression(ctx);

                expect(result).toEqual({
                    ">": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitGreaterThanOrEqualExpression', () => {
            it('should create greater than or equal JSONLogic', () => {
                const ctx = createMockContext({
                    relationalExpression: () => createMockContext(),
                    additiveExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitGreaterThanOrEqualExpression(ctx);

                expect(result).toEqual({
                    ">=": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitLessThanExpression', () => {
            it('should create less than JSONLogic', () => {
                const ctx = createMockContext({
                    relationalExpression: () => createMockContext(),
                    additiveExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitLessThanExpression(ctx);

                expect(result).toEqual({
                    "<": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitLessThanOrEqualExpression', () => {
            it('should create less than or equal JSONLogic', () => {
                const ctx = createMockContext({
                    relationalExpression: () => createMockContext(),
                    additiveExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitLessThanOrEqualExpression(ctx);

                expect(result).toEqual({
                    "<=": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitBetweenExpression', () => {
            it('should create between JSONLogic using AND with >= and <=', () => {
                const ctx = createMockContext({
                    relationalExpression: () => createMockContext(),
                    additiveExpression: (index) => {
                        if (index === 0) return createMockContext(); // lower bound
                        if (index === 1) return createMockContext(); // upper bound
                        return [createMockContext(), createMockContext()]; // both bounds
                    }
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })  // expression
                    .mockReturnValueOnce(1)             // lower bound
                    .mockReturnValueOnce(10);           // upper bound

                const result = visitor.visitBetweenExpression(ctx);

                expect(result).toEqual({
                    "and": [
                        { ">=": [{ var: 'a' }, 1] },
                        { "<=": [{ var: 'a' }, 10] }
                    ]
                });
            });
        });

        describe('visitInExpression', () => {
            it('should create in JSONLogic', () => {
                const ctx = createMockContext({
                    relationalExpression: () => createMockContext(),
                    additiveExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce([1, 2, 3]);

                const result = visitor.visitInExpression(ctx);

                expect(result).toEqual({
                    "in": [{ var: 'a' }, [1, 2, 3]]
                });
            });
        });

        describe('visitNotInExpression', () => {
            it('should create not in JSONLogic', () => {
                const ctx = createMockContext({
                    relationalExpression: () => createMockContext(),
                    additiveExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce([1, 2, 3]);

                const result = visitor.visitNotInExpression(ctx);

                expect(result).toEqual({
                    "!": {
                        "in": [{ var: 'a' }, [1, 2, 3]]
                    }
                });
            });
        });

        describe('visitAdditive', () => {
            it('should pass through to additive expression', () => {
                const mockAdditiveExpr = createMockContext();
                const ctx = createMockContext({
                    additiveExpression: () => mockAdditiveExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ "+": 'result' });
                
                const result = visitor.visitAdditive(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockAdditiveExpr);
                expect(result).toEqual({ "+": 'result' });
            });
        });
    });

    describe('Arithmetic Expressions', () => {
        describe('visitAddExpression', () => {
            it('should create addition JSONLogic', () => {
                const ctx = createMockContext({
                    additiveExpression: () => createMockContext(),
                    multiplicativeExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitAddExpression(ctx);

                expect(result).toEqual({
                    "+": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitSubtractExpression', () => {
            it('should create subtraction JSONLogic', () => {
                const ctx = createMockContext({
                    additiveExpression: () => createMockContext(),
                    multiplicativeExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitSubtractExpression(ctx);

                expect(result).toEqual({
                    "-": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitMultiplicative', () => {
            it('should pass through to multiplicative expression', () => {
                const mockMultiplicativeExpr = createMockContext();
                const ctx = createMockContext({
                    multiplicativeExpression: () => mockMultiplicativeExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ "*": 'result' });
                
                const result = visitor.visitMultiplicative(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockMultiplicativeExpr);
                expect(result).toEqual({ "*": 'result' });
            });
        });

        describe('visitMultiplyExpression', () => {
            it('should create multiplication JSONLogic', () => {
                const ctx = createMockContext({
                    multiplicativeExpression: () => createMockContext(),
                    unaryExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitMultiplyExpression(ctx);

                expect(result).toEqual({
                    "*": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitDivideExpression', () => {
            it('should create division JSONLogic', () => {
                const ctx = createMockContext({
                    multiplicativeExpression: () => createMockContext(),
                    unaryExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitDivideExpression(ctx);

                expect(result).toEqual({
                    "/": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitModuloExpression', () => {
            it('should create modulo JSONLogic', () => {
                const ctx = createMockContext({
                    multiplicativeExpression: () => createMockContext(),
                    unaryExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' })
                    .mockReturnValueOnce(5);

                const result = visitor.visitModuloExpression(ctx);

                expect(result).toEqual({
                    "%": [{ var: 'a' }, 5]
                });
            });
        });

        describe('visitUnary', () => {
            it('should pass through to unary expression', () => {
                const mockUnaryExpr = createMockContext();
                const ctx = createMockContext({
                    unaryExpression: () => mockUnaryExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ "!": 'result' });
                
                const result = visitor.visitUnary(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockUnaryExpr);
                expect(result).toEqual({ "!": 'result' });
            });
        });
    });

    describe('Unary Expressions', () => {
        describe('visitNotExpression', () => {
            it('should create NOT JSONLogic', () => {
                const ctx = createMockContext({
                    unaryExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' });

                const result = visitor.visitNotExpression(ctx);

                expect(result).toEqual({
                    "!": { var: 'a' }
                });
            });
        });

        describe('visitDoubleNotExpression', () => {
            it('should create double NOT JSONLogic', () => {
                const ctx = createMockContext({
                    unaryExpression: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'a' });

                const result = visitor.visitDoubleNotExpression(ctx);

                expect(result).toEqual({
                    "!!": { var: 'a' }
                });
            });
        });

        describe('visitPostfix', () => {
            it('should pass through to postfix expression', () => {
                const mockPostfixExpr = createMockContext();
                const ctx = createMockContext({
                    postfixExpression: () => mockPostfixExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ var: 'result' });
                
                const result = visitor.visitPostfix(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockPostfixExpr);
                expect(result).toEqual({ var: 'result' });
            });
        });
    });

    describe('Postfix Expressions', () => {
        describe('visitPropertyAccess', () => {
            it('should handle property access on variable', () => {
                const ctx = createMockContext({
                    postfixExpression: () => createMockContext(),
                    IDENTIFIER: () => createTerminalNode('property')
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: 'obj' });

                const result = visitor.visitPropertyAccess(ctx);

                expect(result).toEqual({
                    var: 'obj.property'
                });
            });

            it('should handle property access on root object', () => {
                const ctx = createMockContext({
                    postfixExpression: () => createMockContext(),
                    IDENTIFIER: () => createTerminalNode('property')
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ var: '' });

                const result = visitor.visitPropertyAccess(ctx);

                expect(result).toEqual({
                    var: 'property'
                });
            });

            it('should handle property access on non-variable object', () => {
                const ctx = createMockContext({
                    postfixExpression: () => createMockContext(),
                    IDENTIFIER: () => createTerminalNode('property')
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce({ someOther: 'object' });

                const result = visitor.visitPropertyAccess(ctx);

                expect(result).toEqual({
                    var: 'property'
                });
            });
        });

        describe('visitPrimary', () => {
            it('should pass through to primary expression', () => {
                const mockPrimaryExpr = createMockContext();
                const ctx = createMockContext({
                    primaryExpression: () => mockPrimaryExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ var: 'result' });
                
                const result = visitor.visitPrimary(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockPrimaryExpr);
                expect(result).toEqual({ var: 'result' });
            });
        });
    });

    describe('Primary Expressions', () => {
        describe('visitVariableExpression', () => {
            it('should visit variable', () => {
                const mockVariable = createMockContext();
                const ctx = createMockContext({
                    variable: () => mockVariable
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ var: 'test' });
                
                const result = visitor.visitVariableExpression(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockVariable);
                expect(result).toEqual({ var: 'test' });
            });
        });

        describe('visitBareIdentifierExpression', () => {
            it('should visit bare identifier', () => {
                const mockBareIdentifier = createMockContext();
                const ctx = createMockContext({
                    bareIdentifier: () => mockBareIdentifier
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ var: 'test' });
                
                const result = visitor.visitBareIdentifierExpression(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockBareIdentifier);
                expect(result).toEqual({ var: 'test' });
            });
        });

        describe('visitLiteralExpression', () => {
            it('should visit literal', () => {
                const mockLiteral = createMockContext();
                const ctx = createMockContext({
                    literal: () => mockLiteral
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue(42);
                
                const result = visitor.visitLiteralExpression(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockLiteral);
                expect(result).toEqual(42);
            });
        });

        describe('visitFunctionCallExpression', () => {
            it('should visit function call', () => {
                const mockFunctionCall = createMockContext();
                const ctx = createMockContext({
                    functionCall: () => mockFunctionCall
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ max: [1, 2, 3] });
                
                const result = visitor.visitFunctionCallExpression(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockFunctionCall);
                expect(result).toEqual({ max: [1, 2, 3] });
            });
        });

        describe('visitParenthesizedExpression', () => {
            it('should visit conditional expression inside parentheses', () => {
                const mockConditionalExpr = createMockContext();
                const ctx = createMockContext({
                    conditionalExpression: () => mockConditionalExpr
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue({ var: 'test' });
                
                const result = visitor.visitParenthesizedExpression(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockConditionalExpr);
                expect(result).toEqual({ var: 'test' });
            });
        });
    });

    describe('Identifiers and Variables', () => {
        describe('visitBareIdentifier', () => {
            it('should throw error when used outside lambda context', () => {
                const ctx = createMockContext();
                ctx.getText = () => 'identifier';

                expect(() => {
                    visitor.visitBareIdentifier(ctx);
                }).toThrow('Invalid bare identifier \'identifier\'. Identifiers must be prefixed with \'@\' for variables or quoted as strings. Bare identifiers are only allowed in lambda expressions within array methods.');
            });

            it('should create variable reference when in lambda context', () => {
                const ctx = createMockContext();
                ctx.getText = () => 'identifier';

                // Enter lambda context
                visitor.enterLambdaContext();

                const result = visitor.visitBareIdentifier(ctx);

                expect(result).toEqual({
                    var: 'identifier'
                });

                // Clean up
                visitor.exitLambdaContext();
            });
        });

        describe('visitVariable', () => {
            it('should create variable reference', () => {
                const ctx = createMockContext({
                    variableName: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce('test.path');

                const result = visitor.visitVariable(ctx);

                expect(result).toEqual({
                    var: 'test.path'
                });
            });

            it('should track external variables in lambda context', () => {
                visitor.lambdaContext.isInLambda = true;
                visitor.lambdaContext.externalVariables = new Set();

                const ctx = createMockContext({
                    variableName: () => createMockContext()
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce('external.var');

                const result = visitor.visitVariable(ctx);

                expect(result).toEqual({
                    var: 'external.var'
                });
                expect(visitor.lambdaContext.externalVariables.has('external.var')).toBe(true);
            });
        });

        describe('visitVariableName', () => {
            it('should join identifiers with dots', () => {
                const ctx = createMockContext({
                    IDENTIFIER: () => [
                        createTerminalNode('obj'),
                        createTerminalNode('prop'),
                        createTerminalNode('nested')
                    ]
                });

                const result = visitor.visitVariableName(ctx);

                expect(result).toBe('obj.prop.nested');
            });

            it('should handle single identifier', () => {
                const ctx = createMockContext({
                    IDENTIFIER: () => [
                        createTerminalNode('single')
                    ]
                });

                const result = visitor.visitVariableName(ctx);

                expect(result).toBe('single');
            });
        });
    });

    describe('Literals', () => {
        describe('visitNumberLiteral', () => {
            it('should parse integer numbers', () => {
                const ctx = createMockContext({
                    NUMBER: () => createTerminalNode('42')
                });

                const result = visitor.visitNumberLiteral(ctx);

                expect(result).toBe(42);
            });

            it('should parse float numbers', () => {
                const ctx = createMockContext({
                    NUMBER: () => createTerminalNode('3.14')
                });

                const result = visitor.visitNumberLiteral(ctx);

                expect(result).toBe(3.14);
            });
        });

        describe('visitStringLiteral', () => {
            it('should parse string literals and remove quotes', () => {
                const ctx = createMockContext({
                    STRING: () => createTerminalNode('"hello world"')
                });

                const result = visitor.visitStringLiteral(ctx);

                expect(result).toBe('hello world');
            });

            it('should handle escape sequences', () => {
                const ctx = createMockContext({
                    STRING: () => createTerminalNode('"hello\\\\nworld"')
                });

                const result = visitor.visitStringLiteral(ctx);

                expect(result).toBe('hello\\nworld');
            });

            it('should handle single quotes', () => {
                const ctx = createMockContext({
                    STRING: () => createTerminalNode("'hello world'")
                });

                const result = visitor.visitStringLiteral(ctx);

                expect(result).toBe('hello world');
            });
        });

        describe('visitBooleanLiteral', () => {
            it('should parse true boolean', () => {
                const ctx = createMockContext({
                    BOOLEAN: () => createTerminalNode('true')
                });

                const result = visitor.visitBooleanLiteral(ctx);

                expect(result).toBe(true);
            });

            it('should parse false boolean', () => {
                const ctx = createMockContext({
                    BOOLEAN: () => createTerminalNode('false')
                });

                const result = visitor.visitBooleanLiteral(ctx);

                expect(result).toBe(false);
            });
        });

        describe('visitArrayLiteral', () => {
            it('should visit array', () => {
                const mockArray = createMockContext();
                const ctx = createMockContext({
                    array: () => mockArray
                });

                const visitSpy = vi.spyOn(visitor, 'visit').mockReturnValue([1, 2, 3]);
                
                const result = visitor.visitArrayLiteral(ctx);
                
                expect(visitSpy).toHaveBeenCalledWith(mockArray);
                expect(result).toEqual([1, 2, 3]);
            });
        });

        describe('visitArray', () => {
            it('should handle empty array', () => {
                const ctx = createMockContext({
                    conditionalExpression: () => null
                });

                const result = visitor.visitArray(ctx);

                expect(result).toEqual([]);
            });

            it('should handle array with expressions', () => {
                const ctx = createMockContext({
                    conditionalExpression: () => [
                        createMockContext(),
                        createMockContext(),
                        createMockContext()
                    ]
                });

                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce(1)
                    .mockReturnValueOnce(2)
                    .mockReturnValueOnce(3);

                const result = visitor.visitArray(ctx);

                expect(result).toEqual([1, 2, 3]);
            });

            it('should handle array with zero expressions', () => {
                const ctx = createMockContext({
                    conditionalExpression: () => []
                });

                const result = visitor.visitArray(ctx);

                expect(result).toEqual([]);
            });
        });
    });

    describe('Function Calls', () => {
        describe('visitFunctionCall', () => {
            it('should handle array method calls', () => {
                const ctx = createMockContext({
                    functionName: () => createMockContext({ getText: () => 'map' }),
                    conditionalExpression: () => [
                        createMockContext(), // array
                        createMockContext()  // lambda
                    ]
                });

                const handleArrayMethodSpy = vi.spyOn(visitor, 'handleArrayMethodCall')
                    .mockReturnValue({ map: 'result' });

                const result = visitor.visitFunctionCall(ctx);

                expect(handleArrayMethodSpy).toHaveBeenCalledWith('map', expect.any(Array));
                expect(result).toEqual({ map: 'result' });
            });

            it('should handle regular function calls', () => {
                const ctx = createMockContext({
                    functionName: () => createMockContext({ getText: () => 'max' }),
                    conditionalExpression: () => [
                        createMockContext(),
                        createMockContext()
                    ]
                });

                const handleRegularFunctionSpy = vi.spyOn(visitor, 'handleRegularFunctionCall')
                    .mockReturnValue({ max: 'result' });

                const result = visitor.visitFunctionCall(ctx);

                expect(handleRegularFunctionSpy).toHaveBeenCalledWith('max', expect.any(Array));
                expect(result).toEqual({ max: 'result' });
            });
        });

        describe('handleRegularFunctionCall', () => {
            it('should handle max function', () => {
                const args = [createMockContext(), createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce(1)
                    .mockReturnValueOnce(2);

                const result = visitor.handleRegularFunctionCall('max', args);

                expect(result).toEqual({ max: [1, 2] });
            });

            it('should handle min function', () => {
                const args = [createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce([1, 2, 3]);

                const result = visitor.handleRegularFunctionCall('min', args);

                expect(result).toEqual({ min: [[1, 2, 3]] });
            });

            it('should handle cat function', () => {
                const args = [createMockContext(), createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce('hello')
                    .mockReturnValueOnce('world');

                const result = visitor.handleRegularFunctionCall('cat', args);

                expect(result).toEqual({ cat: ['hello', 'world'] });
            });

            it('should handle substr function', () => {
                const args = [createMockContext(), createMockContext(), createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce('hello')
                    .mockReturnValueOnce(1)
                    .mockReturnValueOnce(3);

                const result = visitor.handleRegularFunctionCall('substr', args);

                expect(result).toEqual({ substr: ['hello', 1, 3] });
            });

            it('should handle log function', () => {
                const args = [createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce('debug message');

                const result = visitor.handleRegularFunctionCall('log', args);

                expect(result).toEqual({ log: ['debug message'] });
            });

            it('should handle custom functions', () => {
                const args = [createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce('arg');

                const result = visitor.handleRegularFunctionCall('customFunc', args);

                expect(result).toEqual({ customFunc: ['arg'] });
            });

            it('should handle functions with no arguments', () => {
                const result = visitor.handleRegularFunctionCall('noArgs', null);

                expect(result).toEqual({ noArgs: [] });
            });
        });

        describe('handleArrayMethodCall', () => {
            it('should throw error for array method with no arguments', () => {
                expect(() => {
                    visitor.handleArrayMethodCall('map', []);
                }).toThrow("Array method 'map' requires at least one argument (the array)");

                expect(() => {
                    visitor.handleArrayMethodCall('filter', null);
                }).toThrow("Array method 'filter' requires at least one argument (the array)");
            });

            it('should handle array method with just array argument', () => {
                const args = [createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce([1, 2, 3]);

                const result = visitor.handleArrayMethodCall('some', args);

                expect(result).toEqual({ some: [[1, 2, 3]] });
            });

            it('should handle array method with lambda expression', () => {
                const args = [createMockContext(), createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce([1, 2, 3]);

                const visitLambdaSpy = vi.spyOn(visitor, 'visitLambdaExpression')
                    .mockReturnValue({ ">": [{ var: "" }, 1] });

                const enterLambdaSpy = vi.spyOn(visitor, 'enterLambdaContext');
                const exitLambdaSpy = vi.spyOn(visitor, 'exitLambdaContext');

                const result = visitor.handleArrayMethodCall('filter', args);

                expect(enterLambdaSpy).toHaveBeenCalled();
                expect(visitLambdaSpy).toHaveBeenCalledWith(args[1]);
                expect(exitLambdaSpy).toHaveBeenCalled();
                expect(result).toEqual({
                    filter: [[1, 2, 3], { ">": [{ var: "" }, 1] }]
                });
            });

            it('should handle reduce with initial value', () => {
                const args = [createMockContext(), createMockContext(), createMockContext()];
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValueOnce([1, 2, 3])
                    .mockReturnValueOnce(0); // initial value

                const visitLambdaSpy = vi.spyOn(visitor, 'visitLambdaExpression')
                    .mockReturnValue({ "+": [{ var: "accumulator" }, { var: "" }] });

                const enterLambdaSpy = vi.spyOn(visitor, 'enterLambdaContext');
                const exitLambdaSpy = vi.spyOn(visitor, 'exitLambdaContext');

                const result = visitor.handleArrayMethodCall('reduce', args);

                expect(enterLambdaSpy).toHaveBeenCalled();
                expect(visitLambdaSpy).toHaveBeenCalledWith(args[1]);
                expect(exitLambdaSpy).toHaveBeenCalled();
                expect(result).toEqual({
                    reduce: [[1, 2, 3], { "+": [{ var: "accumulator" }, { var: "" }] }, 0]
                });
            });

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
        });
    });

    describe('Lambda Context Management', () => {
        describe('enterLambdaContext', () => {
            it('should set lambda context flags', () => {
                visitor.enterLambdaContext();

                expect(visitor.lambdaContext.isInLambda).toBe(true);
                expect(visitor.lambdaContext.externalVariables).toBeInstanceOf(Set);
                expect(visitor.lambdaContext.externalVariables.size).toBe(0);
            });
        });

        describe('exitLambdaContext', () => {
            it('should reset lambda context flags', () => {
                visitor.lambdaContext.isInLambda = true;
                visitor.lambdaContext.externalVariables = new Set(['test']);

                visitor.exitLambdaContext();

                expect(visitor.lambdaContext.isInLambda).toBe(false);
                expect(visitor.lambdaContext.externalVariables).toBe(null);
            });
        });

        describe('visitLambdaExpression', () => {
            it('should visit expression and transform lambda variables', () => {
                const ctx = createMockContext();
                const visitSpy = vi.spyOn(visitor, 'visit')
                    .mockReturnValue({ var: 'item.property' });
                const transformSpy = vi.spyOn(visitor, 'transformLambdaVariables')
                    .mockReturnValue({ var: 'property' });

                const result = visitor.visitLambdaExpression(ctx);

                expect(visitSpy).toHaveBeenCalledWith(ctx);
                expect(transformSpy).toHaveBeenCalledWith({ var: 'item.property' });
                expect(result).toEqual({ var: 'property' });
            });
        });

        describe('transformLambdaVariables', () => {
            it('should return primitive values unchanged', () => {
                expect(visitor.transformLambdaVariables(42)).toBe(42);
                expect(visitor.transformLambdaVariables('string')).toBe('string');
                expect(visitor.transformLambdaVariables(true)).toBe(true);
                expect(visitor.transformLambdaVariables(null)).toBe(null);
                expect(visitor.transformLambdaVariables(undefined)).toBe(undefined);
            });

            it('should transform arrays recursively', () => {
                const transformSpy = vi.spyOn(visitor, 'transformLambdaVariables');
                const input = [{ var: 'item' }, { var: 'item.prop' }];
                
                // Mock the recursive calls
                transformSpy.mockImplementation((expr) => {
                    if (expr === input) {
                        return input.map(item => visitor.transformLambdaVariables(item));
                    }
                    if (expr.var === 'item') return { var: '' };
                    if (expr.var === 'item.prop') return { var: 'prop' };
                    return expr;
                });

                const result = visitor.transformLambdaVariables(input);

                expect(Array.isArray(result)).toBe(true);
            });

            it('should transform variable references', () => {
                const transformVarSpy = vi.spyOn(visitor, 'transformVariableReference')
                    .mockReturnValue({ var: 'transformed' });

                const result = visitor.transformLambdaVariables({ var: 'original' });

                expect(transformVarSpy).toHaveBeenCalledWith({ var: 'original' });
                expect(result).toEqual({ var: 'transformed' });
            });

            it('should transform nested objects recursively', () => {
                const input = {
                    ">": [
                        { var: 'item.value' },
                        10
                    ]
                };

                const transformVarSpy = vi.spyOn(visitor, 'transformVariableReference')
                    .mockReturnValue({ var: 'value' });

                const result = visitor.transformLambdaVariables(input);

                expect(result).toEqual({
                    ">": [
                        { var: 'value' },
                        10
                    ]
                });
            });
        });

        describe('transformVariableReference', () => {
            beforeEach(() => {
                visitor.lambdaContext.externalVariables = new Set();
            });

            it('should return unchanged for empty var path', () => {
                const input = { var: '' };
                const result = visitor.transformVariableReference(input);
                expect(result).toEqual(input);
            });

            it('should return unchanged for null var path', () => {
                const input = { var: null };
                const result = visitor.transformVariableReference(input);
                expect(result).toEqual(input);
            });

            it('should return unchanged for external variables', () => {
                visitor.lambdaContext.externalVariables.add('external.var');
                const input = { var: 'external.var' };
                
                const result = visitor.transformVariableReference(input);
                
                expect(result).toEqual(input);
            });

            it('should transform dotted variable references', () => {
                const input = { var: 'item.property.nested' };
                
                const result = visitor.transformVariableReference(input);
                
                expect(result).toEqual({ var: 'property.nested' });
            });

            it('should transform simple variable names to current iteration item', () => {
                const input = { var: 'item' };
                
                const result = visitor.transformVariableReference(input);
                
                expect(result).toEqual({ var: '' });
            });

            it('should handle null external variables set', () => {
                visitor.lambdaContext.externalVariables = null;
                const input = { var: 'item.property' };
                
                const result = visitor.transformVariableReference(input);
                
                expect(result).toEqual({ var: 'property' });
            });
        });
    });

    describe('Error Handling', () => {
        describe('visitChildren', () => {
            it('should call super.visitChildren', () => {
                const ctx = createMockContext();
                const superVisitChildrenSpy = vi.spyOn(Object.getPrototypeOf(Object.getPrototypeOf(visitor)), 'visitChildren')
                    .mockReturnValue('result');

                const result = visitor.visitChildren(ctx);

                expect(superVisitChildrenSpy).toHaveBeenCalledWith(ctx);
                expect(result).toBe('result');
            });

            it('should throw error for undefined result', () => {
                class UnsupportedContext extends MockContext {}
                const ctx = new UnsupportedContext();
                
                const superVisitChildrenSpy = vi.spyOn(Object.getPrototypeOf(Object.getPrototypeOf(visitor)), 'visitChildren')
                    .mockReturnValue(undefined);

                expect(() => {
                    visitor.visitChildren(ctx);
                }).toThrow('Unsupported construct: UnsupportedContext');
            });

            it('should throw error for null result', () => {
                class NullContext extends MockContext {}
                const ctx = new NullContext();
                
                const superVisitChildrenSpy = vi.spyOn(Object.getPrototypeOf(Object.getPrototypeOf(visitor)), 'visitChildren')
                    .mockReturnValue(null);

                expect(() => {
                    visitor.visitChildren(ctx);
                }).toThrow('Unsupported construct: NullContext');
            });
        });
    });

    describe('Integration Tests', () => {
        it('should handle complex nested expressions', () => {
            // Test a complex expression like: if @user.age > 18 then "adult" else "minor"
            const ifCtx = createMockContext({
                logicalOrExpression: () => [createMockContext()], // condition
                conditionalExpression: () => [createMockContext(), createMockContext()] // then, else
            });

            const visitSpy = vi.spyOn(visitor, 'visit')
                .mockReturnValueOnce({ ">": [{ var: "user.age" }, 18] }) // condition
                .mockReturnValueOnce("adult")                            // then
                .mockReturnValueOnce("minor");                           // else

            const result = visitor.visitIfThenElse(ifCtx);

            expect(result).toEqual({
                "if": [
                    { ">": [{ var: "user.age" }, 18] },
                    "adult",
                    "minor"
                ]
            });
        });

        it('should handle array method with complex lambda', () => {
            // Test: filter(@items, item.price > 100 and item.category == "electronics")
            const args = [createMockContext(), createMockContext()];
            
            const visitSpy = vi.spyOn(visitor, 'visit')
                .mockReturnValueOnce({ var: "items" });

            const visitLambdaSpy = vi.spyOn(visitor, 'visitLambdaExpression')
                .mockReturnValue({
                    "and": [
                        { ">": [{ var: "price" }, 100] },
                        { "==": [{ var: "category" }, "electronics"] }
                    ]
                });

            const enterLambdaSpy = vi.spyOn(visitor, 'enterLambdaContext');
            const exitLambdaSpy = vi.spyOn(visitor, 'exitLambdaContext');

            const result = visitor.handleArrayMethodCall('filter', args);

            expect(result).toEqual({
                filter: [
                    { var: "items" },
                    {
                        "and": [
                            { ">": [{ var: "price" }, 100] },
                            { "==": [{ var: "category" }, "electronics"] }
                        ]
                    }
                ]
            });
        });

        it('should handle property access chains', () => {
            const ctx = createMockContext({
                postfixExpression: () => createMockContext(),
                IDENTIFIER: () => createTerminalNode('nested')
            });

            const visitSpy = vi.spyOn(visitor, 'visit')
                .mockReturnValueOnce({ var: 'obj.prop' });

            const result = visitor.visitPropertyAccess(ctx);

            expect(result).toEqual({
                var: 'obj.prop.nested'
            });
        });
    });
});