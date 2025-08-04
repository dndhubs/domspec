/**
 * Union type representing ErrorSeverityTaxonomy in the DOMSpec ecosystem.
 * Defines severity levels for errors in @dndhub/error, aligned with logging and UI rendering needs.
 * Supports security, operational, and compliance tracking for DndHub and fluxr integrations.
 *
 * - 'fraud': Indicates potential fraudulent activity requiring immediate investigation.
 *   Classifications: PCI DSS, ISO 27001 (Information Security).
 *   Identifiers: lowercase: 'fraud', camelCase: 'fraudError', snake_case: 'fraud_error', ALL_CAP: 'FRAUD', cache key: 'severity:fraud:errId'.
 *   Model Identifier Format: 'fraud-error-{timestamp}'.
 *   Variations and Use Cases: Used for detecting unauthorized transactions or account misuse (e.g., in DndCoLab payment integrations). Triggers security alerts and audit logs in fluxr systems.
 *   Example Usage: DomsError.ts logging fraud errors for suspicious Stripe API activities in Trakfox.
 *
 * - 'hacking': Indicates detected or suspected hacking attempts.
 *   Classifications: OWASP Top Ten, NIST 800-53.
 *   Identifiers: lowercase: 'hacking', camelCase: 'hackingError', snake_case: 'hacking_error', ALL_CAP: 'HACKING', cache key: 'severity:hacking:errId'.
 *   Model Identifier Format: 'hacking-error-{timestamp}'.
 *   Variations and Use Cases: Used for XSS, SQL injection, or brute-force attempts; triggers immediate security analysis via securityAnalyzer. In fluxr, logs to monitoring drivers like Sentry.
 *   Example Usage: DomsClientError.tsx rendering hacking alerts for detected XSS attempts.
 *
 * - 'brutal': Indicates brute-force or aggressive attack attempts.
 *   Classifications: OWASP Rate Limiting, NIST 800-63B.
 *   Identifiers: lowercase: 'brutal', camelCase: 'brutalError', snake_case: 'brutal_error', ALL_CAP: 'BRUTAL', cache key: 'severity:brutal:errId'.
 *   Model Identifier Format: 'brutal-error-{timestamp}'.
 *   Variations and Use Cases: Used for rate-limited login attempts or DDoS-like activities; triggers throttling in ErrorManager.ts. In fluxr, logs to security drivers for real-time alerts.
 *   Example Usage: ErrorManager.ts throttling brutal errors for excessive login attempts in DndCoLab.
 *
 * - 'critical': Indicates system-wide failure requiring immediate action.
 *   Classifications: ISO 20000 (IT Service Management).
 *   Identifiers: lowercase: 'critical', camelCase: 'criticalError', snake_case: 'critical_error', ALL_CAP: 'CRITICAL', cache key: 'severity:critical:errId'.
 *   Model Identifier Format: 'critical-error-{timestamp}'.
 *   Variations and Use Cases: Used in production alerts; triggers immediate Slack notifications.
 *   Example Usage: ErrorBoundary.tsx rendering critical errors with red UI (#FF0000).
 *
 * - 'fatal': Unrecoverable error causing system crash.
 *   Classifications: Aligns with LogLevel.Fatal.
 *   Identifiers: lowercase: 'fatal', camelCase: 'fatalError', snake_case: 'fatal_error', ALL_CAP: 'FATAL', cache key: 'severity:fatal:errId'.
 *   Model Identifier Format: 'fatal-error-{timestamp}'.
 *   Variations and Use Cases: Used in server logs; triggers Vercel KV storage.
 *   Example Usage: DomsError.ts logging fatal errors to server.
 *
 * - 'error': Standard error requiring developer attention.
 *   Identifiers: lowercase: 'error', camelCase: 'standardError', snake_case: 'standard_error', ALL_CAP: 'ERROR', cache key: 'severity:error:errId'.
 *   Model Identifier Format: 'error-{timestamp}'.
 *   Example Usage: DomsClientError.tsx rendering user-facing error messages.
 *
 * - 'warn': Potential issue that may escalate if unaddressed.
 *   Identifiers: lowercase: 'warn', camelCase: 'warningError', snake_case: 'warning_error', ALL_CAP: 'WARN', cache key: 'severity:warn:errId'.
 *   Model Identifier Format: 'warn-error-{timestamp}'.
 *   Example Usage: Console warnings in development mode.
 *
 * - 'info': Informational message, no action required.
 *   Identifiers: lowercase: 'info', camelCase: 'infoMessage', snake_case: 'info_message', ALL_CAP: 'INFO', cache key: 'severity:info:errId'.
 *   Model Identifier Format: 'info-error-{timestamp}'.
 *   Example Usage: Logging successful operations in DomsError.ts.
 *
 * - 'debug': Developer-focused debug information.
 *   Identifiers: lowercase: 'debug', camelCase: 'debugMessage', snake_case: 'debug_message', ALL_CAP: 'DEBUG', cache key: 'severity:debug:errId'.
 *   Model Identifier Format: 'debug-error-{timestamp}'.
 *   Example Usage: Detailed logs in development environment.
 *
 * - 'expired': Error due to expired resources or sessions.
 *   Identifiers: lowercase: 'expired', camelCase: 'expiredError', snake_case: 'expired_error', ALL_CAP: 'EXPIRED', cache key: 'severity:expired:errId'.
 *   Model Identifier Format: 'expired-error-{timestamp}'.
 *   Example Usage: Session timeout errors in authentication flows.
 *
 * - 'update': Indicates need for system or dependency update.
 *   Identifiers: lowercase: 'update', camelCase: 'updateRequired', snake_case: 'update_required', ALL_CAP: 'UPDATE', cache key: 'severity:update:errId'.
 *   Model Identifier Format: 'update-error-{timestamp}'.
 *   Example Usage: Dependency version mismatch alerts.
 *
 * - 'alert': Urgent but non-critical notifications.
 *   Identifiers: lowercase: 'alert', camelCase: 'alertMessage', snake_case: 'alert_message', ALL_CAP: 'ALERT', cache key: 'severity:alert:errId'.
 *   Model Identifier Format: 'alert-error-{timestamp}'.
 *   Example Usage: UI alerts in DomsRouteError.tsx.
 *
 * - 'notice': Notable non-error events.
 *   Identifiers: lowercase: 'notice', camelCase: 'noticeMessage', snake_case: 'notice_message', ALL_CAP: 'NOTICE', cache key: 'severity:notice:errId'.
 *   Model Identifier Format: 'notice-error-{timestamp}'.
 *   Example Usage: Informational banners in UI.
 *
 * - 'trace': Step-by-step execution tracing for debugging.
 *   Identifiers: lowercase: 'trace', camelCase: 'traceLog', snake_case: 'trace_log', ALL_CAP: 'TRACE', cache key: 'severity:trace:errId'.
 *   Model Identifier Format: 'trace-error-{timestamp}'.
 *   Example Usage: Detailed stack traces in DomsError.ts.
 *
 * - 'low': Minor issues with minimal impact.
 *   Identifiers: lowercase: 'low', camelCase: 'lowPriority', snake_case: 'low_priority', ALL_CAP: 'LOW', cache key: 'severity:low:errId'.
 *   Model Identifier Format: 'low-error-{timestamp}'.
 *   Example Usage: Throttled logs in ErrorManager.ts.
 *
 * - 'medium': Operational issues with moderate impact.
 *   Identifiers: lowercase: 'medium', camelCase: 'mediumPriority', snake_case: 'medium_priority', ALL_CAP: 'MEDIUM', cache key: 'severity:medium:errId'.
 *   Model Identifier Format: 'medium-error-{timestamp}'.
 *   Example Usage: Performance warnings in production.
 *
 * - 'high': Urgent but recoverable issues.
 *   Identifiers: lowercase: 'high', camelCase: 'highPriority', snake_case: 'high_priority', ALL_CAP: 'HIGH', cache key: 'severity:high:errId'.
 *   Model Identifier Format: 'high-error-{timestamp}'.
 *   Example Usage: Retryable network errors in DomsClientError.tsx.
 *
 * - 'deprecation': Warnings for deprecated features.
 *   Identifiers: lowercase: 'deprecation', camelCase: 'deprecationWarning', snake_case: 'deprecation_warning', ALL_CAP: 'DEPRECATION', cache key: 'severity:deprecation:errId'.
 *   Model Identifier Format: 'deprecation-error-{timestamp}'.
 *   Example Usage: React 19.1+ deprecation notices.
 *
 * - 'experimental': Alerts for beta/experimental features.
 *   Identifiers: lowercase: 'experimental', camelCase: 'experimentalFeature', snake_case: 'experimental_feature', ALL_CAP: 'EXPERIMENTAL', cache key: 'severity:experimental:errId'.
 *   Model Identifier Format: 'experimental-error-{timestamp}'.
 *   Example Usage: Beta feature errors in DndCoLab integrations.
 *
 * - 'compliance': Regulatory or compliance violations.
 *   Identifiers: lowercase: 'compliance', camelCase: 'complianceIssue', snake_case: 'compliance_issue', ALL_CAP: 'COMPLIANCE', cache key: 'severity:compliance:errId'.
 *   Model Identifier Format: 'compliance-error-{timestamp}'.
 *   Example Usage: GDPR-related error logging.
 *
 * - 'maintenance': Scheduled maintenance notifications.
 *   Identifiers: lowercase: 'maintenance', camelCase: 'maintenanceNotice', snake_case: 'maintenance_notice', ALL_CAP: 'MAINTENANCE', cache key: 'severity:maintenance:errId'.
 *   Model Identifier Format: 'maintenance-error-{timestamp}'.
 *   Example Usage: Scheduled downtime alerts in UI.
 */
export type ErrorSeverityTaxonomy = CoreErrorSeverity | CustomErrorSeverity;
export type CoreErrorSeverity = 'fraud' | 'hacking' | 'brutal' | 'critical' | 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'expired' | 'update' | 'alert' | 'notice' | 'trace' | 'low' | 'medium' | 'high' | 'deprecation' | 'experimental' | 'compliance' | 'maintenance';
export type CustomErrorSeverity = string & { __severity?: 'CustomErrorSeverity' };