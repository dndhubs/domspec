/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/status/resource-status-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ResourceStatusTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ResourceStatusTaxonomy
 * Union type representing ResourceStatusTaxonomy in the DOMSpec ecosystem.
 * Defines standardized statuses for resources across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with lifecycle management standards (e.g., ITIL for service management, HL7 for healthcare resource states, and ISO 27001 for data security states) to ensure consistent state tracking in APIs, workflows, and storage. Supports validation utilities in @domspecs/core for resource state transitions (e.g., Trakfox content lifecycle, HealthOrb DHIS2 patient record states by August 11, 2025).
 *
 * - 'draft': Resource is in initial creation or incomplete state.
 *   Classifications: Content management (CMS lifecycle), aligns with draft states in RFC 7231 (HTTP).
 *   Identifiers: lowercase: 'draft', camelCase: 'draftStatus', snake_case: 'draft_status', ALL_CAP: 'DRAFT', cache key: 'status:draft:resourceId'.
 *   Model Identifier Format: 'draft-{resourceType}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'in_progress', 'uncompleted'; used in Trakfox for draft articles, DnDHubs for draft product listings.
 *   @example
 *   POST /api/content { "type": "article", "status": "draft" } // Create draft article in Trakfox
 *
 * - 'pending': Resource is awaiting approval or processing.
 *   Classifications: Workflow standards (BPMN pending states), RESTful pending status.
 *   Identifiers: lowercase: 'pending', camelCase: 'pendingStatus', snake_case: 'pending_status', ALL_CAP: 'PENDING', cache key: 'status:pending:resourceId'.
 *   Model Identifier Format: 'pending-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'awaiting', 'under_review'; used in HealthOrb for pending patient records, GEOCoLab for pending data uploads ($99 tier).
 *   @example
 *   GET /api/patients?status=pending // Fetch pending patients in HealthOrb
 *
 * - 'active': Resource is fully operational and accessible.
 *   Classifications: ITIL active state, aligns with HL7 active resource status.
 *   Identifiers: lowercase: 'active', camelCase: 'activeStatus', snake_case: 'active_status', ALL_CAP: 'ACTIVE', cache key: 'status:active:resourceId'.
 *   Model Identifier Format: 'active-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'live', 'enabled'; used in Trakfox for active users, DnDHubs for active marketplace products.
 *   @example
 *   GET /api/users?status=active // Fetch active users in Trakfox
 *
 * - 'published': Resource is publicly available or finalized.
 *   Classifications: CMS standards (published content), aligns with RFC 7231.
 *   Identifiers: lowercase: 'published', camelCase: 'publishedStatus', snake_case: 'published_status', ALL_CAP: 'PUBLISHED', cache key: 'status:published:resourceId'.
 *   Model Identifier Format: 'published-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'released', 'public'; used in DataOrb for published reports, Trakfox for published posts.
 *   @example
 *   GET /api/reports?status=published // Fetch published reports in DataOrb
 *
 * - 'suspended': Resource is temporarily paused or restricted.
 *   Classifications: ITIL suspended state, security standards (ISO 27001).
 *   Identifiers: lowercase: 'suspended', camelCase: 'suspendedStatus', snake_case: 'suspended_status', ALL_CAP: 'SUSPENDED', cache key: 'status:suspended:resourceId'.
 *   Model Identifier Format: 'suspended-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'on_hold', 'inactive'; used in Trakfox for suspended user accounts, HealthOrb for paused patient services.
 *   @example
 *   POST /api/users/123 { "status": "suspended" } // Suspend user in Trakfox
 *
 * - 'archived': Resource is stored for historical reference.
 *   Classifications: Archival standards (ISO 14721), aligns with S3 Glacier storage.
 *   Identifiers: lowercase: 'archived', camelCase: 'archivedStatus', snake_case: 'archived_status', ALL_CAP: 'ARCHIVED', cache key: 'status:archived:resourceId'.
 *   Model Identifier Format: 'archived-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'stored', 'historical'; used in GEOCoLab for archived datasets ($2,497 tier), DataOrb for archived analytics.
 *   @example
 *   GET /api/datasets?status=archived // Fetch archived datasets in GEOCoLab
 *
 * - 'deleted': Resource is marked for deletion or logically removed.
 *   Classifications: Data management (GDPR soft delete), RESTful delete semantics.
 *   Identifiers: lowercase: 'deleted', camelCase: 'deletedStatus', snake_case: 'deleted_status', ALL_CAP: 'DELETED', cache key: 'status:deleted:resourceId'.
 *   Model Identifier Format: 'deleted-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'removed', 'trashed'; used in DnDHubs for deleted product listings, Trakfox for soft-deleted user data.
 *   @example
 *   DELETE /api/products/456 // Mark product as deleted in DnDHubs
 *
 * - 'expired': Resource has reached the end of its validity period.
 *   Classifications: Lifecycle management, aligns with OAuth token expiration.
 *   Identifiers: lowercase: 'expired', camelCase: 'expiredStatus', snake_case: 'expired_status', ALL_CAP: 'EXPIRED', cache key: 'status:expired:resourceId'.
 *   Model Identifier Format: 'expired-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'invalid', 'lapsed'; used in Trakfox for expired subscriptions, HealthOrb for expired prescriptions.
 *   @example
 *   GET /api/subscriptions?status=expired // Fetch expired subscriptions in Trakfox
 *
 * - 'locked': Resource is restricted due to security or access control.
 *   Classifications: Security standards (ISO 27001 locked state), RBAC.
 *   Identifiers: lowercase: 'locked', camelCase: 'lockedStatus', snake_case: 'locked_status', ALL_CAP: 'LOCKED', cache key: 'status:locked:resourceId'.
 *   Model Identifier Format: 'locked-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'restricted', 'frozen'; used in DnDHubs for locked user accounts, HealthOrb for locked patient records.
 *   @example
 *   POST /api/patients/789 { "status": "locked" } // Lock patient record in HealthOrb
 */
export type ResourceStatusTaxonomy = CoreResourceStatusTaxonomy | CustomResourceStatus;

/** Core resource statuses */
export type ActionVerbStatusTaxonomy = 
  | 'draft' 
  | 'pending' 
  | 'active' 
  | 'inactive' 
  | 'published' 
  | 'suspended'
  | 'archived' 
  | 'deleted'
  | 'expired'
  | 'deprecated' 
  | 'locked';

export type CustomResourceStatus = string & { __resourceStatus?: 'ResourceStatus' };