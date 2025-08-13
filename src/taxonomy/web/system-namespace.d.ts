/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/namespace/system-namespace-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/SystemNamespaceTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20SystemNamespaceTaxonomy
 * Union type representing SystemNamespaceTaxonomy in the DOMSpec ecosystem.
 * Defines namespace classifications for organizing resources, environments, and data in web and application contexts. Aligns with software engineering standards such as Kubernetes namespace conventions for logical isolation, AWS resource tagging, and ISO/IEC 27001 for information security management (e.g., separating 'public' vs. 'private' scopes). Supports extensibility for custom namespaces in multi-tenant or hybrid setups within DNDHUBS platforms like Trakfox and HealthOrb DHIS2 integrations.
 *
 * - 'default': Represents the fallback or general-purpose namespace for unclassified resources.
 *   @alias fallback
 *   Classifications: Aligns with Kubernetes default namespace, RESTful API defaults.
 *   Identifiers: lowercase: 'default', camelCase: 'defaultNamespace', snake_case: 'default_namespace', ALL_CAP: 'DEFAULT', cache key: 'ns:default:resourceId'.
 *   Model Identifier Format: 'default-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'main'; used in initial setups or when no specific namespace is defined, e.g., in Trakfox default user sessions or HealthOrb DHIS2 generic data imports.
 *   @example
 *   Configure DOMSpec resource: { namespace: 'default', type: 'user' } for basic Trakfox signups.
 *
 * - 'global': Represents a shared, application-wide namespace accessible across all scopes.
 *   @alias shared
 *   Classifications: Aligns with global scopes in programming languages (e.g., JavaScript window.global) and cloud IAM policies.
 *   Identifiers: lowercase: 'global', camelCase: 'globalNamespace', snake_case: 'global_namespace', ALL_CAP: 'GLOBAL', cache key: 'ns:global:resourceId'.
 *   Model Identifier Format: 'global-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'world'; for cross-tenant data in DNDHUBS marketplace APIs or HealthOrb global configuration overrides.
 *   @example
 *   API call: GET /api/global/settings in Trakfox for app-wide preferences.
 *
 * - 'system': Represents system-level resources managed by the platform or infrastructure.
 *   @alias infra
 *   Classifications: Aligns with Kubernetes system namespaces (e.g., kube-system), ISO 42010 for architectural concerns.
 *   Identifiers: lowercase: 'system', camelCase: 'systemNamespace', snake_case: 'system_namespace', ALL_CAP: 'SYSTEM', cache key: 'ns:system:resourceId'.
 *   Model Identifier Format: 'system-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used for core services like authentication in HealthOrb DHIS2 or DNDHUBS internal tools.
 *   @example
 *   Reserve for system ops: { namespace: 'system', permissions: 'admin-only' } in DOMSpec configs.
 *
 * - 'public': Represents openly accessible resources without authentication restrictions.
 *   @alias open
 *   Classifications: Aligns with public scopes in OAuth and web security models (e.g., CORS policies).
 *   Identifiers: lowercase: 'public', camelCase: 'publicNamespace', snake_case: 'public_namespace', ALL_CAP: 'PUBLIC', cache key: 'ns:public:resourceId'.
 *   Model Identifier Format: 'public-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'anonymous'; for public-facing content in Trakfox marketplaces or HealthOrb public health dashboards.
 *   @example
 *   Expose API: POST /public/products for guest browsing in DNDHUBS.
 *
 * - 'private': Represents restricted resources requiring authentication or specific permissions.
 *   @alias restricted
 *   Classifications: Aligns with private scopes in access control lists (ACLs) and ISO 27001 confidentiality.
 *   Identifiers: lowercase: 'private', camelCase: 'privateNamespace', snake_case: 'private_namespace', ALL_CAP: 'PRIVATE', cache key: 'ns:private:resourceId'.
 *   Model Identifier Format: 'private-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'secure'; for user-specific data in HealthOrb patient records or Trakfox private carts.
 *   @example
 *   Secure endpoint: GET /private/user/profile with auth token in DOMSpec.
 *
 * - 'dev': Represents development environments for testing and iteration.
 *   @alias development
 *   Classifications: Aligns with CI/CD pipeline stages and Kubernetes dev namespaces.
 *   Identifiers: lowercase: 'dev', camelCase: 'devNamespace', snake_case: 'dev_namespace', ALL_CAP: 'DEV', cache key: 'ns:dev:resourceId'.
 *   Model Identifier Format: 'dev-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox feature branches or HealthOrb sandbox testing.
 *   @example
 *   Deploy to dev: { namespace: 'dev', env: 'test' } in DNDHUBS CI workflows.
 *
 * - 'staging': Represents pre-production environments for validation.
 *   @alias qa
 *   Classifications: Aligns with software release cycles and ISO 9001 quality management.
 *   Identifiers: lowercase: 'staging', camelCase: 'stagingNamespace', snake_case: 'staging_namespace', ALL_CAP: 'STAGING', cache key: 'ns:staging:resourceId'.
 *   Model Identifier Format: 'staging-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'preprod'; for QA in Trakfox beta releases or HealthOrb staging data syncs.
 *   @example
 *   Test API: POST /staging/orders in DOMSpec staging configs.
 *
 * - 'prod': Represents production environments for live operations.
 *   @alias production
 *   Classifications: Aligns with live deployment standards and ITIL service management.
 *   Identifiers: lowercase: 'prod', camelCase: 'prodNamespace', snake_case: 'prod_namespace', ALL_CAP: 'PROD', cache key: 'ns:prod:resourceId'.
 *   Model Identifier Format: 'prod-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For live Trakfox e-commerce or HealthOrb production integrations.
 *   @example
 *   Live resource: { namespace: 'prod', monitoring: true } in DNDHUBS.
 *
 * - 'test': Represents isolated testing environments.
 *   @alias testing
 *   Classifications: Aligns with unit/integration testing frameworks and ISO 25010 for reliability.
 *   Identifiers: lowercase: 'test', camelCase: 'testNamespace', snake_case: 'test_namespace', ALL_CAP: 'TEST', cache key: 'ns:test:resourceId'.
 *   Model Identifier Format: 'test-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For automated tests in Trakfox or HealthOrb DHIS2 simulations.
 *   @example
 *   Run tests: { namespace: 'test', suite: 'e2e' } in DOMSpec.
 *
 * - 'analytics': Represents namespaces for data analysis and reporting.
 *   @alias insights
 *   Classifications: Aligns with big data partitioning and GDPR data processing categories.
 *   Identifiers: lowercase: 'analytics', camelCase: 'analyticsNamespace', snake_case: 'analytics_namespace', ALL_CAP: 'ANALYTICS', cache key: 'ns:analytics:resourceId'.
 *   Model Identifier Format: 'analytics-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For metrics in Trakfox dashboards or HealthOrb analytics.
 *   @example
 *   Query data: GET /analytics/reports in DNDHUBS.
 *
 * - 'logs': Represents namespaces for logging and auditing.
 *   @alias logging
 *   Classifications: Aligns with ELK stack partitioning and ISO 27001 logging requirements.
 *   Identifiers: lowercase: 'logs', camelCase: 'logsNamespace', snake_case: 'logs_namespace', ALL_CAP: 'LOGS', cache key: 'ns:logs:resourceId'.
 *   Model Identifier Format: 'logs-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For error tracking in Trakfox or HealthOrb audit trails.
 *   @example
 *   Store logs: POST /logs/events in DOMSpec.
 *
 * - 'metrics': Represents namespaces for performance metrics and monitoring.
 *   @alias monitoring
 *   Classifications: Aligns with Prometheus/Grafana namespaces and ITIL monitoring.
 *   Identifiers: lowercase: 'metrics', camelCase: 'metricsNamespace', snake_case: 'metrics_namespace', ALL_CAP: 'METRICS', cache key: 'ns:metrics:resourceId'.
 *   Model Identifier Format: 'metrics-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For KPIs in HealthOrb or Trakfox performance tuning.
 *   @example
 *   Fetch metrics: GET /metrics/uptime in DNDHUBS.
 *
 * - 'users': Represents namespaces for user-related data and profiles.
 *   @alias accounts
 *   Classifications: Aligns with identity management standards (e.g., SCIM) and GDPR user data.
 *   Identifiers: lowercase: 'users', camelCase: 'usersNamespace', snake_case: 'users_namespace', ALL_CAP: 'USERS', cache key: 'ns:users:resourceId'.
 *   Model Identifier Format: 'users-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For profiles in Trakfox or HealthOrb patient users.
 *   @example
 *   Manage users: PUT /users/profile in DOMSpec.
 *
 * - 'products': Represents namespaces for product catalogs and items.
 *   @alias catalog
 *   Classifications: Aligns with e-commerce standards (e.g., GS1) and RESTful resource grouping.
 *   Identifiers: lowercase: 'products', camelCase: 'productsNamespace', snake_case: 'products_namespace', ALL_CAP: 'PRODUCTS', cache key: 'ns:products:resourceId'.
 *   Model Identifier Format: 'products-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For listings in DNDHUBS marketplace or Trakfox inventory.
 *   @example
 *   List products: GET /products/all in HealthOrb supplies.
 *
 * - 'orders': Represents namespaces for order processing and transactions.
 *   @alias transactions
 *   Classifications: Aligns with SCOR model for supply chain and PCI DSS for payments.
 *   Identifiers: lowercase: 'orders', camelCase: 'ordersNamespace', snake_case: 'orders_namespace', ALL_CAP: 'ORDERS', cache key: 'ns:orders:resourceId'.
 *   Model Identifier Format: 'orders-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For e-commerce in Trakfox or HealthOrb orders.
 *   @example
 *   Create order: POST /orders/new in DOMSpec.
 *
 * - 'inventory': Represents namespaces for stock and asset management.
 *   @alias stock
 *   Classifications: Aligns with inventory management standards (e.g., ISO 55000) and ERP systems.
 *   Identifiers: lowercase: 'inventory', camelCase: 'inventoryNamespace', snake_case: 'inventory_namespace', ALL_CAP: 'INVENTORY', cache key: 'ns:inventory:resourceId'.
 *   Model Identifier Format: 'inventory-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: For tracking in HealthOrb supplies or Trakfox warehouses.
 *   @example
 *   Update stock: PATCH /inventory/item in DNDHUBS.
 */
export type SystemNamespaceTaxonomy = CoreSystemNamespace | CustomSystemNamespace;
export type CoreSystemNamespace = 'default' | 'global' | 'system' | 'public' | 'private' | 'dev' | 'staging' | 'prod' | 'test' | 'analytics' | 'logs' | 'metrics' | 'users' | 'products' | 'orders' | 'inventory';
export type CustomSystemNamespace = string & { __systemnamespace?: 'CustomSystemNamespace' };