/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/action/action-verb-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ActionVerbTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ActionVerbTaxonomy
 * Union type representing ActionVerbTaxonomy in the DOMSpec ecosystem.
 * Defines a comprehensive set of action verbs for operations, workflows, user interactions, and system processes across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with RESTful principles for CRUD, authentication standards (e.g., OAuth, JWT), analytics frameworks (e.g., Google Analytics events), and industry-specific protocols (e.g., HL7 for healthcare, SCOR for supply chain). Used in API endpoints, event tracking, permission systems, and validation utilities for consistent behavior in configurations and integrations.
 *
 * - 'create': Generates a new resource instance (e.g., adding a new user or order).
 *   Classifications: RESTful (POST method); aligns with ISO 20022 for financial creations, HL7 for healthcare records.
 *   Identifiers: lowercase: 'create', camelCase: 'createAction', snake_case: 'create_action', ALL_CAP: 'CREATE', cache key: 'crud:create:resourceId'.
 *   Model Identifier Format: 'create-{resourceType}-{timestamp}' (kebab-case for consistent logging in databases like PostgreSQL or event streams in Kafka).
 *   Variations and Use Cases: Synonyms: 'add', 'new'; used in DnDHubs marketplace for creating orders (beta Q4 2025), GEOCoLab for new geospatial entries ($99 tier), or Trakfox for user registrations; validate via utility like `isCreateVerb(verb)` for permission checks.
 *   Example Usage: POST /api/users to create a user in Trakfox beta signup forms[](https://trakfox.com); POST /api/organisationUnits in HealthOrb for new facility records.
 *   @example
 *   POST /api/users { "name": "John Doe" };
 *
 * - 'read': Retrieves or views an existing resource without modification (e.g., fetching dashboard data).
 *   Classifications: RESTful (GET method); compliant with GDPR read-only access, SCOR model for supply chain queries.
 *   Identifiers: lowercase: 'read', camelCase: 'readAction', snake_case: 'read_action', ALL_CAP: 'READ', cache key: 'crud:read:resourceId'.
 *   Model Identifier Format: 'read-{resourceType}-{queryParams}' (kebab-case for audit logs in storage systems like Elasticsearch).
 *   Variations and Use Cases: Synonyms: 'get', 'fetch'; applied in HealthOrb for reading patient records via DHIS2 (/api/organisationUnits), Trakfox analytics tracking, or DataOrb dashboards; utility validation for read-only sessions to prevent escalation.
 *   Example Usage: GET /api/dashboards in DataOrb[](https://dataorb.co) to fetch analytics; GET /api/organisationUnits in HealthOrb for facility data.
 *   @example
 *   GET /api/dashboards?userId=123;
 *
 * - 'update': Modifies an existing resource (e.g., editing user preferences or climate data).
 *   Classifications: RESTful (PUT/PATCH methods); follows IEEE 1471 for architectural updates, FHIR for healthcare modifications.
 *   Identifiers: lowercase: 'update', camelCase: 'updateAction', snake_case: 'update_action', ALL_CAP: 'UPDATE', cache key: 'crud:update:resourceId'.
 *   Model Identifier Format: 'update-{resourceType}-{version}' (kebab-case for versioned storage in Git-like repos or databases with optimistic locking).
 *   Variations and Use Cases: Synonyms: 'edit', 'patch'; used in GEOCoLab for updating climate data ($2,497 tier workflows), Trakfox loyalty rewards, or DnDHubs user profiles; validate with utilities for conflict resolution in concurrent environments.
 *   Example Usage: PATCH /api/profiles in DnDHubs to update user settings[](https://marketplace.dndhubs.com); PUT /api/climate in GEOCoLab for updating environmental metrics.
 *   @example
 *   PATCH /api/profiles { "preferences": { "theme": "dark" } };
 *
 * - 'delete': Removes a resource instance (e.g., archiving feedback or canceling subscriptions).
 *   Classifications: RESTful (DELETE method); adheres to PCI DSS for secure deletions, ISO 27001 for data lifecycle management.
 *   Identifiers: lowercase: 'delete', camelCase: 'deleteAction', snake_case: 'delete_action', ALL_CAP: 'DELETE', cache key: 'crud:delete:resourceId'.
 *   Model Identifier Format: 'delete-{resourceType}-{archiveFlag}' (kebab-case for soft-delete patterns in relational databases like MySQL).
 *   Variations and Use Cases: Synonyms: 'remove', 'archive'; implemented in DnDHubs for canceling subscriptions (5-10% fees), HealthOrb for deactivating records, or Trakfox for removing feedback; utility functions for irreversible delete confirmations and audit trails.
 *   Example Usage: DELETE /api/subscriptions in DnDHubs to cancel a user subscription; DELETE /api/feedback in Trakfox to archive a comment.
 *   @example
 *   DELETE /api/subscriptions/456;
 *
 * - 'login': Authenticates a user to start a session.
 *   Classifications: OAuth 2.0 authentication flow; aligns with NIST SP 800-63 for digital identity.
 *   Identifiers: lowercase: 'login', camelCase: 'loginAction', snake_case: 'login_action', ALL_CAP: 'LOGIN', cache key: 'auth:login:userId'.
 *   Model Identifier Format: 'login-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'signin', 'authenticate'; used in Trakfox for user login, HealthOrb DHIS2 sessions.
 *   Example Usage: POST /api/login in Trakfox for session creation.
 *   @example
 *   POST /api/login { "username": "user", "password": "pass" };
 *
 * - 'logout': Ends a user session.
 *   Classifications: Session management; complies with OWASP session termination guidelines.
 *   Identifiers: lowercase: 'logout', camelCase: 'logoutAction', snake_case: 'logout_action', ALL_CAP: 'LOGOUT', cache key: 'auth:logout:userId'.
 *   Model Identifier Format: 'logout-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'signout'; used in DnDHubs for secure logout.
 *   Example Usage: POST /api/logout in DnDHubs.
 *   @example
 *   POST /api/logout;
 *
 * - 'signup': Registers a new user account.
 *   Classifications: User onboarding; aligns with ISO/IEC 27001 for identity creation.
 *   Identifiers: lowercase: 'signup', camelCase: 'signupAction', snake_case: 'signup_action', ALL_CAP: 'SIGNUP', cache key: 'auth:signup:userId'.
 *   Model Identifier Format: 'signup-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'register'; used in Trakfox beta signups.
 *   Example Usage: POST /api/signup in Trakfox.
 *   @example
 *   POST /api/signup { "email": "new@user.com" };
 *
 * - 'thumbprint': Records a biometric authentication.
 *   Classifications: Biometric standards (FIDO); NIST guidelines.
 *   Identifiers: lowercase: 'thumbprint', camelCase: 'thumbprintAction', snake_case: 'thumbprint_action', ALL_CAP: 'THUMBPRINT', cache key: 'auth:thumbprint:userId'.
 *   Model Identifier Format: 'thumbprint-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'biometricLogin'; used in secure HealthOrb access.
 *   Example Usage: POST /api/thumbprint in HealthOrb.
 *   @example
 *   POST /api/thumbprint { "biometricData": "data" };
 *
 * - 'resetPassword': Resets user password.
 *   Classifications: Password recovery; OWASP recommendations.
 *   Identifiers: lowercase: 'resetpassword', camelCase: 'resetPasswordAction', snake_case: 'reset_password', ALL_CAP: 'RESETPASSWORD', cache key: 'auth:resetpassword:userId'.
 *   Model Identifier Format: 'resetpassword-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'changePassword'; used in Trakfox account recovery.
 *   Example Usage: POST /api/resetPassword in Trakfox.
 *   @example
 *   POST /api/resetPassword { "email": "user@email.com" };
 *
 * - 'forgotPassword': Initiates password recovery process.
 *   Classifications: Recovery flow; aligns with GDPR data access.
 *   Identifiers: lowercase: 'forgotpassword', camelCase: 'forgotPasswordAction', snake_case: 'forgot_password', ALL_CAP: 'FORGOTPASSWORD', cache key: 'auth:forgotpassword:userId'.
 *   Model Identifier Format: 'forgotpassword-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'recoverPassword'; used in DnDHubs.
 *   Example Usage: POST /api/forgotPassword in DnDHubs.
 *   @example
 *   POST /api/forgotPassword { "email": "user@email.com" };
 *
 * - 'verifyPassword': Verifies user password.
 *   Classifications: Authentication validation; NIST SP 800-63B.
 *   Identifiers: lowercase: 'verifypassword', camelCase: 'verifyPasswordAction', snake_case: 'verify_password', ALL_CAP: 'VERIFYPASSWORD', cache key: 'auth:verifypassword:userId'.
 *   Model Identifier Format: 'verifypassword-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'checkPassword'; used in HealthOrb.
 *   Example Usage: POST /api/verifyPassword in HealthOrb.
 *   @example
 *   POST /api/verifyPassword { "password": "pass" };
 *
 * - 'unlockSession': Unlocks a locked session.
 *   Classifications: Session management; OWASP.
 *   Identifiers: lowercase: 'unlocksession', camelCase: 'unlockSessionAction', snake_case: 'unlock_session', ALL_CAP: 'UNLOCKSESSION', cache key: 'auth:unlocksession:userId'.
 *   Model Identifier Format: 'unlocksession-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'resumeSession'; used in Trakfox.
 *   Example Usage: POST /api/unlockSession in Trakfox.
 *   @example
 *   POST /api/unlockSession { "pin": "1234" };
 *
 * - 'enableMFA': Enables multi-factor authentication.
 *   Classifications: MFA standards (FIDO2); NIST guidelines.
 *   Identifiers: lowercase: 'enablemfa', camelCase: 'enableMFAAction', snake_case: 'enable_mfa', ALL_CAP: 'ENABLEMFA', cache key: 'auth:enablemfa:userId'.
 *   Model Identifier Format: 'enablemfa-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'setupMFA'; used in DnDHubs security.
 *   Example Usage: POST /api/enableMFA in DnDHubs.
 *   @example
 *   POST /api/enableMFA { "method": "sms" };
 *
 * - 'verifyMFA': Verifies MFA code.
 *   Classifications: MFA validation; OWASP.
 *   Identifiers: lowercase: 'verifymfa', camelCase: 'verifyMFAAction', snake_case: 'verify_mfa', ALL_CAP: 'VERIFYMFA', cache key: 'auth:verifymfa:userId'.
 *   Model Identifier Format: 'verifymfa-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'checkMFA'; used in HealthOrb.
 *   Example Usage: POST /api/verifyMFA in HealthOrb.
 *   @example
 *   POST /api/verifyMFA { "code": "123456" };
 *
 * - 'loginSSO': Logs in via single sign-on.
 *   Classifications: SSO protocols (SAML, OpenID); aligns with ISO 29115.
 *   Identifiers: lowercase: 'loginsso', camelCase: 'loginSSOAction', snake_case: 'login_sso', ALL_CAP: 'LOGINSSO', cache key: 'auth:loginsso:userId'.
 *   Model Identifier Format: 'loginsso-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'ssoLogin'; used in Trakfox enterprise.
 *   Example Usage: GET /api/loginSSO in Trakfox.
 *   @example
 *   GET /api/loginSSO?provider=google;
 *
 * - 'verifyIdentity': Verifies user identity.
 *   Classifications: Identity verification; KYC standards.
 *   Identifiers: lowercase: 'verifyidentity', camelCase: 'verifyIdentityAction', snake_case: 'verify_identity', ALL_CAP: 'VERIFYIDENTITY', cache key: 'auth:verifyidentity:userId'.
 *   Model Identifier Format: 'verifyidentity-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'idVerify'; used in DnDHubs KYC.
 *   Example Usage: POST /api/verifyIdentity in DnDHubs.
 *   @example
 *   POST /api/verifyIdentity { "document": "id_data" };
 *
 * - 'delegate': Delegates access to another user.
 *   Classifications: Delegation patterns; OAuth scopes.
 *   Identifiers: lowercase: 'delegate', camelCase: 'delegateAction', snake_case: 'delegate_action', ALL_CAP: 'DELEGATE', cache key: 'auth:delegate:userId'.
 *   Model Identifier Format: 'delegate-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'grantAccess'; used in HealthOrb team access.
 *   Example Usage: POST /api/delegate in HealthOrb.
 *   @example
 *   POST /api/delegate { "toUser": "delegatee" };
 *
 * - 'revokeAccess': Revokes delegated access.
 *   Classifications: Access control; ISO 27001 revocation.
 *   Identifiers: lowercase: 'revokeaccess', camelCase: 'revokeAccessAction', snake_case: 'revoke_access', ALL_CAP: 'REVOKEACCESS', cache key: 'auth:revokeaccess:userId'.
 *   Model Identifier Format: 'revokeaccess-{userId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'removeAccess'; used in Trakfox.
 *   Example Usage: POST /api/revokeAccess in Trakfox.
 *   @example
 *   POST /api/revokeAccess { "fromUser": "delegatee" };
 *
 * - 'count': Counts items or records.
 *   Classifications: Aggregation functions; SQL standards.
 *   Identifiers: lowercase: 'count', camelCase: 'countAction', snake_case: 'count_action', ALL_CAP: 'COUNT', cache key: 'compute:count:resourceId'.
 *   Model Identifier Format: 'count-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'tally'; used in DataOrb analytics.
 *   Example Usage: GET /api/count in DataOrb.
 *   @example
 *   GET /api/count?type=users;
 *
 * - 'aggregate': Aggregates data (e.g., sum, average).
 *   Classifications: Data aggregation; aligns with OLAP standards.
 *   Identifiers: lowercase: 'aggregate', camelCase: 'aggregateAction', snake_case: 'aggregate_action', ALL_CAP: 'AGGREGATE', cache key: 'compute:aggregate:resourceId'.
 *   Model Identifier Format: 'aggregate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'summarize'; used in HealthOrb reports.
 *   Example Usage: POST /api/aggregate in HealthOrb.
 *   @example
 *   POST /api/aggregate { "function": "sum" };
 *
 * - 'calculate': Performs calculations.
 *   Classifications: Computational operations; math libraries standards.
 *   Identifiers: lowercase: 'calculate', camelCase: 'calculateAction', snake_case: 'calculate_action', ALL_CAP: 'CALCULATE', cache key: 'compute:calculate:resourceId'.
 *   Model Identifier Format: 'calculate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'compute'; used in GEOCoLab metrics.
 *   Example Usage: POST /api/calculate in GEOCoLab.
 *   @example
 *   POST /api/calculate { "formula": "a + b" };
 *
 * - 'transform': Transforms data formats.
 *   Classifications: Data transformation; ETL standards.
 *   Identifiers: lowercase: 'transform', camelCase: 'transformAction', snake_case: 'transform_action', ALL_CAP: 'TRANSFORM', cache key: 'compute:transform:resourceId'.
 *   Model Identifier Format: 'transform-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'convert'; used in Trakfox data integration.
 *   Example Usage: POST /api/transform in Trakfox.
 *   @example
 *   POST /api/transform { "format": "json" };
 *
 * - 'track': Tracks user or system events.
 *   Classifications: Event tracking; Google Analytics API standards.
 *   Identifiers: lowercase: 'track', camelCase: 'trackAction', snake_case: 'track_action', ALL_CAP: 'TRACK', cache key: 'analytics:track:eventId'.
 *   Model Identifier Format: 'track-{eventType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'logEvent'; used in DataOrb for analytics.
 *   Example Usage: POST /api/track in DataOrb.
 *   @example
 *   POST /api/track { "event": "pageView" };
 *
 * - 'view': Views content or resource.
 *   Classifications: User interaction; aligns with WCAG accessibility.
 *   Identifiers: lowercase: 'view', camelCase: 'viewAction', snake_case: 'view_action', ALL_CAP: 'VIEW', cache key: 'engage:view:resourceId'.
 *   Model Identifier Format: 'view-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'open'; used in Trakfox content viewing.
 *   Example Usage: GET /api/view in Trakfox.
 *   @example
 *   GET /api/view?resource=article;
 *
 * - 'like': Likes a post or item.
 *   Classifications: Social engagement; Facebook Graph API like.
 *   Identifiers: lowercase: 'like', camelCase: 'likeAction', snake_case: 'like_action', ALL_CAP: 'LIKE', cache key: 'engage:like:resourceId'.
 *   Model Identifier Format: 'like-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'favorite'; used in DnDHubs social features.
 *   Example Usage: POST /api/like in DnDHubs.
 *   @example
 *   POST /api/like { "postId": "123" };
 *
 * - 'clap': Claps for content (e.g., Medium style).
 *   Classifications: Engagement metric; custom social standards.
 *   Identifiers: lowercase: 'clap', camelCase: 'clapAction', snake_case: 'clap_action', ALL_CAP: 'CLAP', cache key: 'engage:clap:resourceId'.
 *   Model Identifier Format: 'clap-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'applaud'; used in Trakfox feedback.
 *   Example Usage: POST /api/clap in Trakfox.
 *   @example
 *   POST /api/clap { "count": 5 };
 *
 * - 'share': Shares content.
 *   Classifications: Social sharing; Open Graph protocol.
 *   Identifiers: lowercase: 'share', camelCase: 'shareAction', snake_case: 'share_action', ALL_CAP: 'SHARE', cache key: 'engage:share:resourceId'.
 *   Model Identifier Format: 'share-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'forward'; used in DnDHubs marketplace.
 *   Example Usage: POST /api/share in DnDHubs.
 *   @example
 *   POST /api/share { "url": "example.com" };
 *
 * - 'quote': Quotes a post.
 *   Classifications: Citation actions; Twitter quote tweet.
 *   Identifiers: lowercase: 'quote', camelCase: 'quoteAction', snake_case: 'quote_action', ALL_CAP: 'QUOTE', cache key: 'engage:quote:resourceId'.
 *   Model Identifier Format: 'quote-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'cite'; used in social features.
 *   Example Usage: POST /api/quote in Trakfox.
 *   @example
 *   POST /api/quote { "originalId": "123" };
 *
 * - 'repost': Reposts content.
 *   Classifications: Reposting; aligns with social media APIs.
 *   Identifiers: lowercase: 'repost', camelCase: 'repostAction', snake_case: 'repost_action', ALL_CAP: 'REPOST', cache key: 'engage:repost:resourceId'.
 *   Model Identifier Format: 'repost-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'retweet'; used in DnDHubs.
 *   Example Usage: POST /api/repost in DnDHubs.
 *   @example
 *   POST /api/repost { "postId": "123" };
 *
 * - 'vote': Votes on a poll or item.
 *   Classifications: Voting systems; aligns with election standards.
 *   Identifiers: lowercase: 'vote', camelCase: 'voteAction', snake_case: 'vote_action', ALL_CAP: 'VOTE', cache key: 'engage:vote:resourceId'.
 *   Model Identifier Format: 'vote-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'pollVote'; used in Trakfox polls.
 *   Example Usage: POST /api/vote in Trakfox.
 *   @example
 *   POST /api/vote { "option": "yes" };
 *
 * - 'attend': Attends an event.
 *   Classifications: Event participation; iCalendar standards.
 *   Identifiers: lowercase: 'attend', camelCase: 'attendAction', snake_case: 'attend_action', ALL_CAP: 'ATTEND', cache key: 'engage:attend:eventId'.
 *   Model Identifier Format: 'attend-{eventType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rsvp'; used in DnDHubs events.
 *   Example Usage: POST /api/attend in DnDHubs.
 *   @example
 *   POST /api/attend { "eventId": "123" };
 *
 * - 'boost': Boosts visibility of content.
 *   Classifications: Promotion actions; advertising standards.
 *   Identifiers: lowercase: 'boost', camelCase: 'boostAction', snake_case: 'boost_action', ALL_CAP: 'BOOST', cache key: 'engage:boost:resourceId'.
 *   Model Identifier Format: 'boost-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'promote'; used in Trakfox marketing.
 *   Example Usage: POST /api/boost in Trakfox.
 *   @example
 *   POST /api/boost { "postId": "123" };
 *
 * - 'collaborate': Collaborates on a project.
 *   Classifications: Collaboration tools; aligns with Git protocols.
 *   Identifiers: lowercase: 'collaborate', camelCase: 'collaborateAction', snake_case: 'collaborate_action', ALL_CAP: 'COLLABORATE', cache key: 'engage:collaborate:projectId'.
 *   Model Identifier Format: 'collaborate-{projectType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'coedit'; used in GEOCoLab.
 *   Example Usage: POST /api/collaborate in GEOCoLab.
 *   @example
 *   POST /api/collaborate { "projectId": "123" };
 *
 * - 'chat': Initiates a chat session.
 *   Classifications: Messaging; XMPP standards.
 *   Identifiers: lowercase: 'chat', camelCase: 'chatAction', snake_case: 'chat_action', ALL_CAP: 'CHAT', cache key: 'engage:chat:sessionId'.
 *   Model Identifier Format: 'chat-{sessionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'message'; used in Trakfox support.
 *   Example Usage: POST /api/chat in Trakfox.
 *   @example
 *   POST /api/chat { "message": "hello" };
 *
 * - 'enroll': Enrolls in a course or program.
 *   Classifications: Enrollment; LMS standards like Moodle.
 *   Identifiers: lowercase: 'enroll', camelCase: 'enrollAction', snake_case: 'enroll_action', ALL_CAP: 'ENROLL', cache key: 'engage:enroll:courseId'.
 *   Model Identifier Format: 'enroll-{courseType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'joinCourse'; used in education platforms.
 *   Example Usage: POST /api/enroll in DataOrb.
 *   @example
 *   POST /api/enroll { "courseId": "123" };
 *
 * - 'react': Reacts to content with emoji.
 *   Classifications: Reaction systems; Facebook reactions.
 *   Identifiers: lowercase: 'react', camelCase: 'reactAction', snake_case: 'react_action', ALL_CAP: 'REACT', cache key: 'engage:react:resourceId'.
 *   Model Identifier Format: 'react-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'emojiReact'; used in social features.
 *   Example Usage: POST /api/react in DnDHubs.
 *   @example
 *   POST /api/react { "emoji": "👍" };
 *
 * - 'rate': Rates an item or service.
 *   Classifications: Rating systems; aligns with schema.org ratings.
 *   Identifiers: lowercase: 'rate', camelCase: 'rateAction', snake_case: 'rate_action', ALL_CAP: 'RATE', cache key: 'feedback:rate:resourceId'.
 *   Model Identifier Format: 'rate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'score'; used in Trakfox reviews.
 *   Example Usage: POST /api/rate in Trakfox.
 *   @example
 *   POST /api/rate { "score": 5 };
 *
 * - 'review': Submits a review.
 *   Classifications: Review submission; Yelp API standards.
 *   Identifiers: lowercase: 'review', camelCase: 'reviewAction', snake_case: 'review_action', ALL_CAP: 'REVIEW', cache key: 'feedback:review:resourceId'.
 *   Model Identifier Format: 'review-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'feedback'; used in DnDHubs marketplace.
 *   Example Usage: POST /api/review in DnDHubs.
 *   @example
 *   POST /api/review { "text": "Great!" };
 *
 * - 'comment': Comments on a post.
 *   Classifications: Commenting; Disqus standards.
 *   Identifiers: lowercase: 'comment', camelCase: 'commentAction', snake_case: 'comment_action', ALL_CAP: 'COMMENT', cache key: 'feedback:comment:resourceId'.
 *   Model Identifier Format: 'comment-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'replyToPost'; used in social platforms.
 *   Example Usage: POST /api/comment in Trakfox.
 *   @example
 *   POST /api/comment { "text": "Comment" };
 *
 * - 'reply': Replies to a comment.
 *   Classifications: Threaded discussions; forum standards.
 *   Identifiers: lowercase: 'reply', camelCase: 'replyAction', snake_case: 'reply_action', ALL_CAP: 'REPLY', cache key: 'feedback:reply:resourceId'.
 *   Model Identifier Format: 'reply-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'respond'; used in DnDHubs forums.
 *   Example Usage: POST /api/reply in DnDHubs.
 *   @example
 *   POST /api/reply { "parentId": "123" };
 *
 * - 'upvote': Upvotes an item.
 *   Classifications: Voting; Reddit API.
 *   Identifiers: lowercase: 'upvote', camelCase: 'upvoteAction', snake_case: 'upvote_action', ALL_CAP: 'UPVOTE', cache key: 'feedback:upvote:resourceId'.
 *   Model Identifier Format: 'upvote-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'positiveVote'; used in community features.
 *   Example Usage: POST /api/upvote in Trakfox.
 *   @example
 *   POST /api/upvote { "itemId": "123" };
 *
 * - 'downvote': Downvotes an item.
 *   Classifications: Voting; Reddit API.
 *   Identifiers: lowercase: 'downvote', camelCase: 'downvoteAction', snake_case: 'downvote_action', ALL_CAP: 'DOWNVOTE', cache key: 'feedback:downvote:resourceId'.
 *   Model Identifier Format: 'downvote-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'negativeVote'; used in community features.
 *   Example Usage: POST /api/downvote in Trakfox.
 *   @example
 *   POST /api/downvote { "itemId": "123" };
 *
 * - 'survey': Completes a survey.
 *   Classifications: Survey tools; Qualtrics standards.
 *   Identifiers: lowercase: 'survey', camelCase: 'surveyAction', snake_case: 'survey_action', ALL_CAP: 'SURVEY', cache key: 'feedback:survey:resourceId'.
 *   Model Identifier Format: 'survey-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'questionnaire'; used in HealthOrb feedback.
 *   Example Usage: POST /api/survey in HealthOrb.
 *   @example
 *   POST /api/survey { "answers": {} };
 *
 * - 'poll': Participates in a poll.
 *   Classifications: Polling; aligns with voting standards.
 *   Identifiers: lowercase: 'poll', camelCase: 'pollAction', snake_case: 'poll_action', ALL_CAP: 'POLL', cache key: 'feedback:poll:resourceId'.
 *   Model Identifier Format: 'poll-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'votePoll'; used in Trakfox.
 *   Example Usage: POST /api/poll in Trakfox.
 *   @example
 *   POST /api/poll { "choice": "a" };
 *
 * - 'flag': Flags content for moderation.
 *   Classifications: Moderation; aligns with content policy standards.
 *   Identifiers: lowercase: 'flag', camelCase: 'flagAction', snake_case: 'flag_action', ALL_CAP: 'FLAG', cache key: 'feedback:flag:resourceId'.
 *   Model Identifier Format: 'flag-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'report'; used in DnDHubs.
 *   Example Usage: POST /api/flag in DnDHubs.
 *   @example
 *   POST /api/flag { "reason": "spam" };
 *
 * - 'annotate': Annotates content.
 *   Classifications: Annotation; Hypothesis standards.
 *   Identifiers: lowercase: 'annotate', camelCase: 'annotateAction', snake_case: 'annotate_action', ALL_CAP: 'ANNOTATE', cache key: 'feedback:annotate:resourceId'.
 *   Model Identifier Format: 'annotate-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'note'; used in GEOCoLab data.
 *   Example Usage: POST /api/annotate in GEOCoLab.
 *   @example
 *   POST /api/annotate { "text": "note" };
 *
 * - 'message': Sends a message.
 *   Classifications: Messaging; SMTP/IMAP standards.
 *   Identifiers: lowercase: 'message', camelCase: 'messageAction', snake_case: 'message_action', ALL_CAP: 'MESSAGE', cache key: 'feedback:message:resourceId'.
 *   Model Identifier Format: 'message-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sendMsg'; used in Trakfox communication.
 *   Example Usage: POST /api/message in Trakfox.
 *   @example
 *   POST /api/message { "content": "hello" };
 *
 * - 'endorse': Endorses a skill or item.
 *   Classifications: Endorsement; LinkedIn API.
 *   Identifiers: lowercase: 'endorse', camelCase: 'endorseAction', snake_case: 'endorse_action', ALL_CAP: 'ENDORSE', cache key: 'feedback:endorse:resourceId'.
 *   Model Identifier Format: 'endorse-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'recommend'; used in professional networks.
 *   Example Usage: POST /api/endorse in DnDHubs.
 *   @example
 *   POST /api/endorse { "skill": "coding" };
 *
 * - 'acknowledge': Acknowledges receipt or feedback.
 *   Classifications: Acknowledgment; aligns with email protocols.
 *   Identifiers: lowercase: 'acknowledge', camelCase: 'acknowledgeAction', snake_case: 'acknowledge_action', ALL_CAP: 'ACKNOWLEDGE', cache key: 'feedback:acknowledge:resourceId'.
 *   Model Identifier Format: 'acknowledge-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'confirmReceipt'; used in workflows.
 *   Example Usage: POST /api/acknowledge in HealthOrb.
 *   @example
 *   POST /api/acknowledge { "id": "123" };
 *
 * - 'skipFeedback': Skips providing feedback.
 *   Classifications: Optional feedback; UX standards.
 *   Identifiers: lowercase: 'skipfeedback', camelCase: 'skipFeedbackAction', snake_case: 'skip_feedback', ALL_CAP: 'SKIPFEEDBACK', cache key: 'feedback:skipfeedback:resourceId'.
 *   Model Identifier Format: 'skipfeedback-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'declineFeedback'; used in Trakfox surveys.
 *   Example Usage: POST /api/skipFeedback in Trakfox.
 *   @example
 *   POST /api/skipFeedback;
 *
 * - 'block': Blocks a user or content.
 *   Classifications: User management; social media blocking.
 *   Identifiers: lowercase: 'block', camelCase: 'blockAction', snake_case: 'block_action', ALL_CAP: 'BLOCK', cache key: 'churn:block:userId'.
 *   Model Identifier Format: 'block-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'ban'; used in DnDHubs community.
 *   Example Usage: POST /api/block in DnDHubs.
 *   @example
 *   POST /api/block { "userId": "123" };
 *
 * - 'unsubscribe': Unsubscribes from notifications.
 *   Classifications: Email marketing; CAN-SPAM compliance.
 *   Identifiers: lowercase: 'unsubscribe', camelCase: 'unsubscribeAction', snake_case: 'unsubscribe_action', ALL_CAP: 'UNSUBSCRIBE', cache key: 'churn:unsubscribe:userId'.
 *   Model Identifier Format: 'unsubscribe-{subscriptionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'optOut'; used in Trakfox emails.
 *   Example Usage: POST /api/unsubscribe in Trakfox.
 *   @example
 *   POST /api/unsubscribe { "email": "user@email.com" };
 *
 * - 'blacklist': Adds to blacklist.
 *   Classifications: Security; aligns with firewall rules.
 *   Identifiers: lowercase: 'blacklist', camelCase: 'blacklistAction', snake_case: 'blacklist_action', ALL_CAP: 'BLACKLIST', cache key: 'churn:blacklist:userId'.
 *   Model Identifier Format: 'blacklist-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'banList'; used in security features.
 *   Example Usage: POST /api/blacklist in HealthOrb.
 *   @example
 *   POST /api/blacklist { "ip": "1.2.3.4" };
 *
 * - 'unfollow': Unfollows a user or topic.
 *   Classifications: Social following; Twitter API.
 *   Identifiers: lowercase: 'unfollow', camelCase: 'unfollowAction', snake_case: 'unfollow_action', ALL_CAP: 'UNFOLLOW', cache key: 'churn:unfollow:userId'.
 *   Model Identifier Format: 'unfollow-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'stopFollowing'; used in social platforms.
 *   Example Usage: POST /api/unfollow in DnDHubs.
 *   @example
 *   POST /api/unfollow { "userId": "123" };
 *
 * - 'deactivate': Deactivates an account.
 *   Classifications: Account management; GDPR deactivation.
 *   Identifiers: lowercase: 'deactivate', camelCase: 'deactivateAction', snake_case: 'deactivate_action', ALL_CAP: 'DEACTIVATE', cache key: 'churn:deactivate:userId'.
 *   Model Identifier Format: 'deactivate-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'suspend'; used in Trakfox accounts.
 *   Example Usage: POST /api/deactivate in Trakfox.
 *   @example
 *   POST /api/deactivate { "userId": "123" };
 *
 * - 'complain': Submits a complaint.
 *   Classifications: Complaint handling; ISO 10002.
 *   Identifiers: lowercase: 'complain', camelCase: 'complainAction', snake_case: 'complain_action', ALL_CAP: 'COMPLAIN', cache key: 'churn:complain:resourceId'.
 *   Model Identifier Format: 'complain-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reportIssue'; used in support.
 *   Example Usage: POST /api/complain in DnDHubs.
 *   @example
 *   POST /api/complain { "issue": "problem" };
 *
 * - 'cancel': Cancels a subscription or order.
 *   Classifications: Cancellation; aligns with e-commerce standards.
 *   Identifiers: lowercase: 'cancel', camelCase: 'cancelAction', snake_case: 'cancel_action', ALL_CAP: 'CANCEL', cache key: 'churn:cancel:resourceId'.
 *   Model Identifier Format: 'cancel-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'abort'; used in DnDHubs subscriptions.
 *   Example Usage: POST /api/cancel in DnDHubs.
 *   @example
 *   POST /api/cancel { "subscriptionId": "123" };
 *
 * - 'switch': Switches to another product or service.
 *   Classifications: Product switching; CRM standards.
 *   Identifiers: lowercase: 'switch', camelCase: 'switchAction', snake_case: 'switch_action', ALL_CAP: 'SWITCH', cache key: 'churn:switch:resourceId'.
 *   Model Identifier Format: 'switch-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'migrate'; used in Trakfox upgrades.
 *   Example Usage: POST /api/switch in Trakfox.
 *   @example
 *   POST /api/switch { "toPlan": "pro" };
 *
 * - 'ignore': Ignores a notification or suggestion.
 *   Classifications: User preferences; UX standards.
 *   Identifiers: lowercase: 'ignore', camelCase: 'ignoreAction', snake_case: 'ignore_action', ALL_CAP: 'IGNORE', cache key: 'churn:ignore:resourceId'.
 *   Model Identifier Format: 'ignore-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'dismiss'; used in notifications.
 *   Example Usage: POST /api/ignore in DataOrb.
 *   @example
 *   POST /api/ignore { "notificationId": "123" };
 *
 * - 'mark': Marks as read or spam.
 *   Classifications: Marking actions; email standards.
 *   Identifiers: lowercase: 'mark', camelCase: 'markAction', snake_case: 'mark_action', ALL_CAP: 'MARK', cache key: 'churn:mark:resourceId'.
 *   Model Identifier Format: 'mark-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'tag'; used in email systems.
 *   Example Usage: POST /api/mark in Trakfox.
 *   @example
 *   POST /api/mark { "status": "spam" };
 *
 * - 'hover': Hovers over an element (UI event).
 *   Classifications: UI interactions; W3C event standards.
 *   Identifiers: lowercase: 'hover', camelCase: 'hoverAction', snake_case: 'hover_action', ALL_CAP: 'HOVER', cache key: 'suspect:hover:elementId'.
 *   Model Identifier Format: 'hover-{elementType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'mouseover'; used in analytics tracking.
 *   Example Usage: EVENT /api/hover in DataOrb.
 *   @example
 *   trackEvent('hover', { element: 'button' });
 *
 * - 'visit': Visits a page or site.
 *   Classifications: Web analytics; Google Analytics.
 *   Identifiers: lowercase: 'visit', camelCase: 'visitAction', snake_case: 'visit_action', ALL_CAP: 'VISIT', cache key: 'suspect:visit:pageId'.
 *   Model Identifier Format: 'visit-{pageType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'pageView'; used in Trakfox tracking.
 *   Example Usage: GET /api/visit in Trakfox.
 *   @example
 *   trackEvent('visit', { url: '/home' });
 *
 * - 'viewAd': Views an advertisement.
 *   Classifications: Ad tracking; IAB standards.
 *   Identifiers: lowercase: 'viewad', camelCase: 'viewAdAction', snake_case: 'view_ad', ALL_CAP: 'VIEWAD', cache key: 'suspect:viewad:adId'.
 *   Model Identifier Format: 'viewad-{adType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'adImpression'; used in marketing.
 *   Example Usage: EVENT /api/viewAd in DnDHubs.
 *   @example
 *   trackEvent('viewAd', { adId: '123' });
 *
 * - 'impression': Records an impression.
 *   Classifications: Impression tracking; advertising metrics.
 *   Identifiers: lowercase: 'impression', camelCase: 'impressionAction', snake_case: 'impression_action', ALL_CAP: 'IMPRESSION', cache key: 'suspect:impression:resourceId'.
 *   Model Identifier Format: 'impression-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'viewCount'; used in ads.
 *   Example Usage: EVENT /api/impression in Trakfox.
 *   @example
 *   trackEvent('impression', { item: 'ad' });
 *
 * - 'socialView': Views social content.
 *   Classifications: Social analytics; Facebook Insights.
 *   Identifiers: lowercase: 'socialview', camelCase: 'socialViewAction', snake_case: 'social_view', ALL_CAP: 'SOCIALVIEW', cache key: 'suspect:socialview:postId'.
 *   Model Identifier Format: 'socialview-{postType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'socialImpression'; used in social feeds.
 *   Example Usage: EVENT /api/socialView in DnDHubs.
 *   @example
 *   trackEvent('socialView', { postId: '123' });
 *
 * - 'searchDisplay': Displays search results.
 *   Classifications: Search engine; Google Search Console.
 *   Identifiers: lowercase: 'searchdisplay', camelCase: 'searchDisplayAction', snake_case: 'search_display', ALL_CAP: 'SEARCHDISPLAY', cache key: 'suspect:searchdisplay:queryId'.
 *   Model Identifier Format: 'searchdisplay-{queryType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'searchImpression'; used in search features.
 *   Example Usage: EVENT /api/searchDisplay in Trakfox.
 *   @example
 *   trackEvent('searchDisplay', { query: 'keyword' });
 * 
 *  'mentionExposure': Indicates user exposure to a brand, product, or entity mention in social media, forums, news, or other channels, serving as an initial awareness metric without direct interaction.
 *  Classifications: Marketing analytics (impression tracking); aligns with social listening standards in tools like Google Alerts or Brandwatch, and GDPR-compliant passive tracking.
 *   Identifiers: lowercase: 'mentionexposure', camelCase: 'mentionExposureAction', snake_case: 'mention_exposure', ALL_CAP: 'MENTIONEXPOSURE', cache key: 'suspect:mentionexposure:userId'.
 *  Model Identifier Format: 'mentionexposure-{channelType}-{timestamp}' (kebab-case for logging in analytics databases like Elasticsearch or BigQuery).
 *  Variations and Use Cases: Synonyms: 'mentionView', 'passiveMention'; used in Trakfox for social listening and brand awareness campaigns, DnDHubs marketplace for tracking product mentions in community forums, or DataOrb for aggregating exposure data from multiple sources; validate via utilities like isSuspectVerb(verb) for early-funnel analytics.
 *  Example Usage: TRACK /api/mentionExposure in Trakfox to log user exposure to a brand mention on X (formerly Twitter); POST /api/socialMentions in DataOrb for aggregating forum mentions.
 *  @example
 *  trackEvent('mentionExposure', { mentionId: 'ment123', channel: 'social' });
 *
 * - 'click': Clicks on an element.
 *   Classifications: UI events; W3C.
 *   Identifiers: lowercase: 'click', camelCase: 'clickAction', snake_case: 'click_action', ALL_CAP: 'CLICK', cache key: 'explore:click:elementId'.
 *   Model Identifier Format: 'click-{elementType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'tap'; used in analytics.
 *   Example Usage: EVENT /api/click in DataOrb.
 *   @example
 *   trackEvent('click', { element: 'link' });
 *
 * - 'save': Saves an item.
 *   Classifications: Data persistence; aligns with browser save.
 *   Identifiers: lowercase: 'save', camelCase: 'saveAction', snake_case: 'save_action', ALL_CAP: 'SAVE', cache key: 'explore:save:resourceId'.
 *   Model Identifier Format: 'save-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'store'; used in Trakfox bookmarks.
 *   Example Usage: POST /api/save in Trakfox.
 *   @example
 *   POST /api/save { "itemId": "123" };
 *
 * - 'follow': Follows a user or topic.
 *   Classifications: Social following; Twitter API.
 *   Identifiers: lowercase: 'follow', camelCase: 'followAction', snake_case: 'follow_action', ALL_CAP: 'FOLLOW', cache key: 'explore:follow:userId'.
 *   Model Identifier Format: 'follow-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'subscribeToUser'; used in social.
 *   Example Usage: POST /api/follow in DnDHubs.
 *   @example
 *   POST /api/follow { "userId": "123" };
 *
 * - 'whitelist': Adds to whitelist.
 *   Classifications: Security; firewall standards.
 *   Identifiers: lowercase: 'whitelist', camelCase: 'whitelistAction', snake_case: 'whitelist_action', ALL_CAP: 'WHITELIST', cache key: 'explore:whitelist:userId'.
 *   Model Identifier Format: 'whitelist-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'allowList'; used in security.
 *   Example Usage: POST /api/whitelist in HealthOrb.
 *   @example
 *   POST /api/whitelist { "ip": "1.2.3.4" };
 *
 * - 'wishlist': Adds to wishlist.
 *   Classifications: E-commerce; aligns with shopping cart standards.
 *   Identifiers: lowercase: 'wishlist', camelCase: 'wishlistAction', snake_case: 'wishlist_action', ALL_CAP: 'WISHLIST', cache key: 'explore:wishlist:productId'.
 *   Model Identifier Format: 'wishlist-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'addToWish'; used in DnDHubs marketplace.
 *   Example Usage: POST /api/wishlist in DnDHubs.
 *   @example
 *   POST /api/wishlist { "productId": "123" };
 *
 * - 'pin': Pins an item.
 *   Classifications: Pinning; Pinterest API.
 *   Identifiers: lowercase: 'pin', camelCase: 'pinAction', snake_case: 'pin_action', ALL_CAP: 'PIN', cache key: 'explore:pin:resourceId'.
 *   Model Identifier Format: 'pin-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'bookmarkPin'; used in boards.
 *   Example Usage: POST /api/pin in Trakfox.
 *   @example
 *   POST /api/pin { "itemId": "123" };
 *
 * - 'compare': Compares items.
 *   Classifications: Comparison tools; e-commerce standards.
 *   Identifiers: lowercase: 'compare', camelCase: 'compareAction', snake_case: 'compare_action', ALL_CAP: 'COMPARE', cache key: 'explore:compare:productId'.
 *   Model Identifier Format: 'compare-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'contrast'; used in shopping.
 *   Example Usage: POST /api/compare in DnDHubs.
 *   @example
 *   POST /api/compare { "items": ["1", "2"] };
 *
 * - 'check': Checks an option or item.
 *   Classifications: Form interactions; HTML5.
 *   Identifiers: lowercase: 'check', camelCase: 'checkAction', snake_case: 'check_action', ALL_CAP: 'CHECK', cache key: 'explore:check:resourceId'.
 *   Model Identifier Format: 'check-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'select'; used in forms.
 *   Example Usage: POST /api/check in Trakfox.
 *   @example
 *   POST /api/check { "option": "yes" };
 *
 * - 'addToCollection': Adds to a collection.
 *   Classifications: Collection management; aligns with database collections.
 *   Identifiers: lowercase: 'addtocollection', camelCase: 'addToCollectionAction', snake_case: 'add_to_collection', ALL_CAP: 'ADDTOCOLLECTION', cache key: 'explore:addtocollection:collectionId'.
 *   Model Identifier Format: 'addtocollection-{collectionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'collect'; used in user libraries.
 *   Example Usage: POST /api/addToCollection in DnDHubs.
 *   @example
 *   POST /api/addToCollection { "itemId": "123" };
 *
 * - 'search': Performs a search.
 *   Classifications: Search; Elasticsearch standards.
 *   Identifiers: lowercase: 'search', camelCase: 'searchAction', snake_case: 'search_action', ALL_CAP: 'SEARCH', cache key: 'explore:search:queryId'.
 *   Model Identifier Format: 'search-{queryType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'query'; used in search engines.
 *   Example Usage: GET /api/search in Trakfox.
 *   @example
 *   GET /api/search?q=keyword;
 *
 * - 'bookmark': Bookmarks an item.
 *   Classifications: Bookmarking; browser standards.
 *   Identifiers: lowercase: 'bookmark', camelCase: 'bookmarkAction', snake_case: 'bookmark_action', ALL_CAP: 'BOOKMARK', cache key: 'explore:bookmark:resourceId'.
 *   Model Identifier Format: 'bookmark-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'saveLink'; used in browsers.
 *   Example Usage: POST /api/bookmark in Trakfox.
 *   @example
 *   POST /api/bookmark { "url": "example.com" };
 *
 * - 'expressInterest': Expresses interest in an item.
 *   Classifications: Lead generation; CRM standards.
 *   Identifiers: lowercase: 'expressinterest', camelCase: 'expressInterestAction', snake_case: 'express_interest', ALL_CAP: 'EXPRESSINTEREST', cache key: 'explore:expressinterest:resourceId'.
 *   Model Identifier Format: 'expressinterest-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'showInterest'; used in marketing.
 *   Example Usage: POST /api/expressInterest in DnDHubs.
 *   @example
 *   POST /api/expressInterest { "productId": "123" };
 *
 * - 'browse': Browses content.
 *   Classifications: Browsing; web navigation standards.
 *   Identifiers: lowercase: 'browse', camelCase: 'browseAction', snake_case: 'browse_action', ALL_CAP: 'BROWSE', cache key: 'explore:browse:categoryId'.
 *   Model Identifier Format: 'browse-{categoryType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'navigate'; used in e-commerce.
 *   Example Usage: GET /api/browse in DnDHubs.
 *   @example
 *   GET /api/browse?category=products;
 *
 * - 'filter': Applies filters.
 *   Classifications: Filtering; SQL WHERE clause.
 *   Identifiers: lowercase: 'filter', camelCase: 'filterAction', snake_case: 'filter_action', ALL_CAP: 'FILTER', cache key: 'explore:filter:queryId'.
 *   Model Identifier Format: 'filter-{queryType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'refine'; used in search.
 *   Example Usage: GET /api/filter in Trakfox.
 *   @example
 *   GET /api/filter?param=value;
 *
 * - 'sort': Sorts items.
 *   Classifications: Sorting; SQL ORDER BY.
 *   Identifiers: lowercase: 'sort', camelCase: 'sortAction', snake_case: 'sort_action', ALL_CAP: 'SORT', cache key: 'explore:sort:queryId'.
 *   Model Identifier Format: 'sort-{queryType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'order'; used in lists.
 *   Example Usage: GET /api/sort in Trakfox.
 *   @example
 *   GET /api/sort?by=date;
 *
 * - 'preview': Previews content.
 *   Classifications: Preview functions; aligns with media players.
 *   Identifiers: lowercase: 'preview', camelCase: 'previewAction', snake_case: 'preview_action', ALL_CAP: 'PREVIEW', cache key: 'explore:preview:resourceId'.
 *   Model Identifier Format: 'preview-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'peek'; used in files.
 *   Example Usage: GET /api/preview in DnDHubs.
 *   @example
 *   GET /api/preview?id=123;
 *
 * - 'scroll': Scrolls through content.
 *   Classifications: UI events; infinite scroll standards.
 *   Identifiers: lowercase: 'scroll', camelCase: 'scrollAction', snake_case: 'scroll_action', ALL_CAP: 'SCROLL', cache key: 'explore:scroll:pageId'.
 *   Model Identifier Format: 'scroll-{pageType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'swipe'; used in tracking engagement.
 *   Example Usage: EVENT /api/scroll in DataOrb.
 *   @example
 *   trackEvent('scroll', { position: 50 });
 *
 * - 'watch': Watches a video or content.
 *   Classifications: Media consumption; YouTube API.
 *   Identifiers: lowercase: 'watch', camelCase: 'watchAction', snake_case: 'watch_action', ALL_CAP: 'WATCH', cache key: 'explore:watch:videoId'.
 *   Model Identifier Format: 'watch-{videoType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'viewVideo'; used in media platforms.
 *   Example Usage: EVENT /api/watch in Trakfox.
 *   @example
 *   trackEvent('watch', { videoId: '123' });
 *
 * - 'dismiss': Dismisses a notification.
 *   Classifications: Notification management; push notification standards.
 *   Identifiers: lowercase: 'dismiss', camelCase: 'dismissAction', snake_case: 'dismiss_action', ALL_CAP: 'DISMISS', cache key: 'explore:dismiss:notificationId'.
 *   Model Identifier Format: 'dismiss-{notificationType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'close'; used in UI.
 *   Example Usage: POST /api/dismiss in Trakfox.
 *   @example
 *   POST /api/dismiss { "id": "123" };
 *
 * - 'inspect': Inspects an item details.
 *   Classifications: Inspection; developer tools standards.
 *   Identifiers: lowercase: 'inspect', camelCase: 'inspectAction', snake_case: 'inspect_action', ALL_CAP: 'INSPECT', cache key: 'explore:inspect:resourceId'.
 *   Model Identifier Format: 'inspect-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'examine'; used in debugging.
 *   Example Usage: GET /api/inspect in DataOrb.
 *   @example
 *   GET /api/inspect?id=123;
 *
 * - 'focus': Focuses on an element.
 *   Classifications: UI focus; accessibility standards.
 *   Identifiers: lowercase: 'focus', camelCase: 'focusAction', snake_case: 'focus_action', ALL_CAP: 'FOCUS', cache key: 'explore:focus:elementId'.
 *   Model Identifier Format: 'focus-{elementType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'selectFocus'; used in forms.
 *   Example Usage: EVENT /api/focus in Trakfox.
 *   @example
 *   trackEvent('focus', { element: 'input' });
 *
 * - 'unbookmark': Removes a bookmark.
 *   Classifications: Bookmark management; browser standards.
 *   Identifiers: lowercase: 'unbookmark', camelCase: 'unbookmarkAction', snake_case: 'unbookmark_action', ALL_CAP: 'UNBOOKMARK', cache key: 'explore:unbookmark:resourceId'.
 *   Model Identifier Format: 'unbookmark-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'removeBookmark'; used in user libraries.
 *   Example Usage: POST /api/unbookmark in Trakfox.
 *   @example
 *   POST /api/unbookmark { "url": "example.com" };
 *
 * - 'unpin': Unpins an item.
 *   Classifications: Pinning management; Pinterest API.
 *   Identifiers: lowercase: 'unpin', camelCase: 'unpinAction', snake_case: 'unpin_action', ALL_CAP: 'UNPIN', cache key: 'explore:unpin:resourceId'.
 *   Model Identifier Format: 'unpin-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'removePin'; used in boards.
 *   Example Usage: POST /api/unpin in Trakfox.
 *   @example
 *   POST /api/unpin { "itemId": "123" };
 *
 * - 'playMedia': Plays media content.
 *   Classifications: Media playback; HTML5 video.
 *   Identifiers: lowercase: 'playmedia', camelCase: 'playMediaAction', snake_case: 'play_media', ALL_CAP: 'PLAYMEDIA', cache key: 'explore:playmedia:mediaId'.
 *   Model Identifier Format: 'playmedia-{mediaType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'startPlayback'; used in players.
 *   Example Usage: EVENT /api/playMedia in DnDHubs.
 *   @example
 *   trackEvent('playMedia', { mediaId: '123' });
 *
 * - 'registerEvent': Registers for an event.
 *   Classifications: Event registration; Eventbrite API.
 *   Identifiers: lowercase: 'registerevent', camelCase: 'registerEventAction', snake_case: 'register_event', ALL_CAP: 'REGISTEREVENT', cache key: 'lead:registerevent:eventId'.
 *   Model Identifier Format: 'registerevent-{eventType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'signUpEvent'; used in marketing.
 *   Example Usage: POST /api/registerEvent in DnDHubs.
 *   @example
 *   POST /api/registerEvent { "eventId": "123" };
 *
 * - 'book': Books a service or appointment.
 *   Classifications: Booking; aligns with calendar standards.
 *   Identifiers: lowercase: 'book', camelCase: 'bookAction', snake_case: 'book_action', ALL_CAP: 'BOOK', cache key: 'lead:book:appointmentId'.
 *   Model Identifier Format: 'book-{appointmentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reserve'; used in scheduling.
 *   Example Usage: POST /api/book in Trakfox.
 *   @example
 *   POST /api/book { "time": "10:00" };
 *
 * - 'schedule': Schedules an event.
 *   Classifications: Scheduling; iCalendar.
 *   Identifiers: lowercase: 'schedule', camelCase: 'scheduleAction', snake_case: 'schedule_action', ALL_CAP: 'SCHEDULE', cache key: 'lead:schedule:eventId'.
 *   Model Identifier Format: 'schedule-{eventType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'plan'; used in calendars.
 *   Example Usage: POST /api/schedule in HealthOrb.
 *   @example
 *   POST /api/schedule { "date": "2025-08-11" };
 *
 * - 'apply': Applies for a job or program.
 *   Classifications: Application; HR standards.
 *   Identifiers: lowercase: 'apply', camelCase: 'applyAction', snake_case: 'apply_action', ALL_CAP: 'APPLY', cache key: 'lead:apply:jobId'.
 *   Model Identifier Format: 'apply-{jobType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'submitApplication'; used in recruitment.
 *   Example Usage: POST /api/apply in DnDHubs.
 *   @example
 *   POST /api/apply { "jobId": "123" };
 *
 * - 'download': Downloads a file.
 *   Classifications: File transfer; HTTP download.
 *   Identifiers: lowercase: 'download', camelCase: 'downloadAction', snake_case: 'download_action', ALL_CAP: 'DOWNLOAD', cache key: 'lead:download:fileId'.
 *   Model Identifier Format: 'download-{fileType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'getFile'; used in content delivery.
 *   Example Usage: GET /api/download in Trakfox.
 *   @example
 *   GET /api/download?id=123;
 *
 * - 'subscribe': Subscribes to a service.
 *   Classifications: Subscription; aligns with recurring billing.
 *   Identifiers: lowercase: 'subscribe', camelCase: 'subscribeAction', snake_case: 'subscribe_action', ALL_CAP: 'SUBSCRIBE', cache key: 'lead:subscribe:serviceId'.
 *   Model Identifier Format: 'subscribe-{serviceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'optIn'; used in newsletters.
 *   Example Usage: POST /api/subscribe in DnDHubs.
 *   @example
 *   POST /api/subscribe { "email": "user@email.com" };
 *
 * - 'configure': Configures settings.
 *   Classifications: Configuration; aligns with config management.
 *   Identifiers: lowercase: 'configure', camelCase: 'configureAction', snake_case: 'configure_action', ALL_CAP: 'CONFIGURE', cache key: 'lead:configure:settingId'.
 *   Model Identifier Format: 'configure-{settingType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'setup'; used in user prefs.
 *   Example Usage: POST /api/configure in Trakfox.
 *   @example
 *   POST /api/configure { "option": "value" };
 *
 * - 'demo': Requests or views a demo.
 *   Classifications: Product demo; sales standards.
 *   Identifiers: lowercase: 'demo', camelCase: 'demoAction', snake_case: 'demo_action', ALL_CAP: 'DEMO', cache key: 'lead:demo:productId'.
 *   Model Identifier Format: 'demo-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'trialDemo'; used in sales.
 *   Example Usage: POST /api/demo in DnDHubs.
 *   @example
 *   POST /api/demo { "productId": "123" };
 *
 * - 'trial': Starts a trial.
 *   Classifications: Trial period; SaaS standards.
 *   Identifiers: lowercase: 'trial', camelCase: 'trialAction', snake_case: 'trial_action', ALL_CAP: 'TRIAL', cache key: 'lead:trial:productId'.
 *   Model Identifier Format: 'trial-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'freeTrial'; used in subscriptions.
 *   Example Usage: POST /api/trial in Trakfox.
 *   @example
 *   POST /api/trial { "duration": "14days" };
 *
 * - 'contact': Contacts support or sales.
 *   Classifications: Contact form; CRM.
 *   Identifiers: lowercase: 'contact', camelCase: 'contactAction', snake_case: 'contact_action', ALL_CAP: 'CONTACT', cache key: 'lead:contact:userId'.
 *   Model Identifier Format: 'contact-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'inquire'; used in lead gen.
 *   Example Usage: POST /api/contact in DnDHubs.
 *   @example
 *   POST /api/contact { "message": "inquiry" };
 *
 * - 'qualify': Qualifies a lead.
 *   Classifications: Lead qualification; Salesforce standards.
 *   Identifiers: lowercase: 'qualify', camelCase: 'qualifyAction', snake_case: 'qualify_action', ALL_CAP: 'QUALIFY', cache key: 'lead:qualify:leadId'.
 *   Model Identifier Format: 'qualify-{leadType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'scoreLead'; used in CRM.
 *   Example Usage: POST /api/qualify in Trakfox.
 *   @example
 *   POST /api/qualify { "leadId": "123" };
 *
 * - 'requestQuote': Requests a quote.
 *   Classifications: Quote request; e-commerce.
 *   Identifiers: lowercase: 'requestquote', camelCase: 'requestQuoteAction', snake_case: 'request_quote', ALL_CAP: 'REQUESTQUOTE', cache key: 'lead:requestquote:productId'.
 *   Model Identifier Format: 'requestquote-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'getQuote'; used in sales.
 *   Example Usage: POST /api/requestQuote in DnDHubs.
 *   @example
 *   POST /api/requestQuote { "product": "item" };
 *
 * - 'requestDemo': Requests a product demo.
 *   Classifications: Demo request; sales cycle.
 *   Identifiers: lowercase: 'requestdemo', camelCase: 'requestDemoAction', snake_case: 'request_demo', ALL_CAP: 'REQUESTDEMO', cache key: 'lead:requestdemo:productId'.
 *   Model Identifier Format: 'requestdemo-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'bookDemo'; used in lead gen.
 *   Example Usage: POST /api/requestDemo in Trakfox.
 *   @example
 *   POST /api/requestDemo { "product": "item" };
 *
 * - 'callBack': Requests a callback.
 *   Classifications: Callback; customer service standards.
 *   Identifiers: lowercase: 'callback', camelCase: 'callBackAction', snake_case: 'call_back', ALL_CAP: 'CALLBACK', cache key: 'lead:callback:userId'.
 *   Model Identifier Format: 'callback-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'requestCall'; used in support.
 *   Example Usage: POST /api/callBack in DnDHubs.
 *   @example
 *   POST /api/callBack { "phone": "123456" };
 *
 * - 'confirm': Confirms an action or order.
 *   Classifications: Confirmation; transaction standards.
 *   Identifiers: lowercase: 'confirm', camelCase: 'confirmAction', snake_case: 'confirm_action', ALL_CAP: 'CONFIRM', cache key: 'prospect:confirm:orderId'.
 *   Model Identifier Format: 'confirm-{orderType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'verify'; used in checkouts.
 *   Example Usage: POST /api/confirm in DnDHubs.
 *   @example
 *   POST /api/confirm { "orderId": "123" };
 *
 * - 'verify': Verifies details.
 *   Classifications: Verification; aligns with KYC.
 *   Identifiers: lowercase: 'verify', camelCase: 'verifyAction', snake_case: 'verify_action', ALL_CAP: 'VERIFY', cache key: 'prospect:verify:resourceId'.
 *   Model Identifier Format: 'verify-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'validate'; used in forms.
 *   Example Usage: POST /api/verify in Trakfox.
 *   @example
 *   POST /api/verify { "data": "details" };
 *
 * - 'order': Places an order.
 *   Classifications: Ordering; e-commerce standards.
 *   Identifiers: lowercase: 'order', camelCase: 'orderAction', snake_case: 'order_action', ALL_CAP: 'ORDER', cache key: 'prospect:order:orderId'.
 *   Model Identifier Format: 'order-{orderType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'placeOrder'; used in shopping.
 *   Example Usage: POST /api/order in DnDHubs.
 *   @example
 *   POST /api/order { "items": [] };
 *
 * - 'negotiate': Negotiates a deal.
 *   Classifications: Negotiation; CRM sales.
 *   Identifiers: lowercase: 'negotiate', camelCase: 'negotiateAction', snake_case: 'negotiate_action', ALL_CAP: 'NEGOTIATE', cache key: 'prospect:negotiate:dealId'.
 *   Model Identifier Format: 'negotiate-{dealType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'bargain'; used in B2B.
 *   Example Usage: POST /api/negotiate in Trakfox.
 *   @example
 *   POST /api/negotiate { "offer": 100 };
 *
 * - 'test': Tests a feature or product.
 *   Classifications: Testing; QA standards.
 *   Identifiers: lowercase: 'test', camelCase: 'testAction', snake_case: 'test_action', ALL_CAP: 'TEST', cache key: 'prospect:test:featureId'.
 *   Model Identifier Format: 'test-{featureType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'trialTest'; used in betas.
 *   Example Usage: POST /api/test in DnDHubs.
 *   @example
 *   POST /api/test { "feature": "new" };
 *
 * - 'addToCart': Adds item to cart.
 *   Classifications: E-commerce cart; Shopify API.
 *   Identifiers: lowercase: 'addtocart', camelCase: 'addToCartAction', snake_case: 'add_to_cart', ALL_CAP: 'ADDTOCART', cache key: 'prospect:addtocart:productId'.
 *   Model Identifier Format: 'addtocart-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'cartAdd'; used in shopping.
 *   Example Usage: POST /api/addToCart in DnDHubs.
 *   @example
 *   POST /api/addToCart { "productId": "123" };
 *
 * - 'reviewCart': Reviews cart contents.
 *   Classifications: Cart review; e-commerce checkout.
 *   Identifiers: lowercase: 'reviewcart', camelCase: 'reviewCartAction', snake_case: 'review_cart', ALL_CAP: 'REVIEWCART', cache key: 'prospect:reviewcart:cartId'.
 *   Model Identifier Format: 'reviewcart-{cartType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'checkCart'; used in checkout.
 *   Example Usage: GET /api/reviewCart in DnDHubs.
 *   @example
 *   GET /api/reviewCart;
 *
 * - 'applyCoupon': Applies a coupon.
 *   Classifications: Discount application; e-commerce.
 *   Identifiers: lowercase: 'applycoupon', camelCase: 'applyCouponAction', snake_case: 'apply_coupon', ALL_CAP: 'APPLYCOUPON', cache key: 'prospect:applycoupon:cartId'.
 *   Model Identifier Format: 'applycoupon-{cartType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'redeemCode'; used in promotions.
 *   Example Usage: POST /api/applyCoupon in Trakfox.
 *   @example
 *   POST /api/applyCoupon { "code": "DISCOUNT" };
 *
 * - 'buy': Purchases an item.
 *   Classifications: Purchase; PCI DSS compliant.
 *   Identifiers: lowercase: 'buy', camelCase: 'buyAction', snake_case: 'buy_action', ALL_CAP: 'BUY', cache key: 'customer:buy:productId'.
 *   Model Identifier Format: 'buy-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'purchase'; used in e-commerce.
 *   Example Usage: POST /api/buy in DnDHubs.
 *   @example
 *   POST /api/buy { "productId": "123" };
 *
 * - 'pay': Makes a payment.
 *   Classifications: Payment; ISO 20022.
 *   Identifiers: lowercase: 'pay', camelCase: 'payAction', snake_case: 'pay_action', ALL_CAP: 'PAY', cache key: 'customer:pay:transactionId'.
 *   Model Identifier Format: 'pay-{transactionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'transact'; used in billing.
 *   Example Usage: POST /api/pay in Trakfox.
 *   @example
 *   POST /api/pay { "amount": 100 };
 *
 * - 'checkin': Checks in to a location or event.
 *   Classifications: Check-in; Foursquare API.
 *   Identifiers: lowercase: 'checkin', camelCase: 'checkinAction', snake_case: 'check_in', ALL_CAP: 'CHECKIN', cache key: 'customer:checkin:locationId'.
 *   Model Identifier Format: 'checkin-{locationType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'arrive'; used in events.
 *   Example Usage: POST /api/checkin in DnDHubs.
 *   @example
 *   POST /api/checkin { "location": "event" };
 *
 * - 'rent': Rents an item.
 *   Classifications: Rental; aligns with leasing standards.
 *   Identifiers: lowercase: 'rent', camelCase: 'rentAction', snake_case: 'rent_action', ALL_CAP: 'RENT', cache key: 'customer:rent:itemId'.
 *   Model Identifier Format: 'rent-{itemType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'borrow'; used in services.
 *   Example Usage: POST /api/rent in Trakfox.
 *   @example
 *   POST /api/rent { "itemId": "123" };
 *
 * - 'lease': Leases an asset.
 *   Classifications: Leasing; financial standards.
 *   Identifiers: lowercase: 'lease', camelCase: 'leaseAction', snake_case: 'lease_action', ALL_CAP: 'LEASE', cache key: 'customer:lease:assetId'.
 *   Model Identifier Format: 'lease-{assetType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'longRent'; used in B2B.
 *   Example Usage: POST /api/lease in DnDHubs.
 *   @example
 *   POST /api/lease { "assetId": "123" };
 *
 * - 'activate': Activates a product or account.
 *   Classifications: Activation; product lifecycle.
 *   Identifiers: lowercase: 'activate', camelCase: 'activateAction', snake_case: 'activate_action', ALL_CAP: 'ACTIVATE', cache key: 'customer:activate:productId'.
 *   Model Identifier Format: 'activate-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'enable'; used in subscriptions.
 *   Example Usage: POST /api/activate in Trakfox.
 *   @example
 *   POST /api/activate { "code": "activation" };
 *
 * - 'setup': Sets up a product or service.
 *   Classifications: Setup; onboarding standards.
 *   Identifiers: lowercase: 'setup', camelCase: 'setupAction', snake_case: 'setup_action', ALL_CAP: 'SETUP', cache key: 'customer:setup:serviceId'.
 *   Model Identifier Format: 'setup-{serviceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'install'; used in software.
 *   Example Usage: POST /api/setup in DnDHubs.
 *   @example
 *   POST /api/setup { "config": {} };
 *
 * - 'utilize': Utilizes a service.
 *   Classifications: Usage tracking; aligns with metering.
 *   Identifiers: lowercase: 'utilize', camelCase: 'utilizeAction', snake_case: 'utilize_action', ALL_CAP: 'UTILIZE', cache key: 'customer:utilize:serviceId'.
 *   Model Identifier Format: 'utilize-{serviceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'useService'; used in SaaS.
 *   Example Usage: EVENT /api/utilize in Trakfox.
 *   @example
 *   trackEvent('utilize', { service: 'api' });
 *
 * - 'use': Uses a feature.
 *   Classifications: Feature usage; analytics.
 *   Identifiers: lowercase: 'use', camelCase: 'useAction', snake_case: 'use_action', ALL_CAP: 'USE', cache key: 'customer:use:featureId'.
 *   Model Identifier Format: 'use-{featureType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'engageWith'; used in tracking.
 *   Example Usage: EVENT /api/use in DataOrb.
 *   @example
 *   trackEvent('use', { feature: 'dashboard' });
 *
 * - 'join': Joins a group or community.
 *   Classifications: Membership; aligns with group standards.
 *   Identifiers: lowercase: 'join', camelCase: 'joinAction', snake_case: 'join_action', ALL_CAP: 'JOIN', cache key: 'customer:join:groupId'.
 *   Model Identifier Format: 'join-{groupType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'becomeMember'; used in communities.
 *   Example Usage: POST /api/join in DnDHubs.
 *   @example
 *   POST /api/join { "groupId": "123" };
 *
 * - 'shareUsage': Shares usage data.
 *   Classifications: Data sharing; GDPR compliant.
 *   Identifiers: lowercase: 'shareusage', camelCase: 'shareUsageAction', snake_case: 'share_usage', ALL_CAP: 'SHAREUSAGE', cache key: 'customer:shareusage:userId'.
 *   Model Identifier Format: 'shareusage-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'exportUsage'; used in analytics.
 *   Example Usage: POST /api/shareUsage in Trakfox.
 *   @example
 *   POST /api/shareUsage { "data": {} };
 *
 * - 'return': Returns a product.
 *   Classifications: Returns; e-commerce RMA.
 *   Identifiers: lowercase: 'return', camelCase: 'returnAction', snake_case: 'return_action', ALL_CAP: 'RETURN', cache key: 'supporter:return:productId'.
 *   Model Identifier Format: 'return-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'refundRequest'; used in orders.
 *   Example Usage: POST /api/return in DnDHubs.
 *   @example
 *   POST /api/return { "orderId": "123" };
 *
 * - 'exchange': Exchanges a product.
 *   Classifications: Exchange; e-commerce standards.
 *   Identifiers: lowercase: 'exchange', camelCase: 'exchangeAction', snake_case: 'exchange_action', ALL_CAP: 'EXCHANGE', cache key: 'supporter:exchange:productId'.
 *   Model Identifier Format: 'exchange-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'swap'; used in customer service.
 *   Example Usage: POST /api/exchange in Trakfox.
 *   @example
 *   POST /api/exchange { "orderId": "123" };
 *
 * - 'downgrade': Downgrades a subscription.
 *   Classifications: Subscription management; billing standards.
 *   Identifiers: lowercase: 'downgrade', camelCase: 'downgradeAction', snake_case: 'downgrade_action', ALL_CAP: 'DOWNGRADE', cache key: 'supporter:downgrade:subscriptionId'.
 *   Model Identifier Format: 'downgrade-{subscriptionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reducePlan'; used in accounts.
 *   Example Usage: POST /api/downgrade in DnDHubs.
 *   @example
 *   POST /api/downgrade { "toPlan": "basic" };
 *
 * - 'openTicket': Opens a support ticket.
 *   Classifications: Ticketing; Zendesk API.
 *   Identifiers: lowercase: 'openticket', camelCase: 'openTicketAction', snake_case: 'open_ticket', ALL_CAP: 'OPENTICKET', cache key: 'supporter:openticket:ticketId'.
 *   Model Identifier Format: 'openticket-{ticketType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'createTicket'; used in support.
 *   Example Usage: POST /api/openTicket in Trakfox.
 *   @example
 *   POST /api/openTicket { "issue": "problem" };
 *
 * - 'chatSupport': Initiates support chat.
 *   Classifications: Live chat; Intercom API.
 *   Identifiers: lowercase: 'chatsupport', camelCase: 'chatSupportAction', snake_case: 'chat_support', ALL_CAP: 'CHATSUPPORT', cache key: 'supporter:chatsupport:sessionId'.
 *   Model Identifier Format: 'chatsupport-{sessionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'liveChat'; used in customer service.
 *   Example Usage: POST /api/chatSupport in DnDHubs.
 *   @example
 *   POST /api/chatSupport { "message": "help" };
 *
 * - 'emailSupport': Emails support.
 *   Classifications: Email support; SMTP.
 *   Identifiers: lowercase: 'emailsupport', camelCase: 'emailSupportAction', snake_case: 'email_support', ALL_CAP: 'EMAILSUPPORT', cache key: 'supporter:emailsupport:userId'.
 *   Model Identifier Format: 'emailsupport-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sendEmailSupport'; used in contact.
 *   Example Usage: POST /api/emailSupport in Trakfox.
 *   @example
 *   POST /api/emailSupport { "subject": "issue" };
 *
 * - 'callSupport': Calls support.
 *   Classifications: Phone support; telephony standards.
 *   Identifiers: lowercase: 'callsupport', camelCase: 'callSupportAction', snake_case: 'call_support', ALL_CAP: 'CALLSUPPORT', cache key: 'supporter:callsupport:userId'.
 *   Model Identifier Format: 'callsupport-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'phoneSupport'; used in customer service.
 *   Example Usage: POST /api/callSupport in DnDHubs.
 *   @example
 *   POST /api/callSupport { "phone": "123456" };
 *
 * - 'selfResolve': Resolves issue self-service.
 *   Classifications: Self-service; FAQ standards.
 *   Identifiers: lowercase: 'selfresolve', camelCase: 'selfResolveAction', snake_case: 'self_resolve', ALL_CAP: 'SELFRESOLVE', cache key: 'supporter:selfresolve:issueId'.
 *   Model Identifier Format: 'selfresolve-{issueType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'diyFix'; used in knowledge base.
 *   Example Usage: POST /api/selfResolve in Trakfox.
 *   @example
 *   POST /api/selfResolve { "issueId": "123" };
 *
 * - 'escalate': Escalates a ticket.
 *   Classifications: Ticket escalation; ITIL standards.
 *   Identifiers: lowercase: 'escalate', camelCase: 'escalateAction', snake_case: 'escalate_action', ALL_CAP: 'ESCALATE', cache key: 'supporter:escalate:ticketId'.
 *   Model Identifier Format: 'escalate-{ticketType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'elevate'; used in support.
 *   Example Usage: POST /api/escalate in DnDHubs.
 *   @example
 *   POST /api/escalate { "ticketId": "123" };
 *
 * - 'provideSupportFeedback': Provides feedback on support.
 *   Classifications: Feedback; NPS standards.
 *   Identifiers: lowercase: 'providesupportfeedback', camelCase: 'provideSupportFeedbackAction', snake_case: 'provide_support_feedback', ALL_CAP: 'PROVIDESUPPORTFEEDBACK', cache key: 'supporter:providesupportfeedback:ticketId'.
 *   Model Identifier Format: 'providesupportfeedback-{ticketType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rateSupport'; used in CSAT.
 *   Example Usage: POST /api/provideSupportFeedback in Trakfox.
 *   @example
 *   POST /api/provideSupportFeedback { "score": 9 };
 *
 * - 'diagnose': Diagnoses an issue.
 *   Classifications: Diagnostics; ITIL.
 *   Identifiers: lowercase: 'diagnose', camelCase: 'diagnoseAction', snake_case: 'diagnose_action', ALL_CAP: 'DIAGNOSE', cache key: 'supporter:diagnose:issueId'.
 *   Model Identifier Format: 'diagnose-{issueType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'troubleshoot'; used in support.
 *   Example Usage: POST /api/diagnose in DnDHubs.
 *   @example
 *   POST /api/diagnose { "symptoms": "error" };
 *
 * - 'reportBug': Reports a bug.
 *   Classifications: Bug reporting; Jira API.
 *   Identifiers: lowercase: 'reportbug', camelCase: 'reportBugAction', snake_case: 'report_bug', ALL_CAP: 'REPORTBUG', cache key: 'supporter:reportbug:bugId'.
 *   Model Identifier Format: 'reportbug-{bugType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'logBug'; used in QA.
 *   Example Usage: POST /api/reportBug in Trakfox.
 *   @example
 *   POST /api/reportBug { "description": "bug" };
 *
 * - 'troubleshoot': Troubleshoots an issue.
 *   Classifications: Troubleshooting; IT support.
 *   Identifiers: lowercase: 'troubleshoot', camelCase: 'troubleshootAction', snake_case: 'troubleshoot_action', ALL_CAP: 'TROUBLESHOOT', cache key: 'supporter:troubleshoot:issueId'.
 *   Model Identifier Format: 'troubleshoot-{issueType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'fixAttempt'; used in support.
 *   Example Usage: POST /api/troubleshoot in DnDHubs.
 *   @example
 *   POST /api/troubleshoot { "steps": [] };
 *
 * - 'supportRequest': Makes a support request.
 *   Classifications: Request; ticket systems.
 *   Identifiers: lowercase: 'supportrequest', camelCase: 'supportRequestAction', snake_case: 'support_request', ALL_CAP: 'SUPPORTREQUEST', cache key: 'supporter:supportrequest:requestId'.
 *   Model Identifier Format: 'supportrequest-{requestType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'helpRequest'; used in customer service.
 *   Example Usage: POST /api/supportRequest in Trakfox.
 *   @example
 *   POST /api/supportRequest { "type": "help" };
 *
 * - 'renew': Renews a subscription.
 *   Classifications: Renewal; billing standards.
 *   Identifiers: lowercase: 'renew', camelCase: 'renewAction', snake_case: 'renew_action', ALL_CAP: 'RENEW', cache key: 'supporter:renew:subscriptionId'.
 *   Model Identifier Format: 'renew-{subscriptionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'extend'; used in accounts.
 *   Example Usage: POST /api/renew in DnDHubs.
 *   @example
 *   POST /api/renew { "subscriptionId": "123" };
 *
 * - 'upgrade': Upgrades a subscription.
 *   Classifications: Upgrade; SaaS billing.
 *   Identifiers: lowercase: 'upgrade', camelCase: 'upgradeAction', snake_case: 'upgrade_action', ALL_CAP: 'UPGRADE', cache key: 'supporter:upgrade:subscriptionId'.
 *   Model Identifier Format: 'upgrade-{subscriptionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'upPlan'; used in accounts.
 *   Example Usage: POST /api/upgrade in Trakfox.
 *   @example
 *   POST /api/upgrade { "toPlan": "pro" };
 *
 * - 'reengage': Re-engages a user.
 *   Classifications: Re-engagement; marketing automation.
 *   Identifiers: lowercase: 'reengage', camelCase: 'reengageAction', snake_case: 'reengage_action', ALL_CAP: 'REENGAGE', cache key: 'supporter:reengage:userId'.
 *   Model Identifier Format: 'reengage-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reactivate'; used in retention.
 *   Example Usage: POST /api/reengage in DnDHubs.
 *   @example
 *   POST /api/reengage { "userId": "123" };
 *
 * - 'redeem': Redeems a reward.
 *   Classifications: Reward redemption; loyalty programs.
 *   Identifiers: lowercase: 'redeem', camelCase: 'redeemAction', snake_case: 'redeem_action', ALL_CAP: 'REDEEM', cache key: 'supporter:redeem:rewardId'.
 *   Model Identifier Format: 'redeem-{rewardType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'claim'; used in Trakfox loyalty.
 *   Example Usage: POST /api/redeem in Trakfox.
 *   @example
 *   POST /api/redeem { "code": "REWARD" };
 *
 * - 'cancelSubscription': Cancels subscription.
 *   Classifications: Cancellation; billing.
 *   Identifiers: lowercase: 'cancelsubscription', camelCase: 'cancelSubscriptionAction', snake_case: 'cancel_subscription', ALL_CAP: 'CANCELSUBSCRIPTION', cache key: 'supporter:cancelsubscription:subscriptionId'.
 *   Model Identifier Format: 'cancelsubscription-{subscriptionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'unsub'; used in accounts.
 *   Example Usage: POST /api/cancelSubscription in DnDHubs.
 *   @example
 *   POST /api/cancelSubscription { "id": "123" };
 *
 * - 'Subscription': Pauses subscription.
 *   Classifications: Subscription pause; billing.
 *   Identifiers: lowercase: 'pausesubscription', camelCase: 'pauseSubscriptionAction', snake_case: 'pause_sub', ALL_CAP: 'PAUSESUB', cache key: 'supporter:pausesub:subscriptionId'.
 *   Model Identifier Format: 'pausesubscription-{subscriptionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'holdSub'; used in accounts.
 *   Example Usage: POST /api/pauseSubscription in Trakfox.
 *   @example
 *   POST /api/pauseSubscription { "id": "123" };
 *
 * - 'closeTicket': Closes a ticket.
 *   Classifications: Ticket closure; ITIL.
 *   Identifiers: lowercase: 'closeticket', camelCase: 'closeTicketAction', snake_case: 'close_ticket', ALL_CAP: 'CLOSETICKET', cache key: 'supporter:closeticket:ticketId'.
 *   Model Identifier Format: 'closeticket-{ticketType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'resolveTicket'; used in support.
 *   Example Usage: POST /api/closeTicket in DnDHubs.
 *   @example
 *   POST /api/closeTicket { "id": "123" };
 *
 * - 'refer': Refers a friend.
 *   Classifications: Referral; marketing standards.
 *   Identifiers: lowercase: 'refer', camelCase: 'referAction', snake_case: 'refer_action', ALL_CAP: 'REFER', cache key: 'advocate:refer:userId'.
 *   Model Identifier Format: 'refer-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'recommendFriend'; used in growth.
 *   Example Usage: POST /api/refer in Trakfox.
 *   @example
 *   POST /api/refer { "email": "friend@email.com" };
 *
 * - 'promote': Promotes content.
 *   Classifications: Promotion; advertising.
 *   Identifiers: lowercase: 'promote', camelCase: 'promoteAction', snake_case: 'promote_action', ALL_CAP: 'PROMOTE', cache key: 'advocate:promote:contentId'.
 *   Model Identifier Format: 'promote-{contentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'advertise'; used in marketing.
 *   Example Usage: POST /api/promote in DnDHubs.
 *   @example
 *   POST /api/promote { "contentId": "123" };
 *
 * - 'affiliate': Becomes an affiliate.
 *   Classifications: Affiliate marketing; Commission Junction standards.
 *   Identifiers: lowercase: 'affiliate', camelCase: 'affiliateAction', snake_case: 'affiliate_action', ALL_CAP: 'AFFILIATE', cache key: 'advocate:affiliate:userId'.
 *   Model Identifier Format: 'affiliate-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'joinAffiliate'; used in programs.
 *   Example Usage: POST /api/affiliate in Trakfox.
 *   @example
 *   POST /api/affiliate { "userId": "123" };
 *
 * - 'volunteer': Volunteers for a task.
 *   Classifications: Volunteering; non-profit standards.
 *   Identifiers: lowercase: 'volunteer', camelCase: 'volunteerAction', snake_case: 'volunteer_action', ALL_CAP: 'VOLUNTEER', cache key: 'advocate:volunteer:taskId'.
 *   Model Identifier Format: 'volunteer-{taskType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'offerHelp'; used in communities.
 *   Example Usage: POST /api/volunteer in DnDHubs.
 *   @example
 *   POST /api/volunteer { "taskId": "123" };
 *
 * - 'testimonial': Provides a testimonial.
 *   Classifications: Testimonial; marketing content.
 *   Identifiers: lowercase: 'testimonial', camelCase: 'testimonialAction', snake_case: 'testimonial_action', ALL_CAP: 'TESTIMONIAL', cache key: 'advocate:testimonial:userId'.
 *   Model Identifier Format: 'testimonial-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reviewPositive'; used in promo.
 *   Example Usage: POST /api/testimonial in Trakfox.
 *   @example
 *   POST /api/testimonial { "text": "great" };
 *
 * - 'shareContent': Shares content.
 *   Classifications: Content sharing; social APIs.
 *   Identifiers: lowercase: 'sharecontent', camelCase: 'shareContentAction', snake_case: 'share_content', ALL_CAP: 'SHARECONTENT', cache key: 'advocate:sharecontent:contentId'.
 *   Model Identifier Format: 'sharecontent-{contentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'distribute'; used in social.
 *   Example Usage: POST /api/shareContent in DnDHubs.
 *   @example
 *   POST /api/shareContent { "url": "example.com" };
 *
 * - 'participateCommunity': Participates in community.
 *   Classifications: Community engagement; forum standards.
 *   Identifiers: lowercase: 'participatecommunity', camelCase: 'participateCommunityAction', snake_case: 'participate_community', ALL_CAP: 'PARTICIPATECOMMUNITY', cache key: 'advocate:participatecommunity:communityId'.
 *   Model Identifier Format: 'participatecommunity-{communityType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'engageCommunity'; used in forums.
 *   Example Usage: POST /api/participateCommunity in Trakfox.
 *   @example
 *   POST /api/participateCommunity { "id": "123" };
 *
 * - 'contribute': Contributes content or code.
 *   Classifications: Contribution; GitHub standards.
 *   Identifiers: lowercase: 'contribute', camelCase: 'contributeAction', snake_case: 'contribute_action', ALL_CAP: 'CONTRIBUTE', cache key: 'advocate:contribute:repoId'.
 *   Model Identifier Format: 'contribute-{repoType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'submitPR'; used in open source.
 *   Example Usage: POST /api/contribute in DnDHubs.
 *   @example
 *   POST /api/contribute { "content": "code" };
 *
 * - 'mentor': Mentors someone.
 *   Classifications: Mentoring; education standards.
 *   Identifiers: lowercase: 'mentor', camelCase: 'mentorAction', snake_case: 'mentor_action', ALL_CAP: 'MENTOR', cache key: 'advocate:mentor:userId'.
 *   Model Identifier Format: 'mentor-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'guide'; used in communities.
 *   Example Usage: POST /api/mentor in Trakfox.
 *   @example
 *   POST /api/mentor { "menteeId": "123" };
 *
 * - 'recruit': Recruits a user.
 *   Classifications: Recruitment; HR.
 *   Identifiers: lowercase: 'recruit', camelCase: 'recruitAction', snake_case: 'recruit_action', ALL_CAP: 'RECRUIT', cache key: 'advocate:recruit:userId'.
 *   Model Identifier Format: 'recruit-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'inviteToJoin'; used in growth.
 *   Example Usage: POST /api/recruit in DnDHubs.
 *   @example
 *   POST /api/recruit { "userId": "123" };
 *
 * - 'shareStory': Shares a success story.
 *   Classifications: Story sharing; marketing.
 *   Identifiers: lowercase: 'sharestory', camelCase: 'shareStoryAction', snake_case: 'share_story', ALL_CAP: 'SHARESTORY', cache key: 'advocate:sharestory:storyId'.
 *   Model Identifier Format: 'sharestory-{storyType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'testimonialShare'; used in promo.
 *   Example Usage: POST /api/shareStory in Trakfox.
 *   @example
 *   POST /api/shareStory { "story": "success" };
 *
 * - 'addContent': Adds content.
 *   Classifications: Content creation; CMS standards.
 *   Identifiers: lowercase: 'addcontent', camelCase: 'addContentAction', snake_case: 'add_content', ALL_CAP: 'ADDCONTENT', cache key: 'advocate:addcontent:contentId'.
 *   Model Identifier Format: 'addcontent-{contentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'uploadContent'; used in platforms.
 *   Example Usage: POST /api/addContent in DnDHubs.
 *   @example
 *   POST /api/addContent { "text": "new" };
 *
 * - 'shareLink': Shares a link.
 *   Classifications: Link sharing; social.
 *   Identifiers: lowercase: 'sharelink', camelCase: 'shareLinkAction', snake_case: 'share_link', ALL_CAP: 'SHARELINK', cache key: 'advocate:sharelink:linkId'.
 *   Model Identifier Format: 'sharelink-{linkType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'postLink'; used in social.
 *   Example Usage: POST /api/shareLink in Trakfox.
 *   @example
 *   POST /api/shareLink { "url": "example.com" };
 *
 * - 'invite': Invites a user.
 *   Classifications: Invitation; email standards.
 *   Identifiers: lowercase: 'invite', camelCase: 'inviteAction', snake_case: 'invite_action', ALL_CAP: 'INVITE', cache key: 'advocate:invite:userId'.
 *   Model Identifier Format: 'invite-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sendInvite'; used in growth.
 *   Example Usage: POST /api/invite in DnDHubs.
 *   @example
 *   POST /api/invite { "email": "invite@email.com" };
 *
 * - 'planEvent': Plans an event.
 *   Classifications: Event planning; Eventbrite.
 *   Identifiers: lowercase: 'planevent', camelCase: 'planEventAction', snake_case: 'plan_event', ALL_CAP: 'PLANEVENT', cache key: 'advocate:planevent:eventId'.
 *   Model Identifier Format: 'planevent-{eventType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'createEvent'; used in communities.
 *   Example Usage: POST /api/planEvent in Trakfox.
 *   @example
 *   POST /api/planEvent { "date": "2025-08-11" };
 *
 * - 'sell': Sells an item.
 *   Classifications: Sales; e-commerce.
 *   Identifiers: lowercase: 'sell', camelCase: 'sellAction', snake_case: 'sell_action', ALL_CAP: 'SELL', cache key: 'operation:sell:productId'.
 *   Model Identifier Format: 'sell-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'vend'; used in marketplace.
 *   Example Usage: POST /api/sell in DnDHubs.
 *   @example
 *   POST /api/sell { "productId": "123" };
 *
 * - 'fulfill': Fulfills an order.
 *   Classifications: Order fulfillment; SCOR model.
 *   Identifiers: lowercase: 'fulfill', camelCase: 'fulfillAction', snake_case: 'fulfill_action', ALL_CAP: 'FULFILL', cache key: 'operation:fulfill:orderId'.
 *   Model Identifier Format: 'fulfill-{orderType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'completeOrder'; used in logistics.
 *   Example Usage: POST /api/fulfill in Trakfox.
 *   @example
 *   POST /api/fulfill { "orderId": "123" };
 *
 * - 'ship': Ships an order.
 *   Classifications: Shipping; logistics standards.
 *   Identifiers: lowercase: 'ship', camelCase: 'shipAction', snake_case: 'ship_action', ALL_CAP: 'SHIP', cache key: 'operation:ship:orderId'.
 *   Model Identifier Format: 'ship-{orderType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'deliver'; used in e-commerce.
 *   Example Usage: POST /api/ship in DnDHubs.
 *   @example
 *   POST /api/ship { "tracking": "123" };
 *
 * - 'restock': Restocks inventory.
 *   Classifications: Inventory management; ERP standards.
 *   Identifiers: lowercase: 'restock', camelCase: 'restockAction', snake_case: 'restock_action', ALL_CAP: 'RESTOCK', cache key: 'operation:restock:productId'.
 *   Model Identifier Format: 'restock-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'replenish'; used in retail.
 *   Example Usage: POST /api/restock in Trakfox.
 *   @example
 *   POST /api/restock { "quantity": 100 };
 *
 * - 'receiveReturn': Receives a return.
 *   Classifications: Returns management; e-commerce.
 *   Identifiers: lowercase: 'receivereturn', camelCase: 'receiveReturnAction', snake_case: 'receive_return', ALL_CAP: 'RECEIVERETURN', cache key: 'operation:receivereturn:orderId'.
 *   Model Identifier Format: 'receivereturn-{orderType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'processReturn'; used in logistics.
 *   Example Usage: POST /api/receiveReturn in DnDHubs.
 *   @example
 *   POST /api/receiveReturn { "orderId": "123" };
 *
 * - 'issueRefund': Issues a refund.
 *   Classifications: Refund; PCI DSS.
 *   Identifiers: lowercase: 'issuerefund', camelCase: 'issueRefundAction', snake_case: 'issue_refund', ALL_CAP: 'ISSUEREFUND', cache key: 'operation:issuerefund:transactionId'.
 *   Model Identifier Format: 'issuerefund-{transactionType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'refundMoney'; used in billing.
 *   Example Usage: POST /api/issueRefund in Trakfox.
 *   @example
 *   POST /api/issueRefund { "amount": 50 };
 *
 * - 'trackInventory': Tracks inventory.
 *   Classifications: Inventory tracking; ERP.
 *   Identifiers: lowercase: 'trackinventory', camelCase: 'trackInventoryAction', snake_case: 'track_inventory', ALL_CAP: 'TRACKINVENTORY', cache key: 'operation:trackinventory:productId'.
 *   Model Identifier Format: 'trackinventory-{productType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'monitorStock'; used in retail.
 *   Example Usage: GET /api/trackInventory in DnDHubs.
 *   @example
 *   GET /api/trackInventory?product=123;
 *
 * - 'coordinateDelivery': Coordinates delivery.
 *   Classifications: Delivery management; logistics.
 *   Identifiers: lowercase: 'coordinatedelivery', camelCase: 'coordinateDeliveryAction', snake_case: 'coordinate_delivery', ALL_CAP: 'COORDINATEDELIVERY', cache key: 'operation:coordinatedelivery:orderId'.
 *   Model Identifier Format: 'coordinatedelivery-{orderType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'arrangeShipment'; used in supply chain.
 *   Example Usage: POST /api/coordinateDelivery in Trakfox.
 *   @example
 *   POST /api/coordinateDelivery { "orderId": "123" };
 *
 * - 'resolveDispute': Resolves a dispute.
 *   Classifications: Dispute resolution; arbitration standards.
 *   Identifiers: lowercase: 'resolvedispute', camelCase: 'resolveDisputeAction', snake_case: 'resolve_dispute', ALL_CAP: 'RESOLVEDISPUTE', cache key: 'operation:resolvedispute:disputeId'.
 *   Model Identifier Format: 'resolvedispute-{disputeType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'settle'; used in customer service.
 *   Example Usage: POST /api/resolveDispute in DnDHubs.
 *   @example
 *   POST /api/resolveDispute { "disputeId": "123" };
 *
 * - 'broadcast': Broadcasts a message.
 *   Classifications: Broadcasting; aligns with email marketing.
 *   Identifiers: lowercase: 'broadcast', camelCase: 'broadcastAction', snake_case: 'broadcast_action', ALL_CAP: 'BROADCAST', cache key: 'operation:broadcast:messageId'.
 *   Model Identifier Format: 'broadcast-{messageType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sendToAll'; used in communications.
 *   Example Usage: POST /api/broadcast in Trakfox.
 *   @example
 *   POST /api/broadcast { "message": "news" };
 *
 * - 'draft': Drafts a document or post.
 *   Classifications: Drafting; content management.
 *   Identifiers: lowercase: 'draft', camelCase: 'draftAction', snake_case: 'draft_action', ALL_CAP: 'DRAFT', cache key: 'operation:draft:documentId'.
 *   Model Identifier Format: 'draft-{documentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'saveDraft'; used in editors.
 *   Example Usage: POST /api/draft in DnDHubs.
 *   @example
 *   POST /api/draft { "content": "draft" };
 *
 * - 'publish': Publishes content.
 *   Classifications: Publishing; CMS standards.
 *   Identifiers: lowercase: 'publish', camelCase: 'publishAction', snake_case: 'publish_action', ALL_CAP: 'PUBLISH', cache key: 'operation:publish:contentId'.
 *   Model Identifier Format: 'publish-{contentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'release'; used in blogs.
 *   Example Usage: POST /api/publish in Trakfox.
 *   @example
 *   POST /api/publish { "contentId": "123" };
 *
 * - 'approve': Approves a request.
 *   Classifications: Approval workflow; BPMN.
 *   Identifiers: lowercase: 'approve', camelCase: 'approveAction', snake_case: 'approve_action', ALL_CAP: 'APPROVE', cache key: 'operation:approve:requestId'.
 *   Model Identifier Format: 'approve-{requestType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'accept'; used in workflows.
 *   Example Usage: POST /api/approve in DnDHubs.
 *   @example
 *   POST /api/approve { "requestId": "123" };
 *
 * - 'reject': Rejects a request.
 *   Classifications: Rejection; workflow standards.
 *   Identifiers: lowercase: 'reject', camelCase: 'rejectAction', snake_case: 'reject_action', ALL_CAP: 'REJECT', cache key: 'operation:reject:requestId'.
 *   Model Identifier Format: 'reject-{requestType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'deny'; used in workflows.
 *   Example Usage: POST /api/reject in Trakfox.
 *   @example
 *   POST /api/reject { "requestId": "123" };
 *
 * - 'generate': Generates a report or item.
 *   Classifications: Generation; reporting standards.
 *   Identifiers: lowercase: 'generate', camelCase: 'generateAction', snake_case: 'generate_action', ALL_CAP: 'GENERATE', cache key: 'operation:generate:reportId'.
 *   Model Identifier Format: 'generate-{reportType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'createReport'; used in analytics.
 *   Example Usage: POST /api/generate in DataOrb.
 *   @example
 *   POST /api/generate { "type": "report" };
 *
 * - 'monitor': Monitors a process.
 *   Classifications: Monitoring; aligns with Prometheus standards.
 *   Identifiers: lowercase: 'monitor', camelCase: 'monitorAction', snake_case: 'monitor_action', ALL_CAP: 'MONITOR', cache key: 'operation:monitor:processId'.
 *   Model Identifier Format: 'monitor-{processType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'watch'; used in ops.
 *   Example Usage: GET /api/monitor in Trakfox.
 *   @example
 *   GET /api/monitor?id=123;
 *
 * - 'alert': Sends an alert.
 *   Classifications: Alerting; aligns with notification standards.
 *   Identifiers: lowercase: 'alert', camelCase: 'alertAction', snake_case: 'alert_action', ALL_CAP: 'ALERT', cache key: 'operation:alert:alertId'.
 *   Model Identifier Format: 'alert-{alertType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'notify'; used in monitoring.
 *   Example Usage: POST /api/alert in DnDHubs.
 *   @example
 *   POST /api/alert { "message": "warning" };
 *
 * - 'impersonate': Impersonates a user for support.
 *   Classifications: Impersonation; security standards.
 *   Identifiers: lowercase: 'impersonate', camelCase: 'impersonateAction', snake_case: 'impersonate_action', ALL_CAP: 'IMPERSONATE', cache key: 'operation:impersonate:userId'.
 *   Model Identifier Format: 'impersonate-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'loginAs'; used in admin.
 *   Example Usage: POST /api/impersonate in Trakfox.
 *   @example
 *   POST /api/impersonate { "userId": "123" };
 *
 * - 'archive': Archives a resource.
 *   Classifications: Archiving; data lifecycle.
 *   Identifiers: lowercase: 'archive', camelCase: 'archiveAction', snake_case: 'archive_action', ALL_CAP: 'ARCHIVE', cache key: 'operation:archive:resourceId'.
 *   Model Identifier Format: 'archive-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'storeAway'; used in storage.
 *   Example Usage: POST /api/archive in DnDHubs.
 *   @example
 *   POST /api/archive { "id": "123" };
 *
 * - 'restore': Restores from archive.
 *   Classifications: Restoration; backup standards.
 *   Identifiers: lowercase: 'restore', camelCase: 'restoreAction', snake_case: 'restore_action', ALL_CAP: 'RESTORE', cache key: 'operation:restore:resourceId'.
 *   Model Identifier Format: 'restore-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'recover'; used in backup.
 *   Example Usage: POST /api/restore in Trakfox.
 *   @example
 *   POST /api/restore { "id": "123" };
 *
 * - 'audit': Audits logs or actions.
 *   Classifications: Auditing; ISO 27001.
 *   Identifiers: lowercase: 'audit', camelCase: 'auditAction', snake_case: 'audit_action', ALL_CAP: 'AUDIT', cache key: 'operation:audit:logId'.
 *   Model Identifier Format: 'audit-{logType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reviewLogs'; used in compliance.
 *   Example Usage: GET /api/audit in DnDHubs.
 *   @example
 *   GET /api/audit?date=2025-08-11;
 *
 * - 'deploy': Deploys code or app.
 *   Classifications: Deployment; CI/CD standards.
 *   Identifiers: lowercase: 'deploy', camelCase: 'deployAction', snake_case: 'deploy_action', ALL_CAP: 'DEPLOY', cache key: 'operation:deploy:appId'.
 *   Model Identifier Format: 'deploy-{appType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'release'; used in devops.
 *   Example Usage: POST /api/deploy in Trakfox.
 *   @example
 *   POST /api/deploy { "version": "1.0" };
 *
 * - 'rollback': Rollbacks a deployment.
 *   Classifications: Rollback; CI/CD.
 *   Identifiers: lowercase: 'rollback', camelCase: 'rollbackAction', snake_case: 'rollback_action', ALL_CAP: 'ROLLBACK', cache key: 'operation:rollback:appId'.
 *   Model Identifier Format: 'rollback-{appType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'revert'; used in devops.
 *   Example Usage: POST /api/rollback in DnDHubs.
 *   @example
 *   POST /api/rollback { "version": "0.9" };
 *
 * - 'syncData': Syncs data.
 *   Classifications: Data synchronization; aligns with sync protocols.
 *   Identifiers: lowercase: 'syncdata', camelCase: 'syncDataAction', snake_case: 'sync_data', ALL_CAP: 'SYNCDATA', cache key: 'operation:syncdata:dataId'.
 *   Model Identifier Format: 'syncdata-{dataType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'synchronize'; used in integrations.
 *   Example Usage: POST /api/syncData in HealthOrb.
 *   @example
 *   POST /api/syncData { "source": "dhis2" };
 *
 * - 'expressFrustration': Expresses frustration.
 *   Classifications: Sentiment analysis; NLP standards.
 *   Identifiers: lowercase: 'expressfrustration', camelCase: 'expressFrustrationAction', snake_case: 'express_frustration', ALL_CAP: 'EXPRESSFRUSTRATION', cache key: 'sentiment:expressfrustration:userId'.
 *   Model Identifier Format: 'expressfrustration-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'complainSentiment'; used in feedback.
 *   Example Usage: POST /api/expressFrustration in Trakfox.
 *   @example
 *   POST /api/expressFrustration { "text": "bad" };
 *
 * - 'expressSatisfaction': Expresses satisfaction.
 *   Classifications: Sentiment; NPS.
 *   Identifiers: lowercase: 'expresssatisfaction', camelCase: 'expressSatisfactionAction', snake_case: 'express_satisfaction', ALL_CAP: 'EXPRESSSATISFACTION', cache key: 'sentiment:expresssatisfaction:userId'.
 *   Model Identifier Format: 'expresssatisfaction-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'praise'; used in feedback.
 *   Example Usage: POST /api/expressSatisfaction in DnDHubs.
 *   @example
 *   POST /api/expressSatisfaction { "text": "good" };
 *
 * - 'provideSuggestion': Provides a suggestion.
 *   Classifications: Suggestion; user input.
 *   Identifiers: lowercase: 'providesuggestion', camelCase: 'provideSuggestionAction', snake_case: 'provide_suggestion', ALL_CAP: 'PROVIDESUGGESTION', cache key: 'sentiment:providesuggestion:userId'.
 *   Model Identifier Format: 'providesuggestion-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'suggest'; used in feedback.
 *   Example Usage: POST /api/provideSuggestion in Trakfox.
 *   @example
 *   POST /api/provideSuggestion { "idea": "new feature" };
 *
 * - 'expressConfusion': Expresses confusion.
 *   Classifications: Sentiment; UX feedback.
 *   Identifiers: lowercase: 'expressconfusion', camelCase: 'expressConfusionAction', snake_case: 'express_confusion', ALL_CAP: 'EXPRESSCONFUSION', cache key: 'sentiment:expressconfusion:userId'.
 *   Model Identifier Format: 'expressconfusion-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'unclear'; used in support.
 *   Example Usage: POST /api/expressConfusion in DnDHubs.
 *   @example
 *   POST /api/expressConfusion { "text": "confusing" };
 *
 * - 'expressLoyalty': Expresses loyalty.
 *   Classifications: Loyalty; marketing.
 *   Identifiers: lowercase: 'expressloyalty', camelCase: 'expressLoyaltyAction', snake_case: 'express_loyalty', ALL_CAP: 'EXPRESSLOYALTY', cache key: 'sentiment:expressloyalty:userId'.
 *   Model Identifier Format: 'expressloyalty-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'showLoyalty'; used in retention.
 *   Example Usage: POST /api/expressLoyalty in Trakfox.
 *   @example
 *   POST /api/expressLoyalty { "text": "loyal" };
 *
 * - 'disappoint': Expresses disappointment.
 *   Classifications: Sentiment; negative feedback.
 *   Identifiers: lowercase: 'disappoint', camelCase: 'disappointAction', snake_case: 'disappoint_action', ALL_CAP: 'DISAPPOINT', cache key: 'sentiment:disappoint:userId'.
 *   Model Identifier Format: 'disappoint-{userType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'disatisfied'; used in feedback.
 *   Example Usage: POST /api/disappoint in DnDHubs.
 *   @example
 *   POST /api/disappoint { "text": "disappointed" };
 *
 * - 'start': Starts a workflow.
 *   Classifications: Workflow initiation; BPMN.
 *   Identifiers: lowercase: 'start', camelCase: 'startAction', snake_case: 'start_action', ALL_CAP: 'START', cache key: 'workflow:start:workflowId'.
 *   Model Identifier Format: 'start-{workflowType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'begin'; used in processes.
 *   Example Usage: POST /api/start in Trakfox.
 *   @example
 *   POST /api/start { "workflow": "process" };
 *
 * - 'pause': Pauses a workflow.
 *   Classifications: Workflow control; BPMN.
 *   Identifiers: lowercase: 'pause', camelCase: 'pauseAction', snake_case: 'pause_action', ALL_CAP: 'PAUSE', cache key: 'workflow:pause:workflowId'.
 *   Model Identifier Format: 'pause-{workflowType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'hold'; used in processes.
 *   Example Usage: POST /api/pause in DnDHubs.
 *   @example
 *   POST /api/pause { "workflowId": "123" };
 *
 * - 'resume': Resumes a workflow.
 *   Classifications: Workflow control; BPMN.
 *   Identifiers: lowercase: 'resume', camelCase: 'resumeAction', snake_case: 'resume_action', ALL_CAP: 'RESUME', cache key: 'workflow:resume:workflowId'.
 *   Model Identifier Format: 'resume-{workflowType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'continue'; used in processes.
 *   Example Usage: POST /api/resume in Trakfox.
 *   @example
 *   POST /api/resume { "workflowId": "123" };
 *
 * - 'complete': Completes a workflow.
 *   Classifications: Workflow completion; BPMN.
 *   Identifiers: lowercase: 'complete', camelCase: 'completeAction', snake_case: 'complete_action', ALL_CAP: 'COMPLETE', cache key: 'workflow:complete:workflowId'.
 *   Model Identifier Format: 'complete-{workflowType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'finish'; used in processes.
 *   Example Usage: POST /api/complete in DnDHubs.
 *   @example
 *   POST /api/complete { "workflowId": "123" };
 *
 * - 'patch': Patches a resource.
 *   Classifications: Partial update; RESTful PATCH.
 *   Identifiers: lowercase: 'patch', camelCase: 'patchAction', snake_case: 'patch_action', ALL_CAP: 'PATCH', cache key: 'mutable:patch:resourceId'.
 *   Model Identifier Format: 'patch-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'partialUpdate'; used in APIs.
 *   Example Usage: PATCH /api/patch in Trakfox.
 *   @example
 *   PATCH /api/patch { "field": "value" };
 *
 * - 'clear': Clears data or cache.
 *   Classifications: Clearing; aligns with cache invalidation.
 *   Identifiers: lowercase: 'clear', camelCase: 'clearAction', snake_case: 'clear_action', ALL_CAP: 'CLEAR', cache key: 'mutable:clear:resourceId'.
 *   Model Identifier Format: 'clear-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'reset'; used in storage.
 *   Example Usage: POST /api/clear in DnDHubs.
 *   @example
 *   POST /api/clear { "cacheKey": "key" };
 *
 * - 'submit': Submits a form.
 *   Classifications: Form submission; HTML5.
 *   Identifiers: lowercase: 'submit', camelCase: 'submitAction', snake_case: 'submit_action', ALL_CAP: 'SUBMIT', cache key: 'mutable:submit:formId'.
 *   Model Identifier Format: 'submit-{formType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sendForm'; used in UI.
 *   Example Usage: POST /api/submit in Trakfox.
 *   @example
 *   POST /api/submit { "data": {} };
 *
 * - 'report': Generates or submits a report.
 *   Classifications: Reporting; aligns with reporting tools.
 *   Identifiers: lowercase: 'report', camelCase: 'reportAction', snake_case: 'report_action', ALL_CAP: 'REPORT', cache key: 'mutable:report:reportId'.
 *   Model Identifier Format: 'report-{reportType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'generateReport'; used in analytics.
 *   Example Usage: POST /api/report in DataOrb.
 *   @example
 *   POST /api/report { "type": "sales" };
 *
 * - 'upload': Uploads a file.
 *   Classifications: File upload; HTTP multipart.
 *   Identifiers: lowercase: 'upload', camelCase: 'uploadAction', snake_case: 'upload_action', ALL_CAP: 'UPLOAD', cache key: 'mutable:upload:fileId'.
 *   Model Identifier Format: 'upload-{fileType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'sendFile'; used in storage.
 *   Example Usage: POST /api/upload in Trakfox.
 *   @example
 *   POST /api/upload formData;
 *
 * - 'invest': Invests in something.
 *   Classifications: Investment; financial standards.
 *   Identifiers: lowercase: 'invest', camelCase: 'investAction', snake_case: 'invest_action', ALL_CAP: 'INVEST', cache key: 'mutable:invest:investmentId'.
 *   Model Identifier Format: 'invest-{investmentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'fund'; used in finance.
 *   Example Usage: POST /api/invest in DnDHubs.
 *   @example
 *   POST /api/invest { "amount": 1000 };
 *
 * - 'send': Sends data or message.
 *   Classifications: Sending; SMTP/HTTP.
 *   Identifiers: lowercase: 'send', camelCase: 'sendAction', snake_case: 'send_action', ALL_CAP: 'SEND', cache key: 'mutable:send:messageId'.
 *   Model Identifier Format: 'send-{messageType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'transmit'; used in communication.
 *   Example Usage: POST /api/send in Trakfox.
 *   @example
 *   POST /api/send { "message": "hello" };
 *
 * - 'edit': Edits a resource.
 *   Classifications: Editing; aligns with update.
 *   Identifiers: lowercase: 'edit', camelCase: 'editAction', snake_case: 'edit_action', ALL_CAP: 'EDIT', cache key: 'mutable:edit:resourceId'.
 *   Model Identifier Format: 'edit-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'modify'; used in UI.
 *   Example Usage: PATCH /api/edit in DnDHubs.
 *   @example
 *   PATCH /api/edit { "id": "123" };
 *
 * - 'upsert': Upserts a record.
 *   Classifications: Upsert; database standards.
 *   Identifiers: lowercase: 'upsert', camelCase: 'upsertAction', snake_case: 'upsert_action', ALL_CAP: 'UPSERT', cache key: 'mutable:upsert:resourceId'.
 *   Model Identifier Format: 'upsert-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'insertOrUpdate'; used in DB.
 *   Example Usage: POST /api/upsert in Trakfox.
 *   @example
 *   POST /api/upsert { "data": {} };
 *
 * - 'import': Imports data.
 *   Classifications: Import; ETL.
 *   Identifiers: lowercase: 'import', camelCase: 'importAction', snake_case: 'import_action', ALL_CAP: 'IMPORT', cache key: 'mutable:import:dataId'.
 *   Model Identifier Format: 'import-{dataType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'loadData'; used in integrations.
 *   Example Usage: POST /api/import in HealthOrb.
 *   @example
 *   POST /api/import { "file": "data.csv" };
 *
 * - 'print': Prints a document.
 *   Classifications: Printing; browser print.
 *   Identifiers: lowercase: 'print', camelCase: 'printAction', snake_case: 'print_action', ALL_CAP: 'PRINT', cache key: 'mutable:print:documentId'.
 *   Model Identifier Format: 'print-{documentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'outputPrint'; used in reports.
 *   Example Usage: POST /api/print in Trakfox.
 *   @example
 *   POST /api/print { "id": "123" };
 *
 * - 'copy': Copies content.
 *   Classifications: Copy; clipboard standards.
 *   Identifiers: lowercase: 'copy', camelCase: 'copyAction', snake_case: 'copy_action', ALL_CAP: 'COPY', cache key: 'mutable:copy:resourceId'.
 *   Model Identifier Format: 'copy-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'duplicate'; used in UI.
 *   Example Usage: POST /api/copy in DnDHubs.
 *   @example
 *   POST /api/copy { "text": "copy this" };
 *
 * - 'drag': Drags an element.
 *   Classifications: Drag and drop; HTML5.
 *   Identifiers: lowercase: 'drag', camelCase: 'dragAction', snake_case: 'drag_action', ALL_CAP: 'DRAG', cache key: 'mutable:drag:elementId'.
 *   Model Identifier Format: 'drag-{elementType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'move'; used in UI.
 *   Example Usage: EVENT /api/drag in Trakfox.
 *   @example
 *   trackEvent('drag', { element: "item" };
 *
 * - 'drop': Drops an element.
 *   Classifications: Drag and drop; HTML5.
 *   Identifiers: lowercase: 'drop', camelCase: 'dropAction', snake_case: 'drop_action', ALL_CAP: 'DROP', cache key: 'mutable:drop:elementId'.
 *   Model Identifier Format: 'drop-{elementType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'place'; used in UI.
 *   Example Usage: EVENT /api/drop in Trakfox.
 *   @example
 *   trackEvent('drop', { target: "zone" };
 *
 * - 'paste': Pastes content.
 *   Classifications: Paste; clipboard.
 *   Identifiers: lowercase: 'paste', camelCase: 'pasteAction', snake_case: 'paste_action', ALL_CAP: 'PASTE', cache key: 'mutable:paste:resourceId'.
 *   Model Identifier Format: 'paste-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'insert'; used in editors.
 *   Example Usage: POST /api/paste in DnDHubs.
 *   @example
 *   POST /api/paste { "text": "pasted" };
 *
 * - 'resize': Resizes an element.
 *   Classifications: Resize; CSS standards.
 *   Identifiers: lowercase: 'resize', camelCase: 'resizeAction', snake_case: 'resize_action', ALL_CAP: 'RESIZE', cache key: 'mutable:resize:elementId'.
 *   Model Identifier Format: 'resize-{elementType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'scale'; used in UI.
 *   Example Usage: EVENT /api/resize in Trakfox.
 *   @example
 *   trackEvent('resize', { size: "new" };
 *
 * - 'list': Lists items.
 *   Classifications: Listing; RESTful GET.
 *   Identifiers: lowercase: 'list', camelCase: 'listAction', snake_case: 'list_action', ALL_CAP: 'LIST', cache key: 'quotable:list:resourceId'.
 *   Model Identifier Format: 'list-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'queryList'; used in APIs.
 *   Example Usage: GET /api/list in DnDHubs.
 *   @example
 *   GET /api/list?type=users;
 *
 * - 'export': Exports data.
 *   Classifications: Export; ETL.
 *   Identifiers: lowercase: 'export', camelCase: 'exportAction', snake_case: 'export_action', ALL_CAP: 'EXPORT', cache key: 'quotable:export:dataId'.
 *   Model Identifier Format: 'export-{dataType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'downloadData'; used in reports.
 *   Example Usage: GET /api/export in Trakfox.
 *   @example
 *   GET /api/export?format=csv;
 *
 * - 'stream': Streams data.
 *   Classifications: Streaming; WebSockets.
 *   Identifiers: lowercase: 'stream', camelCase: 'streamAction', snake_case: 'stream_action', ALL_CAP: 'STREAM', cache key: 'subscribable:stream:streamId'.
 *   Model Identifier Format: 'stream-{streamType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'liveStream'; used in real-time.
 *   Example Usage: GET /api/stream in DnDHubs.
 *   @example
 *   GET /api/stream?channel=updates;
 *
 * - 'observe': Observes changes.
 *   Classifications: Observation; RxJS standards.
 *   Identifiers: lowercase: 'observe', camelCase: 'observeAction', snake_case: 'observe_action', ALL_CAP: 'OBSERVE', cache key: 'subscribable:observe:resourceId'.
 *   Model Identifier Format: 'observe-{resourceType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'watchChanges'; used in reactive.
 *   Example Usage: POST /api/observe in Trakfox.
 *   @example
 *   POST /api/observe { "resource": "data" };
 *
 * - 'listen': Listens for events.
 *   Classifications: Event listening; aligns with event listeners.
 *   Identifiers: lowercase: 'listen', camelCase: 'listenAction', snake_case: 'listen_action', ALL_CAP: 'LISTEN', cache key: 'subscribable:listen:eventId'.
 *   Model Identifier Format: 'listen-{eventType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'subscribeEvent'; used in pub/sub.
 *   Example Usage: POST /api/listen in DnDHubs.
 *   @example
 *   POST /api/listen { "event": "update" };
 */
export type ActionVerbTaxonomy = CoreActionVerb | CustomActionVerb;

/** Basic data manipulation actions aligning with RESTful APIs */
export type CrudActionVerbTaxonomy = 'create' | 'read' | 'update' | 'delete';

/** Authentication and session management actions */
export type AuthActionVerbTaxonomy = 'login' | 'logout' | 'signup' | 'thumbprint' | 'resetPassword' | 'forgotPassword' | 'verifyPassword' | 'unlockSession' | 'enableMFA' | 'verifyMFA' | 'loginSSO' | 'verifyIdentity' | 'delegate' | 'revokeAccess';

/** Data computation and transformation actions */
export type ComputeActionVerbTaxonomy = 'count' | 'aggregate' | 'calculate' | 'transform';

/** Tracking and analysis actions */
export type AnalyticsActionVerbTaxonomy = 'track';

/** User engagement and interaction actions */
export type EngageActionVerbTaxonomy = 'view' | 'like' | 'clap' | 'share' | 'quote' | 'repost' | 'vote' | 'attend' | 'boost' | 'collaborate' | 'chat' | 'enroll' | 'react';

/** User feedback and response actions */
export type FeedbackActionVerbTaxonomy = 'rate' | 'review' | 'comment' | 'reply' | 'upvote' | 'downvote' | 'survey' | 'poll' | 'flag' | 'annotate' | 'message' | 'endorse' | 'acknowledge' | 'skipFeedback';

/** Actions indicating user churn or disengagement */
export type ChurnActionVerbTaxonomy = 'block' | 'unsubscribe' | 'blacklist' | 'unfollow' | 'deactivate' | 'complain' | 'cancel' | 'switch' | 'ignore' | 'mark';

/** Initial user interest indicators */
export type SuspectActionVerbTaxonomy = 'hover' | 'visit' | 'viewAd' | 'impression' | 'socialView' | 'searchDisplay' | 'mentionExposure';

/** Exploration and discovery actions */
export type ExploreActionVerbTaxonomy = 'click' | 'save' | 'follow' | 'whitelist' | 'wishlist' | 'pin' | 'compare' | 'check' | 'addToCollection' | 'search' | 'bookmark' | 'expressInterest' | 'browse' | 'filter' | 'sort' | 'preview' | 'scroll' | 'watch' | 'dismiss' | 'inspect' | 'focus' | 'unbookmark' | 'unpin' | 'playMedia';

/** Lead generation actions */
export type LeadActionVerbTaxonomy = 'registerEvent' | 'book' | 'schedule' | 'apply' | 'download' | 'subscribe' | 'configure' | 'demo' | 'trial' | 'contact' | 'qualify' | 'requestQuote' | 'requestDemo' | 'callBack';

/** Prospect conversion actions */
export type ProspectActionVerbTaxonomy = 'confirm' | 'verify' | 'order' | 'negotiate' | 'test' | 'addToCart' | 'reviewCart' | 'applyCoupon';

/** Customer acquisition and usage actions */
export type CustomerActionVerbTaxonomy = 'buy' | 'pay' | 'checkin' | 'rent' | 'lease' | 'activate' | 'setup' | 'utilize' | 'use' | 'join' | 'shareUsage';

/** Support and maintenance actions */
export type SupporterActionVerbTaxonomy = 'return' | 'exchange' | 'downgrade' | 'openTicket' | 'chatSupport' | 'emailSupport' | 'callSupport' | 'selfResolve' | 'escalate' | 'provideSupportFeedback' | 'diagnose' | 'reportBug' | 'troubleshoot' | 'supportRequest' | 'renew' | 'upgrade' | 'reengage' | 'redeem' | 'cancelSubscription' | 'pauseSubscription' | 'closeTicket';

/** Advocacy and promotion actions */
export type AdvocateActionVerbTaxonomy = 'refer' | 'promote' | 'affiliate' | 'volunteer' | 'testimonial' | 'shareContent' | 'participateCommunity' | 'contribute' | 'mentor' | 'recruit' | 'shareStory' | 'addContent' | 'shareLink' | 'invite' | 'planEvent';

/** Operational and administrative actions */
export type OperationActionVerbTaxonomy = 'sell' | 'fulfill' | 'ship' | 'restock' | 'receiveReturn' | 'issueRefund' | 'trackInventory' | 'coordinateDelivery' | 'resolveDispute' | 'broadcast' | 'draft' | 'publish' | 'approve' | 'reject' | 'generate' | 'monitor' | 'alert' | 'impersonate' | 'archive' | 'restore' | 'audit' | 'deploy' | 'rollback' | 'syncData';

/** Sentiment expression actions */
export type SentimentActionVerbTaxonomy = 'expressFrustration' | 'expressSatisfaction' | 'provideSuggestion' | 'expressConfusion' | 'expressLoyalty' | 'disappoint';

/** Workflow control actions */
export type WorkflowActionVerbTaxonomy = 'start' | 'pause' | 'resume' | 'complete';

/** Mutable data operations */
export type MutableActionVerbTaxonomy = 'patch' | 'clear' | 'submit' | 'report' | 'upload' | 'invest' | 'send' | 'edit' | 'upsert' | 'import' | 'print' | 'copy' | 'drag' | 'drop' | 'paste' | 'resize';

/** Data listing and export actions */
export type QuotableActionVerbTaxonomy = 'list' | 'export';

/** Subscription and observation actions */
export type SubscribableActionVerbTaxonomy = 'stream' | 'observe' | 'listen';

export type CoreActionVerb = 
  | CrudActionVerbTaxonomy
  | AuthActionVerbTaxonomy
  | ComputeActionVerbTaxonomy
  | AnalyticsActionVerbTaxonomy
  | EngageActionVerbTaxonomy
  | FeedbackActionVerbTaxonomy
  | ChurnActionVerbTaxonomy
  | SuspectActionVerbTaxonomy
  | ExploreActionVerbTaxonomy
  | LeadActionVerbTaxonomy
  | ProspectActionVerbTaxonomy
  | CustomerActionVerbTaxonomy
  | SupporterActionVerbTaxonomy
  | AdvocateActionVerbTaxonomy
  | OperationActionVerbTaxonomy
  | SentimentActionVerbTaxonomy
  | WorkflowActionVerbTaxonomy
  | MutableActionVerbTaxonomy
  | QuotableActionVerbTaxonomy
  | SubscribableActionVerbTaxonomy;

export type CustomActionVerb = string & { __actionverb?: 'ActionVerb' };