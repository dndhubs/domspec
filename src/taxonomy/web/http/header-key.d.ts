/**
 * Union type representing HeaderKeyTaxonomy in the DOMSpec ecosystem.
 * Defines common HTTP header keys for error context in @dndhub/error headers prop.
 * Supports standardization of headers like 'Content-Type' for FetchrRequest analysis.
 *
 * - 'Content-Type': Specifies the media type of the resource.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'content-type', camelCase: 'contentType', snake_case: 'content_type', ALL_CAP: 'CONTENT_TYPE', cache key: 'header:content-type:errId'.
 *   Model Identifier Format: 'header-content-type-{timestamp}'.
 *   Variations and Use Cases: Used to indicate MIME types (e.g., 'application/json'); errors in mismatched types.
 *   Example Usage: Content-Type errors in FetchrRequest parsing via DomsError.ts.
 *
 * - 'Authorization': Carries credentials for authentication.
 *   Classifications: HTTP/1.1 (RFC 7235).
 *   Identifiers: lowercase: 'authorization', camelCase: 'authorization', snake_case: 'authorization', ALL_CAP: 'AUTHORIZATION', cache key: 'header:authorization:errId'.
 *   Model Identifier Format: 'header-authorization-{timestamp}'.
 *   Variations and Use Cases: Used for Bearer/JWT tokens; errors in invalid auth headers.
 *   Example Usage: Auth header errors in securityAnalyzer for DndCoLab.
 *
 * - 'Accept': Specifies acceptable media types for response.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'accept', camelCase: 'accept', snake_case: 'accept', ALL_CAP: 'ACCEPT', cache key: 'header:accept:errId'.
 *   Model Identifier Format: 'header-accept-{timestamp}'.
 *   Variations and Use Cases: Used in content negotiation; errors in unsupported types.
 *   Example Usage: Accept header mismatches in API requests.
 *
 * - 'User-Agent': Identifies the client software.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'user-agent', camelCase: 'userAgent', snake_case: 'user_agent', ALL_CAP: 'USER_AGENT', cache key: 'header:user-agent:errId'.
 *   Model Identifier Format: 'header-user-agent-{timestamp}'.
 *   Variations and Use Cases: Used for device/browser detection; errors in spoofed agents.
 *   Example Usage: User-Agent errors in deviceFingerprint analysis.
 *
 * - 'Origin': Indicates the origin of the request.
 *   Classifications: CORS (RFC 6454).
 *   Identifiers: lowercase: 'origin', camelCase: 'origin', snake_case: 'origin', ALL_CAP: 'ORIGIN', cache key: 'header:origin:errId'.
 *   Model Identifier Format: 'header-origin-{timestamp}'.
 *   Variations and Use Cases: Used in CORS checks; errors in cross-origin requests.
 *   Example Usage: Origin header errors in CORS preflights.
 *
 * - 'Referer': Indicates the previous URL.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'referer', camelCase: 'referer', snake_case: 'referer', ALL_CAP: 'REFERER', cache key: 'header:referer:errId'.
 *   Model Identifier Format: 'header-referer-{timestamp}'.
 *   Variations and Use Cases: Used for tracking referrals; errors in referral policies.
 *   Example Usage: Referer header issues in navigation errors.
 *
 * - 'X-Forwarded-For': Identifies originating IP in proxies.
 *   Classifications: Proxy standards.
 *   Identifiers: lowercase: 'x-forwarded-for', camelCase: 'xForwardedFor', snake_case: 'x_forwarded_for', ALL_CAP: 'X_FORWARDED_FOR', cache key: 'header:x-forwarded-for:errId'.
 *   Model Identifier Format: 'header-x-forwarded-for-{timestamp}'.
 *   Variations and Use Cases: Used in load balancers; errors in IP spoofing.
 *   Example Usage: Proxy IP errors in ipAddress context.
 *
 * - 'Cache-Control': Controls caching mechanisms.
 *   Classifications: HTTP/1.1 (RFC 7234).
 *   Identifiers: lowercase: 'cache-control', camelCase: 'cacheControl', snake_case: 'cache_control', ALL_CAP: 'CACHE_CONTROL', cache key: 'header:cache-control:errId'.
 *   Model Identifier Format: 'header-cache-control-{timestamp}'.
 *   Variations and Use Cases: Used for no-cache directives; errors in stale data.
 *   Example Usage: Cache header errors in fluxr caching.
 *
 * - 'If-Modified-Since': Conditional request for modified resources.
 *   Classifications: HTTP/1.1 (RFC 7232).
 *   Identifiers: lowercase: 'if-modified-since', camelCase: 'ifModifiedSince', snake_case: 'if_modified_since', ALL_CAP: 'IF_MODIFIED_SINCE', cache key: 'header:if-modified-since:errId'.
 *   Model Identifier Format: 'header-if-modified-since-{timestamp}'.
 *   Variations and Use Cases: Used for conditional GET; errors in 304 Not Modified.
 *   Example Usage: Conditional request errors in API calls.
 *
 * - 'Accept-Language': Preferred languages for response.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'accept-language', camelCase: 'acceptLanguage', snake_case: 'accept_language', ALL_CAP: 'ACCEPT_LANGUAGE', cache key: 'header:accept-language:errId'.
 *   Model Identifier Format: 'header-accept-language-{timestamp}'.
 *   Variations and Use Cases: Used for localization; errors in unsupported languages.
 *   Example Usage: Language header errors in internationalized apps.
 */
export type HeaderKeyTaxonomy = CoreHeaderKey | CustomHeaderKey;
export type CoreHeaderKey = 'Content-Type' | 'Authorization' | 'Accept' | 'User-Agent' | 'Origin' | 'Referer' | 'X-Forwarded-For' | 'Cache-Control' | 'If-Modified-Since' | 'Accept-Language';
export type CustomHeaderKey = string & { __headerKey?: 'CustomHeaderKey' };