/**
 * Union type representing AppRuntimeEnvironmentTaxonomy in the Trakfox ecosystem.
 * Defines standardized runtime environments for application execution, covering local development,
 * testing/staging, and production phases. Supports configuration and detection in Trakfox, HealthOrb,
 * and DnDHubs via environment variables (e.g., NODE_ENV).
 *
 * Local development and debugging environments:
 * - 'development': Standard environment for coding and testing.
 *   Classifications: Semantic environment (development); NODE_ENV standard.
 *   Identifiers: lowercase: 'development', camelCase: 'developmentEnv', snake_case: 'development_env', ALL_CAP: 'DEVELOPMENT', cache key: 'env:development:runtime'.
 *   Model Identifier Format: 'development-{resourceType}-{timestamp}' (e.g., 'development-config-20250807').
 *   Variations and Use Cases: Used for local dev servers in Trakfox; prototype testing in HealthOrb; local previews in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'development' for local development.
 *   @example 'development'
 *
 * - 'dev': Shorthand for development environment.
 *   Classifications: Semantic environment (development); NODE_ENV alias.
 *   Identifiers: lowercase: 'dev', camelCase: 'devEnv', snake_case: 'dev_env', ALL_CAP: 'DEV', cache key: 'env:dev:runtime'.
 *   Model Identifier Format: 'dev-{resourceType}-{timestamp}' (e.g., 'dev-config-20250807').
 *   Variations and Use Cases: Used as alias for development in Trakfox; quick setup in HealthOrb; shorthand in DnDHubs scripts.
 *   Example Usage: Setting process.env.NODE_ENV = 'dev' for local development.
 *   @example 'dev'
 *
 * - 'local': Personal machine environment for isolated development.
 *   Classifications: Semantic environment (local); NODE_ENV standard.
 *   Identifiers: lowercase: 'local', camelCase: 'localEnv', snake_case: 'local_env', ALL_CAP: 'LOCAL', cache key: 'env:local:runtime'.
 *   Model Identifier Format: 'local-{resourceType}-{timestamp}' (e.g., 'local-config-20250807').
 *   Variations and Use Cases: Used for isolated testing in Trakfox; local data simulation in HealthOrb; personal sandboxes in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'local' for individual developer setups.
 *   @example 'local'
 *
 * - 'sandbox': Isolated environment for safe experimentation.
 *   Classifications: Semantic environment (sandbox); NODE_ENV standard.
 *   Identifiers: lowercase: 'sandbox', camelCase: 'sandboxEnv', snake_case: 'sandbox_env', ALL_CAP: 'SANDBOX', cache key: 'env:sandbox:runtime'.
 *   Model Identifier Format: 'sandbox-{resourceType}-{timestamp}' (e.g., 'sandbox-config-20250807').
 *   Variations and Use Cases: Used for safe previews in Trakfox; mock patient data in HealthOrb; test marketplaces in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'sandbox' for experimental features.
 *   @example 'sandbox'
 *
 * - 'preview': Environment for reviewing changes before staging.
 *   Classifications: Semantic environment (preview); deployment platform standard.
 *   Identifiers: lowercase: 'preview', camelCase: 'previewEnv', snake_case: 'preview_env', ALL_CAP: 'PREVIEW', cache key: 'env:preview:runtime'.
 *   Model Identifier Format: 'preview-{resourceType}-{timestamp}' (e.g., 'preview-config-20250807').
 *   Variations and Use Cases: Used for PR reviews in Trakfox; UI previews in HealthOrb; feature demos in DnDHubs.
 *   Example Usage: Detecting via process.env.VERCEL_ENV = 'preview' or process.env.NETLIFY = 'true'.
 *   @example 'preview'
 *
 * Testing, staging, and pre-release environments:
 * - 'test': Environment for automated and manual tests.
 *   Classifications: Semantic environment (test); NODE_ENV standard.
 *   Identifiers: lowercase: 'test', camelCase: 'testEnv', snake_case: 'test_env', ALL_CAP: 'TEST', cache key: 'env:test:runtime'.
 *   Model Identifier Format: 'test-{resourceType}-{timestamp}' (e.g., 'test-config-20250807').
 *   Variations and Use Cases: Used for unit/integration tests in Trakfox; validation in HealthOrb; e2e testing in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'test' for automated testing.
 *   @example 'test'
 *
 * - 'qa': Quality Assurance environment for thorough testing.
 *   Classifications: Semantic environment (qa); NODE_ENV standard.
 *   Identifiers: lowercase: 'qa', camelCase: 'qaEnv', snake_case: 'qa_env', ALL_CAP: 'QA', cache key: 'env:qa:runtime'.
 *   Model Identifier Format: 'qa-{resourceType}-{timestamp}' (e.g., 'qa-config-20250807').
 *   Variations and Use Cases: Used for quality assurance in Trakfox; compliance testing in HealthOrb; user acceptance in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'qa' for thorough testing.
 *   @example 'qa'
 *
 * - 'staging': Environment mirroring production for final tests.
 *   Classifications: Semantic environment (staging); NODE_ENV standard.
 *   Identifiers: lowercase: 'staging', camelCase: 'stagingEnv', snake_case: 'staging_env', ALL_CAP: 'STAGING', cache key: 'env:staging:runtime'.
 *   Model Identifier Format: 'staging-{resourceType}-{timestamp}' (e.g., 'staging-config-20250807').
 *   Variations and Use Cases: Used for staging deploys in Trakfox; pre-release validation in HealthOrb; beta testing in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'staging' for deployment rehearsals.
 *   @example 'staging'
 *
 * - 'beta': Environment for early user testing.
 *   Classifications: Semantic environment (beta); NODE_ENV standard.
 *   Identifiers: lowercase: 'beta', camelCase: 'betaEnv', snake_case: 'beta_env', ALL_CAP: 'BETA', cache key: 'env:beta:runtime'.
 *   Model Identifier Format: 'beta-{resourceType}-{timestamp}' (e.g., 'beta-config-20250807').
 *   Variations and Use Cases: Used for feature rollouts in Trakfox; trial features in HealthOrb; early access in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'beta' for public beta releases.
 *   @example 'beta'
 *
 * - 'canary': Environment for gradual rollouts and A/B testing.
 *   Classifications: Semantic environment (canary); NODE_ENV standard.
 *   Identifiers: lowercase: 'canary', camelCase: 'canaryEnv', snake_case: 'canary_env', ALL_CAP: 'CANARY', cache key: 'env:canary:runtime'.
 *   Model Identifier Format: 'canary-{resourceType}-{timestamp}' (e.g., 'canary-config-20250807').
 *   Variations and Use Cases: Used for A/B testing in Trakfox; canary deploys in HealthOrb; early feature testing in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'canary' for incremental releases.
 *   @example 'canary'
 *
 * Production environment:
 * - 'production': Live, user-facing environment.
 *   Classifications: Semantic environment (production); NODE_ENV standard.
 *   Identifiers: lowercase: 'production', camelCase: 'productionEnv', snake_case: 'production_env', ALL_CAP: 'PRODUCTION', cache key: 'env:production:runtime'.
 *   Model Identifier Format: 'production-{resourceType}-{timestamp}' (e.g., 'production-config-20250807').
 *   Variations and Use Cases: Used for production apps in Trakfox; live services in HealthOrb; public marketplaces in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'production' for live applications.
 *   @example 'production'
 *
 * - 'prod': Shorthand for production environment.
 *   Classifications: Semantic environment (production); NODE_ENV alias.
 *   Identifiers: lowercase: 'prod', camelCase: 'prodEnv', snake_case: 'prod_env', ALL_CAP: 'PROD', cache key: 'env:prod:runtime'.
 *   Model Identifier Format: 'prod-{resourceType}-{timestamp}' (e.g., 'prod-config-20250807').
 *   Variations and Use Cases: Used as alias for production in Trakfox; shorthand for live apps in HealthOrb; quick reference in DnDHubs.
 *   Example Usage: Setting process.env.NODE_ENV = 'prod' for live applications.
 *   @example 'prod'
 */
export type AppRuntimeEnvironmentTaxonomy = AppRuntimeEnvironment | CustomAppRuntimeEnvironment;

/**
 * Local development and debugging environments
 */
export type DevelopmentEnvironmentTaxonomy = 'development' | 'dev';
export type LocalEnvironmentTaxonomy = 'local';
export type SandboxEnvironmentTaxonomy = 'sandbox';
export type PreviewEnvironmentTaxonomy = 'preview';

/**
 * Testing, staging, and pre-release environments
 */
export type TestEnvironmentTaxonomy = 'test';
export type QAEnvironmentTaxonomy = 'qa';
export type StagingEnvironmentTaxonomy = 'staging';
export type BetaEnvironmentTaxonomy = 'beta';
export type CanaryEnvironmentTaxonomy = 'canary';

/**
 * Production environment
 */
export type ProductionEnvironmentTaxonomy = 'production' | 'prod';

export type AppRuntimeEnvironment = 
  | DevelopmentEnvironmentTaxonomy
  | LocalEnvironmentTaxonomy
  | SandboxEnvironmentTaxonomy
  | PreviewEnvironmentTaxonomy
  | TestEnvironmentTaxonomy
  | QAEnvironmentTaxonomy
  | StagingEnvironmentTaxonomy
  | BetaEnvironmentTaxonomy
  | CanaryEnvironmentTaxonomy
  | ProductionEnvironmentTaxonomy;

export type CustomAppRuntimeEnvironment = string & { __name?: 'CustomAppRuntimeEnvironment' };