/**
 * Union type representing CollaborationMode in the Framr UI ecosystem, defining modes for collaboration components like 'chat', 'comments', or real-time editors.
 * These modes align with WebSocket/polling for sync/async updates, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., sync configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'realtime': Real-time sync mode.
 *   Classifications: Collab mode (realtime); WebSocket-based.
 *   Identifiers: lowercase: 'realtime', camelCase: 'realtimeMode', snake_case: 'realtime_mode', ALL_CAP: 'REALTIME', cache key: 'collabmode:realtime:componentId'.
 *   Model Identifier Format: 'realtime-{socket}-{event}' (kebab-case for connection configs).
 *   Variations and Use Cases: Synonyms: 'live'; for chat in Trakfox or live editors; validate via `isValidCollabMode(mode)`.
 *   Example Usage: <ChatPortal mode='realtime'> with useWebSocket for updates.
 *
 * - 'async': Asynchronous mode with polling.
 *   Classifications: Collab mode (async).
 *   Identifiers: lowercase: 'async', camelCase: 'asyncMode', snake_case: 'async_mode', ALL_CAP: 'ASYNC', cache key: 'collabmode:async:componentId'.
 *   Model Identifier Format: 'async-{poll}-{interval}'.
 *   Variations and Use Cases: For comments in HealthOrb or delayed updates.
 *   Example Usage: setInterval(refetch, 5000) for comments.
 *
 * - 'hybrid': Mix of real-time and async.
 *   Classifications: Collab mode (hybrid).
 *   Identifiers: lowercase: 'hybrid', camelCase: 'hybridMode', snake_case: 'hybrid_mode', ALL_CAP: 'HYBRID', cache key: 'collabmode:hybrid:componentId'.
 *   Model Identifier Format: 'hybrid-{realtime}-{fallback}'.
 *   Variations and Use Cases: For annotations in DnDHubs or mixed-mode editors.
 *   Example Usage: WebSocket with polling fallback for annotations.
 */
export type CollaborationModeTaxonomy = 'realtime' | 'async' | 'hybrid';