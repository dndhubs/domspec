/**
 * Union type representing PortalBreakpoint in the Framr UI ecosystem, defining responsive thresholds for media queries in Tailwind CSS.
 * These breakpoints align with standard device sizes and Remix responsive patterns, used for layout adjustments across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'xs': Extra small (e.g., <320px).
 *   Classifications: Breakpoint (xs); aligns with Tailwind xs.
 *   Identifiers: lowercase: 'xs', camelCase: 'extraSmallBreakpoint', snake_case: 'extra_small_breakpoint', ALL_CAP: 'XS', cache key: 'breakpoint:xs:portalId'.
 *   Model Identifier Format: 'xs-{min}-{max}' (kebab-case for queries).
 *   Variations and Use Cases: Synonyms: 'mobile-xs'; for tiny screens in Trakfox.
 *   Example Usage: '@media (min-width: 320px)'.
 *
 * - 'sm': Small (e.g., 640px+).
 *   Classifications: Breakpoint (sm).
 *   Identifiers: lowercase: 'sm', camelCase: 'smallBreakpoint', snake_case: 'small_breakpoint', ALL_CAP: 'SM', cache key: 'breakpoint:sm:portalId'.
 *   Model Identifier Format: 'sm-{min}-{max}'.
 *   Variations and Use Cases: For mobiles in HealthOrb.
 *   Example Usage: 'sm:hidden' in Tailwind.
 *
 * - 'md': Medium (e.g., 768px+).
 *   Classifications: Breakpoint (md).
 *   Identifiers: lowercase: 'md', camelCase: 'mediumBreakpoint', snake_case: 'medium_breakpoint', ALL_CAP: 'MD', cache key: 'breakpoint:md:portalId'.
 *   Model Identifier Format: 'md-{min}-{max}'.
 *   Variations and Use Cases: For tablets in DnDHubs.
 *   Example Usage: 'md:grid-cols-2'.
 *
 * - 'lg': Large (e.g., 1024px+).
 *   Classifications: Breakpoint (lg).
 *   Identifiers: lowercase: 'lg', camelCase: 'largeBreakpoint', snake_case: 'large_breakpoint', ALL_CAP: 'LG', cache key: 'breakpoint:lg:portalId'.
 *   Model Identifier Format: 'lg-{min}-{max}'.
 *   Variations and Use Cases: For desktops in GEOCoLab.
 *   Example Usage: 'lg:flex'.
 *
 * - 'xl': Extra large (e.g., 1280px+).
 *   Classifications: Breakpoint (xl).
 *   Identifiers: lowercase: 'xl', camelCase: 'extraLargeBreakpoint', snake_case: 'extra_large_breakpoint', ALL_CAP: 'XL', cache key: 'breakpoint:xl:portalId'.
 *   Model Identifier Format: 'xl-{min}-{max}'.
 *   Variations and Use Cases: For wide screens.
 *   Example Usage: 'xl:text-xl'.
 *
 * - '2xl': Double extra large (e.g., 1536px+).
 *   Classifications: Breakpoint (2xl).
 *   Identifiers: lowercase: '2xl', camelCase: 'doubleExtraLargeBreakpoint', snake_case: 'double_extra_large_breakpoint', ALL_CAP: '2XL', cache key: 'breakpoint:2xl:portalId'.
 *   Model Identifier Format: '2xl-{min}-{max}'.
 *   Variations and Use Cases: For 4K displays.
 *   Example Usage: '2xl:p-8'.
 *
 * - 'all': Apply to all breakpoints.
 *   Classifications: Breakpoint (all).
 *   Identifiers: lowercase: 'all', camelCase: 'allBreakpoint', snake_case: 'all_breakpoint', ALL_CAP: 'ALL', cache key: 'breakpoint:all:portalId'.
 *   Model Identifier Format: 'all-{styles}-{overrides}'.
 *   Variations and Use Cases: For base styles.
 *   Example Usage: Base CSS without media.
 *
 * - 'mobile': Mobile devices (sm and below).
 *   Classifications: Breakpoint (mobile).
 *   Identifiers: lowercase: 'mobile', camelCase: 'mobileBreakpoint', snake_case: 'mobile_breakpoint', ALL_CAP: 'MOBILE', cache key: 'breakpoint:mobile:portalId'.
 *   Model Identifier Format: 'mobile-{min}-{max}'.
 *   Variations and Use Cases: Synonyms: 'handheld'; for touch optimizations.
 *   Example Usage: Custom query for <768px.
 *
 * - 'tablet': Tablet devices (md to lg).
 *   Classifications: Breakpoint (tablet).
 *   Identifiers: lowercase: 'tablet', camelCase: 'tabletBreakpoint', snake_case: 'tablet_breakpoint', ALL_CAP: 'TABLET', cache key: 'breakpoint:tablet:portalId'.
 *   Model Identifier Format: 'tablet-{min}-{max}'.
 *   Variations and Use Cases: For portrait/landscape.
 *   Example Usage: '@media (min-width: 768px)'.
 *
 * - 'desktop': Desktop devices (lg+).
 *   Classifications: Breakpoint (desktop).
 *   Identifiers: lowercase: 'desktop', camelCase: 'desktopBreakpoint', snake_case: 'desktop_breakpoint', ALL_CAP: 'DESKTOP', cache key: 'breakpoint:desktop:portalId'.
 *   Model Identifier Format: 'desktop-{min}-{max}'.
 *   Variations and Use Cases: For wide layouts.
 *   Example Usage: 'lg:block'.
 */
export type PortalBreakpointTaxonomy = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all' | 'mobile' | 'tablet' | 'desktop';