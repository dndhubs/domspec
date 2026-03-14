/**
 * Union type representing PatronJourneyStateTaxonomy in the DOMSpec ecosystem.
 * Defines standardized states in the patron journey for customer lifecycle management across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with CRM standards (e.g., Salesforce customer stages, marketing funnel models like AIDA) to ensure consistent tracking of user progression in APIs, analytics, and integrations (e.g., Trakfox loyalty programs, HealthOrb DHIS2 patient engagement by August 11, 2025). Supports validation utilities in @domspecs/core for state transitions in patron journeys.
 *
 * - 'suspect': Initial awareness stage where potential patrons are identified but not engaged.
 *   Classifications: Marketing funnel (awareness stage), aligns with CRM suspect qualification.
 *   Identifiers: lowercase: 'suspect', camelCase: 'suspectState', snake_case: 'suspect_state', ALL_CAP: 'SUSPECT', cache key: 'state:suspect:patronId'.
 *   Model Identifier Format: 'suspect-{patronId}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'prospect', 'lead candidate'; used in Trakfox for initial user tracking, DnDHubs for marketplace visitors.
 *   @example
 *   GET /api/patrons?state=suspect // Fetch suspect patrons in Trakfox
 *
 * - 'explore': Stage where patrons are browsing or investigating offerings.
 *   Classifications: Marketing funnel (interest stage), aligns with CRM exploration tracking.
 *   Identifiers: lowercase: 'explore', camelCase: 'exploreState', snake_case: 'explore_state', ALL_CAP: 'EXPLORE', cache key: 'state:explore:patronId'.
 *   Model Identifier Format: 'explore-{patronId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'browse', 'investigate'; used in DataOrb for dashboard explorers, GEOCoLab for user exploration ($99 tier).
 *   @example
 *   POST /api/patrons/123 { "state": "explore" } // Update to explore state in DataOrb
 *
 * - 'lead': Qualified patron showing interest and potential for conversion.
 *   Classifications: CRM lead stage, aligns with Salesforce lead qualification.
 *   Identifiers: lowercase: 'lead', camelCase: 'leadState', snake_case: 'lead_state', ALL_CAP: 'LEAD', cache key: 'state:lead:patronId'.
 *   Model Identifier Format: 'lead-{patronId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'qualified lead', 'opportunity'; used in Trakfox for lead generation, HealthOrb for patient leads.
 *   @example
 *   GET /api/leads?state=lead // Fetch leads in Trakfox
 *
 * - 'prospect': Patron actively considering purchase or commitment.
 *   Classifications: Marketing funnel (consideration stage), aligns with CRM prospect nurturing.
 *   Identifiers: lowercase: 'prospect', camelCase: 'prospectState', snake_case: 'prospect_state', ALL_CAP: 'PROSPECT', cache key: 'state:prospect:patronId'.
 *   Model Identifier Format: 'prospect-{patronId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'hot lead', 'potential customer'; used in DnDHubs for marketplace prospects, GEOCoLab for advanced users ($2,497 tier).
 *   @example
 *   POST /api/prospects { "state": "prospect" } // Add prospect in DnDHubs
 *
 * - 'customer': Patron who has made a purchase or commitment.
 *   Classifications: CRM customer stage, aligns with post-purchase engagement.
 *   Identifiers: lowercase: 'customer', camelCase: 'customerState', snake_case: 'customer_state', ALL_CAP: 'CUSTOMER', cache key: 'state:customer:patronId'.
 *   Model Identifier Format: 'customer-{patronId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'buyer', 'client'; used in Trakfox for loyal customers, HealthOrb for active patients.
 *   @example
 *   GET /api/customers?state=customer // Fetch customers in Trakfox
 *
 * - 'supporter': Patron providing ongoing support or advocacy.
 *   Classifications: CRM advocacy stage, aligns with loyalty programs.
 *   Identifiers: lowercase: 'supporter', camelCase: 'supporterState', snake_case: 'supporter_state', ALL_CAP: 'SUPPORTER', cache key: 'state:supporter:patronId'.
 *   Model Identifier Format: 'supporter-{patronId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'fan', 'loyalist'; used in DnDHubs for community supporters, Trakfox for support ticket users.
 *   @example
 *   POST /api/supporters { "state": "supporter" } // Promote to supporter in DnDHubs
 *
 * - 'advocate': Patron actively promoting or referring others.
 *   Classifications: Marketing funnel (advocacy stage), aligns with referral programs.
 *   Identifiers: lowercase: 'advocate', camelCase: 'advocateState', snake_case: 'advocate_state', ALL_CAP: 'ADVOCATE', cache key: 'state:advocate:patronId'.
 *   Model Identifier Format: 'advocate-{patronId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'ambassador', 'referrer'; used in GEOCoLab for user advocates ($99 tier), Trakfox for referral advocates.
 *   @example
 *   GET /api/advocates?state=advocate // Fetch advocates in GEOCoLab
 */
export type PatronJourneyStateTaxonomy = 'suspect' | 'explore' | 'lead' | 'prospect' | 'customer' | 'supporter' | 'advocate';