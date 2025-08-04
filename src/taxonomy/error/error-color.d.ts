/**
 * Union type representing ErrorColorTaxonomy in the DOMSpec ecosystem.
 * Defines predefined hex/rgb/name values for severity indicators in @dndhub/error UI rendering.
 * Tied to ErrorSeverityTaxonomy: Each color maps to a severity level for visual consistency (e.g., '#FF0000' for 'critical').
 *
 * - '#FF0000': Red for critical/fatal errors.
 *   Classifications: UI color standards (Tailwind 'red-500').
 *   Identifiers: lowercase: '#ff0000', camelCase: 'redCritical', snake_case: 'red_critical', ALL_CAP: 'RED_CRITICAL', cache key: 'color:#ff0000:errId'.
 *   Model Identifier Format: 'color-red-critical-{timestamp}'.
 *   Variations and Use Cases: Hex format; used for high-severity UI alerts (severity: 'critical', 'fatal'). Supports rgb(255,0,0) equivalent.
 *   Example Usage: ErrorBoundary.tsx rendering critical errors with red background.
 *
 * - '#FFA500': Orange for high/warn errors.
 *   Classifications: UI color standards (Tailwind 'orange-500').
 *   Identifiers: lowercase: '#ffa500', camelCase: 'orangeHigh', snake_case: 'orange_high', ALL_CAP: 'ORANGE_HIGH', cache key: 'color:#ffa500:errId'.
 *   Model Identifier Format: 'color-orange-high-{timestamp}'.
 *   Variations and Use Cases: Hex format; for urgent recoverable issues (severity: 'high', 'warn'). RGB: rgb(255,165,0).
 *   Example Usage: DomsClientError.tsx highlighting warn errors in orange.
 *
 * - '#FFFF00': Yellow for medium/info errors.
 *   Classifications: UI color standards (Tailwind 'yellow-500').
 *   Identifiers: lowercase: '#ffff00', camelCase: 'yellowMedium', snake_case: 'yellow_medium', ALL_CAP: 'YELLOW_MEDIUM', cache key: 'color:#ffff00:errId'.
 *   Model Identifier Format: 'color-yellow-medium-{timestamp}'.
 *   Variations and Use Cases: Hex format; for operational notices (severity: 'medium', 'info'). RGB: rgb(255,255,0).
 *   Example Usage: Console warnings in yellow for info logs in DomsError.ts.
 *
 * - '#008000': Green for low/success notices.
 *   Classifications: UI color standards (Tailwind 'green-500').
 *   Identifiers: lowercase: '#008000', camelCase: 'greenLow', snake_case: 'green_low', ALL_CAP: 'GREEN_LOW', cache key: 'color:#008000:errId'.
 *   Model Identifier Format: 'color-green-low-{timestamp}'.
 *   Variations and Use Cases: Hex format; for minor issues or success (severity: 'low', 'notice'). RGB: rgb(0,128,0).
 *   Example Usage: Success banners in green for low-priority events in UI.
 *
 * - '#0000FF': Blue for debug/trace logs.
 *   Classifications: UI color standards (Tailwind 'blue-500').
 *   Identifiers: lowercase: '#0000ff', camelCase: 'blueDebug', snake_case: 'blue_debug', ALL_CAP: 'BLUE_DEBUG', cache key: 'color:#0000ff:errId'.
 *   Model Identifier Format: 'color-blue-debug-{timestamp}'.
 *   Variations and Use Cases: Hex format; for developer tracing (severity: 'debug', 'trace'). RGB: rgb(0,0,255).
 *   Example Usage: Debug stack traces in blue in DomsError.ts.
 *
 * - '#808080': Gray for deprecation/maintenance.
 *   Classifications: UI color standards (Tailwind 'gray-500').
 *   Identifiers: lowercase: '#808080', camelCase: 'grayDeprecation', snake_case: 'gray_deprecation', ALL_CAP: 'GRAY_DEPRECATION', cache key: 'color:#808080:errId'.
 *   Model Identifier Format: 'color-gray-deprecation-{timestamp}'.
 *   Variations and Use Cases: Hex format; for warnings/notifications (severity: 'deprecation', 'maintenance'). RGB: rgb(128,128,128).
 *   Example Usage: Deprecation notices in gray in DomsRouteError.tsx.
 *
 * - '#800080': Purple for security/compliance issues.
 *   Classifications: UI color standards (Tailwind 'purple-500').
 *   Identifiers: lowercase: '#800080', camelCase: 'purpleSecurity', snake_case: 'purple_security', ALL_CAP: 'PURPLE_SECURITY', cache key: 'color:#800080:errId'.
 *   Model Identifier Format: 'color-purple-security-{timestamp}'.
 *   Variations and Use Cases: Hex format; for security alerts (severity: 'fraud', 'hacking', 'brutal', 'compliance'). RGB: rgb(128,0,128).
 *   Example Usage: Security errors in purple via securityAnalyzer in DomsError.ts.
 *
 * - '#00FFFF': Cyan for experimental/update alerts.
 *   Classifications: UI color standards (Tailwind 'cyan-500').
 *   Identifiers: lowercase: '#00ffff', camelCase: 'cyanExperimental', snake_case: 'cyan_experimental', ALL_CAP: 'CYAN_EXPERIMENTAL', cache key: 'color:#00ffff:errId'.
 *   Model Identifier Format: 'color-cyan-experimental-{timestamp}'.
 *   Variations and Use Cases: Hex format; for beta features (severity: 'experimental', 'update'). RGB: rgb(0,255,255).
 *   Example Usage: Experimental feature alerts in cyan in DndCoLab integrations.
 *
 * - '#000000': Black for unknown/expired errors.
 *   Classifications: UI color standards (Tailwind 'black').
 *   Identifiers: lowercase: '#000000', camelCase: 'blackUnknown', snake_case: 'black_unknown', ALL_CAP: 'BLACK_UNKNOWN', cache key: 'color:#000000:errId'.
 *   Model Identifier Format: 'color-black-unknown-{timestamp}'.
 *   Variations and Use Cases: Hex format; for fallback/unclassified (severity: 'expired', default unknown). RGB: rgb(0,0,0).
 *   Example Usage: Expired session errors in black in authentication flows.
 */
export type ErrorColorTaxonomy = CoreErrorColor | CustomErrorColor;
export type CoreErrorColor = '#FF0000' | '#FFA500' | '#FFFF00' | '#008000' | '#0000FF' | '#808080' | '#800080' | '#00FFFF' | '#000000';
export type CustomErrorColor = string & { __color?: 'CustomErrorColor' };