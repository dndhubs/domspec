/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/adapter/AdapterEventTypeTaxonomy.ts
 * @see https://github.com/dndhubs/domspec/wiki/AdapterEventType
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20AdapterEventTypeTaxonomy
 * Union type representing AdapterEventTypeTaxonomy in the DOMSpec ecosystem.
 * This taxonomy defines standardized event types emitted by Fluxr Adapters in the Trakfox ecosystem,
 * covering connectivity, data changes, transactions, and system monitoring. It aligns with event-driven
 * architecture standards, ISO 20022 messaging, and microservice observability patterns, supporting
 * integrations with Trakfox, HealthOrb DHIS2, and DnDHubs platforms. The taxonomy is extensible via
 * CustomAdapterEventType for organization-specific events.
 *
 * - 'connected': Emitted when an adapter establishes a connection to a target system.
 *   Classifications: Aligns with event-driven architecture, WebSocket connection events, ISO 20022 session events.
 *   Identifiers: lowercase: 'connected', camelCase: 'connectedEvent', snake_case: 'connected_event', ALL_CAP: 'CONNECTED', cache key: 'event:connected:adapterId'.
 *   Model Identifier Format: 'connected-{adapterType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'active'; used in Trakfox for API connection success or HealthOrb DHIS2 for data source activation.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, timestamp: string }
 *   ```
 *   Example: Emitted when a Trakfox API connector establishes a connection.
 *
 * - 'disconnected': Emitted when an adapter terminates its connection.
 *   Classifications: Aligns with event-driven architecture, WebSocket disconnection events.
 *   Identifiers: lowercase: 'disconnected', camelCase: 'disconnectedEvent', snake_case: 'disconnected_event', ALL_CAP: 'DISCONNECTED', cache key: 'event:disconnected:adapterId'.
 *   Model Identifier Format: 'disconnected-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'inactive'; used in Trakfox for connection termination or DnDHubs for marketplace connector shutdown.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, timestamp: string, reason?: string }
 *   ```
 *   Example: Emitted when a Trakfox adapter disconnects due to network issues.
 *
 * - 'error': Emitted when an adapter encounters an error.
 *   Classifications: Aligns with error handling patterns, microservice observability standards.
 *   Identifiers: lowercase: 'error', camelCase: 'errorEvent', snake_case: 'error_event', ALL_CAP: 'ERROR', cache key: 'event:error:adapterId'.
 *   Model Identifier Format: 'error-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'failure'; used in Trakfox for logging errors or HealthOrb DHIS2 for error reporting.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, error: string, code?: string }
 *   ```
 *   Example: Emitted when a Trakfox API connector fails authentication.
 *
 * - 'data': Emitted when an adapter processes or receives new data.
 *   Classifications: Aligns with REST POST, GraphQL subscription, ISO 20022 data events.
 *   Identifiers: lowercase: 'data', camelCase: 'dataEvent', snake_case: 'data_event', ALL_CAP: 'DATA', cache key: 'event:data:adapterId'.
 *   Model Identifier Format: 'data-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'update'; used in Trakfox for data streaming or HealthOrb DHIS2 for patient data updates.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, data: object }
 *   ```
 *   Example: Emitted when a Trakfox adapter receives new order data.
 *
 * - 'change': Emitted when an adapter detects a change in resources or configurations.
 *   Classifications: Aligns with change data capture (CDC), GraphQL subscription.
 *   Identifiers: lowercase: 'change', camelCase: 'changeEvent', snake_case: 'change_event', ALL_CAP: 'CHANGE', cache key: 'event:change:adapterId'.
 *   Model Identifier Format: 'change-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'modification'; used in DnDHubs for marketplace listing updates or Trakfox for configuration changes.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, resource: string, changes: object }
 *   ```
 *   Example: Emitted when a Trakfox adapter detects a product update.
 *
 * - 'transaction': Emitted when an adapter processes a transaction.
 *   Classifications: Aligns with REST POST, ISO 20022 transaction events, database transaction protocols.
 *   Identifiers: lowercase: 'transaction', camelCase: 'transactionEvent', snake_case: 'transaction_event', ALL_CAP: 'TRANSACTION', cache key: 'event:transaction:adapterId'.
 *   Model Identifier Format: 'transaction-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'commit'; used in Trakfox for order transactions or HealthOrb DHIS2 for patient record updates.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, transactionId: string, status: string }
 *   ```
 *   Example: Emitted when a Trakfox adapter completes an order transaction.
 *
 * - 'schema-change': Emitted when an adapter detects a schema or structure change.
 *   Classifications: Aligns with schema evolution standards, GraphQL schema updates.
 *   Identifiers: lowercase: 'schema-change', camelCase: 'schemaChangeEvent', snake_case: 'schema_change_event', ALL_CAP: 'SCHEMA_CHANGE', cache key: 'event:schema-change:adapterId'.
 *   Model Identifier Format: 'schema-change-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'structureChange'; used in Trakfox for API schema updates or HealthOrb DHIS2 for data model changes.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, schema: string, changes: object }
 *   ```
 *   Example: Emitted when a Trakfox adapter updates its API schema.
 *
 * - 'health-change': Emitted when an adapter’s health status changes.
 *   Classifications: Aligns with microservice health check patterns, OpenTelemetry standards.
 *   Identifiers: lowercase: 'health-change', camelCase: 'healthChangeEvent', snake_case: 'health_change_event', ALL_CAP: 'HEALTH_CHANGE', cache key: 'event:health-change:adapterId'.
 *   Model Identifier Format: 'health-change-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'statusChange'; used in Trakfox for health monitoring or DnDHubs for connector reliability updates.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, status: 'healthy' | 'unhealthy', details?: string }
 *   ```
 *   Example: Emitted when a Trakfox adapter’s health status changes to unhealthy.
 *
 * - 'metric': Emitted when an adapter generates performance or usage metrics.
 *   Classifications: Aligns with observability standards (e.g., Prometheus), REST GET events.
 *   Identifiers: lowercase: 'metric', camelCase: 'metricEvent', snake_case: 'metric_event', ALL_CAP: 'METRIC', cache key: 'event:metric:adapterId'.
 *   Model Identifier Format: 'metric-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'stats'; used in Trakfox for performance tracking or HealthOrb DHIS2 for integration metrics.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, metrics: { latency: number, requests: number } }
 *   ```
 *   Example: Emitted when a Trakfox adapter reports performance metrics.
 *
 * - 'audit': Emitted when an adapter logs an audit event for compliance or tracking.
 *   Classifications: Aligns with audit logging standards, ISO 20022 audit trails.
 *   Identifiers: lowercase: 'audit', camelCase: 'auditEvent', snake_case: 'audit_event', ALL_CAP: 'AUDIT', cache key: 'event:audit:adapterId'.
 *   Model Identifier Format: 'audit-{adapterType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'log'; used in Trakfox for compliance tracking or HealthOrb DHIS2 for audit logging.
 *   @example
 *   ```typescript
 *   // Event payload: { adapterId: string, action: string, userId: string, timestamp: string }
 *   ```
 *   Example: Emitted when a Trakfox adapter logs a user action for compliance.
 */
export type AdapterEventTypeTaxonomy = CoreAdapterEventType | CustomAdapterEventType;
export type CoreAdapterEventType = 'connected' | 'disconnected' | 'error' | 'data' | 'change' | 'transaction' | 'schema-change' | 'health-change' | 'metric' | 'audit';
export type CustomAdapterEventType = string & { __adapterEventType?: 'CustomAdapterEventType' };