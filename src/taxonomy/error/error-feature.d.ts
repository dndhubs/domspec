/**
 * Union type representing ErrorFeatureTaxonomy in the DOMSpec ecosystem.
 * Defines standardized feature names for modular tracking in @dndhub/error and DndHub ecosystem.
 * Enables categorization of errors by feature for better analytics and debugging.
 *
 * - 'authentication': Authentication-related features.
 *   Classifications: OAuth/JWT standards.
 *   Identifiers: lowercase: 'authentication', camelCase: 'authFeature', snake_case: 'auth_feature', ALL_CAP: 'AUTHENTICATION', cache key: 'feature:authentication:errId'.
 *   Model Identifier Format: 'feature-auth-{timestamp}'.
 *   Variations and Use Cases: Used for login/token handling; errors like invalid credentials.
 *   Example Usage: Auth errors in DomsError.ts for DndCoLab sessions.
 *
 * - 'routing': Routing and navigation features.
 *   Classifications: Next.js routing.
 *   Identifiers: lowercase: 'routing', camelCase: 'routingFeature', snake_case: 'routing_feature', ALL_CAP: 'ROUTING', cache key: 'feature:routing:errId'.
 *   Model Identifier Format: 'feature-routing-{timestamp}'.
 *   Variations and Use Cases: Used for dynamic routes; errors in path resolution.
 *   Example Usage: Routing errors in DomsRouteError.tsx.
 *
 * - 'storage': Data storage and persistence features.
 *   Classifications: Supabase/Vercel KV standards.
 *   Identifiers: lowercase: 'storage', camelCase: 'storageFeature', snake_case: 'storage_feature', ALL_CAP: 'STORAGE', cache key: 'feature:storage:errId'.
 *   Model Identifier Format: 'feature-storage-{timestamp}'.
 *   Variations and Use Cases: Used for database/caching; errors in queries or sessions.
 *   Example Usage: Storage errors in fluxr integrations.
 *
 * - 'ui': User interface rendering features.
 *   Classifications: React/Tailwind standards.
 *   Identifiers: lowercase: 'ui', camelCase: 'uiFeature', snake_case: 'ui_feature', ALL_CAP: 'UI', cache key: 'feature:ui:errId'.
 *   Model Identifier Format: 'feature-ui-{timestamp}'.
 *   Variations and Use Cases: Used for component rendering; errors in hydration or state.
 *   Example Usage: UI errors in ErrorBoundary.tsx.
 *
 * - 'security': Security and compliance features.
 *   Classifications: OWASP/NIST standards.
 *   Identifiers: lowercase: 'security', camelCase: 'securityFeature', snake_case: 'security_feature', ALL_CAP: 'SECURITY', cache key: 'feature:security:errId'.
 *   Model Identifier Format: 'feature-security-{timestamp}'.
 *   Variations and Use Cases: Used for threat detection; errors in authz or encryption.
 *   Example Usage: Security errors via securityAnalyzer in DomsError.ts.
 *
 * - 'integration': Third-party integration features.
 *   Classifications: API/Webhook standards.
 *   Identifiers: lowercase: 'integration', camelCase: 'integrationFeature', snake_case: 'integration_feature', ALL_CAP: 'INTEGRATION', cache key: 'feature:integration:errId'.
 *   Model Identifier Format: 'feature-integration-{timestamp}'.
 *   Variations and Use Cases: Used for external services; errors in API calls.
 *   Example Usage: Integration errors in HealthOrb DHIS2 via fluxr.
 *
 * - 'performance': Performance optimization features.
 *   Classifications: Web Vitals standards.
 *   Identifiers: lowercase: 'performance', camelCase: 'performanceFeature', snake_case: 'performance_feature', ALL_CAP: 'PERFORMANCE', cache key: 'feature:performance:errId'.
 *   Model Identifier Format: 'feature-performance-{timestamp}'.
 *   Variations and Use Cases: Used for metrics/logging; errors in load times.
 *   Example Usage: Performance errors in DomsError.ts monitoring.
 *
 * - 'analytics': Analytics and tracking features.
 *   Classifications: Google Analytics standards.
 *   Identifiers: lowercase: 'analytics', camelCase: 'analyticsFeature', snake_case: 'analytics_feature', ALL_CAP: 'ANALYTICS', cache key: 'feature:analytics:errId'.
 *   Model Identifier Format: 'feature-analytics-{timestamp}'.
 *   Variations and Use Cases: Used for event tracking; errors in data collection.
 *   Example Usage: Analytics errors in DndCoLab tracking.
 */
export type ErrorFeatureTaxonomy = CoreErrorFeature | CustomErrorFeature;
export type CoreErrorFeature = 'authentication' | 'routing' | 'storage' | 'ui' | 'security' | 'integration' | 'performance' | 'analytics';
export type CustomErrorFeature = string & { __feature?: 'CustomErrorFeature' };