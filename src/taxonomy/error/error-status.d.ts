/**
 * Union type representing ErrorStatusTaxonomy in the DOMSpec ecosystem.
 * Defines HTTP-inspired status codes for errors in @dndhub/error.
 *
 * - '400': Bad Request.
 * Classifications: HTTP/1.1 (RFC 7231).
 * Identifiers: lowercase: '400', camelCase: 'badRequest', snake_case: 'bad_request', ALL_CAP: 'BAD_REQUEST', cache key: 'status:400:errId'.
 * Model Identifier Format: 'status-400-{timestamp}'.
 * Example Usage: Invalid API request in DomsError.ts.
 *
 * - '401': Unauthorized.
 * Identifiers: lowercase: '401', camelCase: 'unauthorized', snake_case: 'unauthorized', ALL_CAP: 'UNAUTHORIZED', cache key: 'status:401:errId'.
 * Model Identifier Format: 'status-401-{timestamp}'.
 * Example Usage: Authentication failures.
 *
 * - '403': Forbidden.
 * Identifiers: lowercase: '403', camelCase: 'forbidden', snake_case: 'forbidden', ALL_CAP: 'FORBIDDEN', cache key: 'status:403:errId'.
 * Model Identifier Format: 'status-403-{timestamp}'.
 * Example Usage: Authorization denials.
 *
 * - '404': Not Found.
 * Identifiers: lowercase: '404', camelCase: 'notFound', snake_case: 'not_found', ALL_CAP: 'NOT_FOUND', cache key: 'status:404:errId'.
 * Model Identifier Format: 'status-404-{timestamp}'.
 * Example Usage: Missing routes in DomsRouteError.tsx.
 *
 * - '405': Method Not Allowed.
 * Identifiers: lowercase: '405', camelCase: 'methodNotAllowed', snake_case: 'method_not_allowed', ALL_CAP: 'METHOD_NOT_ALLOWED', cache key: 'status:405:errId'.
 * Model Identifier Format: 'status-405-{timestamp}'.
 * Example Usage: HTTP method not supported for a resource.
 *
 * - '408': Request Timeout.
 * Identifiers: lowercase: '408', camelCase: 'requestTimeout', snake_case: 'request_timeout', ALL_CAP: 'REQUEST_TIMEOUT', cache key: 'status:408:errId'.
 * Model Identifier Format: 'status-408-{timestamp}'.
 * Example Usage: Server timed out waiting for the request.
 *
 * - '409': Conflict.
 * Identifiers: lowercase: '409', camelCase: 'conflict', snake_case: 'conflict', ALL_CAP: 'CONFLICT', cache key: 'status:409:errId'.
 * Model Identifier Format: 'status-409-{timestamp}'.
 * Example Usage: A resource conflict, e.g., an existing user with the same name.
 *
 * - '413': Payload Too Large.
 * Identifiers: lowercase: '413', camelCase: 'payloadTooLarge', snake_case: 'payload_too_large', ALL_CAP: 'PAYLOAD_TOO_LARGE', cache key: 'status:413:errId'.
 * Model Identifier Format: 'status-413-{timestamp}'.
 * Example Usage: Request body is larger than the server can handle.
 *
 * - '415': Unsupported Media Type.
 * Identifiers: lowercase: '415', camelCase: 'unsupportedMediaType', snake_case: 'unsupported_media_type', ALL_CAP: 'UNSUPPORTED_MEDIA_TYPE', cache key: 'status:415:errId'.
 * Model Identifier Format: 'status-415-{timestamp}'.
 * Example Usage: Invalid Content-Type header.
 *
 * - '422': Unprocessable Entity.
 * Identifiers: lowercase: '422', camelCase: 'unprocessableEntity', snake_case: 'unprocessable_entity', ALL_CAP: 'UNPROCESSABLE_ENTITY', cache key: 'status:422:errId'.
 * Model Identifier Format: 'status-422-{timestamp}'.
 * Example Usage: Semantic errors in the request, e.g., validation failures.
 *
 * - '429': Too Many Requests.
 * Identifiers: lowercase: '429', camelCase: 'tooManyRequests', snake_case: 'too_many_requests', ALL_CAP: 'TOO_MANY_REQUESTS', cache key: 'status:429:errId'.
 * Model Identifier Format: 'status-429-{timestamp}'.
 * Example Usage: Rate limit errors.
 *
 * - '500': Internal Server Error.
 * Identifiers: lowercase: '500', camelCase: 'internalServerError', snake_case: 'internal_server_error', ALL_CAP: 'INTERNAL_SERVER_ERROR', cache key: 'status:500:errId'.
 * Model Identifier Format: 'status-500-{timestamp}'.
 * Example Usage: Server crashes in DomsError.ts.
 *
 * - '501': Not Implemented.
 * Identifiers: lowercase: '501', camelCase: 'notImplemented', snake_case: 'not_implemented', ALL_CAP: 'NOT_IMPLEMENTED', cache key: 'status:501:errId'.
 * Model Identifier Format: 'status-501-{timestamp}'.
 * Example Usage: API endpoint is not yet implemented.
 *
 * - '502': Bad Gateway.
 * Identifiers: lowercase: '502', camelCase: 'badGateway', snake_case: 'bad_gateway', ALL_CAP: 'BAD_GATEWAY', cache key: 'status:502:errId'.
 * Model Identifier Format: 'status-502-{timestamp}'.
 * Example Usage: Server acting as a gateway receives an invalid response from an upstream server.
 *
 * - '503': Service Unavailable.
 * Identifiers: lowercase: '503', camelCase: 'serviceUnavailable', snake_case: 'service_unavailable', ALL_CAP: 'SERVICE_UNAVAILABLE', cache key: 'status:503:errId'.
 * Model Identifier Format: 'status-503-{timestamp}'.
 * Example Usage: Maintenance downtime errors.
 *
 * - '504': Gateway Timeout.
 * Identifiers: lowercase: '504', camelCase: 'gatewayTimeout', snake_case: 'gateway_timeout', ALL_CAP: 'GATEWAY_TIMEOUT', cache key: 'status:504:errId'.
 * Model Identifier Format: 'status-504-{timestamp}'.
 * Example Usage: Gateway timed out waiting for a response from an upstream server.
 */
export type ErrorStatusTaxonomy = CoreErrorStatus | CustomErrorStatus;
export type CoreErrorStatus = 
  | 400 | 401 | 403 | 404 | 405 | 408 | 409 | 413 | 415 | 422 | 429 | 500 | 501 | 502 | 503 | 504;
export type CustomErrorStatus = number & { __httpStatus?: 'CustomErrorStatus' };
