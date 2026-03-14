/**
 * Union type representing ModalBackdrop in the Framr UI ecosystem, defining backdrop styles for feedback components like 'modal', 'dialog', or overlays.
 * These backdrops align with CSS overlay patterns and Tailwind utilities for dimming, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., theme configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'dark': Dark overlay backdrop.
 *   Classifications: Backdrop style (dark); CSS bg-black/50.
 *   Identifiers: lowercase: 'dark', camelCase: 'darkBackdrop', snake_case: 'dark_backdrop', ALL_CAP: 'DARK', cache key: 'backdrop:dark:componentId'.
 *   Model Identifier Format: 'dark-{opacity}-{color}' (kebab-case for CSS vars).
 *   Variations and Use Cases: Synonyms: 'dim'; for modals in Trakfox or alert overlays; blocks clicks.
 *   Example Usage: <ModalPortal backdrop='dark'> with 'fixed inset-0 bg-black/50'.
 *
 * - 'light': Light overlay backdrop.
 *   Classifications: Backdrop style (light).
 *   Identifiers: lowercase: 'light', camelCase: 'lightBackdrop', snake_case: 'light_backdrop', ALL_CAP: 'LIGHT', cache key: 'backdrop:light:componentId'.
 *   Model Identifier Format: 'light-{opacity}-{color}'.
 *   Variations and Use Cases: For dialogs in HealthOrb or light popups; subtle dim.
 *   Example Usage: 'bg-white/30'.
 *
 * - 'blur': Blurred backdrop effect.
 *   Classifications: Backdrop style (blur).
 *   Identifiers: lowercase: 'blur', camelCase: 'blurBackdrop', snake_case: 'blur_backdrop', ALL_CAP: 'BLUR', cache key: 'backdrop:blur:componentId'.
 *   Model Identifier Format: 'blur-{radius}-{filter}'.
 *   Variations and Use Cases: For glassmorphism in DnDHubs modals or modern overlays.
 *   Example Usage: 'backdrop-blur-md'.
 *
 * - 'transparent': Invisible backdrop.
 *   Classifications: Backdrop style (transparent).
 *   Identifiers: lowercase: 'transparent', camelCase: 'transparentBackdrop', snake_case: 'transparent_backdrop', ALL_CAP: 'TRANSPARENT', cache key: 'backdrop:transparent:componentId'.
 *   Model Identifier Format: 'transparent-{clickthrough}-{color}'.
 *   Variations and Use Cases: For non-blocking overlays in GEOCoLab or popovers.
 *   Example Usage: 'bg-transparent pointer-events-none'.
 *
 * - 'none': No backdrop.
 *   Classifications: Backdrop style (none).
 *   Identifiers: lowercase: 'none', camelCase: 'noBackdrop', snake_case: 'no_backdrop', ALL_CAP: 'NONE', cache key: 'backdrop:none:componentId'.
 *   Model Identifier Format: 'none-{fallback}-{state}'.
 *   Variations and Use Cases: For tooltips or inline dialogs in Trakfox.
 *   Example Usage: No backdrop element or 'hidden'.
 */
export type ModalBackdropTaxonomy = 'dark' | 'light' | 'blur' | 'transparent' | 'none';