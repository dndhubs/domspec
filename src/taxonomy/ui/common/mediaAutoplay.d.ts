/**
 * Union type representing MediaAutoplay in the Framr UI ecosystem, defining autoplay behaviors for media components like 'videoPlayer' or 'audioPlayer'.
 * These behaviors align with HTML autoplay attribute and WCAG 1.4.2 for user control, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., media configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'off': No autoplay, user-initiated.
 *   Classifications: Autoplay (off); default HTML behavior.
 *   Identifiers: lowercase: 'off', camelCase: 'offAutoplay', snake_case: 'off_autoplay', ALL_CAP: 'OFF', cache key: 'autoplay:off:componentId'.
 *   Model Identifier Format: 'off-{controls}-{loop}' (kebab-case for media attrs).
 *   Variations and Use Cases: Synonyms: 'manual'; for user-initiated videos in Trakfox or audio tracks; validate via `isValidAutoplay(mode)`.
 *   Example Usage: <VideoPlayerPortal autoplay='off'> with <video autoplay={false}>.
 *
 * - 'on': Autoplay on load.
 *   Classifications: Autoplay (on).
 *   Identifiers: lowercase: 'on', camelCase: 'onAutoplay', snake_case: 'on_autoplay', ALL_CAP: 'ON', cache key: 'autoplay:on:componentId'.
 *   Model Identifier Format: 'on-{muted}-{loop}'.
 *   Variations and Use Cases: For promotional videos in HealthOrb or auto-start audio.
 *   Example Usage: <video autoplay={true}>.
 *
 * - 'muted': Autoplay with muted audio.
 *   Classifications: Autoplay (muted); WCAG 1.4.2 compliant.
 *   Identifiers: lowercase: 'muted', camelCase: 'mutedAutoplay', snake_case: 'muted_autoplay', ALL_CAP: 'MUTED', cache key: 'autoplay:muted:componentId'.
 *   Model Identifier Format: 'muted-{volume}-{play}'.
 *   Variations and Use Cases: For background videos in DnDHubs or silent intros.
 *   Example Usage: <video autoplay muted>.
 *
 * - 'on-view': Autoplay when in viewport.
 *   Classifications: Autoplay (on-view); IntersectionObserver-based.
 *   Identifiers: lowercase: 'on-view', camelCase: 'onViewAutoplay', snake_case: 'on_view_autoplay', ALL_CAP: 'ON_VIEW', cache key: 'autoplay:on-view:componentId'.
 *   Model Identifier Format: 'on-view-{threshold}-{once}'.
 *   Variations and Use Cases: For galleries in GEOCoLab or scroll-triggered media.
 *   Example Usage: useIntersection to trigger play on visibility.
 */
export type MediaAutoplayTaxonomy = 'off' | 'on' | 'muted' | 'on-view';