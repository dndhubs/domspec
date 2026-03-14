/**
 * Union type representing A11yMode in the Framr UI ecosystem, defining accessibility modes for components like 'accessibilityPanel' or interactive elements.
 * These modes align with WCAG preferences for reduced motion/contrast, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., a11y configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'screen-reader': Optimized for screen readers.
 *   Classifications: A11y mode (screen-reader); WCAG 4.1.2 for name/state.
 *   Identifiers: lowercase: 'screen-reader', camelCase: 'screenReaderMode', snake_case: 'screen_reader_mode', ALL_CAP: 'SCREEN_READER', cache key: 'a11ymode:screen-reader:componentId'.
 *   Model Identifier Format: 'screen-reader-{aria}-{hidden}' (kebab-case for ARIA attrs).
 *   Variations and Use Cases: Synonyms: 'sr-only'; for voiceover in Trakfox or hidden text; validate via `isValidA11yMode(mode)`.
 *   Example Usage: <div a11yMode='screen-reader' class='sr-only'> for screen reader text.
 *
 * - 'keyboard': Keyboard navigation mode.
 *   Classifications: A11y mode (keyboard); WCAG 2.1.1 for keyboard operable.
 *   Identifiers: lowercase: 'keyboard', camelCase: 'keyboardMode', snake_case: 'keyboard_mode', ALL_CAP: 'KEYBOARD', cache key: 'a11ymode:keyboard:componentId'.
 *   Model Identifier Format: 'keyboard-{focus}-{tabindex}'.
 *   Variations and Use Cases: For focus traps in HealthOrb modals or button navigation.
 *   Example Usage: tabindex='0' on interactive divs.
 *
 * - 'high-contrast': High contrast colors.
 *   Classifications: A11y mode (high-contrast); WCAG 1.4.3 for contrast.
 *   Identifiers: lowercase: 'high-contrast', camelCase: 'highContrastMode', snake_case: 'high_contrast_mode', ALL_CAP: 'HIGH_CONTRAST', cache key: 'a11ymode:high-contrast:componentId'.
 *   Model Identifier Format: 'high-contrast-{ratio}-{colors}'.
 *   Variations and Use Cases: For low vision users in DnDHubs or contrast toggles.
 *   Example Usage: Media query prefers-contrast: high with high-contrast colors.
 *
 * - 'reduced-motion': Reduce animations.
 *   Classifications: A11y mode (reduced-motion); WCAG 2.3.3 for motion sensitivity.
 *   Identifiers: lowercase: 'reduced-motion', camelCase: 'reducedMotionMode', snake_case: 'reduced_motion_mode', ALL_CAP: 'REDUCED_MOTION', cache key: 'a11ymode:reduced-motion:componentId'.
 *   Model Identifier Format: 'reduced-motion-{transitions}-{off}'.
 *   Variations and Use Cases: For vestibular disorders in GEOCoLab or minimal animations.
 *   Example Usage: Media query prefers-reduced-motion: reduce, set transitions to 0s.
 */
export type A11yModeTaxonomy = 'screen-reader' | 'keyboard' | 'high-contrast' | 'reduced-motion';