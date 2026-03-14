/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/subject/subject-type-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/SubjectTypeTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20SubjectTypeTaxonomy
 * Union type representing SubjectTypeTaxonomy in the DOMSpec ecosystem.
 * Defines standardized subject types for entities interacting with resources across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with identity and access management standards (e.g., OAuth 2.0, NIST SP 800-63 for identity, IoT device standards) to ensure consistent subject classification in APIs, authentication, and authorization workflows. Supports validation utilities in @domspecs/core for subject-based access control (e.g., Trakfox user authentication, HealthOrb DHIS2 system integrations by August 11, 2025).
 *
 * - 'user': An individual human user.
 *   Classifications: Identity standards (OAuth 2.0, NIST SP 800-63), aligns with user authentication frameworks.
 *   Identifiers: lowercase: 'user', camelCase: 'userSubject', snake_case: 'user_subject', ALL_CAP: 'USER', cache key: 'subject:user:subjectId'.
 *   Model Identifier Format: 'user-{subjectId}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'person', 'individual'; used in Trakfox for user accounts, HealthOrb for patient users.
 *   @example
 *   POST /api/auth { "type": "user", "id": "user123" } // Authenticate user in Trakfox
 *
 * - 'service': A software service or application.
 *   Classifications: Service authentication standards (OAuth client credentials), aligns with microservices architecture.
 *   Identifiers: lowercase: 'service', camelCase: 'serviceSubject', snake_case: 'service_subject', ALL_CAP: 'SERVICE', cache key: 'subject:service:subjectId'.
 *   Model Identifier Format: 'service-{subjectId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'app', 'microservice'; used in DnDHubs for API services, GEOCoLab for data processing services ($99 tier).
 *   @example
 *   POST /api/services { "type": "service", "id": "svc123" } // Register service in DnDHubs
 *
 * - 'organization': A business or institutional entity.
 *   Classifications: Organizational identity standards (SAML, ERP systems like SAP).
 *   Identifiers: lowercase: 'organization', camelCase: 'organizationSubject', snake_case: 'organization_subject', ALL_CAP: 'ORGANIZATION', cache key: 'subject:organization:subjectId'.
 *   Model Identifier Format: 'organization-{subjectId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'company', 'entity'; used in Trakfox for tenant organizations, HealthOrb for healthcare institutions.
 *   @example
 *   GET /api/organizations/org123 // Fetch organization in Trakfox
 *
 * - 'device': A physical or virtual device.
 *   Classifications: IoT standards (MQTT, CoAP), aligns with device authentication protocols.
 *   Identifiers: lowercase: 'device', camelCase: 'deviceSubject', snake_case: 'device_subject', ALL_CAP: 'DEVICE', cache key: 'subject:device:subjectId'.
 *   Model Identifier Format: 'device-{subjectId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sensor', 'gadget'; used in GEOCoLab for IoT devices ($2,497 tier), HealthOrb for medical devices.
 *   @example
 *   POST /api/devices { "type": "device", "id": "dev123" } // Register device in GEOCoLab
 *
 * - 'system': A system or platform component.
 *   Classifications: System authentication standards, aligns with ITIL service management.
 *   Identifiers: lowercase: 'system', camelCase: 'systemSubject', snake_case: 'system_subject', ALL_CAP: 'SYSTEM', cache key: 'subject:system:subjectId'.
 *   Model Identifier Format: 'system-{subjectId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'platform', 'infrastructure'; used in DataOrb for system integrations, Trakfox for platform components.
 *   @example
 *   GET /api/systems/sys123 // Fetch system details in DataOrb
 */
export type SubjectTaxonomy = CoreSubjectTaxonomy | CustomSubject;

/** Core subject types */
export type CoreSubjectTaxonomy = 
  | 'user' 
  | 'service' 
  | 'organization' 
  | 'device' 
  | 'system';

export type CustomSubject = string & { __subjectType?: 'CustomSubject' };