/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/security/referrer-policy-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ReferrerPolicy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ReferrerPolicyTaxonomy
 * Union type representing ReferrerPolicyTaxonomy in the DOMSpec ecosystem.
 * Defines referrer policies used to control how much referrer information (sent via the Referer header) is included in requests across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the HTTP Referrer-Policy header as defined in the W3C Fetch specification and supports extensibility via CustomReferrerPolicy for platform-specific policies.
 * Note: The header name "Referer" is a misspelling of "referrer"; this taxonomy uses the correct spelling for consistency.
 * Integration: Policies can be set via HTTP headers, HTML `<meta>` tags, or element-specific attributes (e.g., `referrerpolicy` on `<a>`, `<img>`). For CSS resources, external stylesheets use the default policy (`strict-origin-when-cross-origin`) unless overridden by a Referrer-Policy header, while `<style>` elements use the document's policy.
 * @example
 * // Setting policy via HTTP header in a Trakfox API response
 * Referrer-Policy: strict-origin-when-cross-origin
 * @example
 * // Setting policy for the entire document in HTML
 * <meta name="referrer" content="origin" />
 * @example
 * // Setting policy for a specific link in Trakfox UI
 * <a href="https://example.com" referrerpolicy="no-referrer">Link</a>
 * @example
 * // Fallback policy for broader browser support
 * Referrer-Policy: no-referrer, strict-origin-when-cross-origin
 *
 * - '': Empty string represents no referrer policy, falling back to the default (`strict-origin-when-cross-origin`).
 *   Directives: No explicit directive; browser applies the default policy.
 *   Classifications: Aligns with W3C Fetch specification (November 2020 revision).
 *   Identifiers: lowercase: '', camelCase: 'emptyPolicy', snake_case: 'empty_policy', ALL_CAP: 'EMPTY', cache key: 'policy:empty:resourceId'.
 *   Model Identifier Format: 'empty-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used when no policy is explicitly set; common in legacy systems or minimal configurations.
 *   @example
 *   // Implicitly uses default policy in Trakfox
 *   <meta name="referrer" content="" />
 *
 * - 'no-referrer': Omits the Referer header entirely; no referrer information is sent.
 *   Directives: The Referer header is omitted for all requests.
 *   Classifications: Aligns with W3C Fetch specification; suitable for high-privacy scenarios.
 *   Identifiers: lowercase: 'no-referrer', camelCase: 'noReferrer', snake_case: 'no_referrer', ALL_CAP: 'NO_REFERRER', cache key: 'policy:no-referrer:resourceId'.
 *   Model Identifier Format: 'no-referrer-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for sensitive data endpoints (e.g., user profile APIs) to prevent leakage of referrer information.
 *   @example
 *   // API request in Trakfox for sensitive data
 *   Referrer-Policy: no-referrer
 *
 * - 'no-referrer-when-downgrade': Sends referrer information only when protocol security stays the same or improves (e.g., HTTPS→HTTPS, HTTP→HTTPS).
 *   Directives: Sends origin, path, and query string for same or more secure protocols; omits Referer header for less secure destinations (e.g., HTTPS→HTTP).
 *   Classifications: Aligns with W3C Fetch specification; previously the default policy before November 2020.
 *   Identifiers: lowercase: 'no-referrer-when-downgrade', camelCase: 'noReferrerWhenDowngrade', snake_case: 'no_referrer_when_downgrade', ALL_CAP: 'NO_REFERRER_WHEN_DOWNGRADE', cache key: 'policy:no-referrer-when-downgrade:resourceId'.
 *   Model Identifier Format: 'no-referrer-when-downgrade-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 integrations for secure data sharing across trusted domains.
 *   @example
 *   // HealthOrb DHIS2 API request
 *   Referrer-Policy: no-referrer-when-downgrade
 *
 * - 'origin': Sends only the origin in the Referer header for all requests.
 *   Directives: Only the origin (e.g., https://example.com/) is sent, regardless of destination.
 *   Classifications: Aligns with W3C Fetch specification; balances privacy and analytics.
 *   Identifiers: lowercase: 'origin', camelCase: 'originPolicy', snake_case: 'origin_policy', ALL_CAP: 'ORIGIN', cache key: 'policy:origin:resourceId'.
 *   Model Identifier Format: 'origin-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Common in Trakfox analytics for tracking user navigation without exposing full URLs.
 *   @example
 *   // Trakfox analytics dashboard
 *   <meta name="referrer" content="origin" />
 *
 * - 'origin-when-cross-origin': Sends full referrer for same-origin requests; only origin for cross-origin or less secure requests.
 *   Directives: Sends origin, path, and query string for same-origin requests at the same protocol level; sends only origin for cross-origin or less secure destinations.
 *   Classifications: Aligns with W3C Fetch specification; suitable for mixed-origin environments.
 *   Identifiers: lowercase: 'origin-when-cross-origin', camelCase: 'originWhenCrossOrigin', snake_case: 'origin_when_cross_origin', ALL_CAP: 'ORIGIN_WHEN_CROSS_ORIGIN', cache key: 'policy:origin-when-cross-origin:resourceId'.
 *   Model Identifier Format: 'origin-when-cross-origin-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for secure cross-origin API calls.
 *   @example
 *   // DNDHUBS marketplace API
 *   Referrer-Policy: origin-when-cross-origin
 *
 * - 'same-origin': Sends full referrer for same-origin requests; omits Referer header for cross-origin requests.
 *   Directives: Sends origin, path, and query string for same-origin requests; omits Referer header for cross-origin requests.
 *   Classifications: Aligns with W3C Fetch specification; enhances security for internal resources.
 *   Identifiers: lowercase: 'same-origin', camelCase: 'sameOrigin', snake_case: 'same_origin', ALL_CAP: 'SAME_ORIGIN', cache key: 'policy:same-origin:resourceId'.
 *   Model Identifier Format: 'same-origin-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for internal UI navigation to protect sensitive paths.
 *   @example
 *   // Trakfox internal link
 *   <a href="/dashboard" referrerpolicy="same-origin">Dashboard</a>
 *
 * - 'strict-origin': Sends only the origin for same-protocol requests (HTTPS→HTTPS); omits Referer header for less secure destinations.
 *   Directives: Sends origin for HTTPS→HTTPS requests; omits Referer header for HTTPS→HTTP or HTTP requests.
 *   Classifications: Aligns with W3C Fetch specification; prioritizes security for HTTPS environments.
 *   Identifiers: lowercase: 'strict-origin', camelCase: 'strictOrigin', snake_case: 'strict_origin', ALL_CAP: 'STRICT_ORIGIN', cache key: 'policy:strict-origin:resourceId'.
 *   Model Identifier Format: 'strict-origin-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for secure data transfers.
 *   @example
 *   // HealthOrb DHIS2 secure endpoint
 *   Referrer-Policy: strict-origin
 *
 * - 'strict-origin-when-cross-origin': Sends full referrer for same-origin requests; only origin for cross-origin HTTPS requests; omits Referer for less secure destinations.
 *   Directives: Sends origin, path, and query string for same-origin requests; sends only origin for cross-origin HTTPS→HTTPS requests; omits Referer for HTTPS→HTTP.
 *   Classifications: Aligns with W3C Fetch specification; default policy since November 2020.
 *   Identifiers: lowercase: 'strict-origin-when-cross-origin', camelCase: 'strictOriginWhenCrossOrigin', snake_case: 'strict_origin_when_cross_origin', ALL_CAP: 'STRICT_ORIGIN_WHEN_CROSS_ORIGIN', cache key: 'policy:strict-origin-when-cross-origin:resourceId'.
 *   Model Identifier Format: 'strict-origin-when-cross-origin-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Default policy in Trakfox for balanced security and functionality.
 *   Note: This is the default policy if no policy is specified or if an invalid value is provided.
 *   @example
 *   // Default policy in Trakfox
 *   Referrer-Policy: strict-origin-when-cross-origin
 *
 * - 'unsafe-url': Sends full referrer (origin, path, query string) for all requests, regardless of security.
 *   Directives: Sends origin, path, and query string for all requests, including HTTPS→HTTP.
 *   Classifications: Aligns with W3C Fetch specification; least secure option.
 *   Identifiers: lowercase: 'unsafe-url', camelCase: 'unsafeUrl', snake_case: 'unsafe_url', ALL_CAP: 'UNSAFE_URL', cache key: 'policy:unsafe-url:resourceId'.
 *   Model Identifier Format: 'unsafe-url-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in legacy DNDHUBS systems for backward compatibility; avoided in secure contexts.
 *   Warning: This policy may leak potentially private information from HTTPS URLs to insecure origins.
 *   @example
 *   // Legacy DNDHUBS system
 *   Referrer-Policy: unsafe-url
 */
export type ReferrerPolicyTaxonomy =  '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';