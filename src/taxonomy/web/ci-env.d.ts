/**
 * Union type representing CIEnvironmentTaxonomy in the DOMSpec ecosystem.
 * Defines deployment environments for error context in @dndhub/error and broader web applications.
 * Supports multi-environment setups, distinguishing from non-web (e.g., climate) contexts with 'Web' prefix.
 *
 * - 'dev': Development environment alias.
 *   Classifications: Node.js environment standards.
 *   Identifiers: lowercase: 'dev', camelCase: 'devEnvironment', snake_case: 'dev_environment', ALL_CAP: 'DEV', cache key: 'env:dev:errId'.
 *   Model Identifier Format: 'env-dev-{timestamp}'.
 *   Variations and Use Cases: Used as shorthand for development; common in local dev setups with hot reloading.
 *   Example Usage: Local dev errors in DomsClientError.tsx for quick iteration.
 *
 * - 'prod': Production environment alias.
 *   Identifiers: lowercase: 'prod', camelCase: 'prodEnvironment', snake_case: 'prod_environment', ALL_CAP: 'PROD', cache key: 'env:prod:errId'.
 *   Model Identifier Format: 'env-prod-{timestamp}'.
 *   Variations and Use Cases: Shorthand for production; used in CI/CD pipelines for live deployments.
 *   Example Usage: Production errors in DndCoLab with optimized builds.
 *
 * - 'development': Full development environment.
 *   Classifications: Node.js environment standards.
 *   Identifiers: lowercase: 'development', camelCase: 'developmentEnvironment', snake_case: 'development_environment', ALL_CAP: 'DEVELOPMENT', cache key: 'env:development:errId'.
 *   Model Identifier Format: 'env-development-{timestamp}'.
 *   Variations and Use Cases: Used for full dev mode with debugging tools; supports hot module replacement.
 *   Example Usage: Development errors in DomsError.ts with verbose logging.
 *
 * - 'production': Full production environment.
 *   Identifiers: lowercase: 'production', camelCase: 'productionEnvironment', snake_case: 'production_environment', ALL_CAP: 'PRODUCTION', cache key: 'env:production:errId'.
 *   Model Identifier Format: 'env-production-{timestamp}'.
 *   Variations and Use Cases: Optimized for performance; minified assets and reduced logging.
 *   Example Usage: Production errors in DndCoLab with error throttling.
 *
 * - 'staging': Staging environment for pre-production testing.
 *   Identifiers: lowercase: 'staging', camelCase: 'stagingEnvironment', snake_case: 'staging_environment', ALL_CAP: 'STAGING', cache key: 'env:staging:errId'.
 *   Model Identifier Format: 'env-staging-{timestamp}'.
 *   Variations and Use Cases: Mirrors production for QA; used for integration testing before release.
 *   Example Usage: Staging deployment errors in ErrorManager.ts.
 *
 * - 'test': Testing environment for unit/integration tests.
 *   Identifiers: lowercase: 'test', camelCase: 'testEnvironment', snake_case: 'test_environment', ALL_CAP: 'TEST', cache key: 'env:test:errId'.
 *   Model Identifier Format: 'env-test-{timestamp}'.
 *   Variations and Use Cases: Isolated for automated tests; mocks external services.
 *   Example Usage: Test errors in Jest/Vitest setups within DomsError.ts.
 *
 * - 'qa': Quality Assurance environment.
 *   Identifiers: lowercase: 'qa', camelCase: 'qaEnvironment', snake_case: 'qa_environment', ALL_CAP: 'QA', cache key: 'env:qa:errId'.
 *   Model Identifier Format: 'env-qa-{timestamp}'.
 *   Variations and Use Cases: Dedicated for manual QA testing; similar to staging but with test data.
 *   Example Usage: QA-specific errors in fluxr integrations during manual reviews.
 *
 * - 'beta': Beta testing environment for early adopters.
 *   Identifiers: lowercase: 'beta', camelCase: 'betaEnvironment', snake_case: 'beta_environment', ALL_CAP: 'BETA', cache key: 'env:beta:errId'.
 *   Model Identifier Format: 'env-beta-{timestamp}'.
 *   Variations and Use Cases: Used for community beta features; tracks experimental errors.
 *   Example Usage: Beta errors in DndCoLab features via DomsClientError.tsx.
 *
 * - 'canary': Canary release environment for gradual rollouts.
 *   Identifiers: lowercase: 'canary', camelCase: 'canaryEnvironment', snake_case: 'canary_environment', ALL_CAP: 'CANARY', cache key: 'env:canary:errId'.
 *   Model Identifier Format: 'env-canary-{timestamp}'.
 *   Variations and Use Cases: Limited traffic for new features; monitors for issues before full prod.
 *   Example Usage: Canary deployment errors in Vercel KV storage.
 *
 * - 'local': Local machine environment.
 *   Identifiers: lowercase: 'local', camelCase: 'localEnvironment', snake_case: 'local_environment', ALL_CAP: 'LOCAL', cache key: 'env:local:errId'.
 *   Model Identifier Format: 'env-local-{timestamp}'.
 *   Variations and Use Cases: Used for offline/local dev; no network dependencies.
 *   Example Usage: Local errors in DomsError.ts during offline testing.
 *
 * - 'sandbox': Isolated sandbox environment.
 *   Identifiers: lowercase: 'sandbox', camelCase: 'sandboxEnvironment', snake_case: 'sandbox_environment', ALL_CAP: 'SANDBOX', cache key: 'env:sandbox:errId'.
 *   Model Identifier Format: 'env-sandbox-{timestamp}'.
 *   Variations and Use Cases: Used for safe experimentation; restricted access.
 *   Example Usage: Sandbox iframe errors in DomsClientError.tsx.
 *
 * - 'preview': Preview environment for PR builds.
 *   Identifiers: lowercase: 'preview', camelCase: 'previewEnvironment', snake_case: 'preview_environment', ALL_CAP: 'PREVIEW', cache key: 'env:preview:errId'.
 *   Model Identifier Format: 'env-preview-{timestamp}'.
 *   Variations and Use Cases: Auto-generated for pull requests; used in CI/CD previews.
 *   Example Usage: Preview errors in Vercel deployments for PR reviews.
 */
export type CIEnvironmentTaxonomy = CoreCIEnvironment | CustomCIEnvironment;
export type CoreCIEnvironment = 'dev' | 'prod' | 'development' | 'production' | 'staging' | 'test' | 'qa' | 'beta' | 'canary' | 'local' | 'sandbox' | 'preview';
export type CustomCIEnvironment = string & { __environment?: 'CustomCIEnvironment' };