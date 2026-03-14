/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/response/response-status-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ResponseStatus
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ResponseStatusTaxonomy
 * Union type representing ResponseStatusTaxonomy in the DOMSpec ecosystem.
 * Defines HTTP response status codes for HTTP responses across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the W3C Fetch specification and RFC 9110 for the `Response.status` property, indicating the outcome of an HTTP request.
 * Note: This feature is available in Web Workers, ensuring compatibility in asynchronous environments. A status of 0 is returned for `opaque`, `opaqueredirect`, or `error` response types.
 * Warning: Non-standard status codes (not listed in RFC 9110) may be custom to specific server software and should be used cautiously to ensure interoperability.
 * Use Case in DNDHUBS DOMSpec Ecosystem: This taxonomy is critical for handling API responses in Trakfox for success/failure states (e.g., `200` for successful data retrieval, `404` for missing resources), HealthOrb DHIS2 for compliance and error reporting (e.g., `403` for access issues), and DNDHUBS marketplace for redirect handling (e.g., `301` for moved resources). It supports validation of response statuses and consistent error handling.
 * Integration: Status codes are accessed via the `status` property of a `Response` object in the `fetch()` API or `Request` constructor. Custom status codes can be defined for non-standard server responses.
 * @example
 * // Trakfox successful API fetch
 * fetch('/api/data').then(res => console.log(res.status)); // 200
 * @example
 * // HealthOrb DHIS2 error handling
 * fetch('/api/reports').catch(err => console.log(err.status)); // e.g., 403
 *
 * - '100': Continue - Indicates the client should continue the request.
 *   Directives: Interim response indicating the client should continue or ignore if the request is finished.
 *   Classifications: Aligns with RFC 9110; informational response.
 *   Identifiers: lowercase: '100', camelCase: 'continueStatus', snake_case: 'continue_status', ALL_CAP: 'CONTINUE', cache key: 'status:100:resourceId'.
 *   Model Identifier Format: '100-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for long-running API requests requiring continuation signals.
 *   @example
 *   // Trakfox long-running request
 *   fetch('/api/upload', { headers: { Expect: '100-continue' } }).then(res => console.log(res.status)); // 100
 *
 * - '101': Switching Protocols - Indicates the server is switching protocols as requested.
 *   Directives: Sent in response to an `Upgrade` header, indicating the protocol switch.
 *   Classifications: Aligns with RFC 9110; informational response.
 *   Identifiers: lowercase: '101', camelCase: 'switchingProtocolsStatus', snake_case: 'switching_protocols_status', ALL_CAP: 'SWITCHING_PROTOCOLS', cache key: 'status:101:resourceId'.
 *   Model Identifier Format: '101-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for WebSocket upgrades in real-time features.
 *   @example
 *   // Trakfox WebSocket upgrade
 *   fetch('/api/websocket', { headers: { Upgrade: 'websocket' } }).then(res => console.log(res.status)); // 101
 *
 * - '102': Processing - Deprecated WebDAV response for processing indication.
 *   Directives: Indicates a request is being processed (WebDAV); deprecated.
 *   Classifications: Aligns with RFC 9110; informational response.
 *   Identifiers: lowercase: '102', camelCase: 'processingStatus', snake_case: 'processing_status', ALL_CAP: 'PROCESSING', cache key: 'status:102:resourceId'.
 *   Model Identifier Format: '102-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in legacy DNDHUBS systems for backward compatibility with WebDAV.
 *   @example
 *   // Legacy DNDHUBS WebDAV request
 *   fetch('/dav/resource').then(res => console.log(res.status)); // 102
 *
 * - '103': Early Hints - Used with Link header for preloading resources.
 *   Directives: Allows preloading resources or preconnecting origins while the server prepares a response.
 *   Classifications: Aligns with RFC 9110; informational response.
 *   Identifiers: lowercase: '103', camelCase: 'earlyHintsStatus', snake_case: 'early_hints_status', ALL_CAP: 'EARLY_HINTS', cache key: 'status:103:resourceId'.
 *   Model Identifier Format: '103-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for optimizing page load times via preloading.
 *   @example
 *   // Trakfox preload fetch
 *   fetch('/api/page', { headers: { Link: '<style.css>; rel=preload' } }).then(res => console.log(res.status)); // 103
 *
 * - '200': OK - Indicates a successful request.
 *   Directives: Request succeeded; response depends on the HTTP method (e.g., GET returns resource, POST returns result).
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '200', camelCase: 'okStatus', snake_case: 'ok_status', ALL_CAP: 'OK', cache key: 'status:200:resourceId'.
 *   Model Identifier Format: '200-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for successful API data retrieval.
 *   @example
 *   // Trakfox data fetch
 *   fetch('/api/products').then(res => console.log(res.status)); // 200
 *
 * - '201': Created - Indicates a new resource was created.
 *   Directives: Request succeeded, creating a new resource (typically for POST or PUT).
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '201', camelCase: 'createdStatus', snake_case: 'created_status', ALL_CAP: 'CREATED', cache key: 'status:201:resourceId'.
 *   Model Identifier Format: '201-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for creating new product listings.
 *   @example
 *   // DNDHUBS marketplace resource creation
 *   fetch('/api/products', { method: 'POST' }).then(res => console.log(res.status)); // 201
 *
 * - '202': Accepted - Indicates the request was accepted for processing.
 *   Directives: Request received but not yet acted upon; noncommittal for asynchronous processing.
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '202', camelCase: 'acceptedStatus', snake_case: 'accepted_status', ALL_CAP: 'ACCEPTED', cache key: 'status:202:resourceId'.
 *   Model Identifier Format: '202-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for batch processing of data uploads.
 *   @example
 *   // HealthOrb DHIS2 batch processing
 *   fetch('/api/batch', { method: 'POST' }).then(res => console.log(res.status)); // 202
 *
 * - '203': Non-Authoritative Information - Indicates metadata from a non-origin source.
 *   Directives: Metadata is from a local or third-party copy, not the origin server.
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '203', camelCase: 'nonAuthoritativeStatus', snake_case: 'non_authoritative_status', ALL_CAP: 'NON_AUTHORITATIVE', cache key: 'status:203:resourceId'.
 *   Model Identifier Format: '203-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for cached mirror responses.
 *   @example
 *   // Trakfox cached mirror fetch
 *   fetch('/api/mirror').then(res => console.log(res.status)); // 203
 *
 * - '204': No Content - Indicates no content in the response body.
 *   Directives: No content to send, but headers are useful for caching updates.
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '204', camelCase: 'noContentStatus', snake_case: 'no_content_status', ALL_CAP: 'NO_CONTENT', cache key: 'status:204:resourceId'.
 *   Model Identifier Format: '204-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for HEAD requests or cache updates.
 *   @example
 *   // Trakfox HEAD request
 *   fetch('/api/resource', { method: 'HEAD' }).then(res => console.log(res.status)); // 204
 *
 * - '205': Reset Content - Indicates the client should reset the document.
 *   Directives: Instructs the user agent to reset the document that sent the request.
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '205', camelCase: 'resetContentStatus', snake_case: 'reset_content_status', ALL_CAP: 'RESET_CONTENT', cache key: 'status:205:resourceId'.
 *   Model Identifier Format: '205-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for form reset scenarios.
 *   @example
 *   // Trakfox form reset
 *   fetch('/api/reset').then(res => console.log(res.status)); // 205
 *
 * - '206': Partial Content - Indicates a partial resource response.
 *   Directives: Response to a range request, delivering part of the resource.
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '206', camelCase: 'partialContentStatus', snake_case: 'partial_content_status', ALL_CAP: 'PARTIAL_CONTENT', cache key: 'status:206:resourceId'.
 *   Model Identifier Format: '206-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for streaming large media files.
 *   @example
 *   // Trakfox range request
 *   fetch('/api/video', { headers: { Range: 'bytes=0-1023' } }).then(res => console.log(res.status)); // 206
 *
 * - '207': Multi-Status - Conveys multiple resource statuses (WebDAV).
 *   Directives: Provides information about multiple resources in WebDAV contexts.
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '207', camelCase: 'multiStatus', snake_case: 'multi_status', ALL_CAP: 'MULTI_STATUS', cache key: 'status:207:resourceId'.
 *   Model Identifier Format: '207-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS for WebDAV-based resource management.
 *   @example
 *   // DNDHUBS WebDAV multi-status
 *   fetch('/dav/resources').then(res => console.log(res.status)); // 207
 *
 * - '208': Already Reported - Avoids redundant WebDAV reporting.
 *   Directives: Used in WebDAV to avoid enumerating multiple bindings.
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '208', camelCase: 'alreadyReportedStatus', snake_case: 'already_reported_status', ALL_CAP: 'ALREADY_REPORTED', cache key: 'status:208:resourceId'.
 *   Model Identifier Format: '208-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in legacy DNDHUBS systems for WebDAV efficiency.
 *   @example
 *   // DNDHUBS WebDAV reporting
 *   fetch('/dav/propstat').then(res => console.log(res.status)); // 208
 *
 * - '226': IM Used - Indicates instance-manipulation results.
 *   Directives: Response to a GET request with instance-manipulations (HTTP Delta encoding).
 *   Classifications: Aligns with RFC 9110; successful response.
 *   Identifiers: lowercase: '226', camelCase: 'imUsedStatus', snake_case: 'im_used_status', ALL_CAP: 'IM_USED', cache key: 'status:226:resourceId'.
 *   Model Identifier Format: '226-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for advanced resource manipulation scenarios.
 *   @example
 *   // Trakfox delta encoding
 *   fetch('/api/delta').then(res => console.log(res.status)); // 226
 *
 * - '300': Multiple Choices - Indicates multiple response options.
 *   Directives: Indicates multiple possible responses; client should choose one (rarely used).
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '300', camelCase: 'multipleChoicesStatus', snake_case: 'multiple_choices_status', ALL_CAP: 'MULTIPLE_CHOICES', cache key: 'status:300:resourceId'.
 *   Model Identifier Format: '300-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for content negotiation in rare cases.
 *   @example
 *   // Trakfox content negotiation
 *   fetch('/api/options').then(res => console.log(res.status)); // 300
 *
 * - '301': Moved Permanently - Indicates a permanent resource relocation.
 *   Directives: Resource URL has permanently changed; new URL provided in response.
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '301', camelCase: 'movedPermanentlyStatus', snake_case: 'moved_permanently_status', ALL_CAP: 'MOVED_PERMANENTLY', cache key: 'status:301:resourceId'.
 *   Model Identifier Format: '301-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for permanent URL updates.
 *   @example
 *   // DNDHUBS marketplace redirect
 *   fetch('/api/old-product').then(res => console.log(res.status)); // 301
 *
 * - '302': Found - Indicates a temporary resource relocation.
 *   Directives: Resource URL has temporarily changed; client should use same URL in future.
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '302', camelCase: 'foundStatus', snake_case: 'found_status', ALL_CAP: 'FOUND', cache key: 'status:302:resourceId'.
 *   Model Identifier Format: '302-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for temporary redirects in UI flows.
 *   @example
 *   // Trakfox temporary redirect
 *   fetch('/api/temp').then(res => console.log(res.status)); // 302
 *
 * - '303': See Other - Directs client to another URI with GET.
 *   Directives: Directs client to fetch resource at another URI using GET.
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '303', camelCase: 'seeOtherStatus', snake_case: 'see_other_status', ALL_CAP: 'SEE_OTHER', cache key: 'status:303:resourceId'.
 *   Model Identifier Format: '303-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for post-processing redirects.
 *   @example
 *   // Trakfox post-processing redirect
 *   fetch('/api/process', { method: 'POST' }).then(res => console.log(res.status)); // 303
 *
 * - '304': Not Modified - Indicates the resource has not changed.
 *   Directives: Used for caching; client can use cached version.
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '304', camelCase: 'notModifiedStatus', snake_case: 'not_modified_status', ALL_CAP: 'NOT_MODIFIED', cache key: 'status:304:resourceId'.
 *   Model Identifier Format: '304-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for cache validation in API calls.
 *   @example
 *   // Trakfox cache validation
 *   fetch('/api/data', { headers: { 'If-None-Match': 'etag' } }).then(res => console.log(res.status)); // 304
 *
 * - '305': Use Proxy - Deprecated response for proxy access.
 *   Directives: Indicates resource must be accessed via a proxy; deprecated.
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '305', camelCase: 'useProxyStatus', snake_case: 'use_proxy_status', ALL_CAP: 'USE_PROXY', cache key: 'status:305:resourceId'.
 *   Model Identifier Format: '305-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in legacy DNDHUBS systems for backward compatibility.
 *   @example
 *   // Legacy DNDHUBS proxy fetch
 *   fetch('/api/proxy').then(res => console.log(res.status)); // 305
 *
 * - '306': Unused - Reserved, no longer used.
 *   Directives: Reserved response code; previously used in HTTP/1.1.
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '306', camelCase: 'unusedStatus', snake_case: 'unused_status', ALL_CAP: 'UNUSED', cache key: 'status:306:resourceId'.
 *   Model Identifier Format: '306-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in legacy DNDHUBS systems for historical compatibility.
 *   @example
 *   // Legacy DNDHUBS unused status
 *   fetch('/api/legacy').then(res => console.log(res.status)); // 306
 *
 * - '307': Temporary Redirect - Temporary redirect with same method.
 *   Directives: Directs client to another URI with the same method as the original request.
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '307', camelCase: 'temporaryRedirectStatus', snake_case: 'temporary_redirect_status', ALL_CAP: 'TEMPORARY_REDIRECT', cache key: 'status:307:resourceId'.
 *   Model Identifier Format: '307-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for temporary redirects preserving HTTP methods.
 *   @example
 *   // Trakfox temporary redirect
 *   fetch('/api/temp', { method: 'POST' }).then(res => console.log(res.status)); // 307
 *
 * - '308': Permanent Redirect - Permanent redirect with same method.
 *   Directives: Resource permanently relocated to another URI with the same method.
 *   Classifications: Aligns with RFC 9110; redirection response.
 *   Identifiers: lowercase: '308', camelCase: 'permanentRedirectStatus', snake_case: 'permanent_redirect_status', ALL_CAP: 'PERMANENT_REDIRECT', cache key: 'status:308:resourceId'.
 *   Model Identifier Format: '308-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for permanent redirects of API endpoints.
 *   @example
 *   // DNDHUBS marketplace permanent redirect
 *   fetch('/api/old-endpoint', { method: 'POST' }).then(res => console.log(res.status)); // 308
 *
 * - '400': Bad Request - Indicates a client error in the request.
 *   Directives: Server cannot process due to client error (e.g., malformed syntax).
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '400', camelCase: 'badRequestStatus', snake_case: 'bad_request_status', ALL_CAP: 'BAD_REQUEST', cache key: 'status:400:resourceId'.
 *   Model Identifier Format: '400-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for invalid API request handling.
 *   @example
 *   // Trakfox invalid request
 *   fetch('/api/invalid').then(res => console.log(res.status)); // 400
 *
 * - '401': Unauthorized - Indicates authentication is required.
 *   Directives: Client must authenticate to access the resource.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '401', camelCase: 'unauthorizedStatus', snake_case: 'unauthorized_status', ALL_CAP: 'UNAUTHORIZED', cache key: 'status:401:resourceId'.
 *   Model Identifier Format: '401-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for unauthenticated access attempts.
 *   @example
 *   // HealthOrb DHIS2 authentication error
 *   fetch('/api/secure').then(res => console.log(res.status)); // 401
 *
 * - '402': Payment Required - Indicates payment is needed (rarely used).
 *   Directives: Intended for digital payment systems; rarely used.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '402', camelCase: 'paymentRequiredStatus', snake_case: 'payment_required_status', ALL_CAP: 'PAYMENT_REQUIRED', cache key: 'status:402:resourceId'.
 *   Model Identifier Format: '402-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for premium content access.
 *   @example
 *   // DNDHUBS marketplace premium content
 *   fetch('/api/premium').then(res => console.log(res.status)); // 402
 *
 * - '403': Forbidden - Indicates the client lacks access rights.
 *   Directives: Client is known but lacks permission to access the resource.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '403', camelCase: 'forbiddenStatus', snake_case: 'forbidden_status', ALL_CAP: 'FORBIDDEN', cache key: 'status:403:resourceId'.
 *   Model Identifier Format: '403-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for access control violations.
 *   @example
 *   // HealthOrb DHIS2 access error
 *   fetch('/api/restricted').then(res => console.log(res.status)); // 403
 *
 * - '404': Not Found - Indicates the resource cannot be found.
 *   Directives: Server cannot find the requested resource or endpoint.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '404', camelCase: 'notFoundStatus', snake_case: 'not_found_status', ALL_CAP: 'NOT_FOUND', cache key: 'status:404:resourceId'.
 *   Model Identifier Format: '404-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for missing resource errors in APIs.
 *   @example
 *   // Trakfox resource not found
 *   fetch('/api/missing').then(res => console.log(res.status)); // 404
 *
 * - '405': Method Not Allowed - Indicates an unsupported method.
 *   Directives: Request method is known but not supported by the resource.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '405', camelCase: 'methodNotAllowedStatus', snake_case: 'method_not_allowed_status', ALL_CAP: 'METHOD_NOT_ALLOWED', cache key: 'status:405:resourceId'.
 *   Model Identifier Format: '405-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for invalid API method attempts.
 *   @example
 *   // Trakfox invalid method
 *   fetch('/api/data', { method: 'DELETE' }).then(res => console.log(res.status)); // 405
 *
 * - '406': Not Acceptable - Indicates no acceptable content found.
 *   Directives: No content matches the client’s criteria after server-driven negotiation.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '406', camelCase: 'notAcceptableStatus', snake_case: 'not_acceptable_status', ALL_CAP: 'NOT_ACCEPTABLE', cache key: 'status:406:resourceId'.
 *   Model Identifier Format: '406-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for content negotiation failures.
 *   @example
 *   // Trakfox content negotiation
 *   fetch('/api/data', { headers: { Accept: 'application/xml' } }).then(res => console.log(res.status)); // 406
 *
 * - '407': Proxy Authentication Required - Indicates proxy authentication needed.
 *   Directives: Client must authenticate with a proxy to access the resource.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '407', camelCase: 'proxyAuthRequiredStatus', snake_case: 'proxy_auth_required_status', ALL_CAP: 'PROXY_AUTH_REQUIRED', cache key: 'status:407:resourceId'.
 *   Model Identifier Format: '407-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS for proxy-based access control.
 *   @example
 *   // DNDHUBS proxy authentication
 *   fetch('/api/proxy-data').then(res => console.log(res.status)); // 407
 *
 * - '408': Request Timeout - Indicates the server timed out.
 *   Directives: Server closed an idle connection due to timeout.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '408', camelCase: 'requestTimeoutStatus', snake_case: 'request_timeout_status', ALL_CAP: 'REQUEST_TIMEOUT', cache key: 'status:408:resourceId'.
 *   Model Identifier Format: '408-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for handling idle API connections.
 *   @example
 *   // Trakfox timeout
 *   fetch('/api/idle').then(res => console.log(res.status)); // 408
 *
 * - '409': Conflict - Indicates a request conflict with server state.
 *   Directives: Request cannot be processed due to a conflict (e.g., in WebDAV).
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '409', camelCase: 'conflictStatus', snake_case: 'conflict_status', ALL_CAP: 'CONFLICT', cache key: 'status:409:resourceId'.
 *   Model Identifier Format: '409-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS for WebDAV conflict resolution.
 *   @example
 *   // DNDHUBS WebDAV conflict
 *   fetch('/dav/resource', { method: 'PUT' }).then(res => console.log(res.status)); // 409
 *
 * - '410': Gone - Indicates the resource is permanently deleted.
 *   Directives: Resource has been permanently removed with no forwarding address.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '410', camelCase: 'goneStatus', snake_case: 'gone_status', ALL_CAP: 'GONE', cache key: 'status:410:resourceId'.
 *   Model Identifier Format: '410-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for deleted resource notifications.
 *   @example
 *   // Trakfox deleted resource
 *   fetch('/api/deleted').then(res => console.log(res.status)); // 410
 *
 * - '411': Length Required - Indicates missing Content-Length header.
 *   Directives: Server requires a Content-Length header.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '411', camelCase: 'lengthRequiredStatus', snake_case: 'length_required_status', ALL_CAP: 'LENGTH_REQUIRED', cache key: 'status:411:resourceId'.
 *   Model Identifier Format: '411-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for strict API request validation.
 *   @example
 *   // Trakfox missing length
 *   fetch('/api/upload', { method: 'POST' }).then(res => console.log(res.status)); // 411
 *
 * - '412': Precondition Failed - Indicates failed preconditions.
 *   Directives: Server does not meet client-specified preconditions.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '412', camelCase: 'preconditionFailedStatus', snake_case: 'precondition_failed_status', ALL_CAP: 'PRECONDITION_FAILED', cache key: 'status:412:resourceId'.
 *   Model Identifier Format: '412-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for conditional request failures.
 *   @example
 *   // Trakfox conditional request
 *   fetch('/api/data', { headers: { 'If-Match': 'wrong-etag' } }).then(res => console.log(res.status)); // 412
 *
 * - '413': Content Too Large - Indicates request body is too large.
 *   Directives: Request body exceeds server limits.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '413', camelCase: 'contentTooLargeStatus', snake_case: 'content_too_large_status', ALL_CAP: 'CONTENT_TOO_LARGE', cache key: 'status:413:resourceId'.
 *   Model Identifier Format: '413-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for large file upload rejections.
 *   @example
 *   // Trakfox large upload
 *   fetch('/api/upload', { method: 'POST', body: largeData }).then(res => console.log(res.status)); // 413
 *
 * - '414': URI Too Long - Indicates the request URI is too long.
 *   Directives: URI exceeds server’s acceptable length.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '414', camelCase: 'uriTooLongStatus', snake_case: 'uri_too_long_status', ALL_CAP: 'URI_TOO_LONG', cache key: 'status:414:resourceId'.
 *   Model Identifier Format: '414-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for invalid URL handling.
 *   @example
 *   // Trakfox long URI
 *   fetch('/api/very-long-uri').then(res => console.log(res.status)); // 414
 *
 * - '415': Unsupported Media Type - Indicates unsupported request media format.
 *   Directives: Server does not support the request’s media type.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '415', camelCase: 'unsupportedMediaTypeStatus', snake_case: 'unsupported_media_type_status', ALL_CAP: 'UNSUPPORTED_MEDIA_TYPE', cache key: 'status:415:resourceId'.
 *   Model Identifier Format: '415-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for invalid content type errors.
 *   @example
 *   // Trakfox invalid media type
 *   fetch('/api/data', { headers: { 'Content-Type': 'invalid/type' } }).then(res => console.log(res.status)); // 415
 *
 * - '416': Range Not Satisfiable - Indicates invalid range request.
 *   Directives: Requested range cannot be fulfilled.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '416', camelCase: 'rangeNotSatisfiableStatus', snake_case: 'range_not_satisfiable_status', ALL_CAP: 'RANGE_NOT_SATISFIABLE', cache key: 'status:416:resourceId'.
 *   Model Identifier Format: '416-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for invalid range requests in media streaming.
 *   @example
 *   // Trakfox invalid range
 *   fetch('/api/video', { headers: { Range: 'bytes=9999-' } }).then(res => console.log(res.status)); // 416
 *
 * - '417': Expectation Failed - Indicates failed Expect header expectation.
 *   Directives: Server cannot meet the Expect header’s requirements.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '417', camelCase: 'expectationFailedStatus', snake_case: 'expectation_failed_status', ALL_CAP: 'EXPECTATION_FAILED', cache key: 'status:417:resourceId'.
 *   Model Identifier Format: '417-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for failed expectation handling.
 *   @example
 *   // Trakfox failed expectation
 *   fetch('/api/data', { headers: { Expect: 'invalid' } }).then(res => console.log(res.status)); // 417
 *
 * - '418': I'm a Teapot - Indicates a humorous refusal to process.
 *   Directives: Server refuses to process (e.g., brewing coffee with a teapot).
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '418', camelCase: 'imATeapotStatus', snake_case: 'im_a_teapot_status', ALL_CAP: 'IM_A_TEAPOT', cache key: 'status:418:resourceId'.
 *   Model Identifier Format: '418-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for playful error responses in testing.
 *   @example
 *   // Trakfox playful error
 *   fetch('/api/teapot').then(res => console.log(res.status)); // 418
 *
 * - '421': Misdirected Request - Indicates a misconfigured server.
 *   Directives: Request sent to a server unable to produce a response.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '421', camelCase: 'misdirectedRequestStatus', snake_case: 'misdirected_request_status', ALL_CAP: 'MISDIRECTED_REQUEST', cache key: 'status:421:resourceId'.
 *   Model Identifier Format: '421-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for misconfigured endpoint errors.
 *   @example
 *   // Trakfox misdirected request
 *   fetch('/api/misdirected').then(res => console.log(res.status)); // 421
 *
 * - '422': Unprocessable Content - Indicates semantic errors in WebDAV.
 *   Directives: Request is well-formed but has semantic errors (WebDAV).
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '422', camelCase: 'unprocessableContentStatus', snake_case: 'unprocessable_content_status', ALL_CAP: 'UNPROCESSABLE_CONTENT', cache key: 'status:422:resourceId'.
 *   Model Identifier Format: '422-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS for WebDAV semantic error handling.
 *   @example
 *   // DNDHUBS WebDAV semantic error
 *   fetch('/dav/invalid').then(res => console.log(res.status)); // 422
 *
 * - '423': Locked - Indicates a locked resource in WebDAV.
 *   Directives: Resource is locked and cannot be accessed (WebDAV).
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '423', camelCase: 'lockedStatus', snake_case: 'locked_status', ALL_CAP: 'LOCKED', cache key: 'status:423:resourceId'.
 *   Model Identifier Format: '423-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS for WebDAV resource locking.
 *   @example
 *   // DNDHUBS WebDAV locked resource
 *   fetch('/dav/locked').then(res => console.log(res.status)); // 423
 *
 * - '424': Failed Dependency - Indicates a failed WebDAV dependency.
 *   Directives: Request failed due to a previous request’s failure (WebDAV).
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '424', camelCase: 'failedDependencyStatus', snake_case: 'failed_dependency_status', ALL_CAP: 'FAILED_DEPENDENCY', cache key: 'status:424:resourceId'.
 *   Model Identifier Format: '424-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS for WebDAV dependency errors.
 *   @example
 *   // DNDHUBS WebDAV dependency failure
 *   fetch('/dav/dependent').then(res => console.log(res.status)); // 424
 *
 * - '425': Too Early - Experimental response for replay risk.
 *   Directives: Server unwilling to process a request that might be replayed (experimental).
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '425', camelCase: 'tooEarlyStatus', snake_case: 'too_early_status', ALL_CAP: 'TOO_EARLY', cache key: 'status:425:resourceId'.
 *   Model Identifier Format: '425-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for experimental replay protection.
 *   @example
 *   // Trakfox experimental replay
 *   fetch('/api/replay').then(res => console.log(res.status)); // 425
 *
 * - '426': Upgrade Required - Indicates a protocol upgrade is needed.
 *   Directives: Server requires a protocol upgrade to process the request.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '426', camelCase: 'upgradeRequiredStatus', snake_case: 'upgrade_required_status', ALL_CAP: 'UPGRADE_REQUIRED', cache key: 'status:426:resourceId'.
 *   Model Identifier Format: '426-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for protocol upgrade requests.
 *   @example
 *   // Trakfox protocol upgrade
 *   fetch('/api/upgrade').then(res => console.log(res.status)); // 426
 *
 * - '428': Precondition Required - Indicates a conditional request is needed.
 *   Directives: Server requires the request to be conditional to avoid conflicts.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '428', camelCase: 'preconditionRequiredStatus', snake_case: 'precondition_required_status', ALL_CAP: 'PRECONDITION_REQUIRED', cache key: 'status:428:resourceId'.
 *   Model Identifier Format: '428-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for conflict prevention in API updates.
 *   @example
 *   // Trakfox conditional request
 *   fetch('/api/update').then(res => console.log(res.status)); // 428
 *
 * - '429': Too Many Requests - Indicates rate limiting.
 *   Directives: Client has exceeded the allowed request rate.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '429', camelCase: 'tooManyRequestsStatus', snake_case: 'too_many_requests_status', ALL_CAP: 'TOO_MANY_REQUESTS', cache key: 'status:429:resourceId'.
 *   Model Identifier Format: '429-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for API rate limiting.
 *   @example
 *   // Trakfox rate limiting
 *   fetch('/api/rate-limited').then(res => console.log(res.status)); // 429
 *
 * - '431': Request Header Fields Too Large - Indicates oversized headers.
 *   Directives: Request headers exceed server limits.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '431', camelCase: 'requestHeaderFieldsTooLargeStatus', snake_case: 'request_header_fields_too_large_status', ALL_CAP: 'REQUEST_HEADER_FIELDS_TOO_LARGE', cache key: 'status:431:resourceId'.
 *   Model Identifier Format: '431-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for large header rejections.
 *   @example
 *   // Trakfox large headers
 *   fetch('/api/data', { headers: largeHeaders }).then(res => console.log(res.status)); // 431
 *
 * - '451': Unavailable For Legal Reasons - Indicates legal restrictions.
 *   Directives: Resource is unavailable due to legal restrictions.
 *   Classifications: Aligns with RFC 9110; client error response.
 *   Identifiers: lowercase: '451', camelCase: 'unavailableForLegalReasonsStatus', snake_case: 'unavailable_for_legal_reasons_status', ALL_CAP: 'UNAVAILABLE_FOR_LEGAL_REASONS', cache key: 'status:451:resourceId'.
 *   Model Identifier Format: '451-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for restricted data access.
 *   @example
 *   // HealthOrb DHIS2 legal restriction
 *   fetch('/api/restricted-data').then(res => console.log(res.status)); // 451
 *
 * - '500': Internal Server Error - Indicates a generic server error.
 *   Directives: Server encountered an unexpected condition.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '500', camelCase: 'internalServerErrorStatus', snake_case: 'internal_server_error_status', ALL_CAP: 'INTERNAL_SERVER_ERROR', cache key: 'status:500:resourceId'.
 *   Model Identifier Format: '500-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for generic server error handling.
 *   @example
 *   // Trakfox server error
 *   fetch('/api/error').then(res => console.log(res.status)); // 500
 *
 * - '501': Not Implemented - Indicates an unsupported method.
 *   Directives: Server does not support the requested method.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '501', camelCase: 'notImplementedStatus', snake_case: 'not_implemented_status', ALL_CAP: 'NOT_IMPLEMENTED', cache key: 'status:501:resourceId'.
 *   Model Identifier Format: '501-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for unsupported API methods.
 *   @example
 *   // Trakfox unsupported method
 *   fetch('/api/unsupported', { method: 'CUSTOM' }).then(res => console.log(res.status)); // 501
 *
 * - '502': Bad Gateway - Indicates an invalid gateway response.
 *   Directives: Server received an invalid response as a gateway.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '502', camelCase: 'badGatewayStatus', snake_case: 'bad_gateway_status', ALL_CAP: 'BAD_GATEWAY', cache key: 'status:502:resourceId'.
 *   Model Identifier Format: '502-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for gateway errors in API calls.
 *   @example
 *   // Trakfox gateway error
 *   fetch('/api/gateway').then(res => console.log(res.status)); // 502
 *
 * - '503': Service Unavailable - Indicates temporary server unavailability.
 *   Directives: Server is temporarily unavailable, often with a Retry-After header.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '503', camelCase: 'serviceUnavailableStatus', snake_case: 'service_unavailable_status', ALL_CAP: 'SERVICE_UNAVAILABLE', cache key: 'status:503:resourceId'.
 *   Model Identifier Format: '503-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for maintenance or overload scenarios.
 *   @example
 *   // Trakfox maintenance
 *   fetch('/api/maintenance').then(res => console.log(res.status)); // 503
 *
 * - '504': Gateway Timeout - Indicates a gateway timeout.
 *   Directives: Server acting as a gateway did not receive a timely response.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '504', camelCase: 'gatewayTimeoutStatus', snake_case: 'gateway_timeout_status', ALL_CAP: 'GATEWAY_TIMEOUT', cache key: 'status:504:resourceId'.
 *   Model Identifier Format: '504-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for gateway timeout errors.
 *   @example
 *   // Trakfox gateway timeout
 *   fetch('/api/gateway-timeout').then(res => console.log(res.status)); // 504
 *
 * - '505': HTTP Version Not Supported - Indicates unsupported HTTP version.
 *   Directives: Server does not support the HTTP version used.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '505', camelCase: 'httpVersionNotSupportedStatus', snake_case: 'http_version_not_supported_status', ALL_CAP: 'HTTP_VERSION_NOT_SUPPORTED', cache key: 'status:505:resourceId'.
 *   Model Identifier Format: '505-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for protocol version errors.
 *   @example
 *   // Trakfox HTTP version error
 *   fetch('/api/version').then(res => console.log(res.status)); // 505
 *
 * - '506': Variant Also Negotiates - Indicates a negotiation error.
 *   Directives: Chosen variant engages in circular content negotiation.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '506', camelCase: 'variantAlsoNegotiatesStatus', snake_case: 'variant_also_negotiates_status', ALL_CAP: 'VARIANT_ALSO_NEGOTIATES', cache key: 'status:506:resourceId'.
 *   Model Identifier Format: '506-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for content negotiation errors.
 *   @example
 *   // Trakfox negotiation error
 *   fetch('/api/negotiate').then(res => console.log(res.status)); // 506
 *
 * - '507': Insufficient Storage - Indicates insufficient server storage (WebDAV).
 *   Directives: Server cannot store the representation needed (WebDAV).
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '507', camelCase: 'insufficientStorageStatus', snake_case: 'insufficient_storage_status', ALL_CAP: 'INSUFFICIENT_STORAGE', cache key: 'status:507:resourceId'.
 *   Model Identifier Format: '507-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS for WebDAV storage errors.
 *   @example
 *   // DNDHUBS WebDAV storage error
 *   fetch('/dav/store').then(res => console.log(res.status)); // 507
 *
 * - '508': Loop Detected - Indicates an infinite loop in WebDAV.
 *   Directives: Server detected an infinite loop during processing (WebDAV).
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '508', camelCase: 'loopDetectedStatus', snake_case: 'loop_detected_status', ALL_CAP: 'LOOP_DETECTED', cache key: 'status:508:resourceId'.
 *   Model Identifier Format: '508-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS for WebDAV loop detection.
 *   @example
 *   // DNDHUBS WebDAV loop error
 *   fetch('/dav/loop').then(res => console.log(res.status)); // 508
 *
 * - '510': Not Extended - Indicates unsupported HTTP extension.
 *   Directives: Server does not support the requested HTTP extension.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '510', camelCase: 'notExtendedStatus', snake_case: 'not_extended_status', ALL_CAP: 'NOT_EXTENDED', cache key: 'status:510:resourceId'.
 *   Model Identifier Format: '510-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for extension-related errors.
 *   @example
 *   // Trakfox extension error
 *   fetch('/api/extension').then(res => console.log(res.status)); // 510
 *
 * - '511': Network Authentication Required - Indicates network authentication needed.
 *   Directives: Client must authenticate to access the network.
 *   Classifications: Aligns with RFC 9110; server error response.
 *   Identifiers: lowercase: '511', camelCase: 'networkAuthenticationRequiredStatus', snake_case: 'network_authentication_required_status', ALL_CAP: 'NETWORK_AUTHENTICATION_REQUIRED', cache key: 'status:511:resourceId'.
 *   Model Identifier Format: '511-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for network access control.
 *   @example
 *   // Trakfox network authentication
 *   fetch('/api/network').then(res => console.log(res.status)); // 511
 */
export type ResponseStatusTaxonomy = CoreResponseStatus | CustomResponseStatus;
export type CoreResponseStatus = 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
export type CustomResponseStatus = number & { __responseStatus?: 'CustomResponseStatus' };