/**
 * Union type representing MediaControls in the Framr UI ecosystem, defining control styles for media components like 'videoPlayer', 'audioPlayer', or media embeds.
 * These controls align with HTML media APIs and Tailwind for custom players, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., media configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'minimal': Basic play/pause controls.
 *   Classifications: Controls (minimal); HTML controls attribute minimal.
 *   Identifiers: lowercase: 'minimal', camelCase: 'minimalControls', snake_case: 'minimal_controls', ALL_CAP: 'MINIMAL', cache key: 'controls:minimal:componentId'.
 *   Model Identifier Format: 'minimal-{buttons}-{hidden}' (kebab-case for player configs).
 *   Variations and Use Cases: Synonyms: 'basic'; for embedded videos in Trakfox or simple audio players; validate via `isValidMediaControls(controls)`.
 *   Example Usage: <VideoPlayerPortal controls='minimal'> with only play button.
 *
 * - 'standard': Standard media controls.
 *   Classifications: Controls (standard).
 *   Identifiers: lowercase: 'standard', camelCase: 'standardControls', snake_case: 'standard_controls', ALL_CAP: 'STANDARD', cache key: 'controls:standard:componentId'.
 *   Model Identifier Format: 'standard-{seek}-{volume}'.
 *   Variations and Use Cases: For default players in HealthOrb or video embeds.
 *   Example Usage: Play, pause, seek bar, volume controls.
 *
 * - 'advanced': Full controls with extras.
 *   Classifications: Controls (advanced).
 *   Identifiers: lowercase: 'advanced', camelCase: 'advancedControls', snake_case: 'advanced_controls', ALL_CAP: 'ADVANCED', cache key: 'controls:advanced:componentId'.
 *   Model Identifier Format: 'advanced-{speed}-{subtitles}'.
 *   Variations and Use Cases: For video players in DnDHubs with speed/subtitles.
 *   Example Usage: Add speed, subtitles, fullscreen buttons.
 *
 * - 'custom': User-defined controls.
 *   Classifications: Controls (custom).
 *   Identifiers: lowercase: 'custom', camelCase: 'customControls', snake_case: 'custom_controls', ALL_CAP: 'CUSTOM', cache key: 'controls:custom:componentId'.
 *   Model Identifier Format: 'custom-{components}-{events}'.
 *   Variations and Use Cases: For branded players in GEOCoLab or custom video UIs.
 *   Example Usage: Pass custom buttons via slotProps.
 *
 * - 'none': No controls visible.
 *   Classifications: Controls (none).
 *   Identifiers: lowercase: 'none', camelCase: 'noControls', snake_case: 'no_controls', ALL_CAP: 'NONE', cache key: 'controls:none:componentId'.
 *   Model Identifier Format: 'none-{autoplay}-{loop}'.
 *   Variations and Use Cases: For background media in Trakfox or auto-playing videos.
 *   Example Usage: <video controls={false}>.
 */
export type MediaControlsTaxonomy = 'minimal' | 'standard' | 'advanced' | 'custom' | 'none';