import RELVisitor from '../generated/RELVisitor.js';

/**
 * Comprehensive ANTLR4 visitor implementation for translating REL expressions 
 * into JSONLogic-compatible objects.
 * 
 * This visitor traverses the parse tree generated from REL.g4 grammar and 
 * produces clean, valid JSONLogic objects that maintain proper operator mappings,
 * nested structure handling, and data type conversions.
 */
export default class JSONLogicVisitor extends RELVisitor {
    
    constructor() {
        super();
        // Track lambda context for array method transformations
        this.lambdaContext = {
            isInLambda: false,
            externalVariables: new Set()
        };
    }

    // ==================== ENTRY POINT ====================
    
    /**
     * Entry point - visits the root expression
     */
    visitExpression(ctx) {
        return this.visit(ctx.conditionalExpression());
    }

    // ==================== CONDITIONAL EXPRESSIONS ====================
    
    /**
     * Handles if-then-else expressions with support for elseif chains
     * Produces JSONLogic: {"if": [condition1, then1, condition2, then2, ..., else]}
     */
    visitIfThenElse(ctx) {
        const conditions = ctx.logicalOrExpression();
        const expressions = ctx.conditionalExpression();
        
        // Build JSONLogic if array: [condition1, then1, condition2, then2, ..., else]
        const ifArray = [];
        
        // Add condition/then pairs (including elseif conditions)
        for (let i = 0; i < conditions.length; i++) {
            const condition = this.visit(conditions[i]);
            const thenExpr = this.visit(expressions[i]);
            ifArray.push(condition, thenExpr);
        }
        
        // Add else part (last expression)
        const elseExpr = this.visit(expressions[expressions.length - 1]);
        ifArray.push(elseExpr);
        
        return { "if": ifArray };
    }

    /**
     * Passes through to logical OR expression
     */
    visitLogicalOr(ctx) {
        return this.visit(ctx.logicalOrExpression());
    }

    // ==================== LOGICAL EXPRESSIONS ====================
    
    /**
     * Handles logical OR operations
     * Produces JSONLogic: {"or": [left, right]}
     */
    visitOrExpression(ctx) {
        const left = this.visit(ctx.logicalOrExpression());
        const right = this.visit(ctx.logicalAndExpression());
        return { "or": [left, right] };
    }

    /**
     * Passes through to logical AND expression
     */
    visitLogicalAnd(ctx) {
        return this.visit(ctx.logicalAndExpression());
    }

    /**
     * Handles logical AND operations
     * Produces JSONLogic: {"and": [left, right]}
     */
    visitAndExpression(ctx) {
        const left = this.visit(ctx.logicalAndExpression());
        const right = this.visit(ctx.equalityExpression());
        return { "and": [left, right] };
    }

    /**
     * Passes through to equality expression
     */
    visitEquality(ctx) {
        return this.visit(ctx.equalityExpression());
    }

    // ==================== EQUALITY EXPRESSIONS ====================
    
    /**
     * Handles equality comparison (==, =, eq, equals, equals to)
     * Produces JSONLogic: {"==": [left, right]}
     */
    visitEqualExpression(ctx) {
        const left = this.visit(ctx.equalityExpression());
        const right = this.visit(ctx.relationalExpression());
        return { "==": [left, right] };
    }

    /**
     * Handles strict equality comparison (===, seq, strict equals)
     * Produces JSONLogic: {"===": [left, right]}
     */
    visitStrictEqualExpression(ctx) {
        const left = this.visit(ctx.equalityExpression());
        const right = this.visit(ctx.relationalExpression());
        return { "===": [left, right] };
    }

    /**
     * Handles inequality comparison (!=, neq, not equal)
     * Produces JSONLogic: {"!=": [left, right]}
     */
    visitNotEqualExpression(ctx) {
        const left = this.visit(ctx.equalityExpression());
        const right = this.visit(ctx.relationalExpression());
        return { "!=": [left, right] };
    }

    /**
     * Handles strict inequality comparison (!==, sneq, strict not equal)
     * Produces JSONLogic: {"!==": [left, right]}
     */
    visitStrictNotEqualExpression(ctx) {
        const left = this.visit(ctx.equalityExpression());
        const right = this.visit(ctx.relationalExpression());
        return { "!==": [left, right] };
    }

    /**
     * Passes through to relational expression
     */
    visitRelational(ctx) {
        return this.visit(ctx.relationalExpression());
    }

    // ==================== RELATIONAL EXPRESSIONS ====================
    
    /**
     * Handles greater than comparison (>, gt, greater than)
     * Produces JSONLogic: {">": [left, right]}
     */
    visitGreaterThanExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return { ">": [left, right] };
    }

    /**
     * Handles greater than or equal comparison (>=, gte, greater than or equal to)
     * Produces JSONLogic: {">=": [left, right]}
     */
    visitGreaterThanOrEqualExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return { ">=": [left, right] };
    }

    /**
     * Handles less than comparison (<, lt, less than)
     * Produces JSONLogic: {"<": [left, right]}
     */
    visitLessThanExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return { "<": [left, right] };
    }

    /**
     * Handles less than or equal comparison (<=, lte, less than or equal to)
     * Produces JSONLogic: {"<=": [left, right]}
     */
    visitLessThanOrEqualExpression(ctx) {
        const left = this.visit(ctx.relationalExpression());
        const right = this.visit(ctx.additiveExpression());
        return { "<=": [left, right] };
    }

    /**
     * Handles between expressions (value between lower and upper)
     * Produces JSONLogic: {"and": [{">=": [expr, lower]}, {"<=": [expr, upper]}]}
     */
    visitBetweenExpression(ctx) {
        const expr = this.visit(ctx.relationalExpression());
        const lower = this.visit(ctx.additiveExpression(0));
        const upper = this.visit(ctx.additiveExpression(1));
        
        return {
            "and": [
                { ">=": [expr, lower] },
                { "<=": [expr, upper] }
            ]
        };
    }

    /**
     * Handles 'in' expressions (value in collection)
     * Produces JSONLogic: {"in": [value, collection]}
     */
    visitInExpression(ctx) {
        const value = this.visit(ctx.relationalExpression());
        const collection = this.visit(ctx.additiveExpression());
        return { "in": [value, collection] };
    }

    /**
     * Handles 'not in' expressions (value not in collection)
     * Produces JSONLogic: {"!": {"in": [value, collection]}}
     */
    visitNotInExpression(ctx) {
        const value = this.visit(ctx.relationalExpression());
        const collection = this.visit(ctx.additiveExpression());
        return {
            "!": {
                "in": [value, collection]
            }
        };
    }

    /**
     * Handles 'starts with' expressions (string starts with substring)
     * Uses JSONLogic substr to check if beginning of string matches substring
     * Produces JSONLogic: {"==": [{"substr": [string, 0, length]}, substring]}
     */
    visitStartsWithExpression(ctx) {
        const string = this.visit(ctx.relationalExpression());
        const substring = this.visit(ctx.additiveExpression());
        
        // For string literals, we can calculate the length directly
        // For variables, we use the length function
        let length;
        if (typeof substring === 'string') {
            length = substring.length;
        } else {
            length = { "length": substring };
        }
        
        return {
            "==": [
                {
                    "substr": [string, 0, length]
                },
                substring
            ]
        };
    }

    /**
     * Handles 'ends with' expressions (string ends with substring)
     * Uses JSONLogic substr with negative start position to check end of string
     * Produces JSONLogic: {"==": [{"substr": [string, -length]}, substring]}
     */
    visitEndsWithExpression(ctx) {
        const string = this.visit(ctx.relationalExpression());
        const substring = this.visit(ctx.additiveExpression());
        
        // For string literals, we can calculate the length directly
        // For variables, we use the length function
        let length;
        if (typeof substring === 'string') {
            length = substring.length;
        } else {
            length = { "length": substring };
        }
        
        return {
            "==": [
                {
                    "substr": [string, -length]
                },
                substring
            ]
        };
    }

    /**
     * Handles 'contains' expressions (string contains substring)
     * Produces JSONLogic: {"in": [substring, string]}
     */
    visitContainsExpression(ctx) {
        const string = this.visit(ctx.relationalExpression());
        const substring = this.visit(ctx.additiveExpression());
        
        return {
            "in": [substring, string]
        };
    }

    /**
     * Passes through to additive expression
     */
    visitAdditive(ctx) {
        return this.visit(ctx.additiveExpression());
    }

    // ==================== ARITHMETIC EXPRESSIONS ====================
    
    /**
     * Handles addition (+, plus)
     * Produces JSONLogic: {"+": [left, right]}
     */
    visitAddExpression(ctx) {
        const left = this.visit(ctx.additiveExpression());
        const right = this.visit(ctx.multiplicativeExpression());
        return { "+": [left, right] };
    }

    /**
     * Handles subtraction (-, minus)
     * Produces JSONLogic: {"-": [left, right]}
     */
    visitSubtractExpression(ctx) {
        const left = this.visit(ctx.additiveExpression());
        const right = this.visit(ctx.multiplicativeExpression());
        return { "-": [left, right] };
    }

    /**
     * Passes through to multiplicative expression
     */
    visitMultiplicative(ctx) {
        return this.visit(ctx.multiplicativeExpression());
    }

    /**
     * Handles multiplication (*, multiply, times)
     * Produces JSONLogic: {"*": [left, right]}
     */
    visitMultiplyExpression(ctx) {
        const left = this.visit(ctx.multiplicativeExpression());
        const right = this.visit(ctx.unaryExpression());
        return { "*": [left, right] };
    }

    /**
     * Handles division (/, divide, over)
     * Produces JSONLogic: {"/": [left, right]}
     */
    visitDivideExpression(ctx) {
        const left = this.visit(ctx.multiplicativeExpression());
        const right = this.visit(ctx.unaryExpression());
        return { "/": [left, right] };
    }

    /**
     * Handles modulo (%, modulo, mod, remainder)
     * Produces JSONLogic: {"%": [left, right]}
     */
    visitModuloExpression(ctx) {
        const left = this.visit(ctx.multiplicativeExpression());
        const right = this.visit(ctx.unaryExpression());
        return { "%": [left, right] };
    }

    /**
     * Passes through to unary expression
     */
    visitUnary(ctx) {
        return this.visit(ctx.unaryExpression());
    }

    // ==================== UNARY EXPRESSIONS ====================
    
    /**
     * Handles logical NOT (!, not)
     * Produces JSONLogic: {"!": expr}
     */
    visitNotExpression(ctx) {
        const expr = this.visit(ctx.unaryExpression());
        return { "!": expr };
    }

    /**
     * Handles double NOT (!!)
     * Produces JSONLogic: {"!!": expr}
     */
    visitDoubleNotExpression(ctx) {
        const expr = this.visit(ctx.unaryExpression());
        return { "!!": expr };
    }

    /**
     * Passes through to postfix expression
     */
    visitPostfix(ctx) {
        return this.visit(ctx.postfixExpression());
    }

    // ==================== POSTFIX EXPRESSIONS ====================
    
    /**
     * Handles property access with dot notation (obj.property)
     * Produces JSONLogic: {"var": "path.to.property"}
     */
    visitPropertyAccess(ctx) {
        const object = this.visit(ctx.postfixExpression());
        const property = ctx.IDENTIFIER().getText();
        
        if (object && object.var !== undefined) {
            // Extend the variable path
            const basePath = object.var;
            const fullPath = basePath ? `${basePath}.${property}` : property;
            return { var: fullPath };
        }
        
        // Handle other object types - create property access
        return { var: property };
    }

    /**
     * Passes through to primary expression
     */
    visitPrimary(ctx) {
        return this.visit(ctx.primaryExpression());
    }

    // ==================== PRIMARY EXPRESSIONS ====================
    
    /**
     * Handles variable expressions (@variable)
     */
    visitVariableExpression(ctx) {
        return this.visit(ctx.variable());
    }

    /**
     * Handles bare identifier expressions (used in lambda contexts)
     */
    visitBareIdentifierExpression(ctx) {
        return this.visit(ctx.bareIdentifier());
    }

    /**
     * Handles literal expressions (numbers, strings, booleans, arrays)
     */
    visitLiteralExpression(ctx) {
        return this.visit(ctx.literal());
    }

    /**
     * Handles function call expressions
     */
    visitFunctionCallExpression(ctx) {
        return this.visit(ctx.functionCall());
    }

    /**
     * Handles parenthesized expressions
     */
    visitParenthesizedExpression(ctx) {
        return this.visit(ctx.conditionalExpression());
    }

    /**
     * Handles if expressions used as primary expressions
     */
    visitIfExpressionPrimary(ctx) {
        const conditions = ctx.logicalOrExpression();
        const expressions = ctx.conditionalExpression();
        
        // Build JSONLogic if array: [condition1, then1, condition2, then2, ..., else]
        const ifArray = [];
        
        // Add condition/then pairs (including elseif conditions)
        for (let i = 0; i < conditions.length; i++) {
            const condition = this.visit(conditions[i]);
            const thenExpr = this.visit(expressions[i]);
            ifArray.push(condition, thenExpr);
        }
        
        // Add else part (last expression)
        const elseExpr = this.visit(expressions[expressions.length - 1]);
        ifArray.push(elseExpr);
        
        return { "if": ifArray };
    }

    // ==================== IDENTIFIERS AND VARIABLES ====================
    
    /**
     * Handles bare identifiers (typically used in lambda expressions)
     * Produces JSONLogic: {"var": "identifier"}
     * Throws error if used outside lambda context
     */
    visitBareIdentifier(ctx) {
        const identifier = ctx.getText();
        
        // Validate that bare identifiers are only used in lambda contexts
        if (!this.lambdaContext.isInLambda) {
            throw new Error(`Invalid bare identifier '${identifier}'. Identifiers must be prefixed with '@' for variables or quoted as strings. Bare identifiers are only allowed in lambda expressions within array methods.`);
        }
        
        return { var: identifier };
    }

    /**
     * Handles variable references (@variable.path)
     * Produces JSONLogic: {"var": "variable.path"}
     */
    visitVariable(ctx) {
        const varName = this.visit(ctx.variableName());
        
        // Track external variables in lambda context
        if (this.lambdaContext.isInLambda) {
            this.lambdaContext.externalVariables.add(varName);
        }
        
        return { var: varName };
    }

    /**
     * Handles variable names with dot notation support
     * Returns: "variable.path.to.property"
     */
    visitVariableName(ctx) {
        const identifiers = ctx.IDENTIFIER();
        return identifiers.map(id => id.getText()).join(".");
    }

    // ==================== LITERALS ====================
    
    /**
     * Handles number literals
     * Returns: number (integer or float)
     */
    visitNumberLiteral(ctx) {
        const text = ctx.NUMBER().getText();
        return text.includes('.') ? parseFloat(text) : parseInt(text, 10);
    }

    /**
     * Handles string literals
     * Returns: string (with escape sequences processed)
     */
    visitStringLiteral(ctx) {
        const text = ctx.STRING().getText();
        // Remove quotes and handle escape sequences
        return text.slice(1, -1).replace(/\\(.)/g, '$1');
    }

    /**
     * Handles boolean literals
     * Returns: boolean
     */
    visitBooleanLiteral(ctx) {
        return ctx.BOOLEAN().getText() === 'true';
    }

    /**
     * Handles array literals
     */
    visitArrayLiteral(ctx) {
        return this.visit(ctx.array());
    }

    /**
     * Handles placeholder literals
     * Returns: string (the placeholder including braces)
     */
    visitPlaceholderLiteral(ctx) {
        return this.visit(ctx.placeholder());
    }

    /**
     * Handles placeholder tokens
     * Returns: string (the placeholder including braces)
     */
    visitPlaceholder(ctx) {
        return ctx.PLACEHOLDER().getText();
    }

    /**
     * Handles array construction
     * Returns: array of visited expressions
     */
    visitArray(ctx) {
        const expressions = ctx.conditionalExpression();
        if (!expressions || expressions.length === 0) {
            return [];
        }
        return expressions.map(expr => this.visit(expr));
    }

    // ==================== FUNCTION CALLS ====================
    
    /**
     * Handles function calls including array methods and built-in functions
     * Produces appropriate JSONLogic based on function type
     */
    visitFunctionCall(ctx) {
        const functionName = ctx.functionName().getText();
        const args = ctx.conditionalExpression();
        
        // Array methods that work with lambda expressions
        const arrayMethods = ['some', 'all', 'none', 'map', 'filter', 'reduce', 'merge'];
        
        if (arrayMethods.includes(functionName)) {
            return this.handleArrayMethodCall(functionName, args);
        } else {
            return this.handleRegularFunctionCall(functionName, args);
        }
    }

    /**
     * Handles regular function calls (non-array methods)
     * Produces JSONLogic: {functionName: [arg1, arg2, ...]}
     */
    handleRegularFunctionCall(functionName, args) {
        const argValues = args ? args.map(arg => this.visit(arg)) : [];
        
        // Handle built-in functions with specific JSONLogic mappings
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
            default:
                // Custom function or unrecognized built-in
                return { [functionName]: argValues };
        }
    }

    /**
     * Handles array method calls with lambda expression support
     * Produces JSONLogic: {methodName: [array, lambdaExpression, ...additionalArgs]}
     */
    handleArrayMethodCall(methodName, args) {
        if (!args || args.length === 0) {
            throw new Error(`Array method '${methodName}' requires at least one argument (the array)`);
        }
        
        const arrayExpr = this.visit(args[0]); // First argument is the array
        
        if (args.length === 1) {
            // No lambda expression, just the array
            return { [methodName]: [arrayExpr] };
        }
        
        // Handle lambda expression in array method context
        this.enterLambdaContext();
        
        try {
            if (args.length === 2) {
                // Second argument is the lambda expression
                const lambdaExpr = this.visitLambdaExpression(args[1]);
                return { [methodName]: [arrayExpr, lambdaExpr] };
            } else {
                // Handle methods like reduce with initial value
                const lambdaExpr = this.visitLambdaExpression(args[1]);
                const additionalArgs = args.slice(2).map(arg => this.visit(arg));
                return { [methodName]: [arrayExpr, lambdaExpr, ...additionalArgs] };
            }
        } finally {
            this.exitLambdaContext();
        }
    }

    // ==================== LAMBDA CONTEXT MANAGEMENT ====================
    
    /**
     * Enters lambda context for array method processing
     */
    enterLambdaContext() {
        this.lambdaContext.isInLambda = true;
        this.lambdaContext.externalVariables = new Set();
    }

    /**
     * Exits lambda context
     */
    exitLambdaContext() {
        this.lambdaContext.isInLambda = false;
        this.lambdaContext.externalVariables = null;
    }

    /**
     * Visits lambda expressions with proper variable transformation
     */
    visitLambdaExpression(ctx) {
        const result = this.visit(ctx);
        return this.transformLambdaVariables(result);
    }

    /**
     * Transforms variables in lambda expressions for JSONLogic compatibility
     * - Bare identifiers become current iteration item: {"var": ""}
     * - Property access becomes property path: {"var": "property.path"}
     * - External variables (@var) remain unchanged
     */
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

    /**
     * Transforms variable references in lambda context
     */
    transformVariableReference(varExpr) {
        const varPath = varExpr.var;
        
        if (!varPath) {
            return varExpr;
        }
        
        // External variables (tracked from @variable references) remain unchanged
        if (this.lambdaContext.externalVariables && 
            this.lambdaContext.externalVariables.has(varPath)) {
            return varExpr;
        }
        
        // In lambda context, transform dotted variable references
        if (varPath.includes('.')) {
            const parts = varPath.split('.');
            // Remove the first part (iteration variable) and keep the property path
            const propertyPath = parts.slice(1).join('.');
            return { var: propertyPath };
        }
        
        // Simple variable names without @ prefix become current iteration item
        return { var: "" };
    }

    // ==================== ERROR HANDLING ====================
    
    /**
     * Handles unsupported or unrecognized constructs
     */
    visitChildren(ctx) {
        // Fallback for any unhandled cases
        const result = super.visitChildren(ctx);
        
        if (result === undefined || result === null) {
            throw new Error(`Unsupported construct: ${ctx.constructor.name}`);
        }
        
        return result;
    }
}