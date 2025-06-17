import { describe, it, expect } from 'vitest';
import { translate } from './translator.js';

describe('REL Translator - Comprehensive Integration Tests', () => {
    
    describe('Basic Data Types', () => {
        it('should translate numbers', () => {
            expect(translate('42').jsonLogic).toBe(42);
            expect(translate('-10').jsonLogic).toBe(-10);
            expect(translate('3.14').jsonLogic).toBe(3.14);
            expect(translate('0').jsonLogic).toBe(0);
        });

        it('should translate strings', () => {
            expect(translate('"hello world"').jsonLogic).toBe('hello world');
            expect(translate("'hello world'").jsonLogic).toBe('hello world');
            expect(translate('""').jsonLogic).toBe('');
        });

        it('should translate booleans', () => {
            expect(translate('true').jsonLogic).toBe(true);
            expect(translate('false').jsonLogic).toBe(false);
        });

        it('should translate arrays', () => {
            expect(translate('[]').jsonLogic).toEqual([]);
            expect(translate('[1, 2, 3]').jsonLogic).toEqual([1, 2, 3]);
            expect(translate('["a", "b", "c"]').jsonLogic).toEqual(["a", "b", "c"]);
            expect(translate('[1, "hello", true]').jsonLogic).toEqual([1, "hello", true]);
        });

        it('should handle parentheses', () => {
            expect(translate('(42)').jsonLogic).toBe(42);
            expect(translate('(@age > 18)').jsonLogic).toEqual({
                ">": [{"var": "age"}, 18]
            });
        });
    });

    describe('Variables', () => {
        it('should translate simple variables', () => {
            expect(translate('@user_age').jsonLogic).toEqual({"var": "user_age"});
            expect(translate('@userAge').jsonLogic).toEqual({"var": "userAge"});
        });

        it('should translate nested variables', () => {
            expect(translate('@user.age').jsonLogic).toEqual({"var": "user.age"});
            expect(translate('@user.profile.settings.theme').jsonLogic).toEqual({"var": "user.profile.settings.theme"});
        });
    });

    describe('Equality Operations', () => {
        it('should translate equality operators', () => {
            expect(translate('@age == 18').jsonLogic).toEqual({
                "==": [{"var": "age"}, 18]
            });
            
            expect(translate('@age === 18').jsonLogic).toEqual({
                "===": [{"var": "age"}, 18]
            });
            
            expect(translate('@age != 18').jsonLogic).toEqual({
                "!=": [{"var": "age"}, 18]
            });
            
            expect(translate('@age !== 18').jsonLogic).toEqual({
                "!==": [{"var": "age"}, 18]
            });
        });

        it('should handle different data types in equality', () => {
            expect(translate('@name == "John"').jsonLogic).toEqual({
                "==": [{"var": "name"}, "John"]
            });
            
            expect(translate('@isActive == true').jsonLogic).toEqual({
                "==": [{"var": "isActive"}, true]
            });
        });
    });

    describe('Comparison Operations', () => {
        it('should translate comparison operators', () => {
            expect(translate('@age > 18').jsonLogic).toEqual({
                ">": [{"var": "age"}, 18]
            });
            
            expect(translate('@age >= 18').jsonLogic).toEqual({
                ">=": [{"var": "age"}, 18]
            });
            
            expect(translate('@age < 25').jsonLogic).toEqual({
                "<": [{"var": "age"}, 25]
            });
            
            expect(translate('@age <= 25').jsonLogic).toEqual({
                "<=": [{"var": "age"}, 25]
            });
        });

        it('should handle floating point comparisons', () => {
            expect(translate('@price > 99.99').jsonLogic).toEqual({
                ">": [{"var": "price"}, 99.99]
            });
            
            expect(translate('@temperature < -10').jsonLogic).toEqual({
                "<": [{"var": "temperature"}, -10]
            });
        });
    });

    describe('Between Operations', () => {
        it('should translate between expressions', () => {
            expect(translate('@age between 18 and 22').jsonLogic).toEqual({
                "and": [
                    {">=": [{"var": "age"}, 18]},
                    {"<=": [{"var": "age"}, 22]}
                ]
            });
        });

        it('should handle floating point between', () => {
            expect(translate('@score between 85.5 and 92.3').jsonLogic).toEqual({
                "and": [
                    {">=": [{"var": "score"}, 85.5]},
                    {"<=": [{"var": "score"}, 92.3]}
                ]
            });
        });
    });

    describe('Logical Operations', () => {
        it('should translate negation operators', () => {
            expect(translate('!@isActive').jsonLogic).toEqual({
                "!": {"var": "isActive"}
            });
            
            expect(translate('!!@isActive').jsonLogic).toEqual({
                "!!": {"var": "isActive"}
            });
        });

        it('should translate boolean logic', () => {
            expect(translate('@a or @b').jsonLogic).toEqual({
                "or": [{"var": "a"}, {"var": "b"}]
            });
            
            expect(translate('@a and @b').jsonLogic).toEqual({
                "and": [{"var": "a"}, {"var": "b"}]
            });
        });

        it('should handle multiple operations', () => {
            expect(translate('@a or @b or @c').jsonLogic).toEqual({
                "or": [
                    {"or": [{"var": "a"}, {"var": "b"}]},
                    {"var": "c"}
                ]
            });
            
            expect(translate('@a and @b and @c').jsonLogic).toEqual({
                "and": [
                    {"and": [{"var": "a"}, {"var": "b"}]},
                    {"var": "c"}
                ]
            });
        });

        it('should handle mixed AND/OR with precedence', () => {
            expect(translate('@a and @b or @c').jsonLogic).toEqual({
                "or": [
                    {"and": [{"var": "a"}, {"var": "b"}]},
                    {"var": "c"}
                ]
            });
        });
    });

    describe('Arithmetic Operations', () => {
        it('should translate basic arithmetic', () => {
            expect(translate('@a + @b').jsonLogic).toEqual({
                "+": [{"var": "a"}, {"var": "b"}]
            });
            
            expect(translate('@a - @b').jsonLogic).toEqual({
                "-": [{"var": "a"}, {"var": "b"}]
            });
            
            expect(translate('@a * @b').jsonLogic).toEqual({
                "*": [{"var": "a"}, {"var": "b"}]
            });
            
            expect(translate('@a / @b').jsonLogic).toEqual({
                "/": [{"var": "a"}, {"var": "b"}]
            });
            
            expect(translate('@a % @b').jsonLogic).toEqual({
                "%": [{"var": "a"}, {"var": "b"}]
            });
        });

        it('should handle arithmetic with literals', () => {
            expect(translate('@age + 5').jsonLogic).toEqual({
                "+": [{"var": "age"}, 5]
            });
        });

        it('should handle complex arithmetic with precedence', () => {
            expect(translate('@a + @b * @c').jsonLogic).toEqual({
                "+": [
                    {"var": "a"},
                    {"*": [{"var": "b"}, {"var": "c"}]}
                ]
            });
        });

        it('should handle parentheses in arithmetic', () => {
            expect(translate('(@a + @b) * @c').jsonLogic).toEqual({
                "*": [
                    {"+": [{"var": "a"}, {"var": "b"}]},
                    {"var": "c"}
                ]
            });
        });
    });

    describe('Math Functions', () => {
        it('should translate max and min functions', () => {
            expect(translate('max(@a, @b, @c)').jsonLogic).toEqual({
                "max": [{"var": "a"}, {"var": "b"}, {"var": "c"}]
            });
            
            expect(translate('min(1, 2, 3)').jsonLogic).toEqual({
                "min": [1, 2, 3]
            });
        });

        it('should handle mixed types in functions', () => {
            expect(translate('max(@score, 85, @minRequired)').jsonLogic).toEqual({
                "max": [{"var": "score"}, 85, {"var": "minRequired"}]
            });
        });
    });

    describe('String Operations', () => {
        it('should translate string operations', () => {
            expect(translate('@str in "hello world"').jsonLogic).toEqual({
                "in": [{"var": "str"}, "hello world"]
            });
            
            expect(translate('cat(@firstName, " ", @lastName)').jsonLogic).toEqual({
                "cat": [{"var": "firstName"}, " ", {"var": "lastName"}]
            });
            
            expect(translate('substr(@text, 0, 5)').jsonLogic).toEqual({
                "substr": [{"var": "text"}, 0, 5]
            });
        });

        it('should translate string matching operations', () => {
            expect(translate('@customerEmail ends with "nike.com"').jsonLogic).toEqual({
                "==": [
                    {
                        "substr": [
                            {"var": "customerEmail"},
                            -8
                        ]
                    },
                    "nike.com"
                ]
            });
            
            expect(translate('@x starts with "abc"').jsonLogic).toEqual({
                "==": [
                    {
                        "substr": [
                            {"var": "x"},
                            0,
                            3
                        ]
                    },
                    "abc"
                ]
            });
            
            expect(translate('@customerPermissions contains "read:posts"').jsonLogic).toEqual({
                "in": [{"var": "customerPermissions"}, "read:posts"]
            });
        });
    });

    describe('Array Operations', () => {
        it('should translate array membership', () => {
            expect(translate('@country in ["US", "CA"]').jsonLogic).toEqual({
                "in": [{"var": "country"}, ["US", "CA"]]
            });
            
            expect(translate('@country not in ["US", "CA"]').jsonLogic).toEqual({
                "!": {
                    "in": [{"var": "country"}, ["US", "CA"]]
                }
            });
        });

        it('should translate array testing operations', () => {
            expect(translate('all(@numbers, number > 0)').jsonLogic).toEqual({
                "all": [{"var": "numbers"}, {">": [{"var": ""}, 0]}]
            });
            
            expect(translate('some(@numbers, number > 100)').jsonLogic).toEqual({
                "some": [{"var": "numbers"}, {">": [{"var": ""}, 100]}]
            });
            
            expect(translate('none(@numbers, number < 0)').jsonLogic).toEqual({
                "none": [{"var": "numbers"}, {"<": [{"var": ""}, 0]}]
            });
        });

        it('should handle nested property access in array operations', () => {
            expect(translate('some(@user.role.permissions, permission == "post:delete")').jsonLogic).toEqual({
                "some": [
                    {"var": "user.role.permissions"},
                    {"==": [{"var": ""}, "post:delete"]}
                ]
            });
        });

        it('should translate array manipulation operations', () => {
            expect(translate('map(@numbers, number * 2)').jsonLogic).toEqual({
                "map": [
                    {"var": "numbers"},
                    {"*": [{"var": ""}, 2]}
                ]
            });
            
            expect(translate('filter(@numbers, number > 10)').jsonLogic).toEqual({
                "filter": [
                    {"var": "numbers"},
                    {">": [{"var": ""}, 10]}
                ]
            });
            
            expect(translate('reduce(@numbers, accumulator + current, 0)').jsonLogic).toEqual({
                "reduce": [
                    {"var": "numbers"},
                    {"+": [{"var": ""}, {"var": ""}]},
                    0
                ]
            });
        });

        it('should translate merge function', () => {
            expect(translate('merge(@array1, @array2)').jsonLogic).toEqual({
                "merge": [{"var": "array1"}, {"var": "array2"}]
            });
            
            expect(translate('merge(@array1, @array2, @array3)').jsonLogic).toEqual({
                "merge": [{"var": "array1"}, {"var": "array2"}, {"var": "array3"}]
            });
        });
    });

    describe('Conditional Expressions', () => {
        it('should translate simple if-then-else', () => {
            expect(translate('if @age >= 18 then "adult" else "minor"').jsonLogic).toEqual({
                "if": [
                    {">=": [{"var": "age"}, 18]},
                    "adult",
                    "minor"
                ]
            });
        });

        it('should translate if-elseif-else chains', () => {
            expect(translate('if @score >= 90 then "A" elseif @score >= 80 then "B" else "C"').jsonLogic).toEqual({
                "if": [
                    {">=": [{"var": "score"}, 90]},
                    "A",
                    {">=": [{"var": "score"}, 80]},
                    "B",
                    "C"
                ]
            });
        });

        it('should handle complex conditional expressions', () => {
            expect(translate('if @user.role == "admin" and @user.isActive then @user.permissions else []').jsonLogic).toEqual({
                "if": [
                    {"and": [
                        {"==": [{"var": "user.role"}, "admin"]},
                        {"var": "user.isActive"}
                    ]},
                    {"var": "user.permissions"},
                    []
                ]
            });
        });
    });

    describe('Miscellaneous Operations', () => {
        it('should translate log function', () => {
            expect(translate('log(@value)').jsonLogic).toEqual({
                "log": [{"var": "value"}]
            });
        });
    });

    describe('Complex Nested Operations', () => {
        it('should handle complex boolean logic with comparisons', () => {
            expect(translate('@age between 18 and 22 and @country in ["US", "CA"]').jsonLogic).toEqual({
                "and": [
                    {"and": [
                        {">=": [{"var": "age"}, 18]},
                        {"<=": [{"var": "age"}, 22]}
                    ]},
                    {"in": [{"var": "country"}, ["US", "CA"]]}
                ]
            });
        });

        it('should handle complex OR with AND precedence', () => {
            expect(translate('@isActive == true and @role in ["admin", "moderator"] or @role == "superadmin"').jsonLogic).toEqual({
                "or": [
                    {"and": [
                        {"==": [{"var": "isActive"}, true]},
                        {"in": [{"var": "role"}, ["admin", "moderator"]]}
                    ]},
                    {"==": [{"var": "role"}, "superadmin"]}
                ]
            });
        });

        it('should handle arithmetic with comparisons', () => {
            expect(translate('(@price * @quantity) > @budget').jsonLogic).toEqual({
                ">": [
                    {"*": [{"var": "price"}, {"var": "quantity"}]},
                    {"var": "budget"}
                ]
            });
        });

        it('should handle mixed operations with proper precedence', () => {
            expect(translate('@a + @b * @c > @d and @e < @f or @g == @h').jsonLogic).toEqual({
                "or": [
                    {"and": [
                        {">": [
                            {"+": [{"var": "a"}, {"*": [{"var": "b"}, {"var": "c"}]}]},
                            {"var": "d"}
                        ]},
                        {"<": [{"var": "e"}, {"var": "f"}]}
                    ]},
                    {"==": [{"var": "g"}, {"var": "h"}]}
                ]
            });
        });
    });

    describe('Error Handling', () => {
        it('should throw error for invalid syntax', () => {
            expect(() => translate('@age >')).toThrow();
            expect(() => translate('@age == == 18')).toThrow();
            expect(() => translate('(@age > 18')).toThrow();
            expect(() => translate('[1, 2, 3')).toThrow();
        });

        it('should handle empty expressions', () => {
            expect(() => translate('')).toThrow();
            expect(() => translate('   ')).toThrow();
        });
    });

    describe('Return Value Structure', () => {
        it('should return object with expression and jsonLogic properties', () => {
            const result = translate('@age > 18');
            expect(result).toHaveProperty('expression');
            expect(result).toHaveProperty('jsonLogic');
            expect(result.expression).toBe('@age > 18');
            expect(result.jsonLogic).toEqual({
                ">": [{"var": "age"}, 18]
            });
        });

        it('should preserve original expression in result', () => {
            const originalExpr = 'if @user.isActive then "active" else "inactive"';
            const result = translate(originalExpr);
            expect(result.expression).toBe(originalExpr);
        });
    });

    describe('Real-world Use Cases', () => {
        it('should handle user permission checking', () => {
            const result = translate('if @user.role == "admin" or some(@user.permissions, permission == "manage_users") then true else false');
            expect(result.jsonLogic).toEqual({
                "if": [
                    {"or": [
                        {"==": [{"var": "user.role"}, "admin"]},
                        {"some": [
                            {"var": "user.permissions"},
                            {"==": [{"var": ""}, "manage_users"]}
                        ]}
                    ]},
                    true,
                    false
                ]
            });
        });

        it('should handle e-commerce product filtering', () => {
            const result = translate('filter(@products, item.price between 50 and 200 and item.category in ["electronics", "books"])');
            expect(result.jsonLogic).toEqual({
                "filter": [
                    {"var": "products"},
                    {"and": [
                        {"and": [
                            {">=": [{"var": "price"}, 50]},
                            {"<=": [{"var": "price"}, 200]}
                        ]},
                        {"in": [{"var": "category"}, ["electronics", "books"]]}
                    ]}
                ]
            });
        });

        it('should handle content access control', () => {
            const result = translate('if @user.age >= 18 and @user.subscription == "premium" then @content else filter(@content, item.free == true)');
            expect(result.jsonLogic).toEqual({
                "if": [
                    {"and": [
                        {">=": [{"var": "user.age"}, 18]},
                        {"==": [{"var": "user.subscription"}, "premium"]}
                    ]},
                    {"var": "content"},
                    {"filter": [
                        {"var": "content"},
                        {"==": [{"var": "free"}, true]}
                    ]}
                ]
            });
        });

        it('should handle basic user permission checking', () => {
            const result = translate('if @user.role == "admin" or @user.isActive == true then "allowed" else "denied"');
            expect(result.jsonLogic).toEqual({
                "if": [
                    {"or": [
                        {"==": [{"var": "user.role"}, "admin"]},
                        {"==": [{"var": "user.isActive"}, true]}
                    ]},
                    "allowed",
                    "denied"
                ]
            });
        });

        it('should handle age-based access control', () => {
            const result = translate('if @user.age >= 18 and @user.verified == true then "adult" else "minor"');
            expect(result.jsonLogic).toEqual({
                "if": [
                    {"and": [
                        {">=": [{"var": "user.age"}, 18]},
                        {"==": [{"var": "user.verified"}, true]}
                    ]},
                    "adult",
                    "minor"
                ]
            });
        });

        it('should handle pricing logic', () => {
            const result = translate('if @user.subscription == "premium" then @price * 0.8 else @price');
            expect(result.jsonLogic).toEqual({
                "if": [
                    {"==": [{"var": "user.subscription"}, "premium"]},
                    {"*": [{"var": "price"}, 0.8]},
                    {"var": "price"}
                ]
            });
        });
describe('Placeholder Support', () => {
        it('should translate simple placeholders', () => {
            expect(translate('{AGE}').jsonLogic).toBe('{AGE}');
            expect(translate('{USER_NAME}').jsonLogic).toBe('{USER_NAME}');
            expect(translate('{MIN_SCORE}').jsonLogic).toBe('{MIN_SCORE}');
        });

        it('should translate placeholders in comparisons', () => {
            expect(translate('@age > {AGE}').jsonLogic).toEqual({
                ">": [{"var": "age"}, "{AGE}"]
            });
            expect(translate('@name == {USER_NAME}').jsonLogic).toEqual({
                "==": [{"var": "name"}, "{USER_NAME}"]
            });
            expect(translate('@score < {MAX_SCORE}').jsonLogic).toEqual({
                "<": [{"var": "score"}, "{MAX_SCORE}"]
            });
        });

        it('should translate placeholders in between expressions', () => {
            expect(translate('@score between {MIN_SCORE} and {MAX_SCORE}').jsonLogic).toEqual({
                "and": [
                    {">=": [{"var": "score"}, "{MIN_SCORE}"]},
                    {"<=": [{"var": "score"}, "{MAX_SCORE}"]}
                ]
            });
        });

        it('should translate placeholders in arrays', () => {
            expect(translate('[{ITEM_1}, {ITEM_2}, {ITEM_3}]').jsonLogic).toEqual([
                "{ITEM_1}", "{ITEM_2}", "{ITEM_3}"
            ]);
            expect(translate('@category in [{CATEGORY_1}, {CATEGORY_2}]').jsonLogic).toEqual({
                "in": [{"var": "category"}, ["{CATEGORY_1}", "{CATEGORY_2}"]]
            });
        });

        it('should translate placeholders in conditional expressions', () => {
            expect(translate('if @status == {ACTIVE_STATUS} then @count + {BONUS} else @count').jsonLogic).toEqual({
                "if": [
                    {"==": [{"var": "status"}, "{ACTIVE_STATUS}"]},
                    {"+": [{"var": "count"}, "{BONUS}"]},
                    {"var": "count"}
                ]
            });
        });

        it('should translate placeholders in arithmetic operations', () => {
            expect(translate('@price * {MULTIPLIER} + {BASE_FEE}').jsonLogic).toEqual({
                "+": [
                    {"*": [{"var": "price"}, "{MULTIPLIER}"]},
                    "{BASE_FEE}"
                ]
            });
        });

        it('should translate placeholders in logical operations', () => {
            expect(translate('@role == {ADMIN_ROLE} and @active == {ACTIVE_FLAG}').jsonLogic).toEqual({
                "and": [
                    {"==": [{"var": "role"}, "{ADMIN_ROLE}"]},
                    {"==": [{"var": "active"}, "{ACTIVE_FLAG}"]}
                ]
            });
        });

        it('should translate placeholders in function calls', () => {
            expect(translate('max(@score, {MIN_THRESHOLD})').jsonLogic).toEqual({
                "max": [{"var": "score"}, "{MIN_THRESHOLD}"]
            });
        });

        it('should handle mixed placeholders and literals', () => {
            expect(translate('@age > {MIN_AGE} and @name == "John"').jsonLogic).toEqual({
                "and": [
                    {">": [{"var": "age"}, "{MIN_AGE}"]},
                    {"==": [{"var": "name"}, "John"]}
                ]
            });
        });
    });

    describe('Bare Identifier Validation', () => {
        it('should throw error for bare identifiers outside lambda context', () => {
            expect(() => translate('@charge_code in CHARGE_CODES')).toThrow('Invalid bare identifier \'CHARGE_CODES\'');
            expect(() => translate('USER_ID == 123')).toThrow('Invalid bare identifier \'USER_ID\'');
            expect(() => translate('@name == ADMIN_ROLE')).toThrow('Invalid bare identifier \'ADMIN_ROLE\'');
            expect(() => translate('STATUS == "active"')).toThrow('Invalid bare identifier \'STATUS\'');
        });

        it('should allow bare identifiers in lambda expressions', () => {
            expect(translate('some(@users, user.role == "admin")').jsonLogic).toEqual({
                "some": [
                    {"var": "users"},
                    {"==": [{"var": "role"}, "admin"]}
                ]
            });
            expect(translate('filter(@products, product.price < 100)').jsonLogic).toEqual({
                "filter": [
                    {"var": "products"},
                    {"<": [{"var": "price"}, 100]}
                ]
            });
        });

        it('should provide helpful error messages for bare identifiers', () => {
            expect(() => translate('INVALID_IDENTIFIER')).toThrow(
                'Invalid bare identifier \'INVALID_IDENTIFIER\'. Identifiers must be prefixed with \'@\' for variables or quoted as strings. Bare identifiers are only allowed in lambda expressions within array methods.'
            );
        });
    });
    });
});