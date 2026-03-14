/**
 * Union type representing NavigationStyle in the Framr UI ecosystem, defining layout styles for navigation components like 'navigation', 'breadcrumb', or menus/buttons.
 * These styles align with CSS flex/grid and Tailwind utilities for responsive menus, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'horizontal': Horizontal menu layout.
 *   Classifications: Nav style (horizontal); CSS flex-row.
 *   Identifiers: lowercase: 'horizontal', camelCase: 'horizontalStyle', snake_case: 'horizontal_style', ALL_CAP: 'HORIZONTAL', cache key: 'navstyle:horizontal:componentId'.
 *   Model Identifier Format: 'horizontal-{gap}-{align}' (kebab-case for CSS configs).
 *   Variations and Use Cases: Synonyms: 'rowNav'; for top nav in Trakfox or button groups; validate via `isValidNavStyle(style)`.
 *   Example Usage: <NavigationPortal style='horizontal'> or <ButtonGroup style='horizontal'> with 'flex flex-row gap-4'.
 *
 * - 'vertical': Vertical menu layout.
 *   Classifications: Nav style (vertical).
 *   Identifiers: lowercase: 'vertical', camelCase: 'verticalStyle', snake_case: 'vertical_style', ALL_CAP: 'VERTICAL', cache key: 'navstyle:vertical:componentId'.
 *   Model Identifier Format: 'vertical-{gap}-{align}'.
 *   Variations and Use Cases: For sidebars in HealthOrb or vertical menus; supports LTR/RTL.
 *   Example Usage: 'flex flex-col gap-2'.
 *
 * - 'dropdown': Dropdown submenu style.
 *   Classifications: Nav style (dropdown).
 *   Identifiers: lowercase: 'dropdown', camelCase: 'dropdownStyle', snake_case: 'dropdown_style', ALL_CAP: 'DROPDOWN', cache key: 'navstyle:dropdown:componentId'.
 *   Model Identifier Format: 'dropdown-{position}-{hover}'.
 *   Variations and Use Cases: For submenus in DnDHubs or button dropdowns; uses position: absolute.
 *   Example Usage: 'absolute z-10 mt-2' on hover.
 *
 * - 'mega': Mega menu with grid.
 *   Classifications: Nav style (mega).
 *   Identifiers: lowercase: 'mega', camelCase: 'megaStyle', snake_case: 'mega_style', ALL_CAP: 'MEGA', cache key: 'navstyle:mega:componentId'.
 *   Model Identifier Format: 'mega-{columns}-{width}'.
 *   Variations and Use Cases: For large nav in GEOCoLab or complex menus; grid-based.
 *   Example Usage: 'grid grid-cols-4 w-full'.
 *
 * - 'sidebar': Sidebar-style navigation.
 *   Classifications: Nav style (sidebar).
 *   Identifiers: lowercase: 'sidebar', camelCase: 'sidebarStyle', snake_case: 'sidebar_style', ALL_CAP: 'SIDEBAR', cache key: 'navstyle:sidebar:componentId'.
 *   Model Identifier Format: 'sidebar-{width}-{collapsible}'.
 *   Variations and Use Cases: For left/right bars in Trakfox or filter panels.
 *   Example Usage: 'w-64 h-full flex-col'.
 *
 * - 'drawer': Drawer slide-in navigation.
 *   Classifications: Nav style (drawer).
 *   Identifiers: lowercase: 'drawer', camelCase: 'drawerStyle', snake_case: 'drawer_style', ALL_CAP: 'DRAWER', cache key: 'navstyle:drawer:componentId'.
 *   Model Identifier Format: 'drawer-{anchor}-{animation}'.
 *   Variations and Use Cases: For mobile nav in HealthOrb or slide-in menus.
 *   Example Usage: 'fixed left-0 translate-x-[-100%] transition-transform'.
 */
export type NavigationStyleTaxonomy = 'horizontal' | 'vertical' | 'dropdown' | 'mega' | 'sidebar' | 'drawer';