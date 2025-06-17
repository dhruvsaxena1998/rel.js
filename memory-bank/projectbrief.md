# REL.js Project Brief

## Overview
REL.js is a Rule Expression Language (REL) library that provides bidirectional conversion between human-readable REL expressions and JSONLogic objects. The project enables developers to work with complex business rules in both formats seamlessly.

## Core Requirements
1. **REL to JSONLogic Translation**: Convert REL expressions to JSONLogic objects
2. **JSONLogic to REL Conversion**: Convert JSONLogic objects back to readable REL expressions
3. **Grammar Support**: Full ANTLR4 grammar for REL parsing
4. **Array Methods**: Support for functional programming constructs (map, filter, some, etc.)
5. **Lambda Expressions**: Proper handling of lambda contexts in array methods
6. **Comprehensive Testing**: Full test coverage for all conversion scenarios

## Key Features
- Bidirectional conversion between REL and JSONLogic
- Support for variables, operators, functions, and conditionals
- Array method support with lambda expressions
- Special case handling (between, not in, etc.)
- Error handling and validation
- ANTLR4-based parsing

## Success Criteria
- All tests pass
- Bidirectional conversion maintains semantic equivalence
- Lambda expressions in array methods work correctly
- Clean, maintainable code architecture