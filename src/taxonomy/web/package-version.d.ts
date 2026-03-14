/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/version/package-version-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/PackageVersionTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20PackageVersionTaxonomy
 * Union type representing PackageVersionTaxonomy in the DOMSpec ecosystem.
 * Defines version classifications for software releases, particularly for npm packages and CI/CD pipelines. Aligns with Semantic Versioning (SemVer) standards, npm release conventions, and ISO/IEC 29147 for software vulnerability management. Supports extensibility for custom version strings in bespoke or proprietary systems within DNDHUBS platforms like Trakfox and HealthOrb DHIS2 integrations.
 *
 * - 'latest': Represents the most recent version of a package or application, typically the default for deployments.
 *   @alias newest
 *   Classifications: Aligns with npm 'latest' dist-tag and SemVer precedence.
 *   Identifiers: lowercase: 'latest', camelCase: 'latestVersion', snake_case: 'latest_version', ALL_CAP: 'LATEST', cache key: 'version:latest:packageId'.
 *   Model Identifier Format: 'latest-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'current'; used in Trakfox for fetching the newest package or in HealthOrb for latest API endpoints.
 *   @example
 *   npm install my-package@latest in Trakfox CI/CD pipeline.
 *
 * - 'stable': Represents a production-ready, thoroughly tested version.
 *   @alias production
 *   Classifications: Aligns with npm 'stable' dist-tag and ITIL release management.
 *   Identifiers: lowercase: 'stable', camelCase: 'stableVersion', snake_case: 'stable_version', ALL_CAP: 'STABLE', cache key: 'version:stable:packageId'.
 *   Model Identifier Format: 'stable-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'release'; for live deployments in Trakfox e-commerce or HealthOrb production systems.
 *   @example
 *   Deploy to prod: { version: 'stable' } in DNDHUBS release config.
 *
 * - 'beta': Represents a pre-release version for testing new features with expected stability.
 *   @alias prerelease
 *   Classifications: Aligns with SemVer prerelease tags and beta testing phases.
 *   Identifiers: lowercase: 'beta', camelCase: 'betaVersion', snake_case: 'beta_version', ALL_CAP: 'BETA', cache key: 'version:beta:packageId'.
 *   Model Identifier Format: 'beta-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'preview'; for Trakfox beta features or HealthOrb DHIS2 pilot integrations.
 *   @example
 *   Test feature: npm install my-package@beta in Trakfox staging.
 *
 * - 'alpha': Represents an early, experimental version with potential instability.
 *   @alias experimental
 *   Classifications: Aligns with SemVer alpha tags and agile development cycles.
 *   Identifiers: lowercase: 'alpha', camelCase: 'alphaVersion', snake_case: 'alpha_version', ALL_CAP: 'ALPHA', cache key: 'version:alpha:packageId'.
 *   Model Identifier Format: 'alpha-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'dev'; for early testing in HealthOrb R&D or Trakfox prototypes.
 *   @example
 *   Experiment: { version: 'alpha' } in DNDHUBS dev pipeline.
 *
 * - 'v1': Represents the first major version (SemVer 1.x.x).
 *   @alias version1
 *   Classifications: Aligns with SemVer major version and npm versioning.
 *   Identifiers: lowercase: 'v1', camelCase: 'v1Version', snake_case: 'v1_version', ALL_CAP: 'V1', cache key: 'version:v1:packageId'.
 *   Model Identifier Format: 'v1-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For legacy compatibility in Trakfox or HealthOrb initial releases.
 *   @example
 *   Pin version: npm install my-package@v1 in Trakfox.
 *
 * - 'v2': Represents the second major version (SemVer 2.x.x).
 *   @alias version2
 *   Classifications: Aligns with SemVer major version and npm versioning.
 *   Identifiers: lowercase: 'v2', camelCase: 'v2Version', snake_case: 'v2_version', ALL_CAP: 'V2', cache key: 'version:v2:packageId'.
 *   Model Identifier Format: 'v2-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For upgraded systems in DNDHUBS or HealthOrb migrations.
 *   @example
 *   Upgrade: { version: 'v2' } in Trakfox release notes.
 *
 * - 'v3': Represents the third major version (SemVer 3.x.x).
 *   @alias version3
 *   Classifications: Aligns with SemVer major version and npm versioning.
 *   Identifiers: lowercase: 'v3', camelCase: 'v3Version', snake_case: 'v3_version', ALL_CAP: 'V3', cache key: 'version:v3:packageId'.
 *   Model Identifier Format: 'v3-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For advanced features in Trakfox or HealthOrb v3 APIs.
 *   @example
 *   Deploy v3: npm install my-package@v3 in DNDHUBS.
 *
 * - '1.0.0': Represents a specific SemVer release (major.minor.patch).
 *   @alias initial
 *   Classifications: Aligns with SemVer 1.0.0 specification and npm release tags.
 *   Identifiers: lowercase: '1.0.0', camelCase: 'version100', snake_case: '1_0_0', ALL_CAP: '1_0_0', cache key: 'version:1.0.0:packageId'.
 *   Model Identifier Format: '1-0-0-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For precise pinning in Trakfox or HealthOrb legacy systems.
 *   @example
 *   Lock version: npm install my-package@1.0.0 in CI/CD.
 *
 * - '2.0.0': Represents a specific SemVer release (major.minor.patch).
 *   @alias major2
 *   Classifications: Aligns with SemVer 2.0.0 specification and npm release tags.
 *   Identifiers: lowercase: '2.0.0', camelCase: 'version200', snake_case: '2_0_0', ALL_CAP: '2_0_0', cache key: 'version:2.0.0:packageId'.
 *   Model Identifier Format: '2-0-0-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For Trakfox upgrades or HealthOrb stable migrations.
 *   @example
 *   Use in config: { version: '2.0.0' } in DNDHUBS pipeline.
 *
 * - '3.0.0': Represents a specific SemVer release (major.minor.patch).
 *   @alias major3
 *   Classifications: Aligns with SemVer 3.0.0 specification and npm release tags.
 *   Identifiers: lowercase: '3.0.0', camelCase: 'version300', snake_case: '3_0_0', ALL_CAP: '3_0_0', cache key: 'version:3.0.0:packageId'.
 *   Model Identifier Format: '3-0-0-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For cutting-edge features in Trakfox or HealthOrb.
 *   @example
 *   Deploy: npm install my-package@3.0.0 in Trakfox prod.
 *
 * - '1.0': Represents a shorthand major.minor version (SemVer 1.0.x).
 *   @alias short1
 *   Classifications: Aligns with SemVer shorthand and npm range queries.
 *   Identifiers: lowercase: '1.0', camelCase: 'version10', snake_case: '1_0', ALL_CAP: '1_0', cache key: 'version:1.0:packageId'.
 *   Model Identifier Format: '1-0-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For flexible minor version in Trakfox or HealthOrb.
 *   @example
 *   Range install: npm install my-package@~1.0 in CI/CD.
 *
 * - '2.1': Represents a shorthand major.minor version (SemVer 2.1.x).
 *   @alias short2
 *   Classifications: Aligns with SemVer shorthand and npm range queries.
 *   Identifiers: lowercase: '2.1', camelCase: 'version21', snake_case: '2_1', ALL_CAP: '2_1', cache key: 'version:2.1:packageId'.
 *   Model Identifier Format: '2-1-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For minor updates in DNDHUBS or HealthOrb.
 *   @example
 *   Specify minor: { version: '2.1' } in Trakfox config.
 *
 * - '3.5': Represents a shorthand major.minor version (SemVer 3.5.x).
 *   @alias short3
 *   Classifications: Aligns with SemVer shorthand and npm range queries.
 *   Identifiers: lowercase: '3.5', camelCase: 'version35', snake_case: '3_5', ALL_CAP: '3_5', cache key: 'version:3.5:packageId'.
 *   Model Identifier Format: '3-5-{packageType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For specific minor releases in Trakfox or HealthOrb.
 *   @example
 *   Deploy minor: npm install my-package@~3.5 in DNDHUBS.
 */
export type PackageVersionTaxonomy = CorePackageVersion | CustomPackageVersion;
export type CorePackageVersion = 'latest' | 'stable' | 'beta' | 'alpha' | 'v1' | 'v2' | 'v3' | '1.0.0' | '2.0.0' | '3.0.0' | '1.0' | '2.1' | '3.5';
export type CustomPackageVersion = string & { __packageversion?: 'CustomPackageVersion' };