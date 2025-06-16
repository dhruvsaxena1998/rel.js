# REL.js - Rule Expression Language

A powerful Domain Specific Language (DSL) for writing human-readable rule expressions that compile to JSONLogic.

## Overview

REL (Rule Expression Language) provides an intuitive, natural language-like syntax for expressing complex business logic, conditional statements, and data processing rules. It compiles to JSONLogic format, making it easy to integrate with existing systems while maintaining readability and maintainability.

## Features

- 🌟 **Human-readable syntax** - Write rules in natural language
- 🔧 **JSONLogic compilation** - Compiles to standard JSONLogic format
- 📊 **Rich data types** - Numbers, strings, booleans, arrays, and objects
- 🎯 **Comprehensive operators** - Arithmetic, logical, comparison, and membership operators
- 🔄 **Array processing** - Built-in functions for filtering, mapping, and reducing arrays
- 🎛️ **Conditional logic** - Full if-then-else support with elseif chains
- 🔍 **Property access** - Dot notation for nested object properties
- 📝 **Multiple syntax styles** - Both symbolic (`>`) and word-based (`greater than`) operators

## Quick Start

### Installation

```bash
npm install rel.js
```

### Basic Usage

```javascript
import { translate } from 'rel.js';

// Simple comparison
const result = translate('@age > 18');
console.log(result.jsonLogic);
// Output: { ">": [{"var": "age"}, 18] }

// Complex business logic
const businessRule = translate(`
    if @user.role == "admin" and @user.isActive then
        "full_access"
    elseif @user.subscription == "premium" then
        "premium_access"
    else
        "basic_access"
`);

// Use with JSONLogic
import jsonLogic from 'json-logic-js';
const data = { 
    user: { 
        role: "admin", 
        isActive: true 
    } 
};
const result = jsonLogic.apply(businessRule.jsonLogic, data);
console.log(result); // "full_access"
```

## Documentation

This repository includes comprehensive documentation:

### 📚 [Complete DSL Documentation](REL_DSL_Documentation.md)
The main documentation covering:
- Language syntax and grammar
- All data types and operators
- Function reference
- API usage examples
- Best practices and limitations

### ⚡ [Operator Quick Reference](REL_Operator_Quick_Reference.md)
A concise reference guide with:
- Every operator with syntax variations
- Practical examples for each operator
- Precedence rules and tips
- Quick lookup for all functions

### 💡 [Practical Examples](REL_Examples.md)
Real-world examples including:
- User management and authorization
- E-commerce and pricing logic
- Content access control
- Data validation rules
- Business workflow automation
- Array processing and data analysis

## Language Syntax Overview

### Variables
```rel
@user.name              // Simple property access
@user.profile.settings  // Nested properties
@cart.items.length      // Array properties
```

### Operators
```rel
// Comparison (multiple syntax styles supported)
@age > 18
@age greater than 18
@score between 80 and 100

// Equality
@status == "active"
@type === "premium"     // Strict equality

// Logical
@isActive and @isVerified
@role == "admin" or @role == "moderator"
!@isBlocked

// Membership
@country in ["US", "CA", "UK"]
@role not in ["banned", "suspended"]
```

### Functions
```rel
// Math functions
max(@score1, @score2, @score3)
min(@price, @budget)

// String functions
cat(@firstName, " ", @lastName)
substr(@text, 0, 10)

// Array functions
filter(@products, product.price < 100)
map(@users, user.name)
some(@permissions, permission == "admin")
all(@scores, score >= 60)
```

### Conditionals
```rel
// Simple if-then-else
if @age >= 18 then "adult" else "minor"

// Complex chains
if @score >= 90 then "A"
elseif @score >= 80 then "B"
elseif @score >= 70 then "C"
else "F"
```

## Real-World Examples

### User Authorization
```rel
@user.isActive and (
    @user.role == "admin" or 
    some(@user.permissions, permission == "read:posts")
)
```

### Dynamic Pricing
```rel
if @user.subscription == "enterprise" then
    @basePrice * 0.7
elseif @user.loyaltyYears >= 5 then
    @basePrice * 0.9
else
    @basePrice
```

### Content Filtering
```rel
filter(@products, 
    product.price between @minPrice and @maxPrice and
    product.category in @selectedCategories and
    product.rating >= 4.0
)
```

## API Reference

### `translate(expression)`

Translates a REL expression into JSONLogic format.

**Parameters:**
- `expression` (string): The REL expression to translate

**Returns:**
- Object with properties:
  - `expression`: The original REL expression
  - `jsonLogic`: The compiled JSONLogic object

**Example:**
```javascript
const result = translate('@age >= 21 and @hasLicense == true');
// Returns:
// {
//   expression: '@age >= 21 and @hasLicense == true',
//   jsonLogic: {
//     "and": [
//       {">=": [{"var": "age"}, 21]},
//       {"==": [{"var": "hasLicense"}, true]}
//     ]
//   }
// }
```

## Grammar

REL is built using ANTLR4 grammar. The complete grammar definition is available in [`REL.g4`](REL.g4).

### Key Grammar Rules:
- **Variables**: `@variableName` with dot notation support
- **Operators**: Both symbolic and word-based variants
- **Functions**: Built-in functions with parameter support
- **Arrays**: Literal arrays and array processing functions
- **Conditionals**: Full if-then-else with elseif chains
- **Precedence**: Standard mathematical operator precedence

## Development

### Prerequisites
- Node.js 16+
- PNPM (recommended) or NPM

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd rel.js

# Install dependencies
pnpm install

# Generate parser (automatically runs on install)
pnpm run generate-parser

# Run tests
pnpm test

# Run tests with coverage
pnpm test -- --coverage
```

### Project Structure
```
rel.js/
├── REL.g4                          # ANTLR4 grammar definition
├── index.js                        # Main export
├── generated/                      # Generated ANTLR4 files
├── internal/                       # Internal implementation
│   ├── translator.js              # Main translator
│   ├── jsonlogic.visitor.js       # JSONLogic visitor
│   └── *.test.js                  # Test files
└── docs/                          # Documentation
    ├── REL_DSL_Documentation.md   # Complete documentation
    ├── REL_Operator_Quick_Reference.md  # Quick reference
    └── REL_Examples.md            # Practical examples
```

## Testing

The project includes comprehensive test suites:

- **Unit Tests**: 100% code coverage for all components
- **Integration Tests**: End-to-end translation testing
- **Grammar Tests**: ANTLR4 parser validation
- **JSONLogic Tests**: Output format validation

Run tests:
```bash
pnpm test                    # Run all tests
pnpm test -- --coverage     # Run with coverage report
pnpm test -- --watch        # Run in watch mode
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Update documentation as needed
6. Submit a pull request

### Adding New Operators

1. Update the ANTLR4 grammar in `REL.g4`
2. Regenerate parser: `pnpm run generate-parser`
3. Add visitor methods in `jsonlogic.visitor.js`
4. Add comprehensive tests
5. Update documentation

### Adding New Functions

1. Add function name to grammar (`functionName` rule)
2. Implement handling in `handleRegularFunctionCall` or `handleArrayMethodCall`
3. Add tests and documentation

## License

ISC License - see LICENSE file for details.

## Support

- 📖 [Complete Documentation](REL_DSL_Documentation.md)
- ⚡ [Quick Reference](REL_Operator_Quick_Reference.md)
- 💡 [Examples](REL_Examples.md)
- 🐛 [Issue Tracker](https://github.com/your-repo/rel.js/issues)

---

**REL.js** - Making complex business logic readable and maintainable.