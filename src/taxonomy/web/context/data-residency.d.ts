/**
 * Union type representing DataResidencyTaxonomy in the DOMSpec ecosystem.
 * Defines data residency regions for error context in @dndhub/error, ensuring compliance with regional data protection laws.
 * Supports premium enterprise features for data sovereignty (e.g., GDPR for EU) and storage in region-specific Supabase/PostgreSQL instances.
 *
 * - 'us': United States data residency.
 *   Classifications: US data protection laws (e.g., CCPA).
 *   Identifiers: lowercase: 'us', camelCase: 'usResidency', snake_case: 'us_residency', ALL_CAP: 'US', cache key: 'residency:us:errId'.
 *   Model Identifier Format: 'residency-us-{timestamp}'.
 *   Variations and Use Cases: Used for errors stored in US-based servers; complies with CCPA requirements.
 *   Example Usage: Errors logged in us-east-1 Supabase instance for DndCoLab US users.
 *
 * - 'eu': European Union data residency.
 *   Classifications: GDPR compliance.
 *   Identifiers: lowercase: 'eu', camelCase: 'euResidency', snake_case: 'eu_residency', ALL_CAP: 'EU', cache key: 'residency:eu:errId'.
 *   Model Identifier Format: 'residency-eu-{timestamp}'.
 *   Variations and Use Cases: Used for EU-based error storage; enforces strict data protection via @dndhub/security RLS.
 *   Example Usage: GDPR-compliant errors in eu-central-1 Supabase instance.
 *
 * - 'ap': Asia-Pacific data residency.
 *   Classifications: APAC data protection (e.g., Singapore PDPA).
 *   Identifiers: lowercase: 'ap', camelCase: 'apResidency', snake_case: 'ap_residency', ALL_CAP: 'AP', cache key: 'residency:ap:errId'.
 *   Model Identifier Format: 'residency-ap-{timestamp}'.
 *   Variations and Use Cases: Used for APAC region errors; supports Singapore/Japan data laws.
 *   Example Usage: Errors logged in ap-southeast-1 Supabase instance for fluxr integrations.
 *
 * - 'au': Australia data residency.
 *   Classifications: Australian Privacy Act.
 *   Identifiers: lowercase: 'au', camelCase: 'auResidency', snake_case: 'au_residency', ALL_CAP: 'AU', cache key: 'residency:au:errId'.
 *   Model Identifier Format: 'residency-au-{timestamp}'.
 *   Variations and Use Cases: Used for Australia-specific error storage; complies with local privacy laws.
 *   Example Usage: Errors in au-sydney Supabase instance for DndHub deployments.
 *
 * - 'sa': South America data residency.
 *   Classifications: LGPD (Brazil General Data Protection Law).
 *   Identifiers: lowercase: 'sa', camelCase: 'saResidency', snake_case: 'sa_residency', ALL_CAP: 'SA', cache key: 'residency:sa:errId'.
 *   Model Identifier Format: 'residency-sa-{timestamp}'.
 *   Variations and Use Cases: Used for South America error storage; supports Brazil LGPD compliance.
 *   Example Usage: Errors in sa-east-1 Supabase instance for regional fluxr services.
 *
 * - 'af': Africa data residency.
 *   Classifications: POPIA (South Africa Protection of Personal Information Act).
 *   Identifiers: lowercase: 'af', camelCase: 'afResidency', snake_case: 'af_residency', ALL_CAP: 'AF', cache key: 'residency:af:errId'.
 *   Model Identifier Format: 'residency-af-{timestamp}'.
 *   Variations and Use Cases: Used for Africa-based error storage; complies with POPIA.
 *   Example Usage: Errors in af-south-1 Supabase instance for DndHub community apps.
 *
 * - 'global': Global (non-region-specific) data residency.
 *   Classifications: Non-specific, fallback for unrestricted data.
 *   Identifiers: lowercase: 'global', camelCase: 'globalResidency', snake_case: 'global_residency', ALL_CAP: 'GLOBAL', cache key: 'residency:global:errId'.
 *   Model Identifier Format: 'residency-global-{timestamp}'.
 *   Variations and Use Cases: Used for errors not tied to specific regions; suitable for non-sensitive data or global analytics.
 *   Example Usage: Global error aggregation in Vercel KV for analytics dashboards.
 */
export type DataResidencyTaxonomy = CoreDataResidency | CustomDataResidency;
export type CoreDataResidency = 'us' | 'eu' | 'ap' | 'au' | 'sa' | 'af' | 'global';
export type CustomDataResidency = string & { __dataResidency?: 'CustomDataResidency' };