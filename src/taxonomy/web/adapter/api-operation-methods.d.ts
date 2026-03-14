/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/adapter/AdapterApiOperationMethodTaxonomy.ts
 * @see https://github.com/dndhubs/domspec/wiki/AdapterApiOperationMethod
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20AdapterApiOperationMethodTaxonomy
 * Union type representing AdapterApiOperationMethodTaxonomy in the DOMSpec ecosystem.
 * This taxonomy defines standardized operation methods for Fluxr Adapters in the Trakfox ecosystem,
 * covering core CRUD operations, general-purpose actions, and Patron Journey Map-aligned methods
 * for enhanced metric collection and reward application. It aligns with RESTful API standards,
 * GraphQL operation patterns, ISO 20022, and SCOR frameworks, supporting integrations with
 * Trakfox, HealthOrb DHIS2, and DnDHubs platforms. The taxonomy is extensible via
 * CustomAdapterApiOperationMethod for organization-specific operations.
 *
 * - 'create': Creates a new resource or entity.
 *   Classifications: Aligns with REST POST, GraphQL mutation, ISO 20022 resource creation.
 *   Identifiers: lowercase: 'create', camelCase: 'createOperation', snake_case: 'create_operation', ALL_CAP: 'CREATE', cache key: 'operation:create:resourceId'.
 *   Model Identifier Format: 'create-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Synonym: 'add'; used in Trakfox for creating user accounts or DnDHubs for adding marketplace listings.
 *   @example
 *   ```typescript
 *   POST /api/users
 *   // Body: { name: string, email: string }
 *   // Returns: { id: string, name: string, email: string }
 *   ```
 *   Example: Create a new user in Trakfox beta signup forms.
 *
 * - 'read': Retrieves a resource or entity by identifier.
 *   Classifications: Aligns with REST GET, GraphQL query, ISO 20022 data retrieval.
 *   Identifiers: lowercase: 'read', camelCase: 'readOperation', snake_case: 'read_operation', ALL_CAP: 'READ', cache key: 'operation:read:resourceId'.
 *   Model Identifier Format: 'read-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'get'; used in HealthOrb DHIS2 for fetching patient records or Trakfox for retrieving cart details.
 *   @example
 *   ```typescript
 *   GET /api/users/{id}
 *   // Returns: { id: string, name: string, email: string }
 *   ```
 *   Example: Fetch user details in Trakfox for profile display.
 *
 * - 'update': Modifies an existing resource or entity.
 *   Classifications: Aligns with REST PUT/PATCH, GraphQL mutation, SCOR update operations.
 *   Identifiers: lowercase: 'update', camelCase: 'updateOperation', snake_case: 'update_operation', ALL_CAP: 'UPDATE', cache key: 'operation:update:resourceId'.
 *   Model Identifier Format: 'update-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'modify'; used in DnDHubs for updating product listings or Trakfox for modifying order details.
 *   @example
 *   ```typescript
 *   PUT /api/users/{id}
 *   // Body: { name: string }
 *   // Returns: { id: string, name: string, email: string }
 *   ```
 *   Example: Update user profile in Trakfox.
 *
 * - 'delete': Removes a resource or entity.
 *   Classifications: Aligns with REST DELETE, GraphQL mutation, ISO 20022 resource deletion.
 *   Identifiers: lowercase: 'delete', camelCase: 'deleteOperation', snake_case: 'delete_operation', ALL_CAP: 'DELETE', cache key: 'operation:delete:resourceId'.
 *   Model Identifier Format: 'delete-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'remove'; used in Trakfox for deleting cart items or HealthOrb DHIS2 for archiving records.
 *   @example
 *   ```typescript
 *   DELETE /api/users/{id}
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Delete a user account in Trakfox.
 *
 * - 'authenticate': Authenticates a user or system for secure access.
 *   Classifications: Aligns with OAuth 2.0, OpenID Connect, REST POST operations.
 *   Identifiers: lowercase: 'authenticate', camelCase: 'authenticateOperation', snake_case: 'authenticate_operation', ALL_CAP: 'AUTHENTICATE', cache key: 'operation:authenticate:resourceId'.
 *   Model Identifier Format: 'authenticate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'login'; used in Trakfox for user authentication or HealthOrb DHIS2 for secure data access.
 *   @example
 *   ```typescript
 *   POST /api/authenticate
 *   // Body: { username: string, password: string }
 *   // Returns: { token: string }
 *   ```
 *   Example: Authenticate a user in Trakfox for session creation.
 *
 * - 'count': Counts resources or entities matching specified criteria.
 *   Classifications: Aligns with REST GET, GraphQL query, SCOR inventory operations.
 *   Identifiers: lowercase: 'count', camelCase: 'countOperation', snake_case: 'count_operation', ALL_CAP: 'COUNT', cache key: 'operation:count:resourceId'.
 *   Model Identifier Format: 'count-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'tally'; used in Trakfox for counting orders or DnDHubs for inventory tracking.
 *   @example
 *   ```typescript
 *   GET /api/products/count
 *   // Returns: { count: number }
 *   ```
 *   Example: Count active products in Trakfox marketplace.
 *
 * - 'aggregate': Aggregates data across resources or entities.
 *   Classifications: Aligns with REST GET, GraphQL query, ISO 20022 data aggregation.
 *   Identifiers: lowercase: 'aggregate', camelCase: 'aggregateOperation', snake_case: 'aggregate_operation', ALL_CAP: 'AGGREGATE', cache key: 'operation:aggregate:resourceId'.
 *   Model Identifier Format: 'aggregate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'summarize'; used in HealthOrb DHIS2 for aggregating patient data or Trakfox for sales analytics.
 *   @example
 *   ```typescript
 *   GET /api/orders/aggregate
 *   // Returns: { totalSales: number, averageOrder: number }
 *   ```
 *   Example: Aggregate order data in Trakfox for analytics dashboard.
 *
 * - 'calculate': Performs calculations on resources or entities.
 *   Classifications: Aligns with REST POST, GraphQL mutation, SCOR calculation operations.
 *   Identifiers: lowercase: 'calculate', camelCase: 'calculateOperation', snake_case: 'calculate_operation', ALL_CAP: 'CALCULATE', cache key: 'operation:calculate:resourceId'.
 *   Model Identifier Format: 'calculate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'compute'; used in Trakfox for pricing calculations or DnDHubs for reward point calculations.
 *   @example
 *   ```typescript
 *   POST /api/orders/calculate
 *   // Body: { items: Item[] }
 *   // Returns: { total: number }
 *   ```
 *   Example: Calculate order total in Trakfox checkout.
 *
 * - 'trackView': Tracks views or interactions with a resource.
 *   Classifications: Aligns with analytics tracking, REST POST, Patron Journey Map awareness stage.
 *   Identifiers: lowercase: 'trackview', camelCase: 'trackViewOperation', snake_case: 'track_view_operation', ALL_CAP: 'TRACK_VIEW', cache key: 'operation:trackview:resourceId'.
 *   Model Identifier Format: 'trackview-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'view'; used in Trakfox for tracking product page views or DnDHubs for marketplace analytics.
 *   @example
 *   ```typescript
 *   POST /api/products/{id}/trackView
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Track product page views in Trakfox for analytics.
 *
 * - 'engage': Engages users through interactions or notifications.
 *   Classifications: Aligns with REST POST, Patron Journey Map engagement stage.
 *   Identifiers: lowercase: 'engage', camelCase: 'engageOperation', snake_case: 'engage_operation', ALL_CAP: 'ENGAGE', cache key: 'operation:engage:resourceId'.
 *   Model Identifier Format: 'engage-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'interact'; used in Trakfox for sending notifications or HealthOrb DHIS2 for patient engagement.
 *   @example
 *   ```typescript
 *   POST /api/users/{id}/engage
 *   // Body: { message: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Send a promotional notification in Trakfox.
 *
 * - 'feedback': Collects user feedback or ratings.
 *   Classifications: Aligns with REST POST, Patron Journey Map feedback stage.
 *   Identifiers: lowercase: 'feedback', camelCase: 'feedbackOperation', snake_case: 'feedback_operation', ALL_CAP: 'FEEDBACK', cache key: 'operation:feedback:resourceId'.
 *   Model Identifier Format: 'feedback-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'review'; used in Trakfox for collecting product reviews or HealthOrb DHIS2 for patient feedback.
 *   @example
 *   ```typescript
 *   POST /api/products/{id}/feedback
 *   // Body: { rating: number, comment: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Submit product feedback in Trakfox.
 *
 * - 'churn': Tracks user churn or disengagement.
 *   Classifications: Aligns with REST POST, Patron Journey Map churn stage.
 *   Identifiers: lowercase: 'churn', camelCase: 'churnOperation', snake_case: 'churn_operation', ALL_CAP: 'CHURN', cache key: 'operation:churn:resourceId'.
 *   Model Identifier Format: 'churn-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'dropout'; used in Trakfox for tracking user retention or DnDHubs for marketplace user analysis.
 *   @example
 *   ```typescript
 *   POST /api/users/{id}/churn
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Record user churn in Trakfox for retention analytics.
 *
 * - 'aware': Tracks user awareness of a resource or campaign.
 *   Classifications: Aligns with REST POST, Patron Journey Map awareness stage.
 *   Identifiers: lowercase: 'aware', camelCase: 'awareOperation', snake_case: 'aware_operation', ALL_CAP: 'AWARE', cache key: 'operation:aware:resourceId'.
 *   Model Identifier Format: 'aware-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'impression'; used in Trakfox for campaign tracking or DnDHubs for marketplace visibility.
 *   @example
 *   ```typescript
 *   POST /api/campaigns/{id}/aware
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Track campaign impressions in Trakfox marketing.
 *
 * - 'discover': Tracks user discovery of resources or features.
 *   Classifications: Aligns with REST POST, Patron Journey Map discovery stage.
 *   Identifiers: lowercase: 'discover', camelCase: 'discoverOperation', snake_case: 'discover_operation', ALL_CAP: 'DISCOVER', cache key: 'operation:discover:resourceId'.
 *   Model Identifier Format: 'discover-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'explore'; used in Trakfox for feature discovery or DnDHubs for product exploration.
 *   @example
 *   ```typescript
 *   POST /api/products/{id}/discover
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Track product discovery in Trakfox marketplace.
 *
 * - 'engageLead': Engages potential leads or prospects.
 *   Classifications: Aligns with REST POST, Patron Journey Map lead engagement stage.
 *   Identifiers: lowercase: 'engagelead', camelCase: 'engageLeadOperation', snake_case: 'engage_lead_operation', ALL_CAP: 'ENGAGE_LEAD', cache key: 'operation:engagelead:resourceId'.
 *   Model Identifier Format: 'engagelead-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'nurture'; used in Trakfox for lead nurturing or DnDHubs for marketplace prospect engagement.
 *   @example
 *   ```typescript
 *   POST /api/leads/{id}/engage
 *   // Body: { message: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Engage a lead in Trakfox CRM.
 *
 * - 'commit': Tracks user commitment actions (e.g., sign-ups, subscriptions).
 *   Classifications: Aligns with REST POST, Patron Journey Map commitment stage.
 *   Identifiers: lowercase: 'commit', camelCase: 'commitOperation', snake_case: 'commit_operation', ALL_CAP: 'COMMIT', cache key: 'operation:commit:resourceId'.
 *   Model Identifier Format: 'commit-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'signup'; used in Trakfox for subscription commitments or HealthOrb DHIS2 for patient enrollment.
 *   @example
 *   ```typescript
 *   POST /api/subscriptions/{id}/commit
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Record subscription commitment in Trakfox.
 *
 * - 'transact': Processes transactions or purchases.
 *   Classifications: Aligns with REST POST, Patron Journey Map transaction stage, ISO 20022 financial transactions.
 *   Identifiers: lowercase: 'transact', camelCase: 'transactOperation', snake_case: 'transact_operation', ALL_CAP: 'TRANSACT', cache key: 'operation:transact:resourceId'.
 *   Model Identifier Format: 'transact-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'purchase'; used in Trakfox for processing orders or DnDHubs for marketplace transactions.
 *   @example
 *   ```typescript
 *   POST /api/orders/{id}/transact
 *   // Body: { payment: object }
 *   // Returns: { success: boolean, orderId: string }
 *   ```
 *   Example: Process a purchase in Trakfox checkout.
 *
 * - 'sustain': Tracks actions to sustain user engagement or loyalty.
 *   Classifications: Aligns with REST POST, Patron Journey Map sustain stage.
 *   Identifiers: lowercase: 'sustain', camelCase: 'sustainOperation', snake_case: 'sustain_operation', ALL_CAP: 'SUSTAIN', cache key: 'operation:sustain:resourceId'.
 *   Model Identifier Format: 'sustain-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'retain'; used in Trakfox for loyalty programs or HealthOrb DHIS2 for patient retention.
 *   @example
 *   ```typescript
 *   POST /api/users/{id}/sustain
 *   // Body: { reward: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Apply loyalty rewards in Trakfox.
 *
 * - 'promote': Tracks promotional actions or advocacy.
 *   Classifications: Aligns with REST POST, Patron Journey Map promotion stage.
 *   Identifiers: lowercase: 'promote', camelCase: 'promoteOperation', snake_case: 'promote_operation', ALL_CAP: 'PROMOTE', cache key: 'operation:promote:resourceId'.
 *   Model Identifier Format: 'promote-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'advocate'; used in Trakfox for referral programs or DnDHubs for user advocacy tracking.
 *   @example
 *   ```typescript
 *   POST /api/users/{id}/promote
 *   // Body: { referral: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Track referral promotions in Trakfox.
 *
 * - 'operate': Performs operational tasks on resources.
 *   Classifications: Aligns with REST POST, SCOR operational processes.
 *   Identifiers: lowercase: 'operate', camelCase: 'operateOperation', snake_case: 'operate_operation', ALL_CAP: 'OPERATE', cache key: 'operation:operate:resourceId'.
 *   Model Identifier Format: 'operate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'manage'; used in Trakfox for operational workflows or HealthOrb DHIS2 for system operations.
 *   @example
 *   ```typescript
 *   POST /api/systems/{id}/operate
 *   // Body: { action: string }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Execute operational tasks in Trakfox workflows.
 *
 * - 'process': Processes data or workflows.
 *   Classifications: Aligns with REST POST, SCOR process management.
 *   Identifiers: lowercase: 'process', camelCase: 'processOperation', snake_case: 'process_operation', ALL_CAP: 'PROCESS', cache key: 'operation:process:resourceId'.
 *   Model Identifier Format: 'process-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'execute'; used in Trakfox for workflow processing or DnDHubs for transaction processing.
 *   @example
 *   ```typescript
 *   POST /api/workflows/{id}/process
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Process a workflow in Trakfox.
 *
 * - 'sentiment': Analyzes sentiment or user feedback.
 *   Classifications: Aligns with REST POST, NLP-based analytics.
 *   Identifiers: lowercase: 'sentiment', camelCase: 'sentimentOperation', snake_case: 'sentiment_operation', ALL_CAP: 'SENTIMENT', cache key: 'operation:sentiment:resourceId'.
 *   Model Identifier Format: 'sentiment-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'analyze'; used in Trakfox for feedback sentiment analysis or HealthOrb DHIS2 for patient feedback analysis.
 *   @example
 *   ```typescript
 *   POST /api/feedback/{id}/sentiment
 *   // Body: { comment: string }
 *   // Returns: { sentiment: 'positive' | 'negative' | 'neutral' }
 *   ```
 *   Example: Analyze feedback sentiment in Trakfox.
 *
 * - 'mutable': Marks a resource as mutable for dynamic updates.
 *   Classifications: Aligns with REST PATCH, GraphQL mutation.
 *   Identifiers: lowercase: 'mutable', camelCase: 'mutableOperation', snake_case: 'mutable_operation', ALL_CAP: 'MUTABLE', cache key: 'operation:mutable:resourceId'.
 *   Model Identifier Format: 'mutable-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'dynamic'; used in Trakfox for dynamic resource updates or DnDHubs for real-time listing changes.
 *   @example
 *   ```typescript
 *   PATCH /api/resources/{id}/mutable
 *   // Body: { attributes: object }
 *   // Returns: { success: boolean }
 *   ```
 *   Example: Mark a resource as mutable in Trakfox for dynamic updates.
 *
 * - 'quotable': Generates or retrieves quotes for resources.
 *   Classifications: Aligns with REST POST, SCOR quoting operations.
 *   Identifiers: lowercase: 'quotable', camelCase: 'quotableOperation', snake_case: 'quotable_operation', ALL_CAP: 'QUOTABLE', cache key: 'operation:quotable:resourceId'.
 *   Model Identifier Format: 'quotable-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'quote'; used in Trakfox for generating order quotes or DnDHubs for marketplace pricing.
 *   @example
 *   ```typescript
 *   POST /api/orders/{id}/quotable
 *   // Returns: { quote: number }
 *   ```
 *   Example: Generate an order quote in Trakfox.
 *
 * - 'subscribable': Manages subscriptions to resources or events.
 *   Classifications: Aligns with REST POST, GraphQL subscription, ISO 20022 event-driven messaging.
 *   Identifiers: lowercase: 'subscribable', camelCase: 'subscribableOperation', snake_case: 'subscribable_operation', ALL_CAP: 'SUBSCRIBABLE', cache key: 'operation:subscribable:resourceId'.
 *   Model Identifier Format: 'subscribable-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonym: 'subscribe'; used in Trakfox for real-time updates or HealthOrb DHIS2 for event subscriptions.
 *   @example
 *   ```typescript
 *   POST /api/events/{id}/subscribable
 *   // Returns: { success: boolean, subscriptionId: string }
 *   ```
 *   Example: Subscribe to real-time order updates in Trakfox.
 */
export type AdapterApiOperationMethodTaxonomy = 'create' | 'read' | 'update' | 'delete' | 'authenticate' | 'count' | 'aggregate' | 'calculate' | 'trackView' | 'engage' | 'feedback' | 'churn' | 'aware' | 'discover' | 'engageLead' | 'commit' | 'transact' | 'sustain' | 'promote' | 'operate' | 'process' | 'sentiment' | 'mutable' | 'quotable' | 'subscribable';