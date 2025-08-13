/**
 * Union type representing semantic color aliases for error severities in the Trakfox ecosystem.
 * Maps CoreErrorSeverity terms to standardized colors for consistent UI alerts and notifications.
 * Aligns with Material Design and ANSI standards, supporting Trakfox, HealthOrb, and DnDHubs use cases.
 *
 * - 'fraud': Indicates fraudulent activity, mapped to brightRed for high visibility.
 *   Classifications: Material Design (Red-A200), ANSI 91 (Bright Red).
 *   Identifiers: lowercase: 'fraud', camelCase: 'fraudColor', snake_case: 'fraud_color', ALL_CAP: 'FRAUD', cache key: 'color:fraud:ui'.
 *   Model Identifier Format: 'fraud-{resourceType}-{timestamp}' (e.g., 'fraud-alert-20250807').
 *   Variations and Use Cases: Used for fraud alerts in UI; in HealthOrb for security warnings; in DnDHubs for transaction flags.
 *   Example Usage: Styling a fraud alert in Trakfox (e.g., <div style="background-color: #ff5252">).
 *
 * - 'hacking': Indicates security breaches, mapped to brightRed for urgency.
 *   Classifications: Material Design (Red-A200), ANSI 91 (Bright Red).
 *   Identifiers: lowercase: 'hacking', camelCase: 'hackingColor', snake_case: 'hacking_color', ALL_CAP: 'HACKING', cache key: 'color:hacking:ui'.
 *   Model Identifier Format: 'hacking-{resourceType}-{timestamp}' (e.g., 'hacking-alert-20250807').
 *   Variations and Use Cases: Used for security breach notifications; in HealthOrb for data breach alerts; in DnDHubs for platform security.
 *   Example Usage: Styling a hacking alert in Trakfox (e.g., <div style="background-color: #ff5252">).
 *
 * - 'brutal': Indicates severe or high-impact errors, mapped to neonRed for emphasis.
 *   Classifications: Material Design (Red-A400), ANSI 31 (Red).
 *   Identifiers: lowercase: 'brutal', camelCase: 'brutalColor', snake_case: 'brutal_color', ALL_CAP: 'BRUTAL', cache key: 'color:brutal:ui'.
 *   Model Identifier Format: 'brutal-{resourceType}-{timestamp}' (e.g., 'brutal-error-20250807').
 *   Variations and Use Cases: Used for critical errors in gaming UIs; in HealthOrb for life-threatening alerts; in DnDHubs for urgent issues.
 *   Example Usage: Styling a critical error in Trakfox (e.g., <div style="background-color: #ff1744">).
 *
 * - 'critical': Indicates critical errors, mapped to errorRed for urgency.
 *   Classifications: Material Design (Red), ANSI 31 (Red).
 *   Identifiers: lowercase: 'critical', camelCase: 'criticalColor', snake_case: 'critical_color', ALL_CAP: 'CRITICAL', cache key: 'color:critical:ui'.
 *   Model Identifier Format: 'critical-{resourceType}-{timestamp}' (e.g., 'critical-alert-20250807').
 *   Variations and Use Cases: Used for critical system alerts; in HealthOrb for medical emergencies; in DnDHubs for payment failures.
 *   Example Usage: Styling a critical alert in Trakfox (e.g., <div style="background-color: #f44336">).
 *
 * - 'fatal': Indicates system-halting errors, mapped to errorRed for high urgency.
 *   Classifications: Material Design (Red), ANSI 31 (Red).
 *   Identifiers: lowercase: 'fatal', camelCase: 'fatalColor', snake_case: 'fatal_color', ALL_CAP: 'FATAL', cache key: 'color:fatal:ui'.
 *   Model Identifier Format: 'fatal-{resourceType}-{timestamp}' (e.g., 'fatal-error-20250807').
 *   Variations and Use Cases: Used for fatal system errors; in HealthOrb for critical failures; in DnDHubs for transaction halts.
 *   Example Usage: Styling a fatal error in Trakfox (e.g., <div style="background-color: #f44336">).
 *
 * - 'error': Indicates general errors, mapped to errorRed for clarity.
 *   Classifications: Material Design (Red), ANSI 31 (Red).
 *   Identifiers: lowercase: 'error', camelCase: 'errorColor', snake_case: 'error_color', ALL_CAP: 'ERROR', cache key: 'color:error:ui'.
 *   Model Identifier Format: 'error-{resourceType}-{timestamp}' (e.g., 'error-message-20250807').
 *   Variations and Use Cases: Used for error messages; in HealthOrb for form validation errors; in DnDHubs for order issues.
 *   Example Usage: Styling an error message in Trakfox (e.g., <div style="background-color: #f44336">).
 *
 * - 'warn': Indicates warnings, mapped to yellow for caution.
 *   Classifications: Material Design (Yellow), ANSI 33 (Yellow).
 *   Identifiers: lowercase: 'warn', camelCase: 'warnColor', snake_case: 'warn_color', ALL_CAP: 'WARN', cache key: 'color:warn:ui'.
 *   Model Identifier Format: 'warn-{resourceType}-{timestamp}' (e.g., 'warn-alert-20250807').
 *   Variations and Use Cases: Used for warning messages; in HealthOrb for non-critical alerts; in DnDHubs for stock warnings.
 *   Example Usage: Styling a warning in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'info': Indicates informational messages, mapped to lightBlue for neutrality.
 *   Classifications: Material Design (Light Blue), ANSI 38;2;41;182;246.
 *   Identifiers: lowercase: 'info', camelCase: 'infoColor', snake_case: 'info_color', ALL_CAP: 'INFO', cache key: 'color:info:ui'.
 *   Model Identifier Format: 'info-{resourceType}-{timestamp}' (e.g., 'info-message-20250807').
 *   Variations and Use Cases: Used for informational UI elements; in HealthOrb for patient info; in DnDHubs for product details.
 *   Example Usage: Styling an info message in Trakfox (e.g., <div style="background-color: #03a9f4">).
 *
 * - 'debug': Indicates debug-level logs, mapped to grey for low priority.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'debug', camelCase: 'debugColor', snake_case: 'debug_color', ALL_CAP: 'DEBUG', cache key: 'color:debug:ui'.
 *   Model Identifier Format: 'debug-{resourceType}-{timestamp}' (e.g., 'debug-log-20250807').
 *   Variations and Use Cases: Used for debug logs in consoles; in HealthOrb for diagnostic tools; in DnDHubs for developer tools.
 *   Example Usage: Styling a debug log in Trakfox console (e.g., <span style="color: #9e9e9e">).
 *
 * - 'expired': Indicates expired states, mapped to grey for neutrality.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'expired', camelCase: 'expiredColor', snake_case: 'expired_color', ALL_CAP: 'EXPIRED', cache key: 'color:expired:ui'.
 *   Model Identifier Format: 'expired-{resourceType}-{timestamp}' (e.g., 'expired-session-20250807').
 *   Variations and Use Cases: Used for expired sessions or tokens; in HealthOrb for expired prescriptions; in DnDHubs for expired offers.
 *   Example Usage: Styling an expired notice in Trakfox (e.g., <div style="background-color: #9e9e9e">).
 *
 * - 'update': Indicates update notifications, mapped to cyan for dynamic updates.
 *   Classifications: Material Design (Cyan), ANSI 36 (Cyan).
 *   Identifiers: lowercase: 'update', camelCase: 'updateColor', snake_case: 'update_color', ALL_CAP: 'UPDATE', cache key: 'color:update:ui'.
 *   Model Identifier Format: 'update-{resourceType}-{timestamp}' (e.g., 'update-notice-20250807').
 *   Variations and Use Cases: Used for update notifications; in HealthOrb for system updates; in DnDHubs for product updates.
 *   Example Usage: Styling an update notice in Trakfox (e.g., <div style="background-color: #00bcd4">).
 *
 * - 'alert': Indicates general alerts, mapped to brightYellow for visibility.
 *   Classifications: Material Design (Yellow), ANSI 93 (Bright Yellow).
 *   Identifiers: lowercase: 'alert', camelCase: 'alertColor', snake_case: 'alert_color', ALL_CAP: 'ALERT', cache key: 'color:alert:ui'.
 *   Model Identifier Format: 'alert-{resourceType}-{timestamp}' (e.g., 'alert-message-20250807').
 *   Variations and Use Cases: Used for general alerts; in HealthOrb for patient alerts; in DnDHubs for promotion alerts.
 *   Example Usage: Styling an alert in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'notice': Indicates notices, mapped to skyBlue for calm notifications.
 *   Classifications: Trakfox Custom, ANSI 38;5;81.
 *   Identifiers: lowercase: 'notice', camelCase: 'noticeColor', snake_case: 'notice_color', ALL_CAP: 'NOTICE', cache key: 'color:notice:ui'.
 *   Model Identifier Format: 'notice-{resourceType}-{timestamp}' (e.g., 'notice-message-20250807').
 *   Variations and Use Cases: Used for non-urgent notices; in HealthOrb for informational updates; in DnDHubs for community updates.
 *   Example Usage: Styling a notice in Trakfox (e.g., <div style="background-color: #22d3ee">).
 *
 * - 'trace': Indicates trace-level logs, mapped to grey for low priority.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'trace', camelCase: 'traceColor', snake_case: 'trace_color', ALL_CAP: 'TRACE', cache key: 'color:trace:ui'.
 *   Model Identifier Format: 'trace-{resourceType}-{timestamp}' (e.g., 'trace-log-20250807').
 *   Variations and Use Cases: Used for trace logs in consoles; in HealthOrb for diagnostic tracing; in DnDHubs for debugging.
 *   Example Usage: Styling a trace log in Trakfox console (e.g., <span style="color: #9e9e9e">).
 *
 * - 'low': Indicates low-severity issues, mapped to lightGreen for minimal urgency.
 *   Classifications: Material Design (Light Green), ANSI 38;2;156;204;101.
 *   Identifiers: lowercase: 'low', camelCase: 'lowColor', snake_case: 'low_color', ALL_CAP: 'LOW', cache key: 'color:low:ui'.
 *   Model Identifier Format: 'low-{resourceType}-{timestamp}' (e.g., 'low-issue-20250807').
 *   Variations and Use Cases: Used for low-priority issues; in HealthOrb for minor alerts; in DnDHubs for non-urgent notifications.
 *   Example Usage: Styling a low-priority issue in Trakfox (e.g., <div style="background-color: #8bc34a">).
 *
 * - 'medium': Indicates medium-severity issues, mapped to yellow for caution.
 *   Classifications: Material Design (Yellow), ANSI 33 (Yellow).
 *   Identifiers: lowercase: 'medium', camelCase: 'mediumColor', snake_case: 'medium_color', ALL_CAP: 'MEDIUM', cache key: 'color:medium:ui'.
 *   Model Identifier Format: 'medium-{resourceType}-{timestamp}' (e.g., 'medium-issue-20250807').
 *   Variations and Use Cases: Used for medium-priority issues; in HealthOrb for moderate alerts; in DnDHubs for stock warnings.
 *   Example Usage: Styling a medium-priority issue in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'high': Indicates high-severity issues, mapped to neonRed for emphasis.
 *   Classifications: Material Design (Red-A400), ANSI 31 (Red).
 *   Identifiers: lowercase: 'high', camelCase: 'highColor', snake_case: 'high_color', ALL_CAP: 'HIGH', cache key: 'color:high:ui'.
 *   Model Identifier Format: 'high-{resourceType}-{timestamp}' (e.g., 'high-issue-20250807').
 *   Variations and Use Cases: Used for high-priority issues; in HealthOrb for urgent alerts; in DnDHubs for critical promotions.
 *   Example Usage: Styling a high-priority issue in Trakfox (e.g., <div style="background-color: #ff1744">).
 *
 * - 'deprecation': Indicates deprecated features, mapped to yellow for caution.
 *   Classifications: Material Design (Yellow), ANSI 33 (Yellow).
 *   Identifiers: lowercase: 'deprecation', camelCase: 'deprecationColor', snake_case: 'deprecation_color', ALL_CAP: 'DEPRECATION', cache key: 'color:deprecation:ui'.
 *   Model Identifier Format: 'deprecation-{resourceType}-{timestamp}' (e.g., 'deprecation-notice-20250807').
 *   Variations and Use Cases: Used for deprecation warnings; in HealthOrb for legacy system alerts; in DnDHubs for outdated features.
 *   Example Usage: Styling a deprecation notice in Trakfox (e.g., <div style="background-color: #ffeb3b">).
 *
 * - 'experimental': Indicates experimental features, mapped to purple for innovation.
 *   Classifications: Material Design (Purple), ANSI 35 (Magenta).
 *   Identifiers: lowercase: 'experimental', camelCase: 'experimentalColor', snake_case: 'experimental_color', ALL_CAP: 'EXPERIMENTAL', cache key: 'color:experimental:ui'.
 *   Model Identifier Format: 'experimental-{resourceType}-{timestamp}' (e.g., 'experimental-feature-20250807').
 *   Variations and Use Cases: Used for experimental UI elements; in HealthOrb for beta features; in DnDHubs for new product trials.
 *   Example Usage: Styling an experimental feature in Trakfox (e.g., <div style="background-color: #9c27b0">).
 *
 * - 'compliance': Indicates compliance-related issues, mapped to teal for regulatory context.
 *   Classifications: Material Design (Teal), ANSI 38;5;44.
 *   Identifiers: lowercase: 'compliance', camelCase: 'complianceColor', snake_case: 'compliance_color', ALL_CAP: 'COMPLIANCE', cache key: 'color:compliance:ui'.
 *   Model Identifier Format: 'compliance-{resourceType}-{timestamp}' (e.g., 'compliance-report-20250807').
 *   Variations and Use Cases: Used for compliance alerts; in HealthOrb for regulatory reports; in DnDHubs for policy adherence.
 *   Example Usage: Styling a compliance report in Trakfox (e.g., <div style="background-color: #009688">).
 *
 * - 'maintenance': Indicates maintenance tasks, mapped to grey for neutrality.
 *   Classifications: Material Design (Grey), ANSI 38;2;128;128;128.
 *   Identifiers: lowercase: 'maintenance', camelCase: 'maintenanceColor', snake_case: 'maintenance_color', ALL_CAP: 'MAINTENANCE', cache key: 'color:maintenance:ui'.
 *   Model Identifier Format: 'maintenance-{resourceType}-{timestamp}' (e.g Maintenance', cache key: 'color:maintenance:ui'.
 *   Model Identifier Format: 'maintenance-{resourceType}-{timestamp}' (e.g., 'maintenance-task-20250807').
 *   Variations and Use Cases: Used for maintenance notifications; in HealthOrb for system upkeep; in DnDHubs for platform maintenance.
 *   Example Usage: Styling a maintenance notice in Trakfox (e.g., <div style="background-color: #9e9e9e">).
 */
export type ErrorColorSemanticTaxonomy = "error" | "warn" | "info" | "debug" | "notice" | "fatal" | "trace" | "expired" | "update" | "alert" | "deprecation" | "fraud" | "hacking" | "brutal" | "critical" | "low" | "medium" | "high" | "experimental" | "compliance" | "maintenance" | "verbose" |  "audit"  | "silly" | "performance" | "security" |  "metric" | "event" | "system";