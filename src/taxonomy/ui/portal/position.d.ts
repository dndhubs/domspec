/**
 * Union type representing PortalPosition in the Framr UI ecosystem, defining positioning for layout control in components via Tailwind CSS utilities.
 * These positions align with CSS standards and Remix responsive patterns, used for overlays/menus across PortalKeys.
 * Each variant includes details for consistency in storage (e.g., layout configs) and validation.
 *
 * - 'static': Default flow positioning.
 *   Classifications: CSS position (static); default HTML behavior.
 *   Identifiers: lowercase: 'static', camelCase: 'staticPosition', snake_case: 'static_position', ALL_CAP: 'STATIC', cache key: 'position:static:portalId'.
 *   Model Identifier Format: 'static-{parent}-{child}' (kebab-case for DOM flow).
 *   Variations and Use Cases: Synonyms: 'default'; for inline content in Trakfox.
 *   Example Usage: 'position-static' for body text.
 *
 * - 'relative': Relative to normal position.
 *   Classifications: CSS position (relative).
 *   Identifiers: lowercase: 'relative', camelCase: 'relativePosition', snake_case: 'relative_position', ALL_CAP: 'RELATIVE', cache key: 'position:relative:portalId'.
 *   Model Identifier Format: 'relative-{top}-{left}'.
 *   Variations and Use Cases: For offsets in HealthOrb forms.
 *   Example Usage: 'relative top-2'.
 *
 * - 'absolute': Absolute to nearest positioned ancestor.
 *   Classifications: CSS position (absolute).
 *   Identifiers: lowercase: 'absolute', camelCase: 'absolutePosition', snake_case: 'absolute_position', ALL_CAP: 'ABSOLUTE', cache key: 'position:absolute:portalId'.
 *   Model Identifier Format: 'absolute-{inset}-{z}'.
 *   Variations and Use Cases: For tooltips in DnDHubs.
 *   Example Usage: 'absolute inset-0'.
 *
 * - 'fixed': Fixed to viewport.
 *   Classifications: CSS position (fixed).
 *   Identifiers: lowercase: 'fixed', camelCase: 'fixedPosition', snake_case: 'fixed_position', ALL_CAP: 'FIXED', cache key: 'position:fixed:portalId'.
 *   Model Identifier Format: 'fixed-{top}-{bottom}'.
 *   Variations and Use Cases: For headers in GEOCoLab.
 *   Example Usage: 'fixed top-0'.
 *
 * - 'sticky': Sticky within scrolling ancestor.
 *   Classifications: CSS position (sticky).
 *   Identifiers: lowercase: 'sticky', camelCase: 'stickyPosition', snake_case: 'sticky_position', ALL_CAP: 'STICKY', cache key: 'position:sticky:portalId'.
 *   Model Identifier Format: 'sticky-{threshold}-{z}'.
 *   Variations and Use Cases: For navbars in Trakfox.
 *   Example Usage: 'sticky top-0'.
 *
 * - 'floating': Floating like popovers.
 *   Classifications: Position (floating); Popover API inspired.
 *   Identifiers: lowercase: 'floating', camelCase: 'floatingPosition', snake_case: 'floating_position', ALL_CAP: 'FLOATING', cache key: 'position:floating:portalId'.
 *   Model Identifier Format: 'floating-{anchor}-{offset}'.
 *   Variations and Use Cases: For menus in HealthOrb.
 *   Example Usage: Floating div with anchor ref.
 *
 * - 'anchored': Anchored to element.
 *   Classifications: Position (anchored).
 *   Identifiers: lowercase: 'anchored', camelCase: 'anchoredPosition', snake_case: 'anchored_position', ALL_CAP: 'ANCHORED', cache key: 'position:anchored:portalId'.
 *   Model Identifier Format: 'anchored-{element}-{direction}'.
 *   Variations and Use Cases: For drawers.
 *   Example Usage: Anchored to right edge.
 *
 * - 'fullscreen': Full viewport cover.
 *   Classifications: Position (fullscreen).
 *   Identifiers: lowercase: 'fullscreen', camelCase: 'fullscreenPosition', snake_case: 'fullscreen_position', ALL_CAP: 'FULLSCREEN', cache key: 'position:fullscreen:portalId'.
 *   Model Identifier Format: 'fullscreen-{z}-{overlay}'.
 *   Variations and Use Cases: For modals.
 *   Example Usage: 'fixed inset-0'.
 *
 * - 'inline': Inline within text flow.
 *   Classifications: Position (inline).
 *   Identifiers: lowercase: 'inline', camelCase: 'inlinePosition', snake_case: 'inline_position', ALL_CAP: 'INLINE', cache key: 'position:inline:portalId'.
 *   Model Identifier Format: 'inline-{display}-{float}'.
 *   Variations and Use Cases: For badges in text.
 *   Example Usage: 'inline-block'.
 */
export type PortalPositionTaxonomy = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'floating' | 'anchored' | 'fullscreen' | 'inline';