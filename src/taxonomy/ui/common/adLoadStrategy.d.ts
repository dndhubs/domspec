/**
 * Union type representing AdLoadStrategy in the Framr UI ecosystem, defining loading strategies for advertising components like 'inContentAd' or 'sidebarAd'.
 * These strategies align with performance optimizations and IntersectionObserver for lazy loading, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., fetch configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'eager': Load immediately.
 *   Classifications: Load strategy (eager); default browser behavior.
 *   Identifiers: lowercase: 'eager', camelCase: 'eagerStrategy', snake_case: 'eager_strategy', ALL_CAP: 'EAGER', cache key: 'loadstrategy:eager:componentId'.
 *   Model Identifier Format: 'eager-{priority}-{preload}' (kebab-case for fetch configs).
 *   Variations and Use Cases: Synonyms: 'immediate'; for header ads in Trakfox or critical banners; validate via `isValidLoadStrategy(strategy)`.
 *   Example Usage: <HeaderAdPortal load='eager'> with loading='eager' on img.
 *
 * - 'lazy': Lazy load on approach.
 *   Classifications: Load strategy (lazy).
 *   Identifiers: lowercase: 'lazy', camelCase: 'lazyStrategy', snake_case: 'lazy_strategy', ALL_CAP: 'LAZY', cache key: 'loadstrategy:lazy:componentId'.
 *   Model Identifier Format: 'lazy-{threshold}-{rootMargin}'.
 *   Variations and Use Cases: For below-fold ads in HealthOrb or sidebar placements.
 *   Example Usage: loading='lazy' on ad iframe.
 *
 * - 'on-view': Load when in viewport.
 *   Classifications: Load strategy (on-view); IntersectionObserver-based.
 *   Identifiers: lowercase: 'on-view', camelCase: 'onViewStrategy', snake_case: 'on_view_strategy', ALL_CAP: 'ON_VIEW', cache key: 'loadstrategy:on-view:componentId'.
 *   Model Identifier Format: 'on-view-{observer}-{callback}'.
 *   Variations and Use Cases: For infinite scroll ads in DnDHubs or view-triggered ads.
 *   Example Usage: useIntersection to load ad on visibility.
 *
 * - 'on-interaction': Load on user interaction.
 *   Classifications: Load strategy (on-interaction).
 *   Identifiers: lowercase: 'on-interaction', camelCase: 'onInteractionStrategy', snake_case: 'on_interaction_strategy', ALL_CAP: 'ON_INTERACTION', cache key: 'loadstrategy:on-interaction:componentId'.
 *   Model Identifier Format: 'on-interaction-{event}-{delay}'.
 *   Variations and Use Cases: For click-to-load ads in GEOCoLab or interactive banners.
 *   Example Usage: onClick={loadAd} for user-triggered ads.
 */
export type AdLoadStrategyTaxonomy = 'eager' | 'lazy' | 'on-view' | 'on-interaction';