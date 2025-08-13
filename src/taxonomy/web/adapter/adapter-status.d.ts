/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/status/adapter-status-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/AdapterStatusTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20AdapterStatusTaxonomy
 * Union type representing AdapterStatusTaxonomy in the DOMSpec ecosystem.
 * Defines lifecycle statuses for adapters, enabling consistent management of adapter states across DNDHUBS platforms like Trakfox and HealthOrb. Aligns with software lifecycle standards (e.g., ISO/IEC 12207 for software processes) and common practices in API integrations and microservices.
 *
 * - 'active': Indicates the adapter is fully operational and in use.
 *   Classifications: Operational status; aligns with ISO/IEC 12207 deployment phase.
 *   Identifiers: lowercase: 'active', camelCase: 'activeStatus', snake_case: 'active_status', ALL_CAP: 'ACTIVE', cache key: 'status:active:adapterId'.
 *   Model Identifier Format: 'active-{adapterType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 *   Variations and Use Cases: Synonyms like 'live' or 'enabled'; used in production environments for real-time integrations, e.g., in HealthOrb DHIS2 data syncing or DnDHubs marketplace transactions.
 *   @example
 *   // Enabling an adapter in Trakfox API
 *   updateAdapterStatus(adapterId, 'active');
 *
 * - 'deprecated': Marks the adapter as outdated but still functional, signaling planned removal.
 *   Classifications: Transition status; aligns with ISO/IEC 12207 retirement planning.
 *   Identifiers: lowercase: 'deprecated', camelCase: 'deprecatedStatus', snake_case: 'deprecated_status', ALL_CAP: 'DEPRECATED', cache key: 'status:deprecated:adapterId'.
 *   Model Identifier Format: 'deprecated-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms like 'obsolete'; applied during migration phases, e.g., in Trakfox legacy system upgrades or DnDHubs version deprecations.
 *   @example
 *   // Notifying users in HealthOrb integrations
 *   logWarning(`Adapter ${adapterId} is deprecated; migrate to new version.`);
 *
 * - 'maintenance': Denotes the adapter is undergoing updates or fixes, potentially with limited availability.
 *   Classifications: Support status; aligns with ITIL service management practices.
 *   Identifiers: lowercase: 'maintenance', camelCase: 'maintenanceStatus', snake_case: 'maintenance_status', ALL_CAP: 'MAINTENANCE', cache key: 'status:maintenance:adapterId'.
 *   Model Identifier Format: 'maintenance-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms like 'under repair'; used for scheduled downtimes, e.g., in DnDHubs infrastructure patches or Trakfox beta testing cycles.
 *   @example
 *   // Temporarily disabling access in API gateway
 *   setAdapterMode(adapterId, 'maintenance');
 *
 * - 'inactive': Represents an adapter that is not in use but can be reactivated.
 *   Classifications: Dormant status; aligns with ISO/IEC 12207 archiving processes.
 *   Identifiers: lowercase: 'inactive', camelCase: 'inactiveStatus', snake_case: 'inactive_status', ALL_CAP: 'INACTIVE', cache key: 'status:inactive:adapterId'.
 *   Model Identifier Format: 'inactive-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms like 'disabled' or 'paused'; common in seasonal features, e.g., HealthOrb off-peak data adapters or DnDHubs archived connectors.
 *   @example
 *   // Archiving in Trakfox dashboard
 *   deactivateAdapter(adapterId);
 *
 * - 'suspended': Indicates the adapter is temporarily halted, often due to issues like security concerns.
 *   Classifications: Restricted status; aligns with compliance standards like GDPR suspension protocols.
 *   Identifiers: lowercase: 'suspended', camelCase: 'suspendedStatus', snake_case: 'suspended_status', ALL_CAP: 'SUSPENDED', cache key: 'status:suspended:adapterId'.
 *   Model Identifier Format: 'suspended-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms like 'blocked'; used in incident responses, e.g., Trakfox security breaches or HealthOrb regulatory holds.
 *   @example
 *   // Handling violations in DnDHubs
 *   suspendAdapter(adapterId, 'Security violation detected');
 */
export type AdapterStatusTaxonomy = 'active' | 'deprecated' | 'maintenance' | 'inactive' | 'suspended';