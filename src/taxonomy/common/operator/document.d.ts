/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/operator/document-operator-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/DocumentOperatorTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20DocumentOperatorTaxonomy
 * Union type representing DocumentOperatorTaxonomy in the DOMSpec ecosystem.
 * Defines standardized document operators for querying, filtering, and manipulating document-based data across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with database query standards (e.g., MongoDB aggregation pipeline, SQL query clauses, RESTful query parameters) to ensure consistent document operations in APIs, analytics, and integrations (e.g., Trakfox content queries, HealthOrb DHIS2 document retrieval by August 11, 2025). Supports validation utilities in @domspecs/core for document query construction.
 *
 * - 'where': Filters documents based on specified conditions.
 *   Classifications: MongoDB ($match), SQL (WHERE), aligns with REST query params (where.).
 *   Identifiers: lowercase: 'where', camelCase: 'whereOperator', snake_case: 'where_operator', ALL_CAP: 'WHERE', cache key: 'operator:where:queryId'.
 *   Model Identifier Format: 'where-{field}-{condition}' (kebab-case for consistent logging in databases like PostgreSQL or Elasticsearch).
 *   Variations and Use Cases: Synonyms: 'filter', 'condition'; used in Trakfox for content filtering (e.g., where status = active), HealthOrb for patient document queries (e.g., where age > 18).
 *   @example
 *   GET /api/content?where=status.eq.active // Filter active content in Trakfox
 *
 * - 'limit': Restricts the number of documents returned.
 *   Classifications: MongoDB ($limit), SQL (LIMIT), aligns with REST query params (limit.).
 *   Identifiers: lowercase: 'limit', camelCase: 'limitOperator', snake_case: 'limit_operator', ALL_CAP: 'LIMIT', cache key: 'operator:limit:queryId'.
 *   Model Identifier Format: 'limit-{count}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'cap', 'restrict'; used in DataOrb for paginated results (e.g., limit 10), GEOCoLab for dataset queries ($99 tier, e.g., limit 100).
 *   @example
 *   GET /api/data?limit=10 // Return 10 documents in DataOrb
 *
 * - 'skip': Skips a specified number of documents in the result set.
 *   Classifications: MongoDB ($skip), SQL (OFFSET), aligns with REST query params (skip.).
 *   Identifiers: lowercase: 'skip', camelCase: 'skipOperator', snake_case: 'skip_operator', ALL_CAP: 'SKIP', cache key: 'operator:skip:queryId'.
 *   Model Identifier Format: 'skip-{count}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'offset', 'bypass'; used in DnDHubs for pagination (e.g., skip 20 for page 3), Trakfox for content scrolling.
 *   @example
 *   GET /api/products?skip=20&limit=10 // Skip 20 products in DnDHubs
 *
 * - 'sort': Orders documents by specified fields.
 *   Classifications: MongoDB ($sort), SQL (ORDER BY), aligns with REST query params (sort.).
 *   Identifiers: lowercase: 'sort', camelCase: 'sortOperator', snake_case: 'sort_operator', ALL_CAP: 'SORT', cache key: 'operator:sort:queryId'.
 *   Model Identifier Format: 'sort-{field}-{direction}'.
 *   Variations and Use Cases: Synonyms: 'order', 'arrange'; used in HealthOrb for sorting patient records (e.g., sort by date desc), GEOCoLab for data sorting ($2,497 tier, e.g., sort by timestamp asc).
 *   @example
 *   GET /api/patients?sort=date.desc // Sort patients by date in HealthOrb
 *
 * - 'project': Selects or transforms fields in returned documents.
 *   Classifications: MongoDB ($project), SQL (SELECT), aligns with REST query params (project.).
 *   Identifiers: lowercase: 'project', camelCase: 'projectOperator', snake_case: 'project_operator', ALL_CAP: 'PROJECT', cache key: 'operator:project:queryId'.
 *   Model Identifier Format: 'project-{fields}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'select', 'transform'; used in Trakfox for selecting user fields (e.g., project name, email), DataOrb for analytics projections.
 *   @example
 *   GET /api/users?project=name,email // Return name and email fields in Trakfox
 */
export type DocumentOperatorTaxonomy = CoreDocumentOperatorTaxonomy | CustomDocumentOperator;

/** Core document operators */
export type CoreDocumentOperatorTaxonomy = 'where' | 'limit' | 'skip' | 'sort' | 'project';

export type CustomDocumentOperator = string & { __documentOperator?: 'DocumentOperator' };