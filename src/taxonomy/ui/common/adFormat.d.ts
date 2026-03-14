/**
 * Union type representing AdFormat in the Framr UI ecosystem, defining ad formats for advertising components like 'headerAd', 'sidebarAd', or banners.
 * These formats align with IAB standards for monetization, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., ad configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'banner': Horizontal banner ad.
 *   Classifications: Ad format (banner); IAB banner standard.
 *   Identifiers: lowercase: 'banner', camelCase: 'bannerFormat', snake_case: 'banner_format', ALL_CAP: 'BANNER', cache key: 'adformat:banner:componentId'.
 *   Model Identifier Format: 'banner-{width}-{height}' (kebab-case for ad slots).
 *   Variations and Use Cases: Synonyms: 'leaderboard'; for header ads in Trakfox or top banners; validate via `isValidAdFormat(format)`.
 *   Example Usage: <HeaderAdPortal format='banner'> with 728x90 iframe.
 *
 * - 'square': Square ad unit.
 *   Classifications: Ad format (square).
 *   Identifiers: lowercase: 'square', camelCase: 'squareFormat', snake_case: 'square_format', ALL_CAP: 'SQUARE', cache key: 'adformat:square:componentId'.
 *   Model Identifier Format: 'square-{size}-{ratio}'.
 *   Variations and Use Cases: For sidebar ads in HealthOrb or small placements.
 *   Example Usage: 250x250 ad unit.
 *
 * - 'skyscraper': Vertical tall ad.
 *   Classifications: Ad format (skyscraper).
 *   Identifiers: lowercase: 'skyscraper', camelCase: 'skyscraperFormat', snake_case: 'skyscraper_format', ALL_CAP: 'SKYSCRAPER', cache key: 'adformat:skyscraper:componentId'.
 *   Model Identifier Format: 'skyscraper-{height}-{width}'.
 *   Variations and Use Cases: For right sidebars in DnDHubs or vertical banners.
 *   Example Usage: 160x600 ad unit.
 *
 * - 'rectangle': Rectangular ad.
 *   Classifications: Ad format (rectangle).
 *   Identifiers: lowercase: 'rectangle', camelCase: 'rectangleFormat', snake_case: 'rectangle_format', ALL_CAP: 'RECTANGLE', cache key: 'adformat:rectangle:componentId'.
 *   Model Identifier Format: 'rectangle-{medium}-{large}'.
 *   Variations and Use Cases: For in-content ads in GEOCoLab or medium placements.
 *   Example Usage: 300x250 ad unit.
 *
 * - 'leaderboard': Wide banner ad.
 *   Classifications: Ad format (leaderboard).
 *   Identifiers: lowercase: 'leaderboard', camelCase: 'leaderboardFormat', snake_case: 'leaderboard_format', ALL_CAP: 'LEADERBOARD', cache key: 'adformat:leaderboard:componentId'.
 *   Model Identifier Format: 'leaderboard-{width}-{height}'.
 *   Variations and Use Cases: For footer ads in Trakfox or wide banners.
 *   Example Usage: 728x90 at page top/bottom.
 *
 * - 'native': Native blended ad.
 *   Classifications: Ad format (native); IAB native standard.
 *   Identifiers: lowercase: 'native', camelCase: 'nativeFormat', snake_case: 'native_format', ALL_CAP: 'NATIVE', cache key: 'adformat:native:componentId'.
 *   Model Identifier Format: 'native-{content}-{sponsored}'.
 *   Variations and Use Cases: For in-content ads in HealthOrb or sponsored posts.
 *   Example Usage: Blended with article style in content flow.
 */
export type AdFormatTaxonomy = 'banner' | 'square' | 'skyscraper' | 'rectangle' | 'leaderboard' | 'native';