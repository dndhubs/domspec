/**
 * Union type representing PortalTransition in the Framr UI ecosystem, defining easing functions for smooth changes in CSS transitions.
 * These transitions align with CSS timing functions, used for animations/hovers across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'ease': Default ease timing.
 *   Classifications: Transition (ease); CSS ease.
 *   Identifiers: lowercase: 'ease', camelCase: 'easeTransition', snake_case: 'ease_transition', ALL_CAP: 'EASE', cache key: 'transition:ease:portalId'.
 *   Model Identifier Format: 'ease-{duration}-{delay}' (kebab-case for CSS).
 *   Variations and Use Cases: Synonyms: 'default'; for hovers in Trakfox.
 *   Example Usage: 'transition-ease duration-300'.
 *
 * - 'ease-in': Ease in acceleration.
 *   Classifications: Transition (ease-in).
 *   Identifiers: lowercase: 'ease-in', camelCase: 'easeInTransition', snake_case: 'ease_in_transition', ALL_CAP: 'EASE_IN', cache key: 'transition:ease-in:portalId'.
 *   Model Identifier Format: 'ease-in-{duration}-{delay}'.
 *   Variations and Use Cases: For entrances in HealthOrb.
 *   Example Usage: 'ease-in'.
 *
 * - 'ease-out': Ease out deceleration.
 *   Classifications: Transition (ease-out).
 *   Identifiers: lowercase: 'ease-out', camelCase: 'easeOutTransition', snake_case: 'ease_out_transition', ALL_CAP: 'EASE_OUT', cache key: 'transition:ease-out:portalId'.
 *   Model Identifier Format: 'ease-out-{duration}-{delay}'.
 *   Variations and Use Cases: For exits in DnDHubs.
 *   Example Usage: 'ease-out'.
 *
 * - 'ease-in-out': Ease in and out.
 *   Classifications: Transition (ease-in-out).
 *   Identifiers: lowercase: 'ease-in-out', camelCase: 'easeInOutTransition', snake_case: 'ease_in_out_transition', ALL_CAP: 'EASE_IN_OUT', cache key: 'transition:ease-in-out:portalId'.
 *   Model Identifier Format: 'ease-in-out-{duration}-{delay}'.
 *   Variations and Use Cases: For smooth changes in GEOCoLab.
 *   Example Usage: 'ease-in-out'.
 *
 * - 'linear': Constant speed.
 *   Classifications: Transition (linear).
 *   Identifiers: lowercase: 'linear', camelCase: 'linearTransition', snake_case: 'linear_transition', ALL_CAP: 'LINEAR', cache key: 'transition:linear:portalId'.
 *   Model Identifier Format: 'linear-{duration}-{delay}'.
 *   Variations and Use Cases: For progress bars.
 *   Example Usage: 'linear'.
 *
 * - 'bounce': Bounce effect timing.
 *   Classifications: Transition (bounce).
 *   Identifiers: lowercase: 'bounce', camelCase: 'bounceTransition', snake_case: 'bounce_transition', ALL_CAP: 'BOUNCE', cache key: 'transition:bounce:portalId'.
 *   Model Identifier Format: 'bounce-{duration}-{delay}'.
 *   Variations and Use Cases: For fun animations.
 *   Example Usage: Custom cubic-bezier for bounce.
 *
 * - 'spring': Spring physics timing.
 *   Classifications: Transition (spring).
 *   Identifiers: lowercase: 'spring', camelCase: 'springTransition', snake_case: 'spring_transition', ALL_CAP: 'SPRING', cache key: 'transition:spring:portalId'.
 *   Model Identifier Format: 'spring-{stiffness}-{damping}'.
 *   Variations and Use Cases: For natural motions.
 *   Example Usage: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'.
 */
export type PortalTransitionTaxonomy = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'bounce' | 'spring';