/**
 * Union type representing PortalColor in the Framr UI ecosystem, defining semantic colors for theme integration via @framr/theme and Tailwind CSS.
 * These colors align with design systems like Material UI (palette modes) and WCAG for contrast, used for backgrounds, text, accents in components across PortalKeys.
 * Each variant includes details for consistency in storage (e.g., theme configs in JSON/PostgreSQL) and validation (e.g., regex in @framr/utils).
 *
 * - 'primary': Main brand color for actions/buttons.
 * Classifications: Semantic color (primary); aligns with WCAG AA contrast, Material UI primary palette.
 * Identifiers: lowercase: 'primary', camelCase: 'primaryColor', snake_case: 'primary_color', ALL_CAP: 'PRIMARY', cache key: 'color:primary:portalId'.
 * Model Identifier Format: 'primary-{shade}-{hex}' (kebab-case for theme storage in PostgreSQL).
 * Variations and Use Cases: Synonyms: 'main', 'brandPrimary'; used in buttons/modals for Trakfox CTAs or HealthOrb accents; validate via utility like `isValidColor(color)` for theme compliance.
 * Example Usage: <FramrPortal color='primary'> for themed modals in Framr apps.
 * @example '#2196f3'
 *
 * - 'secondary': Supporting color for secondary actions.
 * Classifications: Semantic color (secondary); WCAG compliant.
 * Identifiers: lowercase: 'secondary', camelCase: 'secondaryColor', snake_case: 'secondary_color', ALL_CAP: 'SECONDARY', cache key: 'color:secondary:portalId'.
 * Model Identifier Format: 'secondary-{shade}-{hex}' (kebab-case for configs).
 * Variations and Use Cases: Synonyms: 'accent'; for links in DnDHubs navigation.
 * Example Usage: Button variant='secondary' in Tailwind 'bg-secondary-500'.
 * @example '#EC8B5E'
 *
 * - 'accent': Highlight color for emphasis.
 * Classifications: Semantic color (accent).
 * Identifiers: lowercase: 'accent', camelCase: 'accentColor', snake_case: 'accent_color', ALL_CAP: 'ACCENT', cache key: 'color:accent:portalId'.
 * Model Identifier Format: 'accent-{shade}-{hex}'.
 * Variations and Use Cases: For badges in GEOCoLab dashboards.
 * Example Usage: Highlight text with 'text-accent'.
 * @example '#FFB74D'
 *
 * - 'neutral': Base gray-scale for backgrounds/text.
 * Classifications: Semantic color (neutral).
 * Identifiers: lowercase: 'neutral', camelCase: 'neutralColor', snake_case: 'neutral_color', ALL_CAP: 'NEUTRAL', cache key: 'color:neutral:portalId'.
 * Model Identifier Format: 'neutral-{shade}-{hex}'.
 * Variations and Use Cases: Synonyms: 'gray'; for cards in Trakfox.
 * Example Usage: 'bg-neutral-100' for panels.
 * @example '#E0E0E0'
 *
 * - 'success': Positive feedback color (green).
 * Classifications: Semantic color (success); WCAG for states.
 * Identifiers: lowercase: 'success', camelCase: 'successColor', snake_case: 'success_color', ALL_CAP: 'SUCCESS', cache key: 'color:success:portalId'.
 * Model Identifier Format: 'success-{shade}-{hex}'.
 * Variations and Use Cases: For toasts in HealthOrb confirmations.
 * Example Usage: 'bg-success-500' for alerts.
 * @example '#81C784'
 *
 * - 'warn': Caution color (yellow).
 * Classifications: Semantic color (warning).
 * Identifiers: lowercase: 'warning', camelCase: 'warningColor', snake_case: 'warning_color', ALL_CAP: 'WARNING', cache key: 'color:warning:portalId'.
 * Model Identifier Format: 'warning-{shade}-{hex}'.
 * Variations and Use Cases: For validations in forms.
 * Example Usage: 'text-warning' for messages.
 * @example '#FFD54F'
 *
 * - 'error': Negative feedback color (red).
 * Classifications: Semantic color (error).
 * Identifiers: lowercase: 'error', camelCase: 'errorColor', snake_case: 'error_color', ALL_CAP: 'ERROR', cache key: 'color:error:portalId'.
 * Model Identifier Format: 'error-{shade}-{hex}'.
 * Variations and Use Cases: For errors in DnDHubs.
 * Example Usage: 'border-error' for inputs.
 * @example '#E57373'
 *
 * - 'info': Informational color (blue).
 * Classifications: Semantic color (info).
 * Identifiers: lowercase: 'info', camelCase: 'infoColor', snake_case: 'info_color', ALL_CAP: 'INFO', cache key: 'color:info:portalId'.
 * Model Identifier Format: 'info-{shade}-{hex}'.
 * Variations and Use Cases: For tooltips in GEOCoLab.
 * Example Usage: 'bg-info-200' for banners.
 * @example '#64B5F6'
 *
 * - 'inherit': Inherit from parent.
 * Classifications: Semantic color (inherit).
 * Identifiers: lowercase: 'inherit', camelCase: 'inheritColor', snake_case: 'inherit_color', ALL_CAP: 'INHERIT', cache key: 'color:inherit:portalId'.
 * Model Identifier Format: 'inherit-{parent}-{hex}' such as 'inherit-primary-5C6BC0'.
 * Variations and Use Cases: For nested components.
 * Example Usage: 'color-inherit' in child elements.
 *
 * - 'transparent': No color (transparent).
 * Classifications: Semantic color (transparent).
 * Identifiers: lowercase: 'transparent', camelCase: 'transparentColor', snake_case: 'transparent_color', ALL_CAP: 'TRANSPARENT', cache key: 'color:transparent:portalId'.
 * Model Identifier Format: 'transparent-{alpha}-{hex}' such as 'transparent-70-F0F0F0'.
 * Variations and Use Cases: For overlays/backdrops.
 * Example Usage: 'bg-transparent' for modals.
 *
 * - 'inverse': Inverted colors for dark/light modes.
 * Classifications: Semantic color (inverse).
 * Identifiers: lowercase: 'inverse', camelCase: 'inverseColor', snake_case: 'inverse_color', ALL_CAP: 'INVERSE', cache key: 'color:inverse:portalId'.
 * Model Identifier Format: 'inverse-{mode}-{hex}' such as 'inverse-dark-F5F5F5'.
 * Variations and Use Cases: For theme switching.
 * Example Usage: 'text-inverse' in dark mode.
 *
 */
export type PortalColorTaxonomy = CorePortalColorTaxonomy | CustomPortalColor;
export type CorePortalColorTaxonomy = 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warn' | 'error' | 'info' | 'inherit' | 'transparent' | 'inverse';
export type CustomPortalColor = string & { __brand?: 'CustomPortalColor' };