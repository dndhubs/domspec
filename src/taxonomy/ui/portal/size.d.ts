/**
 * Union type representing PortalSize in the Framr UI ecosystem, defining size variants for responsive scaling in components via Tailwind CSS classes.
 * These sizes align with breakpoints in Remix apps and WCAG for readability, used for widths/heights across PortalKeys.
 * Each variant includes details for consistency in storage (e.g., layout configs in PostgreSQL) and validation (e.g., in @framr/utils).
 *
 * - 'xs': Extra small size for compact elements.
 *   Classifications: Size variant (xs); aligns with Tailwind xs, Bootstrap xs.
 *   Identifiers: lowercase: 'xs', camelCase: 'extraSmall', snake_case: 'extra_small', ALL_CAP: 'XS', cache key: 'size:xs:portalId'.
 *   Model Identifier Format: 'xs-{width}-{height}' (kebab-case for responsive storage).
 *   Variations and Use Cases: Synonyms: 'tiny'; for icons/tooltips in Trakfox.
 *   Example Usage: <FramrPortal size='xs'> for small modals.
 *
 * - 'sm': Small size for secondary elements.
 *   Classifications: Size variant (sm).
 *   Identifiers: lowercase: 'sm', camelCase: 'small', snake_case: 'small', ALL_CAP: 'SM', cache key: 'size:sm:portalId'.
 *   Model Identifier Format: 'sm-{width}-{height}'.
 *   Variations and Use Cases: For buttons in HealthOrb forms.
 *   Example Usage: Button size='sm' with 'text-sm'.
 *
 * - 'md': Medium/default size for standard use.
 *   Classifications: Size variant (md).
 *   Identifiers: lowercase: 'md', camelCase: 'medium', snake_case: 'medium', ALL_CAP: 'MD', cache key: 'size:md:portalId'.
 *   Model Identifier Format: 'md-{width}-{height}'.
 *   Variations and Use Cases: Default for cards in DnDHubs.
 *   Example Usage: 'h-md' for panels.
 *
 * - 'lg': Large size for emphasis.
 *   Classifications: Size variant (lg).
 *   Identifiers: lowercase: 'lg', camelCase: 'large', snake_case: 'large', ALL_CAP: 'LG', cache key: 'size:lg:portalId'.
 *   Model Identifier Format: 'lg-{width}-{height}'.
 *   Variations and Use Cases: For headers in GEOCoLab.
 *   Example Usage: Modal size='lg' with 'w-lg'.
 *
 * - 'xl': Extra large for prominent elements.
 *   Classifications: Size variant (xl).
 *   Identifiers: lowercase: 'xl', camelCase: 'extraLarge', snake_case: 'extra_large', ALL_CAP: 'XL', cache key: 'size:xl:portalId'.
 *   Model Identifier Format: 'xl-{width}-{height}'.
 *   Variations and Use Cases: For full-width banners.
 *   Example Usage: 'text-xl' for titles.
 *
 * - '2xl': Double extra large for oversized.
 *   Classifications: Size variant (2xl).
 *   Identifiers: lowercase: '2xl', camelCase: 'doubleExtraLarge', snake_case: 'double_extra_large', ALL_CAP: '2XL', cache key: 'size:2xl:portalId'.
 *   Model Identifier Format: '2xl-{width}-{height}'.
 *   Variations and Use Cases: For heroes in Trakfox landings.
 *   Example Usage: 'p-2xl' for spacing.
 *
 * - 'full': Full size (100% width/height).
 *   Classifications: Size variant (full).
 *   Identifiers: lowercase: 'full', camelCase: 'fullSize', snake_case: 'full_size', ALL_CAP: 'FULL', cache key: 'size:full:portalId'.
 *   Model Identifier Format: 'full-{viewport}-{direction}'.
 *   Variations and Use Cases: Synonyms: '100%'; for modals/overlays.
 *   Example Usage: 'w-full h-full' for fullscreens.
 *
 * - 'auto': Auto size based on content.
 *   Classifications: Size variant (auto).
 *   Identifiers: lowercase: 'auto', camelCase: 'autoSize', snake_case: 'auto_size', ALL_CAP: 'AUTO', cache key: 'size:auto:portalId'.
 *   Model Identifier Format: 'auto-{content}-{max}'.
 *   Variations and Use Cases: For dynamic widths in forms.
 *   Example Usage: 'width-auto' for inputs.
 *
 * - 'content': Size to fit content.
 *   Classifications: Size variant (content).
 *   Identifiers: lowercase: 'content', camelCase: 'contentSize', snake_case: 'content_size', ALL_CAP: 'CONTENT', cache key: 'size:content:portalId'.
 *   Model Identifier Format: 'content-{min}-{max}'.
 *   Variations and Use Cases: Synonyms: 'fit'; for tooltips/popovers.
 *   Example Usage: 'min-w-content' for dialogs.
 *
 * - 'viewport': Size to fit viewport.
 *   Classifications: Size variant (viewport).
 *   Identifiers: lowercase: 'viewport', camelCase: 'viewportSize', snake_case: 'viewport_size', ALL_CAP: 'VIEWPORT', cache key: 'size:viewport:portalId'.
 *   Model Identifier Format: 'viewport-{vh}-{vw}'.
 *   Variations and Use Cases: For full-screen modals.
 *   Example Usage: 'h-viewport' for overlays.
 */
export type PortalSizeTaxonomy = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'auto' | 'content' | 'viewport';