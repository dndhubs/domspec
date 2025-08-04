/**
 * Union type representing FormLayout in the Framr UI ecosystem, defining layouts for form/search components like 'form' or input groups.
 * These layouts align with Tailwind grid/flex for responsive forms, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'vertical': Vertical stacked fields.
 *   Classifications: Layout (vertical); CSS flex-col.
 *   Identifiers: lowercase: 'vertical', camelCase: 'verticalLayout', snake_case: 'vertical_layout', ALL_CAP: 'VERTICAL', cache key: 'formlayout:vertical:componentId'.
 *   Model Identifier Format: 'vertical-{labelPosition}-{gap}' (kebab-case for CSS configs).
 *   Variations and Use Cases: Synonyms: 'stacked'; for long forms in Trakfox or signup pages; validate via `isValidFormLayout(layout)`.
 *   Example Usage: <FormPortal layout='vertical'> with 'flex flex-col gap-4'.
 *
 * - 'horizontal': Horizontal label-field layout.
 *   Classifications: Layout (horizontal).
 *   Identifiers: lowercase: 'horizontal', camelCase: 'horizontalLayout', snake_case: 'horizontal_layout', ALL_CAP: 'HORIZONTAL', cache key: 'formlayout:horizontal:componentId'.
 *   Model Identifier Format: 'horizontal-{ratio}-{gap}'.
 *   Variations and Use Cases: For compact forms in HealthOrb or inline filters.
 *   Example Usage: 'grid grid-cols-2 gap-4'.
 *
 * - 'inline': Inline fields layout.
 *   Classifications: Layout (inline).
 *   Identifiers: lowercase: 'inline', camelCase: 'inlineLayout', snake_case: 'inline_layout', ALL_CAP: 'INLINE', cache key: 'formlayout:inline:componentId'.
 *   Model Identifier Format: 'inline-{wrap}-{gap}'.
 *   Variations and Use Cases: For search bars in DnDHubs or quick inputs.
 *   Example Usage: 'flex flex-wrap gap-2'.
 *
 * - 'grid': Grid-based fields layout.
 *   Classifications: Layout (grid).
 *   Identifiers: lowercase: 'grid', camelCase: 'gridLayout', snake_case: 'grid_layout', ALL_CAP: 'GRID', cache key: 'formlayout:grid:componentId'.
 *   Model Identifier Format: 'grid-{cols}-{rows}'.
 *   Variations and Use Cases: For complex forms in GEOCoLab or multi-field inputs.
 *   Example Usage: 'grid grid-cols-3 gap-4'.
 *
 * - 'stepped': Stepped wizard layout.
 *   Classifications: Layout (stepped).
 *   Identifiers: lowercase: 'stepped', camelCase: 'steppedLayout', snake_case: 'stepped_layout', ALL_CAP: 'STEPPED', cache key: 'formlayout:stepped:componentId'.
 *   Model Identifier Format: 'stepped-{step}-{progress}'.
 *   Variations and Use Cases: For multi-step forms in Trakfox or onboarding wizards.
 *   Example Usage: 'flex flex-col with progress bar'.
 */
export type FormLayoutTaxonomy = 'vertical' | 'horizontal' | 'inline' | 'grid' | 'stepped';