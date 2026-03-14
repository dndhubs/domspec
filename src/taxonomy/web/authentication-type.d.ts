/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/auth/authentication-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/AuthenticationTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20AuthenticationTaxonomy
 * Union type representing AuthenticationTaxonomy in the DOMSpec ecosystem.
 * Defines authentication methods for secure access in web applications and systems, categorized by type. Aligns with standards such as RFC 6749 (OAuth 2.0), RFC 7617 (HTTP Basic Authentication), NIST SP 800-63B (Digital Identity Guidelines for authentication assurance levels), ISO/IEC 27001 (Information Security Management, A.9 Access Control), and OWASP recommendations for secure authentication. Supports extensibility for custom methods in FluxrKey params within the Fluxr system, integrated with Trakfox e-commerce for user logins, HealthOrb DHIS2 for patient authentication, and DNDHUBS marketplace for secure transactions.
 *
 * No authentication required:
 * - 'none': No authentication required, open access.
 *   Classifications: Aligns with open APIs (no auth), NIST SP 800-63B AAL0 (no assurance).
 *   Identifiers: lowercase: 'none', camelCase: 'noneAuth', snake_case: 'none_auth', ALL_CAP: 'NONE', cache key: 'auth:none:userId'.
 *   Model Identifier Format: 'none-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'open'; used for public endpoints in Trakfox marketplace listings or HealthOrb public health info APIs.
 *   @example
 *   Access public API: GET /api/public/data without headers in DNDHUBS.
 *
 * Basic authentication methods:
 * - 'basic': Username/password authentication.
 *   Classifications: Aligns with RFC 7617 (HTTP Basic Authentication), NIST SP 800-63B AAL1 (single-factor).
 *   Identifiers: lowercase: 'basic', camelCase: 'basicAuth', snake_case: 'basic_auth', ALL_CAP: 'BASIC', cache key: 'auth:basic:userId'.
 *   Model Identifier Format: 'basic-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'httpbasic'; used for simple internal APIs in Trakfox admin panels or HealthOrb staff logins.
 *   @example
 *   Authorization: Basic base64(username:password) in DNDHUBS requests.
 *
 * Token-based authentication methods:
 * - 'mintoken': Generic token-based auth (specific to MINTTokenFactory context).
 *   Classifications: Aligns with custom token standards, NIST SP 800-63B AAL2 (with MFA).
 *   Identifiers: lowercase: 'mintoken', camelCase: 'minTokenAuth', snake_case: 'min_token_auth', ALL_CAP: 'MINTOKEN', cache key: 'auth:mintoken:userId'.
 *   Model Identifier Format: 'mintoken-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used in blockchain-integrated auth for HealthOrb secure data sharing or Trakfox token-gated features.
 *   @example
 *   Authorization: MinToken [token] in DNDHUBS MINT integrations.
 *
 * - 'token': Generic token-based auth.
 *   Classifications: Aligns with RFC 6750 (Bearer Token Usage), NIST SP 800-63B AAL1-2.
 *   Identifiers: lowercase: 'token', camelCase: 'tokenAuth', snake_case: 'token_auth', ALL_CAP: 'TOKEN', cache key: 'auth:token:userId'.
 *   Model Identifier Format: 'token-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'apikey'; used for API keys in Trakfox developer portals or HealthOrb external integrations.
 *   @example
 *   Authorization: Token [key] in DNDHUBS API calls.
 *
 * - 'bearer': Bearer token authentication.
 *   Classifications: Aligns with RFC 6750 (The OAuth 2.0 Authorization Framework: Bearer Token Usage), NIST SP 800-63B AAL2.
 *   Identifiers: lowercase: 'bearer', camelCase: 'bearerAuth', snake_case: 'bearer_auth', ALL_CAP: 'BEARER', cache key: 'auth:bearer:userId'.
 *   Model Identifier Format: 'bearer-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used in OAuth flows for Trakfox user sessions or HealthOrb API access.
 *   @example
 *   Authorization: Bearer [token] in DNDHUBS secure endpoints.
 *
 * - 'jwt': JSON Web Token authentication.
 *   Classifications: Aligns with RFC 7519 (JSON Web Token), NIST SP 800-63B AAL2-3 (with signing).
 *   Identifiers: lowercase: 'jwt', camelCase: 'jwtAuth', snake_case: 'jwt_auth', ALL_CAP: 'JWT', cache key: 'auth:jwt:userId'.
 *   Model Identifier Format: 'jwt-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'jsonwebtoken'; used for stateless auth in Trakfox microservices or HealthOrb patient tokens.
 *   @example
 *   Verify JWT: jwt.verify(token, secret) in DNDHUBS backend.
 *
 * - 'session': Session-based authentication.
 *   Classifications: Aligns with cookie-based sessions, OWASP Session Management, ISO/IEC 27001 A.9.4.
 *   Identifiers: lowercase: 'session', camelCase: 'sessionAuth', snake_case: 'session_auth', ALL_CAP: 'SESSION', cache key: 'auth:session:userId'.
 *   Model Identifier Format: 'session-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'cookie'; used for web logins in Trakfox or HealthOrb portals.
 *   @example
 *   Set session cookie: res.cookie('sessionId', value) in DNDHUBS login.
 *
 * One-time password (OTP) methods:
 * - 'emailotp': Email-based one-time password.
 *   Classifications: Aligns with NIST SP 800-63B AAL2 (MFA), RFC 6238 (TOTP but for email delivery).
 *   Identifiers: lowercase: 'emailotp', camelCase: 'emailOtpAuth', snake_case: 'email_otp_auth', ALL_CAP: 'EMAILOTP', cache key: 'auth:emailotp:userId'.
 *   Model Identifier Format: 'emailotp-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'emailcode'; used as MFA in Trakfox account recovery or HealthOrb login verification.
 *   @example
 *   Send OTP via email: email.sendOTP(user.email) in DNDHUBS MFA flows.
 *
 * - 'smsotp': SMS-based one-time password.
 *   Classifications: Aligns with NIST SP 800-63B AAL2 (restricted due to SIM swap risks), OWASP MFA recommendations.
 *   Identifiers: lowercase: 'smsotp', camelCase: 'smsOtpAuth', snake_case: 'sms_otp_auth', ALL_CAP: 'SMSOTP', cache key: 'auth:smsotp:userId'.
 *   Model Identifier Format: 'smsotp-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'smscode'; used for mobile verification in Trakfox or HealthOrb patient alerts.
 *   @example
 *   Send OTP via SMS: twilio.sendOTP(user.phone) in DNDHUBS.
 *
 * - 'totp': Time-based one-time password.
 *   Classifications: Aligns with RFC 6238 (TOTP), NIST SP 800-63B AAL2.
 *   Identifiers: lowercase: 'totp', camelCase: 'totpAuth', snake_case: 'totp_auth', ALL_CAP: 'TOTP', cache key: 'auth:totp:userId'.
 *   Model Identifier Format: 'totp-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'authenticatorapp'; used with apps like Google Authenticator in Trakfox or HealthOrb MFA.
 *   @example
 *   Validate TOTP: totp.validate(code, secret) in DNDHUBS login.
 *
 * - 'magiclink': Magic link authentication.
 *   Classifications: Aligns with passwordless auth, NIST SP 800-63B AAL1-2, OWASP passwordless recommendations.
 *   Identifiers: lowercase: 'magiclink', camelCase: 'magicLinkAuth', snake_case: 'magic_link_auth', ALL_CAP: 'MAGICLINK', cache key: 'auth:magiclink:userId'.
 *   Model Identifier Format: 'magiclink-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'emailmagic'; used for quick logins in Trakfox beta signups or HealthOrb passwordless access.
 *   @example
 *   Send magic link: email.sendLink(user.email, token) in DNDHUBS.
 *
 * OAuth protocol methods:
 * - 'oauth1': OAuth 1.0 protocol.
 *   Classifications: Aligns with RFC 5849 (OAuth 1.0), legacy standard.
 *   Identifiers: lowercase: 'oauth1', camelCase: 'oauth1Auth', snake_case: 'oauth1_auth', ALL_CAP: 'OAUTH1', cache key: 'auth:oauth1:userId'.
 *   Model Identifier Format: 'oauth1-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for legacy integrations in Trakfox or HealthOrb with older APIs.
 *   @example
 *   OAuth1 request: oauth1.signRequest(url, params) in DNDHUBS.
 *
 * - 'oauth2': OAuth 2.0 protocol.
 *   Classifications: Aligns with RFC 6749 (OAuth 2.0), NIST SP 800-63B AAL2.
 *   Identifiers: lowercase: 'oauth2', camelCase: 'oauth2Auth', snake_case: 'oauth2_auth', ALL_CAP: 'OAUTH2', cache key: 'auth:oauth2:userId'.
 *   Model Identifier Format: 'oauth2-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'openid'; used for social logins in Trakfox or HealthOrb federated access.
 *   @example
 *   OAuth2 flow: redirect to /oauth2/authorize in DNDHUBS.
 *
 * Social authentication methods:
 * - 'google': Google social authentication.
 *   Classifications: Aligns with OAuth 2.0 (RFC 6749), OpenID Connect, ISO/IEC 27001 A.9.2 (User Registration).
 *   Identifiers: lowercase: 'google', camelCase: 'googleAuth', snake_case: 'google_auth', ALL_CAP: 'GOOGLE', cache key: 'auth:google:userId'.
 *   Model Identifier Format: 'google-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for one-click logins in Trakfox or HealthOrb Google integrations.
 *   @example
 *   Redirect to Google OAuth: /auth/google in DNDHUBS.
 *
 * - 'facebook': Facebook social authentication.
 *   Classifications: Aligns with OAuth 2.0, Facebook Login, OWASP Social Login guidelines.
 *   Identifiers: lowercase: 'facebook', camelCase: 'facebookAuth', snake_case: 'facebook_auth', ALL_CAP: 'FACEBOOK', cache key: 'auth:facebook:userId'.
 *   Model Identifier Format: 'facebook-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for social sign-ins in Trakfox community features or HealthOrb social sharing.
 *   @example
 *   Redirect to Facebook OAuth: /auth/facebook in DNDHUBS.
 *
 * - 'apple': Apple social authentication.
 *   Classifications: Aligns with Sign in with Apple, OAuth 2.0, NIST SP 800-63B.
 *   Identifiers: lowercase: 'apple', camelCase: 'appleAuth', snake_case: 'apple_auth', ALL_CAP: 'APPLE', cache key: 'auth:apple:userId'.
 *   Model Identifier Format: 'apple-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for iOS integrations in Trakfox mobile or HealthOrb apps.
 *   @example
 *   Redirect to Apple OAuth: /auth/apple in DNDHUBS.
 *
 * - 'twitter': Twitter (X) social authentication.
 *   Classifications: Aligns with OAuth 1.0a/2.0 for Twitter API, OWASP guidelines.
 *   Identifiers: lowercase: 'twitter', camelCase: 'twitterAuth', snake_case: 'twitter_auth', ALL_CAP: 'TWITTER', cache key: 'auth:twitter:userId'.
 *   Model Identifier Format: 'twitter-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'x'; used for social logins in Trakfox marketing or HealthOrb updates.
 *   @example
 *   Redirect to Twitter OAuth: /auth/twitter in DNDHUBS.
 *
 * - 'github': GitHub social authentication.
 *   Classifications: Aligns with OAuth 2.0 for GitHub, developer-focused auth.
 *   Identifiers: lowercase: 'github', camelCase: 'githubAuth', snake_case: 'github_auth', ALL_CAP: 'GITHUB', cache key: 'auth:github:userId'.
 *   Model Identifier Format: 'github-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for developer logins in Trakfox repos or HealthOrb open-source integrations.
 *   @example
 *   Redirect to GitHub OAuth: /auth/github in DNDHUBS.
 *
 * - 'linkedin': LinkedIn social authentication.
 *   Classifications: Aligns with OAuth 2.0 for LinkedIn, professional networking.
 *   Identifiers: lowercase: 'linkedin', camelCase: 'linkedinAuth', snake_case: 'linkedin_auth', ALL_CAP: 'LINKEDIN', cache key: 'auth:linkedin:userId'.
 *   Model Identifier Format: 'linkedin-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for B2B logins in Trakfox enterprise or HealthOrb professional networks.
 *   @example
 *   Redirect to LinkedIn OAuth: /auth/linkedin in DNDHUBS.
 *
 * - 'microsoft': Microsoft social authentication.
 *   Classifications: Aligns with Azure AD OAuth 2.0, enterprise auth.
 *   Identifiers: lowercase: 'microsoft', camelCase: 'microsoftAuth', snake_case: 'microsoft_auth', ALL_CAP: 'MICROSOFT', cache key: 'auth:microsoft:userId'.
 *   Model Identifier Format: 'microsoft-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for Office 365 integrations in Trakfox or HealthOrb enterprise logins.
 *   @example
 *   Redirect to Microsoft OAuth: /auth/microsoft in DNDHUBS.
 *
 * - 'discord': Discord social authentication.
 *   Classifications: Aligns with OAuth 2.0 for Discord, community-focused.
 *   Identifiers: lowercase: 'discord', camelCase: 'discordAuth', snake_case: 'discord_auth', ALL_CAP: 'DISCORD', cache key: 'auth:discord:userId'.
 *   Model Identifier Format: 'discord-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for gaming/community logins in Trakfox or HealthOrb support groups.
 *   @example
 *   Redirect to Discord OAuth: /auth/discord in DNDHUBS.
 *
 * - 'slack': Slack social authentication.
 *   Classifications: Aligns with OAuth 2.0 for Slack, collaboration tools.
 *   Identifiers: lowercase: 'slack', camelCase: 'slackAuth', snake_case: 'slack_auth', ALL_CAP: 'SLACK', cache key: 'auth:slack:userId'.
 *   Model Identifier Format: 'slack-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for team logins in Trakfox workspaces or HealthOrb internal comms.
 *   @example
 *   Redirect to Slack OAuth: /auth/slack in DNDHUBS.
 *
 * Biometric authentication methods:
 * - 'webauthn': Web Authentication (FIDO2).
 *   Classifications: Aligns with W3C WebAuthn, NIST SP 800-63B AAL3 (multi-factor cryptographic).
 *   Identifiers: lowercase: 'webauthn', camelCase: 'webAuthnAuth', snake_case: 'web_authn_auth', ALL_CAP: 'WEBAUTHN', cache key: 'auth:webauthn:userId'.
 *   Model Identifier Format: 'webauthn-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'fido2'; used for passwordless biometrics in Trakfox or HealthOrb secure access.
 *   @example
 *   Register credential: navigator.credentials.create({ publicKey }) in DNDHUBS.
 *
 * - 'passkeys': Passkeys (synonym for WebAuthn-based keys).
 *   Classifications: Aligns with FIDO Alliance passkeys, OWASP biometric guidelines.
 *   Identifiers: lowercase: 'passkeys', camelCase: 'passkeysAuth', snake_case: 'passkeys_auth', ALL_CAP: 'PASSKEYS', cache key: 'auth:passkeys:userId'.
 *   Model Identifier Format: 'passkeys-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for cross-device auth in Trakfox mobile or HealthOrb apps.
 *   @example
 *   Use passkey: navigator.credentials.get({ publicKey }) in DNDHUBS.
 *
 * - 'fingerprint': Fingerprint biometric authentication.
 *   Classifications: Aligns with biometric standards, NIST SP 800-63B AAL3.
 *   Identifiers: lowercase: 'fingerprint', camelCase: 'fingerprintAuth', snake_case: 'fingerprint_auth', ALL_CAP: 'FINGERPRINT', cache key: 'auth:fingerprint:userId'.
 *   Model Identifier Format: 'fingerprint-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'touchid'; used in Trakfox mobile logins or HealthOrb device auth.
 *   @example
 *   Scan fingerprint: biometric.scan('fingerprint') in DNDHUBS apps.
 *
 * - 'facerecognition': Face recognition biometric authentication.
 *   Classifications: Aligns with ISO/IEC 24745 (Biometric Information Protection), NIST SP 800-63B AAL3.
 *   Identifiers: lowercase: 'facerecognition', camelCase: 'faceRecognitionAuth', snake_case: 'face_recognition_auth', ALL_CAP: 'FACERECOGNITION', cache key: 'auth:facerecognition:userId'.
 *   Model Identifier Format: 'facerecognition-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'faceid'; used for secure logins in HealthOrb patient apps or Trakfox video verification.
 *   @example
 *   Scan face: biometric.scan('face') in DNDHUBS.
 *
 * - 'voiceauth': Voice authentication biometric.
 *   Classifications: Aligns with voice biometrics, OWASP Biometric Authentication.
 *   Identifiers: lowercase: 'voiceauth', camelCase: 'voiceAuth', snake_case: 'voice_auth', ALL_CAP: 'VOICEAUTH', cache key: 'auth:voiceauth:userId'.
 *   Model Identifier Format: 'voiceauth-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'voiceid'; used in Trakfox call centers or HealthOrb voice assistants.
 *   @example
 *   Verify voice: biometric.verify('voice', audio) in DNDHUBS.
 *
 * - 'irisauth': Iris authentication biometric.
 *   Classifications: Aligns with iris biometrics, ISO/IEC 19794-6.
 *   Identifiers: lowercase: 'irisauth', camelCase: 'irisAuth', snake_case: 'iris_auth', ALL_CAP: 'IRISAUTH', cache key: 'auth:irisauth:userId'.
 *   Model Identifier Format: 'irisauth-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used in high-security HealthOrb medical devices or Trakfox premium access.
 *   @example
 *   Scan iris: biometric.scan('iris') in DNDHUBS.
 *
 * Multi-factor authentication (MFA) components:
 * - 'hardwarekeys': Hardware security keys (e.g., YubiKey).
 *   Classifications: Aligns with FIDO U2F, NIST SP 800-63B AAL3.
 *   Identifiers: lowercase: 'hardwarekeys', camelCase: 'hardwareKeysAuth', snake_case: 'hardware_keys_auth', ALL_CAP: 'HARDWAREKEYS', cache key: 'auth:hardwarekeys:userId'.
 *   Model Identifier Format: 'hardwarekeys-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'u2f'; used as MFA in Trakfox enterprise or HealthOrb secure logins.
 *   @example
 *   Insert key: fido.authenticate('hardwarekeys') in DNDHUBS.
 *
 * - 'smscode': SMS code for MFA.
 *   Classifications: Aligns with NIST SP 800-63B AAL2 (restricted), OWASP MFA.
 *   Identifiers: lowercase: 'smscode', camelCase: 'smsCodeAuth', snake_case: 'sms_code_auth', ALL_CAP: 'SMSCODE', cache key: 'auth:smscode:userId'.
 *   Model Identifier Format: 'smscode-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used as second factor in Trakfox or HealthOrb logins.
 *   @example
 *   Send SMS code: twilio.sendCode(user.phone) in DNDHUBS.
 *
 * - 'emailcode': Email code for MFA.
 *   Classifications: Aligns with NIST SP 800-63B AAL2, email-based MFA.
 *   Identifiers: lowercase: 'emailcode', camelCase: 'emailCodeAuth', snake_case: 'email_code_auth', ALL_CAP: 'EMAILCODE', cache key: 'auth:emailcode:userId'.
 *   Model Identifier Format: 'emailcode-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used as alternative MFA in Trakfox or HealthOrb.
 *   @example
 *   Send email code: email.sendCode(user.email) in DNDHUBS.
 *
 * - 'authenticatorapp': Authenticator app for MFA (e.g., Google Authenticator).
 *   Classifications: Aligns with TOTP (RFC 6238), NIST SP 800-63B AAL2.
 *   Identifiers: lowercase: 'authenticatorapp', camelCase: 'authenticatorAppAuth', snake_case: 'authenticator_app_auth', ALL_CAP: 'AUTHENTICATORAPP', cache key: 'auth:authenticatorapp:userId'.
 *   Model Identifier Format: 'authenticatorapp-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'totpapp'; used for MFA in Trakfox or HealthOrb.
 *   @example
 *   Scan QR for app: totp.setup('authenticatorapp') in DNDHUBS.
 *
 * Enterprise authentication methods (SSO, Directory Services, etc.):
 * - 'saml': Security Assertion Markup Language.
 *   Classifications: Aligns with SAML 2.0, NIST SP 800-63C (Federated Identity).
 *   Identifiers: lowercase: 'saml', camelCase: 'samlAuth', snake_case: 'saml_auth', ALL_CAP: 'SAML', cache key: 'auth:saml:userId'.
 *   Model Identifier Format: 'saml-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for SSO in Trakfox enterprise or HealthOrb corporate logins.
 *   @example
 *   SAML assertion: idp.sendAssertion('saml') in DNDHUBS.
 *
 * - 'ldap': Lightweight Directory Access Protocol.
 *   Classifications: Aligns with RFC 4511, directory services, ISO/IEC 27001 A.9.2.
 *   Identifiers: lowercase: 'ldap', camelCase: 'ldapAuth', snake_case: 'ldap_auth', ALL_CAP: 'LDAP', cache key: 'auth:ldap:userId'.
 *   Model Identifier Format: 'ldap-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for directory auth in HealthOrb or Trakfox AD integrations.
 *   @example
 *   Bind LDAP: ldap.bind(user, pass) in DNDHUBS.
 *
 * - 'kerberos': Kerberos authentication protocol.
 *   Classifications: Aligns with RFC 4120, ticket-based auth, NIST SP 800-63B.
 *   Identifiers: lowercase: 'kerberos', camelCase: 'kerberosAuth', snake_case: 'kerberos_auth', ALL_CAP: 'KERBEROS', cache key: 'auth:kerberos:userId'.
 *   Model Identifier Format: 'kerberos-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used in enterprise networks for Trakfox or HealthOrb.
 *   @example
 *   Get ticket: kerberos.getTicket('kerberos') in DNDHUBS.
 *
 * - 'firebase': Firebase authentication.
 *   Classifications: Aligns with Google Firebase Auth, OAuth-based.
 *   Identifiers: lowercase: 'firebase', camelCase: 'firebaseAuth', snake_case: 'firebase_auth', ALL_CAP: 'FIREBASE', cache key: 'auth:firebase:userId'.
 *   Model Identifier Format: 'firebase-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for app auth in Trakfox mobile or HealthOrb Firebase integrations.
 *   @example
 *   Firebase login: firebase.auth().signInWithEmailAndPassword in DNDHUBS.
 *
 * - 'aws': AWS authentication (e.g., Cognito).
 *   Classifications: Aligns with AWS IAM, NIST SP 800-63.
 *   Identifiers: lowercase: 'aws', camelCase: 'awsAuth', snake_case: 'aws_auth', ALL_CAP: 'AWS', cache key: 'auth:aws:userId'.
 *   Model Identifier Format: 'aws-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for cloud auth in Trakfox AWS or HealthOrb.
 *   @example
 *   AWS Cognito: cognito.signIn(user) in DNDHUBS.
 *
 * - 'azure': Azure authentication (e.g., Azure AD).
 *   Classifications: Aligns with Microsoft Azure AD, federated auth.
 *   Identifiers: lowercase: 'azure', camelCase: 'azureAuth', snake_case: 'azure_auth', ALL_CAP: 'AZURE', cache key: 'auth:azure:userId'.
 *   Model Identifier Format: 'azure-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for enterprise SSO in Trakfox or HealthOrb Azure integrations.
 *   @example
 *   Azure AD login: msal.loginPopup() in DNDHUBS.
 *
 * - 'gcp': Google Cloud Platform authentication.
 *   Classifications: Aligns with GCP IAM, OAuth-based.
 *   Identifiers: lowercase: 'gcp', camelCase: 'gcpAuth', snake_case: 'gcp_auth', ALL_CAP: 'GCP', cache key: 'auth:gcp:userId'.
 *   Model Identifier Format: 'gcp-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for cloud auth in Trakfox GCP or HealthOrb.
 *   @example
 *   GCP auth: gcp.auth.getClient() in DNDHUBS.
 *
 * - 'hawk': Hawk authentication.
 *   Classifications: Aligns with Hawk HTTP auth scheme, RFC 7486.
 *   Identifiers: lowercase: 'hawk', camelCase: 'hawkAuth', snake_case: 'hawk_auth', ALL_CAP: 'HAWK', cache key: 'auth:hawk:userId'.
 *   Model Identifier Format: 'hawk-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for secure API requests in Trakfox or HealthOrb.
 *   @example
 *   Hawk header: hawk.client.header(url, method) in DNDHUBS.
 *
 * - 'ntlm': NTLM authentication.
 *   Classifications: Aligns with Microsoft NTLM, legacy enterprise auth.
 *   Identifiers: lowercase: 'ntlm', camelCase: 'ntlmAuth', snake_case: 'ntlm_auth', ALL_CAP: 'NTLM', cache key: 'auth:ntlm:userId'.
 *   Model Identifier Format: 'ntlm-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for Windows integrations in Trakfox or HealthOrb.
 *   @example
 *   NTLM negotiate: ntlm.authenticate(req) in DNDHUBS.
 *
 * - 'akamai': Akamai authentication.
 *   Classifications: Aligns with Akamai edge auth, CDN security.
 *   Identifiers: lowercase: 'akamai', camelCase: 'akamaiAuth', snake_case: 'akamai_auth', ALL_CAP: 'AKAMAI', cache key: 'auth:akamai:userId'.
 *   Model Identifier Format: 'akamai-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for CDN secure access in Trakfox or HealthOrb media.
 *   @example
 *   Akamai token: akamai.generateToken() in DNDHUBS.
 *
 * - 'asap': ASAP authentication (Atlassian).
 *   Classifications: Aligns with Atlassian ASAP, JWT-based for Atlassian tools.
 *   Identifiers: lowercase: 'asap', camelCase: 'asapAuth', snake_case: 'asap_auth', ALL_CAP: 'ASAP', cache key: 'auth:asap:userId'.
 *   Model Identifier Format: 'asap-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for Jira/Confluence integrations in Trakfox or HealthOrb.
 *   @example
 *   ASAP JWT: asap.generateJWT() in DNDHUBS.
 *
 * - 'digest': Digest authentication.
 *   Classifications: Aligns with RFC 7616 (HTTP Digest Access Authentication), NIST SP 800-63B AAL1.
 *   Identifiers: lowercase: 'digest', camelCase: 'digestAuth', snake_case: 'digest_auth', ALL_CAP: 'DIGEST', cache key: 'auth:digest:userId'.
 *   Model Identifier Format: 'digest-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for legacy HTTP auth in Trakfox or HealthOrb.
 *   @example
 *   Authorization: Digest username="user", realm="realm" in DNDHUBS.
 *
 * Machine-to-machine (M2M) authentication methods:
 * - 'key': API key authentication for M2M.
 *   Classifications: Aligns with API key standards, NIST SP 800-63B AAL2.
 *   Identifiers: lowercase: 'key', camelCase: 'keyAuth', snake_case: 'key_auth', ALL_CAP: 'KEY', cache key: 'auth:key:userId'.
 *   Model Identifier Format: 'key-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'apikey'; used for service communications in Trakfox or HealthOrb integrations.
 *   @example
 *   API Key header: X-API-Key: [key] in DNDHUBS.
 *
 * - 'clientcredentials': Client credentials flow for M2M.
 *   Classifications: Aligns with OAuth 2.0 Client Credentials Grant (RFC 6749), ISO/IEC 27001 A.9.3.
 *   Identifiers: lowercase: 'clientcredentials', camelCase: 'clientCredentialsAuth', snake_case: 'client_credentials_auth', ALL_CAP: 'CLIENTCREDENTIALS', cache key: 'auth:clientcredentials:userId'.
 *   Model Identifier Format: 'clientcredentials-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for server-to-server auth in Trakfox or HealthOrb services.
 *   @example
 *   POST /token with grant_type=client_credentials in DNDHUBS.
 *
 * - 'certificate': Certificate-based authentication for M2M.
 *   Classifications: Aligns with X.509 certificates, NIST SP 800-63B AAL3.
 *   Identifiers: lowercase: 'certificate', camelCase: 'certificateAuth', snake_case: 'certificate_auth', ALL_CAP: 'CERTIFICATE', cache key: 'auth:certificate:userId'.
 *   Model Identifier Format: 'certificate-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'x509'; used for secure M2M in HealthOrb devices or Trakfox servers.
 *   @example
 *   Present certificate: tls.clientCert in DNDHUBS.
 *
 * - 'mtls': Mutual TLS authentication.
 *   Classifications: Aligns with mTLS (RFC 5246), NIST SP 800-52.
 *   Identifiers: lowercase: 'mtls', camelCase: 'mtlsAuth', snake_case: 'mtls_auth', ALL_CAP: 'MTLS', cache key: 'auth:mtls:userId'.
 *   Model Identifier Format: 'mtls-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'mutualtls'; used for bidirectional auth in Trakfox cloud or HealthOrb secure comms.
 *   @example
 *   mTLS handshake: tls.mutualAuth in DNDHUBS.
 *
 * Distributed Ledger Technology (DLT) specific authentication methods:
 * - 'tokenbased': Token-based auth in DLT.
 *   Classifications: Aligns with blockchain tokens, ISO/TC 307 blockchain standards.
 *   Identifiers: lowercase: 'tokenbased', camelCase: 'tokenBasedAuth', snake_case: 'token_based_auth', ALL_CAP: 'TOKENBASED', cache key: 'auth:tokenbased:userId'.
 *   Model Identifier Format: 'tokenbased-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for wallet tokens in Trakfox NFTs or HealthOrb blockchain records.
 *   @example
 *   Validate DLT token: blockchain.validateToken('tokenbased') in DNDHUBS.
 *
 * - 'zkproof': Zero-knowledge proof authentication.
 *   Classifications: Aligns with zk-SNARKs, privacy-preserving auth, OWASP ZKP guidelines.
 *   Identifiers: lowercase: 'zkproof', camelCase: 'zkProofAuth', snake_case: 'zk_proof_auth', ALL_CAP: 'ZKPROOF', cache key: 'auth:zkproof:userId'.
 *   Model Identifier Format: 'zkproof-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'zeroknowledge'; used for private auth in HealthOrb sensitive data or Trakfox privacy features.
 *   @example
 *   Verify ZKP: zkp.verify(proof) in DNDHUBS.
 *
 * - 'multisig': Multi-signature authentication in DLT.
 *   Classifications: Aligns with multi-sig wallets, blockchain security.
 *   Identifiers: lowercase: 'multisig', camelCase: 'multiSigAuth', snake_case: 'multi_sig_auth', ALL_CAP: 'MULTISIG', cache key: 'auth:multisig:userId'.
 *   Model Identifier Format: 'multisig-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for group approvals in Trakfox or HealthOrb blockchain transactions.
 *   @example
 *   Sign multi-sig: wallet.multiSign(tx) in DNDHUBS.
 *
 * - 'delegated': Delegated authentication in DLT.
 *   Classifications: Aligns with delegated proof-of-stake, ISO/TC 307.
 *   Identifiers: lowercase: 'delegated', camelCase: 'delegatedAuth', snake_case: 'delegated_auth', ALL_CAP: 'DELEGATED', cache key: 'auth:delegated:userId'.
 *   Model Identifier Format: 'delegated-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for proxy auth in Trakfox DLT or HealthOrb.
 *   @example
 *   Delegate vote: blockchain.delegate('delegated') in DNDHUBS.
 *
 * - 'wallet': Wallet-based authentication in DLT.
 *   Classifications: Aligns with crypto wallets (e.g., MetaMask), blockchain auth.
 *   Identifiers: lowercase: 'wallet', camelCase: 'walletAuth', snake_case: 'wallet_auth', ALL_CAP: 'WALLET', cache key: 'auth:wallet:userId'.
 *   Model Identifier Format: 'wallet-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'cryptowallet'; used for Web3 logins in Trakfox or HealthOrb blockchain.
 *   @example
 *   Connect wallet: web3.connectWallet() in DNDHUBS.
 *
 * - 'smartcontract': Smart contract-based authentication.
 *   Classifications: Aligns with Ethereum smart contracts, ISO/TC 307.
 *   Identifiers: lowercase: 'smartcontract', camelCase: 'smartContractAuth', snake_case: 'smart_contract_auth', ALL_CAP: 'SMARTCONTRACT', cache key: 'auth:smartcontract:userId'.
 *   Model Identifier Format: 'smartcontract-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for on-chain auth in Trakfox NFTs or HealthOrb smart contracts.
 *   @example
 *   Call contract: contract.authenticate() in DNDHUBS.
 *
 * Federated authentication methods:
 * - 'federation': Federated identity authentication.
 *   Classifications: Aligns with NIST SP 800-63C (Federated Identity), SAML/OAuth federation.
 *   Identifiers: lowercase: 'federation', camelCase: 'federationAuth', snake_case: 'federation_auth', ALL_CAP: 'FEDERATION', cache key: 'auth:federation:userId'.
 *   Model Identifier Format: 'federation-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Used for identity providers in Trakfox or HealthOrb multi-system access.
 *   @example
 *   Federated login: idp.federate('federation') in DNDHUBS.
 *
 * - 'sso': Single Sign-On authentication.
 *   Classifications: Aligns with SSO standards (SAML, OpenID), ISO/IEC 27001 A.9.2.
 *   Identifiers: lowercase: 'sso', camelCase: 'ssoAuth', snake_case: 'sso_auth', ALL_CAP: 'SSO', cache key: 'auth:sso:userId'.
 *   Model Identifier Format: 'sso-{authType}-{timestamp}' (kebab-case for PostgreSQL compatibility).
 *   Variations and Use Cases: Synonym: 'singlesignon'; used for seamless logins in Trakfox enterprise or HealthOrb portals.
 *   @example
 *   SSO redirect: /auth/sso in DNDHUBS.
 */
export type AuthenticationTaxonomy = CoreAuthentication | CustomAuthentication;

/** No authentication required */
export type NoAuthTypeTaxonomy = 'none';

/** Basic authentication methods */
export type BasicAuthTypeTaxonomy = 'basic';

/** Token-based authentication methods */
export type TokenAuthTypeTaxonomy = 'mintoken' | 'token' | 'bearer' | 'jwt' | 'session';

/** One-time password (OTP) methods */
export type OtpAuthTypeTaxonomy = 'emailotp' | 'smsotp' | 'totp' | 'magiclink';

/** OAuth protocol methods */
export type OAuthAuthTypeTaxonomy = 'oauth1' | 'oauth2';

/** Social authentication methods */
export type SocialAuthTypeTaxonomy = 'google' | 'facebook' | 'apple' | 'twitter' | 'github' | 'linkedin' | 'microsoft' | 'discord' | 'slack';

/** Biometric authentication methods */
export type BiometricAuthTypeTaxonomy = 'webauthn' | 'passkeys' | 'fingerprint' | 'facerecognition' | 'voiceauth' | 'irisauth';

/** Multi-factor authentication (MFA) components */
export type MfaComponentTypeTaxonomy = 'hardwarekeys' | 'smscode' | 'emailcode' | 'authenticatorapp';

/** Enterprise authentication methods (SSO, Directory Services, etc.) */
export type EnterpriseAuthTypeTaxonomy = 'saml' | 'ldap' | 'kerberos' | 'firebase' | 'aws' | 'azure' | 'gcp' | 'hawk' | 'ntlm' | 'akamai' | 'asap' | 'digest';

/** Machine-to-machine (M2M) authentication methods */
export type M2MAuthTypeTaxonomy = 'key' | 'clientcredentials' | 'certificate' | 'mtls';

/** Distributed Ledger Technology (DLT) specific authentication methods */
export type DltAuthTypeTaxonomy = 'tokenbased' | 'zkproof' | 'multisig' | 'delegated' | 'wallet' | 'smartcontract';

/** Federated authentication methods */
export type FederatedAuthTypeTaxonomy = 'federation' | 'sso';

export type CoreAuthentication = 
  | NoAuthTypeTaxonomy
  | BasicAuthTypeTaxonomy
  | TokenAuthTypeTaxonomy
  | OtpAuthTypeTaxonomy
  | OAuthAuthTypeTaxonomy
  | SocialAuthTypeTaxonomy
  | BiometricAuthTypeTaxonomy
  | MfaComponentTypeTaxonomy
  | EnterpriseAuthTypeTaxonomy
  | M2MAuthTypeTaxonomy
  | DltAuthTypeTaxonomy
  | FederatedAuthTypeTaxonomy;

export type CustomAuthentication = string & { __authentication?: 'CustomAuthentication' };