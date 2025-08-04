/**
 * Union type representing HttpMethodTaxonomy in the DOMSpec ecosystem.
 * Defines HTTP methods for error context in @dndhub/error and fluxr system, covering standard HTTP/1.1 (RFC 7231) and WebDAV (RFC 4918, 2518) methods.
 * Used for tracking request-related errors in API calls, form submissions, and WebDAV operations across Trakfox and DndHub ecosystems.
 *
 * - 'GET': Retrieves resources from a server.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'get', camelCase: 'getMethod', snake_case: 'get_method', ALL_CAP: 'GET', cache key: 'method:get:errId'.
 *   Model Identifier Format: 'method-get-{timestamp}'.
 *   Variations and Use Cases: Used for fetching data (e.g., GET /api/v1/resources in Trakfox). Common in read-only operations; errors include 404 Not Found or 429 Rate Limit.
 *   Example Usage: GET request errors in FetchrRequest (DomsError.ts) for failed resource retrievals.
 *
 * - 'POST': Submits data to create or update resources.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'post', camelCase: 'postMethod', snake_case: 'post_method', ALL_CAP: 'POST', cache key: 'method:post:errId'.
 *   Model Identifier Format: 'method-post-{timestamp}'.
 *   Variations and Use Cases: Used in form submissions or API data creation (e.g., POST /api/v1/users in Trakfox forms). Errors include 400 Bad Request for invalid payloads.
 *   Example Usage: POST request errors in DomsClientError.tsx for failed Trakfox form submissions.
 *
 * - 'PUT': Replaces a resource with new data.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'put', camelCase: 'putMethod', snake_case: 'put_method', ALL_CAP: 'PUT', cache key: 'method:put:errId'.
 *   Model Identifier Format: 'method-put-{timestamp}'.
 *   Variations and Use Cases: Used for full resource updates (e.g., PUT /api/v1/users/123). Errors include 403 Forbidden for unauthorized updates.
 *   Example Usage: PUT request errors in DomsError.ts for failed resource updates.
 *
 * - 'DELETE': Removes a resource from the server.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'delete', camelCase: 'deleteMethod', snake_case: 'delete_method', ALL_CAP: 'DELETE', cache key: 'method:delete:errId'.
 *   Model Identifier Format: 'method-delete-{timestamp}'.
 *   Variations and Use Cases: Used for resource deletion (e.g., DELETE /api/v1/users/123). Errors include 404 Not Found for non-existent resources.
 *   Example Usage: DELETE request errors in DomsError.ts for failed deletions.
 *
 * - 'PATCH': Partially updates a resource.
 *   Classifications: HTTP/1.1 (RFC 5789).
 *   Identifiers: lowercase: 'patch', camelCase: 'patchMethod', snake_case: 'patch_method', ALL_CAP: 'PATCH', cache key: 'method:patch:errId'.
 *   Model Identifier Format: 'method-patch-{timestamp}'.
 *   Variations and Use Cases: Used for partial updates (e.g., PATCH /api/v1/users/123). Errors include 422 Unprocessable Entity for invalid patches.
 *   Example Usage: PATCH request errors in DomsClientError.tsx for partial update failures.
 *
 * - 'HEAD': Retrieves resource metadata without body.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'head', camelCase: 'headMethod', snake_case: 'head_method', ALL_CAP: 'HEAD', cache key: 'method:head:errId'.
 *   Model Identifier Format: 'method-head-{timestamp}'.
 *   Variations and Use Cases: Used for checking resource existence (e.g., HEAD /api/v1/resources). Errors include 404 Not Found for missing resources.
 *   Example Usage: HEAD request errors in DomsError.ts for metadata retrieval failures.
 *
 * - 'OPTIONS': Retrieves supported methods for a resource.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'options', camelCase: 'optionsMethod', snake_case: 'options_method', ALL_CAP: 'OPTIONS', cache key: 'method:options:errId'.
 *   Model Identifier Format: 'method-options-{timestamp}'.
 *   Variations and Use Cases: Used for CORS preflight requests (e.g., OPTIONS /api/v1/resources). Errors include 403 Forbidden for unsupported methods.
 *   Example Usage: CORS preflight errors in DomsError.ts.
 *
 * - 'TRACE': Performs a diagnostic loop-back test.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'trace', camelCase: 'traceMethod', snake_case: 'trace_method', ALL_CAP: 'TRACE', cache key: 'method:trace:errId'.
 *   Model Identifier Format: 'method-trace-{timestamp}'.
 *   Variations and Use Cases: Used for debugging network paths; rarely used in production due to security risks (e.g., XSS). Errors include 405 Method Not Allowed.
 *   Example Usage: TRACE request errors in fluxr system for diagnostic logging.
 *
 * - 'CONNECT': Establishes a tunnel to the server.
 *   Classifications: HTTP/1.1 (RFC 7231).
 *   Identifiers: lowercase: 'connect', camelCase: 'connectMethod', snake_case: 'connect_method', ALL_CAP: 'CONNECT', cache key: 'method:connect:errId'.
 *   Model Identifier Format: 'method-connect-{timestamp}'.
 *   Variations and Use Cases: Used for proxy connections (e.g., HTTPS tunneling). Errors include 502 Bad Gateway for failed tunnels.
 *   Example Usage: Proxy connection errors in DomsError.ts for fluxr integrations.
 *
 * - 'COPY': Copies a resource to a new location (WebDAV).
 *   Classifications: WebDAV (RFC 4918).
 *   Identifiers: lowercase: 'copy', camelCase: 'copyMethod', snake_case: 'copy_method', ALL_CAP: 'COPY', cache key: 'method:copy:errId'.
 *   Model Identifier Format: 'method-copy-{timestamp}'.
 *   Variations and Use Cases: Used in WebDAV for file operations (e.g., COPY /files/doc1 to /files/doc2). Errors include 403 Forbidden for access issues.
 *   Example Usage: WebDAV copy errors in fluxr filesystem drivers.
 *
 * - 'LOCK': Locks a resource to prevent modifications (WebDAV).
 *   Classifications: WebDAV (RFC 4918).
 *   Identifiers: lowercase: 'lock', camelCase: 'lockMethod', snake_case: 'lock_method', ALL_CAP: 'LOCK', cache key: 'method:lock:errId'.
 *   Model Identifier Format: 'method-lock-{timestamp}'.
 *   Variations and Use Cases: Used in collaborative editing (e.g., LOCK /files/doc1). Errors include 423 Locked for conflicting locks.
 *   Example Usage: WebDAV lock errors in fluxr document storage.
 *
 * - 'MKCOL': Creates a new collection (directory) in WebDAV.
 *   Classifications: WebDAV (RFC 4918).
 *   Identifiers: lowercase: 'mkcol', camelCase: 'mkcolMethod', snake_case: 'mkcol_method', ALL_CAP: 'MKCOL', cache key: 'method:mkcol:errId'.
 *   Model Identifier Format: 'method-mkcol-{timestamp}'.
 *   Variations and Use Cases: Used to create directories (e.g., MKCOL /files/newfolder). Errors include 405 Method Not Allowed for unsupported resources.
 *   Example Usage: WebDAV directory creation errors in fluxr filesystem drivers.
 *
 * - 'MOVE': Moves a resource to a new location (WebDAV).
 *   Classifications: WebDAV (RFC 4918).
 *   Identifiers: lowercase: 'move', camelCase: 'moveMethod', snake_case: 'move_method', ALL_CAP: 'MOVE', cache key: 'method:move:errId'.
 *   Model Identifier Format: 'method-move-{timestamp}'.
 *   Variations and Use Cases: Used for resource relocation (e.g., MOVE /files/doc1 to /files/doc2). Errors include 403 Forbidden for access issues.
 *   Example Usage: WebDAV move errors in fluxr storage operations.
 *
 * - 'PURGE': Clears cached resources (e.g., CDN cache).
 *   Classifications: HTTP Extensions (e.g., Varnish/Ban).
 *   Identifiers: lowercase: 'purge', camelCase: 'purgeMethod', snake_case: 'purge_method', ALL_CAP: 'PURGE', cache key: 'method:purge:errId'.
 *   Model Identifier Format: 'method-purge-{timestamp}'.
 *   Variations and Use Cases: Used in CDNs like Cloudflare to invalidate cache (e.g., PURGE /api/cache). Errors include 403 Forbidden for unauthorized purges.
 *   Example Usage: CDN cache purge errors in fluxr cache drivers.
 *
 * - 'PROPFIND': Retrieves properties of a resource (WebDAV).
 *   Classifications: WebDAV (RFC 4918).
 *   Identifiers: lowercase: 'propfind', camelCase: 'propfindMethod', snake_case: 'propfind_method', ALL_CAP: 'PROPFIND', cache key: 'method:propfind:errId'.
 *   Model Identifier Format: 'method-propfind-{timestamp}'.
 *   Variations and Use Cases: Used to query resource metadata (e.g., PROPFIND /files/doc1). Errors include 404 Not Found for missing resources.
 *   Example Usage: WebDAV metadata errors in fluxr filesystem drivers.
 *
 * - 'PROPPATCH': Updates resource properties (WebDAV).
 *   Classifications: WebDAV (RFC 4918).
 *   Identifiers: lowercase: 'proppatch', camelCase: 'proppatchMethod', snake_case: 'proppatch_method', ALL_CAP: 'PROPPATCH', cache key: 'method:proppatch:errId'.
 *   Model Identifier Format: 'method-proppatch-{timestamp}'.
 *   Variations and Use Cases: Used to modify resource metadata (e.g., PROPPATCH /files/doc1). Errors include 423 Locked for locked resources.
 *   Example Usage: WebDAV property update errors in fluxr storage.
 *
 * - 'UNLOCK': Removes a lock from a resource (WebDAV).
 *   Classifications: WebDAV (RFC 4918).
 *   Identifiers: lowercase: 'unlock', camelCase: 'unlockMethod', snake_case: 'unlock_method', ALL_CAP: 'UNLOCK', cache key: 'method:unlock:errId'.
 *   Model Identifier Format: 'method-unlock-{timestamp}'.
 *   Variations and Use Cases: Used to release locks (e.g., UNLOCK /files/doc1). Errors include 403 Forbidden for unauthorized unlocks.
 *   Example Usage: WebDAV unlock errors in fluxr document storage.
 *
 * - 'REPORT': Retrieves a report about resources (WebDAV).
 *   Classifications: WebDAV (RFC 3253).
 *   Identifiers: lowercase: 'report', camelCase: 'reportMethod', snake_case: 'report_method', ALL_CAP: 'REPORT', cache key: 'method:report:errId'.
 *   Model Identifier Format: 'method-report-{timestamp}'.
 *   Variations and Use Cases: Used for version control reports (e.g., REPORT /files/repo). Errors include 404 Not Found for invalid resources.
 *   Example Usage: WebDAV report errors in fluxr version control integrations.
 *
 * - 'MKACTIVITY': Creates a new activity in version control (WebDAV).
 *   Classifications: WebDAV Versioning (RFC 3253).
 *   Identifiers: lowercase: 'mkactivity', camelCase: 'mkactivityMethod', snake_case: 'mkactivity_method', ALL_CAP: 'MKACTIVITY', cache key: 'method:mkactivity:errId'.
 *   Model Identifier Format: 'method-mkactivity-{timestamp}'.
 *   Variations and Use Cases: Used in WebDAV version control (e.g., MKACTIVITY /files/repo/activity). Errors include 403 Forbidden for access issues.
 *   Example Usage: WebDAV activity creation errors in fluxr Git drivers.
 *
 * - 'CHECKOUT': Checks out a resource for editing (WebDAV).
 *   Classifications: WebDAV Versioning (RFC 3253).
 *   Identifiers: lowercase: 'checkout', camelCase: 'checkoutMethod', snake_case: 'checkout_method', ALL_CAP: 'CHECKOUT', cache key: 'method:checkout:errId'.
 *   Model Identifier Format: 'method-checkout-{timestamp}'.
 *   Variations and Use Cases: Used in version control for editing (e.g., CHECKOUT /files/repo/file). Errors include 423 Locked for locked resources.
 *   Example Usage: WebDAV checkout errors in fluxr version control.
 *
 * - 'MERGE': Merges changes into a resource (WebDAV).
 *   Classifications: WebDAV Versioning (RFC 3253).
 *   Identifiers: lowercase: 'merge', camelCase: 'mergeMethod', snake_case: 'merge_method', ALL_CAP: 'MERGE', cache key: 'method:merge:errId'.
 *   Model Identifier Format: 'method-merge-{timestamp}'.
 *   Variations and Use Cases: Used in version control for merging (e.g., MERGE /files/repo/branch). Errors include 409 Conflict for merge conflicts.
 *   Example Usage: WebDAV merge errors in fluxr Git integrations.
 *
 * - 'MSEARCH': Performs a multicast search (UPnP).
 *   Classifications: UPnP Device Control Protocol.
 *   Identifiers: lowercase: 'msearch', camelCase: 'msearchMethod', snake_case: 'msearch_method', ALL_CAP: 'MSEARCH', cache key: 'method:msearch:errId'.
 *   Model Identifier Format: 'method-msearch-{timestamp}'.
 *   Variations and Use Cases: Used in device discovery for IoT (e.g., MSEARCH for UPnP devices). Errors include 500 Internal Server Error for discovery failures.
 *   Example Usage: IoT discovery errors in fluxr IOT drivers.
 *
 * - 'NOTIFY': Sends notifications to subscribers (WebDAV/UPnP).
 *   Classifications: WebDAV (RFC 3253), UPnP.
 *   Identifiers: lowercase: 'notify', camelCase: 'notifyMethod', snake_case: 'notify_method', ALL_CAP: 'NOTIFY', cache key: 'method:notify:errId'.
 *   Model Identifier Format: 'method-notify-{timestamp}'.
 *   Variations and Use Cases: Used for event notifications (e.g., NOTIFY /events/subscription). Errors include 404 Not Found for invalid subscribers.
 *   Example Usage: Notification errors in fluxr NotificationDriver.
 *
 * - 'SUBSCRIBE': Subscribes to resource updates (WebDAV/UPnP).
 *   Classifications: WebDAV (RFC 3253), UPnP.
 *   Identifiers: lowercase: 'subscribe', camelCase: 'subscribeMethod', snake_case: 'subscribe_method', ALL_CAP: 'SUBSCRIBE', cache key: 'method:subscribe:errId'.
 *   Model Identifier Format: 'method-subscribe-{timestamp}'.
 *   Variations and Use Cases: Used for event subscriptions (e.g., SUBSCRIBE /events/resource). Errors include 403 Forbidden for unauthorized subscriptions.
 *   Example Usage: Subscription errors in fluxr NotificationDriver.
 *
 * - 'UNSUBSCRIBE': Cancels a subscription (WebDAV/UPnP).
 *   Classifications: WebDAV (RFC 3253), UPnP.
 *   Identifiers: lowercase: 'unsubscribe', camelCase: 'unsubscribeMethod', snake_case: 'unsubscribe_method', ALL_CAP: 'UNSUBSCRIBE', cache key: 'method:unsubscribe:errId'.
 *   Model Identifier Format: 'method-unsubscribe-{timestamp}'.
 *   Variations and Use Cases: Used to cancel subscriptions (e.g., UNSUBSCRIBE /events/resource). Errors include 404 Not Found for invalid subscriptions.
 *   Example Usage: Unsubscribe errors in fluxr NotificationDriver.
 *
 * - 'SEARCH': Searches for resources (WebDAV).
 *   Classifications: WebDAV (RFC 5323).
 *   Identifiers: lowercase: 'search', camelCase: 'searchMethod', snake_case: 'search_method', ALL_CAP: 'SEARCH', cache key: 'method:search:errId'.
 *   Model Identifier Format: 'method-search-{timestamp}'.
 *   Variations and Use Cases: Used for querying resources (e.g., SEARCH /files?q=doc). Errors include 400 Bad Request for invalid queries.
 *   Example Usage: WebDAV search errors in fluxr SearchDriver integrations.
 */
export type HttpMethodTaxonomy = CoreHttpMethod | CustomHttpMethod;
export type CoreHttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'TRACE' | 'CONNECT' | 'COPY' | 'LOCK' | 'MKCOL' | 'MOVE' | 'PURGE' | 'PROPFIND' | 'PROPPATCH' | 'UNLOCK' | 'REPORT' | 'MKACTIVITY' | 'CHECKOUT' | 'MERGE' | 'MSEARCH' | 'NOTIFY' | 'SUBSCRIBE' | 'UNSUBSCRIBE' | 'SEARCH';
export type CustomHttpMethod = string & { __method?: 'CustomHttpMethod' };