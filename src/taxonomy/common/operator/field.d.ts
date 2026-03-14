/**
 * Union type representing FieldOperatorTaxonomy in the DOMSpec ecosystem.
 * Defines standardized field operators for querying and filtering data across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with database query standards (e.g., MongoDB query operators, SQL comparison operators) to ensure consistent data retrieval in APIs, analytics, and integrations (e.g., HealthOrb DHIS2 data queries by August 11, 2025). Supports validation utilities in @domspecs/core for operator-based query building.
 *
 * - 'eq': Equality operator, checks if field equals value.
 *   Classifications: MongoDB ($eq), SQL (=), aligns with REST query params (eq.).
 *   Identifiers: lowercase: 'eq', camelCase: 'equalsOperator', snake_case: 'equals_operator', ALL_CAP: 'EQ', cache key: 'op:eq:fieldId'.
 *   Model Identifier Format: 'eq-{field}-{value}' (kebab-case for query strings in APIs like PostgreSQL or Elasticsearch).
 *   Variations and Use Cases: Synonyms: 'equals', '=='; used in Trakfox for user filters (e.g., status eq active), HealthOrb for patient queries (e.g., age eq 30).
 *   @example
 *   SELECT * FROM users WHERE age = 30; // SQL example in Trakfox analytics
 *
 * - 'ne': Inequality operator, checks if field does not equal value.
 *   Classifications: MongoDB ($ne), SQL (<>), aligns with REST query params (ne.).
 *   Identifiers: lowercase: 'ne', camelCase: 'notEqualsOperator', snake_case: 'not_equals_operator', ALL_CAP: 'NE', cache key: 'op:ne:fieldId'.
 *   Model Identifier Format: 'ne-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'not_equals', '!='; used in DataOrb for excluding data (e.g., status ne inactive), GEOCoLab for temperature filters (ne 0, $99 tier).
 *   @example
 *   SELECT * FROM logs WHERE status <> 'inactive'; // SQL example in DataOrb dashboards
 *
 * - 'gt': Greater than operator, checks if field > value.
 *   Classifications: MongoDB ($gt), SQL (>), aligns with REST query params (gt.).
 *   Identifiers: lowercase: 'gt', camelCase: 'greaterThanOperator', snake_case: 'greater_than_operator', ALL_CAP: 'GT', cache key: 'op:gt:fieldId'.
 *   Model Identifier Format: 'gt-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'greater_than', '>'; used in Trakfox loyalty for points gt 1000, HealthOrb for visits gt 5.
 *   @example
 *   SELECT * FROM rewards WHERE points > 1000; // SQL example in Trakfox loyalty program
 *
 * - 'gte': Greater than or equal operator, checks if field >= value.
 *   Classifications: MongoDB ($gte), SQL (>=), aligns with REST query params (gte.).
 *   Identifiers: lowercase: 'gte', camelCase: 'greaterThanOrEqualsOperator', snake_case: 'greater_than_or_equals_operator', ALL_CAP: 'GTE', cache key: 'op:gte:fieldId'.
 *   Model Identifier Format: 'gte-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'greater_than_or_equals', '>='; used in GEOCoLab for timestamp gte 2025-08-11 ($2,497 tier), DnDHubs for version checks.
 *   @example
 *   SELECT * FROM data WHERE timestamp >= '2025-08-11'; // SQL example in GEOCoLab workflows
 *
 * - 'lt': Less than operator, checks if field < value.
 *   Classifications: MongoDB ($lt), SQL (<), aligns with REST query params (lt.).
 *   Identifiers: lowercase: 'lt', camelCase: 'lessThanOperator', snake_case: 'less_than_operator', ALL_CAP: 'LT', cache key: 'op:lt:fieldId'.
 *   Model Identifier Format: 'lt-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'less_than', '<'; used in DataOrb for response_time lt 200ms, Trakfox for age filters.
 *   @example
 *   SELECT * FROM logs WHERE response_time < 200; // SQL example in DataOrb analytics
 *
 * - 'lte': Less than or equal operator, checks if field <= value.
 *   Classifications: MongoDB ($lte), SQL (<=), aligns with REST query params (lte.).
 *   Identifiers: lowercase: 'lte', camelCase: 'lessThanOrEqualsOperator', snake_case: 'less_than_or_equals_operator', ALL_CAP: 'LTE', cache key: 'op:lte:fieldId'.
 *   Model Identifier Format: 'lte-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'less_than_or_equals', '<='; used in DnDHubs for version lte 1.0, HealthOrb for dosage lte 100mg.
 *   @example
 *   SELECT * FROM medications WHERE dosage <= 100; // SQL example in HealthOrb
 *
 * - 'in': Inclusion operator, checks if field is in array of values.
 *   Classifications: MongoDB ($in), SQL (IN), aligns with REST query params (in.).
 *   Identifiers: lowercase: 'in', camelCase: 'inOperator', snake_case: 'in_operator', ALL_CAP: 'IN', cache key: 'op:in:fieldId'.
 *   Model Identifier Format: 'in-{field}-{values}'.
 *   Variations and Use Cases: Synonyms: 'includes', 'one_of'; used in Trakfox for status in ['active', 'pending'], GEOCoLab for ids in [1,2,3] ($99 tier).
 *   @example
 *   SELECT * FROM users WHERE status IN ('active', 'pending'); // SQL example in Trakfox
 *
 * - 'nin': Exclusion operator, checks if field is not in array of values.
 *   Classifications: MongoDB ($nin), SQL (NOT IN), aligns with REST query params (nin.).
 *   Identifiers: lowercase: 'nin', camelCase: 'notInOperator', snake_case: 'not_in_operator', ALL_CAP: 'NIN', cache key: 'op:nin:fieldId'.
 *   Model Identifier Format: 'nin-{field}-{values}'.
 *   Variations and Use Cases: Synonyms: 'excludes', 'not_one_of'; used in DataOrb for status nin ['inactive', 'deleted'], HealthOrb for patient ids nin [excluded list].
 *   @example
 *   SELECT * FROM patients WHERE id NOT IN (1, 2, 3); // SQL example in DataOrb
 *
 * - 'exists': Existence operator, checks if field exists.
 *   Classifications: MongoDB ($exists), SQL (IS NOT NULL), aligns with REST query params (exists.).
 *   Identifiers: lowercase: 'exists', camelCase: 'existsOperator', snake_case: 'exists_operator', ALL_CAP: 'EXISTS', cache key: 'op:exists:fieldId'.
 *   Model Identifier Format: 'exists-{field}'.
 *   Variations and Use Cases: Synonyms: 'not_null', 'present'; used in Trakfox for optional fields existence, DnDHubs for data validation.
 *   @example
 *   SELECT * FROM records WHERE field IS NOT NULL; // SQL example in Trakfox
 *
 * - 'regex': Regular expression operator, checks if field matches pattern.
 *   Classifications: MongoDB ($regex), SQL (LIKE/REGEXP), aligns with REST query params (regex.).
 *   Identifiers: lowercase: 'regex', camelCase: 'regexOperator', snake_case: 'regex_operator', ALL_CAP: 'REGEX', cache key: 'op:regex:fieldId'.
 *   Model Identifier Format: 'regex-{field}-{pattern}'.
 *   Variations and Use Cases: Synonyms: 'match', 'pattern'; used in HealthOrb for name regex searches, GEOCoLab for data pattern matching ($2,497 tier).
 *   @example
 *   SELECT * FROM names WHERE name REGEXP '^A'; // SQL example in HealthOrb
 *
 * - 'size': Size operator, checks length of array or string.
 *   Classifications: MongoDB ($size), SQL (LENGTH/COUNT), aligns with REST query params (size.).
 *   Identifiers: lowercase: 'size', camelCase: 'sizeOperator', snake_case: 'size_operator', ALL_CAP: 'SIZE', cache key: 'op:size:fieldId'.
 *   Model Identifier Format: 'size-{field}-{value}'.
 *   Variations and Use Cases: Synonyms: 'length', 'count'; used in Trakfox for array size checks, DataOrb for string length filters.
 *   @example
 *   SELECT * FROM arrays WHERE JSON_LENGTH(field) = 5; // SQL example in Trakfox
 *
 * - 'all': All elements operator, checks if array contains all values.
 *   Classifications: MongoDB ($all), SQL (ARRAY containment), aligns with REST query params (all.).
 *   Identifiers: lowercase: 'all', camelCase: 'allOperator', snake_case: 'all_operator', ALL_CAP: 'ALL', cache key: 'op:all:fieldId'.
 *   Model Identifier Format: 'all-{field}-{values}'.
 *   Variations and Use Cases: Synonyms: 'contains_all', 'subset'; used in DnDHubs for tag all ['tech', 'sale'], HealthOrb for symptom all lists.
 *   @example
 *   SELECT * FROM tags WHERE tags @> ARRAY['tech', 'sale']; // SQL example in DnDHubs
 *
 * - 'elemmatch': Element match operator, checks if array element matches criteria.
 *   Classifications: MongoDB ($elemMatch), SQL (JSON/ARRAY subquery), aligns with REST query params (elemmatch.).
 *   Identifiers: lowercase: 'elemmatch', camelCase: 'elemMatchOperator', snake_case: 'elem_match_operator', ALL_CAP: 'ELEMMATCH', cache key: 'op:elemmatch:fieldId'.
 *   Model Identifier Format: 'elemmatch-{field}-{criteria}'.
 *   Variations and Use Cases: Synonyms: 'element_match', 'array_match'; used in GEOCoLab for complex array queries ($99 tier), Trakfox for user preference matching.
 *   @example
 *   SELECT * FROM users WHERE preferences @> '[{"key": "theme", "value": "dark"}]'; // SQL example in Trakfox
 *
 * - 'mod': Modulo operator, checks if field mod divisor equals remainder.
 *   Classifications: MongoDB ($mod), SQL (MOD), aligns with REST query params (mod.).
 *   Identifiers: lowercase: 'mod', camelCase: 'modOperator', snake_case: 'mod_operator', ALL_CAP: 'MOD', cache key: 'op:mod:fieldId'.
 *   Model Identifier Format: 'mod-{field}-{divisor}-{remainder}'.
 *   Variations and Use Cases: Synonyms: 'modulo', '%'; used in DataOrb for numeric mod filters, DnDHubs for ID mod checks.
 *   @example
 *   SELECT * FROM ids WHERE id % 2 = 0; // SQL example in DataOrb
 *
 * - 'type': Type operator, checks field data type.
 *   Classifications: MongoDB ($type), SQL (TYPEOF/CAST), aligns with REST query params (type.).
 *   Identifiers: lowercase: 'type', camelCase: 'typeOperator', snake_case: 'type_operator', ALL_CAP: 'TYPE', cache key: 'op:type:fieldId'.
 *   Model Identifier Format: 'type-{field}-{datatype}'.
 *   Variations and Use Cases: Synonyms: 'datatype', 'instanceof'; used in Trakfox for field type validation, HealthOrb for data type checks in DHIS2.
 *   @example
 *   SELECT * FROM fields WHERE typeof(value) = 'integer'; // SQL example in Trakfox
 */
export type FieldOperatorTaxonomy = CoreFieldOperatorTaxonomy | CustomFieldOperator;

/** Core field operators */
export type CoreFieldOperatorTaxonomy = 
  | 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'exists' | 'regex' | 'size' | 'all' | 'elemmatch' | 'mod' | 'type';

export type CustomFieldOperator = string & { __fieldOperator?: 'FieldOperator' };