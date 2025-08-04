/**
 * Union type representing DashboardLayout in the Framr UI ecosystem, defining layouts for dashboard/analytic components like 'dashboardWidgets' or 'analytics'.
 * These layouts align with Tailwind grid/flex for responsive widgets, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'grid': Fixed grid layout.
 *   Classifications: Layout (grid); CSS grid.
 *   Identifiers: lowercase: 'grid', camelCase: 'gridLayout', snake_case: 'grid_layout', ALL_CAP: 'GRID', cache key: 'dashlayout:grid:componentId'.
 *   Model Identifier Format: 'grid-{cols}-{gap}' (kebab-case for CSS configs).
 *   Variations and Use Cases: Synonyms: 'fixedGrid'; for KPI cards in Trakfox or chart grids; validate via `isValidDashboardLayout(layout)`.
 *   Example Usage: <DashboardWidgetsPortal layout='grid'> with 'grid grid-cols-4 gap-4'.
 *
 * - 'flex': Flexible wrap layout.
 *   Classifications: Layout (flex).
 *   Identifiers: lowercase: 'flex', camelCase: 'flexLayout', snake_case: 'flex_layout', ALL_CAP: 'FLEX', cache key: 'dashlayout:flex:componentId'.
 *   Model Identifier Format: 'flex-{wrap}-{justify}'.
 *   Variations and Use Cases: For responsive widgets in HealthOrb or dynamic dashboards.
 *   Example Usage: 'flex flex-wrap gap-4'.
 *
 * - 'masonry': Masonry staggered grid.
 *   Classifications: Layout (masonry).
 *   Identifiers: lowercase: 'masonry', camelCase: 'masonryLayout', snake_case: 'masonry_layout', ALL_CAP: 'MASONRY', cache key: 'dashlayout:masonry:componentId'.
 *   Model Identifier Format: 'masonry-{cols}-{gap}'.
 *   Variations and Use Cases: For pins in DnDHubs or staggered analytics.
 *   Example Usage: 'columns-3 gap-4' with masonry polyfill.
 *
 * - 'fixed': Fixed positions layout.
 *   Classifications: Layout (fixed).
 *   Identifiers: lowercase: 'fixed', camelCase: 'fixedLayout', snake_case: 'fixed_layout', ALL_CAP: 'FIXED', cache key: 'dashlayout:fixed:componentId'.
 *   Model Identifier Format: 'fixed-{positions}-{z}'.
 *   Variations and Use Cases: For custom dashboards in GEOCoLab or static widgets.
 *   Example Usage: 'absolute positioning per widget'.
 *
 * - 'responsive': Auto-adjust on resize.
 *   Classifications: Layout (responsive).
 *   Identifiers: lowercase: 'responsive', camelCase: 'responsiveLayout', snake_case: 'responsive_layout', ALL_CAP: 'RESPONSIVE', cache key: 'dashlayout:responsive:componentId'.
 *   Model Identifier Format: 'responsive-{breakpoints}-{cols}'.
 *   Variations and Use Cases: For multi-device dashboards in Trakfox or analytics panels.
 *   Example Usage: 'grid md:grid-cols-3 sm:grid-cols-2'.
 */
export type DashboardLayoutTaxonomy = 'grid' | 'flex' | 'masonry' | 'fixed' | 'responsive';