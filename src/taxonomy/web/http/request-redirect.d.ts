/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/navigation/request-redirect-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/RequestRedirect
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20RequestRedirectTaxonomy
 * Union type representing RequestRedirectTaxonomy in the DOMSpec ecosystem.
 * Defines redirect handling modes for HTTP requests across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the W3C Fetch specification for the `Request.redirect` property, controlling how redirects are processed in fetch requests.
 * Note: This feature is available in Web Workers, ensuring compatibility in asynchronous environments.
 * Use Case in DNDHUBS DOMSpec Ecosystem: This taxonomy is essential for managing navigation flows in Trakfox for UI redirects (e.g., `follow` for seamless navigation), HealthOrb DHIS2 for API reliability (e.g., `error` for strict validation), and DNDHUBS marketplace for manual redirect handling in specific workflows (e.g., `manual` for custom navigation logic). It supports validation of redirect modes and ensures consistent request handling.
 * Integration: Redirect modes are set via the `redirect` option in the `Request` constructor or `fetch()` API. The default mode is `follow` if not specified.
 * @example
 * // Trakfox fetch with automatic redirect following
 * fetch('/api/redirected', { redirect: 'follow' });
 * @example
 * // HealthOrb DHIS2 fetch with strict error handling
 * fetch('/api/data', { redirect: 'error' });
 *
 * - 'error': Rejects the request if a redirect is encountered.
 *   Directives: Throws an error for any redirect response, preventing automatic redirect handling.
 *   Classifications: Aligns with W3C Fetch specification; suitable for strict API validation.
 *   Identifiers: lowercase: 'error', camelCase: 'errorRedirect', snake_case: 'error_redirect', ALL_CAP: 'ERROR', cache key: 'redirect:error:resourceId'.
 *   Model Identifier Format: 'error-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for APIs where redirects indicate configuration errors, ensuring robust error handling.
 *   @example
 *   // HealthOrb DHIS2 strict API fetch
 *   fetch('/api/reports', { redirect: 'error' }).catch(err => console.error('Redirect detected:', err));
 *
 * - 'follow': Automatically follows redirects.
 *   Directives: Automatically follows redirect responses (e.g., 301, 302) up to the browser's limit, delivering the final response to the caller.
 *   Classifications: Aligns with W3C Fetch specification; default behavior for `Request` constructor.
 *   Identifiers: lowercase: 'follow', camelCase: 'followRedirect', snake_case: 'follow_redirect', ALL_CAP: 'FOLLOW', cache key: 'redirect:follow:resourceId'.
 *   Model Identifier Format: 'follow-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for seamless navigation in UI flows, such as redirecting to updated resource URLs.
 *   Note: This is the default mode if no `redirect` option is specified.
 *   @example
 *   // Trakfox UI navigation fetch
 *   fetch('/api/redirected-page', { redirect: 'follow' });
 *
 * - 'manual': Returns an opaque-redirect filtered response for redirects.
 *   Directives: Returns an opaque-redirect response for redirect status codes (e.g., 301, 302), allowing manual handling of the redirect by the application.
 *   Classifications: Aligns with W3C Fetch specification; suitable for custom redirect logic.
 *   Identifiers: lowercase: 'manual', camelCase: 'manualRedirect', snake_case: 'manual_redirect', ALL_CAP: 'MANUAL', cache key: 'redirect:manual:resourceId'.
 *   Model Identifier Format: 'manual-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for custom redirect handling in workflows, such as redirecting to external payment gateways.
 *   @example
 *   // DNDHUBS marketplace manual redirect handling
 *   fetch('/api/payment', { redirect: 'manual' }).then(res => {
 *     if (res.type === 'opaqueredirect') {
 *       // Handle redirect manually
 *       window.location.href = res.headers.get('Location');
 *     }
 *   });
 */
export type RequestRedirectTaxonomy = 'error' | 'follow' | 'manual';