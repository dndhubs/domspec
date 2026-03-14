/**
 * Union type representing ColorErrorCode in the Trakfox ecosystem.
 * Defines standardized error codes for color-related issues in DOMSpec configurations.
 * Aligns with Trakfox error handling practices, supporting UI, terminal, and API scenarios in Trakfox, HealthOrb, and DnDHubs.
 *
 * - 'UNKNOWN_COLOR': Error for unrecognized or undefined color values.
 *   Classifications: Semantic error code (unknown_color).
 *   Identifiers: lowercase: 'unknown_color', camelCase: 'unknownColorError', snake_case: 'unknown_color_error', ALL_CAP: 'UNKNOWN_COLOR', cache key: 'color:error:unknown_color:portalId'.
 *   Model Identifier Format: 'unknown_color-{errorType}-{timestamp}'.
 *   Variations and Use Cases: For invalid color inputs in Trakfox form validations; in HealthOrb for patient UI errors; in DnDHubs for marketplace color mismatches.
 *   Example Usage: Styling an error message in Trakfox UI (e.g., <div style="background-color: #F44336">).
 *   @example '#F44336'
 *
 * - 'UNSUPPORTED_LEVEL': Warning for unsupported color support levels.
 *   Classifications: Semantic error code (unsupported_level); WCAG compliance warning.
 *   Identifiers: lowercase: 'unsupported_level', camelCase: 'unsupportedLevelError', snake_case: 'unsupported_level_error', ALL_CAP: 'UNSUPPORTED_LEVEL', cache key: 'color:error:unsupported_level:portalId'.
 *   Model Identifier Format: 'unsupported_level-{errorType}-{timestamp}'.
 *   Variations and Use Cases: For unsupported color levels in Trakfox terminal logs; in HealthOrb for accessibility warnings; in DnDHubs for CLI configuration errors.
 *   Example Usage: Styling a warning log in Trakfox terminal (e.g., console.log('\x1b[33mWarning: Unsupported color level\x1b[0m')).
 *   @example '#FFEB3B'
 *
 * - 'INVALID_FORMAT': Error for invalid color format inputs.
 *   Classifications: Semantic error code (invalid_format).
 *   Identifiers: lowercase: 'invalid_format', camelCase: 'invalidFormatError', snake_case: 'invalid_format_error', ALL_CAP: 'INVALID_FORMAT', cache key: 'color:error:invalid_format:portalId'.
 *   Model Identifier Format: 'invalid_format-{errorType}-{timestamp}'.
 *   Variations and Use Cases: For invalid color formats in Trakfox API responses; in HealthOrb for form input errors; in DnDHubs for product customization errors.
 *   Example Usage: Styling an error message in Trakfox UI (e.g., <div style="background-color: #FF5252">).
 *   @example '#FF5252'
 */
export type ColorErrorCodeTaxonomy = 'UNKNOWN_COLOR' | 'UNSUPPORTED_LEVEL' | 'INVALID_FORMAT';