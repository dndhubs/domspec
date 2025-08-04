/**
 * Union type representing DeploymentInstanceTaxonomy in the DOMSpec ecosystem.
 * Defines instance roles for FluxrKey generation and error tracking in @dndhub/error.
 * Supports deployment-specific instances like primaries/replicas for distributed systems tracking.
 *
 * - 'primary': Primary instance for core operations.
 *   Classifications: Master-primary replication.
 *   Identifiers: lowercase: 'primary', camelCase: 'primaryInstance', snake_case: 'primary_instance', ALL_CAP: 'PRIMARY', cache key: 'instance:primary:errId'.
 *   Model Identifier Format: 'instance-primary-{timestamp}'.
 *   Variations and Use Cases: Main DB/write node; errors in high-availability failovers.
 *   Example Usage: Primary instance errors in Supabase via DomsError.ts.
 *
 * - 'replica': Replica instance for read scaling.
 *   Classifications: Read replicas.
 *   Identifiers: lowercase: 'replica', camelCase: 'replicaInstance', snake_case: 'replica_instance', ALL_CAP: 'REPLICA', cache key: 'instance:replica:errId'.
 *   Model Identifier Format: 'instance-replica-{timestamp}'.
 *   Variations and Use Cases: Data copies; errors in replication lags/sync.
 *   Example Usage: Replica errors in Vercel KV reads.
 *
 * - 'master': Master instance in legacy setups.
 *   Classifications: Master-slave model (deprecated terminology).
 *   Identifiers: lowercase: 'master', camelCase: 'masterInstance', snake_case: 'master_instance', ALL_CAP: 'MASTER', cache key: 'instance:master:errId'.
 *   Model Identifier Format: 'instance-master-{timestamp}'.
 *   Variations and Use Cases: Controls slaves; errors in chain replication.
 *   Example Usage: Master errors in fluxr legacy DBs.
 *
 * - 'slave': Slave instance in legacy setups.
 *   Classifications: Master-slave model (prefer 'replica').
 *   Identifiers: lowercase: 'slave', camelCase: 'slaveInstance', snake_case: 'slave_instance', ALL_CAP: 'SLAVE', cache key: 'instance:slave:errId'.
 *   Model Identifier Format: 'instance-slave-{timestamp}'.
 *   Variations and Use Cases: Follows master; errors in data consistency.
 *   Example Usage: Slave sync errors in older systems.
 *
 * - 'follower': Follower instance in consensus models.
 *   Classifications: Raft/Paxos protocols.
 *   Identifiers: lowercase: 'follower', camelCase: 'followerInstance', snake_case: 'follower_instance', ALL_CAP: 'FOLLOWER', cache key: 'instance:follower:errId'.
 *   Model Identifier Format: 'instance-follower-{timestamp}'.
 *   Variations and Use Cases: Replicates leader; errors in elections.
 *   Example Usage: Follower errors in distributed DndHub services.
 *
 * - 'secondary': Secondary instance for failover.
 *   Classifications: High availability.
 *   Identifiers: lowercase: 'secondary', camelCase: 'secondaryInstance', snake_case: 'secondary_instance', ALL_CAP: 'SECONDARY', cache key: 'instance:secondary:errId'.
 *   Model Identifier Format: 'instance-secondary-{timestamp}'.
 *   Variations and Use Cases: Hot standby; errors in promotion.
 *   Example Usage: Secondary errors in cloud HA.
 *
 * - 'worker': Worker instance for tasks.
 *   Classifications: Worker queues.
 *   Identifiers: lowercase: 'worker', camelCase: 'workerInstance', snake_case: 'worker_instance', ALL_CAP: 'WORKER', cache key: 'instance:worker:errId'.
 *   Model Identifier Format: 'instance-worker-{timestamp}'.
 *   Variations and Use Cases: Background jobs; errors in processing.
 *   Example Usage: Worker errors in fluxr queues.
 *
 * - 'node': Node instance in clusters.
 *   Classifications: Cluster nodes.
 *   Identifiers: lowercase: 'node', camelCase: 'nodeInstance', snake_case: 'node_instance', ALL_CAP: 'NODE', cache key: 'instance:node:errId'.
 *   Model Identifier Format: 'instance-node-{timestamp}'.
 *   Variations and Use Cases: Kubernetes nodes; errors in health checks.
 *   Example Usage: Node errors in container deployments.
 *
 * - 'main': Main instance in monoliths.
 *   Classifications: Single-node.
 *   Identifiers: lowercase: 'main', camelCase: 'mainInstance', snake_case: 'main_instance', ALL_CAP: 'MAIN', cache key: 'instance:main:errId'.
 *   Model Identifier Format: 'instance-main-{timestamp}'.
 *   Variations and Use Cases: Central ops; errors in core functions.
 *   Example Usage: Main errors in local dev.
 *
 * - 'backup': Backup instance for recovery.
 *   Classifications: Disaster recovery.
 *   Identifiers: lowercase: 'backup', camelCase: 'backupInstance', snake_case: 'backup_instance', ALL_CAP: 'BACKUP', cache key: 'instance:backup:errId'.
 *   Model Identifier Format: 'instance-backup-{timestamp}'.
 *   Variations and Use Cases: Data backups; errors in restores.
 *   Example Usage: Backup errors in Vercel KV.
 *
 * - 'cluster': Cluster manager instance.
 *   Classifications: Orchestration.
 *   Identifiers: lowercase: 'cluster', camelCase: 'clusterInstance', snake_case: 'cluster_instance', ALL_CAP: 'CLUSTER', cache key: 'instance:cluster:errId'.
 *   Model Identifier Format: 'instance-cluster-{timestamp}'.
 *   Variations and Use Cases: Oversees nodes; errors in quorum.
 *   Example Usage: Cluster errors in Kubernetes.
 *
 * - 'read': Read instance for queries.
 *   Classifications: Read scaling.
 *   Identifiers: lowercase: 'read', camelCase: 'readInstance', snake_case: 'read_instance', ALL_CAP: 'READ', cache key: 'instance:read:errId'.
 *   Model Identifier Format: 'instance-read-{timestamp}'.
 *   Variations and Use Cases: Query optimization; errors in reads.
 *   Example Usage: Read errors in DB fluxr.
 *
 * - 'write': Write instance for updates.
 *   Classifications: Write scaling.
 *   Identifiers: lowercase: 'write', camelCase: 'writeInstance', snake_case: 'write_instance', ALL_CAP: 'WRITE', cache key: 'instance:write:errId'.
 *   Model Identifier Format: 'instance-write-{timestamp}'.
 *   Variations and Use Cases: Insert/update handling; errors in writes.
 *   Example Usage: Write errors in Supabase.
 *
 * - 'archive': Archive instance for storage.
 *   Classifications: Archiving.
 *   Identifiers: lowercase: 'archive', camelCase: 'archiveInstance', snake_case: 'archive_instance', ALL_CAP: 'ARCHIVE', cache key: 'instance:archive:errId'.
 *   Model Identifier Format: 'instance-archive-{timestamp}'.
 *   Variations and Use Cases: Historical data; errors in retrieval.
 *   Example Usage: Archive errors in cold storage.
 *
 * - 'analytics': Analytics instance for reporting.
 *   Classifications: BI tools.
 *   Identifiers: lowercase: 'analytics', camelCase: 'analyticsInstance', snake_case: 'analytics_instance', ALL_CAP: 'ANALYTICS', cache key: 'instance:analytics:errId'.
 *   Model Identifier Format: 'instance-analytics-{timestamp}'.
 *   Variations and Use Cases: Query-heavy; errors in reports.
 *   Example Usage: Analytics errors in DndCoLab.
 *
 * - 'metadata': Metadata instance for configs.
 *   Classifications: Config management.
 *   Identifiers: lowercase: 'metadata', camelCase: 'metadataInstance', snake_case: 'metadata_instance', ALL_CAP: 'METADATA', cache key: 'instance:metadata:errId'.
 *   Model Identifier Format: 'instance-metadata-{timestamp}'.
 *   Variations and Use Cases: Schema storage; errors in access.
 *   Example Usage: Metadata errors in Vercel KV.
 *
 * - 'leader': Leader instance in consensus.
 *   Classifications: Raft leader.
 *   Identifiers: lowercase: 'leader', camelCase: 'leaderInstance', snake_case: 'leader_instance', ALL_CAP: 'LEADER', cache key: 'instance:leader:errId'.
 *   Model Identifier Format: 'instance-leader-{timestamp}'.
 *   Variations and Use Cases: Elected leader; errors in consensus.
 *   Example Usage: Leader errors in distributed systems.
 *
 * - 'standby': Standby instance for failover.
 *   Classifications: HA standby.
 *   Identifiers: lowercase: 'standby', camelCase: 'standbyInstance', snake_case: 'standby_instance', ALL_CAP: 'STANDBY', cache key: 'instance:standby:errId'.
 *   Model Identifier Format: 'instance-standby-{timestamp}'.
 *   Variations and Use Cases: Idle until promotion; errors in readiness.
 *   Example Usage: Standby errors in cloud HA.
 *
 * - 'proxy': Proxy instance for routing.
 *   Classifications: Load balancing.
 *   Identifiers: lowercase: 'proxy', camelCase: 'proxyInstance', snake_case: 'proxy_instance', ALL_CAP: 'PROXY', cache key: 'instance:proxy:errId'.
 *   Model Identifier Format: 'instance-proxy-{timestamp}'.
 *   Variations and Use Cases: Traffic routing; errors in proxies.
 *   Example Usage: Proxy errors in NGINX setups.
 *
 * - 'load-balancer': Load balancer instance.
 *   Classifications: Scaling standards.
 *   Identifiers: lowercase: 'load-balancer', camelCase: 'loadBalancerInstance', snake_case: 'load_balancer_instance', ALL_CAP: 'LOAD_BALANCER', cache key: 'instance:load-balancer:errId'.
 *   Model Identifier Format: 'instance-load-balancer-{timestamp}'.
 *   Variations and Use Cases: Distributes load; errors in balancing.
 *   Example Usage: Load balancer errors in AWS ELB.
 *
 * - 'cache': Cache instance for data.
 *   Classifications: Caching layers.
 *   Identifiers: lowercase: 'cache', camelCase: 'cacheInstance', snake_case: 'cache_instance', ALL_CAP: 'CACHE', cache key: 'instance:cache:errId'.
 *   Model Identifier Format: 'instance-cache-{timestamp}'.
 *   Variations and Use Cases: Redis/memcache; errors in hits/misses.
 *   Example Usage: Cache errors in fluxr caching.
 */
export type DeploymentInstanceTaxonomy = CoreDeploymentInstance | CustomDeploymentInstance;
export type CoreDeploymentInstance = 'primary' | 'replica' | 'master' | 'slave' | 'follower' | 'secondary' | 'worker' | 'node' | 'main' | 'backup' | 'cluster' | 'read' | 'write' | 'archive' | 'analytics' | 'metadata' | 'leader' | 'standby' | 'proxy' | 'load-balancer' | 'cache';
export type CustomDeploymentInstance = string & { __deploymentInstance?: 'CustomDeploymentInstance' };