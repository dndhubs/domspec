/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/adapter/AdapterManagementOperationTaxonomy.ts
 * @see https://github.com/dndhubs/domspec/wiki/AdapterLifecycleOperationMethod
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20AdapterManagementOperationTaxonomy
 * Union type representing AdapterManagementOperationTaxonomy in the DOMSpec ecosystem.
 * This taxonomy defines the operations for managing the lifecycle of Fluxr Adapters in the Trakfox ecosystem.
 * It supports adapter management tasks such as state retrieval, health monitoring, and metadata management,
 * aligning with integration patterns and standards like RESTful APIs, ISO 20022, and microservice observability.
 * The taxonomy is extensible via CustomAdapterLifecycleOperationMethod for organization-specific operations.
 *
 * - 'getInstanceStates': Retrieves the lifecycle states of all adapter instances.
 *   Classifications: Aligns with REST GET operations, microservice state management patterns.
 *   Identifiers: lowercase: 'getinstancestates', camelCase: 'getInstanceStatesOperation', snake_case: 'get_instance_states_operation', ALL_CAP: 'GET_INSTANCE_STATES', cache key: 'operation:getinstancestates:adapterId'.
 *   Model Identifier Format: 'getinstancestates-{adapterType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'listStates'; used in Trakfox for monitoring multiple adapter instances or HealthOrb DHIS2 for tracking data source states.
 *   @example
 *   ```typescript
 *   GET /api/adapters/states
 *   // Returns { adapterId: string, state: AdapterLifecycleState }[]
 *   ```
 *   Example: Retrieve all adapter states in Trakfox for system diagnostics.
 *
 * - 'getInstanceState': Retrieves the lifecycle state of a specific adapter instance.
 *   Classifications: Aligns with REST GET operations, single-resource state retrieval.
 *   Identifiers: lowercase: 'getinstancestate', camelCase: 'getInstanceStateOperation', snake_case: 'get_instance_state_operation', ALL_CAP: 'GET_INSTANCE_STATE', cache key: 'operation:getinstancestate:adapterId'.
 *   Model Identifier Format: 'getinstancestate-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'fetchState'; used in DnDHubs for checking a specific adapter’s status or Trakfox for adapter health checks.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/state
 *   // Returns { state: AdapterLifecycleState }
 *   ```
 *   Example: Check the state of a Trakfox API connector.
 *
 * - 'getLifecycleMetrics': Retrieves metrics related to the adapter’s lifecycle performance.
 *   Classifications: Aligns with observability standards (e.g., OpenTelemetry), REST GET operations.
 *   Identifiers: lowercase: 'getlifecyclemetrics', camelCase: 'getLifecycleMetricsOperation', snake_case: 'get_lifecycle_metrics_operation', ALL_CAP: 'GET_LIFECYCLE_METRICS', cache key: 'operation:getlifecyclemetrics:adapterId'.
 *   Model Identifier Format: 'getlifecyclemetrics-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'fetchMetrics'; used in Trakfox for performance monitoring or HealthOrb DHIS2 for adapter uptime tracking.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/metrics
 *   // Returns { uptime: number, requests: number, errors: number }
 *   ```
 *   Example: Monitor adapter performance in Trakfox analytics dashboard.
 *
 * - 'getHealthStatus': Retrieves the health status of an adapter instance.
 *   Classifications: Aligns with microservice health check patterns, REST GET operations.
 *   Identifiers: lowercase: 'gethealthstatus', camelCase: 'getHealthStatusOperation', snake_case: 'get_health_status_operation', ALL_CAP: 'GET_HEALTH_STATUS', cache key: 'operation:gethealthstatus:adapterId'.
 *   Model Identifier Format: 'gethealthstatus-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'checkHealth'; used in DnDHubs for adapter reliability checks or Trakfox for system health monitoring.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/health
 *   // Returns { status: 'healthy' | 'unhealthy', details: string }
 *   ```
 *   Example: Verify adapter health in Trakfox before initiating data sync.
 *
 * - 'getCircuitBreakerStatus': Retrieves the status of the adapter’s circuit breaker.
 *   Classifications: Aligns with circuit breaker patterns (e.g., Netflix Hystrix), REST GET operations.
 *   Identifiers: lowercase: 'getcircuitbreakerstatus', camelCase: 'getCircuitBreakerStatusOperation', snake_case: 'get_circuit_breaker_status_operation', ALL_CAP: 'GET_CIRCUIT_BREAKER_STATUS', cache key: 'operation:getcircuitbreakerstatus:adapterId'.
 *   Model Identifier Format: 'getcircuitbreakerstatus-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'checkCircuitBreaker'; used in Trakfox for fault tolerance monitoring or HealthOrb DHIS2 for integration stability.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/circuitbreaker
 *   // Returns { state: 'closed' | 'open' | 'half-open' }
 *   ```
 *   Example: Check circuit breaker status in Trakfox for API reliability.
 *
 * - 'resetcircuitbreaker': Resets the adapter’s circuit breaker to its initial state.
 *   Classifications: Aligns with circuit breaker recovery patterns, REST POST operations.
 *   Identifiers: lowercase: 'resetcircuitbreaker', camelCase: 'resetCircuitBreakerOperation', snake_case: 'reset_circuit_breaker_operation', ALL_CAP: 'RESET_CIRCUIT_BREAKER', cache key: 'operation:resetcircuitbreaker:adapterId'.
 *   Model Identifier Format: 'resetcircuitbreaker-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'clearCircuitBreaker'; used in Trakfox for recovering failed integrations or DnDHubs for resetting marketplace connectors.
 *   @example
 *   ```typescript
 *   POST /api/adapters/{adapterId}/circuitbreaker/reset
 *   // Returns { status: 'reset' }
 *   ```
 *   Example: Reset circuit breaker in Trakfox after resolving a service outage.
 *
 * - 'getMetadata': Retrieves metadata associated with the adapter instance.
 *   Classifications: Aligns with metadata management standards, REST GET operations.
 *   Identifiers: lowercase: 'getmetadata', camelCase: 'getMetadataOperation', snake_case: 'get_metadata_operation', ALL_CAP: 'GET_METADATA', cache key: 'operation:getmetadata:adapterId'.
 *   Model Identifier Format: 'getmetadata-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'fetchMetadata'; used in Trakfox for adapter configuration details or HealthOrb DHIS2 for data source metadata.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/metadata
 *   // Returns { version: string, config: object }
 *   ```
 *   Example: Retrieve adapter metadata in Trakfox for configuration auditing.
 *
 * - 'setMetadata': Updates metadata for the adapter instance.
 *   Classifications: Aligns with metadata management standards, REST PUT/POST operations.
 *   Identifiers: lowercase: 'setmetadata', camelCase: 'setMetadataOperation', snake_case: 'set_metadata_operation', ALL_CAP: 'SET_METADATA', cache key: 'operation:setmetadata:adapterId'.
 *   Model Identifier Format: 'setmetadata-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'updateMetadata'; used in DnDHubs for updating connector metadata or Trakfox for configuration updates.
 *   @example
 *   ```typescript
 *   PUT /api/adapters/{adapterId}/metadata
 *   // Body: { version: string, config: object }
 *   ```
 *   Example: Update adapter metadata in Trakfox during a configuration change.
 *
 * - 'getMetrics': Retrieves general metrics for the adapter instance (e.g., request counts, latency).
 *   Classifications: Aligns with observability standards (e.g., Prometheus), REST GET operations.
 *   Identifiers: lowercase: 'getmetrics', camelCase: 'getMetricsOperation', snake_case: 'get_metrics_operation', ALL_CAP: 'GET_METRICS', cache key: 'operation:getmetrics:adapterId'.
 *   Model Identifier Format: 'getmetrics-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'fetchMetrics'; used in Trakfox for performance analytics or HealthOrb DHIS2 for integration monitoring.
 *   @example
 *   ```typescript
 *   GET /api/adapters/{adapterId}/metrics/general
 *   // Returns { latency: number, requestCount: number }
 *   ```
 *   Example: Fetch adapter metrics in Trakfox for performance optimization.
 */
export type AdapterManagementOperationTaxonomy = 'getInstanceStates' | 'getInstanceState' | 'getLifecycleMetrics' | 'getHealthStatus' | 'getCircuitBreakerStatus' | 'resetcircuitbreaker' | 'getMetadata' | 'setMetadata' | 'getMetrics';