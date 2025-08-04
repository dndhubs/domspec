/**
 * Union type representing VersionTaxonomy in the DOMSpec ecosystem.
 * Defines SemVer-compliant versions for error tracking, dependency management, and API versioning in @dndhub/error.
 * Supports standard SemVer formats (e.g., '1.0.0'), prerelease tags (e.g., '1.0.0-alpha'), and API-specific prefixes (e.g., 'v1').
 * Used for tracking library versions, API endpoints, and error context across development, staging, and production environments.
 *
 * - 'latest': Refers to the most recent version of a library or API, dynamically resolved.
 *   Classifications: SemVer 2.0.0 (dynamic versioning).
 *   Identifiers: lowercase: 'latest', camelCase: 'latestVersion', snake_case: 'latest_version', ALL_CAP: 'LATEST', cache key: 'version:latest:errId'.
 *   Model Identifier Format: 'version-latest-{timestamp}'.
 *   Variations and Use Cases: Used in package managers (e.g., npm install @dndhub/error@latest) or API calls to fetch the latest endpoint (e.g., GET /api/latest/resource). Common in development for testing bleeding-edge features.
 *   Example Usage: DomsError.ts resolving the latest @dndhub/error version for error logging in development.
 *
 * - 'stable': The latest stable release, guaranteed to have no breaking changes within the same major version.
 *   Classifications: SemVer 2.0.0.
 *   Identifiers: lowercase: 'stable', camelCase: 'stableVersion', snake_case: 'stable_version', ALL_CAP: 'STABLE', cache key: 'version:stable:errId'.
 *   Model Identifier Format: 'version-stable-{timestamp}'.
 *   Variations and Use Cases: Used in production environments to ensure reliability (e.g., DndCoLab deploying @dndhub/error@stable). Common in CI/CD pipelines for stable builds.
 *   Example Usage: ErrorBoundary.tsx using stable version for consistent error rendering in production.
 *
 * - 'beta': A prerelease version with new features, not fully tested, for beta testing.
 *   Classifications: SemVer 2.0.0 (prerelease).
 *   Identifiers: lowercase: 'beta', camelCase: 'betaVersion', snake_case: 'beta_version', ALL_CAP: 'BETA', cache key: 'version:beta:errId'.
 *   Model Identifier Format: 'version-beta-{timestamp}'.
 *   Variations and Use Cases: Used in staging for community beta testing (e.g., DndHub beta features). Often paired with specific endpoints (e.g., GET /api/beta/resource).
 *   Example Usage: DomsClientError.tsx rendering beta-specific errors in staging environment.
 *
 * - 'alpha': An early prerelease version for internal testing, highly unstable.
 *   Classifications: SemVer 2.0.0 (prerelease).
 *   Identifiers: lowercase: 'alpha', camelCase: 'alphaVersion', snake_case: 'alpha_version', ALL_CAP: 'ALPHA', cache key: 'version:alpha:errId'.
 *   Model Identifier Format: 'version-alpha-{timestamp}'.
 *   Variations and Use Cases: Used in development for experimental features (e.g., new error taxonomy in @dndhub/error). Limited to internal teams or controlled test environments.
 *   Example Usage: DomsError.ts logging alpha version errors during development sprints.
 *
 * - 'v1': API version with 'v' prefix, common in backend APIs.
 *   Classifications: RESTful API versioning (e.g., GitHub API).
 *   Identifiers: lowercase: 'v1', camelCase: 'versionV1', snake_case: 'version_v1', ALL_CAP: 'VERSION_V1', cache key: 'version:v1:errId'.
 *   Model Identifier Format: 'version-v1-{timestamp}'.
 *   Variations and Use Cases: Used in backend APIs (e.g., GET /api/v1/resource) for versioning endpoints. Common in Trakfox and HealthOrb DHIS2 integrations for backward compatibility.
 *   Example Usage: DomsError.ts logging errors from GET /api/v1/errors in production.
 *
 * - 'v1.0': More specific API version with 'v' prefix.
 *   Classifications: RESTful API versioning.
 *   Identifiers: lowercase: 'v1.0', camelCase: 'versionV10', snake_case: 'version_v1_0', ALL_CAP: 'VERSION_V1_0', cache key: 'version:v1.0:errId'.
 *   Model Identifier Format: 'version-v1-0-{timestamp}'.
 *   Variations and Use Cases: Used for finer-grained API versioning (e.g., GET /api/v1.0/resource). Ensures compatibility with specific minor releases in DndHub ecosystem.
 *   Example Usage: ErrorManager.ts throttling errors from /api/v1.0 endpoints.
 *
 * - '1.0': Shorthand for SemVer major.minor version without patch.
 *   Classifications: SemVer 2.0.0.
 *   Identifiers: lowercase: '1.0', camelCase: 'version10', snake_case: 'version_1_0', ALL_CAP: 'VERSION_1_0', cache key: 'version:1.0:errId'.
 *   Model Identifier Format: 'version-1-0-{timestamp}'.
 *   Variations and Use Cases: Used in library versioning (e.g., @dndhub/error@1.0) or API shorthand. Common in client-side error tracking for simplified versioning.
 *   Example Usage: DomsRouteError.tsx rendering errors for version 1.0 features.
 *
 * - '1.0.0': Full SemVer major.minor.patch version, initial stable release.
 *   Classifications: SemVer 2.0.0.
 *   Identifiers: lowercase: '1.0.0', camelCase: 'version100', snake_case: 'version_1_0_0', ALL_CAP: 'VERSION_1_0_0', cache key: 'version:1.0.0:errId'.
 *   Model Identifier Format: 'version-1-0-0-{timestamp}'.
 *   Variations and Use Cases: Used for precise library versioning (e.g., @dndhub/error@1.0.0). Tracks initial stable release in production for error logging.
 *   Example Usage: Default version in DomsError.ts for error logging.
 *
 * - '1.0.0-alpha': Prerelease version for initial alpha testing.
 *   Classifications: SemVer 2.0.0 (prerelease).
 *   Identifiers: lowercase: '1.0.0-alpha', camelCase: 'version100Alpha', snake_case: 'version_1_0_0_alpha', ALL_CAP: 'VERSION_1_0_0_ALPHA', cache key: 'version:1.0.0-alpha:errId'.
 *   Model Identifier Format: 'version-1-0-0-alpha-{timestamp}'.
 *   Variations and Use Cases: Used in internal alpha testing for new features (e.g., @dndhub/error@1.0.0-alpha). Tracks experimental error handling logic.
 *   Example Usage: DomsError.ts logging alpha-specific errors in development.
 *
 * - '1.0.0-beta': Prerelease version for beta testing.
 *   Classifications: SemVer 2.0.0 (prerelease).
 *   Identifiers: lowercase: '1.0.0-beta', camelCase: 'version100Beta', snake_case: 'version_1_0_0_beta', ALL_CAP: 'VERSION_1_0_0_BETA', cache key: 'version:1.0.0-beta:errId'.
 *   Model Identifier Format: 'version-1-0-0-beta-{timestamp}'.
 *   Variations and Use Cases: Used in staging for community beta testing (e.g., @dndhub/error@1.0.0-beta). Tracks beta feature errors in DndCoLab.
 *   Example Usage: DomsClientError.tsx rendering beta version errors in staging.
 *
 * - '2.0.0': Major release with breaking changes.
 *   Classifications: SemVer 2.0.0.
 *   Identifiers: lowercase: '2.0.0', camelCase: 'version200', snake_case: 'version_2_0_0', ALL_CAP: 'VERSION_2_0_0', cache key: 'version:2.0.0:errId'.
 *   Model Identifier Format: 'version-2-0-0-{timestamp}'.
 *   Variations and Use Cases: Used for major library updates (e.g., @dndhub/error@2.0.0) with breaking changes. Tracks React 19.1+ compatibility errors.
 *   Example Usage: ErrorBoundary.tsx handling errors for version 2.0.0 features.
 *
 * - '2.0.0-alpha': Prerelease version for major release alpha testing.
 *   Classifications: SemVer 2.0.0 (prerelease).
 *   Identifiers: lowercase: '2.0.0-alpha', camelCase: 'version200Alpha', snake_case: 'version_2_0_0_alpha', ALL_CAP: 'VERSION_2_0_0_ALPHA', cache key: 'version:2.0.0-alpha:errId'.
 *   Model Identifier Format: 'version-2-0-0-alpha-{timestamp}'.
 *   Variations and Use Cases: Used in development for testing breaking changes (e.g., new error taxonomy in @dndhub/error@2.0.0-alpha).
 *   Example Usage: DomsError.ts logging alpha errors for version 2.0.0.
 *
 * - '2.0.0-beta': Prerelease version for major release beta testing.
 *   Classifications: SemVer 2.0.0 (prerelease).
 *   Identifiers: lowercase: '2.0.0-beta', camelCase: 'version200Beta', snake_case: 'version_2_0_0_beta', ALL_CAP: 'VERSION_2_0_0_BETA', cache key: 'version:2.0.0-beta:errId'.
 *   Model Identifier Format: 'version-2-0-0-beta-{timestamp}'.
 *   Variations and Use Cases: Used in staging for beta testing major updates (e.g., @dndhub/error@2.0.0-beta). Tracks breaking change errors.
 *   Example Usage: DomsRouteError.tsx rendering beta errors for version 2.0.0.
 *
 * - '3.0.0': Next major release with breaking changes.
 *   Classifications: SemVer 2.0.0.
 *   Identifiers: lowercase: '3.0.0', camelCase: 'version300', snake_case: 'version_3_0_0', ALL_CAP: 'VERSION_3_0_0', cache key: 'version:3.0.0:errId'.
 *   Model Identifier Format: 'version-3-0-0-{timestamp}'.
 *   Variations and Use Cases: Used for future DndHub expansions (e.g., @dndhub/error@3.0.0). Tracks errors for major new features.
 *   Example Usage: ErrorManager.ts handling errors for version 3.0.0 features.
 *
 * - '3.0.0-alpha': Prerelease version for next major release alpha testing.
 *   Classifications: SemVer 2.0.0 (prerelease).
 *   Identifiers: lowercase: '3.0.0-alpha', camelCase: 'version300Alpha', snake_case: 'version_3_0_0_alpha', ALL_CAP: 'VERSION_3_0_0_ALPHA', cache key: 'version:3.0.0-alpha:errId'.
 *   Model Identifier Format: 'version-3-0-0-alpha-{timestamp}'.
 *   Variations and Use Cases: Used in development for testing future features (e.g., @dndhub/error@3.0.0-alpha). Tracks experimental errors.
 *   Example Usage: DomsError.ts logging alpha errors for version 3.0.0.
 *
 * - '3.0.0-beta': Prerelease version for next major release beta testing.
 *   Classifications: SemVer 2.0.0 (prerelease).
 *   Identifiers: lowercase: '3.0.0-beta', camelCase: 'version300Beta', snake_case: 'version_3_0_0_beta', ALL_CAP: 'VERSION_3_0_0_BETA', cache key: 'version:3.0.0-beta:errId'.
 *   Model Identifier Format: 'version-3-0-0-beta-{timestamp}'.
 *   Variations and Use Cases: Used in staging for beta testing future features (e.g., @dndhub/error@3.0.0-beta). Tracks community feedback errors.
 *   Example Usage: DomsClientError.tsx rendering beta errors for version 3.0.0.
 */
export type VersionTaxonomy = CoreVersion | CustomVersion;
export type CoreVersion = 'latest' | 'stable' | 'beta' | 'alpha' | 'v1' | 'v1.0' | '1.0' | '1.0.0' | '1.0.0-alpha' | '1.0.0-beta' | '2.0.0' | '2.0.0-alpha' | '2.0.0-beta' | '3.0.0' | '3.0.0-alpha' | '3.0.0-beta';
export type CustomVersion = string & { __semver?: 'CustomVersion' };