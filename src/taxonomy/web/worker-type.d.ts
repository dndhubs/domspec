/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/worker/worker-type-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/WorkerTypeTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20WorkerTypeTaxonomy
 * Union type representing WorkerTypeTaxonomy in the DOMSpec ecosystem.
 * Defines worker types for computational tasks in web and cloud environments, categorizing execution models. Aligns with standards like NIST SP 800-145 (Cloud Computing, for shared/dedicated models), ISO/IEC 27001 (Information Security Management, A.12 Operational Procedures), and W3C ServiceWorker API for service workers. Supports extensibility for custom worker types in FluxrKey params, integrated with Trakfox e-commerce for task processing, HealthOrb DHIS2 for background jobs, and DNDHUBS marketplace for scalable computations.
 *
 * - 'dedicated': Worker type for exclusive, isolated resources allocated to a single task or user.
 *   Classifications: Aligns with dedicated hosting models in NIST SP 800-145 (IaaS/PaaS dedicated instances), ISO/IEC 27001 A.11 (Physical and Environmental Security for isolation).
 *   Identifiers: lowercase: 'dedicated', camelCase: 'dedicatedWorker', snake_case: 'dedicated_worker', ALL_CAP: 'DEDICATED', cache key: 'workertype:dedicated:taskId'.
 *   Model Identifier Format: 'dedicated-{workerType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'exclusive'; used for high-performance tasks in Trakfox order processing or HealthOrb DHIS2 data syncing, ensuring no resource contention.
 *   Example Usage: Allocate dedicated worker for intensive computation in DNDHUBS backend services.
 *   @example
 *   Spawn dedicated worker: new Worker('script.js', { type: 'dedicated' }) in Trakfox for isolated rendering.
 *
 * - 'shared': Worker type for resources shared among multiple tasks or users.
 *   Classifications: Aligns with multi-tenant models in NIST SP 800-145 (shared cloud resources), ISO/IEC 27001 A.9 (Access Control for shared environments).
 *   Identifiers: lowercase: 'shared', camelCase: 'sharedWorker', snake_case: 'shared_worker', ALL_CAP: 'SHARED', cache key: 'workertype:shared:taskId'.
 *   Model Identifier Format: 'shared-{workerType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'multi-tenant'; used for cost-effective background jobs in Trakfox notifications or HealthOrb batch processing, optimizing resource utilization.
 *   Example Usage: Use shared worker for concurrent lightweight tasks in DNDHUBS marketplace APIs.
 *   @example
 *   Spawn shared worker: new SharedWorker('script.js') in HealthOrb for multi-tab synchronization.
 *
 * - 'service': Worker type for persistent, long-running service tasks.
 *   Classifications: Aligns with W3C ServiceWorker API for background services, ISO/IEC 12207 (Software Life Cycle for persistent processes).
 *   Identifiers: lowercase: 'service', camelCase: 'serviceWorker', snake_case: 'service_worker', ALL_CAP: 'SERVICE', cache key: 'workertype:service:taskId'.
 *   Model Identifier Format: 'service-{workerType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'background'; used for offline capabilities in Trakfox PWAs or HealthOrb push notifications, enabling always-on services.
 *   Example Usage: Register service worker for push notifications in DNDHUBS web apps.
 *   @example
 *   Register service worker: navigator.serviceWorker.register('sw.js') in Trakfox for offline access.
 *
 * - 'unknown': Worker type for unidentified or fallback worker models.
 *   Classifications: Aligns with error handling in NIST SP 800-53 (Contingency Planning), ISO/IEC 27001 A.16 (Incident Management for unknown states).
 *   Identifiers: lowercase: 'unknown', camelCase: 'unknownWorker', snake_case: 'unknown_worker', ALL_CAP: 'UNKNOWN', cache key: 'workertype:unknown:taskId'.
 *   Model Identifier Format: 'unknown-{workerType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'fallback'; used as default in Trakfox dynamic workers or HealthOrb legacy systems when type detection fails.
 *   Example Usage: Handle unknown worker type in error logging for DNDHUBS diagnostics.
 *   @example
 *   Detect unknown: if (worker.type === 'unknown') log('Fallback worker') in HealthOrb monitoring.
 */
export type WorkerTypeTaxonomy = CoreWorkerType | CustomWorkerType;

export type CoreWorkerType = 'dedicated' | 'shared' | 'service' | 'unknown';

export type CustomWorkerType = string & { __workertype?: 'CustomWorkerType' };