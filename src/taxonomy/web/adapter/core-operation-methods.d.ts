/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/adapter/AdapterCoreOperationMethodTaxonomy.ts
 * @see https://github.com/dndhubs/domspec/wiki/AdapterCoreOperationMethod
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20AdapterCoreOperationMethodTaxonomy
 * Union type representing AdapterCoreOperationMethodTaxonomy in the DOMSpec ecosystem.
 * This taxonomy defines standardized core operations for managing Fluxr Adapters in the Trakfox ecosystem,
 * covering connectivity, data management, transaction handling, and system optimization. It aligns with
 * RESTful API standards, database management protocols, ISO 20022, and microservice observability patterns,
 * supporting integrations with Trakfox, HealthOrb DHIS2, and DnDHubs platforms. The taxonomy is extensible
 * via CustomAdapterCoreOperationMethod for organization-specific operations.
 *
 * - 'ping': Checks the adapter's connectivity or availability.
 *   Classifications: Aligns with REST GET, ICMP ping, microservice health checks.
 *   Identifiers: lowercase: 'ping', camelCase: 'pingOperation', snake_case: 'ping_operation', ALL_CAP: 'PING', cache key: 'operation:ping:adapterId'.
 *   Model Identifier Format: 'ping-{adapterType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'check'; used in Trakfox for adapter availability or HealthOrb DHIS2 for data source connectivity.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/ping
 *   // Returns: { status: 'alive' }
 *   ```
 *   Example: Ping a Trakfox API connector to verify connectivity.
 *
 * - 'stats': Retrieves adapter usage or performance statistics.
 *   Classifications: Aligns with REST GET, OpenTelemetry observability standards.
 *   Identifiers: lowercase: 'stats', camelCase: 'statsOperation', snake_case: 'stats_operation', ALL_CAP: 'STATS', cache key: 'operation:stats:adapterId'.
 *   Model Identifier Format: 'stats-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'metrics'; used in Trakfox for adapter performance tracking or DnDHubs for marketplace analytics.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/stats
 *   // Returns: { requests: number, latency: number }
 *   ```
 *   Example: Fetch adapter statistics in Trakfox for performance monitoring.
 *
 * - 'transfer': Transfers data between systems or adapters.
 *   Classifications: Aligns with REST POST, ISO 20022 data transfer protocols.
 *   Identifiers: lowercase: 'transfer', camelCase: 'transferOperation', snake_case: 'transfer_operation', ALL_CAP: 'TRANSFER', cache key: 'operation:transfer:adapterId'.
 *   Model Identifier Format: 'transfer-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'move'; used in HealthOrb DHIS2 for data migration or Trakfox for cross-system data transfer.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/transfer
 *   // Body: { source: string, destination: string, data: object }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Transfer data between systems in Trakfox integrations.
 *
 * - 'migrate': Migrates data or configurations to a new system or adapter.
 *   Classifications: Aligns with REST POST, database migration standards.
 *   Identifiers: lowercase: 'migrate', camelCase: 'migrateOperation', snake_case: 'migrate_operation', ALL_CAP: 'MIGRATE', cache key: 'operation:migrate:adapterId'.
 *   Model Identifier Format: 'migrate-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'relocate'; used in Trakfox for system upgrades or HealthOrb DHIS2 for data migration.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/migrate
 *   // Body: { target: string, data: object }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Migrate user data in Trakfox during a system upgrade.
 *
 * - 'sync': Synchronizes data between systems or adapters.
 *   Classifications: Aligns with REST POST, real-time sync protocols.
 *   Identifiers: lowercase: 'sync', camelCase: 'syncOperation', snake_case: 'sync_operation', ALL_CAP: 'SYNC', cache key: 'operation:sync:adapterId'.
 *   Model Identifier Format: 'sync-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'synchronize'; used in HealthOrb DHIS2 for real-time data sync or Trakfox for inventory updates.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/sync
 *   // Body: { source: string, target: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Sync inventory data in Trakfox with an external system.
 *
 * - 'snapshot': Captures a point-in-time snapshot of adapter data or state.
 *   Classifications: Aligns with REST POST, database snapshot mechanisms.
 *   Identifiers: lowercase: 'snapshot', camelCase: 'snapshotOperation', snake_case: 'snapshot_operation', ALL_CAP: 'SNAPSHOT', cache key: 'operation:snapshot:adapterId'.
 *   Model Identifier Format: 'snapshot-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'capture'; used in Trakfox for data backups or DnDHubs for marketplace state snapshots.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/snapshot
 *   // Returns: { snapshotId: string }
 *   ```
 *   Example: Create a data snapshot in Trakfox for recovery purposes.
 *
 * - 'restore': Restores data or state from a snapshot.
 *   Classifications: Aligns with REST POST, database recovery mechanisms.
 *   Identifiers: lowercase: 'restore', camelCase: 'restoreOperation', snake_case: 'restore_operation', ALL_CAP: 'RESTORE', cache key: 'operation:restore:adapterId'.
 *   Model Identifier Format: 'restore-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'recover'; used in Trakfox for data restoration or HealthOrb DHIS2 for system recovery.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/restore
 *   // Body: { snapshotId: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Restore a Trakfox adapter state from a snapshot.
 *
 * - 'beginTransaction': Initiates a transaction for atomic operations.
 *   Classifications: Aligns with REST POST, database transaction protocols.
 *   Identifiers: lowercase: 'begintransaction', camelCase: 'beginTransactionOperation', snake_case: 'begin_transaction_operation', ALL_CAP: 'BEGIN_TRANSACTION', cache key: 'operation:begintransaction:adapterId'.
 *   Model Identifier Format: 'begintransaction-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'startTransaction'; used in Trakfox for atomic data updates or HealthOrb DHIS2 for transaction integrity.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/beginTransaction
 *   // Returns: { transactionId: string }
 *   ```
 *   Example: Begin a transaction in Trakfox for order updates.
 *
 * - 'commitTransaction': Commits an active transaction.
 *   Classifications: Aligns with REST POST, database transaction protocols.
 *   Identifiers: lowercase: 'committransaction', camelCase: 'commitTransactionOperation', snake_case: 'commit_transaction_operation', ALL_CAP: 'COMMIT_TRANSACTION', cache key: 'operation:committransaction:adapterId'.
 *   Model Identifier Format: 'committransaction-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'completeTransaction'; used in Trakfox for finalizing transactions or DnDHubs for marketplace updates.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/commitTransaction
 *   // Body: { transactionId: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Commit a transaction in Trakfox after order updates.
 *
 * - 'rollbackTransaction': Rolls back an active transaction.
 *   Classifications: Aligns with REST POST, database transaction protocols.
 *   Identifiers: lowercase: 'rollbacktransaction', camelCase: 'rollbackTransactionOperation', snake_case: 'rollback_transaction_operation', ALL_CAP: 'ROLLBACK_TRANSACTION', cache key: 'operation:rollbacktransaction:adapterId'.
 *   Model Identifier Format: 'rollbacktransaction-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'revertTransaction'; used in Trakfox for undoing failed updates or HealthOrb DHIS2 for transaction recovery.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/rollbackTransaction
 *   // Body: { transactionId: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Roll back a failed transaction in Trakfox.
 *
 * - 'watch': Monitors resources or events in real-time.
 *   Classifications: Aligns with REST POST, GraphQL subscription, ISO 20022 event-driven messaging.
 *   Identifiers: lowercase: 'watch', camelCase: 'watchOperation', snake_case: 'watch_operation', ALL_CAP: 'WATCH', cache key: 'operation:watch:adapterId'.
 *   Model Identifier Format: 'watch-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'monitor'; used in Trakfox for real-time analytics or HealthOrb DHIS2 for patient data monitoring.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/watch
 *   // Body: { resource: string }
 *   // Returns: { subscriptionId: string }
 *   ```
 *   Example: Watch order updates in Trakfox for real-time tracking.
 *
 * - 'lock': Locks a resource to prevent concurrent modifications.
 *   Classifications: Aligns with REST POST, database locking mechanisms.
 *   Identifiers: lowercase: 'lock', camelCase: 'lockOperation', snake_case: 'lock_operation', ALL_CAP: 'LOCK', cache key: 'operation:lock:adapterId'.
 *   Model Identifier Format: 'lock-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'reserve'; used in Trakfox for resource locking or DnDHubs for transaction safety.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/lock
 *   // Body: { resource: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Lock a resource in Trakfox for exclusive access.
 *
 * - 'unlock': Unlocks a previously locked resource.
 *   Classifications: Aligns with REST POST, database unlocking mechanisms.
 *   Identifiers: lowercase: 'unlock', camelCase: 'unlockOperation', snake_case: 'unlock_operation', ALL_CAP: 'UNLOCK', cache key: 'operation:unlock:adapterId'.
 *   Model Identifier Format: 'unlock-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'release'; used in Trakfox for releasing locks or HealthOrb DHIS2 for resource access management.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/unlock
 *   // Body: { resource: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Unlock a resource in Trakfox after modifications.
 *
 * - 'getCapabilities': Retrieves the adapter’s supported capabilities.
 *   Classifications: Aligns with REST GET, service discovery protocols.
 *   Identifiers: lowercase: 'getcapabilities', camelCase: 'getCapabilitiesOperation', snake_case: 'get_capabilities_operation', ALL_CAP: 'GET_CAPABILITIES', cache key: 'operation:getcapabilities:adapterId'.
 *   Model Identifier Format: 'getcapabilities-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'fetchCapabilities'; used in Trakfox for adapter feature discovery or DnDHubs for connector compatibility.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/capabilities
 *   // Returns: { capabilities: string[] }
 *   ```
 *   Example: Fetch adapter capabilities in Trakfox for integration planning.
 *
 * - 'explain': Provides detailed execution plans or diagnostics for operations.
 *   Classifications: Aligns with REST GET, database EXPLAIN commands.
 *   Identifiers: lowercase: 'explain', camelCase: 'explainOperation', snake_case: 'explain_operation', ALL_CAP: 'EXPLAIN', cache key: 'operation:explain:adapterId'.
 *   Model Identifier Format: 'explain-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'diagnose'; used in Trakfox for operation debugging or HealthOrb DHIS2 for query analysis.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/explain
 *   // Body: { operation: string }
 *   // Returns: { plan: object }
 *   ```
 *   Example: Explain a query execution plan in Trakfox.
 *
 * - 'vacuum': Performs cleanup or optimization of adapter resources.
 *   Classifications: Aligns with REST POST, database VACUUM commands.
 *   Identifiers: lowercase: 'vacuum', camelCase: 'vacuumOperation', snake_case: 'vacuum_operation', ALL_CAP: 'VACUUM', cache key: 'operation:vacuum:adapterId'.
 *   Model Identifier Format: 'vacuum-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'clean'; used in Trakfox for resource optimization or HealthOrb DHIS2 for database maintenance.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/vacuum
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Vacuum unused resources in Trakfox for performance.
 *
 * - 'replicate': Replicates data or configurations across systems.
 *   Classifications: Aligns with REST POST, database replication protocols.
 *   Identifiers: lowercase: 'replicate', camelCase: 'replicateOperation', snake_case: 'replicate_operation', ALL_CAP: 'REPLICATE', cache key: 'operation:replicate:adapterId'.
 *   Model Identifier Format: 'replicate-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'copy'; used in Trakfox for data replication or DnDHubs for marketplace synchronization.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/replicate
 *   // Body: { target: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Replicate data in Trakfox for redundancy.
 *
 * - 'backup': Creates a backup of adapter data or configurations.
 *   Classifications: Aligns with REST POST, backup and recovery standards.
 *   Identifiers: lowercase: 'backup', camelCase: 'backupOperation', snake_case: 'backup_operation', ALL_CAP: 'BACKUP', cache key: 'operation:backup:adapterId'.
 *   Model Identifier Format: 'backup-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'archive'; used in Trakfox for data backups or HealthOrb DHIS2 for system backups.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/backup
 *   // Returns: { backupId: string }
 *   ```
 *   Example: Create a backup in Trakfox for data recovery.
 *
 * - 'monitor': Monitors adapter performance or system health.
 *   Classifications: Aligns with REST GET, observability standards (e.g., Prometheus).
 *   Identifiers: lowercase: 'monitor', camelCase: 'monitorOperation', snake_case: 'monitor_operation', ALL_CAP: 'MONITOR', cache key: 'operation:monitor:adapterId'.
 *   Model Identifier Format: 'monitor-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'observe'; used in Trakfox for real-time monitoring or HealthOrb DHIS2 for system health tracking.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/monitor
 *   // Returns: { status: string, metrics: object }
 *   ```
 *   Example: Monitor adapter health in Trakfox analytics dashboard.
 *
 * - 'optimize': Optimizes adapter performance or resource usage.
 *   Classifications: Aligns with REST POST, database optimization protocols.
 *   Identifiers: lowercase: 'optimize', camelCase: 'optimizeOperation', snake_case: 'optimize_operation', ALL_CAP: 'OPTIMIZE', cache key: 'operation:optimize:adapterId'.
 *   Model Identifier Format: 'optimize-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'tune'; used in Trakfox for performance optimization or DnDHubs for resource efficiency.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/optimize
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Optimize adapter performance in Trakfox.
 *
 * - 'validate': Validates adapter data or configurations.
 *   Classifications: Aligns with REST POST, data validation standards.
 *   Identifiers: lowercase: 'validate', camelCase: 'validateOperation', snake_case: 'validate_operation', ALL_CAP: 'VALIDATE', cache key: 'operation:validate:adapterId'.
 *   Model Identifier Format: 'validate-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'verify'; used in Trakfox for data integrity checks or HealthOrb DHIS2 for configuration validation.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/validate
 *   // Body: { data: object }
 *   // Returns: { valid: boolean, errors: string[] }
 *   ```
 *   Example: Validate adapter configurations in Trakfox.
 *
 * - 'compact': Compacts adapter data or resources to reduce storage.
 *   Classifications: Aligns with REST POST, database compaction mechanisms.
 *   Identifiers: lowercase: 'compact', camelCase: 'compactOperation', snake_case: 'compact_operation', ALL_CAP: 'COMPACT', cache key: 'operation:compact:adapterId'.
 *   Model Identifier Format: 'compact-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'compress'; used in Trakfox for storage optimization or DnDHubs for resource compaction.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/compact
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Compact adapter data in Trakfox for efficiency.
 *
 * - 'export': Exports adapter data or configurations to an external format.
 *   Classifications: Aligns with REST GET, data export standards.
 *   Identifiers: lowercase: 'export', camelCase: 'exportOperation', snake_case: 'export_operation', ALL_CAP: 'EXPORT', cache key: 'operation:export:adapterId'.
 *   Model Identifier Format: 'export-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'extract'; used in Trakfox for data exports or HealthOrb DHIS2 for report generation.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/export
 *   // Returns: { data: object }
 *   ```
 *   Example: Export adapter data in Trakfox for external use.
 *
 * - 'import': Imports data or configurations into the adapter.
 *   Classifications: Aligns with REST POST, data import standards.
 *   Identifiers: lowercase: 'import', camelCase: 'importOperation', snake_case: 'import_operation', ALL_CAP: 'IMPORT', cache key: 'operation:import:adapterId'.
 *   Model Identifier Format: 'import-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'load'; used in Trakfox for data imports or DnDHubs for configuration imports.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/import
 *   // Body: { data: object }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Import configuration data in Trakfox.
 *
 * - 'diff': Compares data or configurations for differences.
 *   Classifications: Aligns with REST GET, data comparison protocols.
 *   Identifiers: lowercase: 'diff', camelCase: 'diffOperation', snake_case: 'diff_operation', ALL_CAP: 'DIFF', cache key: 'operation:diff:adapterId'.
 *   Model Identifier Format: 'diff-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'compare'; used in Trakfox for configuration comparisons or HealthOrb DHIS2 for data reconciliation.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/diff
 *   // Body: { source: string, target: string }
 *   // Returns: { differences: object }
 *   ```
 *   Example: Compare adapter configurations in Trakfox for consistency.
 */
export type AdapterCoreOperationMethodTaxonomy = 'ping' | 'stats' | 'transfer' | 'migrate' | 'sync' | 'snapshot' | 'restore' | 'beginTransaction' | 'commitTransaction' | 'rollbackTransaction' | 'watch' | 'lock' | 'unlock' | 'getCapabilities' | 'explain' | 'vacuum' | 'replicate' | 'backup' | 'monitor' | 'optimize' | 'validate' | 'compact' | 'export' | 'import' | 'diff';