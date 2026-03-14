/**
 * Union type representing ErrorRuntimeTaxonomy in the DOMSpec ecosystem.
 * Defines runtime environments for errors in @dndhub/error, supporting multi-environment deployments.
 *
 * - 'router': Errors in routing logic.
 *   Classifications: Next.js routing standards.
 *   Identifiers: lowercase: 'router', camelCase: 'routerError', snake_case: 'router_error', ALL_CAP: 'ROUTER', cache key: 'runtime:router:errId'.
 *   Model Identifier Format: 'router-error-{timestamp}'.
 *   Example Usage: DomsRouteError.tsx handling routing errors.
 *
 * - 'client': Client-side errors in browser.
 *   Identifiers: lowercase: 'client', camelCase: 'clientError', snake_case: 'client_error', ALL_CAP: 'CLIENT', cache key: 'runtime:client:errId'.
 *   Model Identifier Format: 'client-error-{timestamp}'.
 *   Example Usage: DomsClientError.tsx rendering client errors.
 *
 * - 'server': Server-side errors.
 *   Identifiers: lowercase: 'server', camelCase: 'serverError', snake_case: 'server_error', ALL_CAP: 'SERVER', cache key: 'runtime:server:errId'.
 *   Model Identifier Format: 'server-error-{timestamp}'.
 *   Example Usage: Server logs in DomsError.ts.
 *
 * - 'cli': Command-line interface errors.
 *   Identifiers: lowercase: 'cli', camelCase: 'cliError', snake_case: 'cli_error', ALL_CAP: 'CLI', cache key: 'runtime:cli:errId'.
 *   Model Identifier Format: 'cli-error-{timestamp}'.
 *   Example Usage: CLI command failures in build scripts.
 *
 * - 'universal': Errors applicable to multiple environments.
 *   Identifiers: lowercase: 'universal', camelCase: 'universalError', snake_case: 'universal_error', ALL_CAP: 'UNIVERSAL', cache key: 'runtime:universal:errId'.
 *   Model Identifier Format: 'universal-error-{timestamp}'.
 *   Example Usage: Shared error logic in ErrorManager.ts.
 *
 * - 'fluxr': Fluxr-specific errors.
 *   Identifiers: lowercase: 'fluxr', camelCase: 'fluxrError', snake_case: 'fluxr_error', ALL_CAP: 'FLUXR', cache key: 'runtime:fluxr:errId'.
 *   Model Identifier Format: 'fluxr-error-{timestamp}'.
 *   Example Usage: Fluxr middleware errors.
 *
 * - 'framr': Framr-specific errors.
 *   Identifiers: lowercase: 'framr', camelCase: 'framrError', snake_case: 'framr_error', ALL_CAP: 'FRAMR', cache key: 'runtime:framr:errId'.
 *   Model Identifier Format: 'framr-error-{timestamp}'.
 *   Example Usage: Framr framework errors.
 *
 * - 'unknown': Unclassified runtime errors.
 *   Identifiers: lowercase: 'unknown', camelCase: 'unknownError', snake_case: 'unknown_error', ALL_CAP: 'UNKNOWN', cache key: 'runtime:unknown:errId'.
 *   Model Identifier Format: 'unknown-error-{timestamp}'.
 *   Example Usage: Fallback in getDefaultError (DomsError.ts).
 *
 * - 'build': Build-time errors.
 *   Identifiers: lowercase: 'build', camelCase: 'buildError', snake_case: 'build_error', ALL_CAP: 'BUILD', cache key: 'runtime:build:errId'.
 *   Model Identifier Format: 'build-error-{timestamp}'.
 *   Example Usage: Webpack/Vite compilation failures.
 *
 * - 'test': Unit or integration test failures.
 *   Identifiers: lowercase: 'test', camelCase: 'testError', snake_case: 'test_error', ALL_CAP: 'TEST', cache key: 'runtime:test:errId'.
 *   Model Identifier Format: 'test-error-{timestamp}'.
 *   Example Usage: Jest/Vitest test case failures.
 *
 * - 'deploy': CI/CD deployment pipeline errors.
 *   Identifiers: lowercase: 'deploy', camelCase: 'deployError', snake_case: 'deploy_error', ALL_CAP: 'DEPLOY', cache key: 'runtime:deploy:errId'.
 *   Model Identifier Format: 'deploy-error-{timestamp}'.
 *   Example Usage: Vercel deployment failures.
 *
 * - 'edge': CDN or edge computing errors.
 *   Identifiers: lowercase: 'edge', camelCase: 'edgeError', snake_case: 'edge_error', ALL_CAP: 'EDGE', cache key: 'runtime:edge:errId'.
 *   Model Identifier Format: 'edge-error-{timestamp}'.
 *   Example Usage: Cloudflare edge network errors.
 *
 * - 'worker': Web worker or service worker errors.
 *   Identifiers: lowercase: 'worker', camelCase: 'workerError', snake_case: 'worker_error', ALL_CAP: 'WORKER', cache key: 'runtime:worker:errId'.
 *   Model Identifier Format: 'worker-error-{timestamp}'.
 *   Example Usage: Service worker registration failures.
 *
 * - 'mobile': Native mobile app errors.
 *   Identifiers: lowercase: 'mobile', camelCase: 'mobileError', snake_case: 'mobile_error', ALL_CAP: 'MOBILE', cache key: 'runtime:mobile:errId'.
 *   Model Identifier Format: 'mobile-error-{timestamp}'.
 *   Example Usage: React Native integration errors.
 *
 * - 'hybrid': Mixed SSR/CSR rendering errors.
 *   Identifiers: lowercase: 'hybrid', camelCase: 'hybridError', snake_case: 'hybrid_error', ALL_CAP: 'HYBRID', cache key: 'runtime:hybrid:errId'.
 *   Model Identifier Format: 'hybrid-error-{timestamp}'.
 *   Example Usage: Next.js hydration errors.
 */
export type ErrorRuntimeTaxonomy = CoreErrorRuntime | CustomErrorRuntime;
export type CoreErrorRuntime = 'router' | 'client' | 'server' | 'cli' | 'universal' | 'fluxr' | 'framr' | 'unknown' | 'build' | 'test' | 'deploy' | 'edge' | 'worker' | 'mobile' | 'hybrid';
export type CustomErrorRuntime = string & { __runtime?: 'CustomErrorRuntime' };