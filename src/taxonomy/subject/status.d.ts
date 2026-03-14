/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/subject/subject-status-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/SubjectStatusTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20SubjectStatusTaxonomy
 * Union type representing SubjectStatusTaxonomy in the DOMSpec ecosystem.
 * Defines standardized statuses for subjects (e.g., users, services, organizations) across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with identity and access management standards (e.g., NIST SP 800-63 for identity lifecycle, ITIL for service management, ISO 27001 for security states) to ensure consistent subject state tracking in APIs, authentication, and authorization workflows. Supports validation utilities in @domspecs/core for subject status transitions (e.g., Trakfox user management, HealthOrb DHIS2 system status by August 11, 2025).
 *
 * - 'active': Subject is fully operational and authorized to interact.
 *   Classifications: Identity lifecycle (NIST SP 800-63 active state), aligns with ITIL operational states.
 *   Identifiers: lowercase: 'active', camelCase: 'activeStatus', snake_case: 'active_status', ALL_CAP: 'ACTIVE', cache key: 'status:active:subjectId'.
 *   Model Identifier Format: 'active-{subjectType}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'enabled', 'live'; used in Trakfox for active user accounts, HealthOrb for active patient profiles.
 *   @example
 *   GET /api/users?status=active // Fetch active users in Trakfox
 *
 * - 'inactive': Subject is temporarily disabled or not operational.
 *   Classifications: Identity management (NIST SP 800-63 inactive state), aligns with ISO 27001 restricted access.
 *   Identifiers: lowercase: 'inactive', camelCase: 'inactiveStatus', snake_case: 'inactive_status', ALL_CAP: 'INACTIVE', cache key: 'status:inactive:subjectId'.
 *   Model Identifier Format: 'inactive-{subjectType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'disabled', 'paused'; used in DnDHubs for inactive services, GEOCoLab for inactive research accounts ($99 tier).
 *   @example
 *   POST /api/services/123 { "status": "inactive" } // Set service inactive in DnDHubs
 *
 * - 'suspended': Subject is temporarily restricted due to policy or security issues.
 *   Classifications: Security standards (ISO 27001 suspended state), aligns with RBAC restrictions.
 *   Identifiers: lowercase: 'suspended', camelCase: 'suspendedStatus', snake_case: 'suspended_status', ALL_CAP: 'SUSPENDED', cache key: 'status:suspended:subjectId'.
 *   Model Identifier Format: 'suspended-{subjectType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'on_hold', 'restricted'; used in Trakfox for suspended user accounts, HealthOrb for suspended patient access.
 *   @example
 *   POST /api/patients/456 { "status": "suspended" } // Suspend patient in HealthOrb
 *
 * - 'blocked': Subject is permanently restricted from access or interaction.
 *   Classifications: Security standards (ISO 27001 blocked state), aligns with OAuth access revocation.
 *   Identifiers: lowercase: 'blocked', camelCase: 'blockedStatus', snake_case: 'blocked_status', ALL_CAP: 'BLOCKED', cache key: 'status:blocked:subjectId'.
 *   Model Identifier Format: 'blocked-{subjectType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'banned', 'locked'; used in DnDHubs for blocked organizations, Trakfox for blocked user accounts.
 *   @example
 *   POST /api/organizations/789 { "status": "blocked" } // Block organization in DnDHubs
 *
 * - 'deleted': Subject is logically removed or marked for deletion.
 *   Classifications: Data management (GDPR soft delete), aligns with RESTful delete semantics.
 *   Identifiers: lowercase: 'deleted', camelCase: 'deletedStatus', snake_case: 'deleted_status', ALL_CAP: 'DELETED', cache key: 'status:deleted:subjectId'.
 *   Model Identifier Format: 'deleted-{subjectType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'removed', 'trashed'; used in Trakfox for deleted user profiles, GEOCoLab for deleted device records ($2,497 tier).
 *   @example
 *   DELETE /api/users/101 // Mark user as deleted in Trakfox
 */
export type SubjectStatusTaxonomy = CoreSubjectStatusTaxonomy | CustomSubjectStatus;

/** Core subject statuses */
export type CoreSubjectStatusTaxonomy = 
  | 'active' 
  | 'inactive' 
  | 'suspended' 
  | 'blocked' 
  | 'deleted';

export type CustomSubjectStatus = string & { __subjectStatus?: 'SubjectStatus' };