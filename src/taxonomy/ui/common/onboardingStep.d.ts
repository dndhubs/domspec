/**
 * Union type representing OnboardingStep in the Framr UI ecosystem, defining steps for onboarding components like 'onboardingTour' or 'welcomeBanner'.
 * These steps align with wizard patterns for user guidance, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., onboarding configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'intro': Introduction step.
 * Classifications: Step (intro); first step in onboarding.
 * Identifiers: lowercase: 'intro', camelCase: 'introStep', snake_case: 'intro_step', ALL_CAP: 'INTRO', cache key: 'onboardingstep:intro:componentId'.
 * Model Identifier Format: 'intro-{welcome}-{cta}' (kebab-case for sequence configs).
 * Variations and Use Cases: Synonyms: 'welcome'; for initial onboarding in Trakfox or greeting screens; validate via `isValidOnboardingStep(step)`.
 * Example Usage: <OnboardingTour step='intro'> with welcome banner and next button.
 *
 * - 'tutorial': Tutorial guidance step.
 * Classifications: Step (tutorial).
 * Identifiers: lowercase: 'tutorial', camelCase: 'tutorialStep', snake_case: 'tutorial_step', ALL_CAP: 'TUTORIAL', cache key: 'onboardingstep:tutorial:componentId'.
 * Model Identifier Format: 'tutorial-{highlight}-{text}'.
 * Variations and Use Cases: For feature highlights in HealthOrb or guided tours.
 * Example Usage: Overlay pointer on UI element with tooltip.
 *
 * - 'complete': Completion step.
 * Classifications: Step (complete).
 * Identifiers: lowercase: 'complete', camelCase: 'completeStep', snake_case: 'complete_step', ALL_CAP: 'COMPLETE', cache key: 'onboardingstep:complete:componentId'.
 * Model Identifier Format: 'complete-{summary}-{redirect}'.
 * Variations and Use Cases: For onboarding end screens or success messages; final step in a sequence.
 * Example Usage: 'You're all set! Start exploring.' message.
 *
 * - 'permission': Permission request step.
 * Classifications: Step (permission); often a required step before features can be used.
 * Identifiers: lowercase: 'permission', camelCase: 'permissionStep', snake_case: 'permission_step', ALL_CAP: 'PERMISSION', cache key: 'onboardingstep:permission:componentId'.
 * Model Identifier Format: 'permission-{request}-{denied_fallback}'.
 * Variations and Use Cases: For requesting notifications, location access, or other system permissions.
 * Example Usage: A modal asking for permission to send push notifications.
 *
 * - 'personalize': Personalization or user preference step.
 * Classifications: Step (personalize); for gathering user preferences.
 * Identifiers: lowercase: 'personalize', camelCase: 'personalizeStep', snake_case: 'personalize_step', ALL_CAP: 'PERSONALIZE', cache key: 'onboardingstep:personalize:componentId'.
 * Model Identifier Format: 'personalize-{question}-{choices}'.
 * Variations and Use Cases: For asking about interests, experience level, or setting up a profile initially.
 * Example Usage: A form with checkboxes for user interests.
 *
 * - 'prompt': Action prompt step.
 * Classifications: Step (prompt); a call to action to interact with the app.
 * Identifiers: lowercase: 'prompt', camelCase: 'promptStep', snake_case: 'prompt_step', ALL_CAP: 'PROMPT', cache key: 'onboardingstep:prompt:componentId'.
 * Model Identifier Format: 'prompt-{action}-{button_label}'.
 * Variations and Use Cases: For empty state screens, e.g., 'Start by adding your first project' or 'Follow your first user'.
 * Example Usage: A banner at the top of an empty feed prompting the user to take an action.
 */
export type OnboardingStepTaxonomy = 'intro' | 'tutorial' | 'complete' | 'permission' | 'personalize' | 'prompt';