/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/operator/comparison-operator-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ComparisonOperatorTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ComparisonOperatorTaxonomy
 * Union type representing ComparisonOperatorTaxonomy in the DOMSpec ecosystem.
 * Defines standard comparison operators for querying, filtering, conditional logic, and data validation in APIs, databases, workflows, and configurations across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with SQL standards (e.g., ANSI SQL), NoSQL query languages (e.g., MongoDB operators), RESTful query parameters, and programming constructs (e.g., JavaScript comparison). Supports validation utilities in @domspecs/core for query building, ensuring consistency in filters (e.g., Trakfox analytics queries) and integrations (e.g., HealthOrb DHIS2 data filtering by August 11, 2025).
 *
 * - 'eq': Checks if values are equal.
 *   Classifications: SQL (=), MongoDB ($eq), REST query param (eq.), JavaScript (===).
 *   Identifiers: lowercase: 'eq', camelCase: 'equals', snake_case: 'equals', ALL_CAP: 'EQ', cache key: 'op:eq:filterId'.
 *   Model Identifier Format: 'eq-{field}-{value}' (kebab-case for query strings in APIs or database indexes like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'equals', '=='; used in Trakfox user filters (e.g., status eq active), HealthOrb patient queries (e.g., age eq 30 via DHIS2 adapters), or DnDHubs marketplace searches; validate via utilities like `isEqualityOperator(op)` for secure query parsing.
 *   @example
 *   SELECT * FROM users WHERE age = 25; // SQL example
 *   GET /api/users?age=eq.25 // REST API in Trakfox
 *
 * - 'ne': Checks if values are not equal.
 *   Classifications: SQL (<>), MongoDB ($ne), REST query param (ne.), JavaScript (!==).
 *   Identifiers: lowercase: 'ne', camelCase: 'notEquals', snake_case: 'not_equals', ALL_CAP: 'NE', cache key: 'op:ne:filterId'.
 *   Model Identifier Format: 'ne-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'not_equals', '!='; applied in DataOrb dashboards for excluding data (e.g., status ne inactive), GEOCoLab climate filters ($99 tier, e.g., temperature ne 0).
 *   @example
 *   SELECT * FROM products WHERE price <> 100; // SQL
 *   GET /api/products?price=ne.100 // REST in DnDHubs
 *
 * - 'gt': Checks if value is greater than another.
 *   Classifications: SQL (>), MongoDB ($gt), REST query param (gt.), JavaScript (>).
 *   Identifiers: lowercase: 'gt', camelCase: 'greaterThan', snake_case: 'greater_than', ALL_CAP: 'GT', cache key: 'op:gt:filterId'.
 *   Model Identifier Format: 'gt-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'greater_than', '>'; used in Trakfox loyalty rewards (e.g., points gt 1000), HealthOrb metrics (e.g., visits gt 5).
 *   @example
 *   SELECT * FROM orders WHERE total > 500; // SQL
 *   GET /api/orders?total=gt.500 // REST in DnDHubs marketplace
 *
 * - 'gte': Checks if value is greater than or equal to another.
 *   Classifications: SQL (>=), MongoDB ($gte), REST query param (gte.), JavaScript (>=).
 *   Identifiers: lowercase: 'gte', camelCase: 'greaterThanOrEqual', snake_case: 'greater_than_or_equal', ALL_CAP: 'GTE', cache key: 'op:gte:filterId'.
 *   Model Identifier Format: 'gte-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'greater_than_or_equals', '>='; implemented in GEOCoLab workflows ($2,497 tier, e.g., timestamp gte 2025-08-11).
 *   @example
 *   SELECT * FROM events WHERE date >= '2025-08-11'; // SQL
 *   GET /api/events?date=gte.2025-08-11 // REST in Trakfox
 *
 * - 'lt': Checks if value is less than another.
 *   Classifications: SQL (<), MongoDB ($lt), REST query param (lt.), JavaScript (<).
 *   Identifiers: lowercase: 'lt', camelCase: 'lessThan', snake_case: 'less_than', ALL_CAP: 'LT', cache key: 'op:lt:filterId'.
 *   Model Identifier Format: 'lt-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'less_than', '<'; used in DataOrb analytics (e.g., response_time lt 200ms).
 *   @example
 *   SELECT * FROM logs WHERE time < 200; // SQL
 *   GET /api/logs?time=lt.200 // REST in HealthOrb
 *
 * - 'lte': Checks if value is less than or equal to another.
 *   Classifications: SQL (<=), MongoDB ($lte), REST query param (lte.), JavaScript (<=).
 *   Identifiers: lowercase: 'lte', camelCase: 'lessThanOrEqual', snake_case: 'less_than_or_equal', ALL_CAP: 'LTE', cache key: 'op:lte:filterId'.
 *   Model Identifier Format: 'lte-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'less_than_or_equals', '<='; applied in Trakfox beta features (e.g., version lte 1.0).
 *   @example
 *   SELECT * FROM versions WHERE num <= 1.0; // SQL
 *   GET /api/versions?num=lte.1.0 // REST in DnDHubs
 *
 * - 'in': Checks if value is within a set.
 *   Classifications: SQL (IN), MongoDB ($in), REST query param (in.), JavaScript (includes).
 *   Identifiers: lowercase: 'in', camelCase: 'inSet', snake_case: 'in_set', ALL_CAP: 'IN', cache key: 'op:in:filterId'.
 *   Model Identifier Format: 'in-{field}-{setValues}'.
 *   Variations and Use Cases: Synonyms: 'within', 'includes'; used in HealthOrb facility filters (e.g., id in [1,2,3] via DHIS2).
 *   @example
 *   SELECT * FROM facilities WHERE id IN (1,2,3); // SQL
 *   GET /api/facilities?id=in.1,2,3 // REST in HealthOrb
 *
 * - 'nin': Checks if value is not within a set.
 *   Classifications: SQL (NOT IN), MongoDB ($nin), REST query param (nin.), JavaScript (!includes).
 *   Identifiers: lowercase: 'nin', camelCase: 'notInSet', snake_case: 'not_in_set', ALL_CAP: 'NIN', cache key: 'op:nin:filterId'.
 *   Model Identifier Format: 'nin-{field}-{setValues}'.
 *   Variations and Use Cases: Synonyms: 'not_within', 'excludes'; implemented in Trakfox exclusion lists (e.g., status nin ['inactive','deleted']).
 *   @example
 *   SELECT * FROM users WHERE status NOT IN ('inactive','deleted'); // SQL
 *   GET /api/users?status=nin.inactive,deleted // REST in Trakfox
 *
 * - 'like': Checks for pattern matching (e.g., wildcard search).
 *   Classifications: SQL (LIKE), MongoDB ($regex), REST query param (like.), JavaScript (RegExp test).
 *   Identifiers: lowercase: 'like', camelCase: 'patternMatch', snake_case: 'pattern_match', ALL_CAP: 'LIKE', cache key: 'op:like:filterId'.
 *   Model Identifier Format: 'like-{field}-{pattern}'.
 *   Variations and Use Cases: Synonyms: 'matches', '~'; used in DnDHubs search (e.g., name like '%user%'), supports wildcards like % or *.
 *   @example
 *   SELECT * FROM products WHERE name LIKE '%widget%'; // SQL
 *   GET /api/products?name=like.%widget% // REST in DnDHubs
 *
 * - 'nlike': Checks for not matching a pattern.
 *   Classifications: SQL (NOT LIKE), MongoDB ($not $regex), REST query param (nlike.), JavaScript (!RegExp test).
 *   Identifiers: lowercase: 'nlike', camelCase: 'notPatternMatch', snake_case: 'not_pattern_match', ALL_CAP: 'NLIKE', cache key: 'op:nlike:filterId'.
 *   Model Identifier Format: 'nlike-{field}-{pattern}'.
 *   Variations and Use Cases: Synonyms: 'not_matches', '!~'; applied in GEOCoLab data cleaning (e.g., label nlike '%error%').
 *   @example
 *   SELECT * FROM data WHERE label NOT LIKE '%error%'; // SQL
 *   GET /api/data?label=nlike.%error% // REST in GEOCoLab
 *
 * - 'between': Checks if value is between two bounds (inclusive).
 *   Classifications: SQL (BETWEEN), MongoDB ($gte and $lte), REST query param (between.), JavaScript (>= && <=).
 *   Identifiers: lowercase: 'between', camelCase: 'inRange', snake_case: 'in_range', ALL_CAP: 'BETWEEN', cache key: 'op:between:filterId'.
 *   Model Identifier Format: 'between-{field}-{min}-{max}'.
 *   Variations and Use Cases: Synonyms: 'range', 'within_range'; used in DataOrb date filters (e.g., timestamp between '2025-01-01' and '2025-12-31').
 *   @example
 *   SELECT * FROM logs WHERE date BETWEEN '2025-01-01' AND '2025-12-31'; // SQL
 *   GET /api/logs?date=between.2025-01-01,2025-12-31 // REST in DataOrb
 *
 * - 'exists': Checks if a field or value exists.
 *   Classifications: SQL (IS NOT NULL), MongoDB ($exists: true), REST query param (exists.), JavaScript (typeof !== 'undefined').
 *   Identifiers: lowercase: 'exists', camelCase: 'exists', snake_case: 'exists', ALL_CAP: 'EXISTS', cache key: 'op:exists:filterId'.
 *   Model Identifier Format: 'exists-{field}'.
 *   Variations and Use Cases: Synonyms: 'is_present', 'not_null'; implemented in HealthOrb record validation (e.g., patient_id exists).
 *   @example
 *   SELECT * FROM patients WHERE patient_id IS NOT NULL; // SQL
 *   GET /api/patients?patient_id=exists.true // REST in HealthOrb
 *
 * - 'nexists': Checks if a field or value does not exist.
 *   Classifications: SQL (IS NULL), MongoDB ($exists: false), REST query param (nexists.), JavaScript (typeof === 'undefined').
 *   Identifiers: lowercase: 'nexists', camelCase: 'notExists', snake_case: 'not_exists', ALL_CAP: 'NEXISTS', cache key: 'op:nexists:filterId'.
 *   Model Identifier Format: 'nexists-{field}'.
 *   Variations and Use Cases: Synonyms: 'is_absent', 'is_null'; used in Trakfox optional fields (e.g., optional_param nexists).
 *   @example
 *   SELECT * FROM configs WHERE optional_param IS NULL; // SQL
 *   GET /api/configs?optional_param=nexists.true // REST in Trakfox
 */
export type ComparisonOperatorTaxonomy = CoreComparisonOperator | CustomComparisonOperator;

/** Operators for equality checks */
export type EqualityOperatorTaxonomy = 'eq' | 'ne';

/** Operators for numeric or ordered comparisons */
export type NumericComparisonOperatorTaxonomy = 'gt' | 'gte' | 'lt' | 'lte';

/** Operators for membership in sets */
export type MembershipOperatorTaxonomy = 'in' | 'nin';

/** Operators for pattern matching */
export type PatternOperatorTaxonomy = 'like' | 'nlike';

/** Operators for range checks */
export type RangeOperatorTaxonomy = 'between';

/** Operators for existence checks */
export type ExistenceOperatorTaxonomy = 'exists' | 'nexists';

export type CoreComparisonOperator = 
  | EqualityOperatorTaxonomy
  | NumericComparisonOperatorTaxonomy
  | MembershipOperatorTaxonomy
  | PatternOperatorTaxonomy
  | RangeOperatorTaxonomy
  | ExistenceOperatorTaxonomy;

export type CustomComparisonOperator = string & { __comparisonoperator?: 'ComparisonOperator' };