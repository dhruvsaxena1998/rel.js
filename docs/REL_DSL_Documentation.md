# REL (Rule Expression Language) DSL Documentation

## Overview

REL is a Domain Specific Language (DSL) designed for writing rule expressions that compile to JSONLogic. It provides a human-readable syntax for complex conditional logic, data manipulation, and rule evaluation. REL expressions are parsed using ANTLR4 and translated into JSONLogic format for execution.

## Table of Contents

1. [Basic Syntax](#basic-syntax)
2. [Data Types](#data-types)
3. [Variables](#variables)
4. [Operators](#operators)
5. [Functions](#functions)
6. [Conditional Expressions](#conditional-expressions)
7. [Array Operations](#array-operations)
8. [Complex Examples](#complex-examples)
9. [API Usage](#api-usage)

## Basic Syntax

REL expressions follow a natural language-like syntax with support for both symbolic and word-based operators.

### Comments
```rel
// Single line comment
/* Multi-line comment */
```

### Precedence Rules
REL follows standard mathematical precedence:
1. Parentheses `()`
2. Unary operators `!`, `!!`
3. Multiplicative `*`, `/`, `%`
4. Additive `+`, `-`
5. Relational `>`, `>=`, `<`, `<=`, `between`, `in`, `not in`
6. Equality `==`, `===`, `!=`, `!==`
7. Logical AND `and`
8. Logical OR `or`
9. Conditional `if-then-else`

## Data Types

### Numbers
```rel
42          // Integer
3.14        // Float
-10         // Negative number
0           // Zero
```

### Strings
```rel
"hello"     // Double-quoted string
'world'     // Single-quoted string
""          // Empty string
"It's \"quoted\""  // Escaped characters
```

### Booleans
```rel
true        // Boolean true
false       // Boolean false
```

### Arrays
```rel
[]                    // Empty array
[1, 2, 3]            // Number array
["a", "b", "c"]      // String array
[1, "two", true]     // Mixed type array
[[1, 2], [3, 4]]     // Nested arrays
```

### Placeholders
```rel
{AGE}               // Simple placeholder
{USER_NAME}         // String placeholder
{MIN_SCORE}         // Numeric placeholder
{CATEGORY_LIST}     // Array placeholder
```

## Variables

Variables in REL are prefixed with `@` and support dot notation for nested property access.

### Simple Variables
```rel
@age                 // Simple variable
@userName            // CamelCase variable
@user_name           // Snake_case variable
```

### Nested Variables
```rel
@user.age            // Object property
@user.profile.name   // Nested property
@user.settings.theme.color  // Deep nesting
```

### Examples
```rel
@age > 18
@user.role == "admin"
@product.price * @product.quantity
```

## Placeholders

Placeholders in REL are wrapped in curly braces `{}` and are used for parameterized expressions. They allow you to create dynamic rules where values can be substituted at runtime.

### Placeholder Syntax
```rel
{PLACEHOLDER_NAME}   // Basic placeholder syntax
```

### Placeholder Examples
```rel
// Simple comparison with placeholder
@age > {MIN_AGE}

// Multiple placeholders
@score between {MIN_SCORE} and {MAX_SCORE}

// Placeholders in arrays
@category in [{CATEGORY_1}, {CATEGORY_2}, {CATEGORY_3}]

// Placeholders in conditional expressions
if @status == {ACTIVE_STATUS} then @count + {BONUS} else @count

// Mixed variables and placeholders
@user.role == {ADMIN_ROLE} and @user.points >= {MIN_POINTS}
```

### JSONLogic Output
Placeholders are converted to string literals in JSONLogic, preserving the braces for runtime substitution:

```rel
@age > {MIN_AGE}
// Converts to:
{ ">": [{"var": "age"}, "{MIN_AGE}"] }
```

### Use Cases
- **Configuration-driven rules**: Define rules once, substitute values per environment
- **A/B testing**: Use placeholders for different test parameters
- **Multi-tenant applications**: Same rule logic with tenant-specific values
- **Dynamic thresholds**: Rules that adapt based on external configuration

## Operators

### Equality Operators

#### Equal (`==`, `=`, `eq`, `equals`, `equals to`)
```rel
@age == 25
@name equals "John"
@status eq "active"
```

#### Strict Equal (`===`, `seq`, `strict equals`, `strict eq`, `strict equal to`)
```rel
@value === 42
@type seq "string"
```

#### Not Equal (`!=`, `neq`, `not equal`, `not equals to`)
```rel
@status != "inactive"
@role neq "guest"
```

#### Strict Not Equal (`!==`, `sneq`, `strict not equal`, `strict neq`, `strict not equals to`)
```rel
@value !== "42"
@type sneq "number"
```

### Comparison Operators

#### Greater Than (`>`, `gt`, `greater than`)
```rel
@age > 18
@score gt 85
@temperature greater than 0
```

#### Greater Than or Equal (`>=`, `gte`, `greater than or equal to`)
```rel
@age >= 21
@score gte 90
```

#### Less Than (`<`, `lt`, `less than`)
```rel
@age < 65
@score lt 50
```

#### Less Than or Equal (`<=`, `lte`, `less than or equal to`)
```rel
@age <= 30
@score lte 100
```

#### Between
```rel
@age between 18 and 65
@score between 85.5 and 92.3
@temperature between -10 and 5
```

### Membership Operators

#### In
```rel
@country in ["US", "CA", "UK"]
@role in @allowedRoles
"admin" in @user.permissions
```

#### Not In
```rel
@country not in ["BANNED_COUNTRY1", "BANNED_COUNTRY2"]
@status not in @invalidStatuses
```

### Logical Operators

#### AND (`and`)
```rel
@age >= 18 and @hasLicense == true
@user.isActive and @user.role == "admin"
```

#### OR (`or`)
```rel
@role == "admin" or @role == "moderator"
@age < 13 or @age > 65
```

#### NOT (`!`, `not`)
```rel
!@user.isBlocked
not @user.isDeleted
```

#### Double NOT (`!!`)
```rel
!!@user.profile  // Convert to boolean
```

### Arithmetic Operators

#### Addition (`+`, `plus`)
```rel
@age + 5
@price plus @tax
```

#### Subtraction (`-`, `minus`)
```rel
@total - @discount
@endDate minus @startDate
```

#### Multiplication (`*`, `multiply`, `times`)
```rel
@price * @quantity
@width multiply @height
@base times @height
```

#### Division (`/`, `divide`, `over`)
```rel
@total / @count
@distance divide @time
@numerator over @denominator
```

#### Modulo (`%`, `modulo`, `mod`, `remainder`)
```rel
@number % 2
@value modulo 10
@dividend mod @divisor
```

## Functions

### Mathematical Functions

#### Max
```rel
max(@a, @b, @c)
max(10, @userScore, @minRequired)
```

#### Min
```rel
min(@a, @b, @c)
min(1, 2, 3)
```

### String Functions

#### Concatenation (`cat`)
```rel
cat(@firstName, " ", @lastName)
cat("Hello, ", @user.name, "!")
```

#### Substring (`substr`)
```rel
substr(@text, 0, 5)        // First 5 characters
substr(@description, 10)    // From position 10 to end
```

### Array Functions

#### Merge
```rel
merge(@array1, @array2)
merge([1, 2], [3, 4])      // Results in [1, 2, 3, 4]
```

#### Some (Any)
```rel
some(@numbers, number > 0)
some(@users, user.role == "admin")
some(@products, product.price < 100)
```

#### All (Every)
```rel
all(@numbers, number > 0)
all(@users, user.isActive == true)
all(@scores, score >= 60)
```

#### None
```rel
none(@numbers, number < 0)
none(@users, user.isBlocked == true)
```

#### Map
```rel
map(@numbers, number * 2)
map(@users, user.name)
map(@products, product.price * 1.1)
```

#### Filter
```rel
filter(@numbers, number > 10)
filter(@users, user.isActive == true)
filter(@products, product.price < 100)
```

#### Reduce
```rel
reduce(@numbers, accumulator + current, 0)
reduce(@prices, accumulator + current, 0)
```

### Utility Functions

#### Log
```rel
log(@debugValue)
log("Debug: " + @variable)
```

## Conditional Expressions

### Simple If-Then-Else
```rel
if @age >= 18 then "adult" else "minor"
if @user.isActive then @user.name else "Inactive User"
```

### If-ElseIf-Else Chains
```rel
if @score >= 90 then "A"
elseif @score >= 80 then "B"
elseif @score >= 70 then "C"
elseif @score >= 60 then "D"
else "F"
```

### Complex Conditions
```rel
if @user.role == "admin" and @user.isActive then
    "full_access"
elseif @user.role == "moderator" and @user.isActive then
    "limited_access"
else
    "no_access"
```

### Nested Conditionals
```rel
if @user.isActive then
    if @user.subscription == "premium" then
        "premium_features"
    else
        "basic_features"
else
    "account_suspended"
```

## Array Operations

### Lambda Expressions in Array Functions

Array functions support lambda expressions where you can reference individual items:

#### Variable Names in Lambdas
- `number` - for numeric arrays
- `item` - for general items
- `user` - for user objects
- `product` - for product objects
- `permission` - for permission arrays
- `current` - for reduce operations
- `accumulator` - for reduce operations

#### Examples
```rel
// Test if any number is greater than 100
some(@numbers, number > 100)

// Test if all users are active
all(@users, user.isActive == true)

// Filter products by price
filter(@products, product.price < 50)

// Map user names
map(@users, user.name)

// Calculate total price
reduce(@prices, accumulator + current, 0)

// Complex nested access
some(@user.role.permissions, permission == "post:delete")
```

## Complex Examples

### User Permission Checking
```rel
@user.isActive and (
    @user.role == "admin" or 
    some(@user.permissions, permission == "read:posts")
)
```

### E-commerce Product Filtering
```rel
filter(@products, 
    product.price between 10 and 100 and 
    product.category in ["electronics", "books"] and
    product.inStock == true
)
```

### Age-based Content Access
```rel
if @user.age >= 18 then
    if @user.subscription == "premium" then
        "adult_premium_content"
    else
        "adult_basic_content"
elseif @user.age >= 13 then
    "teen_content"
else
    "child_content"
```

### Complex Business Logic
```rel
(@user.accountType == "premium" and @user.monthsActive >= 6) or
(@user.totalPurchases > 1000 and @user.loyaltyPoints >= 500) or
(@user.referralCount >= 10 and all(@user.referrals, referral.isActive == true))
```

### Pricing Logic
```rel
if @user.subscription == "enterprise" then
    @basePrice * 0.7
elseif @user.subscription == "business" then
    @basePrice * 0.85
elseif @user.isStudent then
    @basePrice * 0.5
else
    @basePrice
```

## API Usage

### Installation
```bash
npm install rel.js
```

### Basic Usage
```javascript
import { translate } from 'rel.js';

// Simple expression
const result = translate('@age > 18');
console.log(result);
// Output: {
//   expression: '@age > 18',
//   jsonLogic: { ">": [{"var": "age"}, 18] }
// }

// Complex expression
const complex = translate(`
    if @user.role == "admin" and @user.isActive then
        "allowed"
    else
        "denied"
`);
console.log(complex.jsonLogic);
```

### Using with JSONLogic
```javascript
import jsonLogic from 'json-logic-js';
import { translate } from 'rel.js';

// Translate REL to JSONLogic
const { jsonLogic: logic } = translate('@age >= 18 and @hasLicense == true');

// Apply with data
const data = { age: 25, hasLicense: true };
const result = jsonLogic.apply(logic, data);
console.log(result); // true
```

### Error Handling
```javascript
try {
    const result = translate('invalid syntax here');
} catch (error) {
    console.error('Translation error:', error.message);
}
```

## Language Features

### Natural Language Support
REL supports both symbolic and word-based operators for better readability:

```rel
// Symbolic
@age >= 18 && @status == "active"

// Word-based (more readable)
@age greater than or equal to 18 and @status equals "active"
```

### Flexible Syntax
Multiple ways to express the same logic:

```rel
// All equivalent
@value == 42
@value = 42
@value eq 42
@value equals 42
@value equals to 42
```

### Type Safety
REL maintains type information through translation:

```rel
// Strict equality preserves type checking
@value === "42"  // String comparison
@value === 42    // Number comparison
```

## Best Practices

1. **Use descriptive variable names**: `@user.isActive` instead of `@u.a`
2. **Group complex conditions**: Use parentheses for clarity
3. **Prefer word operators for readability**: `and` instead of `&&`
4. **Use appropriate equality operators**: `===` for strict type checking
5. **Comment complex expressions**: Use `//` for inline documentation
6. **Break down complex expressions**: Split into multiple simpler expressions when possible

## Limitations

1. **No custom function definitions**: Only built-in functions are supported
2. **No variable assignment**: REL is expression-only, no statements
3. **No loops**: Use array functions instead
4. **No object construction**: Only literal objects in arrays

## Grammar Reference

The complete ANTLR4 grammar is available in [`REL.g4`](../REL.g4:1). Key grammar rules:

- **expression**: Entry point for all REL expressions
- **conditionalExpression**: If-then-else constructs
- **logicalOrExpression**: OR operations
- **logicalAndExpression**: AND operations
- **equalityExpression**: Equality/inequality operations
- **relationalExpression**: Comparison and membership operations
- **arithmeticExpression**: Mathematical operations
- **functionCall**: Function invocations
- **variable**: Variable references with `@` prefix

This documentation covers all currently implemented features of the REL DSL. For the most up-to-date information, refer to the test suites in [`internal/translator.test.md`](../internal/translator.test.md:1) and [`internal/jsonlogic.visitor.test.md`](../internal/jsonlogic.visitor.test.md:1).