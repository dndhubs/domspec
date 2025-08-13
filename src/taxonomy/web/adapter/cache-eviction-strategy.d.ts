/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/cache/cache-eviction-strategy-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/CacheEvictionStrategyTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20CacheEvictionStrategyTaxonomy
 * Union type representing CacheEvictionStrategyTaxonomy in the DOMSpec ecosystem.
 * Defines strategies for evicting entries from caches in DNDHUBS platforms, aligning with caching standards and performance optimization practices.
 * Used in Trakfox for managing cache efficiency and in HealthOrb for optimizing data retrieval in DHIS2 integrations.
 *
 * - 'lru': Least Recently Used eviction strategy.
 *   Classifications: Cache management standard; aligns with Redis and Memcached LRU policies.
 *   Identifiers: lowercase: 'lru', camelCase: 'lruStrategy', snake_case: 'lru_strategy', ALL_CAP: 'LRU', cache key: 'strategy:lru:cacheId'.
 *   Model Identifier Format: 'lru-{cacheType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'least-recently-used'; used in Trakfox for session management and caching API responses.
 *   @example
 *   // Configuring an LRU cache in Trakfox
 *   cache.setEvictionStrategy('lru');
 *
 * - 'lfu': Least Frequently Used eviction strategy.
 *   Classifications: Cache management standard; aligns with advanced caching frameworks like Caffeine.
 *   Identifiers: lowercase: 'lfu', camelCase: 'lfuStrategy', snake_case: 'lfu_strategy', ALL_CAP: 'LFU', cache key: 'strategy:lfu:cacheId'.
 *   Model Identifier Format: 'lfu-{cacheType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'least-frequently-used'; used in HealthOrb for prioritizing frequently accessed DHIS2 datasets.
 *   @example
 *   // Setting LFU strategy in HealthOrb
 *   cache.configure({ strategy: 'lfu', maxEntries: 1000 });
 *
 * - 'priority': Priority-based eviction strategy.
 *   Classifications: Custom cache management; aligns with application-specific priority queues.
 *   Identifiers: lowercase: 'priority', camelCase: 'priorityStrategy', snake_case: 'priority_strategy', ALL_CAP: 'PRIORITY', cache key: 'strategy:priority:cacheId'.
 *   Model Identifier Format: 'priority-{cacheType}-{timestamp}'.
 *   Variations and Use Cases: Used in DNDHUBS marketplace for prioritizing high-value items in cache; supports custom priority metrics.
 *   @example
 *   // Using priority strategy in DNDHUBS marketplace
 *   cache.setEvictionStrategy('priority', { priorityMetric: 'value' });
 *
 * - 'adaptive': Adaptive eviction strategy combining multiple policies.
 *   Classifications: Advanced cache management; aligns with adaptive algorithms like ARC (Adaptive Replacement Cache).
 *   Identifiers: lowercase: 'adaptive', camelCase: 'adaptiveStrategy', snake_case: 'adaptive_strategy', ALL_CAP: 'ADAPTIVE', cache key: 'strategy:adaptive:cacheId'.
 *   Model Identifier Format: 'adaptive-{cacheType}-{timestamp}'.
 *   Variations and Use Cases: Used in Trakfox for dynamic cache optimization based on runtime metrics.
 *   @example
 *   // Configuring adaptive strategy in Trakfox
 *   cache.setEvictionStrategy('adaptive', { metrics: ['accessFrequency', 'recency'] });
 *
 * - 'tiered': Tiered eviction strategy for multi-level caches.
 *   Classifications: Hierarchical cache management; aligns with multi-tier caching systems like Redis Cluster.
 *   Identifiers: lowercase: 'tiered', camelCase: 'tieredStrategy', snake_case: 'tiered_strategy', ALL_CAP: 'TIERED', cache key: 'strategy:tiered:cacheId'.
 *   Model Identifier Format: 'tiered-{cacheType}-{timestamp}'.
 *   Variations and Use Cases: Used in HealthOrb for tiered caching in DHIS2 integrations, prioritizing hot data in memory.
 *   @example
 *   // Setting tiered strategy in HealthOrb
 *   cache.configure({ strategy: 'tiered', tiers: ['memory', 'disk'] });
 */
export type CacheEvictionStrategyTaxonomy = CoreCacheEvictionStrategy | CustomCacheEvictionStrategy;

/** Standard eviction strategies for general cache management */
export type StandardEvictionStrategyTaxonomy = 'lru' | 'lfu';

/** Advanced eviction strategies for specialized use cases */
export type AdvancedEvictionStrategyTaxonomy = 'priority' | 'adaptive' | 'tiered';

/** General union of all eviction strategy categories */
export type CacheEvictionStrategy = StandardEvictionStrategyTaxonomy | AdvancedEvictionStrategyTaxonomy;

export type CoreCacheEvictionStrategy = 'lru' | 'lfu' | 'priority' | 'adaptive' | 'tiered';
export type CustomCacheEvictionStrategy = string & { __cacheEvictionStrategy?: 'CustomCacheEvictionStrategy' };