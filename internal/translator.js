import antlr4 from 'antlr4';
import RELLexer from '../generated/RELLexer.js';
import RELParser from '../generated/RELParser.js';
import JSONLogicVisitor from './jsonlogic.visitor.js'

/**
 * Main translation function
 * @param {string} expression - The REL expression to translate
 * @returns {{
 *  expression: string
 *  jsonLogic: object
 * }} - Translation result with JSONLogic schema
 */
export function translate(expression) {
    try {
        // Create input stream
        const inputStream = new antlr4.InputStream(expression);

        // Create lexer
        const lexer = new RELLexer(inputStream);

        // Create token stream
        const tokenStream = new antlr4.CommonTokenStream(lexer);

        // Create parser
        const parser = new RELParser(tokenStream);

        // Custom error listener for detailed error reporting
        class RELErrorListener extends antlr4.error.ErrorListener {
            syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
                const error = new Error(`Invalid expression: ${msg}`);
                error.name = 'RELError';
                error.location = { line, column };
                error.expression = expression;
                throw error;
            }
        }

        // Remove default error listeners and add custom one
        parser.removeErrorListeners();
        lexer.removeErrorListeners();
        parser.addErrorListener(new RELErrorListener());
        lexer.addErrorListener(new RELErrorListener());

        // Parse expression (starting from root rule)
        const tree = parser.expression();

        // Create visitor and translate to JSONLogic
        const visitor = new JSONLogicVisitor();
        const jsonLogic = visitor.visit(tree);

        const result = {
            expression: expression,
            jsonLogic: jsonLogic
        };

        return result;

    } catch (error) {
        if (error.name === 'RELError') {
            throw error;
        }

        // Wrap unexpected errors
        const relError = new Error(`Translation failed: ${error.message}`);
        relError.name = 'RELError';
        relError.location = { line: 1, column: 0 };
        relError.expression = expression;
        throw relError;
    }
}