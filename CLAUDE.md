# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

REL.js is a Domain Specific Language (DSL) that compiles human-readable rule expressions to JSONLogic format. The project uses ANTLR4 for parsing and includes comprehensive translation between REL syntax and JSONLogic.

### Core Architecture

- **Grammar Definition**: `REL.g4` - ANTLR4 grammar defining the REL language syntax
- **Generated Parser**: `generated/` - Auto-generated ANTLR4 lexer, parser, visitor, and listener
- **Main Entry**: `index.js` - Exports `translate()` and `convertFromJsonLogic()` functions
- **Translation Engine**: `internal/translator.js` - Main translation orchestration using ANTLR4
- **JSONLogic Visitor**: `internal/jsonlogic.visitor.js` - Converts parse tree to JSONLogic format
- **Reverse Translation**: `internal/jsonlogic-to-rel.js` - Converts JSONLogic back to REL syntax

### Key Components

The codebase follows a visitor pattern where:
1. REL expressions are parsed using ANTLR4-generated parser
2. `JSONLogicVisitor` traverses the parse tree and builds JSONLogic objects
3. Custom error handling provides detailed syntax error reporting
4. Bidirectional translation supports both REL→JSONLogic and JSONLogic→REL

## Development Commands

### Parser Generation
```bash
pnpm run generate-parser
```
Regenerates ANTLR4 parser files from `REL.g4`. Required after grammar changes.

### Testing
```bash
pnpm test                    # Run all tests
pnpm test -- --coverage     # Run with coverage report
pnpm test -- --watch        # Run in watch mode
```
Uses Vitest with comprehensive test coverage excluding generated files.

### Build
```bash
pnpm run build
```
Creates ESM bundle in `dist/` using esbuild.

### Manual Testing
```bash
pnpm run test-run
```
Runs `test.js` for manual testing and debugging.

## Grammar Development

When modifying the REL language:

1. Edit `REL.g4` grammar file
2. Run `pnpm run generate-parser` to regenerate parser
3. Update `internal/jsonlogic.visitor.js` visitor methods for new grammar rules
4. Add corresponding tests in `internal/*.test.js` files
5. Update documentation in `docs/` folder

### Grammar Structure
- Precedence-based expression parsing (conditional → logical → relational → arithmetic)
- Support for variables (`@var`), placeholders (`{PLACEHOLDER}`), and literals
- Function calls, array operations, and property access via dot notation
- If-then-else conditionals with elseif chains

## Testing Strategy

- **Unit Tests**: Each internal module has comprehensive `.test.js` files
- **Integration Tests**: End-to-end translation validation
- **Grammar Coverage**: Tests cover all grammar rules and edge cases
- **Error Handling**: Validates custom error reporting and edge cases

Test files include both standard assertions and markdown-documented test cases for complex scenarios.

## Code Patterns

### Visitor Implementation
The `JSONLogicVisitor` extends ANTLR4's base visitor and implements methods for each grammar rule (e.g., `visitIfThenElse`, `visitBetweenExpression`). Each method returns JSONLogic-compatible objects.

### Error Handling
Custom `RELErrorListener` provides structured error reporting with location information and expression context.

### Translation Flow
1. Create ANTLR4 input stream and lexer
2. Generate token stream and parser
3. Parse expression starting from root rule
4. Apply JSONLogic visitor to parse tree
5. Return structured result with original expression and JSONLogic output