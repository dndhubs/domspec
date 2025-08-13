/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/reward/reward-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/RewardTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20RewardTaxonomy
 * Union type representing RewardTaxonomy in the DOMSpec ecosystem.
 * Defines standardized reward types for loyalty, incentive, and engagement programs across DNDHUBS platforms like Trakfox, DataOrb, DnDHubs, HealthOrb, and GEOCoLab. Aligns with e-commerce standards (e.g., PCI DSS for financial rewards), digital marketing frameworks, and gamification principles to ensure consistent reward handling in APIs, workflows, and storage. Supports validation utilities in @domspecs/core for reward type validation (e.g., Trakfox loyalty programs, HealthOrb patient incentives by August 11, 2025).
 *
 * - 'cash': Monetary reward in fiat currency.
 *   Classifications: Financial standards (ISO 20022), PCI DSS compliant.
 *   Identifiers: lowercase: 'cash', camelCase: 'cashReward', snake_case: 'cash_reward', ALL_CAP: 'CASH', cache key: 'reward:cash:rewardId'.
 *   Model Identifier Format: 'cash-{rewardId}-{timestamp}' (kebab-case for database storage like PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'money', 'currency'; used in Trakfox for cash payouts, DnDHubs for marketplace cash rewards (5-10% fees).
 *   @example
 *   POST /api/rewards { "type": "cash", "amount": 50 } // Create cash reward in Trakfox
 *
 * - 'cashback': Percentage-based refund on purchases.
 *   Classifications: E-commerce standards, aligns with loyalty program frameworks.
 *   Identifiers: lowercase: 'cashback', camelCase: 'cashbackReward', snake_case: 'cashback_reward', ALL_CAP: 'CASHBACK', cache key: 'reward:cashback:rewardId'.
 *   Model Identifier Format: 'cashback-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rebate', 'refund'; used in DnDHubs for purchase cashbacks, Trakfox for loyalty cashbacks.
 *   @example
 *   POST /api/rewards { "type": "cashback", "percentage": 5 } // Create cashback reward in DnDHubs
 *
 * - 'cryptocurrency': Digital currency reward (e.g., Bitcoin, Ethereum).
 *   Classifications: Blockchain standards, aligns with digital asset frameworks.
 *   Identifiers: lowercase: 'cryptocurrency', camelCase: 'cryptoCurrencyReward', snake_case: 'cryptocurrency_reward', ALL_CAP: 'CRYPTOCURRENCY', cache key: 'reward:cryptocurrency:rewardId'.
 *   Model Identifier Format: 'cryptocurrency-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'crypto', 'token'; used in GEOCoLab for crypto-based incentives ($2,497 tier), Trakfox for blockchain rewards.
 *   @example
 *   POST /api/rewards { "type": "cryptocurrency", "coin": "ETH" } // Create crypto reward in GEOCoLab
 *
 * - 'loan': Credit or loan-based reward.
 *   Classifications: Financial standards (ISO 20022), lending regulations.
 *   Identifiers: lowercase: 'loan', camelCase: 'loanReward', snake_case: 'loan_reward', ALL_CAP: 'LOAN', cache key: 'reward:loan:rewardId'.
 *   Model Identifier Format: 'loan-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'credit', 'advance'; used in DnDHubs for micro-loan rewards, Trakfox for user credit incentives.
 *   @example
 *   POST /api/rewards { "type": "loan", "amount": 1000 } // Create loan reward in DnDHubs
 *
 * - 'commission': Earnings based on sales or referrals.
 *   Classifications: E-commerce standards, aligns with affiliate marketing frameworks.
 *   Identifiers: lowercase: 'commission', camelCase: 'commissionReward', snake_case: 'commission_reward', ALL_CAP: 'COMMISSION', cache key: 'reward:commission:rewardId'.
 *   Model Identifier Format: 'commission-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'referral', 'fee'; used in Trakfox for affiliate commissions, DnDHubs for seller commissions (5-10% fees).
 *   @example
 *   POST /api/rewards { "type": "commission", "rate": 10 } // Create commission reward in Trakfox
 *
 * - 'boosterpoints': Points to accelerate user progress or benefits.
 *   Classifications: Gamification standards, aligns with loyalty point systems.
 *   Identifiers: lowercase: 'boosterpoints', camelCase: 'boosterPointsReward', snake_case: 'booster_points_reward', ALL_CAP: 'BOOSTERPOINTS', cache key: 'reward:boosterpoints:rewardId'.
 *   Model Identifier Format: 'boosterpoints-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'boost', 'accelerator'; used in Trakfox for user progression, HealthOrb for patient engagement points.
 *   @example
 *   POST /api/rewards { "type": "boosterpoints", "points": 100 } // Award booster points in Trakfox
 *
 * - 'reputationpoints': Points reflecting user reputation or trust.
 *   Classifications: Gamification standards, aligns with social trust systems.
 *   Identifiers: lowercase: 'reputationpoints', camelCase: 'reputationPointsReward', snake_case: 'reputation_points_reward', ALL_CAP: 'REPUTATIONPOINTS', cache key: 'reward:reputationpoints:rewardId'.
 *   Model Identifier Format: 'reputationpoints-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'trust', 'credibility'; used in DnDHubs for seller reputation, GEOCoLab for user reputation ($99 tier).
 *   @example
 *   POST /api/rewards { "type": "reputationpoints", "points": 50 } // Award reputation points in DnDHubs
 *
 * - 'visibilitypoints': Points increasing user or content visibility.
 *   Classifications: Gamification standards, aligns with marketing promotion systems.
 *   Identifiers: lowercase: 'visibilitypoints', camelCase: 'visibilityPointsReward', snake_case: 'visibility_points_reward', ALL_CAP: 'VISIBILITYPOINTS', cache key: 'reward:visibilitypoints:rewardId'.
 *   Model Identifier Format: 'visibilitypoints-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'exposure', 'promotion'; used in Trakfox for content visibility boosts, DnDHubs for product visibility.
 *   @example
 *   POST /api/rewards { "type": "visibilitypoints", "points": 200 } // Award visibility points in Trakfox
 *
 * - 'publishingpoints': Points enabling content publishing or access.
 *   Classifications: Gamification standards, aligns with CMS publishing.
 *   Identifiers: lowercase: 'publishingpoints', camelCase: 'publishingPointsReward', snake_case: 'publishing_points_reward', ALL_CAP: 'PUBLISHINGPOINTS', cache key: 'reward:publishingpoints:rewardId'.
 *   Model Identifier Format: 'publishingpoints-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'content', 'publish'; used in DataOrb for report publishing, Trakfox for post publishing.
 *   @example
 *   POST /api/rewards { "type": "publishingpoints", "points": 150 } // Award publishing points in DataOrb
 *
 * - 'recommendationpoints': Points for generating or receiving recommendations.
 *   Classifications: Gamification standards, aligns with recommendation systems.
 *   Identifiers: lowercase: 'recommendationpoints', camelCase: 'recommendationPointsReward', snake_case: 'recommendation_points_reward', ALL_CAP: 'RECOMMENDATIONPOINTS', cache key: 'reward:recommendationpoints:rewardId'.
 *   Model Identifier Format: 'recommendationpoints-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rec', 'suggestion'; used in DnDHubs for product recommendations, HealthOrb for patient recommendations.
 *   @example
 *   POST /api/rewards { "type": "recommendationpoints", "points": 75 } // Award recommendation points in DnDHubs
 *
 * - 'discount': Reduction in price or cost.
 *   Classifications: E-commerce standards, aligns with PCI DSS.
 *   Identifiers: lowercase: 'discount', camelCase: 'discountReward', snake_case: 'discount_reward', ALL_CAP: 'DISCOUNT', cache key: 'reward:discount:rewardId'.
 *   Model Identifier Format: 'discount-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'coupon', 'rebate'; used in Trakfox for loyalty discounts, DnDHubs for marketplace discounts (5-10% fees).
 *   @example
 *   POST /api/rewards { "type": "discount", "percentage": 20 } // Create discount reward in Trakfox
 *
 * - 'coupon': Redeemable voucher for discounts or benefits.
 *   Classifications: E-commerce standards, aligns with loyalty programs.
 *   Identifiers: lowercase: 'coupon', camelCase: 'couponReward', snake_case: 'coupon_reward', ALL_CAP: 'COUPON', cache key: 'reward:coupon:rewardId'.
 *   Model Identifier Format: 'coupon-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'voucher', 'code'; used in DnDHubs for marketplace coupons, Trakfox for promotional coupons.
 *   @example
 *   POST /api/rewards { "type": "coupon", "code": "SAVE20" } // Create coupon reward in DnDHubs
 *
 * - 'gift': A tangible or digital gift item.
 *   Classifications: E-commerce standards, aligns with gift card systems.
 *   Identifiers: lowercase: 'gift', camelCase: 'giftReward', snake_case: 'gift_reward', ALL_CAP: 'GIFT', cache key: 'reward:gift:rewardId'.
 *   Model Identifier Format: 'gift-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'present', 'reward'; used in Trakfox for gift rewards, HealthOrb for patient gift incentives.
 *   @example
 *   POST /api/rewards { "type": "gift", "item": "gift_card" } // Create gift reward in Trakfox
 *
 * - 'certificate': A certificate or credential reward.
 *   Classifications: Certification standards, aligns with educational rewards.
 *   Identifiers: lowercase: 'certificate', camelCase: 'certificateReward', snake_case: 'certificate_reward', ALL_CAP: 'CERTIFICATE', cache key: 'reward:certificate:rewardId'.
 *   Model Identifier Format: 'certificate-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'award', 'credential'; used in DataOrb for course completion certificates, GEOCoLab for research certificates ($99 tier).
 *   @example
 *   POST /api/rewards { "type": "certificate", "title": "Completion" } // Create certificate reward in DataOrb
 *
 * - 'airtime': Mobile phone airtime or credit reward.
 *   Classifications: Telecom standards (ITU-T), aligns with mobile reward systems.
 *   Identifiers: lowercase: 'airtime', camelCase: 'airtimeReward', snake_case: 'airtime_reward', ALL_CAP: 'AIRTIME', cache key: 'reward:airtime:rewardId'.
 *   Model Identifier Format: 'airtime-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'credit', 'topup'; used in Trakfox for telecom rewards, DnDHubs for user airtime incentives.
 *   @example
 *   POST /api/rewards { "type": "airtime", "amount": 10 } // Create airtime reward in Trakfox
 *
 * - 'internetaccessdata': Data allowance for internet access.
 *   Classifications: Telecom standards, aligns with data reward systems.
 *   Identifiers: lowercase: 'internetaccessdata', camelCase: 'internetAccessDataReward', snake_case: 'internet_access_data_reward', ALL_CAP: 'INTERNETACCESSDATA', cache key: 'reward:internetaccessdata:rewardId'.
 *   Model Identifier Format: 'internetaccessdata-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'data', 'bandwidth'; used in HealthOrb for patient data rewards, GEOCoLab for data access rewards ($99 tier).
 *   @example
 *   POST /api/rewards { "type": "internetaccessdata", "amount": "1GB" } // Create data reward in HealthOrb
 *
 * - 'ticket': Event or service ticket reward.
 *   Classifications: Ticketing standards, aligns with event management systems.
 *   Identifiers: lowercase: 'ticket', camelCase: 'ticketReward', snake_case: 'ticket_reward', ALL_CAP: 'TICKET', cache key: 'reward:ticket:rewardId'.
 *   Model Identifier Format: 'ticket-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'pass', 'voucher'; used in DnDHubs for event tickets, Trakfox for service tickets.
 *   @example
 *   POST /api/rewards { "type": "ticket", "event": "webinar" } // Create ticket reward in DnDHubs
 *
 * - 'badges': Digital or gamified badges for achievements.
 *   Classifications: Gamification standards, aligns with badge systems (Open Badges).
 *   Identifiers: lowercase: 'badges', camelCase: 'badgesReward', snake_case: 'badges_reward', ALL_CAP: 'BADGES', cache key: 'reward:badges:rewardId'.
 *   Model Identifier Format: 'badges-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'medal', 'award'; used in Trakfox for user badges, HealthOrb for patient engagement badges.
 *   @example
 *   POST /api/rewards { "type": "badges", "name": "Achiever" } // Award badge in Trakfox
 *
 * - 'privileges': Special access or rights as a reward.
 *   Classifications: Access control standards (RBAC), aligns with loyalty privileges.
 *   Identifiers: lowercase: 'privileges', camelCase: 'privilegesReward', snake_case: 'privileges_reward', ALL_CAP: 'PRIVILEGES', cache key: 'reward:privileges:rewardId'.
 *   Model Identifier Format: 'privileges-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'access', 'perks'; used in GEOCoLab for premium access privileges ($2,497 tier), DnDHubs for VIP privileges.
 *   @example
 *   POST /api/rewards { "type": "privileges", "access": "vip" } // Grant privilege in GEOCoLab
 *
 * - 'cashback': Percentage-based refund on purchases.
 *   Classifications: E-commerce standards, aligns with loyalty program frameworks.
 *   Identifiers: lowercase: 'cashback', camelCase: 'cashbackReward', snake_case: 'cashback_reward', ALL_CAP: 'CASHBACK', cache key: 'reward:cashback:rewardId'.
 *   Model Identifier Format: 'cashback-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'rebate', 'refund'; used in DnDHubs for purchase cashbacks, Trakfox for loyalty cashbacks.
 *   @example
 *   POST /api/rewards { "type": "cashback", "percentage": 5 } // Create cashback reward in DnDHubs
 *
 * - 'commission': Earnings based on sales or referrals.
 *   Classifications: E-commerce standards, aligns with affiliate marketing frameworks.
 *   Identifiers: lowercase: 'commission', camelCase: 'commissionReward', snake_case: 'commission_reward', ALL_CAP: 'COMMISSION', cache key: 'reward:commission:rewardId'.
 *   Model Identifier Format: 'commission-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'referral', 'fee'; used in Trakfox for affiliate commissions, DnDHubs for seller commissions (5-10% fees).
 *   @example
 *   POST /api/rewards { "type": "commission", "rate": 10 } // Create commission reward in Trakfox
 *
 * - 'payout': Direct payment or disbursement reward.
 *   Classifications: Financial standards (ISO 20022), PCI DSS compliant.
 *   Identifiers: lowercase: 'payout', camelCase: 'payoutReward', snake_case: 'payout_reward', ALL_CAP: 'PAYOUT', cache key: 'reward:payout:rewardId'.
 *   Model Identifier Format: 'payout-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'disbursement', 'payment'; used in DnDHubs for earnings payouts, Trakfox for user payouts.
 *   @example
 *   POST /api/rewards { "type": "payout", "amount": 100 } // Create payout reward in DnDHubs
 *
 * - 'salary': Fixed or performance-based salary reward.
 *   Classifications: Financial standards (ISO 20022), payroll systems.
 *   Identifiers: lowercase: 'salary', camelCase: 'salaryReward', snake_case: 'salary_reward', ALL_CAP: 'SALARY', cache key: 'reward:salary:rewardId'.
 *   Model Identifier Format: 'salary-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'wage', 'compensation'; used in HealthOrb for employee salary incentives, DnDHubs for partner salaries.
 *   @example
 *   POST /api/rewards { "type": "salary", "amount": 5000 } // Create salary reward in HealthOrb
 *
 * - 'pension': Retirement fund contribution or pension reward.
 *   Classifications: Financial standards (ISO 20022), pension schemes.
 *   Identifiers: lowercase: 'pension', camelCase: 'pensionReward', snake_case: 'pension_reward', ALL_CAP: 'PENSION', cache key: 'reward:pension:rewardId'.
 *   Model Identifier Format: 'pension-{rewardId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'retirement', 'fund'; used in GEOCoLab for long-term employee rewards ($2,497 tier), Trakfox for pension contributions.
 *   @example
 *   POST /api/rewards { "type": "pension", "contribution": 200 } // Create pension reward in GEOCoLab
 */
export type RewardTaxonomy = CoreRewardTaxonomy | CustomReward;

/** Core reward types */
export type CoreRewardTaxonomy = 
  | 'cash'
  | 'cashback'
  | 'cryptocurrency'
  | 'loan'
  | 'commission'
  | 'boosterpoints'
  | 'reputationpoints'
  | 'visibilitypoints'
  | 'publishingpoints'
  | 'recommendationpoints'
  | 'discount'
  | 'coupon'
  | 'gift'
  | 'certificate'
  | 'airtime'
  | 'internetaccessdata'
  | 'ticket'
  | 'badges'
  | 'privileges'
  | 'payout'
  | 'salary'
  | 'pension';


export type CustomReward = string & { __reward?: 'CustomReward' };