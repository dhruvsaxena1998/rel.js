grammar REL;

// ----------------- PARSER RULES ------------------

// Entry point
expression: conditionalExpression EOF;

// Conditional expressions (if-then-else, elseif)
conditionalExpression:
	IF logicalOrExpression THEN conditionalExpression (
		ELSEIF logicalOrExpression THEN conditionalExpression
	)* ELSE conditionalExpression	# IfThenElse
	| logicalOrExpression			# LogicalOr;

// Logical OR (lowest precedence)
logicalOrExpression:
	logicalOrExpression OR logicalAndExpression	# OrExpression
	| logicalAndExpression						# LogicalAnd;

// Logical AND
logicalAndExpression:
	logicalAndExpression AND equalityExpression	# AndExpression
	| equalityExpression						# Equality;

// Equality and inequality operations
equalityExpression:
	equalityExpression EQ relationalExpression		# EqualExpression
	| equalityExpression SEQ relationalExpression	# StrictEqualExpression
	| equalityExpression NEQ relationalExpression	# NotEqualExpression
	| equalityExpression SNEQ relationalExpression	# StrictNotEqualExpression
	| relationalExpression							# Relational;

// Relational operations (comparisons, between, in, not in)
relationalExpression:
	relationalExpression GT additiveExpression									# GreaterThanExpression
	| relationalExpression GTE additiveExpression								# GreaterThanOrEqualExpression
	| relationalExpression LT additiveExpression								# LessThanExpression
	| relationalExpression LTE additiveExpression								# LessThanOrEqualExpression
	| relationalExpression BETWEEN additiveExpression AND additiveExpression	# BetweenExpression
	| relationalExpression IN additiveExpression								# InExpression
	| relationalExpression NOT_IN additiveExpression							# NotInExpression
	| relationalExpression STARTS_WITH additiveExpression						# StartsWithExpression
	| relationalExpression ENDS_WITH additiveExpression							# EndsWithExpression
	| additiveExpression														# Additive;

// Arithmetic operations (addition, subtraction)
additiveExpression:
	additiveExpression PLUS multiplicativeExpression	# AddExpression
	| additiveExpression MINUS multiplicativeExpression	# SubtractExpression
	| multiplicativeExpression							# Multiplicative;

// Arithmetic operations (multiplication, division, modulo)
multiplicativeExpression:
	multiplicativeExpression MULTIPLY unaryExpression	# MultiplyExpression
	| multiplicativeExpression DIVIDE unaryExpression	# DivideExpression
	| multiplicativeExpression MODULO unaryExpression	# ModuloExpression
	| unaryExpression									# Unary;

// Unary expressions (negation, double negation)
unaryExpression:
	NOT unaryExpression				# NotExpression
	| DOUBLE_NOT unaryExpression	# DoubleNotExpression
	| postfixExpression				# Postfix;

// Postfix expressions (dot notation for nested access)
postfixExpression:
	postfixExpression DOT IDENTIFIER	# PropertyAccess
	| primaryExpression					# Primary;

// Primary expressions (atoms)
primaryExpression:
	variable								# VariableExpression
	| bareIdentifier						# BareIdentifierExpression
	| literal								# LiteralExpression
	| functionCall							# FunctionCallExpression
	| LPAREN conditionalExpression RPAREN	# ParenthesizedExpression;

// Bare identifier (for lambda expressions)
bareIdentifier: IDENTIFIER;

// Variables (prefixed with @)
variable: '@' variableName;

// Variable name with dot notation support
variableName: IDENTIFIER (DOT IDENTIFIER)*;

// Literals
literal:
	NUMBER		# NumberLiteral
	| STRING	# StringLiteral
	| BOOLEAN	# BooleanLiteral
	| array		# ArrayLiteral;

// Array literal
array:
	LBRACKET (
		conditionalExpression (COMMA conditionalExpression)*
	)? RBRACKET;

// Function calls (now includes array methods)
functionCall:
	functionName LPAREN (
		conditionalExpression (COMMA conditionalExpression)*
	)? RPAREN;

// ----------------- LEXER ------------------

IF: 'if';
THEN: 'then';
ELSE: 'else';
ELSEIF: 'elseif';

OR: 'or';
AND: 'and';

EQ: '=' | '==' | 'eq' | 'equals' | 'equals to';
NEQ: '!=' | 'neq' | 'not equal' | 'not equals to';
SEQ:
	'==='
	| 'seq'
	| 'strict equals'
	| 'strict eq'
	| 'strict equal to';
SNEQ:
	'!=='
	| 'sneq'
	| 'strict not equal'
	| 'strict neq'
	| 'strict not equals to';

GT: '>' | 'gt' | 'greater than';
GTE: '>=' | 'gte' | 'greater than or equal to';
LT: '<' | 'lt' | 'less than';
LTE: '<=' | 'lte' | 'less than or equal to';
BETWEEN: 'between';
IN: 'in' | 'contains' | 'includes';
NOT_IN: 'not in';
STARTS_WITH: 'starts with';
ENDS_WITH: 'ends with';

NOT: '!' | 'not';
DOUBLE_NOT: '!!';

PLUS: '+' | 'plus';
MINUS: '-' | 'minus';
MULTIPLY: '*' | 'multiply' | 'times';
DIVIDE: '/' | 'divide' | 'over';
MODULO: '%' | 'modulo' | 'mod' | 'remainder';

COMMA: ',';
DOT: '.';
SEMICOLON: ';';

LPAREN: '(';
RPAREN: ')';
LBRACKET: '[';
RBRACKET: ']';
LBRACE: '{';
RBRACE: '}';

// Function names
arrayMethods:
	'merge'
	| 'some'
	| 'all'
	| 'none'
	| 'map'
	| 'filter'
	| 'reduce';

stringMethods: 'cat' | 'substr';

functionName:
	'max'
	| 'min'
	| stringMethods
	| arrayMethods
	| IDENTIFIER; // Allow custom function names

// Tokens
NUMBER: '-'? [0-9]+ ('.' [0-9]+)?;

STRING:
	'"' (~["\\] | '\\' .)* '"'
	| '\'' (~['\\] | '\\' .)* '\'';

BOOLEAN: 'true' | 'false';

IDENTIFIER: [a-zA-Z_] [a-zA-Z0-9_]*;

// Whitespace and comments
WS: [ \t\r\n]+ -> skip;

// Comments (for future use)
LINE_COMMENT: '//' ~[\r\n]* -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;