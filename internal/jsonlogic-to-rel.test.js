import { describe, it, expect } from 'vitest';
import { convertFromJsonLogic, jsonLogicToRel } from './jsonlogic-to-rel.js';

describe('JSONLogic to REL Conversion', () => {
    
    describe('Basic Literals', () => {
        it('should convert numbers', () => {
            expect(convertFromJsonLogic(42)).toBe('42');
            expect(convertFromJsonLogic(3.14)).toBe('3.14');
        });

        it('should convert strings', () => {
            expect(convertFromJsonLogic("hello")).toBe('"hello"');
            expect(convertFromJsonLogic("hello \"world\"")).toBe('"hello \\"world\\""');
        });

        it('should convert booleans', () => {
            expect(convertFromJsonLogic(true)).toBe('true');
            expect(convertFromJsonLogic(false)).toBe('false');
        });

        it('should convert arrays', () => {
            expect(convertFromJsonLogic([1, 2, 3])).toBe('[1, 2, 3]');
            expect(convertFromJsonLogic(["a", "b", "c"])).toBe('["a", "b", "c"]');
        });
    });

    describe('Variables', () => {
        it('should convert simple variables', () => {
            expect(convertFromJsonLogic({ "var": "age" })).toBe('@age');
        });

        it('should convert nested variables', () => {
            expect(convertFromJsonLogic({ "var": "user.name" })).toBe('@user.name');
            expect(convertFromJsonLogic({ "var": "user.profile.settings" })).toBe('@user.profile.settings');
        });

        it('should handle empty variable (current item)', () => {
            expect(convertFromJsonLogic({ "var": "" })).toBe('item');
        });
    });

    describe('Comparison Operators', () => {
        it('should convert equality operators', () => {
            expect(convertFromJsonLogic({
                "==": [{ "var": "age" }, 18]
            })).toBe('@age == 18');

            expect(convertFromJsonLogic({
                "===": [{ "var": "type" }, "premium"]
            })).toBe('@type === "premium"');
        });

        it('should convert inequality operators', () => {
            expect(convertFromJsonLogic({
                "!=": [{ "var": "status" }, "inactive"]
            })).toBe('@status != "inactive"');

            expect(convertFromJsonLogic({
                "!==": [{ "var": "value" }, null]
            })).toBe('@value !== null');
        });

        it('should convert relational operators', () => {
            expect(convertFromJsonLogic({
                ">": [{ "var": "age" }, 18]
            })).toBe('@age > 18');

            expect(convertFromJsonLogic({
                ">=": [{ "var": "score" }, 80]
            })).toBe('@score >= 80');

            expect(convertFromJsonLogic({
                "<": [{ "var": "price" }, 100]
            })).toBe('@price < 100');

            expect(convertFromJsonLogic({
                "<=": [{ "var": "count" }, 10]
            })).toBe('@count <= 10');
        });
    });

    describe('Logical Operators', () => {
        it('should convert AND operations', () => {
            expect(convertFromJsonLogic({
                "and": [
                    { ">": [{ "var": "age" }, 18] },
                    { "==": [{ "var": "status" }, "active"] }
                ]
            })).toBe('@age > 18 and @status == "active"');
        });

        it('should convert OR operations', () => {
            expect(convertFromJsonLogic({
                "or": [
                    { "==": [{ "var": "role" }, "admin"] },
                    { "==": [{ "var": "role" }, "moderator"] }
                ]
            })).toBe('@role == "admin" or @role == "moderator"');
        });

        it('should convert NOT operations', () => {
            expect(convertFromJsonLogic({
                "!": { "var": "isBlocked" }
            })).toBe('!@isBlocked');
        });

        it('should convert double NOT operations', () => {
            expect(convertFromJsonLogic({
                "!!": { "var": "value" }
            })).toBe('!!@value');
        });
    });

    describe('Arithmetic Operators', () => {
        it('should convert arithmetic operations', () => {
            expect(convertFromJsonLogic({
                "+": [{ "var": "a" }, { "var": "b" }]
            })).toBe('@a + @b');

            expect(convertFromJsonLogic({
                "-": [{ "var": "total" }, { "var": "discount" }]
            })).toBe('@total - @discount');

            expect(convertFromJsonLogic({
                "*": [{ "var": "price" }, { "var": "quantity" }]
            })).toBe('@price * @quantity');

            expect(convertFromJsonLogic({
                "/": [{ "var": "sum" }, { "var": "count" }]
            })).toBe('@sum / @count');

            expect(convertFromJsonLogic({
                "%": [{ "var": "number" }, 2]
            })).toBe('@number % 2');
        });
    });

    describe('Membership Operators', () => {
        it('should convert IN operations', () => {
            expect(convertFromJsonLogic({
                "in": [{ "var": "country" }, ["US", "CA", "UK"]]
            })).toBe('@country in ["US", "CA", "UK"]');
        });

        it('should convert NOT IN operations', () => {
            expect(convertFromJsonLogic({
                "!": {
                    "in": [{ "var": "role" }, ["banned", "suspended"]]
                }
            })).toBe('@role not in ["banned", "suspended"]');
        });
    });

    describe('Functions', () => {
        it('should convert built-in functions', () => {
            expect(convertFromJsonLogic({
                "max": [{ "var": "score1" }, { "var": "score2" }, { "var": "score3" }]
            })).toBe('max(@score1, @score2, @score3)');

            expect(convertFromJsonLogic({
                "min": [{ "var": "price" }, { "var": "budget" }]
            })).toBe('min(@price, @budget)');

            expect(convertFromJsonLogic({
                "cat": [{ "var": "firstName" }, " ", { "var": "lastName" }]
            })).toBe('cat(@firstName, " ", @lastName)');

            expect(convertFromJsonLogic({
                "substr": [{ "var": "text" }, 0, 10]
            })).toBe('substr(@text, 0, 10)');
        });
    });

    describe('String Operations', () => {
        it('should convert starts with operations', () => {
            expect(convertFromJsonLogic({
                "==": [
                    {
                        "substr": [
                            { "var": "x" },
                            0,
                            3
                        ]
                    },
                    "abc"
                ]
            })).toBe('@x starts with "abc"');
        });

        it('should convert ends with operations', () => {
            expect(convertFromJsonLogic({
                "==": [
                    {
                        "substr": [
                            { "var": "customerEmail" },
                            -8
                        ]
                    },
                    "nike.com"
                ]
            })).toBe('@customerEmail ends with "nike.com"');
        });

        it('should convert contains operations', () => {
            expect(convertFromJsonLogic({
                "in": ["read:posts", { "var": "customerPermissions" }]
            })).toBe('@customerPermissions contains "read:posts"');
        });
    });

    describe('Conditional Expressions', () => {
        it('should convert simple if-then-else', () => {
            expect(convertFromJsonLogic({
                "if": [
                    { ">=": [{ "var": "age" }, 18] },
                    "adult",
                    "minor"
                ]
            })).toBe('if @age >= 18 then "adult" else "minor"');
        });

        it('should convert if-elseif-else chains', () => {
            expect(convertFromJsonLogic({
                "if": [
                    { ">=": [{ "var": "score" }, 90] },
                    "A",
                    { ">=": [{ "var": "score" }, 80] },
                    "B",
                    { ">=": [{ "var": "score" }, 70] },
                    "C",
                    "F"
                ]
            })).toBe('if @score >= 90 then "A" elseif @score >= 80 then "B" elseif @score >= 70 then "C" else "F"');
        });
    });

    describe('Array Methods', () => {
        it('should convert array methods with lambda expressions', () => {
            expect(convertFromJsonLogic({
                "some": [
                    { "var": "permissions" },
                    { "==": [{ "var": "" }, "admin"] }
                ]
            })).toBe('some(@permissions, item == "admin")');

            expect(convertFromJsonLogic({
                "filter": [
                    { "var": "products" },
                    { "<": [{ "var": "price" }, 100] }
                ]
            })).toBe('filter(@products, product.price < 100)');

            expect(convertFromJsonLogic({
                "map": [
                    { "var": "users" },
                    { "var": "name" }
                ]
            })).toBe('map(@users, user.name)');
        });
    });

    describe('Special Cases', () => {
        it('should convert BETWEEN expressions', () => {
            expect(convertFromJsonLogic({
                "and": [
                    { ">=": [{ "var": "score" }, 80] },
                    { "<=": [{ "var": "score" }, 100] }
                ]
            })).toBe('@score between 80 and 100');
        });

        it('should handle complex nested expressions', () => {
            expect(convertFromJsonLogic({
                "and": [
                    { "==": [{ "var": "user.isActive" }, true] },
                    {
                        "or": [
                            { "==": [{ "var": "user.role" }, "admin"] },
                            {
                                "some": [
                                    { "var": "user.permissions" },
                                    { "==": [{ "var": "" }, "read:posts"] }
                                ]
                            }
                        ]
                    }
                ]
            })).toBe('@user.isActive == true and (@user.role == "admin" or some(@user.permissions, item == "read:posts"))');
        });
    });

    describe('Error Handling', () => {
        it('should handle invalid JSONLogic objects', () => {
            expect(() => convertFromJsonLogic({ "invalid": "operator" })).not.toThrow();
            // Should treat as custom function
            expect(convertFromJsonLogic({ "customFunc": [1, 2] })).toBe('customFunc(1, 2)');
        });

        it('should handle empty objects', () => {
            expect(() => convertFromJsonLogic({})).toThrow();
        });

        it('should handle objects with multiple keys', () => {
            expect(() => convertFromJsonLogic({ "and": [], "or": [] })).toThrow();
        });
    });
});

describe('Extended JSONLogic to REL Conversion Tests', () => {
    
    describe('Literal Value Edge Cases', () => {
        it('should handle null and undefined values', () => {
            expect(jsonLogicToRel(null)).toBe('null');
            expect(jsonLogicToRel(undefined)).toBe('undefined');
        });

        it('should handle zero and negative numbers', () => {
            expect(convertFromJsonLogic(0)).toBe('0');
            expect(convertFromJsonLogic(-42)).toBe('-42');
            expect(convertFromJsonLogic(-3.14)).toBe('-3.14');
        });

        it('should handle empty strings and special characters', () => {
            expect(convertFromJsonLogic("")).toBe('""');
            expect(convertFromJsonLogic("test\nwith\nnewlines")).toBe('"test\nwith\nnewlines"');
            expect(convertFromJsonLogic("test\twith\ttabs")).toBe('"test\twith\ttabs"');
        });

        it('should handle nested arrays', () => {
            expect(convertFromJsonLogic([[1, 2], [3, 4]])).toBe('[[1, 2], [3, 4]]');
            expect(convertFromJsonLogic([["a", "b"], ["c", "d"]])).toBe('[["a", "b"], ["c", "d"]]');
        });

        it('should handle mixed type arrays', () => {
            expect(convertFromJsonLogic([1, "hello", true, null])).toBe('[1, "hello", true, null]');
        });

        it('should handle object literals', () => {
            // Objects with single key are treated as operators, multiple keys throw error
            expect(convertFromJsonLogic({key: "value"})).toBe('key("value")');
            expect(() => convertFromJsonLogic({num: 42, bool: true})).toThrow('Invalid JSONLogic: object must have exactly one key');
        });
    });

    describe('Binary Operator Edge Cases', () => {
        it('should handle chained operations with more than 2 arguments', () => {
            expect(convertFromJsonLogic({
                "and": [
                    { "var": "a" },
                    { "var": "b" },
                    { "var": "c" },
                    { "var": "d" }
                ]
            })).toBe('@a and @b and @c and @d');

            expect(convertFromJsonLogic({
                "+": [1, 2, 3, 4, 5]
            })).toBe('1 + 2 + 3 + 4 + 5');
        });

        it('should throw error for binary operators with insufficient arguments', () => {
            expect(() => convertFromJsonLogic({
                "and": [{ "var": "a" }]
            })).toThrow('Binary operator requires at least 2 arguments, got 1');

            expect(() => convertFromJsonLogic({
                "==": []
            })).toThrow('Binary operator requires at least 2 arguments, got 0');
        });

        it('should handle single argument for binary operators (edge case)', () => {
            expect(() => convertFromJsonLogic({
                ">": [{ "var": "age" }]
            })).toThrow('Binary operator requires at least 2 arguments, got 1');
        });
    });

    describe('Operator Precedence and Parentheses', () => {
        it('should add parentheses for lower precedence operations', () => {
            // Test precedence: multiplication higher than addition
            expect(convertFromJsonLogic({
                "+": [
                    { "*": [2, 3] },
                    4
                ]
            })).toBe('2 * 3 + 4');

            // Test precedence: and higher than or
            expect(convertFromJsonLogic({
                "or": [
                    { "and": [{ "var": "a" }, { "var": "b" }] },
                    { "var": "c" }
                ]
            })).toBe('@a and @b or @c');
        });

        it('should add parentheses when needed for precedence', () => {
            expect(convertFromJsonLogic({
                "*": [
                    { "+": [2, 3] },
                    4
                ]
            })).toBe('(2 + 3) * 4');
        });

        it('should handle complex nested precedence', () => {
            expect(convertFromJsonLogic({
                "and": [
                    { "or": [{ "var": "a" }, { "var": "b" }] },
                    { "==": [{ "var": "c" }, 1] }
                ]
            })).toBe('(@a or @b) and @c == 1');
        });
    });

    describe('Function Calls', () => {
        it('should handle functions with no arguments', () => {
            expect(convertFromJsonLogic({
                "getCurrentTime": []
            })).toBe('getCurrentTime');
        });

        it('should handle log function', () => {
            expect(convertFromJsonLogic({
                "log": [{ "var": "message" }]
            })).toBe('log(@message)');
        });

        it('should handle custom functions', () => {
            expect(convertFromJsonLogic({
                "customFunction": [{ "var": "param1" }, "param2", 42]
            })).toBe('customFunction(@param1, "param2", 42)');
        });

        it('should handle functions with single argument', () => {
            expect(convertFromJsonLogic({
                "abs": [{ "var": "number" }]
            })).toBe('abs(@number)');
        });
    });

    describe('Array Methods - Comprehensive', () => {
        it('should handle all array methods', () => {
            expect(convertFromJsonLogic({
                "all": [
                    { "var": "items" },
                    { ">": [{ "var": "value" }, 0] }
                ]
            })).toBe('all(@items, item.value > 0)');

            expect(convertFromJsonLogic({
                "none": [
                    { "var": "users" },
                    { "==": [{ "var": "status" }, "banned"] }
                ]
            })).toBe('none(@users, user.status == "banned")');

            expect(convertFromJsonLogic({
                "merge": [
                    { "var": "array1" },
                    { "var": "array2" }
                ]
            })).toBe('merge(@array1, array1.array2)');
        });

        it('should handle reduce with initial value', () => {
            expect(convertFromJsonLogic({
                "reduce": [
                    { "var": "numbers" },
                    { "+": [{ "var": "acc" }, { "var": "value" }] },
                    0
                ]
            })).toBe('reduce(@numbers, number.acc + number.value, 0)');
        });

        it('should handle array methods with single argument', () => {
            expect(convertFromJsonLogic({
                "some": [{ "var": "items" }]
            })).toBe('some(@items)');
        });

        it('should throw error for array methods with no arguments', () => {
            expect(() => convertFromJsonLogic({
                "filter": []
            })).toThrow("Array method 'filter' requires at least one argument");
        });

        it('should handle complex lambda expressions in array methods', () => {
            expect(convertFromJsonLogic({
                "filter": [
                    { "var": "products" },
                    {
                        "and": [
                            { ">": [{ "var": "price" }, 10] },
                            { "==": [{ "var": "category" }, "electronics"] }
                        ]
                    }
                ]
            })).toBe('filter(@products, product.price > 10 and product.category == "electronics")');
        });
    });

    describe('Lambda Expression Context', () => {
        it('should handle empty variable in lambda context', () => {
            expect(convertFromJsonLogic({
                "map": [
                    { "var": "items" },
                    { "var": "" }
                ]
            })).toBe('map(@items, item)');
        });

        it('should handle nested properties in lambda context', () => {
            expect(convertFromJsonLogic({
                "filter": [
                    { "var": "users" },
                    { "==": [{ "var": "profile.settings.theme" }, "dark"] }
                ]
            })).toBe('filter(@users, user.profile.settings.theme == "dark")');
        });

        it('should handle arithmetic operations in lambda context', () => {
            expect(convertFromJsonLogic({
                "map": [
                    { "var": "prices" },
                    { "*": [{ "var": "amount" }, 1.1] }
                ]
            })).toBe('map(@prices, price.amount * 1.1)');
        });

        it('should handle logical operations in lambda context', () => {
            expect(convertFromJsonLogic({
                "some": [
                    { "var": "items" },
                    {
                        "or": [
                            { "==": [{ "var": "status" }, "active"] },
                            { "==": [{ "var": "priority" }, "high"] }
                        ]
                    }
                ]
            })).toBe('some(@items, item.status == "active" or item.priority == "high")');
        });

        it('should handle unary operators in lambda context', () => {
            expect(convertFromJsonLogic({
                "filter": [
                    { "var": "flags" },
                    { "!": { "var": "disabled" } }
                ]
            })).toBe('filter(@flags, !flag.disabled)');

            expect(convertFromJsonLogic({
                "some": [
                    { "var": "values" },
                    { "!!": { "var": "truthy" } }
                ]
            })).toBe('some(@values, !!value.truthy)');
        });

        it('should handle membership operators in lambda context', () => {
            expect(convertFromJsonLogic({
                "filter": [
                    { "var": "users" },
                    { "in": [{ "var": "role" }, ["admin", "moderator"]] }
                ]
            })).toBe('filter(@users, user.role in ["admin", "moderator"])');
        });

        it('should handle functions in lambda context', () => {
            expect(convertFromJsonLogic({
                "map": [
                    { "var": "items" },
                    { "max": [{ "var": "value1" }, { "var": "value2" }] }
                ]
            })).toBe('map(@items, max(item.value1, item.value2))');
        });

        it('should handle arrays in lambda context', () => {
            expect(convertFromJsonLogic({
                "map": [
                    { "var": "data" },
                    [{ "var": "x" }, { "var": "y" }]
                ]
            })).toBe('map(@data, [data.x, data.y])');
        });

        it('should handle literals in lambda context', () => {
            expect(convertFromJsonLogic({
                "map": [
                    { "var": "items" },
                    "constant"
                ]
            })).toBe('map(@items, "constant")');
        });
    });

    describe('Variable Name Singularization', () => {
        it('should convert plural array names to singular in lambda context', () => {
            expect(convertFromJsonLogic({
                "filter": [
                    { "var": "books" },
                    { ">": [{ "var": "pages" }, 100] }
                ]
            })).toBe('filter(@books, book.pages > 100)');

            expect(convertFromJsonLogic({
                "map": [
                    { "var": "categories" },
                    { "var": "name" }
                ]
            })).toBe('map(@categories, categorie.name)');
        });

        it('should handle non-plural array names', () => {
            expect(convertFromJsonLogic({
                "filter": [
                    { "var": "data" },
                    { ">": [{ "var": "value" }, 0] }
                ]
            })).toBe('filter(@data, data.value > 0)');
        });

        it('should handle single character array names', () => {
            expect(convertFromJsonLogic({
                "map": [
                    { "var": "x" },
                    { "var": "y" }
                ]
            })).toBe('map(@x, x.y)');
        });
    });

    describe('If Expression Edge Cases', () => {
        it('should throw error for if with insufficient arguments', () => {
            expect(() => convertFromJsonLogic({
                "if": [{ "var": "condition" }]
            })).toThrow('If expression requires at least 3 arguments (condition, then, else)');

            expect(() => convertFromJsonLogic({
                "if": [{ "var": "condition" }, "then"]
            })).toThrow('If expression requires at least 3 arguments (condition, then, else)');
        });

        it('should handle if with only condition, then, and else', () => {
            expect(convertFromJsonLogic({
                "if": [
                    { "var": "test" },
                    "yes",
                    "no"
                ]
            })).toBe('if @test then "yes" else "no"');
        });

        it('should handle complex conditions in if expressions', () => {
            expect(convertFromJsonLogic({
                "if": [
                    {
                        "and": [
                            { ">": [{ "var": "age" }, 18] },
                            { "==": [{ "var": "status" }, "active"] }
                        ]
                    },
                    "eligible",
                    "not eligible"
                ]
            })).toBe('if @age > 18 and @status == "active" then "eligible" else "not eligible"');
        });
    });

    describe('Special Cases - Extended', () => {
        it('should handle between pattern with different variable references', () => {
            // Should not convert to between if variables are different
            expect(convertFromJsonLogic({
                "and": [
                    { ">=": [{ "var": "age" }, 18] },
                    { "<=": [{ "var": "score" }, 100] }
                ]
            })).toBe('@age >= 18 and @score <= 100');
        });

        it('should handle between pattern with complex expressions', () => {
            expect(convertFromJsonLogic({
                "and": [
                    { ">=": [{ "+": [{ "var": "base" }, { "var": "bonus" }] }, 100] },
                    { "<=": [{ "+": [{ "var": "base" }, { "var": "bonus" }] }, 200] }
                ]
            })).toBe('@base + @bonus between 100 and 200');
        });

        it('should handle not in pattern variations', () => {
            expect(convertFromJsonLogic({
                "!": {
                    "in": ["value", ["a", "b", "c"]]
                }
            })).toBe('"value" not in ["a", "b", "c"]');
        });

        it('should not apply special cases when pattern doesn\'t match exactly', () => {
            // Not a between pattern - has 3 conditions
            expect(convertFromJsonLogic({
                "and": [
                    { ">=": [{ "var": "score" }, 80] },
                    { "<=": [{ "var": "score" }, 100] },
                    { "!=": [{ "var": "status" }, "invalid"] }
                ]
            })).toBe('@score >= 80 and @score <= 100 and @status != "invalid"');
        });
    });

    describe('Error Handling - Extended', () => {
        it('should handle objects with no entries gracefully', () => {
            expect(() => convertFromJsonLogic({})).toThrow('Invalid JSONLogic: object must have exactly one key');
        });

        it('should handle objects with multiple keys', () => {
            expect(() => convertFromJsonLogic({
                "and": [{ "var": "a" }],
                "or": [{ "var": "b" }]
            })).toThrow('Invalid JSONLogic: object must have exactly one key');
        });

        it('should wrap conversion errors with context', () => {
            expect(() => convertFromJsonLogic({
                "and": [{ "var": "a" }] // This will cause binary operator error
            })).toThrow('Failed to convert JSONLogic to REL: Binary operator requires at least 2 arguments, got 1');
        });

        it('should handle invalid lambda expressions', () => {
            expect(() => convertFromJsonLogic({
                "map": [
                    { "var": "items" },
                    { "invalid": "operator", "another": "key" }
                ]
            })).toThrow('Failed to convert JSONLogic to REL: Invalid JSONLogic: object must have exactly one key');
        });
    });

    describe('Complex Real-World Scenarios', () => {
        it('should handle complex business rule', () => {
            const complexRule = {
                "and": [
                    { ">=": [{ "var": "user.age" }, 18] },
                    { "==": [{ "var": "user.status" }, "active"] },
                    {
                        "or": [
                            { "==": [{ "var": "user.role" }, "premium"] },
                            {
                                "and": [
                                    { ">=": [{ "var": "user.score" }, 80] },
                                    { "<=": [{ "var": "user.score" }, 100] }
                                ]
                            }
                        ]
                    },
                    {
                        "some": [
                            { "var": "user.permissions" },
                            { "in": [{ "var": "" }, ["read", "write", "admin"]] }
                        ]
                    }
                ]
            };

            expect(convertFromJsonLogic(complexRule)).toBe(
                '@user.age >= 18 and @user.status == "active" and @user.role == "premium" or @user.score >= 80 and @user.score <= 100 and some(@user.permissions, item in ["read", "write", "admin"])'
            );
        });

        it('should handle nested array operations', () => {
            expect(convertFromJsonLogic({
                "some": [
                    { "var": "orders" },
                    {
                        "all": [
                            { "var": "items" },
                            { ">": [{ "var": "price" }, 10] }
                        ]
                    }
                ]
            })).toBe('some(@orders, all(order.items, order.price > 10))');
        });

        it('should handle mathematical expressions with precedence', () => {
            expect(convertFromJsonLogic({
                "==": [
                    {
                        "+": [
                            { "*": [{ "var": "price" }, { "var": "quantity" }] },
                            { "*": [{ "var": "tax" }, { "var": "rate" }] }
                        ]
                    },
                    { "var": "total" }
                ]
            })).toBe('@price * @quantity + @tax * @rate == @total');
        });
    
        describe('Edge Cases for Maximum Coverage', () => {
            it('should handle complex object literals in convertLiteral', () => {
                // Test object literal conversion in convertLiteral function
                expect(jsonLogicToRel({nested: {key: "value"}})).toBe('nested(key("value"))');
            });
    
            it('should handle array methods with complex variable paths', () => {
                // Test complex variable path handling in lambda context
                expect(convertFromJsonLogic({
                    "filter": [
                        { "var": "deeply.nested.items" },
                        { ">": [{ "var": "value" }, 0] }
                    ]
                })).toBe('filter(@deeply.nested.items, item.value > 0)');
            });
    
            it('should handle lambda expressions with non-standard variable names', () => {
                // Test edge cases in variable name singularization
                expect(convertFromJsonLogic({
                    "map": [
                        { "var": "x" },
                        { "var": "property" }
                    ]
                })).toBe('map(@x, x.property)');
            });
    
            it('should handle binary operators in lambda context with insufficient args', () => {
                // This should trigger error handling in convertBinaryOperatorLambda
                expect(() => convertFromJsonLogic({
                    "filter": [
                        { "var": "items" },
                        { "and": [{ "var": "single" }] }
                    ]
                })).toThrow('Binary operator requires at least 2 arguments, got 1');
            });
    
            it('should handle special string values', () => {
                // Test various string edge cases
                expect(jsonLogicToRel("")).toBe('""');
                expect(jsonLogicToRel("null")).toBe('"null"');
                expect(jsonLogicToRel("undefined")).toBe('"undefined"');
            });
    
            it('should handle array methods with empty variable paths', () => {
                // Test array method with empty variable reference
                expect(convertFromJsonLogic({
                    "some": [
                        { "var": "" },
                        { "==": [{ "var": "status" }, "active"] }
                    ]
                })).toBe('some(item, item.status == "active")');
            });
        });
    });

    describe('Direct Function Calls', () => {
        it('should test jsonLogicToRel function directly', () => {
            expect(jsonLogicToRel(42)).toBe('42');
            expect(jsonLogicToRel("test")).toBe('"test"');
            expect(jsonLogicToRel(true)).toBe('true');
            expect(jsonLogicToRel(null)).toBe('null');
            expect(jsonLogicToRel(undefined)).toBe('undefined');
        });

        it('should handle non-object inputs to jsonLogicToRel', () => {
            expect(jsonLogicToRel("string")).toBe('"string"');
            expect(jsonLogicToRel(123)).toBe('123');
            expect(jsonLogicToRel(false)).toBe('false');
        });
    });
});