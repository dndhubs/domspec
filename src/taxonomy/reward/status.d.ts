/**
 * Union type representing RewardStatusTaxonomy in the DOMSpec ecosystem.
 * Defines standardized statuses for rewards across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with lifecycle management standards (e.g., ITIL for service states, ISO 27001 for data security, and e-commerce reward systems like loyalty programs) to ensure consistent reward tracking in APIs, workflows, and storage. Supports validation utilities in @domspecs/core for reward state transitions (e.g., Trakfox loyalty rewards, HealthOrb incentive programs by August 11, 2025).
 *
 * - 'pending': Reward is awaiting activation or approval.
 *   Classifications: Workflow standards (BPMN pending), aligns with e-commerce pending states.
 *   Identifiers: lowercase: 'pending', camelCase: 'pendingStatus', snake_case: 'pending_status', ALL_CAP: 'PENDING', cache key: 'status:pending:rewardId'.
 *   Model Identifier Format: 'pending-{rewardType}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'awaiting', 'in_review'; used in Trakfox for pending loyalty rewards, DnDHubs for approval-pending offers.
 *   @example
 *   GET /api/rewards?status=pending // Fetch pending rewards in Trakfox
 *
 * - 'active': Reward is available for use or redemption.
 *   Classifications: Active state in lifecycle management, aligns with ITIL operational states.
 *   Identifiers: lowercase: 'active', camelCase: 'activeStatus', snake_case: 'active_status', ALL_CAP: 'ACTIVE', cache key: 'status:active:rewardId'.
 *   Model Identifier Format: 'active-{rewardType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'available', 'valid'; used in HealthOrb for active patient incentives, GEOCoLab for active user rewards ($99 tier).
 *   @example
 *   GET /api/rewards?status=active // Fetch active rewards in HealthOrb
 *
 * - 'inactive': Reward is temporarily unavailable or paused.
 *   Classifications: Inactive state, aligns with ISO 27001 restricted access.
 *   Identifiers: lowercase: 'inactive', camelCase: 'inactiveStatus', snake_case: 'inactive_status', ALL_CAP: 'INACTIVE', cache key: 'status:inactive:rewardId'.
 *   Model Identifier Format: 'inactive-{rewardType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'paused', 'disabled'; used in DnDHubs for inactive promotions, Trakfox for paused loyalty points.
 *   @example
 *   POST /api/rewards/123 { "status": "inactive" } // Set reward inactive in DnDHubs
 *
 * - 'awarded': Reward has been granted but not yet redeemed.
 *   Classifications: Reward lifecycle, aligns with e-commerce awarded states.
 *   Identifiers: lowercase: 'awarded', camelCase: 'awardedStatus', snake_case: 'awarded_status', ALL_CAP: 'AWARDED', cache key: 'status:awarded:rewardId'.
 *   Model Identifier Format: 'awarded-{rewardType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'granted', 'earned'; used in Trakfox loyalty program for awarded points, HealthOrb for patient rewards.
 *   @example
 *   POST /api/rewards { "status": "awarded", "userId": "456" } // Award reward in Trakfox
 *
 * - 'redeemed': Reward has been used or claimed.
 *   Classifications: Redemption state, aligns with loyalty program standards.
 *   Identifiers: lowercase: 'redeemed', camelCase: 'redeemedStatus', snake_case: 'redeemed_status', ALL_CAP: 'REDEEMED', cache key: 'status:redeemed:rewardId'.
 *   Model Identifier Format: 'redeemed-{rewardType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'claimed', 'used'; used in DnDHubs marketplace for redeemed coupons (5-10% fees), GEOCoLab for redeemed credits ($2,497 tier).
 *   @example
 *   POST /api/rewards/789/redeem // Redeem reward in DnDHubs
 *
 * - 'expired': Reward has passed its validity period.
 *   Classifications: Expiration state, aligns with OAuth token expiration.
 *   Identifiers: lowercase: 'expired', camelCase: 'expiredStatus', snake_case: 'expired_status', ALL_CAP: 'EXPIRED', cache key: 'status:expired:rewardId'.
 *   Model Identifier Format: 'expired-{rewardType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'invalid', 'lapsed'; used in Trakfox for expired rewards, HealthOrb for expired incentives.
 *   @example
 *   GET /api/rewards?status=expired // Fetch expired rewards in Trakfox
 *
 * - 'cancelled': Reward has been revoked or cancelled.
 *   Classifications: Cancellation state, aligns with e-commerce cancellation.
 *   Identifiers: lowercase: 'cancelled', camelCase: 'cancelledStatus', snake_case: 'cancelled_status', ALL_CAP: 'CANCELLED', cache key: 'status:cancelled:rewardId'.
 *   Model Identifier Format: 'cancelled-{rewardType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'revoked', 'voided'; used in DnDHubs for cancelled offers, Trakfox for cancelled loyalty rewards.
 *   @example
 *   POST /api/rewards/101/cancel // Cancel reward in DnDHubs
 *
 * - 'depleted': Reward pool or quantity is exhausted.
 *   Classifications: Inventory depletion, aligns with SCOR supply chain.
 *   Identifiers: lowercase: 'depleted', camelCase: 'depletedStatus', snake_case: 'depleted_status', ALL_CAP: 'DEPLETED', cache key: 'status:depleted:rewardId'.
 *   Model Identifier Format: 'depleted-{rewardType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'exhausted', 'out_of_stock'; used in GEOCoLab for depleted reward pools ($99 tier), Trakfox for depleted promotions.
 *   @example
 *   GET /api/rewards?status=depleted // Fetch depleted rewards in GEOCoLab
 */
export type RewardStatusTaxonomy = CoreRewardStatus | CustomRewardStatus;

/** Core reward statuses */
export type CoreRewardStatus = 'pending' | 'active' | 'inactive' | 'awarded' | 'redeemed' | 'expired' | 'cancelled' | 'depleted';

export type CustomRewardStatus = string & { __rewardStatus?: 'rewardStatus' };