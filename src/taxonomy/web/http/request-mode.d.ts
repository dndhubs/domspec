/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/navigation/request-mode-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/RequestMode
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20RequestModeTaxonomy
 * Union type representing RequestModeTaxonomy in the DOMSpec ecosystem.
 * Defines request modes for HTTP requests across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the W3C Fetch specification for the `Request.mode` property, controlling cross-origin behavior and response accessibility.
 * Note: This feature is available in Web Workers, ensuring compatibility in asynchronous environments.
 * Warning: The `no-cors` mode restricts request methods to HEAD, GET, or POST, limits headers to CORS-safelisted ones (excluding Range), and results in an opaque response with inaccessible headers and body (status code 0).
 * Use Case in DNDHUBS DOMSpec Ecosystem: This taxonomy is critical for managing cross-origin requests in Trakfox for secure API calls (e.g., `cors`), HealthOrb DHIS2 for strict same-origin data access (e.g., `same-origin`), and DNDHUBS marketplace for caching embedded resources (e.g., `no-cors` for service worker caching). It supports validation of request modes and ensures proper handling of cross-origin policies.
 * Integration: Request modes are set via the `mode` option in the `Request` constructor or `fetch()` API. The default mode is `cors` for `Request` constructor calls, but `no-cors` is typical for embedded resources (e.g., `<img>`, `<script>`) unless the `crossorigin` attribute is present.
 * @example
 * // Trakfox CORS-enabled API fetch
 * fetch('https://api.example.com/data', { mode: 'cors' });
 * @example
 * // HealthOrb DHIS2 same-origin data fetch
 * fetch('/api/reports', { mode: 'same-origin' });
 *
 * - 'same-origin': Disallows cross-origin requests, enforcing same-origin policy.
 *   Directives: Throws a network error for cross-origin requests; only allows requests to the same origin.
 *   Classifications: Aligns with W3C Fetch specification; ensures strict security for sensitive resources.
 *   Identifiers: lowercase: 'same-origin', camelCase: 'sameOriginMode', snake_case: 'same_origin_mode', ALL_CAP: 'SAME_ORIGIN', cache key: 'mode:same-origin:resourceId'.
 *   Model Identifier Format: 'same-origin-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for secure internal API calls, ensuring data stays within the same origin.
 *   @example
 *   // HealthOrb DHIS2 secure fetch
 *   fetch('/api/patient-data', { mode: 'same-origin' });
 *
 * - 'cors': Enables Cross-Origin Resource Sharing for cross-origin requests.
 *   Directives: Uses CORS mechanism for cross-origin requests, exposing only CORS-safelisted response headers.
 *   Classifications: Aligns with W3C Fetch specification; default mode for `Request` constructor.
 *   Identifiers: lowercase: 'cors', camelCase: 'corsMode', snake_case: 'cors_mode', ALL_CAP: 'CORS', cache key: 'mode:cors:resourceId'.
 *   Model Identifier Format: 'cors-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for cross-origin API calls to external services, such as third-party analytics or payment gateways.
 *   Note: Default mode when using the `Request` constructor.
 *   @example
 *   // Trakfox cross-origin API fetch
 *   fetch('https://api.trakfox.com/data', { mode: 'cors' });
 *
 * - 'navigate': Supports navigation between documents.
 *   Directives: Used exclusively for HTML navigation requests, such as navigating between documents via `<a>` or form submissions.
 *   Classifications: Aligns with W3C Fetch specification; specific to navigation contexts.
 *   Identifiers: lowercase: 'navigate', camelCase: 'navigateMode', snake_case: 'navigate_mode', ALL_CAP: 'NAVIGATE', cache key: 'mode:navigate:resourceId'.
 *   Model Identifier Format: 'navigate-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for page navigation in the Patron Journey Map, ensuring proper handling of document transitions.
 *   @example
 *   // Trakfox page navigation
 *   window.location.href = '/dashboard'; // mode: 'navigate'
 *
 * - 'no-cors': Disables CORS for cross-origin requests, resulting in an opaque response.
 *   Directives: Disables CORS, restricts methods to HEAD, GET, or POST, limits headers to CORS-safelisted ones (excluding Range), and returns an opaque response (status 0, no headers or body access). Suitable for service worker caching.
 *   Classifications: Aligns with W3C Fetch specification; default for embedded resources like `<img>`, `<script>` without `crossorigin`.
 *   Identifiers: lowercase: 'no-cors', camelCase: 'noCorsMode', snake_case: 'no_cors_mode', ALL_CAP: 'NO_CORS', cache key: 'mode:no-cors:resourceId'.
 *   Model Identifier Format: 'no-cors-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for caching static assets (e.g., images, scripts) via service workers, enabling offline support.
 *   Warning: Opaque responses limit JavaScript access to response data; primarily used for caching by service workers.
 *   @example
 *   // DNDHUBS marketplace image fetch for caching
 *   fetch('/assets/logo.png', { mode: 'no-cors' });
 */
export type RequestModeTaxonomy = 'same-origin' | 'cors' | 'navigate' | 'no-cors';