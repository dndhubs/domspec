/**
 * Union type representing PortalKeyCategory in the Framr UI ecosystem, defining logical groups for categorizing PortalKeys (e.g., 'appBar', 'modal') to organize component development and prop application.
 * These categories align with UI patterns (e.g., Material Design, WCAG for accessibility) and are used to streamline Framr component creation with @framr/portal hooks/context, ensuring modularity and clarity across Trakfox, HealthOrb, DnDHubs, and GEOCoLab.
 * Each variant includes details for consistency in storage (e.g., JSON configs in PostgreSQL), validation (e.g., in @framr/utils), and mapping to PortalKeys for dynamic rendering.
 *
 * - 'Header': Components for top-level navigation and branding.
 *   Classifications: UI layout (header); aligns with Material Design app bars, Bootstrap navbars.
 *   Identifiers: lowercase: 'header', camelCase: 'headerCategory', snake_case: 'header_category', ALL_CAP: 'HEADER', cache key: 'category:header:componentId'.
 *   Model Identifier Format: 'header-{layoutId}-{direction}' (kebab-case for config storage).
 *   Variations and Use Cases: Synonyms: 'TopNavigation'; groups PortalKeys like 'appBar', 'headerBar', 'toolBar', 'navigation', 'megaMenu', 'mobileMenu', 'tabBar'; used for Trakfox navigation bars or HealthOrb toolbars; validate via `isValidCategory(category)` in @framr/utils.
 *   Example Usage: Apply HeaderBehaviorTaxonomy to <FramrPortal target="appBar" category="Header"> for sticky navigation in Remix routes.
 *
 * - 'Navigation': Components for secondary or path-based navigation.
 *   Classifications: UI navigation (secondary); compliant with ARIA navigation roles, WCAG 2.4.1.
 *   Identifiers: lowercase: 'navigation', camelCase: 'navigationCategory', snake_case: 'navigation_category', ALL_CAP: 'NAVIGATION', cache key: 'category:navigation:componentId'.
 *   Model Identifier Format: 'navigation-{routeId}-{direction}'.
 *   Variations and Use Cases: Synonyms: 'PathNavigation'; groups 'breadcrumb', 'footerNavigation', 'bottomNavigation'; for DnDHubs e-commerce paths or GEOCoLab breadcrumb trails.
 *   Example Usage: Use NavigationStyleTaxonomy with <FramrPortal target="breadcrumb" category="Navigation"> for path trails.
 *
 * - 'Content': Components for primary and supplementary content display.
 *   Classifications: UI content (primary/supplementary); aligns with HTML semantics (e.g., main, section).
 *   Identifiers: lowercase: 'content', camelCase: 'contentCategory', snake_case: 'content_category', ALL_CAP: 'CONTENT', cache key: 'category:content:componentId'.
 *   Model Identifier Format: 'content-{sectionId}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'MainContent'; groups 'bodyContent', 'mainContent', 'contentHeader', 'contentFooter', 'article', 'section', 'hero', 'card', 'banner', 'grid', 'carousel', 'callout', 'markdown', 'richTextEditor', 'timeline', 'comparison'; for Trakfox articles or HealthOrb reports.
 *   Example Usage: Apply ContentLayoutTaxonomy to <FramrPortal target="article" category="Content"> for grid layouts.
 *
 * - 'Feedback': Components for user feedback and interaction overlays.
 *   Classifications: UI feedback (interactive); aligns with ARIA dialog roles, WCAG 4.1.3.
 *   Identifiers: lowercase: 'feedback', camelCase: 'feedbackCategory', snake_case: 'feedback_category', ALL_CAP: 'FEEDBACK', cache key: 'category:feedback:componentId'.
 *   Model Identifier Format: 'feedback-{dialogId}-{visibility}'.
 *   Variations and Use Cases: Synonyms: 'UserFeedback'; groups 'modal', 'notification', 'tooltip', 'dialog', 'popover', 'toast', 'confirmDialog', 'survey', 'rating', 'poll', 'review'; for HealthOrb alerts or DnDHubs toasts.
 *   Example Usage: Use ModalBackdropTaxonomy with <FramrPortal target="modal" category="Feedback"> for blur backdrops.
 *
 * - 'Panel': Components for side or quick-access panels.
 *   Classifications: UI layout (panel); aligns with Material Design drawers.
 *   Identifiers: lowercase: 'panel', camelCase: 'panelCategory', snake_case: 'panel_category', ALL_CAP: 'PANEL', cache key: 'category:panel:componentId'.
 *   Model Identifier Format: 'panel-{side}-{contentId}'.
 *   Variations and Use Cases: Synonyms: 'SidePanel'; groups 'quickPanel', 'sidebar', 'leftSidebar', 'rightSidebar', 'sidePanel', 'drawer'; for GEOCoLab filters or Trakfox quick settings.
 *   Example Usage: Apply PortalPositionTaxonomy to <FramrPortal target="drawer" category="Panel"> for slide-in menus.
 *
 * - 'Command': Components for command-driven interfaces.
 *   Classifications: UI interactive (command); inspired by VS Code command palette.
 *   Identifiers: lowercase: 'command', camelCase: 'commandCategory', snake_case: 'command_category', ALL_CAP: 'COMMAND', cache key: 'category:command:componentId'.
 *   Model Identifier Format: 'command-{shortcutId}-{userId}'.
 *   Variations and Use Cases: Synonyms: 'ActionCommand'; groups 'command', 'contextMenu'; for DataOrb quick actions or DnDHubs right-click menus.
 *   Example Usage: Use <FramrPortal target="command" category="Command"> for Ctrl+K palette.
 *
 * - 'Loading': Components for loading states and progress indicators.
 *   Classifications: UI feedback (loading); aligns with UX best practices for perceived performance.
 *   Identifiers: lowercase: 'loading', camelCase: 'loadingCategory', snake_case: 'loading_category', ALL_CAP: 'LOADING', cache key: 'category:loading:componentId'.
 *   Model Identifier Format: 'loading-{contentType}-{timestamp}'.
 *   Variations and Use Cases: Synonyms: 'Progress'; groups 'skeleton', 'progressBar', 'loadingOverlay'; for HealthOrb data fetches or Trakfox SSR hydration.
 *   Example Usage: Use PortalAnimationTaxonomy with <FramrPortal target="skeleton" category="Loading"> for pulse effects.
 *
 * - 'Ads': Components for advertising and monetization.
 *   Classifications: UI ads (monetization); aligns with IAB standards.
 *   Identifiers: lowercase: 'ads', camelCase: 'adsCategory', snake_case: 'ads_category', ALL_CAP: 'ADS', cache key: 'category:ads:componentId'.
 *   Model Identifier Format: 'ads-{adId}-{impression}'.
 *   Variations and Use Cases: Synonyms: 'Monetization'; groups 'headerAd', 'sidebarAd', 'inContentAd', 'footerAd', 'sponsoredContent', 'nativeAd', 'videoAd', 'affiliatePanel'; for Trakfox banners or DnDHubs native ads.
 *   Example Usage: Apply AdFormatTaxonomy to <FramrPortal target="headerAd" category="Ads"> for banner ads.
 *
 * - 'Media': Components for media playback and display.
 *   Classifications: UI media (playback); aligns with HTML media semantics.
 *   Identifiers: lowercase: 'media', camelCase: 'mediaCategory', snake_case: 'media_category', ALL_CAP: 'MEDIA', cache key: 'category:media:componentId'.
 *   Model Identifier Format: 'media-{src}-{controls}'.
 *   Variations and Use Cases: Synonyms: 'Multimedia'; groups 'videoPlayer', 'audioPlayer', 'imageGallery', 'mediaControls'; for HealthOrb tutorials or GEOCoLab galleries.
 *   Example Usage: Use MediaControlsTaxonomy with <FramrPortal target="videoPlayer" category="Media"> for player controls.
 *
 * - 'Analytics': Components for data visualization and metrics.
 *   Classifications: UI analytics (dashboard); for data-driven UIs.
 *   Identifiers: lowercase: 'analytics', camelCase: 'analyticsCategory', snake_case: 'analytics_category', ALL_CAP: 'ANALYTICS', cache key: 'category:analytics:componentId'.
 *   Model Identifier Format: 'analytics-{metricId}-{range}'.
 *   Variations and Use Cases: Synonyms: 'DataViz'; groups 'analytics', 'heatmap', 'sessionRecorder', 'metricsPanel', 'kpiCards', 'chartPanel', 'dataTable'; for DataOrb reports or GEOCoLab analytics.
 *   Example Usage: Apply DashboardLayoutTaxonomy to <FramrPortal target="dashboardWidgets" category="Analytics"> for grid layouts.
 *
 * - 'Collaboration': Components for real-time or async collaboration.
 *   Classifications: UI collaboration (interactive); aligns with WebSocket/polling.
 *   Identifiers: lowercase: 'collaboration', camelCase: 'collaborationCategory', snake_case: 'collaboration_category', ALL_CAP: 'COLLABORATION', cache key: 'category:collaboration:componentId'.
 *   Model Identifier Format: 'collaboration-{docId}-{user}'.
 *   Variations and Use Cases: Synonyms: 'Teamwork'; groups 'chat', 'comments', 'annotations', 'presence', 'collaboration', 'faq'; for DnDHubs forums or HealthOrb chats.
 *   Example Usage: Use CollaborationModeTaxonomy with <FramrPortal target="chat" category="Collaboration"> for real-time messaging.
 *
 * - 'Onboarding': Components for user onboarding and guidance.
 *   Classifications: UI onboarding (guidance); for user education.
 *   Identifiers: lowercase: 'onboarding', camelCase: 'onboardingCategory', snake_case: 'onboarding_category', ALL_CAP: 'ONBOARDING', cache key: 'category:onboarding:componentId'.
 *   Model Identifier Format: 'onboarding-{step}-{completed}'.
 *   Variations and Use Cases: Synonyms: 'UserGuidance'; groups 'onboardingTour', 'welcomeBanner', 'tutorialOverlay', 'stepIndicator'; for Trakfox first-time flows or HealthOrb tutorials.
 *   Example Usage: Use OnboardingStepTaxonomy with <FramrPortal target="onboardingTour" category="Onboarding"> for guided tours.
 *
 * - 'Error': Components for error handling and recovery.
 *   Classifications: UI error (recovery); for error states.
 *   Identifiers: lowercase: 'error', camelCase: 'errorCategory', snake_case: 'error_category', ALL_CAP: 'ERROR', cache key: 'category:error:componentId'.
 *   Model Identifier Format: 'error-{code}-{message}'.
 *   Variations and Use Cases: Synonyms: 'ErrorHandling'; groups 'errorBoundary', 'errorToast', 'retryPanel'; for Trakfox crash recovery or DnDHubs API errors.
 *   Example Usage: Use ErrorSeverityTaxonomy with <FramrPortal target="errorToast" category="Error"> for error alerts.
 *
 * - 'Ecommerce': Components for e-commerce functionality.
 *   Classifications: UI e-commerce (commerce); for shopping features.
 *   Identifiers: lowercase: 'ecommerce', camelCase: 'ecommerceCategory', snake_case: 'ecommerce_category', ALL_CAP: 'ECOMMERCE', cache key: 'category:ecommerce:componentId'.
 *   Model Identifier Format: 'ecommerce-{itemId}-{total}'.
 *   Variations and Use Cases: Synonyms: 'Shopping'; groups 'cartSummary', 'productCarousel', 'wishlist'; for DnDHubs marketplace or Trakfox product pages.
 *   Example Usage: Use CartDisplayTaxonomy with <FramrPortal target="cartSummary" category="Ecommerce"> for checkout summaries.
 *
 * - 'Social': Components for social interactions.
 *   Classifications: UI social (interaction); for community features.
 *   Identifiers: lowercase: 'social', camelCase: 'socialCategory', snake_case: 'social_category', ALL_CAP: 'SOCIAL', cache key: 'category:social:componentId'.
 *   Model Identifier Format: 'social-{platform}-{interaction}'.
 *   Variations and Use Cases: Synonyms: 'Community'; groups 'socialShare', 'userProfile', 'activityFeed'; for HealthOrb sharing or GEOCoLab profiles.
 *   Example Usage: Use SharePlatformTaxonomy with <FramrPortal target="socialShare" category="Social"> for share buttons.
 *
 * - 'Localization': Components for language and currency selection.
 *   Classifications: UI localization (i18n); aligns with ISO 639-1/3166.
 *   Identifiers: lowercase: 'localization', camelCase: 'localizationCategory', snake_case: 'localization_category', ALL_CAP: 'LOCALIZATION', cache key: 'category:localization:componentId'.
 *   Model Identifier Format: 'localization-{langCode}-{currency}'.
 *   Variations and Use Cases: Synonyms: 'I18n'; groups 'languageSelector', 'currencySwitcher'; for DnDHubs multi-language or DataOrb pricing.
 *   Example Usage: Use LocaleFormatTaxonomy with <FramrPortal target="languageSelector" category="Localization"> for language dropdowns.
 *
 * - 'Form': Components for form inputs and navigation.
 *   Classifications: UI form (input); aligns with HTML form semantics.
 *   Identifiers: lowercase: 'form', camelCase: 'formCategory', snake_case: 'form_category', ALL_CAP: 'FORM', cache key: 'category:form:componentId'.
 *   Model Identifier Format: 'form-{fieldId}-{submission}'.
 *   Variations and Use Cases: Synonyms: 'Input'; groups 'form', 'pagination', 'tabs', 'accordion', 'search'; for Trakfox signups or HealthOrb search bars.
 *   Example Usage: Use FormValidationTaxonomy with <FramrPortal target="form" category="Form"> for real-time validation.
 *
 * - 'Accessibility': Components for accessibility enhancements.
 *   Classifications: UI accessibility (a11y); aligns with WCAG 2.1.
 *   Identifiers: lowercase: 'accessibility', camelCase: 'accessibilityCategory', snake_case: 'accessibility_category', ALL_CAP: 'ACCESSIBILITY', cache key: 'category:accessibility:componentId'.
 *   Model Identifier Format: 'accessibility-{toolId}-{enabled}'.
 *   Variations and Use Cases: Synonyms: 'A11y'; groups 'accessibilityPanel', 'focusTrap', 'ariaLive'; for HealthOrb contrast tools or Trakfox live regions.
 *   Example Usage: Use A11yModeTaxonomy with <FramrPortal target="ariaLive" category="Accessibility"> for screen reader announcements.
 */
export type PortalKeyCategoryTaxonomy = 'Header' | 'Navigation' | 'Content' | 'Feedback' | 'Panel' | 'Command' | 'Loading' | 'Ads' | 'Media' | 'Analytics' | 'Collaboration' | 'Onboarding' | 'Error' | 'Ecommerce' | 'Social' | 'Localization' | 'Form' | 'Accessibility';