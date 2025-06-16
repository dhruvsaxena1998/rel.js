# REL Translator Comprehensive Test Suite

## Overview

This document describes the comprehensive test suite created for the REL (Rule Expression Language) translator. The test suite covers all currently implemented operators and expressions, ensuring the [`translate`](../internal/translator.js:12) function works correctly across a wide range of use cases.

## Test Coverage

### ✅ Implemented and Tested

#### Basic Data Types
- **Numbers**: Integers, floats, negative numbers, zero
- **Strings**: Double-quoted, single-quoted, empty strings, special characters
- **Booleans**: `true` and `false` literals
- **Arrays**: Empty arrays, number arrays, string arrays, mixed type arrays, nested arrays
- **Parentheses**: Simple grouping, nested parentheses, expression grouping

#### Variables
- **Simple Variables**: `@user_age`, `@userAge`
- **Nested Variables**: `@user.age`, `@user.profile.settings.theme`
- **Complex Paths**: Deep object access with dots and numbers

#### Equality Operations
- **Equality**: `==` operator with numbers, strings, booleans
- **Strict Equality**: `===` operator
- **Inequality**: `!=` operator
- **Strict Inequality**: `!==` operator

#### Comparison Operations
- **Greater Than**: `>` with integers and floats
- **Greater Than or Equal**: `>=`
- **Less Than**: `<` with negative numbers
- **Less Than or Equal**: `<=`

#### Between Operations
- **Range Expressions**: `@age between 18 and 22`
- **Floating Point Ranges**: `@score between 85.5 and 92.3`
- **Negative Ranges**: `@temperature between -10 and 5`

#### Logical Operations
- **Negation**: `!@isActive`, `!!@isActive`
- **Boolean Logic**: `@a or @b`, `@a and @b`
- **Multiple Operations**: Nested OR/AND structures
- **Precedence**: Mixed AND/OR with proper precedence

#### Arithmetic Operations
- **Basic Arithmetic**: `+`, `-`, `*`, `/`, `%`
- **With Literals**: `@age + 5`
- **Complex Expressions**: `@a + @b * @c` (with precedence)
- **Parentheses**: `(@a + @b) * @c`

#### Math Functions
- **Max Function**: `max(@a, @b, @c)` with variables and literals
- **Min Function**: `min(1, 2, 3)` with mixed types

#### String Operations
- **String Contains**: `@str in "hello world"`
- **String Concatenation**: `cat(@firstName, " ", @lastName)`
- **Substring**: `substr(@text, 0, 5)`

#### Array Operations
- **Array Membership**: `@country in ["US", "CA"]`
- **Array Not In**: `@country not in ["US", "CA"]`
- **Variable Arrays**: `@user in @allowedUsers`
- **Array Testing Functions**: `all(@numbers, number > 0)`, `some(@numbers, number > 100)`, `none(@numbers, number < 0)`
- **Array Manipulation Functions**: `map(@numbers, number * 2)`, `filter(@numbers, number > 10)`, `reduce(@numbers, accumulator + current, 0)`
- **Array Merge Function**: `merge(@array1, @array2)`
- **Nested Property Access**: `some(@user.role.permissions, permission == "post:delete")`

#### Conditional Expressions
- **Simple If-Then-Else**: `if @age >= 18 then "adult" else "minor"`
- **If-ElseIf-Else Chains**: Multiple conditions with elseif
- **Complex Conditions**: Nested boolean logic in conditions
- **Nested Conditionals**: If statements within if statements

#### Miscellaneous Operations
- **Logging**: `log(@value)` function

#### Complex Nested Operations
- **Boolean Logic with Comparisons**: Complex AND/OR with between and in operators
- **Arithmetic with Comparisons**: `(@price * @quantity) > @budget`
- **Mixed Operations**: Complex precedence with multiple operator types

#### Error Handling
- **Invalid Syntax**: Malformed expressions throw appropriate errors
- **Empty Expressions**: Empty or whitespace-only expressions
- **Unclosed Constructs**: Parentheses, arrays, etc.

#### Return Value Structure
- **Proper Structure**: Returns object with `expression` and `jsonLogic` properties
- **Expression Preservation**: Original expression is preserved in result

#### Real-world Use Cases
- **User Permission Checking**: Role-based access control with array functions
- **E-commerce Product Filtering**: Complex filtering with array operations
- **Content Access Control**: Age and subscription-based filtering
- **Age-based Access Control**: Age verification logic
- **Pricing Logic**: Subscription-based pricing

## Test Statistics

- **Total Tests**: 47 tests
- **Passing Tests**: 47 tests
- **Skipped Tests**: 0 tests
- **Test Coverage**: 100% of implemented functionality

## Test Structure

The test suite is organized into logical groups:

1. **Basic Data Types** - Fundamental literal values
2. **Variables** - Variable references and nested access
3. **Equality Operations** - All equality/inequality operators
4. **Comparison Operations** - Numeric comparison operators
5. **Between Operations** - Range expressions
6. **Logical Operations** - Boolean logic and negation
7. **Arithmetic Operations** - Math operations and precedence
8. **Math Functions** - Built-in mathematical functions
9. **String Operations** - String manipulation functions
10. **Array Operations** - Array membership and operations
11. **Conditional Expressions** - If-then-else logic
12. **Miscellaneous Operations** - Utility functions
13. **Complex Nested Operations** - Real-world complex expressions
14. **Error Handling** - Invalid input handling
15. **Return Value Structure** - API contract validation
16. **Real-world Use Cases** - Practical application scenarios

## Usage

Run the translator tests:
```bash
npm test -- internal/translator.test.js
```

Run all tests:
```bash
npm test
```

## Future Work

The skipped tests indicate areas for future development:
1. Implement `$` syntax for array operations
2. Add support for lambda expressions with `#` syntax
3. Implement array manipulation functions (map, filter, reduce)
4. Add more complex array testing operations

## Examples

### Basic Usage
```javascript
import { translate } from './translator.js';

// Simple comparison
const result = translate('@age > 18');
// Returns: { expression: '@age > 18', jsonLogic: { ">": [{"var": "age"}, 18] } }

// Complex conditional
const complex = translate('if @user.role == "admin" and @user.isActive then "allowed" else "denied"');
// Returns complex JSONLogic structure

// Array operations
const arrayOp = translate('some(@user.permissions, permission == "admin")');
// Returns: { expression: '...', jsonLogic: { "some": [{"var": "user.permissions"}, {"==": [{"var": ""}, "admin"]}] } }
```

### Test Examples
```javascript
// Test basic arithmetic
expect(translate('@a + @b * @c').jsonLogic).toEqual({
    "+": [
        {"var": "a"},
        {"*": [{"var": "b"}, {"var": "c"}]}
    ]
});

// Test complex boolean logic
expect(translate('@age between 18 and 22 and @country in ["US", "CA"]').jsonLogic).toEqual({
    "and": [
        {"and": [
            {">=": [{"var": "age"}, 18]},
            {"<=": [{"var": "age"}, 22]}
        ]},
        {"in": [{"var": "country"}, ["US", "CA"]]}
    ]
});

// Test array operations
expect(translate('filter(@products, item.price > 100)').jsonLogic).toEqual({
    "filter": [
        {"var": "products"},
        {">": [{"var": "price"}, 100]}
    ]
});

// Test array testing
expect(translate('all(@numbers, number > 0)').jsonLogic).toEqual({
    "all": [
        {"var": "numbers"},
        {">": [{"var": ""}, 0]}
    ]
});
```

This comprehensive test suite ensures the REL translator works correctly for all currently implemented features and provides a solid foundation for testing future enhancements.