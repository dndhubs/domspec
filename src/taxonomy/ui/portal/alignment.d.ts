/**
 * Union type representing PortalAlignment in the Framr UI ecosystem, defining content/text alignment for layout in Tailwind CSS.
 * These alignments align with CSS flex/grid standards, used for centering/justifying across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'left': Align to left.
 *   Classifications: Alignment (left); CSS text-align/left.
 *   Identifiers: lowercase: 'left', camelCase: 'leftAlignment', snake_case: 'left_alignment', ALL_CAP: 'LEFT', cache key: 'alignment:left:portalId'.
 *   Model Identifier Format: 'left-{rtl}-{direction}' (kebab-case for LTR/RTL).
 *   Variations and Use Cases: Synonyms: 'start'; for text in Trakfox articles.
 *   Example Usage: 'text-left' or 'justify-start'.
 *
 * - 'center': Center alignment.
 *   Classifications: Alignment (center).
 *   Identifiers: lowercase: 'center', camelCase: 'centerAlignment', snake_case: 'center_alignment', ALL_CAP: 'CENTER', cache key: 'alignment:center:portalId'.
 *   Model Identifier Format: 'center-{axis}-{type}'.
 *   Variations and Use Cases: For titles in HealthOrb.
 *   Example Usage: 'text-center mx-auto'.
 *
 * - 'right': Align to right.
 *   Classifications: Alignment (right).
 *   Identifiers: lowercase: 'right', camelCase: 'rightAlignment', snake_case: 'right_alignment', ALL_CAP: 'RIGHT', cache key: 'alignment:right:portalId'.
 *   Model Identifier Format: 'right-{rtl}-{direction}'.
 *   Variations and Use Cases: Synonyms: 'end'; for actions in DnDHubs.
 *   Example Usage: 'text-right'.
 *
 * - 'justify': Justify text.
 *   Classifications: Alignment (justify).
 *   Identifiers: lowercase: 'justify', camelCase: 'justifyAlignment', snake_case: 'justify_alignment', ALL_CAP: 'JUSTIFY', cache key: 'alignment:justify:portalId'.
 *   Model Identifier Format: 'justify-{hyphens}-{type}'.
 *   Variations and Use Cases: For paragraphs in GEOCoLab docs.
 *   Example Usage: 'text-justify'.
 *
 * - 'start': Align to start (LTR left, RTL right).
 *   Classifications: Alignment (start).
 *   Identifiers: lowercase: 'start', camelCase: 'startAlignment', snake_case: 'start_alignment', ALL_CAP: 'START', cache key: 'alignment:start:portalId'.
 *   Model Identifier Format: 'start-{direction}-{flex}'.
 *   Variations and Use Cases: For flex items.
 *   Example Usage: 'justify-start'.
 *
 * - 'end': Align to end (LTR right, RTL left).
 *   Classifications: Alignment (end).
 *   Identifiers: lowercase: 'end', camelCase: 'endAlignment', snake_case: 'end_alignment', ALL_CAP: 'END', cache key: 'alignment:end:portalId'.
 *   Model Identifier Format: 'end-{direction}-{flex}'.
 *   Variations and Use Cases: For flex ends.
 *   Example Usage: 'justify-end'.
 *
 * - 'space-between': Space between items.
 *   Classifications: Alignment (space-between).
 *   Identifiers: lowercase: 'space-between', camelCase: 'spaceBetweenAlignment', snake_case: 'space_between_alignment', ALL_CAP: 'SPACE_BETWEEN', cache key: 'alignment:space-between:portalId'.
 *   Model Identifier Format: 'space-between-{items}-{gap}'.
 *   Variations and Use Cases: For nav menus.
 *   Example Usage: 'justify-space-between'.
 */
export type PortalAlignmentTaxonomy = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end' | 'space-between';