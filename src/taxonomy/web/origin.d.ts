/**
 * Union type representing OriginTaxonomy in the DOMSpec ecosystem.
 * Defines origins for error tracking, API endpoints, and database connections in @dndhub/error and fluxr system.
 * Supports web URLs (http/https), file systems, opaque origins, and connection URIs for databases/services.
 * Critical for fluxr integrations with TechDrivers like SQL/NoSQL drivers, enabling global registry for custom origins.
 *
 * - 'https://api.example.com': Example API endpoint.
 *   Classifications: RESTful API standards.
 *   Identifiers: lowercase: 'https://api.example.com', camelCase: 'apiExampleCom', snake_case: 'api_example_com', ALL_CAP: 'API_EXAMPLE_COM', cache key: 'origin:https://api.example.com:errId'.
 *   Model Identifier Format: 'origin-api-example-com-{timestamp}'.
 *   Variations and Use Cases: Used as a placeholder for API origins in development testing; can represent third-party APIs in production. In fluxr, tracks API connection errors during data syncing.
 *   Example Usage: API errors in DomsError.ts, logging fetch failures from example endpoints.
 *
 * - 'http://localhost': Local development server without explicit port (defaults to 80).
 *   Classifications: Localhost standards (RFC 6761).
 *   Identifiers: lowercase: 'http://localhost', camelCase: 'localhost', snake_case: 'localhost', ALL_CAP: 'LOCALHOST', cache key: 'origin:http://localhost:errId'.
 *   Model Identifier Format: 'origin-localhost-{timestamp}'.
 *   Variations and Use Cases: Common in basic local servers (e.g., simple HTTP servers); used in development for quick prototyping without port specification. In fluxr, represents local service origins for testing data drivers.
 *   Example Usage: Development errors in DomsClientError.tsx from unported local servers.
 *
 * - 'http://localhost:3000': Local development server with Next.js default port.
 *   Classifications: Next.js development standards.
 *   Identifiers: lowercase: 'http://localhost:3000', camelCase: 'localhost3000', snake_case: 'localhost_3000', ALL_CAP: 'LOCALHOST_3000', cache key: 'origin:http://localhost:3000:errId'.
 *   Model Identifier Format: 'origin-localhost-3000-{timestamp}'.
 *   Variations and Use Cases: Standard for Next.js dev servers; used in SSR/CSR hybrid testing. In fluxr, tracks local API mocks for data processing drivers.
 *   Example Usage: Next.js dev server errors in DomsRouteError.tsx.
 *
 * - 'http://127.0.0.1:8080': Local IP development server with common dev port.
 *   Classifications: Loopback IP (RFC 6890).
 *   Identifiers: lowercase: 'http://127.0.0.1:8080', camelCase: 'ip1270018080', snake_case: 'ip_127_0_0_1_8080', ALL_CAP: 'IP_127_0_0_1_8080', cache key: 'origin:http://127.0.0.1:8080:errId'.
 *   Model Identifier Format: 'origin-ip-127-0-0-1-8080-{timestamp}'.
 *   Variations and Use Cases: Used in Vite or simple web servers; alternative to localhost for IP-based configs. In fluxr, represents local service testing for network drivers.
 *   Example Usage: Vite dev server errors in DomsClientError.tsx.
 *
 * - 'https://production.trakfox.com': Production environment domain.
 *   Classifications: Production deployment standards.
 *   Identifiers: lowercase: 'https://production.trakfox.com', camelCase: 'productionTrakfox', snake_case: 'production_trakfox', ALL_CAP: 'PRODUCTION_TRAKFOX', cache key: 'origin:https://production.trakfox.com:errId'.
 *   Model Identifier Format: 'origin-production-trakfox-{timestamp}'.
 *   Variations and Use Cases: Secure production origin for live apps; used in DndCoLab for real-user error tracking. In fluxr, tracks production data sync errors with remote drivers.
 *   Example Usage: Production errors in DomsError.ts from Trakfox deployments.
 *
 * - 'https://staging.trakfox.com': Staging environment domain.
 *   Classifications: Staging deployment standards.
 *   Identifiers: lowercase: 'https://staging.trakfox.com', camelCase: 'stagingTrakfox', snake_case: 'staging_trakfox', ALL_CAP: 'STAGING_TRAKFOX', cache key: 'origin:https://staging.trakfox.com:errId'.
 *   Model Identifier Format: 'origin-staging-trakfox-{timestamp}'.
 *   Variations and Use Cases: Used for pre-production testing; mirrors production but with test data. In fluxr, validates staging connections for TechDrivers like SQL/NoSQL.
 *   Example Usage: Staging deployment errors in ErrorManager.ts.
 *
 * - 'https://dev.trakfox.com': Development environment domain.
 *   Classifications: Development deployment standards.
 *   Identifiers: lowercase: 'https://dev.trakfox.com', camelCase: 'devTrakfox', snake_case: 'dev_trakfox', ALL_CAP: 'DEV_TRAKFOX', cache key: 'origin:https://dev.trakfox.com:errId'.
 *   Model Identifier Format: 'origin-dev-trakfox-{timestamp}'.
 *   Variations and Use Cases: Cloud-based dev origin for team collaboration; used in CI/CD pipelines. In fluxr, tracks dev connections for driver integrations.
 *   Example Usage: Development environment errors in DomsError.ts.
 *
 * - 'file://': Local file system origin.
 *   Classifications: File URI scheme (RFC 8089).
 *   Identifiers: lowercase: 'file://', camelCase: 'fileSystem', snake_case: 'file_system', ALL_CAP: 'FILE_SYSTEM', cache key: 'origin:file://:errId'.
 *   Model Identifier Format: 'origin-file-system-{timestamp}'.
 *   Variations and Use Cases: Used for local file access in CLI tools or static sites; in fluxr, represents filesystem drivers like localfs for data storage errors.
 *   Example Usage: File-based errors in CLI implementations within @dndhub/error.
 *
 * - 'null': Sandboxed iframe or opaque origins.
 *   Classifications: Opaque origin (WHATWG Fetch Standard).
 *   Identifiers: lowercase: 'null', camelCase: 'nullOrigin', snake_case: 'null_origin', ALL_CAP: 'NULL_ORIGIN', cache key: 'origin:null:errId'.
 *   Model Identifier Format: 'origin-null-{timestamp}'.
 *   Variations and Use Cases: Used in sandboxed iframes for security; prevents cross-origin access. In fluxr, tracks isolated worker errors.
 *   Example Usage: Sandboxed iframe errors in DomsClientError.tsx.
 *
 * - 'http://localhost:5173': Local development server with Vite default port.
 *   Classifications: Vite development standards.
 *   Identifiers: lowercase: 'http://localhost:5173', camelCase: 'localhost5173', snake_case: 'localhost_5173', ALL_CAP: 'LOCALHOST_5173', cache key: 'origin:http://localhost:5173:errId'.
 *   Model Identifier Format: 'origin-localhost-5173-{timestamp}'.
 *   Variations and Use Cases: Standard for Vite-based projects; used in frontend dev for hot module replacement. In fluxr, tests local UI integrations with data drivers.
 *   Example Usage: Vite dev errors in DomsClientError.tsx.
 *
 * - 'http://localhost:4200': Local development server with Angular default port.
 *   Classifications: Angular CLI standards.
 *   Identifiers: lowercase: 'http://localhost:4200', camelCase: 'localhost4200', snake_case: 'localhost_4200', ALL_CAP: 'LOCALHOST_4200', cache key: 'origin:http://localhost:4200:errId'.
 *   Model Identifier Format: 'origin-localhost-4200-{timestamp}'.
 *   Variations and Use Cases: Used in Angular apps for local serving; supports AOT compilation testing. In fluxr, tracks Angular-specific fluxr integrations.
 *   Example Usage: Angular dev errors in DomsError.ts.
 *
 * - 'http://localhost:8000': Local development server with common backend port (e.g., Django/Python).
 *   Classifications: Python/Django development standards.
 *   Identifiers: lowercase: 'http://localhost:8000', camelCase: 'localhost8000', snake_case: 'localhost_8000', ALL_CAP: 'LOCALHOST_8000', cache key: 'origin:http://localhost:8000:errId'.
 *   Model Identifier Format: 'origin-localhost-8000-{timestamp}'.
 *   Variations and Use Cases: Default for Django runserver; used in backend dev for API testing. In fluxr, represents local backend services for data processing.
 *   Example Usage: Django dev errors in fluxr integrations.
 *
 * - 'http://127.0.0.1:3000': Local IP variant of Next.js dev server.
 *   Classifications: Loopback IP with Next.js port.
 *   Identifiers: lowercase: 'http://127.0.0.1:3000', camelCase: 'ip1270013000', snake_case: 'ip_127_0_0_1_3000', ALL_CAP: 'IP_127_0_0_1_3000', cache key: 'origin:http://127.0.0.1:3000:errId'.
 *   Model Identifier Format: 'origin-ip-127-0-0-1-3000-{timestamp}'.
 *   Variations and Use Cases: Alternative to localhost for IP-bound configs; used in networked dev setups. In fluxr, tests IP-based connections for network drivers.
 *   Example Usage: IP-based Next.js errors in DomsRouteError.tsx.
 *
 * - 'http://[::1]:3000': IPv6 localhost variant for Next.js dev server.
 *   Classifications: IPv6 loopback (RFC 4291).
 *   Identifiers: lowercase: 'http://[::1]:3000', camelCase: 'ipv6Localhost3000', snake_case: 'ipv6_localhost_3000', ALL_CAP: 'IPV6_LOCALHOST_3000', cache key: 'origin:http://[::1]:3000:errId'.
 *   Model Identifier Format: 'origin-ipv6-localhost-3000-{timestamp}'.
 *   Variations and Use Cases: Used in IPv6-enabled environments for future-proofing; supports dual-stack networking. In fluxr, tracks IPv6 connections for modern drivers.
 *   Example Usage: IPv6 dev errors in DomsError.ts.
 *
 * - 'mysql://localhost:3306': MySQL database connection.
 *   Classifications: SQLDriver (mysql).
 *   Identifiers: lowercase: 'mysql://localhost:3306', camelCase: 'mysqlLocal3306', snake_case: 'mysql_local_3306', ALL_CAP: 'MYSQL_LOCAL_3306', cache key: 'origin:mysql://localhost:3306:errId'.
 *   Model Identifier Format: 'origin-mysql-local-3306-{timestamp}'.
 *   Variations and Use Cases: Standard MySQL port for local databases; used in fluxr for SQL data storage integrations. Tracks connection errors in development.
 *   Example Usage: MySQL connection errors in fluxr system via DomsError.ts.
 *
 * - 'postgresql://localhost:5432': PostgreSQL database connection.
 *   Classifications: SQLDriver (postgresql).
 *   Identifiers: lowercase: 'postgresql://localhost:5432', camelCase: 'postgresLocal5432', snake_case: 'postgres_local_5432', ALL_CAP: 'POSTGRES_LOCAL_5432', cache key: 'origin:postgresql://localhost:5432:errId'.
 *   Model Identifier Format: 'origin-postgres-local-5432-{timestamp}'.
 *   Variations and Use Cases: Default PostgreSQL port; critical for fluxr in scalable data ops. Used in production for relational data errors.
 *   Example Usage: PostgreSQL errors in fluxr integrations with Supabase.
 *
 * - 'mongodb://localhost:27017': MongoDB database connection.
 *   Classifications: NoSQLDriver (mongodb).
 *   Identifiers: lowercase: 'mongodb://localhost:27017', camelCase: 'mongoLocal27017', snake_case: 'mongo_local_27017', ALL_CAP: 'MONGO_LOCAL_27017', cache key: 'origin:mongodb://localhost:27017:errId'.
 *   Model Identifier Format: 'origin-mongo-local-27017-{timestamp}'.
 *   Variations and Use Cases: Standard MongoDB port; used in fluxr for document storage. Tracks NoSQL connection failures in staging.
 *   Example Usage: MongoDB errors in DomsError.ts for fluxr NoSQL drivers.
 *
 * - 'redis://localhost:6379': Redis key-value store connection.
 *   Classifications: NoSQLDriver (redis).
 *   Identifiers: lowercase: 'redis://localhost:6379', camelCase: 'redisLocal6379', snake_case: 'redis_local_6379', ALL_CAP: 'REDIS_LOCAL_6379', cache key: 'origin:redis://localhost:6379:errId'.
 *   Model Identifier Format: 'origin-redis-local-6379-{timestamp}'.
 *   Variations and Use Cases: Default Redis port; essential for fluxr caching/memory drivers. Used in high-performance data access scenarios.
 *   Example Usage: Redis connection errors in ErrorManager.ts throttling.
 *
 * - 'neo4j://localhost:7687': Neo4j graph database Bolt connection.
 *   Classifications: GraphDriver (neo4j).
 *   Identifiers: lowercase: 'neo4j://localhost:7687', camelCase: 'neo4jLocal7687', snake_case: 'neo4j_local_7687', ALL_CAP: 'NEO4J_LOCAL_7687', cache key: 'origin:neo4j://localhost:7687:errId'.
 *   Model Identifier Format: 'origin-neo4j-local-7687-{timestamp}'.
 *   Variations and Use Cases: Bolt protocol port for Neo4j; used in fluxr for graph data queries. Tracks relationship-based errors.
 *   Example Usage: Neo4j errors in fluxr graph integrations.
 *
 * - 'http://localhost:8086': InfluxDB time-series database HTTP API.
 *   Classifications: TimeseriesDriver (influxdb).
 *   Identifiers: lowercase: 'http://localhost:8086', camelCase: 'influxLocal8086', snake_case: 'influx_local_8086', ALL_CAP: 'INFLUX_LOCAL_8086', cache key: 'origin:http://localhost:8086:errId'.
 *   Model Identifier Format: 'origin-influx-local-8086-{timestamp}'.
 *   Variations and Use Cases: InfluxDB HTTP port; critical for fluxr time-series metrics. Used in monitoring and analytics.
 *   Example Usage: InfluxDB errors in DomsError.ts for fluxr monitoring.
 *
 * - 'http://localhost:9200': Elasticsearch search engine HTTP API.
 *   Classifications: SearchDriver (elasticsearch).
 *   Identifiers: lowercase: 'http://localhost:9200', camelCase: 'elasticLocal9200', snake_case: 'elastic_local_9200', ALL_CAP: 'ELASTIC_LOCAL_9200', cache key: 'origin:http://localhost:9200:errId'.
 *   Model Identifier Format: 'origin-elastic-local-9200-{timestamp}'.
 *   Variations and Use Cases: Default Elasticsearch port; used in fluxr for search/indexing. Tracks query errors in data retrieval.
 *   Example Usage: Elasticsearch errors in fluxr search integrations.
 *
 * - 'amqp://localhost:5672': RabbitMQ message queue AMQP connection.
 *   Classifications: MQDriver (rabbitmq).
 *   Identifiers: lowercase: 'amqp://localhost:5672', camelCase: 'rabbitLocal5672', snake_case: 'rabbit_local_5672', ALL_CAP: 'RABBIT_LOCAL_5672', cache key: 'origin:amqp://localhost:5672:errId'.
 *   Model Identifier Format: 'origin-rabbit-local-5672-{timestamp}'.
 *   Variations and Use Cases: RabbitMQ AMQP port; essential for fluxr message queuing. Used in asynchronous data processing.
 *   Example Usage: RabbitMQ errors in fluxr MQ drivers.
 *
 * - 'kafka://localhost:9092': Kafka streaming platform connection.
 *   Classifications: MQDriver (kafka).
 *   Identifiers: lowercase: 'kafka://localhost:9092', camelCase: 'kafkaLocal9092', snake_case: 'kafka_local_9092', ALL_CAP: 'KAFKA_LOCAL_9092', cache key: 'origin:kafka://localhost:9092:errId'.
 *   Model Identifier Format: 'origin-kafka-local-9092-{timestamp}'.
 *   Variations and Use Cases: Standard Kafka broker port; used in fluxr for real-time data streams. Tracks streaming errors.
 *   Example Usage: Kafka errors in DomsError.ts for fluxr streaming.
 *
 * - 'http://localhost:5984': CouchDB document database HTTP API.
 *   Classifications: NoSQLDriver (couchdb).
 *   Identifiers: lowercase: 'http://localhost:5984', camelCase: 'couchLocal5984', snake_case: 'couch_local_5984', ALL_CAP: 'COUCH_LOCAL_5984', cache key: 'origin:http://localhost:5984:errId'.
 *   Model Identifier Format: 'origin-couch-local-5984-{timestamp}'.
 *   Variations and Use Cases: CouchDB default port; used in fluxr for document NoSQL storage. Supports sync and replication errors.
 *   Example Usage: CouchDB connection errors in fluxr system.
 *
 * - 'cqlsh://localhost:9042': Cassandra wide-column store CQL connection.
 *   Classifications: NoSQLDriver (cassandra).
 *   Identifiers: lowercase: 'cqlsh://localhost:9042', camelCase: 'cassandraLocal9042', snake_case: 'cassandra_local_9042', ALL_CAP: 'CASSANDRA_LOCAL_9042', cache key: 'origin:cqlsh://localhost:9042:errId'.
 *   Model Identifier Format: 'origin-cassandra-local-9042-{timestamp}'.
 *   Variations and Use Cases: Cassandra native transport port; used in fluxr for distributed data storage. Tracks cluster connection errors.
 *   Example Usage: Cassandra errors in fluxr wide-column integrations.
 */
export type OriginTaxonomy = CoreOrigin | CustomOrigin;
export type CoreOrigin = 'https://api.example.com' | 'http://localhost' | 'http://localhost:3000' | 'http://127.0.0.1:8080' | 'https://production.trakfox.com' | 'https://staging.trakfox.com' | 'https://dev.trakfox.com' | 'file://' | 'null' | 'http://localhost:5173' | 'http://localhost:4200' | 'http://localhost:8000' | 'http://127.0.0.1:3000' | 'http://[::1]:3000' | 'mysql://localhost:3306' | 'postgresql://localhost:5432' | 'mongodb://localhost:27017' | 'redis://localhost:6379' | 'neo4j://localhost:7687' | 'http://localhost:8086' | 'http://localhost:9200' | 'amqp://localhost:5672' | 'kafka://localhost:9092' | 'http://localhost:5984' | 'cqlsh://localhost:9042';
export type CustomOrigin = string & { __origin?: 'CustomOrigin' };