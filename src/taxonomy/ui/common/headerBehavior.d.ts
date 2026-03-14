/**
 * Union type representing HeaderBehavior in the Framr UI ecosystem, defining scroll/interaction behaviors for header/navigation components like 'appBar', 'headerBar', or other UI elements.
 * These behaviors align with CSS sticky/scroll events and Remix routing for responsive headers, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in PostgreSQL) and validation (e.g., in @framr/utils).
 *
 * - 'static': Fixed position, no scroll response.
 *   Classifications: Header behavior (static); aligns with CSS position: static.
 *   Identifiers: lowercase: 'static', camelCase: 'staticBehavior', snake_case: 'static_behavior', ALL_CAP: 'STATIC', cache key: 'behavior:static:headerId'.
 *   Model Identifier Format: 'static-{position}-{zIndex}' (kebab-case for CSS rules in theme storage).
 *   Variations and Use Cases: Synonyms: 'fixedNoScroll'; used for always-visible headers in Trakfox landings or static banners; no scroll listeners needed.
 *   Example Usage: <AppBarPortal behavior='static'> or <Banner behavior='static'> with 'position-static z-0'.
 *
 * - 'sticky': Sticks to top on scroll.
 *   Classifications: Header behavior (sticky).
 *   Identifiers: lowercase: 'sticky', camelCase: 'stickyBehavior', snake_case: 'sticky_behavior', ALL_CAP: 'STICKY', cache key: 'behavior:sticky:headerId'.
 *   Model Identifier Format: 'sticky-{threshold}-{shadow}'.
 *   Variations and Use Cases: For nav in HealthOrb dashboards or sticky toolbars; add shadow on stick.
 *   Example Usage: 'sticky top-0' with useEffect for scroll shadow.
 *
 * - 'hide-on-scroll': Hides when scrolling down, shows on up.
 *   Classifications: Header behavior (hide-on-scroll).
 *   Identifiers: lowercase: 'hide-on-scroll', camelCase: 'hideOnScrollBehavior', snake_case: 'hide_on_scroll_behavior', ALL_CAP: 'HIDE_ON_SCROLL', cache key: 'behavior:hide-on-scroll:headerId'.
 *   Model Identifier Format: 'hide-on-scroll-{direction}-{speed}'.
 *   Variations and Use Cases: For mobile headers in DnDHubs or responsive menus; use translateY on scroll direction.
 *   Example Usage: useScroll hook to toggle visibility.
 *
 * - 'shrink': Reduces size on scroll.
 *   Classifications: Header behavior (shrink).
 *   Identifiers: lowercase: 'shrink', camelCase: 'shrinkBehavior', snake_case: 'shrink_behavior', ALL_CAP: 'SHRINK', cache key: 'behavior:shrink:headerId'.
 *   Model Identifier Format: 'shrink-{heightFrom}-{heightTo}'.
 *   Variations and Use Cases: For logos in GEOCoLab headers or compact navs; animate height reduction.
 *   Example Usage: 'transition-height' on scroll threshold.
 *
 * - 'transparent-on-scroll': Becomes transparent on scroll.
 *   Classifications: Header behavior (transparent-on-scroll).
 *   Identifiers: lowercase: 'transparent-on-scroll', camelCase: 'transparentOnScrollBehavior', snake_case: 'transparent_on_scroll_behavior', ALL_CAP: 'TRANSPARENT_ON_SCROLL', cache key: 'behavior:transparent-on-scroll:headerId'.
 *   Model Identifier Format: 'transparent-on-scroll-{opacity}-{threshold}'.
 *   Variations and Use Cases: For hero headers in Trakfox or landing banners; fade background.
 *   Example Usage: 'bg-opacity-0' on scroll > 100px.
 */
export type HeaderBehaviorTaxonomy = 'static' | 'sticky' | 'hide-on-scroll' | 'shrink' | 'transparent-on-scroll';