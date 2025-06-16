import RELVisitor from '../generated/RELVisitor.js';

export default class RELToJSONLogicVisitor extends RELVisitor {
    
    // Entry point
    visitExpression(ctx) {
        return this.visit(ctx.conditionalExpression());
    }

    // Conditional expressions
    visitIfThenElse(ctx) {
        const conditions = ctx.logicalOrExpression();
        const expressions = ctx.conditionalExpression();
        
        // Build flat JSONLogic if array: [condition1, then1, condition2, then2, ..., else]
        const ifArray = [];
        
        // Add condition/then pairs
        for (let i = 0; i < conditions.length; i++) {
            const condition = this.visit(conditions[i]);
            const thenExpr = this.visit(expressions[i]);
            ifArray.push(condition, thenExpr);
        }
        
        // Add else part (last expression)
        const elseExpr = this.visit(expressions[expressions.length - 1]);
        ifArray.push(elseExpr);
        
        return {
            "if": ifArray
        };
    }

    visitLogicalOr(ctx) {
        return this.visit(ctx.logicalOrExpression());
    }

    // Logical OR
    visitOrExpression(ctx) {
        const left = this.visit(ctx.logicalOrExpression());
        const right = this.visit(ctx.logicalAndExpression());
        return {
            "or": [left, right]
        };
    }

    visitLogicalAnd(ctx) {
        return this.visit(ctx.logicalAndExpression());
    }

    // Logical AND
    visitAndExpression(ctx) {
        const left = this.visit(ctx.logicalAndExpression());
        const right = this.visit(ctx.equalityExpression());
        return {
            "and": [left, right]
        };
    }

    visitEquality(ctx) {
        return this.visit(ctx.equalityExpression());
    }

    // Equality operations
    visitEqualExpression(ctx) {
        const left = this.visit(ctx.equalityExpression());
        const right = this.visit(ctx.relationalExpression());
        return {
            "==": [left, right]
        };
    }

    visitStrictEqualExpression(ctx) {
        const left = this.visit(ctx.equalityExpression());
        const right = this.visit(ctx.relationalExpression());
        return {
            "===": [left, right]
        };
    }

    visitNotEqualExpression(ctx) {
        const left = this.visit(ctx.equalityExpression());
        const right = this.visit(ctx.relationalExpression());
        return {
            "!=": [left, right]
        };
    }

    visitStrictNotEqualExpression(ctx) {
        const left = this.visit(ctx.equalityExpression());
        const right = this.visit(ctx.relationalExpression());
        return {
            "!==": [left, right]
        };
    }

    visitRelational(ctx) {
        return this.visit(ctx.relationalExpression());
    }

    // Relational operations
    visitGreaterThanExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return {
            ">": [left, right]
        };
    }

    visitGreaterThanOrEqualExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return {
            ">=": [left, right]
        };
    }

    visitLessThanExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return {
            "<": [left, right]
        };
    }

    visitLessThanOrEqualExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return {
            "<=": [left, right]
        };
    }

    visitBetweenExpression(ctx) {
        const expr = this.visit(ctx.relationalExpression());
        const lower = this.visit(ctx.additiveExpression(0));
        const upper = this.visit(ctx.additiveExpression(1));
        return {
            "and": [
                {">=": [expr, lower]},
                {"<=": [expr, upper]}
            ]
        };
    }

    visitInExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return {
            "in": [left, right]
        };
    }

    visitNotInExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return {
            "!": {
                "in": [left, right]
            }
        };
    }

    visitAdditive(ctx) {
        return this.visit(ctx.additiveExpression());
    }

    // Arithmetic operations
    visitAddExpression(ctx) {
        const left = this.visit(ctx.additiveExpression());
        const right = this.visit(ctx.multiplicativeExpression());
        return {
            "+": [left, right]
        };
    }

    visitSubtractExpression(ctx) {
        const left = this.visit(ctx.additiveExpression());
        const right = this.visit(ctx.multiplicativeExpression());
        return {
            "-": [left, right]
        };
    }

    visitMultiplicative(ctx) {
        return this.visit(ctx.multiplicativeExpression());
    }

    visitMultiplyExpression(ctx) {
        const left = this.visit(ctx.multiplicativeExpression());
        const right = this.visit(ctx.unaryExpression());
        return {
            "*": [left, right]
        };
    }

    visitDivideExpression(ctx) {
        const left = this.visit(ctx.multiplicativeExpression());
        const right = this.visit(ctx.unaryExpression());
        return {
            "/": [left, right]
        };
    }

    visitModuloExpression(ctx) {
        const left = this.visit(ctx.multiplicativeExpression());
        const right = this.visit(ctx.unaryExpression());
        return {
            "%": [left, right]
        };
    }

    visitUnary(ctx) {
        return this.visit(ctx.unaryExpression());
    }

    visitPostfix(ctx) {
        return this.visit(ctx.postfixExpression());
    }

    // Unary operations
    visitNotExpression(ctx) {
        const expr = this.visit(ctx.unaryExpression());
        return {
            "!": expr
        };
    }

    visitDoubleNotExpression(ctx) {
        const expr = this.visit(ctx.unaryExpression());
        return {
            "!!": expr
        };
    }

    visitArrayMethod(ctx) {
        return this.visit(ctx.arrayMethodExpression());
    }

    // Array method expressions
    visitArrayMethodCall(ctx) {
        const arrayExpr = this.visit(ctx.arrayMethodExpression());
        const methodName = ctx.arrayMethodName().getText();
        const body = ctx.arrayMethodBody();
        
        // Always visit the body since it's now required in grammar
        const bodyExpr = this.visit(body);
        
        if (bodyExpr === null || bodyExpr === undefined) {
            return {
                [methodName]: [arrayExpr]
            };
        } else {
            return {
                [methodName]: [arrayExpr, bodyExpr]
            };
        }
    }

    // Handle empty array method body
    visitArrayMethodEmpty(ctx) {
        return null; // Indicates no condition/arguments
    }
    

    // Array method body handlers
    visitArrayMethodWithArgs(ctx) {
        const expressions = ctx.conditionalExpression();
        if (expressions.length === 1) {
            return this.visit(expressions[0]);
        } else {
            // Multiple arguments
            return expressions.map(expr => this.visit(expr));
        }
    }

    visitArrayMethodComparison(ctx) {
        const operator = ctx.relationalOperator().getText();
        const expr = this.visit(ctx.primaryExpression());
        return {
            [operator]: [{"var": ""}, expr]
        };
    }

    visitArrayMethodEquality(ctx) {
        const expr = this.visit(ctx.primaryExpression());
        return {
            "==": [{"var": ""}, expr]
        };
    }

    visitArrayMethodStrictEquality(ctx) {
        const expr = this.visit(ctx.primaryExpression());
        return {
            "===": [{"var": ""}, expr]
        };
    }

    visitArrayMethodNotEqual(ctx) {
        const expr = this.visit(ctx.primaryExpression());
        return {
            "!=": [{"var": ""}, expr]
        };
    }

    visitArrayMethodStrictNotEqual(ctx) {
        const expr = this.visit(ctx.primaryExpression());
        return {
            "!==": [{"var": ""}, expr]
        };
    }

    visitArrayMethodIn(ctx) {
        const expr = this.visit(ctx.primaryExpression());
        return {
            "in": [{"var": ""}, expr]
        };
    }

    visitArrayMethodNotIn(ctx) {
        const expr = this.visit(ctx.primaryExpression());
        return {
            "!": {
                "in": [{"var": ""}, expr]
            }
        };
    }

    // Array method property access handlers
    visitArrayMethodPropertyComparison(ctx) {
        const property = ctx.IDENTIFIER().getText();
        const operator = ctx.relationalOperator().getText();
        const expr = this.visit(ctx.primaryExpression());
        return {
            [operator]: [{"var": property}, expr]
        };
    }

    visitArrayMethodPropertyEquality(ctx) {
        const property = ctx.IDENTIFIER().getText();
        const expr = this.visit(ctx.primaryExpression());
        return {
            "==": [{"var": property}, expr]
        };
    }

    visitArrayMethodPropertyStrictEquality(ctx) {
        const property = ctx.IDENTIFIER().getText();
        const expr = this.visit(ctx.primaryExpression());
        return {
            "===": [{"var": property}, expr]
        };
    }

    visitArrayMethodPropertyNotEqual(ctx) {
        const property = ctx.IDENTIFIER().getText();
        const expr = this.visit(ctx.primaryExpression());
        return {
            "!=": [{"var": property}, expr]
        };
    }

    visitArrayMethodPropertyStrictNotEqual(ctx) {
        const property = ctx.IDENTIFIER().getText();
        const expr = this.visit(ctx.primaryExpression());
        return {
            "!==": [{"var": property}, expr]
        };
    }

    visitArrayMethodPropertyIn(ctx) {
        const property = ctx.IDENTIFIER().getText();
        const expr = this.visit(ctx.primaryExpression());
        return {
            "in": [{"var": property}, expr]
        };
    }

    visitArrayMethodPropertyNotIn(ctx) {
        const property = ctx.IDENTIFIER().getText();
        const expr = this.visit(ctx.primaryExpression());
        return {
            "!": {
                "in": [{"var": property}, expr]
            }
        };
    }

    // Postfix expressions
    visitPropertyAccess(ctx) {
        const object = this.visit(ctx.postfixExpression());
        const property = ctx.IDENTIFIER().getText();
        
        if (object && object.var !== undefined) {
            // Extend the variable path
            const basePath = object.var;
            const fullPath = basePath ? `${basePath}.${property}` : property;
            return { var: fullPath };
        }
        
        // Fallback for other cases
        return { var: property };
    }

    visitPrimary(ctx) {
        return this.visit(ctx.primaryExpression());
    }

    // Primary expressions
    visitVariableExpression(ctx) {
        const variable = this.visit(ctx.variable());
        return variable;
    }

    visitLiteralExpression(ctx) {
        return this.visit(ctx.literal());
    }

    visitFunctionCallExpression(ctx) {
        return this.visit(ctx.functionCall());
    }

    visitParenthesizedExpression(ctx) {
        return this.visit(ctx.conditionalExpression());
    }

    // Variables
    visitVariable(ctx) {
        const varName = this.visit(ctx.variableName());
        if (this.isInLambda && this.externalVariables) {
            this.externalVariables.add(varName);
        }
        
        return {
            "var": varName
        };
    }

    visitVariableName(ctx) {
        const identifiers = ctx.IDENTIFIER();
        return identifiers.map(id => id.getText()).join(".");
    }

    // Literals
    visitNumberLiteral(ctx) {
        const text = ctx.NUMBER().getText();
        return text.includes('.') ? parseFloat(text) : parseInt(text, 10);
    }

    visitStringLiteral(ctx) {
        const text = ctx.STRING().getText();
        // Remove quotes and handle escape sequences
        return text.slice(1, -1).replace(/\\(.)/g, '$1');
    }

    visitBareIdentifierExpression(ctx) {
        return this.visit(ctx.bareIdentifier());
    }    

    visitBareIdentifier(ctx) {
        const identifier = ctx.getText();
        // Treat bare identifiers as variable references
        return { var: identifier };
    }

    visitBooleanLiteral(ctx) {
        return ctx.BOOLEAN().getText() === 'true';
    }

    visitArrayLiteral(ctx) {
        return this.visit(ctx.array());
    }

    // Array
    visitArray(ctx) {
        const expressions = ctx.conditionalExpression();
        if (!expressions) return [];
        return expressions.map(expr => this.visit(expr));
    }

    // Function calls
    visitFunctionCall(ctx) {
        const functionName = ctx.functionName().getText();
        const args = ctx.conditionalExpression();
        
        // Array methods that work with lambda expressions
        const arrayMethods = ['some', 'all', 'none', 'map', 'filter', 'reduce'];
        
        if (arrayMethods.includes(functionName)) {
            return this.handleArrayMethodCall(functionName, args);
        } else {
            // Regular function call
            return this.handleRegularFunctionCall(functionName, args);
        }
    }
    

    handleRegularFunctionCall(functionName, args) {
        const argValues = args ? args.map(arg => this.visit(arg)) : [];
        
        // Handle built-in functions
        switch (functionName) {
            case 'max':
                return { max: argValues };
            case 'min':
                return { min: argValues };
            case 'cat':
                return { cat: argValues };
            case 'substr':
                return { substr: argValues };
            case 'log':
                return { log: argValues };
            case 'merge':
                return { merge: argValues };
            default:
                // Custom function
                return { [functionName]: argValues };
        }
    }

    handleArrayMethodCall(methodName, args) {
        if (!args || args.length === 0) {
            throw new Error(`Array method '${methodName}' requires at least one argument`);
        }
        
        const arrayExpr = this.visit(args[0]); // First argument is the array
        
        if (args.length === 1) {
            // No lambda expression, just the array
            return {
                [methodName]: [arrayExpr]
            };
        } else if (args.length === 2) {
            // Second argument is the lambda expression - set lambda context
            this.setupLambdaContext();
            const lambdaExpr = this.visitLambdaExpression(args[1]);
            this.teardownLambdaContext();
            return {
                [methodName]: [arrayExpr, lambdaExpr]
            };
        } else {
            // Handle reduce with initial value or other multi-argument cases
            this.setupLambdaContext();
            const lambdaExpr = this.visitLambdaExpression(args[1]);
            this.teardownLambdaContext();
            const additionalArgs = args.slice(2).map(arg => this.visit(arg));
            return {
                [methodName]: [arrayExpr, lambdaExpr, ...additionalArgs]
            };
        }
    }

    setupLambdaContext() {
        this.isInLambda = true;
        this.externalVariables = new Set();
    }

    teardownLambdaContext() {
        this.isInLambda = false;
        this.externalVariables = null;
    }
    

    visitLambdaExpression(ctx) {
        // Visit the lambda expression and transform variables only if in lambda context
        const result = this.visit(ctx);
        if (this.isInLambda) {
            return this.transformLambdaVariables(result);
        }
        return result;
    }
    

    transformLambdaVariables(expr) {
        if (!expr || typeof expr !== 'object') {
            return expr;
        }
        
        if (Array.isArray(expr)) {
            return expr.map(item => this.transformLambdaVariables(item));
        }
        
        // Handle variable references in lambda context
        if (expr.var !== undefined) {
            return this.transformVariableReference(expr);
        }
        
        // Recursively transform nested expressions
        const result = {};
        for (const [key, value] of Object.entries(expr)) {
            result[key] = this.transformLambdaVariables(value);
        }
        return result;
    }
    

    transformVariableReference(varExpr) {
        const varPath = varExpr.var;
        
        if (!varPath) {
            return varExpr;
        }
        
        // In lambda context, transform dotted variable references
        if (varPath.includes('.')) {
            const parts = varPath.split('.');
            // Remove the first part (iteration variable) and keep the property path  
            const propertyPath = parts.slice(1).join('.');
            return { var: propertyPath };
        }
        
        // For simple variable names, check if they are iteration variables
        // External variables (those with @ prefix) are tracked separately
        if (this.externalVariables && this.externalVariables.has(varPath)) {
            // This is an external variable, keep it unchanged
            return varExpr;
        }
        
        // Simple variable names without @ prefix become current iteration item
        return { var: "" };
    }
    
}

// Helper class to track lambda context (if needed for more complex cases)
class LambdaContext {
    constructor() {
        this.iterationVariables = new Set();
    }
    
    addIterationVariable(name) {
        this.iterationVariables.add(name);
    }
    
    isIterationVariable(name) {
        return this.iterationVariables.has(name);
    }
}