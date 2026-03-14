/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/fetch/request-init-priority-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/RequestInitPriority
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20RequestInitPriorityTaxonomy
 * Union type representing RequestInitPriorityTaxonomy in the DOMSpec ecosystem.
 * Defines priority modes for HTTP fetch requests across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the W3C Fetch specification for the `RequestInit.priority` property, controlling the relative priority of fetch requests.
 * Note: This feature is available in Web Workers, ensuring compatibility in asynchronous environments.
 * Use Case in DNDHUBS DOMSpec Ecosystem: This taxonomy is critical for optimizing resource fetching in Trakfox for critical UI assets (e.g., `high` for images in the Patron Journey Map), HealthOrb DHIS2 for non-critical data (e.g., `low` for background analytics), and DNDHUBS marketplace for balanced resource loading (e.g., `auto` for general API calls). It supports validation of priority modes and enhances performance optimization.
 * Integration: Priority modes are set via the `priority` option in the `Request` constructor or `fetch()` API. The default mode is `auto` if not specified or if an invalid value is provided.
 * @example
 * // Trakfox high-priority image fetch
 * fetch('/assets/hero.png', { priority: 'high' });
 * @example
 * // HealthOrb DHIS2 low-priority analytics fetch
 * fetch('/api/analytics', { priority: 'low' });
 *
 * - 'high': High-priority fetch request relative to others of the same type.
 *   Directives: Prioritizes the request over other requests of the same type, ensuring faster processing.
 *   Classifications: Aligns with W3C Fetch specification; suitable for critical resources.
 *   Identifiers: lowercase: 'high', camelCase: 'highPriority', snake_case: 'high_priority', ALL_CAP: 'HIGH', cache key: 'priority:high:resourceId'.
 *   Model Identifier Format: 'high-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for critical UI assets like hero images or primary scripts to ensure fast loading.
 *   @example
 *   // Trakfox high-priority asset fetch
 *   fetch('/assets/main.js', { priority: 'high' }).then(res => console.log(res.status));
 *
 * - 'low': Low-priority fetch request relative to others of the same type.
 *   Directives: De-prioritizes the request compared to other requests of the same type, suitable for non-critical resources.
 *   Classifications: Aligns with W3C Fetch specification; optimizes bandwidth for non-urgent tasks.
 *   Identifiers: lowercase: 'low', camelCase: 'lowPriority', snake_case: 'low_priority', ALL_CAP: 'LOW', cache key: 'priority:low:resourceId'.
 *   Model Identifier Format: 'low-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for background analytics or non-urgent data fetches to reduce contention with critical requests.
 *   @example
 *   // HealthOrb DHIS2 low-priority analytics fetch
 *   fetch('/api/stats', { priority: 'low' }).then(res => console.log(res.status));
 *
 * - 'auto': Default priority with no user preference.
 *   Directives: No explicit priority preference; browser determines priority based on request type and context.
 *   Classifications: Aligns with W3C Fetch specification; default mode for unspecified or invalid priorities.
 *   Identifiers: lowercase: 'auto', camelCase: 'autoPriority', snake_case: 'auto_priority', ALL_CAP: 'AUTO', cache key: 'priority:auto:resourceId'.
 *   Model Identifier Format: 'auto-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for general-purpose API calls where priority is not critical.
 *   Note: Default mode if no `priority` option is specified or if an invalid value is provided.
 *   @example
 *   // DNDHUBS marketplace general fetch
 *   fetch('/api/products').then(res => console.log(res.status)); // priority: 'auto'
 */
export type RequestInitPriorityTaxonomy = 'high' | 'low' | 'auto';