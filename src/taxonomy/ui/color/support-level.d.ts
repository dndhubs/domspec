/**
 * Union type representing ColorSupportLevel in the DOMSpec ecosystem.
 * Defines standardized levels of color support for terminal/ANSI output and UI theming in DOMSpec configurations.
 * Aligns with ANSI standards for terminal compatibility and WCAG for accessibility, supporting DOMSpec, HealthOrb, and DnDHubs use cases.
 *
 * - '0': No color support, grayscale or monochrome output.
 *   Classifications: Semantic color support (none); ANSI no color; WCAG minimal compliance.
 *   Identifiers: lowercase: 'none', camelCase: 'noneSupport', snake_case: 'none_support', ALL_CAP: 'NONE', cache key: 'color:support:none:portalId'.
 *   Model Identifier Format: 'none-{shade}-{hex}'.
 *   Variations and Use Cases: For terminal monochrome output in DOMSpec logs; in HealthOrb for low-vision patient interfaces; in DnDHubs for minimal displays.
 *   Example Usage: Styling a grayscale log in DOMSpec terminal (e.g., console.log('\x1b[38;2;128;128;128mLog: No color\x1b[0m')).
 *   @example '#9E9E9E'
 *
 * - '1': Basic 16-color ANSI support for terminal and UI.
 *   Classifications: Semantic color support (basic); ANSI 16 colors; WCAG Level A compliance.
 *   Identifiers: lowercase: 'basic', camelCase: 'basicSupport', snake_case: 'basic_support', ALL_CAP: 'BASIC', cache key: 'color:support:basic:portalId'.
 *   Model Identifier Format: 'basic-{shade}-{hex}'.
 *   Variations and Use Cases: For basic ANSI colors in DOMSpec terminal logs; in HealthOrb for simple patient dashboards; in DnDHubs for minimal UI theming.
 *   Example Usage: Styling a basic red log in DOMSpec terminal (e.g., console.log('\x1b[31mLog: Error\x1b[0m')).
 *   @example '#F44336'
 *
 * - '2': 256-color ANSI support for extended palette.
 *   Classifications: Semantic color support (256); ANSI 256 colors; WCAG Level AA compliance.
 *   Identifiers: lowercase: '256', camelCase: 'twoFiveSixSupport', snake_case: '256_support', ALL_CAP: '256', cache key: 'color:support:256:portalId'.
 *   Model Identifier Format: '256-{shade}-{hex}'.
 *   Variations and Use Cases: For extended palette in DOMSpec terminal dashboards; in HealthOrb for accessible interfaces; in DnDHubs for product highlights.
 *   Example Usage: Styling a 256-color badge in DOMSpec terminal (e.g., console.log('\x1b[38;2;255;183;77mBadge: Highlight\x1b[0m')).
 *   @example '#FFB74D'
 *
 * - '3': True color (24-bit) support for full RGB spectrum.
 *   Classifications: Semantic color support (truecolor); ANSI true color; WCAG Level AAA compliance.
 *   Identifiers: lowercase: 'truecolor', camelCase: 'trueColorSupport', snake_case: 'truecolor_support', ALL_CAP: 'TRUECOLOR', cache key: 'color:support:truecolor:portalId'.
 *   Model Identifier Format: 'truecolor-{shade}-{hex}'.
 *   Variations and Use Cases: For high-contrast UI in DOMSpec terminal logs; in HealthOrb for vibrant patient visuals; in DnDHubs for rich product displays.
 *   Example Usage: Styling a true color toast in DOMSpec terminal (e.g., console.log('\x1b[38;2;129;199;132mToast: Success\x1b[0m')).
 *   @example '#81C784'
 */
export type ColorSupportLevelTaxonomy = 0 | 1 | 2 | 3;