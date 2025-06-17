# Active Context

## Current Task Status: COMPLETED ✅
Added placeholder functionality to the DSL for parameterized expressions.

## New Feature: Placeholder Support
Added support for placeholders in REL expressions using `{PLACEHOLDER_NAME}` syntax.

**Feature Requirements**:
- Placeholders start with `{` and end with `}`
- Convert to string literals in JSONLogic (preserving the braces)
- Work in all expression contexts (comparisons, arrays, conditionals, etc.)

**Implementation Changes**:
1. **Grammar Update (REL.g4)**:
   - Added `placeholder` rule: `placeholder: PLACEHOLDER;`
   - Added `PLACEHOLDER` token: `PLACEHOLDER: '{' [a-zA-Z_] [a-zA-Z0-9_]* '}';`
   - Added placeholder to literal alternatives

2. **Visitor Update (jsonlogic.visitor.js)**:
   - Added `visitPlaceholderLiteral()` method
   - Added `visitPlaceholder()` method
   - Returns placeholder text as string (including braces)

**Examples**:
- `@age > {AGE}` → `{ ">": [ { "var" : "age" }, "{AGE}" ] }`
- `@name == {USER_NAME}` → `{ "==": [ { "var" : "name" }, "{USER_NAME}" ] }`
- `@score between {MIN_SCORE} and {MAX_SCORE}` → Complex JSONLogic with placeholders
- `@category in [{CATEGORY_1}, {CATEGORY_2}]` → Array with placeholder elements
- `if @status == {ACTIVE_STATUS} then @count + {BONUS} else @count` → Conditional with placeholders

## Previous Task: Bare Identifier Validation ✅
Fixed bare identifier validation to prevent invalid variable references.

## Problem Solved
The parser was incorrectly allowing bare identifiers (like `CHARGE_CODES`) to be treated as variables without proper validation. This caused expressions like `@charge_code in CHARGE_CODES` to be converted to `{"in":[{"var":"charge_code"},{"var":"CHARGE_CODES"}]}` instead of throwing a validation error.

**Root Cause**: Bare identifiers should only be allowed in lambda expressions within array methods, but the visitor was converting all bare identifiers to variable references without context validation.

## Key Changes Made
1. **Enhanced JSONLogic Visitor Validation**:
   - Added validation in `visitBareIdentifier()` to check lambda context
   - Bare identifiers now throw descriptive errors when used outside lambda expressions
   - Error message: "Invalid bare identifier 'X'. Identifiers must be prefixed with '@' for variables or quoted as strings. Bare identifiers are only allowed in lambda expressions within array methods."

2. **Updated Tests**:
   - Modified `visitBareIdentifier` test to cover both error and valid cases
   - Added test for error when used outside lambda context
   - Added test for valid usage within lambda context
   - All 223 tests now pass ✅

## Validation Rules
- **Variables**: Must be prefixed with `@` (e.g., `@charge_code`, `@CHARGE_CODES`)
- **String literals**: Must be quoted (e.g., `"CHARGE_CODES"`)
- **Placeholders**: Must be wrapped in braces (e.g., `{CHARGE_CODES}`)
- **Bare identifiers**: Only allowed in lambda expressions (e.g., `some(@users, user.role == "admin")`)

## Examples
**✅ Valid**:
- `@charge_code in @CHARGE_CODES` → `{"in":[{"var":"charge_code"},{"var":"CHARGE_CODES"}]}`
- `@charge_code in "CHARGE_CODES"` → `{"in":[{"var":"charge_code"},"CHARGE_CODES"]}`
- `@charge_code in {CHARGE_CODES}` → `{"in":[{"var":"charge_code"},"{CHARGE_CODES}"]}`
- `some(@users, user.role == "admin")` → `{"some":[{"var":"users"},{"==":[{"var":"role"},"admin"]}]}`

## Verification
- All 223 tests pass ✅
- Placeholder functionality works in all contexts
- No breaking changes to existing functionality
- Proper error handling for invalid syntax

## Next Steps
- Placeholder functionality is complete and ready for use
- Consider adding documentation for placeholder usage patterns
- Ready for production use