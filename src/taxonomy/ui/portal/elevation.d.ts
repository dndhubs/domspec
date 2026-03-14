/**
 * Union type representing PortalElevation in the Framr UI ecosystem, defining shadow/z-index levels for depth in components via Tailwind CSS shadows.
 * These elevations align with Material UI dp levels and WCAG for visual hierarchy, used for cards/modals across PortalKeys.
 * Each variant includes details for consistency in storage and validation.
 *
 * - 0: No elevation (flat).
 *   Classifications: Elevation level (0); aligns with Material UI dp0.
 *   Identifiers: lowercase: '0', camelCase: 'elevation0', snake_case: 'elevation_0', ALL_CAP: 'ELEVATION_0', cache key: 'elevation:0:portalId'.
 *   Model Identifier Format: 'elevation-0-{shadow}-{z}' (kebab-case for styles).
 *   Variations and Use Cases: Synonyms: 'flat'; for backgrounds in Trakfox.
 *   Example Usage: 'shadow-none z-0'.
 *
 * - 1: Minimal elevation.
 *   Classifications: Elevation level (1).
 *   Identifiers: lowercase: '1', camelCase: 'elevation1', snake_case: 'elevation_1', ALL_CAP: 'ELEVATION_1', cache key: 'elevation:1:portalId'.
 *   Model Identifier Format: 'elevation-1-{shadow}-{z}'.
 *   Variations and Use Cases: For subtle cards in HealthOrb.
 *   Example Usage: 'shadow-sm z-10'.
 *
 * - 2: Low elevation.
 *   Classifications: Elevation level (2).
 *   Identifiers: lowercase: '2', camelCase: 'elevation2', snake_case: 'elevation_2', ALL_CAP: 'ELEVATION_2', cache key: 'elevation:2:portalId'.
 *   Model Identifier Format: 'elevation-2-{shadow}-{z}'.
 *   Variations and Use Cases: For buttons in DnDHubs.
 *   Example Usage: 'shadow z-20'.
 *
 * - 3: Standard elevation.
 *   Classifications: Elevation level (3).
 *   Identifiers: lowercase: '3', camelCase: 'elevation3', snake_case: 'elevation_3', ALL_CAP: 'ELEVATION_3', cache key: 'elevation:3:portalId'.
 *   Model Identifier Format: 'elevation-3-{shadow}-{z}'.
 *   Variations and Use Cases: For panels in GEOCoLab.
 *   Example Usage: 'shadow-md z-30'.
 *
 * - 4: Medium elevation.
 *   Classifications: Elevation level (4).
 *   Identifiers: lowercase: '4', camelCase: 'elevation4', snake_case: 'elevation_4', ALL_CAP: 'ELEVATION_4', cache key: 'elevation:4:portalId'.
 *   Model Identifier Format: 'elevation-4-{shadow}-{z}'.
 *   Variations and Use Cases: For modals.
 *   Example Usage: 'shadow-lg z-40'.
 *
 * - 5: High elevation.
 *   Classifications: Elevation level (5).
 *   Identifiers: lowercase: '5', camelCase: 'elevation5', snake_case: 'elevation_5', ALL_CAP: 'ELEVATION_5', cache key: 'elevation:5:portalId'.
 *   Model Identifier Format: 'elevation-5-{shadow}-{z}'.
 *   Variations and Use Cases: For tooltips.
 *   Example Usage: 'shadow-xl z-50'.
 *
 * - 6: Higher elevation.
 *   Classifications: Elevation level (6).
 *   Identifiers: lowercase: '6', camelCase: 'elevation6', snake_case: 'elevation_6', ALL_CAP: 'ELEVATION_6', cache key: 'elevation:6:portalId'.
 *   Model Identifier Format: 'elevation-6-{shadow}-{z}'.
 *   Variations and Use Cases: For overlays in Trakfox.
 *   Example Usage: 'shadow-2xl z-60'.
 *
 * - 8: Custom high elevation.
 *   Classifications: Elevation level (8).
 *   Identifiers: lowercase: '8', camelCase: 'elevation8', snake_case: 'elevation_8', ALL_CAP: 'ELEVATION_8', cache key: 'elevation:8:portalId'.
 *   Model Identifier Format: 'elevation-8-{shadow}-{z}'.
 *   Variations and Use Cases: For popovers.
 *   Example Usage: 'shadow-[0_4px_6px_rgba(0,0,0,0.1)] z-80'.
 *
 * - 12: Medium custom.
 *   Classifications: Elevation level (12).
 *   Identifiers: lowercase: '12', camelCase: 'elevation12', snake_case: 'elevation_12', ALL_CAP: 'ELEVATION_12', cache key: 'elevation:12:portalId'.
 *   Model Identifier Format: 'elevation-12-{shadow}-{z}'.
 *   Variations and Use Cases: For dialogs.
 *   Example Usage: 'shadow-[0_8px_12px_rgba(0,0,0,0.15)] z-120'.
 *
 * - 16: High custom.
 *   Classifications: Elevation level (16).
 *   Identifiers: lowercase: '16', camelCase: 'elevation16', snake_case: 'elevation_16', ALL_CAP: 'ELEVATION_16', cache key: 'elevation:16:portalId'.
 *   Model Identifier Format: 'elevation-16-{shadow}-{z}'.
 *   Variations and Use Cases: For drawers.
 *   Example Usage: 'shadow-[0_12px_16px_rgba(0,0,0,0.2)] z-160'.
 *
 * - 24: Maximum elevation.
 *   Classifications: Elevation level (24).
 *   Identifiers: lowercase: '24', camelCase: 'elevation24', snake_case: 'elevation_24', ALL_CAP: 'ELEVATION_24', cache key: 'elevation:24:portalId'.
 *   Model Identifier Format: 'elevation-24-{shadow}-{z}'.
 *   Variations and Use Cases: For full overlays.
 *   Example Usage: 'shadow-[0_16px_24px_rgba(0,0,0,0.25)] z-240'.
 */
export type PortalElevationTaxonomy = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12 | 16 | 24;