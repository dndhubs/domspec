/**
 * Union type representing DataRefresh in the Framr UI ecosystem, defining refresh modes for dashboard/analytic components like 'analytics' or 'kpiCards'.
 * These modes align with usePortalData hook and Remix loaders for data fetching, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., fetch configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'manual': Manual refresh by user.
 *   Classifications: Refresh mode (manual); button trigger.
 *   Identifiers: lowercase: 'manual', camelCase: 'manualRefresh', snake_case: 'manual_refresh', ALL_CAP: 'MANUAL', cache key: 'refresh:manual:componentId'.
 *   Model Identifier Format: 'manual-{button}-{icon}' (kebab-case for UI triggers).
 *   Variations and Use Cases: Synonyms: 'onDemand'; for charts in Trakfox or KPI updates; validate via `isValidRefreshMode(mode)`.
 *   Example Usage: <AnalyticsPortal refresh='manual'> with onClick={refetch}.
 *
 * - 'interval': Timed interval refresh.
 *   Classifications: Refresh mode (interval).
 *   Identifiers: lowercase: 'interval', camelCase: 'intervalRefresh', snake_case: 'interval_refresh', ALL_CAP: 'INTERVAL', cache key: 'refresh:interval:componentId'.
 *   Model Identifier Format: 'interval-{seconds}-{auto}'.
 *   Variations and Use Cases: For metrics in HealthOrb or periodic updates.
 *   Example Usage: useEffect setInterval(refetch, 30000).
 *
 * - 'realtime': Real-time updates.
 *   Classifications: Refresh mode (realtime).
 *   Identifiers: lowercase: 'realtime', camelCase: 'realtimeRefresh', snake_case: 'realtime_refresh', ALL_CAP: 'REALTIME', cache key: 'refresh:realtime:componentId'.
 *   Model Identifier Format: 'realtime-{socket}-{event}'.
 *   Variations and Use Cases: For live data in DnDHubs or WebSocket feeds.
 *   Example Usage: WebSocket onmessage={updateData}.
 *
 * - 'on-focus': Refresh on window focus.
 *   Classifications: Refresh mode (on-focus).
 *   Identifiers: lowercase: 'on-focus', camelCase: 'onFocusRefresh', snake_case: 'on_focus_refresh', ALL_CAP: 'ON_FOCUS', cache key: 'refresh:on-focus:componentId'.
 *   Model Identifier Format: 'on-focus-{visibility}-{refetch}'.
 *   Variations and Use Cases: For tabs in GEOCoLab or focus-driven updates.
 *   Example Usage: useEffect on focus event to refetch.
 */
export type DataRefreshTaxonomy = 'manual' | 'interval' | 'realtime' | 'on-focus';