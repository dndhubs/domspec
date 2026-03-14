/**
 * Union type representing PresenceStatus in the Framr UI ecosystem, defining user status indicators for collaboration components like 'presence' or chat avatars.
 * These statuses align with real-time indicators for online/offline states, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., user configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'online': User is online.
 *   Classifications: Presence (online); green dot indicator.
 *   Identifiers: lowercase: 'online', camelCase: 'onlineStatus', snake_case: 'online_status', ALL_CAP: 'ONLINE', cache key: 'presence:online:componentId'.
 *   Model Identifier Format: 'online-{user}-{timestamp}' (kebab-case for real-time updates).
 *   Variations and Use Cases: Synonyms: 'active'; for chat indicators in Trakfox or user lists; validate via `isValidPresenceStatus(status)`.
 *   Example Usage: <PresencePortal status='online'> with 'bg-green-500 rounded-full'.
 *
 * - 'away': User is away.
 *   Classifications: Presence (away).
 *   Identifiers: lowercase: 'away', camelCase: 'awayStatus', snake_case: 'away_status', ALL_CAP: 'AWAY', cache key: 'presence:away:componentId'.
 *   Model Identifier Format: 'away-{idle}-{time}'.
 *   Variations and Use Cases: For idle users in HealthOrb or away indicators.
 *   Example Usage: 'bg-yellow-500 rounded-full'.
 *
 * - 'busy': User is busy.
 *   Classifications: Presence (busy).
 *   Identifiers: lowercase: 'busy', camelCase: 'busyStatus', snake_case: 'busy_status', ALL_CAP: 'BUSY', cache key: 'presence:busy:componentId'.
 *   Model Identifier Format: 'busy-{dnd}-{reason}'.
 *   Variations and Use Cases: For do-not-disturb in DnDHubs or busy avatars.
 *   Example Usage: 'bg-red-500 rounded-full'.
 *
 * - 'offline': User is offline.
 *   Classifications: Presence (offline).
 *   Identifiers: lowercase: 'offline', camelCase: 'offlineStatus', snake_case: 'offline_status', ALL_CAP: 'OFFLINE', cache key: 'presence:offline:componentId'.
 *   Model Identifier Format: 'offline-{lastSeen}-{reason}'.
 *   Variations and Use Cases: For disconnected users in GEOCoLab or grayed avatars.
 *   Example Usage: 'bg-gray-500 rounded-full'.
 *
 * - 'invisible': User appears offline but active.
 *   Classifications: Presence (invisible).
 *   Identifiers: lowercase: 'invisible', camelCase: 'invisibleStatus', snake_case: 'invisible_status', ALL_CAP: 'INVISIBLE', cache key: 'presence:invisible:componentId'.
 *   Model Identifier Format: 'invisible-{hidden}-{time}'.
 *   Variations and Use Cases: For privacy mode in Trakfox or hidden status.
 *   Example Usage: Hidden status but WebSocket active.
 */
export type PresenceStatusTaxonomy = 'online' | 'away' | 'busy' | 'offline' | 'invisible';