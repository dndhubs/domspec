/**
 * Union type representing NotificationSeverity in the Framr UI ecosystem, defining severity levels for feedback components like 'notification', 'toast', or alerts.
 * These severities align with semantic colors and WCAG for status messages, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., message configs in PostgreSQL) and validation (e.g., in @framr/utils).
 *
 * - 'info': Informational message.
 *   Classifications: Severity (info); aligns with ARIA status, WCAG 4.1.3.
 *   Identifiers: lowercase: 'info', camelCase: 'infoSeverity', snake_case: 'info_severity', ALL_CAP: 'INFO', cache key: 'severity:info:componentId'.
 *   Model Identifier Format: 'info-{icon}-{color}' (kebab-case for toast configs).
 *   Variations and Use Cases: Synonyms: 'neutral'; for updates in Trakfox or system notices; validate via `isValidSeverity(severity)`.
 *   Example Usage: <ToastPortal severity='info'>Info message with 'bg-info-500'.
 *
 * - 'success': Positive success message.
 *   Classifications: Severity (success).
 *   Identifiers: lowercase: 'success', camelCase: 'successSeverity', snake_case: 'success_severity', ALL_CAP: 'SUCCESS', cache key: 'severity:success:componentId'.
 *   Model Identifier Format: 'success-{icon}-{color}'.
 *   Variations and Use Cases: For form submissions in HealthOrb or save confirmations.
 *   Example Usage: 'bg-success-500 text-white'.
 *
 * - 'warning': Caution message.
 *   Classifications: Severity (warning).
 *   Identifiers: lowercase: 'warning', camelCase: 'warningSeverity', snake_case: 'warning_severity', ALL_CAP: 'WARNING', cache key: 'severity:warning:componentId'.
 *   Model Identifier Format: 'warning-{icon}-{color}'.
 *   Variations and Use Cases: For alerts in DnDHubs or validation warnings.
 *   Example Usage: 'border-warning text-warning'.
 *
 * - 'error': Error message.
 *   Classifications: Severity (error).
 *   Identifiers: lowercase: 'error', camelCase: 'errorSeverity', snake_case: 'error_severity', ALL_CAP: 'ERROR', cache key: 'severity:error:componentId'.
 *   Model Identifier Format: 'error-{icon}-{color}'.
 *   Variations and Use Cases: For API failures in GEOCoLab or form errors.
 *   Example Usage: 'bg-error text-white'.
 *
 * - 'neutral': Neutral message without emphasis.
 *   Classifications: Severity (neutral).
 *   Identifiers: lowercase: 'neutral', camelCase: 'neutralSeverity', snake_case: 'neutral_severity', ALL_CAP: 'NEUTRAL', cache key: 'severity:neutral:componentId'.
 *   Model Identifier Format: 'neutral-{icon}-{color}'.
 *   Variations and Use Cases: For general toasts in Trakfox or non-urgent notices.
 *   Example Usage: 'bg-neutral-500 text-gray-800'.
 */
export type NotificationSeverityTaxonomy = 'info' | 'success' | 'warning' | 'error' | 'neutral';