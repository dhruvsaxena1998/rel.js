# REL DSL Practical Examples

## Overview
This document provides real-world examples of REL (Rule Expression Language) expressions for common use cases in business logic, user management, content filtering, and data validation.

## Table of Contents
1. [User Management](#user-management)
2. [E-commerce & Pricing](#e-commerce--pricing)
3. [Content Access Control](#content-access-control)
4. [Data Validation](#data-validation)
5. [Business Rules](#business-rules)
6. [Array Processing](#array-processing)
7. [Mathematical Calculations](#mathematical-calculations)
8. [String Processing](#string-processing)
9. [Complex Conditional Logic](#complex-conditional-logic)
10. [Integration Examples](#integration-examples)

## User Management

### User Authentication & Authorization
```rel
// Check if user can access admin panel
@user.isActive and @user.role == "admin" and !@user.isLocked

// Multi-role authorization
@user.isActive and @user.role in ["admin", "moderator", "editor"]

// Permission-based access
@user.isActive and some(@user.permissions, permission == "user:manage")

// Time-based access (business hours)
@user.role == "admin" or (@currentHour >= 9 and @currentHour <= 17)
```

### User Profile Validation
```rel
// Complete profile check
@user.name != "" and 
@user.email != "" and 
@user.age >= 13 and 
@user.termsAccepted == true

// Premium user validation
@user.subscription == "premium" and 
@user.paymentStatus == "current" and 
@user.subscriptionExpiry > @currentDate

// Account security check
@user.emailVerified == true and 
@user.phoneVerified == true and 
@user.twoFactorEnabled == true
```

### User Segmentation
```rel
// VIP user identification
@user.totalSpent > 10000 or 
@user.loyaltyYears >= 5 or 
@user.referralCount >= 20

// At-risk user identification
@user.lastLoginDays > 30 and 
@user.purchaseCount == 0 and 
@user.supportTickets > 3

// High-value user
(@user.monthlySpend > 500 and @user.engagementScore > 80) or
(@user.subscription == "enterprise" and @user.teamSize > 10)
```

## E-commerce & Pricing

### Product Filtering
```rel
// Basic product filter
filter(@products, 
    product.price between @minPrice and @maxPrice and
    product.category in @selectedCategories and
    product.inStock == true
)

// Advanced product filter with ratings
filter(@products,
    product.price <= @budget and
    product.rating >= 4.0 and
    product.shippingDays <= 3 and
    product.brand in @trustedBrands and
    some(product.features, feature in @requiredFeatures)
)

// Seasonal product filter
filter(@products,
    product.category == @seasonCategory and
    product.discount >= 20 and
    product.inventory > 10 and
    product.releaseDate >= @seasonStart
)
```

### Dynamic Pricing
```rel
// Subscription-based pricing
if @user.subscription == "enterprise" then
    @basePrice * 0.6
elseif @user.subscription == "business" then
    @basePrice * 0.8
elseif @user.subscription == "pro" then
    @basePrice * 0.9
else
    @basePrice

// Volume-based pricing
if @quantity >= 100 then
    @unitPrice * 0.8
elseif @quantity >= 50 then
    @unitPrice * 0.9
elseif @quantity >= 10 then
    @unitPrice * 0.95
else
    @unitPrice

// Loyalty-based pricing
if @user.loyaltyTier == "platinum" then
    @price * 0.75
elseif @user.loyaltyTier == "gold" then
    @price * 0.85
elseif @user.loyaltyTier == "silver" then
    @price * 0.95
else
    @price
```

### Cart & Checkout Logic
```rel
// Free shipping eligibility
@cart.total >= @freeShippingThreshold or
@user.subscription in ["premium", "vip"] or
@cart.weight <= 1

// Discount application
if @user.firstPurchase == true then
    @cart.total * 0.9
elseif @cart.total > 200 then
    @cart.total * 0.95
elseif @user.loyaltyPoints >= 1000 then
    @cart.total - min(@user.loyaltyPoints / 10, @cart.total * 0.2)
else
    @cart.total

// Express checkout eligibility
@user.paymentMethodSaved == true and
@user.addressSaved == true and
@cart.total < 500 and
all(@cart.items, item.digital == true)
```

## Content Access Control

### Age-Based Content Filtering
```rel
// Movie/TV content access
if @user.age >= 18 then
    if @content.rating in ["R", "NC-17"] then
        @user.parentalControlsOff == true
    else
        true
elseif @user.age >= 13 then
    @content.rating in ["G", "PG", "PG-13"]
else
    @content.rating in ["G", "PG"]

// Gaming content access
if @user.age >= 17 then
    true
elseif @user.age >= 13 then
    @content.esrbRating in ["E", "E10+", "T"]
elseif @user.age >= 10 then
    @content.esrbRating in ["E", "E10+"]
else
    @content.esrbRating == "E"
```

### Subscription-Based Content
```rel
// Streaming service content access
if @content.type == "free" then
    true
elseif @content.type == "premium" then
    @user.subscription in ["premium", "ultimate"]
elseif @content.type == "exclusive" then
    @user.subscription == "ultimate" and @user.membershipMonths >= 6
else
    false

// Educational content access
if @content.level == "basic" then
    @user.isRegistered == true
elseif @content.level == "intermediate" then
    @user.coursesCompleted >= 3 or @user.subscription != "free"
elseif @content.level == "advanced" then
    @user.subscription in ["pro", "enterprise"] and @user.skillLevel >= 7
else
    @user.subscription == "enterprise"
```

### Geographic Content Restrictions
```rel
// Regional content availability
@user.country in @content.availableCountries and
@user.country not in @content.blockedCountries and
(@content.requiresVpnCheck == false or @user.vpnDetected == false)

// Language-based content
@user.preferredLanguage in @content.availableLanguages or
(@content.hasSubtitles == true and @user.preferredLanguage in @content.subtitleLanguages)

// Time-zone based content (live events)
@user.timezone in @event.supportedTimezones and
@currentTime between @event.startTime and @event.endTime
```

## Data Validation

### Form Validation
```rel
// User registration validation
@form.email != "" and
@form.email in @validEmailPattern and
@form.password != "" and
@form.password.length >= 8 and
@form.age >= 13 and
@form.termsAccepted == true

// Profile update validation
(@form.name == "" or @form.name.length >= 2) and
(@form.phone == "" or @form.phone in @validPhonePattern) and
(@form.website == "" or @form.website in @validUrlPattern) and
@form.age between 13 and 120

// Payment form validation
@form.cardNumber != "" and
@form.cardNumber.length in [15, 16] and
@form.expiryMonth between 1 and 12 and
@form.expiryYear >= @currentYear and
@form.cvv.length in [3, 4]
```

### Business Data Validation
```rel
// Employee data validation
@employee.age >= 16 and
@employee.salary > @minimumWage and
@employee.department in @validDepartments and
@employee.startDate <= @currentDate and
(@employee.endDate == null or @employee.endDate > @employee.startDate)

// Product data validation
@product.price > 0 and
@product.weight > 0 and
@product.category in @validCategories and
@product.sku != "" and
@product.inventory >= 0 and
all(@product.images, image.url != "")

// Order validation
@order.total > 0 and
@order.items.length > 0 and
all(@order.items, item.quantity > 0 and item.price > 0) and
@order.shippingAddress != null and
@order.paymentMethod in @validPaymentMethods
```

## Business Rules

### Approval Workflows
```rel
// Expense approval logic
if @expense.amount <= 100 then
    "auto_approved"
elseif @expense.amount <= 1000 then
    if @user.role in ["manager", "director"] then
        "approved"
    else
        "requires_manager_approval"
elseif @expense.amount <= 5000 then
    if @user.role == "director" then
        "approved"
    else
        "requires_director_approval"
else
    "requires_cfo_approval"

// Leave request approval
if @request.days <= 2 then
    "auto_approved"
elseif @request.days <= 5 then
    if @user.availableLeave >= @request.days then
        "manager_approval_required"
    else
        "hr_approval_required"
else
    "director_approval_required"
```

### Inventory Management
```rel
// Reorder point calculation
@product.currentStock <= (@product.averageDailySales * @product.leadTimeDays * 1.5)

// Stock alert levels
if @product.currentStock == 0 then
    "out_of_stock"
elseif @product.currentStock <= @product.reorderPoint then
    "low_stock"
elseif @product.currentStock <= (@product.reorderPoint * 2) then
    "medium_stock"
else
    "high_stock"

// Supplier selection
filter(@suppliers,
    supplier.rating >= 4.0 and
    supplier.deliveryTime <= @maxDeliveryDays and
    supplier.minOrderValue <= @orderValue and
    supplier.location in @preferredRegions
)
```

### Customer Service Rules
```rel
// Ticket priority assignment
if @ticket.customer.tier == "enterprise" then
    "high"
elseif @ticket.severity == "critical" then
    "high"
elseif @ticket.customer.tier == "premium" and @ticket.severity == "high" then
    "high"
elseif @ticket.age > 24 then
    "medium"
else
    "low"

// Escalation rules
@ticket.age > 48 or
(@ticket.priority == "high" and @ticket.age > 4) or
(@ticket.customer.complaints > 3 and @ticket.age > 12) or
@ticket.sentiment == "very_negative"
```

## Array Processing

### Data Analysis
```rel
// Calculate average score
reduce(@scores, accumulator + current, 0) / @scores.length

// Find users with high engagement
filter(@users, 
    user.loginDays >= 20 and
    user.actionsPerDay >= 10 and
    user.sessionDuration >= 30
)

// Get top performers
filter(@employees,
    employee.performanceScore >= 85 and
    employee.attendanceRate >= 95 and
    none(employee.disciplinaryActions, action.severity == "major")
)
```

### Data Transformation
```rel
// Extract user emails
map(@users, user.email)

// Calculate discounted prices
map(@products, 
    if product.category == "electronics" then
        product.price * 0.9
    else
        product.price
)

// Generate user summaries
map(@users, cat(user.firstName, " ", user.lastName, " (", user.role, ")"))
```

### Data Aggregation
```rel
// Total revenue calculation
reduce(@orders, accumulator + current.total, 0)

// Count active users
reduce(@users, 
    if current.isActive then accumulator + 1 else accumulator, 
    0
)

// Find maximum score
reduce(@scores, max(accumulator, current), 0)
```

## Mathematical Calculations

### Financial Calculations
```rel
// Compound interest calculation
@principal * (1 + @rate / @compoundingFrequency) ^ (@compoundingFrequency * @years)

// Loan payment calculation
(@loanAmount * @monthlyRate) / (1 - (1 + @monthlyRate) ^ (-@numberOfPayments))

// Tax calculation
if @income <= 50000 then
    @income * 0.1
elseif @income <= 100000 then
    5000 + (@income - 50000) * 0.2
else
    15000 + (@income - 100000) * 0.3
```

### Statistical Calculations
```rel
// Standard deviation calculation (simplified)
@variance = reduce(@values, accumulator + (current - @mean) ^ 2, 0) / @values.length
@standardDeviation = @variance ^ 0.5

// Percentile calculation
@sortedValues = @values  // Assume sorted
@percentileIndex = (@percentile / 100) * (@sortedValues.length - 1)
@sortedValues[@percentileIndex]

// Correlation coefficient (simplified)
@correlation = reduce(@pairs, 
    accumulator + (current.x - @meanX) * (current.y - @meanY), 
    0
) / (@values.length * @stdDevX * @stdDevY)
```

## String Processing

### Text Analysis
```rel
// Email validation pattern
@email != "" and
"@" in @email and
"." in @email and
@email.length >= 5

// Phone number formatting
if @phone.length == 10 then
    cat("(", substr(@phone, 0, 3), ") ", substr(@phone, 3, 3), "-", substr(@phone, 6, 4))
else
    @phone

// Name formatting
cat(
    substr(@firstName, 0, 1),
    substr(@firstName, 1).toLowerCase(),
    " ",
    substr(@lastName, 0, 1),
    substr(@lastName, 1).toLowerCase()
)
```

### Content Processing
```rel
// Generate display name
if @user.displayName != "" then
    @user.displayName
elseif @user.firstName != "" and @user.lastName != "" then
    cat(@user.firstName, " ", @user.lastName)
elseif @user.firstName != "" then
    @user.firstName
else
    @user.username

// Create slug from title
@slug = @title.toLowerCase().replace(" ", "-").replace("[^a-z0-9-]", "")

// Truncate description
if @description.length > 100 then
    cat(substr(@description, 0, 97), "...")
else
    @description
```

## Complex Conditional Logic

### Multi-Factor Authentication
```rel
// MFA requirement logic
if @user.role == "admin" then
    true
elseif @user.accessLevel >= 8 then
    true
elseif @user.lastLoginLocation != @currentLocation then
    true
elseif @user.lastLoginTime < (@currentTime - 86400) then
    true
elseif @user.failedLoginAttempts >= 3 then
    true
else
    false
```

### Feature Flag Logic
```rel
// Feature rollout logic
if @feature.enabled == false then
    false
elseif @user.role == "admin" then
    true
elseif @feature.rolloutPercentage >= 100 then
    true
elseif @user.id % 100 < @feature.rolloutPercentage then
    true
elseif @user.betaTester == true then
    true
else
    false
```

### A/B Testing Logic
```rel
// A/B test assignment
if @experiment.enabled == false then
    "control"
elseif @user.id % 100 < @experiment.variantAPercentage then
    "variant_a"
elseif @user.id % 100 < (@experiment.variantAPercentage + @experiment.variantBPercentage) then
    "variant_b"
else
    "control"
```

## Integration Examples

### API Response Processing
```rel
// Process API response
if @response.status == 200 then
    if @response.data != null then
        @response.data
    else
        @defaultData
elseif @response.status == 404 then
    @notFoundData
else
    @errorData

// Validate API data
@response.status == 200 and
@response.data != null and
@response.data.id != null and
@response.data.name != ""
```

### Database Query Conditions
```rel
// User search conditions
(@searchTerm == "" or @user.name in @searchTerm or @user.email in @searchTerm) and
(@roleFilter == "all" or @user.role == @roleFilter) and
(@statusFilter == "all" or @user.isActive == (@statusFilter == "active")) and
(@dateFrom == null or @user.createdDate >= @dateFrom) and
(@dateTo == null or @user.createdDate <= @dateTo)

// Product inventory query
@product.isActive == true and
@product.inventory > 0 and
(@categoryFilter == null or @product.category == @categoryFilter) and
(@priceMin == null or @product.price >= @priceMin) and
(@priceMax == null or @product.price <= @priceMax)
```

### Event Processing
```rel
// Event filtering logic
@event.type in @subscribedEventTypes and
@event.severity >= @minimumSeverity and
(@event.source == null or @event.source in @trustedSources) and
(@event.timestamp >= (@currentTime - @eventWindowSeconds))

// Notification logic
if @event.severity == "critical" then
    "immediate"
elseif @event.severity == "high" and @user.preferences.highPriorityNotifications == true then
    "immediate"
elseif @event.severity == "medium" and @user.preferences.mediumPriorityNotifications == true then
    "batched"
elseif @event.severity == "low" and @user.preferences.lowPriorityNotifications == true then
    "daily_digest"
else
    "none"
```

These examples demonstrate the versatility and power of REL for expressing complex business logic in a readable, maintainable format. Each example can be easily modified and extended to fit specific business requirements.