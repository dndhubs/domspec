/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/data/data-access-pattern-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/DataAccessPatternTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20DataAccessPatternTaxonomy
 * Union type representing DataAccessPatternTaxonomy in the DOMSpec ecosystem.
 * Defines patterns for accessing and interacting with data, categorizing retrieval, storage, and manipulation approaches across architectural paradigms. Aligns with data management standards like ISO/IEC 2382 (Information Technology Vocabulary), RESTful APIs, and microservices patterns (e.g., CQRS, Event Sourcing). Supports extensibility for custom patterns in complex systems within DNDHUBS platforms like Trakfox e-commerce and HealthOrb DHIS2 integrations.
 *
 * - 'object': Represents direct access to in-memory objects or entities, often used in object-oriented programming.
 *   @alias entity
 *   Classifications: Aligns with OOP principles and ISO/IEC 2382 object definitions.
 *   Identifiers: lowercase: 'object', camelCase: 'objectAccess', snake_case: 'object_access', ALL_CAP: 'OBJECT', cache key: 'pattern:object:resourceId'.
 *   Model Identifier Format: 'object-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'pojo'; used in Trakfox for session-based user objects or HealthOrb for patient entity manipulation.
 *   @example
 *   Access user object: const user = session.get('user'); in Trakfox authentication flows.
 *
 * - 'database': Represents structured data access via databases like SQL or NoSQL.
 *   @alias db
 *   Classifications: Aligns with relational (ANSI SQL) and NoSQL standards (e.g., MongoDB).
 *   Identifiers: lowercase: 'database', camelCase: 'databaseAccess', snake_case: 'database_access', ALL_CAP: 'DATABASE', cache key: 'pattern:database:resourceId'.
 *   Model Identifier Format: 'database-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'rdbms'; for persistent storage in HealthOrb DHIS2 data queries or DNDHUBS marketplace transactions.
 *   @example
 *   Query database: SELECT * FROM users WHERE id = ?; in Trakfox backend services.
 *
 * - 'stream': Represents real-time data streaming, often for continuous data flows.
 *   @alias realtime
 *   Classifications: Aligns with Apache Kafka or WebSocket standards.
 *   Identifiers: lowercase: 'stream', camelCase: 'streamAccess', snake_case: 'stream_access', ALL_CAP: 'STREAM', cache key: 'pattern:stream:resourceId'.
 *   Model Identifier Format: 'stream-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'pubsub'; used in Trakfox live updates or HealthOrb real-time health monitoring.
 *   @example
 *   Subscribe to stream: socket.on('updates', handleData); in DNDHUBS notifications.
 *
 * - 'memory': Represents volatile, in-memory data access for high-speed operations.
 *   @alias ram
 *   Classifications: Aligns with in-memory databases like Redis and ISO/IEC 2382 memory concepts.
 *   Identifiers: lowercase: 'memory', camelCase: 'memoryAccess', snake_case: 'memory_access', ALL_CAP: 'MEMORY', cache key: 'pattern:memory:resourceId'.
 *   Model Identifier Format: 'memory-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'volatile'; for session caching in Trakfox or HealthOrb temporary computations.
 *   @example
 *   Set memory value: cache.set('key', value); in Trakfox performance optimization.
 *
 * - 'config': Represents access to configuration settings or environment variables.
 *   @alias settings
 *   Classifications: Aligns with 12-Factor App methodology and ISO 9001 configuration management.
 *   Identifiers: lowercase: 'config', camelCase: 'configAccess', snake_case: 'config_access', ALL_CAP: 'CONFIG', cache key: 'pattern:config:resourceId'.
 *   Model Identifier Format: 'config-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'env'; for app settings in HealthOrb DHIS2 or DNDHUBS deployment configs.
 *   @example
 *   Load config: process.env.API_KEY; in Trakfox environment setups.
 *
 * - 'content': Represents access to static or dynamic content like files or CMS data.
 *   @alias media
 *   Classifications: Aligns with CMS standards (e.g., WordPress) and HTTP content negotiation.
 *   Identifiers: lowercase: 'content', camelCase: 'contentAccess', snake_case: 'content_access', ALL_CAP: 'CONTENT', cache key: 'pattern:content:resourceId'.
 *   Model Identifier Format: 'content-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'asset'; for blog posts in Trakfox or HealthOrb educational resources.
 *   @example
 *   Fetch content: GET /content/article; in DNDHUBS CMS integrations.
 *
 * - 'repository': Represents version-controlled data access, often for code or artifacts.
 *   @alias repo
 *   Classifications: Aligns with Git standards and ISO/IEC 12207 software life cycle processes.
 *   Identifiers: lowercase: 'repository', camelCase: 'repositoryAccess', snake_case: 'repository_access', ALL_CAP: 'REPOSITORY', cache key: 'pattern:repository:resourceId'.
 *   Model Identifier Format: 'repository-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'vcs'; for code pulls in Trakfox CI/CD or HealthOrb data repositories.
 *   @example
 *   Clone repo: git clone repo-url; in DNDHUBS development workflows.
 *
 * - 'timeseries': Represents chronological data access for metrics or logs.
 *   @alias tsdb
 *   Classifications: Aligns with InfluxDB standards and ISO 8601 time representations.
 *   Identifiers: lowercase: 'timeseries', camelCase: 'timeseriesAccess', snake_case: 'timeseries_access', ALL_CAP: 'TIMESERIES', cache key: 'pattern:timeseries:resourceId'.
 *   Model Identifier Format: 'timeseries-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'historical'; for analytics in HealthOrb patient trends or Trakfox sales data.
 *   @example
 *   Query timeseries: SELECT * FROM metrics WHERE time > now() - 1h; in DNDHUBS monitoring.
 *
 * - 'graph': Represents relational data access via graph databases or structures.
 *   @alias neo4j
 *   Classifications: Aligns with Neo4j and RDF standards (ISO/IEC 13250).
 *   Identifiers: lowercase: 'graph', camelCase: 'graphAccess', snake_case: 'graph_access', ALL_CAP: 'GRAPH', cache key: 'pattern:graph:resourceId'.
 *   Model Identifier Format: 'graph-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'network'; for social connections in Trakfox or HealthOrb relationship modeling.
 *   @example
 *   Traverse graph: MATCH (n)-[r]->(m) RETURN n, r, m; in DNDHUBS analytics.
 *
 * - 'analytics': Represents data access for reporting and insights generation.
 *   @alias bi
 *   Classifications: Aligns with OLAP standards and ISO/IEC 15944 business semantics.
 *   Identifiers: lowercase: 'analytics', camelCase: 'analyticsAccess', snake_case: 'analytics_access', ALL_CAP: 'ANALYTICS', cache key: 'pattern:analytics:resourceId'.
 *   Model Identifier Format: 'analytics-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'reporting'; for dashboards in HealthOrb or Trakfox metrics.
 *   @example
 *   Run analytics: SELECT COUNT(*) FROM sales; in Trakfox BI tools.
 *
 * - 'event': Represents event-driven data access, often in pub/sub systems.
 *   @alias pubsub
 *   Classifications: Aligns with Event Sourcing and CQRS patterns.
 *   Identifiers: lowercase: 'event', camelCase: 'eventAccess', snake_case: 'event_access', ALL_CAP: 'EVENT', cache key: 'pattern:event:resourceId'.
 *   Model Identifier Format: 'event-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'message'; for triggers in DNDHUBS workflows or HealthOrb alerts.
 *   @example
 *   Emit event: emitter.emit('update', data); in Trakfox real-time features.
 *
 * - 'cache': Represents temporary, high-speed data access layers.
 *   @alias memo
 *   Classifications: Aligns with Redis/Memcached standards and ISO/IEC 2382 caching.
 *   Identifiers: lowercase: 'cache', camelCase: 'cacheAccess', snake_case: 'cache_access', ALL_CAP: 'CACHE', cache key: 'pattern:cache:resourceId'.
 *   Model Identifier Format: 'cache-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'buffer'; for performance in Trakfox pages or HealthOrb queries.
 *   @example
 *   Get from cache: cache.get('key'); in DNDHUBS optimization.
 *
 * - 'state': Represents management of application or session state.
 *   @alias session
 *   Classifications: Aligns with state machine patterns and ISO/IEC 25010 usability.
 *   Identifiers: lowercase: 'state', camelCase: 'stateAccess', snake_case: 'state_access', ALL_CAP: 'STATE', cache key: 'pattern:state:resourceId'.
 *   Model Identifier Format: 'state-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'context'; for Redux in Trakfox or HealthOrb workflows.
 *   @example
 *   Update state: setState({ key: value }); in Trakfox UI components.
 *
 * - 'metadata': Represents access to descriptive data about other data.
 *   @alias meta
 *   Classifications: Aligns with Dublin Core and ISO 19115 metadata standards.
 *   Identifiers: lowercase: 'metadata', camelCase: 'metadataAccess', snake_case: 'metadata_access', ALL_CAP: 'METADATA', cache key: 'pattern:metadata:resourceId'.
 *   Model Identifier Format: 'metadata-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'schema'; for data descriptions in HealthOrb DHIS2 or DNDHUBS catalogs.
 *   @example
 *   Read metadata: getMetadata('resource'); in Trakfox asset management.
 *
 * - 'form': Represents data access through user input forms or schemas.
 *   @alias input
 *   Classifications: Aligns with HTML5 forms and ISO/IEC 25010 usability.
 *   Identifiers: lowercase: 'form', camelCase: 'formAccess', snake_case: 'form_access', ALL_CAP: 'FORM', cache key: 'pattern:form:resourceId'.
 *   Model Identifier Format: 'form-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'submission'; for user entries in Trakfox signups or HealthOrb surveys.
 *   @example
 *   Submit form: POST /forms/submit; in DNDHUBS user interactions.
 *
 * - 'search': Represents indexed data access for querying and retrieval.
 *   @alias query
 *   Classifications: Aligns with Elasticsearch standards and ISO/IEC 13249 full-text search.
 *   Identifiers: lowercase: 'search', camelCase: 'searchAccess', snake_case: 'search_access', ALL_CAP: 'SEARCH', cache key: 'pattern:search:resourceId'.
 *   Model Identifier Format: 'search-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'index'; for product searches in Trakfox or HealthOrb records.
 *   @example
 *   Perform search: GET /search?q=term; in Trakfox marketplace.
 *
 * - 'cdn': Represents content delivery network access for distributed assets.
 *   @alias edge
 *   Classifications: Aligns with CDN protocols (e.g., Akamai) and HTTP caching.
 *   Identifiers: lowercase: 'cdn', camelCase: 'cdnAccess', snake_case: 'cdn_access', ALL_CAP: 'CDN', cache key: 'pattern:cdn:resourceId'.
 *   Model Identifier Format: 'cdn-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'delivery'; for static files in HealthOrb or DNDHUBS media.
 *   @example
 *   Load from CDN: <img src="cdn-url/image.jpg">; in Trakfox pages.
 *
 * - 'filesystem': Represents local or remote file system data access.
 *   @alias fs
 *   Classifications: Aligns with POSIX standards and ISO/IEC 9945 file systems.
 *   Identifiers: lowercase: 'filesystem', camelCase: 'filesystemAccess', snake_case: 'filesystem_access', ALL_CAP: 'FILESYSTEM', cache key: 'pattern:filesystem:resourceId'.
 *   Model Identifier Format: 'filesystem-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'disk'; for logs in Trakfox or HealthOrb backups.
 *   @example
 *   Read file: fs.readFile('path'); in DNDHUBS server ops.
 *
 * - 'api': Represents data access through application programming interfaces.
 *   @alias endpoint
 *   Classifications: Aligns with RESTful (RFC 7231) and GraphQL standards.
 *   Identifiers: lowercase: 'api', camelCase: 'apiAccess', snake_case: 'api_access', ALL_CAP: 'API', cache key: 'pattern:api:resourceId'.
 *   Model Identifier Format: 'api-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'service'; for integrations in HealthOrb DHIS2 or Trakfox APIs.
 *   @example
 *   Call API: fetch('/api/data'); in DNDHUBS frontend.
 *
 * - 'file': Represents individual file-based data access.
 *   @alias blob
 *   Classifications: Aligns with MIME types and ISO/IEC 15444 file formats.
 *   Identifiers: lowercase: 'file', camelCase: 'fileAccess', snake_case: 'file_access', ALL_CAP: 'FILE', cache key: 'pattern:file:resourceId'.
 *   Model Identifier Format: 'file-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'document'; for uploads in Trakfox or HealthOrb reports.
 *   @example
 *   Upload file: POST /files/upload; in Trakfox user submissions.
 *
 * - 'queue': Represents message queuing for asynchronous processing.
 *   @alias fifo
 *   Classifications: Aligns with AMQP (ISO/IEC 19464) and RabbitMQ standards.
 *   Identifiers: lowercase: 'queue', camelCase: 'queueAccess', snake_case: 'queue_access', ALL_CAP: 'QUEUE', cache key: 'pattern:queue:resourceId'.
 *   Model Identifier Format: 'queue-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'task'; for background jobs in DNDHUBS or HealthOrb processing.
 *   @example
 *   Enqueue task: queue.add('job', data); in Trakfox orders.
 *
 * - 'serverless': Represents function-as-a-service data access without server management.
 *   @alias faas
 *   Classifications: Aligns with AWS Lambda and serverless architecture patterns.
 *   Identifiers: lowercase: 'serverless', camelCase: 'serverlessAccess', snake_case: 'serverless_access', ALL_CAP: 'SERVERLESS', cache key: 'pattern:serverless:resourceId'.
 *   Model Identifier Format: 'serverless-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'lambda'; for event-driven in Trakfox or HealthOrb scalables.
 *   @example
 *   Invoke function: lambda.invoke('func'); in DNDHUBS cloud ops.
 *
 * - 'blockchain': Represents distributed ledger data access for immutable records.
 *   @alias dlt
 *   Classifications: Aligns with ISO/TC 307 blockchain standards.
 *   Identifiers: lowercase: 'blockchain', camelCase: 'blockchainAccess', snake_case: 'blockchain_access', ALL_CAP: 'BLOCKCHAIN', cache key: 'pattern:blockchain:resourceId'.
 *   Model Identifier Format: 'blockchain-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'ledger'; for secure transactions in HealthOrb or Trakfox NFTs.
 *   @example
 *   Query chain: web3.eth.getTransaction(tx); in DNDHUBS integrations.
 *
 * - 'service': Represents access via microservices or external services.
 *   @alias micro
 *   Classifications: Aligns with SOA (ISO/IEC 18384) and microservices patterns.
 *   Identifiers: lowercase: 'service', camelCase: 'serviceAccess', snake_case: 'service_access', ALL_CAP: 'SERVICE', cache key: 'pattern:service:resourceId'.
 *   Model Identifier Format: 'service-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'module'; for API calls in Trakfox or HealthOrb services.
 *   @example
 *   Call service: serviceClient.get('/data'); in DNDHUBS architecture.
 *
 * - 'notification': Represents push or alert-based data delivery.
 *   @alias push
 *   Classifications: Aligns with Web Push (RFC 8030) and notification standards.
 *   Identifiers: lowercase: 'notification', camelCase: 'notificationAccess', snake_case: 'notification_access', ALL_CAP: 'NOTIFICATION', cache key: 'pattern:notification:resourceId'.
 *   Model Identifier Format: 'notification-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'alert'; for user notifications in Trakfox or HealthOrb reminders.
 *   @example
 *   Send notification: push.send('message'); in Trakfox user engagement.
 *
 * - 'monitoring': Represents data access for system health and metrics.
 *   @alias observability
 *   Classifications: Aligns with Prometheus standards and ISO/IEC 27001 monitoring.
 *   Identifiers: lowercase: 'monitoring', camelCase: 'monitoringAccess', snake_case: 'monitoring_access', ALL_CAP: 'MONITORING', cache key: 'pattern:monitoring:resourceId'.
 *   Model Identifier Format: 'monitoring-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'logs'; for dashboards in HealthOrb or DNDHUBS ops.
 *   @example
 *   Fetch metrics: GET /monitoring/stats; in Trakfox performance tracking.
 *
 * - 'workflow': Represents orchestrated data flows in business processes.
 *   @alias bpm
 *   Classifications: Aligns with BPMN (ISO/IEC 19510) and workflow management.
 *   Identifiers: lowercase: 'workflow', camelCase: 'workflowAccess', snake_case: 'workflow_access', ALL_CAP: 'WORKFLOW', cache key: 'pattern:workflow:resourceId'.
 *   Model Identifier Format: 'workflow-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'process'; for automations in Trakfox orders or HealthOrb approvals.
 *   @example
 *   Trigger workflow: workflow.start('processId'); in DNDHUBS integrations.
 */
export type DataAccessPatternTaxonomy = CoreDataAccessPattern | CustomDataAccessPattern;
export type CoreDataAccessPattern = 'object' | 'database' | 'stream' | 'memory' | 'config' | 'content' | 'repository' | 'timeseries' | 'graph' | 'analytics' | 'event' | 'cache' | 'state' | 'metadata' | 'form' | 'search' | 'cdn' | 'filesystem' | 'api' | 'file' | 'queue' | 'serverless' | 'blockchain' | 'service' | 'notification' | 'monitoring' | 'workflow';
export type CustomDataAccessPattern = string & { __dataaccesspattern?: 'DataAccessPattern' };