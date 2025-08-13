/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/cache/fetch-strategy-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/FetchStrategy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20FetchStrategyTaxonomy
 * Union type representing FetchStrategyTaxonomy in the DOMSpec ecosystem.
 * Defines caching and fetch strategies used across DNDHUBS platforms, including Trakfox for efficient data retrieval in web applications, HealthOrb DHIS2 integrations for offline-capable healthcare data syncing, and DnDHubs marketplace for optimized resource loading. Aligns with web standards like Service Worker API (e.g., Cache API, Fetch API) and libraries such as Workbox, ensuring progressive web app (PWA) compatibility and performance optimization. Supports extension via CustomFetchStrategy for platform-specific or experimental strategies.
 *
 * - 'network-first': Prioritizes fetching from the network and falls back to cache if the network fails, ideal for scenarios where the latest data is preferred but offline access is needed.
 *   @alias networkFirst
 *   Classifications: Aligns with Workbox 'NetworkFirst' strategy, W3C Service Worker standards, and ISO 19115 for data freshness in geospatial applications.
 *   Identifiers: lowercase: 'network-first', camelCase: 'networkFirst', snake_case: 'network_first', ALL_CAP: 'NETWORK_FIRST', cache key: 'strategy:network-first:resourceId'.
 *   Model Identifier Format: 'network-first-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'online-first', 'fetch-then-cache'; used in Trakfox real-time analytics dashboards or HealthOrb DHIS2 for syncing patient records when connectivity is intermittent.
 *   @example
 *   // In a Service Worker for Trakfox Patron Journey Map
 *   event.respondWith(
 *     caches.open('trakfox-cache').then(cache => {
 *       return fetch(event.request).then(response => {
 *         cache.put(event.request, response.clone());
 *         return response;
 *       }).catch(() => cache.match(event.request));
 *     })
 *   );
 *
 * - 'cache-first': Prioritizes fetching from the cache and falls back to the network if not found, suitable for performance-critical applications where speed is more important than absolute freshness.
 *   @alias cacheFirst
 *   Classifications: Aligns with Workbox 'CacheFirst' strategy, HTTP caching semantics (RFC 7234), and SCOR model for supply chain data in logistics integrations.
 *   Identifiers: lowercase: 'cache-first', camelCase: 'cacheFirst', snake_case: 'cache_first', ALL_CAP: 'CACHE_FIRST', cache key: 'strategy:cache-first:resourceId'.
 *   Model Identifier Format: 'cache-first-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'offline-first', 'cache-then-network'; applied in DnDHubs marketplace for quick loading of product images or Trakfox loyalty reward icons in low-bandwidth environments.
 *   @example
 *   // In Trakfox fetch utility for static assets
 *   async function fetchAsset(url: string) {
 *     const cache = await caches.open('trakfox-assets');
 *     const cachedResponse = await cache.match(url);
 *     if (cachedResponse) return cachedResponse;
 *     const response = await fetch(url);
 *     cache.put(url, response.clone());
 *     return response;
 *   }
 *
 * - 'stale-while-revalidate': Serves stale data from cache immediately while revalidating in the background with a network fetch, balancing freshness and responsiveness.
 *   @alias staleWhileRevalidate
 *   Classifications: Aligns with Workbox 'StaleWhileRevalidate' strategy, HTTP stale-while-revalidate directive (RFC 5861), and HL7 standards for healthcare data caching in HealthOrb.
 *   Identifiers: lowercase: 'stale-while-revalidate', camelCase: 'staleWhileRevalidate', snake_case: 'stale_while_revalidate', ALL_CAP: 'STALE_WHILE_REVALIDATE', cache key: 'strategy:stale-while-revalidate:resourceId'.
 *   Model Identifier Format: 'stale-while-revalidate-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'swr', 'background-refresh'; utilized in Trakfox user feedback polls or DnDHubs social feeds to provide instant UI updates while fetching latest data.
 *   @example
 *   // In Service Worker for HealthOrb DHIS2 data
 *   event.respondWith(
 *     caches.open('healthorb-cache').then(async cache => {
 *       const response = await cache.match(event.request);
 *       const fetchPromise = fetch(event.request).then(networkResponse => {
 *         cache.put(event.request, networkResponse.clone());
 *         return networkResponse;
 *       });
 *       return response || fetchPromise;
 *     })
 *   );
 *
 * - 'network-only': Always fetches from the network without using cache, ensuring the most up-to-date data at the cost of no offline support.
 *   @alias networkOnly
 *   Classifications: Aligns with Workbox 'NetworkOnly' strategy, standard Fetch API behavior, and ISO 20000 for IT service management in infrastructure monitoring.
 *   Identifiers: lowercase: 'network-only', camelCase: 'networkOnly', snake_case: 'network_only', ALL_CAP: 'NETWORK_ONLY', cache key: 'strategy:network-only:resourceId'.
 *   Model Identifier Format: 'network-only-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'no-cache', 'live-fetch'; employed in Trakfox financial transaction APIs or HealthOrb real-time prescription updates where data integrity is paramount.
 *   @example
 *   // In Trakfox API client for sensitive data
 *   fetch('/api/transactions', { cache: 'no-store' }).then(response => response.json());
 *
 * - 'cache-only': Always fetches from the cache without network access, ideal for fully offline scenarios or pre-cached static content.
 *   @alias cacheOnly
 *   Classifications: Aligns with Workbox 'CacheOnly' strategy, offline-first PWA patterns, and SAP caching for enterprise resource planning in manufacturing workflows.
 *   Identifiers: lowercase: 'cache-only', camelCase: 'cacheOnly', snake_case: 'cache_only', ALL_CAP: 'CACHE_ONLY', cache key: 'strategy:cache-only:resourceId'.
 *   Model Identifier Format: 'cache-only-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'offline-only', 'cache-no-network'; used in DnDHubs gaming assets for offline play or Trakfox educational course materials in remote areas.
 *   @example
 *   // In Service Worker for offline Trakfox resources
 *   event.respondWith(
 *     caches.open('trakfox-offline').then(cache => cache.match(event.request))
 *   );
 */
export type FetchStrategyTaxonomy = 'network-first' | 'cache-first' | 'stale-while-revalidate' | 'network-only' | 'cache-only';