/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/security/request-credentials-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/RequestCredentials
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20RequestCredentialsTaxonomy
 * Union type representing RequestCredentialsTaxonomy in the DOMSpec ecosystem.
 * Defines credential handling policies for HTTP requests across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the W3C Fetch specification for the `Request.credentials` property, controlling whether credentials (cookies, TLS client certificates, or authentication headers) are sent with requests or respected in responses.
 * Note: This feature is available in Web Workers, ensuring compatibility in asynchronous environments.
 * Warning: Including credentials in cross-origin requests can expose systems to CSRF attacks; servers must include `Access-Control-Allow-Credentials` and a specific `Access-Control-Allow-Origin` (not `*`) in responses for cross-origin requests with `include`.
 * Integration: Policies are set via the `credentials` option in the `Request` constructor. For cross-origin requests with `include`, servers must respond with appropriate CORS headers (`Access-Control-Allow-Credentials` and `Access-Control-Allow-Origin`) to avoid network errors.
 * @example
 * // Creating a request with credentials in Trakfox
 * const request = new Request('/api/data', { credentials: 'include' });
 * @example
 * // Server response for cross-origin request in HealthOrb DHIS2
 * Access-Control-Allow-Credentials: true
 * Access-Control-Allow-Origin: https://example.com
 *
 * - 'include': Always includes credentials (cookies, TLS client certificates, authentication headers) in requests, even for cross-origin requests.
 *   Directives: Sends credentials with all requests and respects `Set-Cookie` headers in responses, subject to CORS restrictions (e.g., `Access-Control-Allow-Credentials` and specific `Access-Control-Allow-Origin` required for cross-origin).
 *   Classifications: Aligns with W3C Fetch specification; suitable for authenticated cross-origin APIs.
 *   Identifiers: lowercase: 'include', camelCase: 'includeCredentials', snake_case: 'include_credentials', ALL_CAP: 'INCLUDE', cache key: 'credentials:include:resourceId'.
 *   Model Identifier Format: 'include-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for authenticated API calls requiring session cookies or TLS certificates across domains; requires server-side CORS configuration.
 *   Warning: Can expose systems to CSRF attacks if not paired with proper server-side CORS headers.
 *   @example
 *   // Trakfox cross-origin authenticated request
 *   fetch('https://api.example.com/data', { credentials: 'include' });
 *
 * - 'omit': Never sends credentials in requests or respects `Set-Cookie` headers in responses.
 *   Directives: Omits credentials (cookies, TLS client certificates, authentication headers) from requests and ignores `Set-Cookie` headers in responses.
 *   Classifications: Aligns with W3C Fetch specification; ideal for high-privacy or public API endpoints.
 *   Identifiers: lowercase: 'omit', camelCase: 'omitCredentials', snake_case: 'omit_credentials', ALL_CAP: 'OMIT', cache key: 'credentials:omit:resourceId'.
 *   Model Identifier Format: 'omit-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for public data endpoints where no user-specific credentials are needed.
 *   @example
 *   // HealthOrb DHIS2 public data request
 *   fetch('https://api.healthorb.org/public-data', { credentials: 'omit' });
 *
 * - 'same-origin': Sends and respects credentials only for same-origin requests; omits for cross-origin.
 *   Directives: Includes credentials for same-origin requests and respects `Set-Cookie` headers for same-origin responses; omits credentials for cross-origin requests.
 *   Classifications: Aligns with W3C Fetch specification; default behavior for `Request` constructor.
 *   Identifiers: lowercase: 'same-origin', camelCase: 'sameOriginCredentials', snake_case: 'same_origin_credentials', ALL_CAP: 'SAME_ORIGIN', cache key: 'credentials:same-origin:resourceId'.
 *   Model Identifier Format: 'same-origin-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Default policy in Trakfox for internal API calls within the same domain, balancing security and functionality.
 *   Note: This is the default policy if no `credentials` option is specified in the `Request` constructor.
 *   @example
 *   // Trakfox internal API request
 *   const request = new Request('/api/user', { credentials: 'same-origin' });
 */
export type RequestCredentialsTaxonomy = 'include' | 'omit' | 'same-origin';