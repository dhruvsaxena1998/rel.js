# REL Operator Quick Reference Guide

## Overview
This guide provides quick examples for every operator in the REL (Rule Expression Language) DSL. Each operator includes multiple syntax variations and practical examples.

## Variables
```rel
@variable           // Simple variable
@user.name          // Nested property
@user.profile.age   // Deep nesting
```

## Equality Operators

### Equal (`==`, `=`, `eq`, `equals`, `equals to`)
```rel
@age == 25
@name = "John"
@status eq "active"
@role equals "admin"
@type equals to "premium"
```

### Strict Equal (`===`, `seq`, `strict equals`, `strict eq`, `strict equal to`)
```rel
@value === 42
@type seq "string"
@id strict equals 123
@status strict eq "active"
@level strict equal to 5
```

### Not Equal (`!=`, `neq`, `not equal`, `not equals to`)
```rel
@status != "inactive"
@role neq "guest"
@type not equal "banned"
@level not equals to 0
```

### Strict Not Equal (`!==`, `sneq`, `strict not equal`, `strict neq`, `strict not equals to`)
```rel
@value !== "42"
@type sneq "number"
@id strict not equal "123"
@status strict neq "pending"
@level strict not equals to "0"
```

## Comparison Operators

### Greater Than (`>`, `gt`, `greater than`)
```rel
@age > 18
@score gt 85
@temperature greater than 0
```

### Greater Than or Equal (`>=`, `gte`, `greater than or equal to`)
```rel
@age >= 21
@score gte 90
@temperature greater than or equal to 32
```

### Less Than (`<`, `lt`, `less than`)
```rel
@age < 65
@score lt 50
@temperature less than 100
```

### Less Than or Equal (`<=`, `lte`, `less than or equal to`)
```rel
@age <= 30
@score lte 100
@temperature less than or equal to 212
```

### Between
```rel
@age between 18 and 65
@score between 85.5 and 92.3
@temperature between -10 and 5
@price between @minPrice and @maxPrice
```

## Membership Operators

### In
```rel
@country in ["US", "CA", "UK"]
@role in @allowedRoles
@status in ["active", "pending"]
"admin" in @user.permissions
@userId in @approvedUsers
```

### Not In
```rel
@country not in ["BANNED1", "BANNED2"]
@status not in @invalidStatuses
@role not in ["guest", "banned"]
@userId not in @blockedUsers
```

## Logical Operators

### AND (`and`)
```rel
@age >= 18 and @hasLicense == true
@user.isActive and @user.role == "admin"
@score > 80 and @attendance >= 0.9
```

### OR (`or`)
```rel
@role == "admin" or @role == "moderator"
@age < 13 or @age > 65
@status == "premium" or @status == "vip"
```

### NOT (`!`, `not`)
```rel
!@user.isBlocked
not @user.isDeleted
!(@age < 18)
not (@status == "banned")
```

### Double NOT (`!!`)
```rel
!!@user.profile          // Convert to boolean
!!@user.settings.theme   // Check if exists
```

## Arithmetic Operators

### Addition (`+`, `plus`)
```rel
@age + 5
@price plus @tax
@baseScore + @bonusPoints
@width plus @margin
```

### Subtraction (`-`, `minus`)
```rel
@total - @discount
@endDate minus @startDate
@maxCapacity - @currentCount
@budget minus @spent
```

### Multiplication (`*`, `multiply`, `times`)
```rel
@price * @quantity
@width multiply @height
@base times @height
@hourlyRate * @hoursWorked
```

### Division (`/`, `divide`, `over`)
```rel
@total / @count
@distance divide @time
@numerator over @denominator
@totalScore / @numberOfTests
```

### Modulo (`%`, `modulo`, `mod`, `remainder`)
```rel
@number % 2              // Check if even
@value modulo 10         // Get last digit
@dividend mod @divisor   // General modulo
@id remainder 100        // Partition logic
```

## Mathematical Functions

### Max
```rel
max(@a, @b)
max(@score1, @score2, @score3)
max(10, @userScore, @minRequired)
max(@user.currentScore, @user.bestScore)
```

### Min
```rel
min(@a, @b)
min(1, 2, 3)
min(@price, @budget)
min(@user.age, @maxAllowedAge)
```

## String Functions

### Concatenation (`cat`)
```rel
cat(@firstName, " ", @lastName)
cat("Hello, ", @user.name, "!")
cat(@prefix, @id, @suffix)
cat("User: ", @user.email)
```

### Substring (`substr`)
```rel
substr(@text, 0, 5)        // First 5 characters
substr(@description, 10)    // From position 10 to end
substr(@email, 0, 3)       // First 3 chars
substr(@phone, -4)         // Last 4 digits
```

## Array Functions

### Merge
```rel
merge(@array1, @array2)
merge([1, 2], [3, 4])
merge(@userPermissions, @rolePermissions)
merge(@defaultSettings, @userSettings)
```

### Some (Test if any element matches)
```rel
some(@numbers, number > 0)
some(@users, user.role == "admin")
some(@products, product.price < 100)
some(@permissions, permission == "write")
some(@scores, score >= 90)
```

### All (Test if all elements match)
```rel
all(@numbers, number > 0)
all(@users, user.isActive == true)
all(@scores, score >= 60)
all(@products, product.inStock == true)
all(@permissions, permission != "admin")
```

### None (Test if no elements match)
```rel
none(@numbers, number < 0)
none(@users, user.isBlocked == true)
none(@products, product.price > 1000)
none(@scores, score < 50)
```

### Map (Transform each element)
```rel
map(@numbers, number * 2)
map(@users, user.name)
map(@products, product.price * 1.1)
map(@scores, score + 10)
map(@items, item.id)
```

### Filter (Keep elements that match)
```rel
filter(@numbers, number > 10)
filter(@users, user.isActive == true)
filter(@products, product.price < 100)
filter(@scores, score >= 70)
filter(@items, item.category == "electronics")
```

### Reduce (Combine elements into single value)
```rel
reduce(@numbers, accumulator + current, 0)
reduce(@prices, accumulator + current, 0)
reduce(@scores, accumulator + current, 0)
reduce(@values, max(accumulator, current), 0)
```

## Conditional Expressions

### Simple If-Then-Else
```rel
if @age >= 18 then "adult" else "minor"
if @user.isActive then @user.name else "Inactive"
if @score >= 70 then "pass" else "fail"
if @balance > 0 then "positive" else "negative"
```

### If-ElseIf-Else Chains
```rel
if @score >= 90 then "A"
elseif @score >= 80 then "B"
elseif @score >= 70 then "C"
elseif @score >= 60 then "D"
else "F"
```

```rel
if @user.role == "admin" then "full_access"
elseif @user.role == "moderator" then "limited_access"
elseif @user.role == "user" then "basic_access"
else "no_access"
```

### Complex Conditions
```rel
if @user.role == "admin" and @user.isActive then
    "admin_dashboard"
elseif @user.role == "user" and @user.subscription == "premium" then
    "premium_features"
else
    "basic_features"
```

### Nested Conditionals
```rel
if @user.isActive then
    if @user.subscription == "premium" then
        if @user.region == "US" then
            "us_premium_content"
        else
            "international_premium_content"
    else
        "basic_content"
else
    "account_suspended"
```

## Utility Functions

### Log (Debug output)
```rel
log(@debugValue)
log("Debug: " + @variable)
log(@user.id)
```

## Operator Precedence Examples

### Arithmetic Precedence
```rel
@a + @b * @c           // Same as: @a + (@b * @c)
(@a + @b) * @c         // Force addition first
@a * @b + @c * @d      // Same as: (@a * @b) + (@c * @d)
```

### Logical Precedence
```rel
@a or @b and @c        // Same as: @a or (@b and @c)
(@a or @b) and @c      // Force OR first
@a and @b or @c and @d // Same as: (@a and @b) or (@c and @d)
```

### Mixed Precedence
```rel
@age > 18 and @score >= 80 or @isVip == true
// Same as: ((@age > 18) and (@score >= 80)) or (@isVip == true)

(@age > 18 and @score >= 80) or @isVip == true
// Explicit grouping for clarity
```

## Complex Real-World Examples

### User Authorization
```rel
@user.isActive and (
    @user.role == "admin" or 
    @user.role == "moderator" or
    some(@user.permissions, permission == "read:posts")
)
```

### Product Filtering
```rel
filter(@products, 
    product.price between @minPrice and @maxPrice and 
    product.category in @selectedCategories and
    product.inStock == true and
    product.rating >= @minRating
)
```

### Pricing Logic
```rel
if @user.subscription == "enterprise" then
    @basePrice * 0.7
elseif @user.subscription == "business" then
    @basePrice * 0.85
elseif @user.isStudent and @user.age < 25 then
    @basePrice * 0.5
elseif @user.loyaltyYears >= 5 then
    @basePrice * 0.9
else
    @basePrice
```

### Content Access Control
```rel
if @user.age >= 18 then
    if @user.subscription in ["premium", "vip"] then
        if @content.rating <= @user.maxRating then
            "allowed"
        else
            "rating_restricted"
    else
        if @content.type == "free" then
            "allowed"
        else
            "subscription_required"
elseif @user.age >= 13 then
    if @content.rating <= "PG-13" then
        "allowed"
    else
        "age_restricted"
else
    if @content.rating == "G" then
        "allowed"
    else
        "age_restricted"
```

## Tips for Writing REL Expressions

1. **Use parentheses** for complex expressions to make precedence clear
2. **Choose readable operators**: `and` instead of `&&`, `equals` instead of `==`
3. **Break complex conditions** into multiple simpler expressions
4. **Use meaningful variable names**: `@user.isActive` not `@u.a`
5. **Group related conditions** with parentheses
6. **Use array functions** instead of complex loops
7. **Prefer strict equality** (`===`) when type matters
8. **Use between** for range checks instead of `>= and <=`

This quick reference covers all operators and functions available in REL with practical examples for each use case.