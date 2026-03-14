/**
 * @see https://github.com/dndhubs/taxonomy/blob/main/action-category-taxonomy.ts
 * @see https://github.com/dndhubs/taxonomy/wiki/ActionCategoryTaxonomy
 * @see https://github.com/dndhubs/taxonomy/discussions/new?category=general&title=Feedback%20on%20ActionCategoryTaxonomy
 * Union type representing ActionCategoryTaxonomy in the DOMSpec ecosystem.
 * Categorizes actions for event tracking, API operations, and user journeys in the DNDHUBS ecosystem, including Trakfox and HealthOrb DHIS2 integrations.
 * Supports extension via CustomActionCategory for custom action types.
 *
 * - 'crud': Basic create/read/update/delete operations.
 * Classifications: Aligns with RESTful standards, CRUD model.
 * Identifiers: lowercase: 'crud', camelCase: 'crudAction', snake_case: 'crud_action', ALL_CAP: 'CRUD', cache key: 'group:crud:resourceId'.
 * Model Identifier Format: 'crud-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'data ops'; used in API endpoints for resource management.
 * @example
 * POST /api/resources for create operation in Trakfox marketplace.
 *
 * - 'auth': Authentication and access control.
 * Classifications: Aligns with OAuth/JWT standards.
 * Identifiers: lowercase: 'auth', camelCase: 'authAction', snake_case: 'auth_action', ALL_CAP: 'AUTH', cache key: 'group:auth:resourceId'.
 * Model Identifier Format: 'auth-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'login'; used in session management and security checks.
 * @example
 * POST /api/login for user authentication in DNDHUBS ecosystem.
 *
 * - 'compute': Data processing and calculations.
 * Classifications: Aligns with algorithmic standards.
 * Identifiers: lowercase: 'compute', camelCase: 'computeAction', snake_case: 'compute_action', ALL_CAP: 'COMPUTE', cache key: 'group:compute:resourceId'.
 * Model Identifier Format: 'compute-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'process'; used in backend computations or AI-powered tooling.
 * @example
 * POST /api/calculate for data processing in HealthOrb DHIS2 integrations.
 *
 * - 'analytics': Tracking and analysis.
 * Classifications: Aligns with Google Analytics/Web Vitals standards.
 * Identifiers: lowercase: 'analytics', camelCase: 'analyticsAction', snake_case: 'analytics_action', ALL_CAP: 'ANALYTICS', cache key: 'group:analytics:resourceId'.
 * Model Identifier Format: 'analytics-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'track'; used for user behavior analysis and metrics.
 * @example
 * GET /api/metrics for analytics retrieval in Trakfox dashboard.
 *
 * - 'engage': User interaction and engagement.
 * Classifications: Aligns with UX/UI engagement models.
 * Identifiers: lowercase: 'engage', camelCase: 'engageAction', snake_case: 'engage_action', ALL_CAP: 'ENGAGE', cache key: 'group:engage:resourceId'.
 * Model Identifier Format: 'engage-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'interact'; used in notifications or social features.
 * @example
 * POST /api/notifications for user engagement in DNDHUBS marketplace.
 *
 * - 'feedback': User input and responses.
 * Classifications: Aligns with survey/feedback standards.
 * Identifiers: lowercase: 'feedback', camelCase: 'feedbackAction', snake_case: 'feedback_action', ALL_CAP: 'FEEDBACK', cache key: 'group:feedback:resourceId'.
 * Model Identifier Format: 'feedback-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'respond'; used in forms or reviews.
 * @example
 * POST /api/feedback for user responses in Trakfox beta signup forms.
 *
 * - 'churn': User disengagement actions.
 * Classifications: Aligns with churn analysis models.
 * Identifiers: lowercase: 'churn', camelCase: 'churnAction', snake_case: 'churn_action', ALL_CAP: 'CHURN', cache key: 'group:churn:resourceId'.
 * Model Identifier Format: 'churn-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'leave'; used in subscription cancellations.
 * @example
 * DELETE /api/subscription for user churn in DNDHUBS services.
 *
 * - 'suspect': Initial exposure/impressions.
 * Classifications: Aligns with marketing funnel stages.
 * Identifiers: lowercase: 'suspect', camelCase: 'suspectAction', snake_case: 'suspect_action', ALL_CAP: 'SUSPECT', cache key: 'group:suspect:resourceId'.
 * Model Identifier Format: 'suspect-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'impress'; used in ad views or initial visits.
 * @example
 * GET /api/ads for initial impressions in Trakfox marketplace.
 *
 * - 'explore': Discovery and browsing.
 * Classifications: Aligns with UX exploration models.
 * Identifiers: lowercase: 'explore', camelCase: 'exploreAction', snake_case: 'explore_action', ALL_CAP: 'EXPLORE', cache key: 'group:explore:resourceId'.
 * Model Identifier Format: 'explore-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'browse'; used in search or navigation.
 * @example
 * GET /api/search for exploration in DNDHUBS marketplace.
 *
 * - 'lead': Lead generation.
 * Classifications: Aligns with CRM lead models.
 * Identifiers: lowercase: 'lead', camelCase: 'leadAction', snake_case: 'lead_action', ALL_CAP: 'LEAD', cache key: 'group:lead:resourceId'.
 * Model Identifier Format: 'lead-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'generate'; used in form submissions or signups.
 * @example
 * POST /api/leads for lead generation in Trakfox beta.
 *
 * - 'prospect': Qualification and pre-purchase.
 * Classifications: Aligns with sales funnel stages.
 * Identifiers: lowercase: 'prospect', camelCase: 'prospectAction', snake_case: 'prospect_action', ALL_CAP: 'PROSPECT', cache key: 'group:prospect:resourceId'.
 * Model Identifier Format: 'prospect-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'qualify'; used in demo requests or trials.
 * @example
 * POST /api/trials for prospect qualification in DNDHUBS.
 *
 * - 'customer': Purchase and usage.
 * Classifications: Aligns with customer lifecycle.
 * Identifiers: lowercase: 'customer', camelCase: 'customerAction', snake_case: 'customer_action', ALL_CAP: 'CUSTOMER', cache key: 'group:customer:resourceId'.
 * Model Identifier Format: 'customer-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'buy'; used in transactions or subscriptions.
 * @example
 * POST /api/purchase for customer conversions in marketplace.
 *
 * - 'supporter': Post-purchase support.
 * Classifications: Aligns with customer service models.
 * Identifiers: lowercase: 'supporter', camelCase: 'supporterAction', snake_case: 'supporter_action', ALL_CAP: 'SUPPORTER', cache key: 'group:supporter:resourceId'.
 * Model Identifier Format: 'supporter-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'help'; used in tickets or chats.
 * @example
 * POST /api/support for post-purchase support in Trakfox.
 *
 * - 'advocate': Promotion and advocacy.
 * Classifications: Aligns with NPS/advocacy models.
 * Identifiers: lowercase: 'advocate', camelCase: 'advocateAction', snake_case: 'advocate_action', ALL_CAP: 'ADVOCATE', cache key: 'group:advocate:resourceId'.
 * Model Identifier Format: 'advocate-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'promote'; used in referrals or reviews.
 * @example
 * POST /api/referrals for advocacy in DNDHUBS ecosystem.
 *
 * - 'operation': Backend/operational tasks.
 * Classifications: Aligns with DevOps standards.
 * Identifiers: lowercase: 'operation', camelCase: 'operationAction', snake_case: 'operation_action', ALL_CAP: 'OPERATION', cache key: 'group:operation:resourceId'.
 * Model Identifier Format: 'operation-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'admin'; used in maintenance or backups.
 * @example
 * POST /api/backup for operational tasks in HealthOrb.
 *
 * - 'sentiment': Emotional/expressive actions.
 * Classifications: Aligns with sentiment analysis models.
 * Identifiers: lowercase: 'sentiment', camelCase: 'sentimentAction', snake_case: 'sentiment_action', ALL_CAP: 'SENTIMENT', cache key: 'group:sentiment:resourceId'.
 * Model Identifier Format: 'sentiment-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'feel'; used in likes/ratings.
 * @example
 * POST /api/rate for sentiment expression in Trakfox.
 *
 * - 'workflow': Process control.
 * Classifications: Aligns with BPMN standards.
 * Identifiers: lowercase: 'workflow', camelCase: 'workflowAction', snake_case: 'workflow_action', ALL_CAP: 'WORKFLOW', cache key: 'group:workflow:resourceId'.
 * Model Identifier Format: 'workflow-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'flow'; used in approvals or pipelines.
 * @example
 * POST /api/approve for workflow control in DNDHUBS.
 *
 * - 'mutable': Data modification.
 * Classifications: Aligns with ACID transaction models.
 * Identifiers: lowercase: 'mutable', camelCase: 'mutableAction', snake_case: 'mutable_action', ALL_CAP: 'MUTABLE', cache key: 'group:mutable:resourceId'.
 * Model Identifier Format: 'mutable-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'change'; used in updates/deletes.
 * @example
 * PUT /api/update for mutable operations in marketplace.
 *
 * - 'quotable': Listing/exporting.
 * Classifications: Aligns with reporting standards.
 * Identifiers: lowercase: 'quotable', camelCase: 'quotableAction', snake_case: 'quotable_action', ALL_CAP: 'QUOTABLE', cache key: 'group:quotable:resourceId'.
 * Model Identifier Format: 'quotable-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'export'; used in reports or quotes.
 * @example
 * GET /api/export for quotable data in Trakfox.
 *
 * - 'subscribable': Observable/streaming actions.
 * Classifications: Aligns with RxJS/observables standards.
 * Identifiers: lowercase: 'subscribable', camelCase: 'subscribableAction', snake_case: 'subscribable_action', ALL_CAP: 'SUBSCRIBABLE', cache key: 'group:subscribable:resourceId'.
 * Model Identifier Format: 'subscribable-{resourceType}-{timestamp}' (kebab-case for consistent storage in databases like PostgreSQL).
 * Variations and Use Cases: Synonyms like 'stream'; used in real-time updates.
 * @example
 * WS /api/subscribe for subscribable events in HealthOrb DHIS2.
 */
export type ActionCategoryTaxonomy = CoreActionCategory | CustomActionCategory;
export type CoreActionCategory = 'crud' | 'auth' | 'compute' | 'analytics' | 'engage' | 'feedback' | 'churn' | 'suspect' | 'explore' | 'lead' | 'prospect' | 'customer' | 'supporter' | 'advocate' | 'operation' | 'sentiment' | 'workflow' | 'mutable' | 'quotable' | 'subscribable';
export type CustomActionCategory = string & { __actionCategory?: 'CustomActionCategory' };