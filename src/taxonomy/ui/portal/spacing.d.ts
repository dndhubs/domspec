/**
 * Union type representing PortalSpacing in the Framr UI ecosystem, defining padding/margin presets using theme units in Tailwind CSS.
 * These spacings align with Material UI spacing scales, used for margins/paddings across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'none': No spacing.
 *   Classifications: Spacing preset (none).
 *   Identifiers: lowercase: 'none', camelCase: 'noSpacing', snake_case: 'no_spacing', ALL_CAP: 'NONE', cache key: 'spacing:none:portalId'.
 *   Model Identifier Format: 'none-{unit}-{value}' (kebab-case for zeros).
 *   Variations and Use Cases: Synonyms: '0'; for tight layouts in Trakfox.
 *   Example Usage: 'p-none' or 'p-0'.
 *
 * - 'xs': Extra small spacing.
 *   Classifications: Spacing preset (xs).
 *   Identifiers: lowercase: 'xs', camelCase: 'extraSmallSpacing', snake_case: 'extra_small_spacing', ALL_CAP: 'XS', cache key: 'spacing:xs:portalId'.
 *   Model Identifier Format: 'xs-{unit}-{value}'.
 *   Variations and Use Cases: For icons in HealthOrb.
 *   Example Usage: 'm-xs' with 'm-1'.
 *
 * - 'sm': Small spacing.
 *   Classifications: Spacing preset (sm).
 *   Identifiers: lowercase: 'sm', camelCase: 'smallSpacing', snake_case: 'small_spacing', ALL_CAP: 'SM', cache key: 'spacing:sm:portalId'.
 *   Model Identifier Format: 'sm-{unit}-{value}'.
 *   Variations and Use Cases: For buttons in DnDHubs.
 *   Example Usage: 'p-sm' with 'p-2'.
 *
 * - 'md': Medium spacing.
 *   Classifications: Spacing preset (md).
 *   Identifiers: lowercase: 'md', camelCase: 'mediumSpacing', snake_case: 'medium_spacing', ALL_CAP: 'MD', cache key: 'spacing:md:portalId'.
 *   Model Identifier Format: 'md-{unit}-{value}'.
 *   Variations and Use Cases: Default for cards.
 *   Example Usage: 'gap-md' with 'gap-4'.
 *
 * - 'lg': Large spacing.
 *   Classifications: Spacing preset (lg).
 *   Identifiers: lowercase: 'lg', camelCase: 'largeSpacing', snake_case: 'large_spacing', ALL_CAP: 'LG', cache key: 'spacing:lg:portalId'.
 *   Model Identifier Format: 'lg-{unit}-{value}'.
 *   Variations and Use Cases: For sections in GEOCoLab.
 *   Example Usage: 'm-lg' with 'm-6'.
 *
 * - 'xl': Extra large spacing.
 *   Classifications: Spacing preset (xl).
 *   Identifiers: lowercase: 'xl', camelCase: 'extraLargeSpacing', snake_case: 'extra_large_spacing', ALL_CAP: 'XL', cache key: 'spacing:xl:portalId'.
 *   Model Identifier Format: 'xl-{unit}-{value}'.
 *   Variations and Use Cases: For heroes.
 *   Example Usage: 'p-xl' with 'p-8'.
 *
 * - '2xl': Double extra large.
 *   Classifications: Spacing preset (2xl).
 *   Identifiers: lowercase: '2xl', camelCase: 'doubleExtraLargeSpacing', snake_case: 'double_extra_large_spacing', ALL_CAP: '2XL', cache key: 'spacing:2xl:portalId'.
 *   Model Identifier Format: '2xl-{unit}-{value}'.
 *   Variations and Use Cases: For full paddings.
 *   Example Usage: 'gap-2xl' with 'gap-12'.
 *
 * - '3xl': Triple extra large.
 *   Classifications: Spacing preset (3xl).
 *   Identifiers: lowercase: '3xl', camelCase: 'tripleExtraLargeSpacing', snake_case: 'triple_extra_large_spacing', ALL_CAP: '3XL', cache key: 'spacing:3xl:portalId'.
 *   Model Identifier Format: '3xl-{unit}-{value}'.
 *   Variations and Use Cases: For sections in landings.
 *   Example Usage: 'm-3xl' with 'm-16'.
 */
export type PortalSpacingTaxonomy = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';