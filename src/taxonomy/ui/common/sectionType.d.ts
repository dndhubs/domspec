/**
 * Union type representing SectionType in the Framr UI ecosystem, defining types for content components like 'section', 'article', or other structured blocks.
 * These types align with semantic HTML and Tailwind prose for structured content, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., content configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'hero': Hero section type.
 *   Classifications: Section type (hero); large banner.
 *   Identifiers: lowercase: 'hero', camelCase: 'heroType', snake_case: 'hero_type', ALL_CAP: 'HERO', cache key: 'sectiontype:hero:componentId'.
 *   Model Identifier Format: 'hero-{image}-{cta}' (kebab-case for hero configs).
 *   Variations and Use Cases: Synonyms: 'bannerHero'; for landing pages in Trakfox or featured sections.
 *   Example Usage: <Section type='hero'> with 'bg-cover h-96'.
 *
 * - 'callout': Callout highlight type.
 *   Classifications: Section type (callout).
 *   Identifiers: lowercase: 'callout', camelCase: 'calloutType', snake_case: 'callout_type', ALL_CAP: 'CALLOUT', cache key: 'sectiontype:callout:componentId'.
 *   Model Identifier Format: 'callout-{icon}-{color}'.
 *   Variations and Use Cases: For tips in HealthOrb docs or highlighted notes.
 *   Example Usage: 'border-l-4 p-4 bg-info-100'.
 *
 * - 'article': Article body type.
 *   Classifications: Section type (article).
 *   Identifiers: lowercase: 'article', camelCase: 'articleType', snake_case: 'article_type', ALL_CAP: 'ARTICLE', cache key: 'sectiontype:article:componentId'.
 *   Model Identifier Format: 'article-{prose}-{headings}'.
 *   Variations and Use Cases: For blogs in DnDHubs or long-form content.
 *   Example Usage: 'prose prose-lg max-w-3xl'.
 *
 * - 'faq': FAQ accordion type.
 *   Classifications: Section type (faq).
 *   Identifiers: lowercase: 'faq', camelCase: 'faqType', snake_case: 'faq_type', ALL_CAP: 'FAQ', cache key: 'sectiontype:faq:componentId'.
 *   Model Identifier Format: 'faq-{question}-{answer}'.
 *   Variations and Use Cases: For support sections in GEOCoLab or Q&A blocks.
 *   Example Usage: Accordion with question/answer pairs.
 *
 * - 'timeline': Timeline event type.
 *   Classifications: Section type (timeline).
 *   Identifiers: lowercase: 'timeline', camelCase: 'timelineType', snake_case: 'timeline_type', ALL_CAP: 'TIMELINE', cache key: 'sectiontype:timeline:componentId'.
 *   Model Identifier Format: 'timeline-{event}-{date}'.
 *   Variations and Use Cases: For histories in Trakfox or event logs.
 *   Example Usage: 'relative before:absolute before:left-4 before:w-0.5 before:h-full before:bg-gray-200'.
 *
 * - 'comparison': Comparison table type.
 *   Classifications: Section type (comparison).
 *   Identifiers: lowercase: 'comparison', camelCase: 'comparisonType', snake_case: 'comparison_type', ALL_CAP: 'COMPARISON', cache key: 'sectiontype:comparison:componentId'.
 *   Model Identifier Format: 'comparison-{columns}-{rows}'.
 *   Variations and Use Cases: For feature tables in HealthOrb or product comparisons.
 *   Example Usage: 'table w-full' with thead/tbody.
 */
export type SectionTypeTaxonomy = 'hero' | 'callout' | 'article' | 'faq' | 'timeline' | 'comparison';