/**
 * Union type representing CRUD (Create, Read, Update, Delete) action verbs, foundational for data operations in the DOMSpec ecosystem.
 * These verbs align with RESTful principles and are used in workflows, API integrations (e.g., HealthOrb DHIS2 adapters by August 5, 2025), and resource manipulations across Trakfox, DataOrb, and DnDHubs.
 * Each variant includes details for consistency in storage, caching, and validation utilities (e.g., regex-based checks in @domspecs/core).
 *
 * - 'create': Generates a new resource instance (e.g., adding a new user or order).
 *   Classifications: RESTful (POST method); aligns with ISO 20022 for financial creations, HL7 for healthcare records.
 *   Identifiers: lowercase: 'create', camelCase: 'createAction', snake_case: 'create_action', ALL_CAP: 'CREATE', cache key: 'crud:create:resourceId'.
 *   Model Identifier Format: 'create-{resourceType}-{timestamp}' (kebab-case for consistent logging in databases like PostgreSQL or event streams in Kafka).
 *   Variations and Use Cases: Synonyms: 'add', 'new'; used in DnDHubs marketplace for creating orders (beta Q4 2025), GEOCoLab for new geospatial entries ($99 tier), or Trakfox for user registrations; validate via utility like `isCreateVerb(verb)` for permission checks.
 *   Example Usage: POST /api/users to create a user in Trakfox beta signup forms [](https://trakfox.com); POST /api/organisationUnits in HealthOrb for new facility records.
 *
 * - 'read': Retrieves or views an existing resource without modification (e.g., fetching dashboard data).
 *   Classifications: RESTful (GET method); compliant with GDPR read-only access, SCOR model for supply chain queries.
 *   Identifiers: lowercase: 'read', camelCase: 'readAction', snake_case: 'read_action', ALL_CAP: 'READ', cache key: 'crud:read:resourceId'.
 *   Model Identifier Format: 'read-{resourceType}-{queryParams}' (kebab-case for audit logs in storage systems like Elasticsearch).
 *   Variations and Use Cases: Synonyms: 'get', 'fetch'; applied in HealthOrb for reading patient records via DHIS2 (/api/organisationUnits), Trakfox analytics tracking, or DataOrb dashboards; utility validation for read-only sessions to prevent escalation.
 *   Example Usage: GET /api/dashboards in DataOrb [](https://dataorb.co) to fetch analytics; GET /api/organisationUnits in HealthOrb for facility data.
 *
 * - 'update': Modifies an existing resource (e.g., editing user preferences or climate data).
 *   Classifications: RESTful (PUT/PATCH methods); follows IEEE 1471 for architectural updates, FHIR for healthcare modifications.
 *   Identifiers: lowercase: 'update', camelCase: 'updateAction', snake_case: 'update_action', ALL_CAP: 'UPDATE', cache key: 'crud:update:resourceId'.
 *   Model Identifier Format: 'update-{resourceType}-{version}' (kebab-case for versioned storage in Git-like repos or databases with optimistic locking).
 *   Variations and Use Cases: Synonyms: 'edit', 'patch'; used in GEOCoLab for updating climate data ($2,497 tier workflows), Trakfox loyalty rewards, or DnDHubs user profiles; validate with utilities for conflict resolution in concurrent environments.
 *   Example Usage: PATCH /api/profiles in DnDHubs to update user settings [](https://marketplace.dndhubs.com); PUT /api/climate in GEOCoLab for updating environmental metrics.
 *
 * - 'delete': Removes a resource instance (e.g., archiving feedback or canceling subscriptions).
 *   Classifications: RESTful (DELETE method); adheres to PCI DSS for secure deletions, ISO 27001 for data lifecycle management.
 *   Identifiers: lowercase: 'delete', camelCase: 'deleteAction', snake_case: 'delete_action', ALL_CAP: 'DELETE', cache key: 'crud:delete:resourceId'.
 *   Model Identifier Format: 'delete-{resourceType}-{archiveFlag}' (kebab-case for soft-delete patterns in relational databases like MySQL).
 *   Variations and Use Cases: Synonyms: 'remove', 'archive'; implemented in DnDHubs for canceling subscriptions (5-10% fees), HealthOrb for deactivating records, or Trakfox for removing feedback; utility functions for irreversible delete confirmations and audit trails.
 *   Example Usage: DELETE /api/subscriptions in DnDHubs to cancel a user subscription; DELETE /api/feedback in Trakfox to archive a comment.
 */
export type CRUDActionVerb = 'create' | 'read' | 'update' | 'delete';

export type AuthActionVerb =
  | 'login'
  | 'logout'
  | 'signup'
  | 'thumbprint'
  | 'resetPassword'
  | 'forgotPassword'
  | 'verifyPassword'
  | 'unlockSession'
  | 'enableMFA'
  | 'verifyMFA'
  | 'loginSSO'
  | 'verifyIdentity'
  | 'delegate'
  | 'revokeAccess';

export type ComputeActionVerb =
  | 'count'
  | 'aggregate'
  | 'calculate'
  | 'transform';

export type AnalyticsActionVerb =
  | 'track';

export type EngageActionVerb =
  | 'view'
  | 'like'
  | 'clap'
  | 'share'
  | 'quote'
  | 'repost'
  | 'vote'
  | 'attend'
  | 'boost'
  | 'collaborate'
  | 'chat'
  | 'enroll'
  | 'react';

export type FeedbackActionVerb =
  | 'rate'
  | 'review'
  | 'comment'
  | 'reply'
  | 'upvote'
  | 'downvote'
  | 'survey'
  | 'poll'
  | 'flag'
  | 'annotate'
  | 'message'
  | 'endorse'
  | 'acknowledge'
  | 'skipFeedback';

export type ChurnActionVerb =
  | 'block'
  | 'unsubscribe'
  | 'blacklist'
  | 'unfollow'
  | 'deactivate'
  | 'complain'
  | 'cancel'
  | 'switch'
  | 'ignore'
  | 'mark';

export type SuspectActionVerb =
  | 'hover'
  | 'visit'
  | 'viewAd'
  | 'impression'
  | 'socialView'
  | 'searchDisplay'
  | 'mentionExposure';

export type ExploreActionVerb =
  | 'click'
  | 'save'
  | 'follow'
  | 'whitelist'
  | 'wishlist'
  | 'pin'
  | 'compare'
  | 'check'
  | 'addToCollection'
  | 'search'
  | 'bookmark'
  | 'expressInterest'
  | 'browse'
  | 'filter'
  | 'sort'
  | 'preview'
  | 'scroll'
  | 'watch'
  | 'dismiss'
  | 'inspect'
  | 'focus'
  | 'unbookmark'
  | 'unpin'
  | 'playMedia';

export type LeadActionVerb =
  | 'registerEvent'
  | 'book'
  | 'schedule'
  | 'apply'
  | 'download'
  | 'subscribe'
  | 'configure'
  | 'demo'
  | 'trial'
  | 'contact'
  | 'qualify'
  | 'requestQuote'
  | 'requestDemo'
  | 'callBack';

export type ProspectActionVerb =
  | 'confirm'
  | 'verify'
  | 'order'
  | 'negotiate'
  | 'test'
  | 'addToCart'
  | 'reviewCart'
  | 'applyCoupon';

export type CustomerActionVerb =
  | 'buy'
  | 'pay'
  | 'checkin'
  | 'rent'
  | 'lease'
  | 'activate'
  | 'setup'
  | 'utilize'
  | 'use'
  | 'join'
  | 'shareUsage';

export type SupporterActionVerb =
  | 'return'
  | 'exchange'
  | 'downgrade'
  | 'openTicket'
  | 'chatSupport'
  | 'emailSupport'
  | 'callSupport'
  | 'selfResolve'
  | 'escalate'
  | 'provideSupportFeedback'
  | 'diagnose'
  | 'reportBug'
  | 'troubleshoot'
  | 'supportRequest'
  | 'renew'
  | 'upgrade'
  | 'reengage'
  | 'redeem'
  | 'cancelSubscription'
  | 'pauseSub'
  | 'closeTicket';

export type AdvocateActionVerb =
  | 'refer'
  | 'promote'
  | 'affiliate'
  | 'volunteer'
  | 'testimonial'
  | 'shareContent'
  | 'participateCommunity'
  | 'contribute'
  | 'mentor'
  | 'recruit'
  | 'shareStory'
  | 'addContent'
  | 'shareLink'
  | 'invite'
  | 'planEvent';

export type OperationActionVerb =
  | 'sell'
  | 'fulfill'
  | 'ship'
  | 'restock'
  | 'receiveReturn'
  | 'issueRefund'
  | 'trackInventory'
  | 'coordinateDelivery'
  | 'resolveDispute'
  | 'broadcast'
  | 'draft'
  | 'publish'
  | 'approve'
  | 'reject'
  | 'generate'
  | 'monitor'
  | 'alert'
  | 'impersonate'
  | 'archive'
  | 'restore'
  | 'audit'
  | 'deploy'
  | 'rollback'
  | 'syncData';

export type SentimentActionVerb =
  | 'expressFrustration'
  | 'expressSatisfaction'
  | 'provideSuggestion'
  | 'expressConfusion'
  | 'expressLoyalty'
  | 'disappoint';

export type WorkflowActionVerb =
  | 'start'
  | 'pause'
  | 'resume'
  | 'complete';

export type MutableActionVerb =
  | 'patch'
  | 'clear'
  | 'submit'
  | 'report'
  | 'upload'
  | 'invest'
  | 'send'
  | 'edit'
  | 'upsert'
  | 'import'
  | 'print'
  | 'copy'
  | 'drag'
  | 'drop'
  | 'paste'
  | 'resize';

export type QuotableActionVerb =
  | 'list'
  | 'export';

export type SubscribableActionVerb =
  | 'stream'
  | 'observe'
  | 'listen';

// Core ActionVerb as union of all grouped verbs
export type ActionVerb =
  | CRUDActionVerb
  | AuthActionVerb
  | ComputeActionVerb
  | AnalyticsActionVerb
  | EngageActionVerb
  | FeedbackActionVerb
  | ChurnActionVerb
  | SuspectActionVerb
  | ExploreActionVerb
  | LeadActionVerb
  | ProspectActionVerb
  | CustomerActionVerb
  | SupporterActionVerb
  | AdvocateActionVerb
  | OperationActionVerb
  | SentimentActionVerb
  | WorkflowActionVerb
  | MutableActionVerb
  | QuotableActionVerb
  | SubscribableActionVerb;