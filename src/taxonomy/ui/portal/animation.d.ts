/**
 * Union type representing PortalAnimation in the Framr UI ecosystem, defining entry/exit effects with durations for components via CSS transitions.
 * These animations align with Framr's usePortalAnimation hook and reduced-motion prefs (WCAG), used for modals/toasts across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'fade': Fade in/out effect.
 *   Classifications: Animation type (fade); aligns with CSS opacity transitions.
 *   Identifiers: lowercase: 'fade', camelCase: 'fadeAnimation', snake_case: 'fade_animation', ALL_CAP: 'FADE', cache key: 'animation:fade:portalId'.
 *   Model Identifier Format: 'fade-{duration}-{timing}' (kebab-case for CSS keyframes).
 *   Variations and Use Cases: Synonyms: 'opacity'; for modals in Trakfox.
 *   Example Usage: Animate opacity from 0 to 1 in 300ms.
 *
 * - 'slide': Slide in/out from edge.
 *   Classifications: Animation type (slide).
 *   Identifiers: lowercase: 'slide', camelCase: 'slideAnimation', snake_case: 'slide_animation', ALL_CAP: 'SLIDE', cache key: 'animation:slide:portalId'.
 *   Model Identifier Format: 'slide-{direction}-{duration}'.
 *   Variations and Use Cases: For drawers in HealthOrb.
 *   Example Usage: TranslateX from 100% to 0.
 *
 * - 'scale': Scale up/down effect.
 *   Classifications: Animation type (scale).
 *   Identifiers: lowercase: 'scale', camelCase: 'scaleAnimation', snake_case: 'scale_animation', ALL_CAP: 'SCALE', cache key: 'animation:scale:portalId'.
 *   Model Identifier Format: 'scale-{from}-{to}'.
 *   Variations and Use Cases: For popovers in DnDHubs.
 *   Example Usage: Transform scale from 0.95 to 1.
 *
 * - 'rotate': Rotate in/out.
 *   Classifications: Animation type (rotate).
 *   Identifiers: lowercase: 'rotate', camelCase: 'rotateAnimation', snake_case: 'rotate_animation', ALL_CAP: 'ROTATE', cache key: 'animation:rotate:portalId'.
 *   Model Identifier Format: 'rotate-{degrees}-{duration}'.
 *   Variations and Use Cases: For loaders in GEOCoLab.
 *   Example Usage: Rotate 360deg for spinners.
 *
 * - 'bounce': Bounce effect.
 *   Classifications: Animation type (bounce).
 *   Identifiers: lowercase: 'bounce', camelCase: 'bounceAnimation', snake_case: 'bounce_animation', ALL_CAP: 'BOUNCE', cache key: 'animation:bounce:portalId'.
 *   Model Identifier Format: 'bounce-{height}-{timing}'.
 *   Variations and Use Cases: For notifications in Trakfox.
 *   Example Usage: TranslateY bounce keyframes.
 *
 * - 'zoom': Zoom in/out.
 *   Classifications: Animation type (zoom).
 *   Identifiers: lowercase: 'zoom', camelCase: 'zoomAnimation', snake_case: 'zoom_animation', ALL_CAP: 'ZOOM', cache key: 'animation:zoom:portalId'.
 *   Model Identifier Format: 'zoom-{scale}-{duration}'.
 *   Variations and Use Cases: For images in galleries.
 *   Example Usage: Scale from 0 to 1.
 *
 * - 'flip': Flip animation.
 *   Classifications: Animation type (flip).
 *   Identifiers: lowercase: 'flip', camelCase: 'flipAnimation', snake_case: 'flip_animation', ALL_CAP: 'FLIP', cache key: 'animation:flip:portalId'.
 *   Model Identifier Format: 'flip-{axis}-{degrees}'.
 *   Variations and Use Cases: For cards in dashboards.
 *   Example Usage: RotateY 180deg.
 *
 * - 'none': No animation.
 *   Classifications: Animation type (none).
 *   Identifiers: lowercase: 'none', camelCase: 'noAnimation', snake_case: 'no_animation', ALL_CAP: 'NONE', cache key: 'animation:none:portalId'.
 *   Model Identifier Format: 'none-{fallback}-{state}'.
 *   Variations and Use Cases: For reduced-motion prefs.
 *   Example Usage: 'transition-none'.
 *
 * - 'custom': User-defined animation.
 *   Classifications: Animation type (custom).
 *   Identifiers: lowercase: 'custom', camelCase: 'customAnimation', snake_case: 'custom_animation', ALL_CAP: 'CUSTOM', cache key: 'animation:custom:portalId'.
 *   Model Identifier Format: 'custom-{keyframe}-{duration}'.
 *   Variations and Use Cases: For branded effects.
 *   Example Usage: Custom keyframes via CSS.
 */
export type PortalAnimationTaxonomy = 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'zoom' | 'flip' | 'none' | 'custom';