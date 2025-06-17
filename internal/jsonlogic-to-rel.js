/**
 * JSONLogic to REL Expression Converter
 * 
 * This module provides functionality to convert JSONLogic objects back to 
 * human-readable REL (Rule Expression Language) expressions.
 */

/**
 * Converts a JSONLogic object to a REL expression string
 * @param {object} jsonLogic - The JSONLogic object to convert
 * @returns {string} - The equivalent REL expression
 */
export function jsonLogicToRel(jsonLogic) {
    if (!jsonLogic || typeof jsonLogic !== 'object') {
        return convertLiteral(jsonLogic);
    }

    // Handle arrays (used in JSONLogic for multiple arguments)
    if (Array.isArray(jsonLogic)) {
        // If this is a top-level array (literal), format as array
        const elements = jsonLogic.map(item => jsonLogicToRel(item)).join(', ');
        return `[${elements}]`;
    }

    // Get the operator and its arguments
    const entries = Object.entries(jsonLogic);
    if (entries.length !== 1) {
        throw new Error('Invalid JSONLogic: object must have exactly one key');
    }

    const [operator, args] = entries[0];
    return convertOperator(operator, args);
}

/**
 * Converts JSONLogic operators to REL expressions
 * @param {string} operator - The JSONLogic operator
 * @param {any} args - The operator arguments
 * @returns {string} - The REL expression
 */
function convertOperator(operator, args) {
    // Ensure args is an array for consistent processing
    const argArray = Array.isArray(args) ? args : [args];
    
    switch (operator) {
        // Variables
        case 'var':
            return convertVariable(args);
            
        // Logical operators
        case 'and':
            return convertBinaryOperator(argArray, ' and ');
        case 'or':
            return convertBinaryOperator(argArray, ' or ');
        case '!':
            return `!${jsonLogicToRel(args)}`;
        case '!!':
            return `!!${jsonLogicToRel(args)}`;
            
        // Comparison operators
        case '==':
            // Check for string operation patterns
            const stringOp = detectStringOperation(argArray);
            if (stringOp) {
                return stringOp;
            }
            return convertBinaryOperator(argArray, ' == ');
        case '===':
            return convertBinaryOperator(argArray, ' === ');
        case '!=':
            return convertBinaryOperator(argArray, ' != ');
        case '!==':
            return convertBinaryOperator(argArray, ' !== ');
        case '>':
            return convertBinaryOperator(argArray, ' > ');
        case '>=':
            return convertBinaryOperator(argArray, ' >= ');
        case '<':
            return convertBinaryOperator(argArray, ' < ');
        case '<=':
            return convertBinaryOperator(argArray, ' <= ');
            
        // Arithmetic operators
        case '+':
            return convertBinaryOperator(argArray, ' + ');
        case '-':
            return convertBinaryOperator(argArray, ' - ');
        case '*':
            return convertBinaryOperator(argArray, ' * ');
        case '/':
            return convertBinaryOperator(argArray, ' / ');
        case '%':
            return convertBinaryOperator(argArray, ' % ');
            
        // Membership operators
        case 'in':
            // Check if this is a "contains" pattern (substring in string)
            const containsPattern = detectContainsPattern(argArray);
            if (containsPattern) {
                return containsPattern;
            }
            return `${jsonLogicToRel(argArray[0])} in ${jsonLogicToRel(argArray[1])}`;
            
        // Conditional expressions
        case 'if':
            return convertIfExpression(argArray);
            
        // Functions
        case 'max':
            return `max(${argArray.map(arg => jsonLogicToRel(arg)).join(', ')})`;
        case 'min':
            return `min(${argArray.map(arg => jsonLogicToRel(arg)).join(', ')})`;
        case 'cat':
            return `cat(${argArray.map(arg => jsonLogicToRel(arg)).join(', ')})`;
        case 'substr':
            return `substr(${argArray.map(arg => jsonLogicToRel(arg)).join(', ')})`;
        case 'log':
            return `log(${argArray.map(arg => jsonLogicToRel(arg)).join(', ')})`;
            
        // Array methods
        case 'some':
            return convertArrayMethod('some', argArray);
        case 'all':
            return convertArrayMethod('all', argArray);
        case 'none':
            return convertArrayMethod('none', argArray);
        case 'map':
            return convertArrayMethod('map', argArray);
        case 'filter':
            return convertArrayMethod('filter', argArray);
        case 'reduce':
            return convertArrayMethod('reduce', argArray);
        case 'merge':
            return convertArrayMethod('merge', argArray);
            
        default:
            // Handle custom functions or unrecognized operators
            if (argArray.length === 0) {
                return operator;
            }
            return `${operator}(${argArray.map(arg => jsonLogicToRel(arg)).join(', ')})`;
    }
}

/**
 * Converts variable references
 * @param {string} varPath - The variable path
 * @returns {string} - The REL variable expression
 */
function convertVariable(varPath) {
    if (varPath === '') {
        // Empty string represents current iteration item in lambda context
        return 'item';
    }
    
    // Add @ prefix for external variables
    return `@${varPath}`;
}

/**
 * Converts binary operators with proper precedence handling
 * @param {Array} args - The operator arguments
 * @param {string} operator - The operator symbol
 * @returns {string} - The REL expression
 */
function convertBinaryOperator(args, operator) {
    if (args.length < 2) {
        throw new Error(`Binary operator requires at least 2 arguments, got ${args.length}`);
    }
    
    // Handle multiple arguments (chain operations)
    if (args.length === 2) {
        const left = jsonLogicToRel(args[0]);
        const right = jsonLogicToRel(args[1]);
        
        // Add parentheses for complex expressions to maintain precedence
        const leftNeedsParens = needsParentheses(args[0], operator);
        const rightNeedsParens = needsParentheses(args[1], operator);
        
        const leftExpr = leftNeedsParens ? `(${left})` : left;
        const rightExpr = rightNeedsParens ? `(${right})` : right;
        
        return `${leftExpr}${operator}${rightExpr}`;
    }
    
    // For more than 2 arguments, chain them
    let result = jsonLogicToRel(args[0]);
    for (let i = 1; i < args.length; i++) {
        result += `${operator}${jsonLogicToRel(args[i])}`;
    }
    return result;
}

/**
 * Determines if an expression needs parentheses based on operator precedence
 * @param {any} expr - The expression to check
 * @param {string} parentOperator - The parent operator
 * @returns {boolean} - Whether parentheses are needed
 */
function needsParentheses(expr, parentOperator) {
    if (!expr || typeof expr !== 'object' || Array.isArray(expr)) {
        return false;
    }
    
    const entries = Object.entries(expr);
    if (entries.length !== 1) {
        return false;
    }
    
    const [childOperator] = entries[0];
    
    // Define operator precedence (higher number = higher precedence)
    const precedence = {
        'or': 1,
        'and': 2,
        '==': 3, '===': 3, '!=': 3, '!==': 3,
        '>': 4, '>=': 4, '<': 4, '<=': 4, 'in': 4,
        '+': 5, '-': 5,
        '*': 6, '/': 6, '%': 6,
        '!': 7, '!!': 7
    };
    
    const parentPrec = precedence[parentOperator.trim()] || 0;
    const childPrec = precedence[childOperator] || 0;
    
    // Need parentheses if child has lower precedence than parent
    return childPrec > 0 && childPrec < parentPrec;
}

/**
 * Converts if-then-else expressions
 * @param {Array} args - The if expression arguments
 * @returns {string} - The REL if expression
 */
function convertIfExpression(args) {
    if (args.length < 3) {
        throw new Error('If expression requires at least 3 arguments (condition, then, else)');
    }
    
    let result = '';
    let i = 0;
    
    // Handle condition-then pairs
    while (i < args.length - 1) {
        const condition = jsonLogicToRel(args[i]);
        const thenExpr = jsonLogicToRel(args[i + 1]);
        
        if (i === 0) {
            result = `if ${condition} then ${thenExpr}`;
        } else {
            result += ` elseif ${condition} then ${thenExpr}`;
        }
        
        i += 2;
    }
    
    // Handle else part (last argument)
    if (i < args.length) {
        const elseExpr = jsonLogicToRel(args[i]);
        result += ` else ${elseExpr}`;
    }
    
    return result;
}

/**
 * Converts array method calls
 * @param {string} method - The array method name
 * @param {Array} args - The method arguments
 * @returns {string} - The REL array method expression
 */
function convertArrayMethod(method, args) {
    if (args.length === 0) {
        throw new Error(`Array method '${method}' requires at least one argument`);
    }
    
    const arrayExpr = jsonLogicToRel(args[0]);
    
    if (args.length === 1) {
        return `${method}(${arrayExpr})`;
    }
    
    // Extract array variable name for lambda context
    let arrayVarName = 'item';
    if (args[0] && args[0].var) {
        const varPath = args[0].var;
        // Get the last part of the variable path for singular form
        const parts = varPath.split('.');
        const lastPart = parts[parts.length - 1];
        // Convert plural to singular (simple heuristic)
        if (lastPart.endsWith('s') && lastPart.length > 1) {
            arrayVarName = lastPart.slice(0, -1);
        } else {
            arrayVarName = lastPart;
        }
    }
    
    // Handle lambda expression with context
    const lambdaExpr = convertLambdaExpression(args[1], arrayVarName);
    
    if (args.length === 2) {
        return `${method}(${arrayExpr}, ${lambdaExpr})`;
    }
    
    // Handle additional arguments (like initial value for reduce)
    const additionalArgs = args.slice(2).map(arg => jsonLogicToRel(arg)).join(', ');
    return `${method}(${arrayExpr}, ${lambdaExpr}, ${additionalArgs})`;
}

/**
 * Converts lambda expressions used in array methods
 * @param {object} lambdaExpr - The lambda expression JSONLogic
 * @param {string} itemName - The name to use for the current item in lambda context
 * @returns {string} - The REL lambda expression
 */
function convertLambdaExpression(lambdaExpr, itemName = 'item') {
    // In lambda context, convert variable references appropriately
    return convertLambdaExpression_internal(lambdaExpr, itemName);
}

/**
 * Internal helper for lambda expression conversion
 * @param {any} expr - The expression to convert
 * @param {string} itemName - The name to use for the current item
 * @returns {string} - The converted expression
 */
function convertLambdaExpression_internal(expr, itemName) {
    if (!expr || typeof expr !== 'object') {
        return convertLiteral(expr);
    }

    // Handle arrays
    if (Array.isArray(expr)) {
        const elements = expr.map(item => convertLambdaExpression_internal(item, itemName)).join(', ');
        return `[${elements}]`;
    }

    // Get the operator and its arguments
    const entries = Object.entries(expr);
    if (entries.length !== 1) {
        throw new Error('Invalid JSONLogic: object must have exactly one key');
    }

    const [operator, args] = entries[0];
    
    // Handle variable references in lambda context
    if (operator === 'var') {
        if (args === '') {
            // Empty string represents current iteration item
            return 'item';
        }
        // In lambda context, convert variable to item.property format
        return `${itemName}.${args}`;
    }
    
    // For other operators, recursively convert arguments
    const argArray = Array.isArray(args) ? args : [args];
    
    switch (operator) {
        // Logical operators
        case 'and':
            return convertBinaryOperatorLambda(argArray, ' and ', itemName);
        case 'or':
            return convertBinaryOperatorLambda(argArray, ' or ', itemName);
        case '!':
            return `!${convertLambdaExpression_internal(args, itemName)}`;
        case '!!':
            return `!!${convertLambdaExpression_internal(args, itemName)}`;
            
        // Comparison operators
        case '==':
            return convertBinaryOperatorLambda(argArray, ' == ', itemName);
        case '===':
            return convertBinaryOperatorLambda(argArray, ' === ', itemName);
        case '!=':
            return convertBinaryOperatorLambda(argArray, ' != ', itemName);
        case '!==':
            return convertBinaryOperatorLambda(argArray, ' !== ', itemName);
        case '>':
            return convertBinaryOperatorLambda(argArray, ' > ', itemName);
        case '>=':
            return convertBinaryOperatorLambda(argArray, ' >= ', itemName);
        case '<':
            return convertBinaryOperatorLambda(argArray, ' < ', itemName);
        case '<=':
            return convertBinaryOperatorLambda(argArray, ' <= ', itemName);
            
        // Arithmetic operators
        case '+':
            return convertBinaryOperatorLambda(argArray, ' + ', itemName);
        case '-':
            return convertBinaryOperatorLambda(argArray, ' - ', itemName);
        case '*':
            return convertBinaryOperatorLambda(argArray, ' * ', itemName);
        case '/':
            return convertBinaryOperatorLambda(argArray, ' / ', itemName);
        case '%':
            return convertBinaryOperatorLambda(argArray, ' % ', itemName);
            
        // Membership operators
        case 'in':
            return `${convertLambdaExpression_internal(argArray[0], itemName)} in ${convertLambdaExpression_internal(argArray[1], itemName)}`;
            
        default:
            // Handle functions and other operators
            if (argArray.length === 0) {
                return operator;
            }
            return `${operator}(${argArray.map(arg => convertLambdaExpression_internal(arg, itemName)).join(', ')})`;
    }
}

/**
 * Converts binary operators in lambda context
 * @param {Array} args - The operator arguments
 * @param {string} operator - The operator symbol
 * @param {string} itemName - The name to use for the current item
 * @returns {string} - The REL expression
 */
function convertBinaryOperatorLambda(args, operator, itemName) {
    if (args.length < 2) {
        throw new Error(`Binary operator requires at least 2 arguments, got ${args.length}`);
    }
    
    if (args.length === 2) {
        const left = convertLambdaExpression_internal(args[0], itemName);
        const right = convertLambdaExpression_internal(args[1], itemName);
        return `${left}${operator}${right}`;
    }
    
    // For more than 2 arguments, chain them
    let result = convertLambdaExpression_internal(args[0], itemName);
    for (let i = 1; i < args.length; i++) {
        result += `${operator}${convertLambdaExpression_internal(args[i], itemName)}`;
    }
    return result;
}

/**
 * Converts literal values to REL format
 * @param {any} value - The literal value
 * @returns {string} - The REL literal representation
 */
function convertLiteral(value) {
    if (value === null) {
        return 'null';
    }
    
    if (value === undefined) {
        return 'undefined';
    }
    
    if (typeof value === 'string') {
        // Escape quotes and wrap in quotes
        return `"${value.replace(/"/g, '\\"')}"`;
    }
    
    if (typeof value === 'boolean') {
        return value.toString();
    }
    
    if (typeof value === 'number') {
        return value.toString();
    }
    
    if (Array.isArray(value)) {
        const elements = value.map(item => convertLiteral(item)).join(', ');
        return `[${elements}]`;
    }
    
    if (typeof value === 'object') {
        // Handle object literals (though not common in REL)
        const pairs = Object.entries(value).map(([key, val]) => 
            `${key}: ${convertLiteral(val)}`
        ).join(', ');
        return `{${pairs}}`;
    }
    
    return String(value);
}

/**
 * Handles special cases for complex JSONLogic patterns
 * @param {object} jsonLogic - The JSONLogic object
 * @returns {string|null} - The REL expression or null if not a special case
 */
function handleSpecialCases(jsonLogic) {
    // Handle "between" pattern: {"and": [{">=": [expr, lower]}, {"<=": [expr, upper]}]}
    if (jsonLogic.and && Array.isArray(jsonLogic.and) && jsonLogic.and.length === 2) {
        const [first, second] = jsonLogic.and;
        
        if (first['>='] && second['<='] && Array.isArray(first['>=']) && Array.isArray(second['<='])) {
            const [expr1, lower] = first['>='];
            const [expr2, upper] = second['<='];
            
            // Check if both expressions reference the same variable
            if (JSON.stringify(expr1) === JSON.stringify(expr2)) {
                return `${jsonLogicToRel(expr1)} between ${jsonLogicToRel(lower)} and ${jsonLogicToRel(upper)}`;
            }
        }
    }
    
    // Handle "not in" pattern: {"!": {"in": [value, collection]}}
    if (jsonLogic['!'] && jsonLogic['!'].in && Array.isArray(jsonLogic['!'].in)) {
        const [value, collection] = jsonLogic['!'].in;
        return `${jsonLogicToRel(value)} not in ${jsonLogicToRel(collection)}`;
    }
    
    return null;
}

/**
 * Main conversion function with special case handling
 * @param {object} jsonLogic - The JSONLogic object to convert
 * @returns {string} - The equivalent REL expression
 */
export function convertFromJsonLogic(jsonLogic) {
    try {
        // Check for special patterns first
        const specialCase = handleSpecialCases(jsonLogic);
        if (specialCase) {
            return specialCase;
        }
        
        // Use standard conversion
        return jsonLogicToRel(jsonLogic);
    } catch (error) {
        throw new Error(`Failed to convert JSONLogic to REL: ${error.message}`);
    }
}

/**
 * Detects string operation patterns in == expressions
 * @param {Array} args - The arguments to the == operator
 * @returns {string|null} - The REL string operation or null if not detected
 */
function detectStringOperation(args) {
    if (args.length !== 2) return null;
    
    const [left, right] = args;
    
    // Check for starts with pattern: {"==": [{"substr": [string, 0, length]}, substring]}
    if (left && left.substr && Array.isArray(left.substr)) {
        const [string, start, length] = left.substr;
        
        // Starts with: start is 0 and length matches substring length
        if (start === 0 && length !== undefined && typeof right === 'string' && length === right.length) {
            return `${jsonLogicToRel(string)} starts with ${jsonLogicToRel(right)}`;
        }
        
        // Starts with: start is 0 and length is {"length": substring}
        if (start === 0 && length && length.length && JSON.stringify(length.length) === JSON.stringify(right)) {
            return `${jsonLogicToRel(string)} starts with ${jsonLogicToRel(right)}`;
        }
        
        // Ends with: start is negative length and matches substring length
        if (typeof start === 'number' && start < 0 && typeof right === 'string' && Math.abs(start) === right.length) {
            return `${jsonLogicToRel(string)} ends with ${jsonLogicToRel(right)}`;
        }
        
        // Ends with: start is {"-": {"length": substring}} and no third argument
        if (length === undefined && start && start['-'] && start['-'].length &&
            JSON.stringify(start['-'].length) === JSON.stringify(right)) {
            return `${jsonLogicToRel(string)} ends with ${jsonLogicToRel(right)}`;
        }
    }
    
    return null;
}

/**
 * Detects contains pattern in 'in' expressions
 * @param {Array} args - The arguments to the 'in' operator
 * @returns {string|null} - The REL contains operation or null if not detected
 */
function detectContainsPattern(args) {
    if (args.length !== 2) return null;
    
    const [substring, string] = args;
    
    // Only treat as contains if the second argument is a variable (string container)
    // and the first argument is a string literal or simple variable (substring)
    if (string && string.var && (typeof substring === 'string' || (substring && substring.var))) {
        // Additional heuristic: if the string container is not an array, it's likely a contains operation
        // This is a simple heuristic - in practice, you might want more sophisticated detection
        return `${jsonLogicToRel(string)} contains ${jsonLogicToRel(substring)}`;
    }
    
    return null;
}