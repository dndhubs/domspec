/**
 * Union type representing TooltipTrigger in the Framr UI ecosystem, defining trigger events for feedback components like 'tooltip' or hoverable elements.
 * These triggers align with event listeners and WCAG 3.2.1 for no context change, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., event configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'hover': Trigger on mouse hover.
 *   Classifications: Trigger (hover); CSS :hover, WCAG 2.1.1 for accessibility.
 *   Identifiers: lowercase: 'hover', camelCase: 'hoverTrigger', snake_case: 'hover_trigger', ALL_CAP: 'HOVER', cache key: 'trigger:hover:componentId'.
 *   Model Identifier Format: 'hover-{delay}-{leave}' (kebab-case for timeouts).
 *   Variations and Use Cases: Synonyms: 'mouseenter'; for desktop tooltips in Trakfox or button hints; validate via `isValidTrigger(trigger)`.
 *   Example Usage: <Tooltip trigger='hover'> with onMouseEnter show.
 *
 * - 'click': Trigger on click.
 *   Classifications: Trigger (click).
 *   Identifiers: lowercase: 'click', camelCase: 'clickTrigger', snake_case: 'click_trigger', ALL_CAP: 'CLICK', cache key: 'trigger:click:componentId'.
 *   Model Identifier Format: 'click-{toggle}-{position}'.
 *   Variations and Use Cases: For mobile tooltips in HealthOrb or toggleable info.
 *   Example Usage: onClick toggle visibility.
 *
 * - 'focus': Trigger on focus.
 *   Classifications: Trigger (focus); WCAG 2.1.1 for keyboard.
 *   Identifiers: lowercase: 'focus', camelCase: 'focusTrigger', snake_case: 'focus_trigger', ALL_CAP: 'FOCUS', cache key: 'trigger:focus:componentId'.
 *   Model Identifier Format: 'focus-{blur}-{keyboard}'.
 *   Variations and Use Cases: For keyboard users in DnDHubs or input hints.
 *   Example Usage: onFocus show, onBlur hide.
 *
 * - 'manual': Manual control via prop.
 *   Classifications: Trigger (manual).
 *   Identifiers: lowercase: 'manual', camelCase: 'manualTrigger', snake_case: 'manual_trigger', ALL_CAP: 'MANUAL', cache key: 'trigger:manual:componentId'.
 *   Model Identifier Format: 'manual-{state}-{prop}'.
 *   Variations and Use Cases: For controlled tooltips in GEOCoLab or custom popups.
 *   Example Usage: isOpen prop to show/hide.
 *
 * - 'touch': Trigger on touch events.
 *   Classifications: Trigger (touch).
 *   Identifiers: lowercase: 'touch', camelCase: 'touchTrigger', snake_case: 'touch_trigger', ALL_CAP: 'TOUCH', cache key: 'trigger:touch:componentId'.
 *   Model Identifier Format: 'touch-{start}-{end}'.
 *   Variations and Use Cases: For mobile touch in Trakfox or touchable badges.
 *   Example Usage: onTouchStart show tooltip.
 */
export type TooltipTriggerTaxonomy = 'hover' | 'click' | 'focus' | 'manual' | 'touch';