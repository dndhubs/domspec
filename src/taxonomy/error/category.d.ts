/**
 * Union type representing ErrorCategoryTaxonomy in the DOMSpec ecosystem.
 * Categorizes errors for better filtering and reporting in @dndhub/error.
 *
 * - 'unknown': Unclassified errors.
 *   Identifiers: lowercase: 'unknown', camelCase: 'unknownCategory', snake_case: 'unknown_category', ALL_CAP: 'UNKNOWN', cache key: 'category:unknown:errId'.
 *   Model Identifier Format: 'unknown-error-{timestamp}'.
 *   Example Usage: Default category in DomsError.ts.
 * 
 * - 'event-emitter': Event emitter processing errors.
 *   Identifiers: lowercase: 'event-emitter', camelCase: 'eventEmitterError', snake_case: 'event_emitter_error', ALL_CAP: 'EVENT_EMITTER', cache key: 'category:event-emitter:errId'.
 *   Model Identifier Format: 'event-emitter-error-{timestamp}'.
 *   Example Usage: Event emitter failures in fluxr event handling.
 *
 * - 'middleware': Middleware processing errors.
 *   Identifiers: lowercase: 'middleware', camelCase: 'middlewareError', snake_case: 'middleware_error', ALL_CAP: 'MIDDLEWARE', cache key: 'category:middleware:errId'.
 *   Model Identifier Format: 'middleware-error-{timestamp}'.
 *   Example Usage: Fluxr middleware failures.
 *
 * - 'routing': Routing-related errors.
 *   Identifiers: lowercase: 'routing', camelCase: 'routingError', snake_case: 'routing_error', ALL_CAP: 'ROUTING', cache key: 'category:routing:errId'.
 *   Model Identifier Format: 'routing-error-{timestamp}'.
 *   Example Usage: DomsRouteError.tsx handling route mismatches.
 *
 * - 'api': API request/response errors.
 *   Identifiers: lowercase: 'api', camelCase: 'apiError', snake_case: 'api_error', ALL_CAP: 'API', cache key: 'category:api:errId'.
 *   Model Identifier Format: 'api-error-{timestamp}'.
 *   Example Usage: FetchrRequest failures in DomsError.ts.
 *
 * - 'initialization': System or component initialization errors.
 *   Identifiers: lowercase: 'initialization', camelCase: 'initError', snake_case: 'init_error', ALL_CAP: 'INITIALIZATION', cache key: 'category:initialization:errId'.
 *   Model Identifier Format: 'init-error-{timestamp}'.
 *   Example Usage: React component mount failures.
 *
 * - 'form': Form validation or submission errors.
 *   Identifiers: lowercase: 'form', camelCase: 'formError', snake_case: 'form_error', ALL_CAP: 'FORM', cache key: 'category:form:errId'.
 *   Model Identifier Format: 'form-error-{timestamp}'.
 *   Example Usage: Trakfox form submission failures.
 *
 * - 'access': Access control errors.
 *   Identifiers: lowercase: 'access', camelCase: 'accessError', snake_case: 'access_error', ALL_CAP: 'ACCESS', cache key: 'category:access:errId'.
 *   Model Identifier Format: 'access-error-{timestamp}'.
 *   Example Usage: Unauthorized access attempts.
 *
 * - 'navigation': Navigation-related errors.
 *   Identifiers: lowercase: 'navigation', camelCase: 'navError', snake_case: 'nav_error', ALL_CAP: 'NAVIGATION', cache key: 'category:navigation:errId'.
 *   Model Identifier Format: 'nav-error-{timestamp}'.
 *   Example Usage: Broken links in DomsRouteError.tsx.
 *
 * - 'verification': Verification process errors.
 *   Identifiers: lowercase: 'verification', camelCase: 'verifyError', snake_case: 'verify_error', ALL_CAP: 'VERIFICATION', cache key: 'category:verification:errId'.
 *   Model Identifier Format: 'verify-error-{timestamp}'.
 *   Example Usage: Email verification failures.
 *
 * - 'aborted': Aborted operations.
 *   Identifiers: lowercase: 'aborted', camelCase: 'abortedError', snake_case: 'aborted_error', ALL_CAP: 'ABORTED', cache key: 'category:aborted:errId'.
 *   Model Identifier Format: 'aborted-error-{timestamp}'.
 *   Example Usage: Cancelled API requests.
 *
 * - 'validation': Data validation errors.
 *   Identifiers: lowercase: 'validation', camelCase: 'validationError', snake_case: 'validation_error', ALL_CAP: 'VALIDATION', cache key: 'category:validation:errId'.
 *   Model Identifier Format: 'validation-error-{timestamp}'.
 *   Example Usage: Form input validation failures.
 *
 * - 'authentication': Authentication process errors.
 *   Identifiers: lowercase: 'authentication', camelCase: 'authError', snake_case: 'auth_error', ALL_CAP: 'AUTHENTICATION', cache key: 'category:authentication:errId'.
 *   Model Identifier Format: 'auth-error-{timestamp}'.
 *   Example Usage: Invalid JWT tokens in DndCoLab.
 *
 * - 'authorization': Authorization process errors.
 *   Identifiers: lowercase: 'authorization', camelCase: 'authzError', snake_case: 'authz_error', ALL_CAP: 'AUTHORIZATION', cache key: 'category:authorization:errId'.
 *   Model Identifier Format: 'authz-error-{timestamp}'.
 *   Example Usage: Role-based access denials.
 *
 * - 'internal': Internal system errors.
 *   Identifiers: lowercase: 'internal', camelCase: 'internalError', snake_case: 'internal_error', ALL_CAP: 'INTERNAL', cache key: 'category:internal:errId'.
 *   Model Identifier Format: 'internal-error-{timestamp}'.
 *   Example Usage: Unexpected server errors.
 *
 * - 'configuration': System configuration errors.
 *   Identifiers: lowercase: 'configuration', camelCase: 'configError', snake_case: 'config_error', ALL_CAP: 'CONFIGURATION', cache key: 'category:configuration:errId'.
 *   Model Identifier Format: 'config-error-{timestamp}'.
 *   Example Usage: Missing environment variables.
 *
 * - 'performance': Performance-related issues.
 *   Identifiers: lowercase: 'performance', camelCase: 'perfError', snake_case: 'perf_error', ALL_CAP: 'PERFORMANCE', cache key: 'category:performance:errId'.
 *   Model Identifier Format: 'perf-error-{timestamp}'.
 *   Example Usage: Slow API response times.
 *
 * - 'security': Security-related issues.
 *   Identifiers: lowercase: 'security', camelCase: 'securityError', snake_case: 'security_error', ALL_CAP: 'SECURITY', cache key: 'category:security:errId'.
 *   Model Identifier Format: 'security-error-{timestamp}'.
 *   Example Usage: XSS attempts detected by securityAnalyzer.
 *
 * - 'integration': Third-party integration errors.
 *   Identifiers: lowercase: 'integration', camelCase: 'integrationError', snake_case: 'integration_error', ALL_CAP: 'INTEGRATION', cache key: 'category:integration:errId'.
 *   Model Identifier Format: 'integration-error-{timestamp}'.
 *   Example Usage: HealthOrb DHIS2 API failures.
 *
 * - 'unexpected': Unforeseen errors.
 *   Identifiers: lowercase: 'unexpected', camelCase: 'unexpectedError', snake_case: 'unexpected_error', ALL_CAP: 'UNEXPECTED', cache key: 'category:unexpected:errId'.
 *   Model Identifier Format: 'unexpected-error-{timestamp}'.
 *   Example Usage: Fallback for unhandled exceptions.
 *
 * - 'rate limit': Rate-limiting errors.
 *   Identifiers: lowercase: 'rate_limit', camelCase: 'rateLimitError', snake_case: 'rate_limit_error', ALL_CAP: 'RATE_LIMIT', cache key: 'category:rate_limit:errId'.
 *   Model Identifier Format: 'rate-limit-error-{timestamp}'.
 *   Example Usage: API rate limit exceeded.
 *
 * - 'network': Network connectivity issues.
 *   Identifiers: lowercase: 'network', camelCase: 'networkError', snake_case: 'network_error', ALL_CAP: 'NETWORK', cache key: 'category:network:errId'.
 *   Model Identifier Format: 'network-error-{timestamp}'.
 *   Example Usage: DNS resolution failures.
 *
 * - 'dependency': Third-party dependency errors.
 *   Identifiers: lowercase: 'dependency', camelCase: 'dependencyError', snake_case: 'dependency_error', ALL_CAP: 'DEPENDENCY', cache key: 'category:dependency:errId'.
 *   Model Identifier Format: 'dependency-error-{timestamp}'.
 *   Example Usage: Tailwind CSS version conflicts.
 *
 * - 'protocol': Protocol adherence issues.
 *   Identifiers: lowercase: 'protocol', camelCase: 'protocolError', snake_case: 'protocol_error', ALL_CAP: 'PROTOCOL', cache key: 'category:protocol:errId'.
 *   Model Identifier Format: 'protocol-error-{timestamp}'.
 *   Example Usage: HTTP/2 stream errors.
 *
 * - 'resource': Resource usage errors.
 *   Identifiers: lowercase: 'resource', camelCase: 'resourceError', snake_case: 'resource_error', ALL_CAP: 'RESOURCE', cache key: 'category:resource:errId'.
 *   Model Identifier Format: 'resource-error-{timestamp}'.
 *   Example Usage: Memory leaks in client.
 *
 * - 'concurrency': Concurrency-related errors.
 *   Identifiers: lowercase: 'concurrency', camelCase: 'concurrencyError', snake_case: 'concurrency_error', ALL_CAP: 'CONCURRENCY', cache key: 'category:concurrency:errId'.
 *   Model Identifier Format: 'concurrency-error-{timestamp}'.
 *   Example Usage: Race conditions in state updates.
 *
 * - 'user action': Errors from user actions.
 *   Identifiers: lowercase: 'user_action', camelCase: 'userActionError', snake_case: 'user_action_error', ALL_CAP: 'USER_ACTION', cache key: 'category:user_action:errId'.
 *   Model Identifier Format: 'user-action-error-{timestamp}'.
 *   Example Usage: Invalid form inputs.
 *
 * - 'system': OS or hardware errors.
 *   Identifiers: lowercase: 'system', camelCase: 'systemError', snake_case: 'system_error', ALL_CAP: 'SYSTEM', cache key: 'category:system:errId'.
 *   Model Identifier Format: 'system-error-{timestamp}'.
 *   Example Usage: Disk space issues.
 *
 * - 'config': Runtime configuration errors.
 *   Identifiers: lowercase: 'config', camelCase: 'configError', snake_case: 'config_error', ALL_CAP: 'CONFIG', cache key: 'category:config:errId'.
 *   Model Identifier Format: 'config-error-{timestamp}'.
 *   Example Usage: Invalid Vercel KV configs.
 *
 * - 'storage': Storage-related errors.
 *   Identifiers: lowercase: 'storage', camelCase: 'storageError', snake_case: 'storage_error', ALL_CAP: 'STORAGE', cache key: 'category:storage:errId'.
 *   Model Identifier Format: 'storage-error-{timestamp}'.
 *   Example Usage: Session storage corruption.
 *
 * - 'test': Simulated test errors.
 *   Identifiers: lowercase: 'test', camelCase: 'testError', snake_case: 'test_error', ALL_CAP: 'TEST', cache key: 'category:test:errId'.
 *   Model Identifier Format: 'test-error-{timestamp}'.
 *   Example Usage: Mock errors in unit tests.
 *
 * - 'auth': Combined auth errors.
 *   Identifiers: lowercase: 'auth', camelCase: 'authError', snake_case: 'auth_error', ALL_CAP: 'AUTH', cache key: 'category:auth:errId'.
 *   Model Identifier Format: 'auth-error-{timestamp}'.
 *   Example Usage: OAuth token failures.
 *
 * - 'cache': Caching mechanism errors.
 *   Identifiers: lowercase: 'cache', camelCase: 'cacheError', snake_case: 'cache_error', ALL_CAP: 'CACHE', cache key: 'category:cache:errId'.
 *   Model Identifier Format: 'cache-error-{timestamp}'.
 *   Example Usage: Redis cache misses.
 *
 * - 'crypto': Cryptographic operation errors.
 *   Identifiers: lowercase: 'crypto', camelCase: 'cryptoError', snake_case: 'crypto_error', ALL_CAP: 'CRYPTO', cache key: 'category:crypto:errId'.
 *   Model Identifier Format: 'crypto-error-{timestamp}'.
 *   Example Usage: Encryption key mismatches.
 *
 * - 'redirect': Redirect-related errors.
 *   Identifiers: lowercase: 'redirect', camelCase: 'redirectError', snake_case: 'redirect_error', ALL_CAP: 'REDIRECT', cache key: 'category:redirect:errId'.
 *   Model Identifier Format: 'redirect-error-{timestamp}'.
 *   Example Usage: Invalid redirect URLs.
 *
 * - 'transaction': Transaction processing errors.
 *   Identifiers: lowercase: 'transaction', camelCase: 'transactionError', snake_case: 'transaction_error', ALL_CAP: 'TRANSACTION', cache key: 'category:transaction:errId'.
 *   Model Identifier Format: 'transaction-error-{timestamp}'.
 *   Example Usage: Payment gateway failures.
 *
 * - 'database': Database operation errors.
 *   Identifiers: lowercase: 'database', camelCase: 'databaseError', snake_case: 'database_error', ALL_CAP: 'DATABASE', cache key: 'category:database:errId'.
 *   Model Identifier Format: 'database-error-{timestamp}'.
 *   Example Usage: Supabase query failures.
 *
 * - 'cookie': Cookie-related errors.
 *   Identifiers: lowercase: 'cookie', camelCase: 'cookieError', snake_case: 'cookie_error', ALL_CAP: 'COOKIE', cache key: 'category:cookie:errId'.
 *   Model Identifier Format: 'cookie-error-{timestamp}'.
 *   Example Usage: Invalid cookie formats.
 *
 * - 'request': HTTP request errors.
 *   Identifiers: lowercase: 'request', camelCase: 'requestError', snake_case: 'request_error', ALL_CAP: 'REQUEST', cache key: 'category:request:errId'.
 *   Model Identifier Format: 'request-error-{timestamp}'.
 *   Example Usage: Malformed FetchrRequest.
 *
 * - 'response': HTTP response errors.
 *   Identifiers: lowercase: 'response', camelCase: 'responseError', snake_case: 'response_error', ALL_CAP: 'RESPONSE', cache key: 'category:response:errId'.
 *   Model Identifier Format: 'response-error-{timestamp}'.
 *   Example Usage: Invalid FetchrResponse.
 *
 * - 'policy': Policy enforcement errors.
 *   Identifiers: lowercase: 'policy', camelCase: 'policyError', snake_case: 'policy_error', ALL_CAP: 'POLICY', cache key: 'category:policy:errId'.
 *   Model Identifier Format: 'policy-error-{timestamp}'.
 *   Example Usage: CSP violations.
 *
 * - 'IDB': IndexedDB errors.
 *   Identifiers: lowercase: 'idb', camelCase: 'idbError', snake_case: 'idb_error', ALL_CAP: 'IDB', cache key: 'category:idb:errId'.
 *   Model Identifier Format: 'idb-error-{timestamp}'.
 *   Example Usage: IndexedDB transaction failures.
 *
 * - 'localStorage': Local storage errors.
 *   Identifiers: lowercase: 'localstorage', camelCase: 'localStorageError', snake_case: 'local_storage_error', ALL_CAP: 'LOCALSTORAGE', cache key: 'category:localstorage:errId'.
 *   Model Identifier Format: 'localstorage-error-{timestamp}'.
 *   Example Usage: Quota exceeded errors.
 *
 * - 'memoryStorage': In-memory storage errors.
 *   Identifiers: lowercase: 'memorystorage', camelCase: 'memoryStorageError', snake_case: 'memory_storage_error', ALL_CAP: 'MEMORYSTORAGE', cache key: 'category:memorystorage:errId'.
 *   Model Identifier Format: 'memorystorage-error-{timestamp}'.
 *   Example Usage: Memory cache overflows.
 *
 * - 'sessionStorage': Session storage errors.
 *   Identifiers: lowercase: 'sessionstorage', camelCase: 'sessionStorageError', snake_case: 'session_storage_error', ALL_CAP: 'SESSIONSTORAGE', cache key: 'category:sessionstorage:errId'.
 *   Model Identifier Format: 'sessionstorage-error-{timestamp}'.
 *   Example Usage: Session storage corruption.
 *
 * - 'ui': UI rendering/component errors.
 *   Identifiers: lowercase: 'ui', camelCase: 'uiError', snake_case: 'ui_error', ALL_CAP: 'UI', cache key: 'category:ui:errId'.
 *   Model Identifier Format: 'ui-error-{timestamp}'.
 *   Example Usage: React component render failures.
 *
 * - 'state': State management errors.
 *   Identifiers: lowercase: 'state', camelCase: 'stateError', snake_case: 'state_error', ALL_CAP: 'STATE', cache key: 'category:state:errId'.
 *   Model Identifier Format: 'state-error-{timestamp}'.
 *   Example Usage: Redux store corruption.
 *
 * - 'hydration': SSR hydration mismatch errors.
 *   Identifiers: lowercase: 'hydration', camelCase: 'hydrationError', snake_case: 'hydration_error', ALL_CAP: 'HYDRATION', cache key: 'category:hydration:errId'.
 *   Model Identifier Format: 'hydration-error-{timestamp}'.
 *   Example Usage: Next.js hydration mismatches.
 *
 * - 'serialization': Data serialization errors.
 *   Identifiers: lowercase: 'serialization', camelCase: 'serializationError', snake_case: 'serialization_error', ALL_CAP: 'SERIALIZATION', cache key: 'category:serialization:errId'.
 *   Model Identifier Format: 'serialization-error-{timestamp}'.
 *   Example Usage: JSON parsing errors.
 *
 * - 'migration': Data or schema migration errors.
 *   Identifiers: lowercase: 'migration', camelCase: 'migrationError', snake_case: 'migration_error', ALL_CAP: 'MIGRATION', cache key: 'category:migration:errId'.
 *   Model Identifier Format: 'migration-error-{timestamp}'.
 *   Example Usage: Database schema upgrade failures.
 *
 * - 'backup': Data backup or recovery errors.
 *   Identifiers: lowercase: 'backup', camelCase: 'backupError', snake_case: 'backup_error', ALL_CAP: 'BACKUP', cache key: 'category:backup:errId'.
 *   Model Identifier Format: 'backup-error-{timestamp}'.
 *   Example Usage: Failed backup operations.
 *
 * - 'analytics': Analytics tracking errors.
 *   Identifiers: lowercase: 'analytics', camelCase: 'analyticsError', snake_case: 'analytics_error', ALL_CAP: 'ANALYTICS', cache key: 'category:analytics:errId'.
 *   Model Identifier Format: 'analytics-error-{timestamp}'.
 *   Example Usage: Google Analytics tracking failures.
 */
export type ErrorCategoryTaxonomy = CoreErrorCategory | CustomErrorCategory;
export type CoreErrorCategory = 'unknown' | 'event-emitter' | 'middleware' | 'routing' | 'api' | 'initialization' | 'form' | 'access' | 'navigation' | 'verification' | 'aborted' | 'validation' | 'authentication' | 'authorization' | 'internal' | 'configuration' | 'performance' | 'security' | 'integration' | 'unexpected' | 'rate limit' | 'network' | 'dependency' | 'protocol' | 'resource' | 'concurrency' | 'user action' | 'system' | 'config' | 'storage' | 'test' | 'auth' | 'cache' | 'crypto' | 'redirect' | 'transaction' | 'database' | 'cookie' | 'request' | 'response' | 'policy' | 'IDB' | 'localStorage' | 'memoryStorage' | 'sessionStorage' | 'ui' | 'state' | 'hydration' | 'serialization' | 'migration' | 'backup' | 'analytics';
export type CustomErrorCategory = string & { __category?: 'CustomErrorCategory' };