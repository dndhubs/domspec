/**
 * Union type representing FormValidation in the Framr UI ecosystem, defining validation timings for form/search components like 'form' or input fields.
 * These validations align with HTML5 validation and Framr form actions for real-time checks, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., validation configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'onBlur': Validate on field blur.
 *   Classifications: Validation timing (onBlur); HTML5 onblur event.
 *   Identifiers: lowercase: 'onblur', camelCase: 'onBlurValidation', snake_case: 'on_blur_validation', ALL_CAP: 'ON_BLUR', cache key: 'validation:onblur:componentId'.
 *   Model Identifier Format: 'onblur-{field}-{error}' (kebab-case for event handlers).
 *   Variations and Use Cases: Synonyms: 'onLeave'; for inputs in Trakfox forms or email fields; validate via `isValidValidationMode(mode)`.
 *   Example Usage: <Input validation='onBlur'> with onBlur={validateEmail}.
 *
 * - 'onChange': Validate on value change.
 *   Classifications: Validation timing (onChange).
 *   Identifiers: lowercase: 'onchange', camelCase: 'onChangeValidation', snake_case: 'on_change_validation', ALL_CAP: 'ON_CHANGE', cache key: 'validation:onchange:componentId'.
 *   Model Identifier Format: 'onchange-{debounce}-{error}'.
 *   Variations and Use Cases: For real-time validation in HealthOrb search inputs.
 *   Example Usage: onChange={debouncedValidate}.
 *
 * - 'onSubmit': Validate on form submit.
 *   Classifications: Validation timing (onSubmit).
 *   Identifiers: lowercase: 'onsubmit', camelCase: 'onSubmitValidation', snake_case: 'on_submit_validation', ALL_CAP: 'ON_SUBMIT', cache key: 'validation:onsubmit:componentId'.
 *   Model Identifier Format: 'onsubmit-{server}-{client}'.
 *   Variations and Use Cases: For Remix actions in DnDHubs checkout forms.
 *   Example Usage: onSubmit={validateAllFields}.
 *
 * - 'realtime': Continuous validation.
 *   Classifications: Validation timing (realtime).
 *   Identifiers: lowercase: 'realtime', camelCase: 'realtimeValidation', snake_case: 'realtime_validation', ALL_CAP: 'REALTIME', cache key: 'validation:realtime:componentId'.
 *   Model Identifier Format: 'realtime-{interval}-{error}'.
 *   Variations and Use Cases: For search bars in GEOCoLab or live form checks.
 *   Example Usage: useEffect on value change for instant feedback.
 */
export type FormValidationTaxonomy = 'onBlur' | 'onChange' | 'onSubmit' | 'realtime';