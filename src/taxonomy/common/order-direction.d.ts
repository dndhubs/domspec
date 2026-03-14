/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/order/order-direction-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/OrderDirectionTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20OrderDirectionTaxonomy
 * Union type representing OrderDirectionTaxonomy in the DOMSpec ecosystem.
 * Defines standard ordering directions for sorting data in queries, reports, and user interfaces across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with SQL standards (e.g., ANSI SQL ORDER BY), NoSQL sorting (e.g., MongoDB sort), RESTful query parameters, and UI sorting conventions (e.g., ascending/descending toggles). Supports validation utilities in @domspecs/core for consistent sorting in analytics (e.g., Trakfox dashboards), API responses (e.g., HealthOrb DHIS2 queries by August 11, 2025), and data presentation.
 *
 * - 'asc': Sorts data in ascending order (e.g., A-Z, 1-10).
 *   Classifications: SQL (ASC), MongoDB (1), REST query param (sort=asc), JavaScript (Array.sort).
 *   Identifiers: lowercase: 'asc', camelCase: 'ascending', snake_case: 'ascending', ALL_CAP: 'ASC', cache key: 'order:asc:sortId'.
 *   Model Identifier Format: 'asc-{field}-{timestamp}' (kebab-case for query logs in databases like PostgreSQL or Elasticsearch).
 *   Variations and Use Cases: Synonyms: 'ascending', 'up'; used in Trakfox analytics for sorting users by name (e.g., name asc), HealthOrb for ordering patient records by date, or DnDHubs marketplace for product price sorting; validated via utilities like `isAscending(op)` for query safety.
 *   @example
 *   SELECT * FROM users ORDER BY name ASC; // SQL example
 *   GET /api/users?sort=name:asc // REST API in Trakfox
 *
 * - 'desc': Sorts data in descending order (e.g., Z-A, 10-1).
 *   Classifications: SQL (DESC), MongoDB (-1), REST query param (sort=desc), JavaScript (Array.sort reverse).
 *   Identifiers: lowercase: 'desc', camelCase: 'descending', snake_case: 'descending', ALL_CAP: 'DESC', cache key: 'order:desc:sortId'.
 *   Model Identifier Format: 'desc-{field}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'descending', 'down'; applied in DataOrb dashboards for latest data (e.g., timestamp desc), GEOCoLab for climate metrics ($99 tier, e.g., temperature desc).
 *   @example
 *   SELECT * FROM logs ORDER BY timestamp DESC; // SQL
 *   GET /api/logs?sort=timestamp:desc // REST in DataOrb
 *
 * - 'ascending': Alias for ascending order, human-readable.
 *   Classifications: UI-friendly alias for 'asc', aligns with SQL (ASC), REST query param (sort=ascending).
 *   Identifiers: lowercase: 'ascending', camelCase: 'ascending', snake_case: 'ascending', ALL_CAP: 'ASCENDING', cache key: 'order:ascending:sortId'.
 *   Model Identifier Format: 'ascending-{field}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'asc', 'up'; used in Trakfox UI sort toggles, HealthOrb DHIS2 reports for readability (e.g., patient age ascending).
 *   @example
 *   SELECT * FROM patients ORDER BY age ASC; // SQL
 *   GET /api/patients?sort=age:ascending // REST in HealthOrb
 *
 * - 'descending': Alias for descending order, human-readable.
 *   Classifications: UI-friendly alias for 'desc', aligns with SQL (DESC), REST query param (sort=descending).
 *   Identifiers: lowercase: 'descending', camelCase: 'descending', snake_case: 'descending', ALL_CAP: 'DESCENDING', cache key: 'order:descending:sortId'.
 *   Model Identifier Format: 'descending-{field}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'desc', 'down'; implemented in DnDHubs marketplace for sorting products by rating (e.g., rating descending), GEOCoLab for environmental data ($2,497 tier).
 *   @example
 *   SELECT * FROM products ORDER BY rating DESC; // SQL
 *   GET /api/products?sort=rating:descending // REST in DnDHubs
 */
export type OrderDirectionTaxonomy = 'asc' | 'desc' | 'ascending' | 'descending';