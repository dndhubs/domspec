/**
 * Union type representing A11yPriority in the Framr UI ecosystem, defining ARIA live priorities for accessibility components like 'ariaLive' or alert regions.
 * These priorities align with W3C ARIA live regions for screen reader announcements, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., ARIA configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'polite': Polite announcement, waits for pause.
 *   Classifications: A11y priority (polite); ARIA live='polite', WCAG 4.1.3.
 *   Identifiers: lowercase: 'polite', camelCase: 'politePriority', snake_case: 'polite_priority', ALL_CAP: 'POLITE', cache key: 'a11ypriority:polite:componentId'.
 *   Model Identifier Format: 'polite-{region}-{message}' (kebab-case for ARIA attrs).
 *   Variations and Use Cases: Synonyms: 'non-interruptive'; for status updates in Trakfox or log messages; validate via `isValidA11yPriority(priority)`.
 *   Example Usage: <div role='status' aria-live='polite'> for non-urgent updates.
 *
 * - 'assertive': Assertive interrupt announcement.
 *   Classifications: A11y priority (assertive); ARIA live='assertive'.
 *   Identifiers: lowercase: 'assertive', camelCase: 'assertivePriority', snake_case: 'assertive_priority', ALL_CAP: 'ASSERTIVE', cache key: 'a11ypriority:assertive:componentId'.
 *   Model Identifier Format: 'assertive-{region}-{message}'.
 *   Variations and Use Cases: For error alerts in HealthOrb or urgent toasts.
 *   Example Usage: <div role='alert' aria-live='assertive'> for errors.
 *
 * - 'off': No live announcements.
 *   Classifications: A11y priority (off); ARIA live='off'.
 *   Identifiers: lowercase: 'off', camelCase: 'offPriority', snake_case: 'off_priority', ALL_CAP: 'OFF', cache key: 'a11ypriority:off:componentId'.
 *   Model Identifier Format: 'off-{region}-{static}'.
 *   Variations and Use Cases: For static content in DnDHubs or non-live regions.
 *   Example Usage: <div aria-live='off'> for static text.
 */
export type A11yPriorityTaxonomy = 'polite' | 'assertive' | 'off';