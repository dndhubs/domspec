/**
 * Union type representing ErrorTestTypeTaxonomy in the DOMSpec ecosystem.
 * Defines JavaScript error types for @dndhub/error.
 *
 * - 'Error': The base error type.
 * Classifications: ECMAScript standard.
 * Identifiers: lowercase: 'error', camelCase: 'error', snake_case: 'error', ALL_CAP: 'ERROR', cache key: 'type:error:errId'.
 * Model Identifier Format: 'type-error-{timestamp}'.
 * Example Usage: A generic error.
 *
 * - 'TypeError': Type-related errors.
 * Classifications: ECMAScript standard.
 * Identifiers: lowercase: 'typeerror', camelCase: 'typeError', snake_case: 'type_error', ALL_CAP: 'TYPEERROR', cache key: 'type:typeerror:errId'.
 * Model Identifier Format: 'type-typeerror-{timestamp}'.
 * Example Usage: Invalid type in DomsError.ts.
 *
 * - 'SyntaxError': Syntax-related errors.
 * Identifiers: lowercase: 'syntaxerror', camelCase: 'syntaxError', snake_case: 'syntax_error', ALL_CAP: 'SYNTAXERROR', cache key: 'type:syntaxerror:errId'.
 * Model Identifier Format: 'type-syntaxerror-{timestamp}'.
 * Example Usage: JSON parsing errors.
 *
 * - 'ReferenceError': Reference-related errors.
 * Identifiers: lowercase: 'referenceerror', camelCase: 'referenceError', snake_case: 'reference_error', ALL_CAP: 'REFERENCEERROR', cache key: 'type:referenceerror:errId'.
 * Model Identifier Format: 'type-referenceerror-{timestamp}'.
 * Example Usage: Undefined variable errors.
 *
 * - 'RangeError': Range-related errors.
 * Identifiers: lowercase: 'rangeerror', camelCase: 'rangeError', snake_case: 'range_error', ALL_CAP: 'RANGEERROR', cache key: 'type:rangeerror:errId'.
 * Model Identifier Format: 'type-rangeerror-{timestamp}'.
 * Example Usage: Array index out of bounds.
 *
 * - 'EvalError': Errors regarding the global `eval()` function.
 * Classifications: ECMAScript standard.
 * Identifiers: lowercase: 'evalerror', camelCase: 'evalError', snake_case: 'eval_error', ALL_CAP: 'EVALERROR', cache key: 'type:evalerror:errId'.
 * Model Identifier Format: 'type-evalerror-{timestamp}'.
 * Example Usage: A misuse of `eval()`.
 *
 * - 'URIError': URI-related errors.
 * Identifiers: lowercase: 'urierror', camelCase: 'uriError', snake_case: 'uri_error', ALL_CAP: 'URIERROR', cache key: 'type:urierror:errId'.
 * Model Identifier Format: 'type-urierror-{timestamp}'.
 * Example Usage: Malformed URI in API calls.
 *
 * - 'AggregateError': Represents multiple errors wrapped in a single error object.
 * Classifications: ECMAScript standard.
 * Identifiers: lowercase: 'aggregateerror', camelCase: 'aggregateError', snake_case: 'aggregate_error', ALL_CAP: 'AGGREGATEERROR', cache key: 'type:aggregateerror:errId'.
 * Model Identifier Format: 'type-aggregateerror-{timestamp}'.
 * Example Usage: Errors from multiple asynchronous operations.
 *
 */
export type ErrorTestTypeTaxonomy = CoreErrorTestType | CustomErrorTestType;
export type CoreErrorTestType = 'Error'| 'TypeError' | 'SyntaxError' | 'ReferenceError' | 'RangeError' | 'EvalError' | 'URIError' | 'AggregateError';
export type CustomErrorTestType = string & { __type?: 'CustomErrorTestType' };