/**
 * Union type representing ContentLayout in the Framr UI ecosystem, defining layouts for content components like 'mainContent', 'article', or sections.
 * These layouts align with Tailwind grid/flex for responsive content, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'single': Single column layout.
 *   Classifications: Layout (single); CSS block.
 *   Identifiers: lowercase: 'single', camelCase: 'singleLayout', snake_case: 'single_layout', ALL_CAP: 'SINGLE', cache key: 'layout:single:componentId'.
 *   Model Identifier Format: 'single-{width}-{align}' (kebab-case for CSS configs).
 *   Variations and Use Cases: Synonyms: 'column'; for articles in Trakfox or blog posts; validate via `isValidLayout(layout)`.
 *   Example Usage: <MainContentPortal layout='single'> with 'flex flex-col w-full'.
 *
 * - 'split': Split view layout.
 *   Classifications: Layout (split).
 *   Identifiers: lowercase: 'split', camelCase: 'splitLayout', snake_case: 'split_layout', ALL_CAP: 'SPLIT', cache key: 'layout:split:componentId'.
 *   Model Identifier Format: 'split-{ratio}-{direction}'.
 *   Variations and Use Cases: For comparisons in HealthOrb or two-column pages.
 *   Example Usage: 'grid grid-cols-2 gap-4'.
 *
 * - 'grid': Grid-based layout.
 *   Classifications: Layout (grid).
 *   Identifiers: lowercase: 'grid', camelCase: 'gridLayout', snake_case: 'grid_layout', ALL_CAP: 'GRID', cache key: 'layout:grid:componentId'.
 *   Model Identifier Format: 'grid-{cols}-{gap}'.
 *   Variations and Use Cases: For galleries in DnDHubs or card grids.
 *   Example Usage: 'grid grid-cols-3 gap-4'.
 *
 * - 'masonry': Masonry staggered grid.
 *   Classifications: Layout (masonry).
 *   Identifiers: lowercase: 'masonry', camelCase: 'masonryLayout', snake_case: 'masonry_layout', ALL_CAP: 'MASONRY', cache key: 'layout:masonry:componentId'.
 *   Model Identifier Format: 'masonry-{cols}-{gap}'.
 *   Variations and Use Cases: For pins in GEOCoLab or staggered content.
 *   Example Usage: 'columns-3 gap-4' with masonry polyfill.
 *
 * - 'list': List view layout.
 *   Classifications: Layout (list).
 *   Identifiers: lowercase: 'list', camelCase: 'listLayout', snake_case: 'list_layout', ALL_CAP: 'LIST', cache key: 'layout:list:componentId'.
 *   Model Identifier Format: 'list-{ordered}-{bullet}'.
 *   Variations and Use Cases: For feeds in Trakfox or ordered lists.
 *   Example Usage: 'flex flex-col divide-y'.
 *
 * - 'cards': Card grid layout.
 *   Classifications: Layout (cards).
 *   Identifiers: lowercase: 'cards', camelCase: 'cardsLayout', snake_case: 'cards_layout', ALL_CAP: 'CARDS', cache key: 'layout:cards:componentId'.
 *   Model Identifier Format: 'cards-{cols}-{gap}'.
 *   Variations and Use Cases: For dashboards in HealthOrb or product cards.
 *   Example Usage: 'grid grid-cols-4 gap-6'.
 */
export type ContentLayoutTaxonomy = 'single' | 'split' | 'grid' | 'masonry' | 'list' | 'cards';