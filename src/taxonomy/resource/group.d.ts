/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/resource/resource-group-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ResourceGroupTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ResourceGroupTaxonomy
 * Union type representing ResourceGroupTaxonomy in the DOMSpec ecosystem.
 * Defines a standardized classification of resource groups for organizing data, workflows, and configurations across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with industry standards (e.g., ISO, HL7, SCOR) and enterprise systems (e.g., SAP, Salesforce) to ensure comprehensive coverage of domains like e-commerce, healthcare, and governance. Supports validation utilities in @domspecs/core for consistent resource handling in APIs, analytics, and integrations (e.g., HealthOrb DHIS2 adapters by August 11, 2025).
 *
 * - 'ui': Resources for user interfaces and interactive elements.
 *   Classifications: UI/UX standards (WCAG), aligns with HTML5 DOM.
 *   Identifiers: lowercase: 'ui', camelCase: 'uiGroup', snake_case: 'ui_group', ALL_CAP: 'UI', cache key: 'group:ui:resourceId'.
 *   Model Identifier Format: 'ui-{resourceType}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'interface', 'frontend'; used in Trakfox for page rendering, DnDHubs for interactive components.
 *   @example
 *   GET /api/ui?page=home // Fetch UI page in Trakfox
 *
 * - 'content': Resources for digital content and media.
 *   Classifications: CMS standards (e.g., Dublin Core), RESTful content APIs.
 *   Identifiers: lowercase: 'content', camelCase: 'contentGroup', snake_case: 'content_group', ALL_CAP: 'CONTENT', cache key: 'group:content:resourceId'.
 *   Model Identifier Format: 'content-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'media', 'assets'; used in DataOrb for articles, GEOCoLab for videos ($99 tier).
 *   @example
 *   POST /api/content { "type": "article" } // Create article in DataOrb
 *
 * - 'document': Resources for documents and publications.
 *   Classifications: Document standards (e.g., ISO 32000 for PDF), HL7 for healthcare docs.
 *   Identifiers: lowercase: 'document', camelCase: 'documentGroup', snake_case: 'document_group', ALL_CAP: 'DOCUMENT', cache key: 'group:document:resourceId'.
 *   Model Identifier Format: 'document-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'publication', 'record'; used in HealthOrb for reports, Trakfox for contracts.
 *   @example
 *   GET /api/document?type=report // Fetch report in HealthOrb
 *
 * - 'ecommerce': Resources for e-commerce operations.
 *   Classifications: E-commerce standards (e.g., Shopify API, SCOR), PCI DSS compliant.
 *   Identifiers: lowercase: 'ecommerce', camelCase: 'ecommerceGroup', snake_case: 'ecommerce_group', ALL_CAP: 'ECOMMERCE', cache key: 'group:ecommerce:resourceId'.
 *   Model Identifier Format: 'ecommerce-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'commerce', 'online_store'; used in DnDHubs for orders, Trakfox for carts (beta Q4 2025).
 *   @example
 *   POST /api/ecommerce { "type": "order" } // Create order in DnDHubs
 *
 * - 'retail': Resources for retail operations.
 *   Classifications: Retail standards (e.g., NRF ARTS), ERP integration.
 *   Identifiers: lowercase: 'retail', camelCase: 'retailGroup', snake_case: 'retail_group', ALL_CAP: 'RETAIL', cache key: 'group:retail:resourceId'.
 *   Model Identifier Format: 'retail-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'store', 'inventory'; used in DnDHubs for customer management, Trakfox for inventory tracking.
 *   @example
 *   GET /api/retail?type=inventory // Fetch inventory in DnDHubs
 *
 * - 'useractivity': Resources for user interactions and activities.
 *   Classifications: User analytics (e.g., Google Analytics), UX standards.
 *   Identifiers: lowercase: 'useractivity', camelCase: 'userActivityGroup', snake_case: 'user_activity_group', ALL_CAP: 'USERACTIVITY', cache key: 'group:useractivity:resourceId'.
 *   Model Identifier Format: 'useractivity-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'activity', 'engagement'; used in Trakfox for feedback, DataOrb for notifications.
 *   @example
 *   POST /api/useractivity { "type": "feedback" } // Log feedback in Trakfox
 *
 * - 'application': Resources for applications and workflows.
 *   Classifications: BPMN, application standards (e.g., SCORM for learning apps).
 *   Identifiers: lowercase: 'application', camelCase: 'applicationGroup', snake_case: 'application_group', ALL_CAP: 'APPLICATION', cache key: 'group:application:resourceId'.
 *   Model Identifier Format: 'application-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'app', 'program'; used in HealthOrb for job applications, Trakfox for tasks.
 *   @example
 *   POST /api/application { "type": "task" } // Create task in Trakfox
 *
 * - 'workflow': Resources for workflow-specific processes.
 *   Classifications: Workflow standards (e.g., BPMN, WFMC).
 *   Identifiers: lowercase: 'workflow', camelCase: 'workflowGroup', snake_case: 'workflow_group', ALL_CAP: 'WORKFLOW', cache key: 'group:workflow:resourceId'.
 *   Model Identifier Format: 'workflow-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'process', 'flow'; used in GEOCoLab for process automation ($2,497 tier).
 *   @example
 *   GET /api/workflow?type=step // Fetch workflow step in GEOCoLab
 *
 * - 'communication': Resources for communication channels.
 *   Classifications: Messaging standards (e.g., SMTP, XMPP), RESTful APIs.
 *   Identifiers: lowercase: 'communication', camelCase: 'communicationGroup', snake_case: 'communication_group', ALL_CAP: 'COMMUNICATION', cache key: 'group:communication:resourceId'.
 *   Model Identifier Format: 'communication-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'message', 'interaction'; used in Trakfox for emails, DnDHubs for messages.
 *   @example
 *   POST /api/communication { "type": "email" } // Send email in Trakfox
 *
 * - 'analytics': Resources for analytics and reporting.
 *   Classifications: Analytics standards (e.g., Google Analytics, OLAP).
 *   Identifiers: lowercase: 'analytics', camelCase: 'analyticsGroup', snake_case: 'analytics_group', ALL_CAP: 'ANALYTICS', cache key: 'group:analytics:resourceId'.
 *   Model Identifier Format: 'analytics-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'insights', 'metrics'; used in DataOrb for dashboards, Trakfox for reports.
 *   @example
 *   GET /api/analytics?type=dashboard // Fetch dashboard in DataOrb
 *
 * - 'data': Resources for data management.
 *   Classifications: Data standards (e.g., ISO/IEC 11179), database systems.
 *   Identifiers: lowercase: 'data', camelCase: 'dataGroup', snake_case: 'data_group', ALL_CAP: 'DATA', cache key: 'group:data:resourceId'.
 *   Model Identifier Format: 'data-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'dataset', 'info'; used in HealthOrb for graphs, GEOCoLab for databases.
 *   @example
 *   GET /api/data?type=graph // Fetch graph in HealthOrb
 *
 * - 'config': Resources for system configurations.
 *   Classifications: Configuration management (e.g., Ansible, JSON Schema).
 *   Identifiers: lowercase: 'config', camelCase: 'configGroup', snake_case: 'config_group', ALL_CAP: 'CONFIG', cache key: 'group:config:resourceId'.
 *   Model Identifier Format: 'config-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'settings', 'configuration'; used in Trakfox for settings, DnDHubs for caches.
 *   @example
 *   POST /api/config { "type": "setting" } // Update setting in Trakfox
 *
 * - 'integration': Resources for system integrations.
 *   Classifications: Integration standards (e.g., REST, SOAP), API specs.
 *   Identifiers: lowercase: 'integration', camelCase: 'integrationGroup', snake_case: 'integration_group', ALL_CAP: 'INTEGRATION', cache key: 'group:integration:resourceId'.
 *   Model Identifier Format: 'integration-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'connectors', 'apis'; used in HealthOrb for DHIS2 connectors, Trakfox for API specs.
 *   @example
 *   GET /api/integration?type=apispec // Fetch API spec in HealthOrb
 *
 * - 'infrastructure': Resources for infrastructure components.
 *   Classifications: Infrastructure standards (e.g., ITIL, AWS Well-Architected).
 *   Identifiers: lowercase: 'infrastructure', camelCase: 'infrastructureGroup', snake_case: 'infrastructure_group', ALL_CAP: 'INFRASTRUCTURE', cache key: 'group:infrastructure:resourceId'.
 *   Model Identifier Format: 'infrastructure-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'infra', 'systems'; used in DataOrb for servers, GEOCoLab for networks.
 *   @example
 *   GET /api/infrastructure?type=server // Fetch server in DataOrb
 *
 * - 'tech': Resources for technology components.
 *   Classifications: Tech standards (e.g., Docker, Kubernetes), microservices.
 *   Identifiers: lowercase: 'tech', camelCase: 'techGroup', snake_case: 'tech_group', ALL_CAP: 'TECH', cache key: 'group:tech:resourceId'.
 *   Model Identifier Format: 'tech-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'technology', 'tools'; used in Trakfox for microservices, DnDHubs for containers.
 *   @example
 *   POST /api/tech { "type": "container" } // Deploy container in DnDHubs
 *
 * - 'ai': Resources for AI and machine learning.
 *   Classifications: AI standards (e.g., ONNX, TensorFlow), ML pipelines.
 *   Identifiers: lowercase: 'ai', camelCase: 'aiGroup', snake_case: 'ai_group', ALL_CAP: 'AI', cache key: 'group:ai:resourceId'.
 *   Model Identifier Format: 'ai-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'machine_learning', 'ml'; used in GEOCoLab for models ($2,497 tier), DataOrb for datasets.
 *   @example
 *   GET /api/ai?type=model // Fetch AI model in GEOCoLab
 *
 * - 'business': Resources for business domains.
 *   Classifications: Business standards (e.g., BPMN, ERP), CRM systems.
 *   Identifiers: lowercase: 'business', camelCase: 'businessGroup', snake_case: 'business_group', ALL_CAP: 'BUSINESS', cache key: 'group:business:resourceId'.
 *   Model Identifier Format: 'business-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'enterprise', 'org'; used in DnDHubs for organizations, Trakfox for roles.
 *   @example
 *   GET /api/business?type=organization // Fetch organization in DnDHubs
 *
 * - 'identity': Resources for identity management.
 *   Classifications: Identity standards (e.g., OAuth, NIST SP 800-63).
 *   Identifiers: lowercase: 'identity', camelCase: 'identityGroup', snake_case: 'identity_group', ALL_CAP: 'IDENTITY', cache key: 'group:identity:resourceId'.
 *   Model Identifier Format: 'identity-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'auth', 'user_id'; used in Trakfox for users, HealthOrb for credentials.
 *   @example
 *   POST /api/identity { "type": "user" } // Create user in Trakfox
 *
 * - 'financial': Resources for financial operations.
 *   Classifications: Financial standards (e.g., ISO 20022, PCI DSS).
 *   Identifiers: lowercase: 'financial', camelCase: 'financialGroup', snake_case: 'financial_group', ALL_CAP: 'FINANCIAL', cache key: 'group:financial:resourceId'.
 *   Model Identifier Format: 'financial-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'finance', 'money'; used in DnDHubs for transactions, Trakfox for accounts.
 *   @example
 *   POST /api/financial { "type": "transaction" } // Process transaction in DnDHubs
 *
 * - 'healthcare': Resources for healthcare operations.
 *   Classifications: Healthcare standards (e.g., HL7, FHIR).
 *   Identifiers: lowercase: 'healthcare', camelCase: 'healthcareGroup', snake_case: 'healthcare_group', ALL_CAP: 'HEALTHCARE', cache key: 'group:healthcare:resourceId'.
 *   Model Identifier Format: 'healthcare-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'health', 'medical'; used in HealthOrb for patients, prescriptions via DHIS2.
 *   @example
 *   GET /api/healthcare?type=patient // Fetch patient in HealthOrb
 *
 * - 'education': Resources for educational systems.
 *   Classifications: Education standards (e.g., SCORM, IMS Global).
 *   Identifiers: lowercase: 'education', camelCase: 'educationGroup', snake_case: 'education_group', ALL_CAP: 'EDUCATION', cache key: 'group:education:resourceId'.
 *   Model Identifier Format: 'education-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'learning', 'academic'; used in DataOrb for courses, Trakfox for students.
 *   @example
 *   POST /api/education { "type": "course" } // Create course in DataOrb
 *
 * - 'government': Resources for government services.
 *   Classifications: Government standards (e.g., G2C, e-Government).
 *   Identifiers: lowercase: 'government', camelCase: 'governmentGroup', snake_case: 'government_group', ALL_CAP: 'GOVERNMENT', cache key: 'group:government:resourceId'.
 *   Model Identifier Format: 'government-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'public_service', 'gov'; used in HealthOrb for citizen records, Trakfox for permits.
 *   @example
 *   GET /api/government?type=citizen // Fetch citizen in HealthOrb
 *
 * - 'governance': Resources for governance and compliance.
 *   Classifications: Governance standards (e.g., ISO 37000, COBIT).
 *   Identifiers: lowercase: 'governance', camelCase: 'governanceGroup', snake_case: 'governance_group', ALL_CAP: 'GOVERNANCE', cache key: 'group:governance:resourceId'.
 *   Model Identifier Format: 'governance-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'policy', 'compliance'; used in HealthOrb for policies, DnDHubs for compliance reports.
 *   @example
 *   POST /api/governance { "type": "policy" } // Create policy in HealthOrb
 *
 * - 'legal': Resources for legal processes.
 *   Classifications: Legal standards (e.g., ISO 27001 for data protection).
 *   Identifiers: lowercase: 'legal', camelCase: 'legalGroup', snake_case: 'legal_group', ALL_CAP: 'LEGAL', cache key: 'group:legal:resourceId'.
 *   Model Identifier Format: 'legal-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'law', 'compliance'; used in Trakfox for contracts, DnDHubs for litigation.
 *   @example
 *   GET /api/legal?type=contract // Fetch contract in Trakfox
 *
 * - 'operational': Resources for operational management.
 *   Classifications: Operational standards (e.g., ITIL, ISO 55000).
 *   Identifiers: lowercase: 'operational', camelCase: 'operationalGroup', snake_case: 'operational_group', ALL_CAP: 'OPERATIONAL', cache key: 'group:operational:resourceId'.
 *   Model Identifier Format: 'operational-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'ops', 'management'; used in DataOrb for incidents, GEOCoLab for maintenance.
 *   @example
 *   POST /api/operational { "type": "incident" } // Log incident in DataOrb
 *
 * - 'regulatory': Resources for regulatory compliance.
 *   Classifications: Regulatory standards (e.g., GDPR, HIPAA).
 *   Identifiers: lowercase: 'regulatory', camelCase: 'regulatoryGroup', snake_case: 'regulatory_group', ALL_CAP: 'REGULATORY', cache key: 'group:regulatory:resourceId'.
 *   Model Identifier Format: 'regulatory-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'compliance', 'regulation'; used in HealthOrb for compliance reports, Trakfox for regulations.
 *   @example
 *   GET /api/regulatory?type=regulation // Fetch regulation in HealthOrb
 *
 * - 'spatial': Resources for spatial and location-based data.
 *   Classifications: Geospatial standards (e.g., ISO 19115, GeoJSON).
 *   Identifiers: lowercase: 'spatial', camelCase: 'spatialGroup', snake_case: 'spatial_group', ALL_CAP: 'SPATIAL', cache key: 'group:spatial:resourceId'.
 *   Model Identifier Format: 'spatial-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'geo', 'location'; used in GEOCoLab for maps, Trakfox for locations ($99 tier).
 *   @example
 *   GET /api/spatial?type=map // Fetch map in GEOCoLab
 *
 * - 'temporal': Resources for time-based data.
 *   Classifications: Temporal standards (e.g., ISO 8601, timeseries databases).
 *   Identifiers: lowercase: 'temporal', camelCase: 'temporalGroup', snake_case: 'temporal_group', ALL_CAP: 'TEMPORAL', cache key: 'group:temporal:resourceId'.
 *   Model Identifier Format: 'temporal-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'time', 'schedule'; used in DataOrb for timeseries, Trakfox for schedules.
 *   @example
 *   POST /api/temporal { "type": "schedule" } // Create schedule in Trakfox
 *
 * - 'storage': Resources for data storage.
 *   Classifications: Storage standards (e.g., S3, POSIX).
 *   Identifiers: lowercase: 'storage', camelCase: 'storageGroup', snake_case: 'storage_group', ALL_CAP: 'STORAGE', cache key: 'group:storage:resourceId'.
 *   Model Identifier Format: 'storage-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'file', 'blob'; used in DnDHubs for files, DataOrb for blobs.
 *   @example
 *   POST /api/storage { "type": "file" } // Upload file in DnDHubs
 *
 * - 'research': Resources for research activities.
 *   Classifications: Research standards (e.g., ORCID, FAIR principles).
 *   Identifiers: lowercase: 'research', camelCase: 'researchGroup', snake_case: 'research_group', ALL_CAP: 'RESEARCH', cache key: 'group:research:resourceId'.
 *   Model Identifier Format: 'research-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'study', 'experiment'; used in GEOCoLab for studies, DataOrb for experiments.
 *   @example
 *   GET /api/research?type=study // Fetch study in GEOCoLab
 *
 * - 'social': Resources for social interactions.
 *   Classifications: Social media standards (e.g., Open Graph, Activity Streams).
 *   Identifiers: lowercase: 'social', camelCase: 'socialGroup', snake_case: 'social_group', ALL_CAP: 'SOCIAL', cache key: 'group:social:resourceId'.
 *   Model Identifier Format: 'social-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'community', 'post'; used in Trakfox for posts, DnDHubs for comments.
 *   @example
 *   POST /api/social { "type": "post" } // Create post in Trakfox
 *
 * - 'media': Resources for media and entertainment.
 *   Classifications: Media standards (e.g., MPEG, HLS).
 *   Identifiers: lowercase: 'media', camelCase: 'mediaGroup', snake_case: 'media_group', ALL_CAP: 'MEDIA', cache key: 'group:media:resourceId'.
 *   Model Identifier Format: 'media-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'entertainment', 'multimedia'; used in DataOrb for podcasts, Trakfox for webinars.
 *   @example
 *   GET /api/media?type=podcast // Fetch podcast in DataOrb
 *
 * - 'manufacturing': Resources for manufacturing processes.
 *   Classifications: Manufacturing standards (e.g., ISO 9001, SCOR).
 *   Identifiers: lowercase: 'manufacturing', camelCase: 'manufacturingGroup', snake_case: 'manufacturing_group', ALL_CAP: 'MANUFACTURING', cache key: 'group:manufacturing:resourceId'.
 *   Model Identifier Format: 'manufacturing-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'production', 'factory'; used in DnDHubs for parts, Trakfox for work orders.
 *   @example
 *   POST /api/manufacturing { "type": "workOrder" } // Create work order in DnDHubs
 *
 * - 'transportation': Resources for transportation and logistics.
 *   Classifications: Transportation standards (e.g., SCOR, IATA).
 *   Identifiers: lowercase: 'transportation', camelCase: 'transportationGroup', snake_case: 'transportation_group', ALL_CAP: 'TRANSPORTATION', cache key: 'group:transportation:resourceId'.
 *   Model Identifier Format: 'transportation-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'logistics', 'shipping'; used in Trakfox for shipments, DnDHubs for routes.
 *   @example
 *   GET /api/transportation?type=shipment // Fetch shipment in Trakfox
 *
 * - 'energy': Resources for energy management.
 *   Classifications: Energy standards (e.g., ISO 50001, IEC).
 *   Identifiers: lowercase: 'energy', camelCase: 'energyGroup', snake_case: 'energy_group', ALL_CAP: 'ENERGY', cache key: 'group:energy:resourceId'.
 *   Model Identifier Format: 'energy-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'power', 'utility'; used in GEOCoLab for meters, DataOrb for facilities.
 *   @example
 *   GET /api/energy?type=meter // Fetch meter in GEOCoLab
 *
 * - 'telecom': Resources for telecommunications.
 *   Classifications: Telecom standards (e.g., ITU-T, 3GPP).
 *   Identifiers: lowercase: 'telecom', camelCase: 'telecomGroup', snake_case: 'telecom_group', ALL_CAP: 'TELECOM', cache key: 'group:telecom:resourceId'.
 *   Model Identifier Format: 'telecom-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'communication', 'network'; used in Trakfox for plans, DnDHubs for devices.
 *   @example
 *   POST /api/telecom { "type": "plan" } // Create plan in Trakfox
 *
 * - 'realestate': Resources for real estate management.
 *   Classifications: Real estate standards (e.g., RESO, MLS).
 *   Identifiers: lowercase: 'realestate', camelCase: 'realEstateGroup', snake_case: 'real_estate_group', ALL_CAP: 'REALESTATE', cache key: 'group:realestate:resourceId'.
 *   Model Identifier Format: 'realestate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'property', 'realty'; used in DnDHubs for properties, Trakfox for leases.
 *   @example
 *   GET /api/realestate?type=property // Fetch property in DnDHubs
 *
 * - 'hospitality': Resources for hospitality services.
 *   Classifications: Hospitality standards (e.g., HTNG, OTA).
 *   Identifiers: lowercase: 'hospitality', camelCase: 'hospitalityGroup', snake_case: 'hospitality_group', ALL_CAP: 'HOSPITALITY', cache key: 'group:hospitality:resourceId'.
 *   Model Identifier Format: 'hospitality-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'hotel', 'guest_services'; used in Trakfox for reservations, DataOrb for guests.
 *   @example
 *   POST /api/hospitality { "type": "reservation" } // Create reservation in Trakfox
 *
 * - 'nonprofit': Resources for non-profit operations.
 *   Classifications: Non-profit standards (e.g., IRS 501(c), GuideStar).
 *   Identifiers: lowercase: 'nonprofit', camelCase: 'nonprofitGroup', snake_case: 'nonprofit_group', ALL_CAP: 'NONPROFIT', cache key: 'group:nonprofit:resourceId'.
 *   Model Identifier Format: 'nonprofit-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'charity', 'ngo'; used in DataOrb for donations, Trakfox for volunteers.
 *   @example
 *   POST /api/nonprofit { "type": "donation" } // Record donation in DataOrb
 */
export type ResourceGroupTaxonomy = CoreResourceGroup | CustomResourceGroup;

/** Core resource groups for standardized domains */
export type CoreResourceGroupTaxonomy = 'ui' | 'content' | 'document' | 'ecommerce' | 'retail' | 'useractivity' | 'application' | 'workflow' | 'communication' | 'analytics' | 'data' | 'config' | 'integration' | 'infrastructure' | 'tech' | 'ai' | 'business' | 'identity' | 'financial' | 'healthcare' | 'education' | 'government' | 'governance' | 'legal' | 'operational' | 'regulatory' | 'spatial' | 'temporal' | 'storage' | 'research' | 'social' | 'media' | 'manufacturing' | 'transportation' | 'energy' | 'telecom' | 'realestate' | 'hospitality' | 'nonprofit';

/** Interface-specific resource groups */
export type InterfaceResourceGroupTaxonomy = 'ui' | 'content' | 'document' | 'useractivity' | 'communication' | 'social' | 'media';

/** Business-oriented resource groups */
export type BusinessResourceGroupTaxonomy = 'ecommerce' | 'retail' | 'application' | 'workflow' | 'analytics' | 'business' | 'financial' | 'manufacturing' | 'transportation' | 'realestate' | 'hospitality' | 'nonprofit';

/** Technical resource groups */
export type TechnicalResourceGroupTaxonomy = 'data' | 'config' | 'integration' | 'infrastructure' | 'tech' | 'ai' | 'storage';

/** Sector-specific resource groups */
export type SectorResourceGroupTaxonomy = 'healthcare' | 'education' | 'government' | 'governance' | 'legal' | 'operational' | 'regulatory' | 'energy' | 'telecom';

/** Data-oriented resource groups */
export type DataResourceGroupTaxonomy = 'spatial' | 'temporal' | 'research';

export type CoreResourceGroup = 
  | InterfaceResourceGroupTaxonomy
  | BusinessResourceGroupTaxonomy
  | TechnicalResourceGroupTaxonomy
  | SectorResourceGroupTaxonomy
  | DataResourceGroupTaxonomy;

export type CustomResourceGroup = string & { __resourcegroup?: 'ResourceGroup' };