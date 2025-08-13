/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/visibility/visibility-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/VisibilityTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20VisibilityTaxonomy
 * Union type representing VisibilityTaxonomy in the DOMSpec ecosystem.
 * Defines standardized visibility levels for resources across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with access control standards (e.g., RBAC, ISO 27001 for data security, HL7 for healthcare data access) to ensure consistent permission and sharing policies in APIs, workflows, and storage. Supports validation utilities in @domspecs/core for secure resource access control (e.g., Trakfox content visibility, HealthOrb DHIS2 patient data access by August 11, 2025).
 *
 * - 'public': Resource is accessible to all users without restrictions.
 *   Classifications: Open access standards, aligns with RESTful public APIs (RFC 7231).
 *   Identifiers: lowercase: 'public', camelCase: 'publicVisibility', snake_case: 'public_visibility', ALL_CAP: 'PUBLIC', cache key: 'visibility:public:resourceId'.
 *   Model Identifier Format: 'public-{resourceType}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'open', 'unrestricted'; used in Trakfox for public articles, DnDHubs for public product listings.
 *   @example
 *   GET /api/content?visibility=public // Fetch public articles in Trakfox
 *
 * - 'private': Resource is accessible only to the owner or creator.
 *   Classifications: RBAC private access, aligns with ISO 27001 restricted data.
 *   Identifiers: lowercase: 'private', camelCase: 'privateVisibility', snake_case: 'private_visibility', ALL_CAP: 'PRIVATE', cache key: 'visibility:private:resourceId'.
 *   Model Identifier Format: 'private-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'personal', 'exclusive'; used in HealthOrb for private patient records, Trakfox for private user profiles.
 *   @example
 *   GET /api/patients/123?visibility=private // Fetch private patient record in HealthOrb
 *
 * - 'restricted': Resource is accessible to a specific group or role with permissions.
 *   Classifications: RBAC restricted access, aligns with OAuth scope-based access.
 *   Identifiers: lowercase: 'restricted', camelCase: 'restrictedVisibility', snake_case: 'restricted_visibility', ALL_CAP: 'RESTRICTED', cache key: 'visibility:restricted:resourceId'.
 *   Model Identifier Format: 'restricted-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'limited', 'controlled'; used in GEOCoLab for restricted datasets ($99 tier), DnDHubs for role-based product access.
 *   @example
 *   GET /api/datasets?visibility=restricted&role=researcher // Fetch restricted dataset in GEOCoLab
 *
 * - 'internal': Resource is accessible only within the organization.
 *   Classifications: Internal access standards, aligns with ISO 27001 internal data policies.
 *   Identifiers: lowercase: 'internal', camelCase: 'internalVisibility', snake_case: 'internal_visibility', ALL_CAP: 'INTERNAL', cache key: 'visibility:internal:resourceId'.
 *   Model Identifier Format: 'internal-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'company', 'org-only'; used in Trakfox for internal reports, HealthOrb for internal staff communications.
 *   @example
 *   GET /api/reports?visibility=internal // Fetch internal reports in Trakfox
 *
 * - 'confidential': Resource is highly sensitive and restricted to authorized personnel.
 *   Classifications: Data security standards (ISO 27001, HIPAA for healthcare).
 *   Identifiers: lowercase: 'confidential', camelCase: 'confidentialVisibility', snake_case: 'confidential_visibility', ALL_CAP: 'CONFIDENTIAL', cache key: 'visibility:confidential:resourceId'.
 *   Model Identifier Format: 'confidential-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sensitive', 'classified'; used in HealthOrb for confidential patient data, GEOCoLab for proprietary research ($2,497 tier).
 *   @example
 *   GET /api/patients/456?visibility=confidential // Fetch confidential patient data in HealthOrb
 *
 * - 'shared': Resource is accessible to a defined set of users or groups.
 *   Classifications: Collaborative access, aligns with OAuth shared resource models.
 *   Identifiers: lowercase: 'shared', camelCase: 'sharedVisibility', snake_case: 'shared_visibility', ALL_CAP: 'SHARED', cache key: 'visibility:shared:resourceId'.
 *   Model Identifier Format: 'shared-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'collaborative', 'group'; used in DnDHubs for shared team documents, Trakfox for shared project files.
 *   @example
 *   POST /api/documents { "visibility": "shared", "group": "team123" } // Share document in DnDHubs
 */
export type VisibilityTaxonomy = CoreVisibilityTaxonomy | CustomVisibility;

/** Core resource visibility levels */
export type CoreVisibilityTaxonomy = 
  | 'public' 
  | 'private' 
  | 'restricted' 
  | 'internal'
  | 'confidential'
  | 'shared';

export type CustomVisibility = string & { __visibility?: 'CustomVisibility' };