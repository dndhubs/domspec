/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/security/data-security-domain-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/DataSecurityDomainTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20DataSecurityDomainTaxonomy
 * Union type representing DataSecurityDomainTaxonomy in the DOMSpec ecosystem.
 * Defines security contexts for data access and operations, categorizing environments and boundaries where security policies and mechanisms are applied. Aligns with standards like ISO/IEC 27001 (Information Security Management), NIST SP 800-53 (Security Controls), and OWASP security principles. Supports extensibility for custom security domains in complex architectures within DNDHUBS platforms like Trakfox e-commerce and HealthOrb DHIS2 integrations.
 *
 * - 'client': Represents the client-side environment, typically user-facing applications.
 *   @alias frontend
 *   Classifications: Aligns with OWASP client-side security and ISO/IEC 27001 A.14 (System Acquisition).
 *   Identifiers: lowercase: 'client', camelCase: 'clientDomain', snake_case: 'client_domain', ALL_CAP: 'CLIENT', cache key: 'security:client:resourceId'.
 *   Model Identifier Format: 'client-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'user'; used in Trakfox for browser-based UI security or HealthOrb for patient portal access controls.
 *   @example
 *   Apply client-side encryption: encrypt(data, 'client'); in Trakfox user sessions.
 *
 * - 'internal': Represents internal network or private infrastructure environments.
 *   @alias intranet
 *   Classifications: Aligns with NIST SP 800-53 AC-3 (Access Control) and ISO/IEC 27001 A.9.
 *   Identifiers: lowercase: 'internal', camelCase: 'internalDomain', snake_case: 'internal_domain', ALL_CAP: 'INTERNAL', cache key: 'security:internal:resourceId'.
 *   Model Identifier Format: 'internal-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'private'; for backend services in HealthOrb DHIS2 or DNDHUBS internal APIs.
 *   @example
 *   Restrict access: { domain: 'internal', role: 'admin' }; in Trakfox server configs.
 *
 * - 'edge': Represents edge computing environments, often for low-latency processing.
 *   @alias perimeter
 *   Classifications: Aligns with Akamai edge security and NIST SP 800-53 SC-7 (Boundary Protection).
 *   Identifiers: lowercase: 'edge', camelCase: 'edgeDomain', snake_case: 'edge_domain', ALL_CAP: 'EDGE', cache key: 'security:edge:resourceId'.
 *   Model Identifier Format: 'edge-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'cdn'; for edge security in Trakfox content delivery or HealthOrb real-time analytics.
 *   @example
 *   Secure edge: applyWAF('edge'); in DNDHUBS CDN integrations.
 *
 * - 'database': Represents data storage environments with strict access controls.
 *   @alias db
 *   Classifications: Aligns with SQL security standards and ISO/IEC 27001 A.12.4 (Logging and Monitoring).
 *   Identifiers: lowercase: 'database', camelCase: 'databaseDomain', snake_case: 'database_domain', ALL_CAP: 'DATABASE', cache key: 'security:database:resourceId'.
 *   Model Identifier Format: 'database-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'storage'; for HealthOrb patient data or Trakfox transaction records.
 *   @example
 *   Query with ACL: SELECT * FROM table WHERE user_id = ?; in DNDHUBS database access.
 *
 * - 'distributed': Represents distributed systems requiring cross-node security.
 *   @alias cluster
 *   Classifications: Aligns with distributed system security (e.g., Hadoop) and NIST SP 800-53 SC-8.
 *   Identifiers: lowercase: 'distributed', camelCase: 'distributedDomain', snake_case: 'distributed_domain', ALL_CAP: 'DISTRIBUTED', cache key: 'security:distributed:resourceId'.
 *   Model Identifier Format: 'distributed-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'grid'; for microservices in Trakfox or HealthOrb data syncing.
 *   @example
 *   Secure cluster: configureKerberos('distributed'); in DNDHUBS microservices.
 *
 * - 'cloud': Represents cloud-based environments with shared responsibility models.
 *   @alias hosted
 *   Classifications: Aligns with CSA STAR and ISO/IEC 27017 (Cloud Security).
 *   Identifiers: lowercase: 'cloud', camelCase: 'cloudDomain', snake_case: 'cloud_domain', ALL_CAP: 'CLOUD', cache key: 'security:cloud:resourceId'.
 *   Model Identifier Format: 'cloud-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'aws'; for deployments in Trakfox or HealthOrb on CloudRegionTaxonomy regions like 'us-east-1'.
 *   @example
 *   Cloud IAM: aws.iam.attachPolicy('cloud'); in DNDHUBS deployments.
 *
 * - 'git': Represents version control systems with repository-specific security.
 *   @alias vcs
 *   Classifications: Aligns with Git security practices and ISO/IEC 12207 (Software Life Cycle).
 *   Identifiers: lowercase: 'git', camelCase: 'gitDomain', snake_case: 'git_domain', ALL_CAP: 'GIT', cache key: 'security:git:resourceId'.
 *   Model Identifier Format: 'git-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'repo'; for code access in Trakfox CI/CD or HealthOrb development.
 *   @example
 *   Secure repo: git.setAuth('git'); in DNDHUBS pipelines.
 *
 * - 'cache': Represents temporary storage with security for high-speed access.
 *   @alias memo
 *   Classifications: Aligns with Redis security and ISO/IEC 27001 A.12.4 (Data Protection).
 *   Identifiers: lowercase: 'cache', camelCase: 'cacheDomain', snake_case: 'cache_domain', ALL_CAP: 'CACHE', cache key: 'security:cache:resourceId'.
 *   Model Identifier Format: 'cache-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'buffer'; for session caching in Trakfox or HealthOrb performance.
 *   @example
 *   Secure cache: redis.setex('key', ttl, value); in DNDHUBS optimizations.
 *
 * - 'external': Represents third-party or external system integrations.
 *   @alias thirdparty
 *   Classifications: Aligns with OAuth 2.0 (RFC 6749) and ISO/IEC 27001 A.14.2 (External Interfaces).
 *   Identifiers: lowercase: 'external', camelCase: 'externalDomain', snake_case: 'external_domain', ALL_CAP: 'EXTERNAL', cache key: 'security:external:resourceId'.
 *   Model Identifier Format: 'external-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'vendor'; for APIs in HealthOrb DHIS2 or Trakfox marketplace integrations.
 *   @example
 *   Authenticate external: oauth.grant('external'); in DNDHUBS API calls.
 *
 * - 'mobile': Represents mobile application environments with device-specific security.
 *   @alias app
 *   Classifications: Aligns with OWASP Mobile Top 10 and ISO/IEC 27034 (Application Security).
 *   Identifiers: lowercase: 'mobile', camelCase: 'mobileDomain', snake_case: 'mobile_domain', ALL_CAP: 'MOBILE', cache key: 'security:mobile:resourceId'.
 *   Model Identifier Format: 'mobile-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'device'; for Trakfox mobile apps or HealthOrb patient apps.
 *   @example
 *   Secure mobile: encryptSession('mobile'); in Trakfox user apps.
 *
 * - 'iot': Represents Internet of Things devices with embedded security.
 *   @alias device
 *   Classifications: Aligns with IoT security (IEC 62443) and NIST SP 800-53 IoT controls.
 *   Identifiers: lowercase: 'iot', camelCase: 'iotDomain', snake_case: 'iot_domain', ALL_CAP: 'IOT', cache key: 'security:iot:resourceId'.
 *   Model Identifier Format: 'iot-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'sensor'; for HealthOrb medical devices or Trakfox IoT integrations.
 *   @example
 *   Secure IoT: mqtt.auth('iot'); in DNDHUBS device communications.
 *
 * - 'saas': Represents Software-as-a-Service environments with tenant isolation.
 *   @alias cloudapp
 *   Classifications: Aligns with ISO/IEC 27017 and CSA STAR for SaaS security.
 *   Identifiers: lowercase: 'saas', camelCase: 'saasDomain', snake_case: 'saas_domain', ALL_CAP: 'SAAS', cache key: 'security:saas:resourceId'.
 *   Model Identifier Format: 'saas-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'tenant'; for Trakfox SaaS platforms or HealthOrb hosted services.
 *   @example
 *   Configure SaaS: tenant.isolate('saas'); in DNDHUBS multi-tenant apps.
 *
 * - 'server': Represents traditional server-based environments with direct control.
 *   @alias host
 *   Classifications: Aligns with NIST SP 800-53 SC-1 (System Boundary) and ISO/IEC 27001 A.11.
 *   Identifiers: lowercase: 'server', camelCase: 'serverDomain', snake_case: 'server_domain', ALL_CAP: 'SERVER', cache key: 'security:server:resourceId'.
 *   Model Identifier Format: 'server-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'vm'; for on-prem servers in HealthOrb or Trakfox.
 *   @example
 *   Secure server: ssh.config('server'); in DNDHUBS infrastructure.
 *
 * - 'serverless': Represents function-as-a-service environments with event-driven security.
 *   @alias faas
 *   Classifications: Aligns with AWS Lambda security and ISO/IEC 27017.
 *   Identifiers: lowercase: 'serverless', camelCase: 'serverlessDomain', snake_case: 'serverless_domain', ALL_CAP: 'SERVERLESS', cache key: 'security:serverless:resourceId'.
 *   Model Identifier Format: 'serverless-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'lambda'; for event-driven functions in Trakfox or HealthOrb.
 *   @example
 *   Secure function: lambda.setPolicy('serverless'); in DNDHUBS cloud ops.
 *
 * - 'container': Represents containerized environments with isolation security.
 *   @alias docker
 *   Classifications: Aligns with Docker/Kubernetes security and NIST SP 800-190.
 *   Identifiers: lowercase: 'container', camelCase: 'containerDomain', snake_case: 'container_domain', ALL_CAP: 'CONTAINER', cache key: 'security:container:resourceId'.
 *   Model Identifier Format: 'container-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'pod'; for microservices in Trakfox or HealthOrb.
 *   @example
 *   Secure container: k8s.setNamespace('container'); in DNDHUBS deployments.
 *
 * - 'browser': Represents web browser environments with client-side security.
 *   @alias web
 *   Classifications: Aligns with OWASP Top 10 and W3C security standards.
 *   Identifiers: lowercase: 'browser', camelCase: 'browserDomain', snake_case: 'browser_domain', ALL_CAP: 'BROWSER', cache key: 'security:browser:resourceId'.
 *   Model Identifier Format: 'browser-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'clientweb'; for Trakfox web apps or HealthOrb portals.
 *   @example
 *   Secure browser: applyCSP('browser'); in DNDHUBS web apps.
 *
 * - 'worker': Represents background worker processes with isolated security.
 *   @alias job
 *   Classifications: Aligns with Web Workers (W3C) and ISO/IEC 27001 A.12.4.
 *   Identifiers: lowercase: 'worker', camelCase: 'workerDomain', snake_case: 'worker_domain', ALL_CAP: 'WORKER', cache key: 'security:worker:resourceId'.
 *   Model Identifier Format: 'worker-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'task'; for async jobs in Trakfox or HealthOrb processing.
 *   @example
 *   Secure worker: worker.postMessage('worker'); in DNDHUBS background tasks.
 *
 * - 'desktop': Represents desktop application environments with local security.
 *   @alias app
 *   Classifications: Aligns with NIST SP 800-53 AC-20 (External Systems) and ISO/IEC 27034.
 *   Identifiers: lowercase: 'desktop', camelCase: 'desktopDomain', snake_case: 'desktop_domain', ALL_CAP: 'DESKTOP', cache key: 'security:desktop:resourceId'.
 *   Model Identifier Format: 'desktop-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'local'; for HealthOrb desktop tools or Trakfox admin apps.
 *   @example
 *   Secure desktop: encryptLocal('desktop'); in DNDHUBS desktop clients.
 *
 * - 'warehouse': Represents data warehouse environments for large-scale analytics.
 *   @alias bigdata
 *   Classifications: Aligns with Snowflake/Redshift security and ISO/IEC 15944.
 *   Identifiers: lowercase: 'warehouse', camelCase: 'warehouseDomain', snake_case: 'warehouse_domain', ALL_CAP: 'WAREHOUSE', cache key: 'security:warehouse:resourceId'.
 *   Model Identifier Format: 'warehouse-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'datalake'; for analytics in HealthOrb or Trakfox BI.
 *   @example
 *   Secure warehouse: queryACL('warehouse'); in DNDHUBS analytics.
 *
 * - 'cdn': Represents content delivery network environments with distributed security.
 *   @alias edge
 *   Classifications: Aligns with Cloudflare security and ISO/IEC 27001 A.13.2 (Information Transfer).
 *   Identifiers: lowercase: 'cdn', camelCase: 'cdnDomain', snake_case: 'cdn_domain', ALL_CAP: 'CDN', cache key: 'security:cdn:resourceId'.
 *   Model Identifier Format: 'cdn-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'delivery'; for assets in Trakfox or HealthOrb media.
 *   @example
 *   Secure CDN: cdn.setPolicy('cdn'); in DNDHUBS content delivery.
 *
 * - 'dlt': Represents distributed ledger technology environments, synonymous with blockchain.
 *   @alias blockchain
 *   Classifications: Aligns with ISO/TC 307 blockchain standards.
 *   Identifiers: lowercase: 'dlt', camelCase: 'dltDomain', snake_case: 'dlt_domain', ALL_CAP: 'DLT', cache key: 'security:dlt:resourceId'.
 *   Model Identifier Format: 'dlt-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'ledger'; for secure records in HealthOrb or Trakfox NFTs.
 *   @example
 *   Secure DLT: web3.sign('dlt'); in DNDHUBS blockchain integrations.
 *
 * - 'blockchain': Represents blockchain environments for immutable data security.
 *   @alias dlt
 *   Classifications: Aligns with ISO/TC 307 and Ethereum security practices.
 *   Identifiers: lowercase: 'blockchain', camelCase: 'blockchainDomain', snake_case: 'blockchain_domain', ALL_CAP: 'BLOCKCHAIN', cache key: 'security:blockchain:resourceId'.
 *   Model Identifier Format: 'blockchain-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'chain'; for transactions in Trakfox or HealthOrb ledgers.
 *   @example
 *   Secure blockchain: chain.contract('blockchain'); in DNDHUBS smart contracts.
 *
 * - 'hybrid': Represents environments combining on-prem and cloud security models.
 *   @alias multicloud
 *   Classifications: Aligns with NIST SP 800-145 and ISO/IEC 27017 hybrid cloud security.
 *   Identifiers: lowercase: 'hybrid', camelCase: 'hybridDomain', snake_case: 'hybrid_domain', ALL_CAP: 'HYBRID', cache key: 'security:hybrid:resourceId'.
 *   Model Identifier Format: 'hybrid-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'mixed'; for Trakfox hybrid deployments or HealthOrb integrations.
 *   @example
 *   Secure hybrid: configureHybrid('hybrid'); in DNDHUBS multi-cloud setups.
 *
 * - 'isolated': Represents fully isolated environments with maximum security controls.
 *   @alias sandbox
 *   Classifications: Aligns with NIST SP 800-53 SC-7 (Boundary Protection) and ISO/IEC 27001 A.12.1.
 *   Identifiers: lowercase: 'isolated', camelCase: 'isolatedDomain', snake_case: 'isolated_domain', ALL_CAP: 'ISOLATED', cache key: 'security:isolated:resourceId'.
 *   Model Identifier Format: 'isolated-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'airgap'; for high-security testing in HealthOrb or Trakfox.
 *   @example
 *   Secure isolated: sandbox.init('isolated'); in DNDHUBS secure testing.
 */
export type DataSecurityDomainTaxonomy = CoreDataSecurityDomain | CustomDataSecurityDomain;
export type CoreDataSecurityDomain = 'client' | 'internal' | 'edge' | 'database' | 'distributed' | 'cloud' | 'git' | 'cache' | 'external' | 'mobile' | 'iot' | 'saas' | 'server' | 'serverless' | 'container' | 'browser' | 'worker' | 'desktop' | 'warehouse' | 'cdn' | 'dlt' | 'blockchain' | 'hybrid' | 'isolated';
export type CustomDataSecurityDomain = string & { __datasecuritydomain?: 'DataSecurityDomain' };