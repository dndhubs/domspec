/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/cache/request-cache-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/RequestCache
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20RequestCacheTaxonomy
 * Union type representing RequestCacheTaxonomy in the DOMSpec ecosystem.
 * Defines cache modes for HTTP requests across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the W3C Fetch specification for the `Request.cache` property, controlling how requests interact with the browser's HTTP cache.
 * Note: This feature is available in Web Workers, ensuring compatibility in asynchronous environments.
 * Use Case in DNDHUBS DOMSpec Ecosystem: This taxonomy is critical for optimizing resource fetching in Trakfox for UI assets (e.g., `force-cache` for images), HealthOrb DHIS2 for data consistency (e.g., `no-cache` for reports), and DNDHUBS marketplace for performance-critical APIs (e.g., `reload` for fresh data). It supports validation of cache modes and efficient resource handling.
 * Integration: Cache modes are set via the `cache` option in the `Request` constructor or `fetch()` API. For `only-if-cached`, the request mode must be `same-origin` to avoid errors.
 * @example
 * // Trakfox image fetch with cache preference
 * fetch('/assets/logo.png', { cache: 'force-cache' });
 * @example
 * // HealthOrb DHIS2 report fetch with conditional cache
 * fetch('/api/reports', { cache: 'no-cache' });
 *
 * - 'default': Default cache mode, balancing cache usage and freshness.
 *   Directives: The browser checks the cache for a match; returns fresh matches, makes conditional requests for stale matches, or fetches and caches new resources if no match exists.
 *   Classifications: Aligns with W3C Fetch specification; default behavior for `Request` constructor.
 *   Identifiers: lowercase: 'default', camelCase: 'defaultCache', snake_case: 'default_cache', ALL_CAP: 'DEFAULT', cache key: 'cache:default:resourceId'.
 *   Model Identifier Format: 'default-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for general-purpose API calls where balanced caching is needed.
 *   @example
 *   // Trakfox default fetch
 *   fetch('/api/data', { cache: 'default' });
 *
 * - 'force-cache': Prioritizes cache usage, even for stale resources.
 *   Directives: Returns any cache match (fresh or stale); fetches and caches new resources if no match exists.
 *   Classifications: Aligns with W3C Fetch specification; optimizes bandwidth for non-critical updates.
 *   Identifiers: lowercase: 'force-cache', camelCase: 'forceCache', snake_case: 'force_cache', ALL_CAP: 'FORCE_CACHE', cache key: 'cache:force-cache:resourceId'.
 *   Model Identifier Format: 'force-cache-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for static assets like images or stylesheets to reduce server load.
 *   @example
 *   // Trakfox static asset fetch
 *   fetch('/assets/styles.css', { cache: 'force-cache' });
 *
 * - 'no-cache': Ensures freshness via conditional requests.
 *   Directives: Checks the cache for a match; makes a conditional request for any match (fresh or stale) to validate with the server; fetches and caches new resources if no match exists.
 *   Classifications: Aligns with W3C Fetch specification; suitable for data requiring validation.
 *   Identifiers: lowercase: 'no-cache', camelCase: 'noCache', snake_case: 'no_cache', ALL_CAP: 'NO_CACHE', cache key: 'cache:no-cache:resourceId'.
 *   Model Identifier Format: 'no-cache-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for reports or analytics requiring up-to-date data.
 *   @example
 *   // HealthOrb DHIS2 report fetch
 *   fetch('/api/reports', { cache: 'no-cache' });
 *
 * - 'no-store': Bypasses cache entirely, fetching fresh resources.
 *   Directives: Fetches resources from the server without checking or updating the cache.
 *   Classifications: Aligns with W3C Fetch specification; ensures maximum freshness.
 *   Identifiers: lowercase: 'no-store', camelCase: 'noStore', snake_case: 'no_store', ALL_CAP: 'NO_STORE', cache key: 'cache:no-store:resourceId'.
 *   Model Identifier Format: 'no-store-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for sensitive API calls requiring real-time data, such as payment transactions.
 *   @example
 *   // Trakfox payment API
 *   fetch('/api/payments', { cache: 'no-store' });
 *
 * - 'only-if-cached': Returns cached resources or fails for same-origin requests.
 *   Directives: Returns any cache match (fresh or stale); returns a 504 Gateway Timeout if no match exists. Only valid for `same-origin` mode requests.
 *   Classifications: Aligns with W3C Fetch specification; experimental feature.
 *   Identifiers: lowercase: 'only-if-cached', camelCase: 'onlyIfCached', snake_case: 'only_if_cached', ALL_CAP: 'ONLY_IF_CACHED', cache key: 'cache:only-if-cached:resourceId'.
 *   Model Identifier Format: 'only-if-cached-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for offline-capable progressive web apps to prioritize cached resources.
 *   Note: Requires `same-origin` mode; cached redirects are followed if `redirect` is set to `follow`.
 *   @example
 *   // Trakfox offline PWA fetch
 *   fetch('/data.json', { cache: 'only-if-cached', mode: 'same-origin' });
 *
 * - 'reload': Fetches fresh resources and updates the cache.
 *   Directives: Fetches resources from the server without checking the cache, then updates the cache with the new resource.
 *   Classifications: Aligns with W3C Fetch specification; ensures fresh data with cache updates.
 *   Identifiers: lowercase: 'reload', camelCase: 'reloadCache', snake_case: 'reload_cache', ALL_CAP: 'RELOAD', cache key: 'cache:reload:resourceId'.
 *   Model Identifier Format: 'reload-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for updating cached product data with fresh server responses.
 *   @example
 *   // DNDHUBS marketplace product fetch
 *   fetch('/api/products', { cache: 'reload' });
 */
export type RequestCacheTaxonomy = 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';