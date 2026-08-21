import antlr4 from './antlr4.js';
import RELLexer from '../generated/RELLexer.js';
import RELParser from '../generated/RELParser.js';
import JSONLogicVisitor from './jsonlogic.visitor.js'
import { RELError } from './rel-error.js';

/**
 * Main translation function
 * @param {string} expression - The REL expression to translate
 * @returns {{
 *  expression: string
 *  jsonLogic: object
 * }} - Translation result with JSONLogic schema
 */
export function translate(expression) {
    if (typeof expression !== 'string') {
        throw new RELError('REL expression must be a string', { expression });
    }

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
                throw new RELError(`Invalid expression: ${msg}`, {
                    expression,
                    location: { line, column },
                    cause: e
                });
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

        return {
            expression,
            jsonLogic
        };

    } catch (error) {
        if (error.name === 'RELError') {
            throw error;
        }

        // Wrap unexpected errors
        throw new RELError(`Translation failed: ${error.message}`, {
            expression,
            location: { line: 1, column: 0 },
            cause: error
        });
    }
}
