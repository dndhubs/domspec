/**
 * Union type representing SharePlatform in the Framr UI ecosystem, defining platforms for social portals like 'socialShare'.
 * These platforms align with sharing APIs for links.
 * Each variant includes details for consistency and validation.
 *
 * - 'x': Share on X.
 * Classifications: Platform (x); now X API.
 * Identifiers: lowercase: 'x', camelCase: 'xPlatform', snake_case: 'x_platform', ALL_CAP: 'x', cache key: 'shareplatform:x:portalId'.
 * Model Identifier Format: 'x-{url}-{text}' (kebab-case for share URLs).
 * Variations and Use Cases: Synonyms: 'x'; for posts in Trakfox.
 * Example Usage: <button onClick={shareToX}>.
 *
 * - 'facebook': Share on Facebook.
 * Classifications: Platform (facebook).
 * Identifiers: lowercase: 'facebook', camelCase: 'facebookPlatform', snake_case: 'facebook_platform', ALL_CAP: 'FACEBOOK', cache key: 'shareplatform:facebook:portalId'.
 * Model Identifier Format: 'facebook-{url}-{quote}'.
 * Variations and Use Cases: For articles in HealthOrb.
 * Example Usage: Facebook share dialog.
 *
 * - 'linkedin': Share on LinkedIn.
 * Classifications: Platform (linkedin).
 * Identifiers: lowercase: 'linkedin', camelCase: 'linkedinPlatform', snake_case: 'linkedin_platform', ALL_CAP: 'LINKEDIN', cache key: 'shareplatform:linkedin:portalId'.
 * Model Identifier Format: 'linkedin-{url}-{title}'.
 * Variations and Use Cases: For professional in DnDHubs.
 * Example Usage: LinkedIn share link.
 *
 * - 'email': Share via email.
 * Classifications: Platform (email).
 * Identifiers: lowercase: 'email', camelCase: 'emailPlatform', snake_case: 'email_platform', ALL_CAP: 'EMAIL', cache key: 'shareplatform:email:portalId'.
 * Model Identifier Format: 'email-{subject}-{body}'.
 * Variations and Use Cases: For direct shares in GEOCoLab.
 * Example Usage: mailto: link with body.
 *
 * - 'whatsapp': Share via WhatsApp.
 * Classifications: Platform (whatsapp).
 * Identifiers: lowercase: 'whatsapp', camelCase: 'whatsappPlatform', snake_case: 'whatsapp_platform', ALL_CAP: 'WHATSAPP', cache key: 'shareplatform:whatsapp:portalId'.
 * Model Identifier Format: 'whatsapp-{text}-{url}'.
 * Variations and Use Cases: For private messaging and group chats; mobile-first scenarios.
 * Example Usage: WhatsApp share link from a product page.
 *
 * - 'telegram': Share on Telegram.
 * Classifications: Platform (telegram).
 * Identifiers: lowercase: 'telegram', camelCase: 'telegramPlatform', snake_case: 'telegram_platform', ALL_CAP: 'TELEGRAM', cache key: 'shareplatform:telegram:portalId'.
 * Model Identifier Format: 'telegram-{url}-{text}'.
 * Variations and Use Cases: For public channels and private chats; often used for announcements.
 * Example Usage: Telegram share button in a news app.
 *
 * - 'pinterest': Share on Pinterest.
 * Classifications: Platform (pinterest).
 * Identifiers: lowercase: 'pinterest', camelCase: 'pinterestPlatform', snake_case: 'pinterest_platform', ALL_CAP: 'PINTEREST', cache key: 'shareplatform:pinterest:portalId'.
 * Model Identifier Format: 'pinterest-{url}-{media}-{description}'.
 * Variations and Use Cases: For visual content and e-commerce products; used for "pinning".
 * Example Usage: Pinterest "Pin it" button for an image.
 *
 * - 'reddit': Share on Reddit.
 * Classifications: Platform (reddit).
 * Identifiers: lowercase: 'reddit', camelCase: 'redditPlatform', snake_case: 'reddit_platform', ALL_CAP: 'REDDIT', cache key: 'shareplatform:reddit:portalId'.
 * Model Identifier Format: 'reddit-{url}-{title}'.
 * Variations and Use Cases: For community-based sharing and discussions; "cross-posting".
 * Example Usage: Reddit share link for an interesting article.
 *
 * - 'skype': Share via Skype.
 * Classifications: Platform (skype).
 * Identifiers: lowercase: 'skype', camelCase: 'skypePlatform', snake_case: 'skype_platform', ALL_CAP: 'SKYPE', cache key: 'shareplatform:skype:portalId'.
 * Model Identifier Format: 'skype-{url}-{text}'.
 * Variations and Use Cases: For private conversations and professional communication.
 * Example Usage: Skype share link for a file or document.
 *
 * - 'line': Share on LINE.
 * Classifications: Platform (line).
 * Identifiers: lowercase: 'line', camelCase: 'linePlatform', snake_case: 'line_platform', ALL_CAP: 'LINE', cache key: 'shareplatform:line:portalId'.
 * Model Identifier Format: 'line-{url}'.
 * Variations and Use Cases: Popular in Asia for messaging and sharing.
 * Example Usage: LINE share button for an app invite.
 *
 * - 'messenger': Share via Facebook Messenger.
 * Classifications: Platform (messenger).
 * Identifiers: lowercase: 'messenger', camelCase: 'messengerPlatform', snake_case: 'messenger_platform', ALL_CAP: 'MESSENGER', cache key: 'shareplatform:messenger:portalId'.
 * Model Identifier Format: 'messenger-{url}'.
 * Variations and Use Cases: For private messaging within the Facebook ecosystem.
 * Example Usage: Messenger share dialog from a Facebook post.
 */
export type SocialShareTaxonomy = 'x' | 'facebook' | 'linkedin' | 'email' | 'whatsapp' | 'telegram' | 'pinterest' | 'reddit' | 'skype' | 'line' | 'messenger';