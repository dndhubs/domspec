/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/response/response-type-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ResponseType
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ResponseTypeTaxonomy
 * Union type representing ResponseTypeTaxonomy in the DOMSpec ecosystem.
 * Defines response types for HTTP responses across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the W3C Fetch specification for the `Response.type` property, determining whether scripts can access response headers and body.
 * Note: This feature is available in Web Workers, ensuring compatibility in asynchronous environments.
 * Warning: `opaque` and `opaqueredirect` responses have a status of 0, null body, and immutable empty headers, limiting JavaScript access. `error` responses are not returned by `fetch()` but can be created with `Response.error()`.
 * Use Case in DNDHUBS DOMSpec Ecosystem: This taxonomy is critical for handling response types in Trakfox for UI rendering (e.g., `basic` for same-origin assets), HealthOrb DHIS2 for secure cross-origin data (e.g., `cors`), and DNDHUBS marketplace for caching or manual redirect handling (e.g., `opaque` or `opaqueredirect`). It supports validation of response types for consistent API and navigation behavior.
 * Integration: Response types are determined by the request’s origin, mode, and redirect settings in the `fetch()` API or `Request` constructor. For example, `no-cors` mode results in `opaque`, while `manual` redirect mode results in `opaqueredirect`.
 * @example
 * // Trakfox same-origin image fetch
 * fetch('/assets/logo.png').then(res => console.log(res.type)); // 'basic'
 * @example
 * // HealthOrb DHIS2 cross-origin data fetch
 * fetch('https://api.healthorb.org/data', { mode: 'cors' }).then(res => console.log(res.type)); // 'cors'
 *
 * - 'default': Placeholder for unspecified or fallback response types.
 *   Directives: Not explicitly used; serves as a fallback when no specific response type is determined.
 *   Classifications: Aligns with W3C Fetch specification; rarely used directly.
 *   Identifiers: lowercase: 'default', camelCase: 'defaultResponse', snake_case: 'default_response', ALL_CAP: 'DEFAULT', cache key: 'response:default:resourceId'.
 *   Model Identifier Format: 'default-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox as a fallback for generic responses in edge cases.
 *   @example
 *   // Trakfox fallback response handling
 *   fetch('/api/unknown').then(res => console.log(res.type)); // 'default' (if applicable)
 *
 * - 'cors': Response to a successful cross-origin request with CORS.
 *   Directives: Exposes only CORS-safelisted response headers for cross-origin requests processed with CORS.
 *   Classifications: Aligns with W3C Fetch specification; used for cross-origin requests with `cors` mode.
 *   Identifiers: lowercase: 'cors', camelCase: 'corsResponse', snake_case: 'cors_response', ALL_CAP: 'CORS', cache key: 'response:cors:resourceId'.
 *   Model Identifier Format: 'cors-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for secure cross-origin data access, such as fetching analytics from external APIs.
 *   @example
 *   // HealthOrb DHIS2 cross-origin fetch
 *   fetch('https://api.healthorb.org/reports', { mode: 'cors' }).then(res => console.log(res.type)); // 'cors'
 *
 * - 'error': Response indicating a network error.
 *   Directives: Represents a network error with status 0, null body, and empty immutable headers; created via `Response.error()`, not returned by `fetch()`.
 *   Classifications: Aligns with W3C Fetch specification; used for error handling.
 *   Identifiers: lowercase: 'error', camelCase: 'errorResponse', snake_case: 'error_response', ALL_CAP: 'ERROR', cache key: 'response:error:resourceId'.
 *   Model Identifier Format: 'error-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for handling network failures in API calls, ensuring robust error handling.
 *   Warning: Not returned by `fetch()`; typically created manually for testing or error simulation.
 *   @example
 *   // Trakfox error response simulation
 *   const errorResponse = Response.error();
 *   console.log(errorResponse.type); // 'error'
 *
 * - 'basic': Response to same-origin or specific scheme requests.
 *   Directives: Exposes all response headers except `Set-Cookie` for same-origin requests, `data:` URLs, or requests with `navigate` or `websocket` mode.
 *   Classifications: Aligns with W3C Fetch specification; standard for same-origin responses.
 *   Identifiers: lowercase: 'basic', camelCase: 'basicResponse', snake_case: 'basic_response', ALL_CAP: 'BASIC', cache key: 'response:basic:resourceId'.
 *   Model Identifier Format: 'basic-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for same-origin asset fetching, such as images or scripts in UI rendering.
 *   @example
 *   // Trakfox same-origin image fetch
 *   fetch('/assets/logo.png').then(res => console.log(res.type)); // 'basic'
 *
 * - 'opaque': Response to a cross-origin request with `no-cors` mode.
 *   Directives: Returns an opaque response with status 0, null body, and empty immutable headers for cross-origin requests with `no-cors` mode.
 *   Classifications: Aligns with W3C Fetch specification; used for service worker caching.
 *   Identifiers: lowercase: 'opaque', camelCase: 'opaqueResponse', snake_case: 'opaque_response', ALL_CAP: 'OPAQUE', cache key: 'response:opaque:resourceId'.
 *   Model Identifier Format: 'opaque-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for caching static assets (e.g., images, scripts) via service workers for offline support.
 *   Warning: Headers and body are inaccessible to JavaScript; primarily used for caching.
 *   @example
 *   // DNDHUBS marketplace no-cors fetch
 *   fetch('https://cdn.example.com/script.js', { mode: 'no-cors' }).then(res => console.log(res.type)); // 'opaque'
 *
 * - 'opaqueredirect': Response to a redirected request with `manual` redirect mode.
 *   Directives: Returns an opaque-redirect response with status 0, null body, and empty immutable headers for requests with `manual` redirect mode that encounter a redirect.
 *   Classifications: Aligns with W3C Fetch specification; used for manual redirect handling.
 *   Identifiers: lowercase: 'opaqueredirect', camelCase: 'opaqueRedirectResponse', snake_case: 'opaque_redirect_response', ALL_CAP: 'OPAQUEREDIRECT', cache key: 'response:opaqueredirect:resourceId'.
 *   Model Identifier Format: 'opaqueredirect-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for custom redirect handling, such as redirecting to external payment gateways.
 *   Warning: Headers and body are inaccessible; used for manual redirect processing.
 *   @example
 *   // DNDHUBS marketplace manual redirect fetch
 *   fetch('/api/payment', { redirect: 'manual' }).then(res => console.log(res.type)); // 'opaqueredirect'
 */
export type ResponseTypeTaxonomy = 'default' | 'cors' | 'error' | 'basic' | 'opaque' | 'opaqueredirect';