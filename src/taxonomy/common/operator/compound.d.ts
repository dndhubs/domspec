/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/operator/compound-operator-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/CompoundOperatorTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20CompoundOperatorTaxonomy
 * Union type representing CompoundOperatorTaxonomy in the DOMSpec ecosystem.
 * Defines standardized compound operators for combining conditions in queries, filters, and logic across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with query language standards (e.g., SQL logical operators, MongoDB logical operators, RESTful query composition) to ensure consistent logical operations in APIs, analytics, and integrations (e.g., Trakfox analytics queries, HealthOrb DHIS2 data filtering by August 11, 2025). Supports validation utilities in @domspecs/core for compound query construction.
 *
 * - 'and': Combines conditions where all must be true.
 *   Classifications: SQL (AND), MongoDB ($and), aligns with REST query composition (and.).
 *   Identifiers: lowercase: 'and', camelCase: 'andOperator', snake_case: 'and_operator', ALL_CAP: 'AND', cache key: 'operator:and:queryId'.
 *   Model Identifier Format: 'and-{queryId}-{timestamp}' (kebab-case for consistent logging in databases like PostgreSQL or Elasticsearch).
 *   Variations and Use Cases: Synonyms: 'conjunction', '&&'; used in Trakfox for user filters (e.g., age > 30 and status = active), HealthOrb for patient queries (e.g., age > 18 and city = Lagos).
 *   @example
 *   GET /api/users?filter=age.gt.30.and.status.eq.active // Query users in Trakfox
 *
 * - 'or': Combines conditions where at least one must be true.
 *   Classifications: SQL (OR), MongoDB ($or), aligns with REST query composition (or.).
 *   Identifiers: lowercase: 'or', camelCase: 'orOperator', snake_case: 'or_operator', ALL_CAP: 'OR', cache key: 'operator:or:queryId'.
 *   Model Identifier Format: 'or-{queryId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'disjunction', '||'; used in DataOrb for flexible filters (e.g., status = active or type = admin), GEOCoLab for data queries ($99 tier, e.g., temp > 25 or humidity < 50).
 *   @example
 *   GET /api/data?filter=status.eq.active.or.type.eq.admin // Query data in DataOrb
 *
 * - 'not': Negates a condition.
 *   Classifications: SQL (NOT), MongoDB ($not), aligns with REST query composition (not.).
 *   Identifiers: lowercase: 'not', camelCase: 'notOperator', snake_case: 'not_operator', ALL_CAP: 'NOT', cache key: 'operator:not:queryId'.
 *   Model Identifier Format: 'not-{queryId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'negation', '!'; used in HealthOrb for excluding conditions (e.g., not status = inactive), DnDHubs for product filters (e.g., not category = sold).
 *   @example
 *   GET /api/patients?filter=not.status.eq.inactive // Query non-inactive patients in HealthOrb
 *
 * - 'nor': Combines conditions where none must be true.
 *   Classifications: MongoDB ($nor), SQL (NOT AND), aligns with REST query composition (nor.).
 *   Identifiers: lowercase: 'nor', camelCase: 'norOperator', snake_case: 'nor_operator', ALL_CAP: 'NOR', cache key: 'operator:nor:queryId'.
 *   Model Identifier Format: 'nor-{queryId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'neither', 'not_or'; used in GEOCoLab for excluding multiple conditions ($2,497 tier, e.g., nor temp > 30, humidity < 40), Trakfox for user exclusion (e.g., nor role = admin, status = deleted).
 *   @example
 *   GET /api/users?filter=nor.role.eq.admin.status.eq.deleted // Query users in Trakfox
 */
export type CompoundOperatorTaxonomy = CoreCompoundOperatorTaxonomy | CustomCompoundOperator;

/** Core compound operators */
export type CoreCompoundOperatorTaxonomy = 'and' | 'or' | 'not' | 'nor';

export type CustomCompoundOperator = string & { __compoundOperator?: 'CompoundOperator' };