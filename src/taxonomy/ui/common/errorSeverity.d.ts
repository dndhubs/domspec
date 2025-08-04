/**
 * Union type representing ErrorSeverity in the Framr UI ecosystem, defining severity levels for error components like 'errorToast', 'errorBoundary', or alerts.
 * These severities align with semantic colors and ARIA for error messages, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., error logs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'fatal': Fatal unrecoverable error.
 *   Classifications: Severity (fatal); ARIA alert, WCAG 4.1.3.
 *   Identifiers: lowercase: 'fatal', camelCase: 'fatalSeverity', snake_case: 'fatal_severity', ALL_CAP: 'FATAL', cache key: 'errorseverity:fatal:componentId'.
 *   Model Identifier Format: 'fatal-{code}-{message}' (kebab-case for error logs).
 *   Variations and Use Cases: Synonyms: 'critical'; for crashes in Trakfox or app failures; validate via `isValidErrorSeverity(severity)`.
 *   Example Usage: <ErrorBoundary severity='fatal'> with full-page error UI.
 *
 * - 'warning': Non-fatal warning.
 *   Classifications: Severity (warning).
 *   Identifiers: lowercase: 'warning', camelCase: 'warningSeverity', snake_case: 'warning_severity', ALL_CAP: 'WARNING', cache key: 'errorseverity:warning:componentId'.
 *   Model Identifier Format: 'warning-{code}-{message}'.
 *   Variations and Use Cases: For deprecation notices in HealthOrb or minor issues.
 *   Example Usage: <ErrorToast severity='warning'> with 'bg-yellow-500'.
 *
 * - 'info': Informational note.
 *   Classifications: Severity (info).
 *   Identifiers: lowercase: 'info', camelCase: 'infoSeverity', snake_case: 'info_severity', ALL_CAP: 'INFO', cache key: 'errorseverity:info:componentId'.
 *   Model Identifier Format: 'info-{code}-{message}'.
 *   Variations and Use Cases: For tips in DnDHubs or non-error notices.
 *   Example Usage: <ErrorToast severity='info'> with 'bg-blue-500'.
 */
export type ErrorSeverityTaxonomy = 'fatal' | 'warning' | 'info';