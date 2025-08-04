/**
 * Union type representing PortalVariant in the Framr UI ecosystem, defining style flavors for visual customization in components via @framr/theme.
 * These variants align with Material UI/Ant Design patterns for filled/outlined styles, used for buttons/modals across PortalKeys.
 * Each variant includes details for consistency in storage (e.g., theme overrides in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'filled': Solid background fill.
 *   Classifications: Variant style (filled); aligns with Material UI filled, Bootstrap solid.
 *   Identifiers: lowercase: 'filled', camelCase: 'filledVariant', snake_case: 'filled_variant', ALL_CAP: 'FILLED', cache key: 'variant:filled:portalId'.
 *   Model Identifier Format: 'filled-{color}-{opacity}' (kebab-case for style storage).
 *   Variations and Use Cases: Synonyms: 'solid'; for primary buttons in Trakfox.
 *   Example Usage: Button variant='filled' with 'bg-primary'.
 *
 * - 'outlined': Bordered with transparent background.
 *   Classifications: Variant style (outlined).
 *   Identifiers: lowercase: 'outlined', camelCase: 'outlinedVariant', snake_case: 'outlined_variant', ALL_CAP: 'OUTLINED', cache key: 'variant:outlined:portalId'.
 *   Model Identifier Format: 'outlined-{border}-{color}'.
 *   Variations and Use Cases: For secondary actions in HealthOrb.
 *   Example Usage: 'border-2 border-primary text-primary'.
 *
 * - 'ghost': Transparent with visible text/icon.
 *   Classifications: Variant style (ghost).
 *   Identifiers: lowercase: 'ghost', camelCase: 'ghostVariant', snake_case: 'ghost_variant', ALL_CAP: 'GHOST', cache key: 'variant:ghost:portalId'.
 *   Model Identifier Format: 'ghost-{hover}-{color}'.
 *   Variations and Use Cases: Synonyms: 'text'; for subtle links in DnDHubs.
 *   Example Usage: 'bg-transparent hover:bg-gray-100'.
 *
 * - 'soft': Soft background with subtle fill.
 *   Classifications: Variant style (soft).
 *   Identifiers: lowercase: 'soft', camelCase: 'softVariant', snake_case: 'soft_variant', ALL_CAP: 'SOFT', cache key: 'variant:soft:portalId'.
 *   Model Identifier Format: 'soft-{alpha}-{color}'.
 *   Variations and Use Cases: For alerts in GEOCoLab.
 *   Example Usage: 'bg-primary-100 text-primary'.
 *
 * - 'solid': Fully solid without borders.
 *   Classifications: Variant style (solid).
 *   Identifiers: lowercase: 'solid', camelCase: 'solidVariant', snake_case: 'solid_variant', ALL_CAP: 'SOLID', cache key: 'variant:solid:portalId'.
 *   Model Identifier Format: 'solid-{color}-{shade}'.
 *   Variations and Use Cases: For cards in Trakfox dashboards.
 *   Example Usage: 'bg-primary border-none'.
 *
 * - 'gradient': Gradient background.
 *   Classifications: Variant style (gradient).
 *   Identifiers: lowercase: 'gradient', camelCase: 'gradientVariant', snake_case: 'gradient_variant', ALL_CAP: 'GRADIENT', cache key: 'variant:gradient:portalId'.
 *   Model Identifier Format: 'gradient-{from}-{to}'.
 *   Variations and Use Cases: For heroes in landings.
 *   Example Usage: 'bg-gradient-to-r from-primary to-secondary'.
 *
 * - 'glass': Glassmorphism with blur.
 *   Classifications: Variant style (glass).
 *   Identifiers: lowercase: 'glass', camelCase: 'glassVariant', snake_case: 'glass_variant', ALL_CAP: 'GLASS', cache key: 'variant:glass:portalId'.
 *   Model Identifier Format: 'glass-{blur}-{opacity}'.
 *   Variations and Use Cases: For modals in modern UIs.
 *   Example Usage: 'backdrop-blur-md bg-white/30'.
 *
 * - 'elevated': With shadow for depth.
 *   Classifications: Variant style (elevated).
 *   Identifiers: lowercase: 'elevated', camelCase: 'elevatedVariant', snake_case: 'elevated_variant', ALL_CAP: 'ELEVATED', cache key: 'variant:elevated:portalId'.
 *   Model Identifier Format: 'elevated-{shadow}-{level}'.
 *   Variations and Use Cases: For cards in dashboards.
 *   Example Usage: 'shadow-md'.
 *
 * - 'flat': No shadow or border.
 *   Classifications: Variant style (flat).
 *   Identifiers: lowercase: 'flat', camelCase: 'flatVariant', snake_case: 'flat_variant', ALL_CAP: 'FLAT', cache key: 'variant:flat:portalId'.
 *   Model Identifier Format: 'flat-{color}-{hover}'.
 *   Variations and Use Cases: For minimal designs.
 *   Example Usage: 'bg-transparent border-none'.
 *
 * - 'minimal': Stripped-down style.
 *   Classifications: Variant style (minimal).
 *   Identifiers: lowercase: 'minimal', camelCase: 'minimalVariant', snake_case: 'minimal_variant', ALL_CAP: 'MINIMAL', cache key: 'variant:minimal:portalId'.
 *   Model Identifier Format: 'minimal-{padding}-{border}'.
 *   Variations and Use Cases: For toolbars in HealthOrb.
 *   Example Usage: 'p-0 border-0'.
 */
export type PortalVariantTaxonomy = 'filled' | 'outlined' | 'ghost' | 'soft' | 'solid' | 'gradient' | 'glass' | 'elevated' | 'flat' | 'minimal';