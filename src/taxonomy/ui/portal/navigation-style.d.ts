/**
 * Union type representing NavigationStyle in the Framr UI ecosystem, defining styles for navigation portals like 'navigation'.
 * These styles align with CSS flex/grid and Remix routing, used for menu layouts in headers.
 * Each variant includes details for consistency and validation.
 *
 * - 'horizontal': Horizontal layout.
 *   Classifications: Nav style (horizontal); CSS flex-row.
 *   Identifiers: lowercase: 'horizontal', camelCase: 'horizontalStyle', snake_case: 'horizontal_style', ALL_CAP: 'HORIZONTAL', cache key: 'navstyle:horizontal:portalId'.
 *   Model Identifier Format: 'horizontal-{gap}-{align}' (kebab-case for CSS).
 *   Variations and Use Cases: Synonyms: 'row'; for top nav in Trakfox.
 *   Example Usage: 'flex flex-row gap-4'.
 *
 * - 'vertical': Vertical layout.
 *   Classifications: Nav style (vertical).
 *   Identifiers: lowercase: 'vertical', camelCase: 'verticalStyle', snake_case: 'vertical_style', ALL_CAP: 'VERTICAL', cache key: 'navstyle:vertical:portalId'.
 *   Model Identifier Format: 'vertical-{gap}-{align}'.
 *   Variations and Use Cases: For sidebars in HealthOrb.
 *   Example Usage: 'flex flex-col gap-2'.
 *
 * - 'dropdown': Dropdown menu.
 *   Classifications: Nav style (dropdown).
 *   Identifiers: lowercase: 'dropdown', camelCase: 'dropdownStyle', snake_case: 'dropdown_style', ALL_CAP: 'DROPDOWN', cache key: 'navstyle:dropdown:portalId'.
 *   Model Identifier Format: 'dropdown-{hover}-{position}'.
 *   Variations and Use Cases: For submenus in DnDHubs.
 *   Example Usage: 'absolute z-10 on hover'.
 *
 * - 'mega': Mega menu with grid.
 *   Classifications: Nav style (mega).
 *   Identifiers: lowercase: 'mega', camelCase: 'megaStyle', snake_case: 'mega_style', ALL_CAP: 'MEGA', cache key: 'navstyle:mega:portalId'.
 *   Model Identifier Format: 'mega-{columns}-{items}'.
 *   Variations and Use Cases: For large nav in GEOCoLab.
 *   Example Usage: 'grid grid-cols-4'.
 *
 * - 'sidebar': Sidebar nav style.
 *   Classifications: Nav style (sidebar).
 *   Identifiers: lowercase: 'sidebar', camelCase: 'sidebarStyle', snake_case: 'sidebar_style', ALL_CAP: 'SIDEBAR', cache key: 'navstyle:sidebar:portalId'.
 *   Model Identifier Format: 'sidebar-{width}-{collapsible}'.
 *   Variations and Use Cases: For left/right bars.
 *   Example Usage: 'w-64 h-full'.
 *
 * - 'drawer': Drawer-style nav.
 *   Classifications: Nav style (drawer).
 *   Identifiers: lowercase: 'drawer', camelCase: 'drawerStyle', snake_case: 'drawer_style', ALL_CAP: 'DRAWER', cache key: 'navstyle:drawer:portalId'.
 *   Model Identifier Format: 'drawer-{anchor}-{open}'.
 *   Variations and Use Cases: For mobile in Trakfox.
 *   Example Usage: 'fixed left-0 transform translate-x'.
 */
export type NavigationStyleTaxonomy = 'horizontal' | 'vertical' | 'dropdown' | 'mega' | 'sidebar' | 'drawer';