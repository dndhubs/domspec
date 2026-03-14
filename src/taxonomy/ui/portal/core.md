# Comprehensive Portal Taxonomy

## PortalKeyTaxonomy
```typescript
/**
 * Union type representing PortalKey in the DOMSpec and Framr ecosystem, defining standardized targets for dynamic content injection via portals (e.g., using React's createPortal integrated with FramrContext).
 * These keys cover UI sections for layout, feedback, content, and specialized features, aligned with patterns from Remix, Tailwind CSS, and standards like WCAG for accessibility or ISO 9241 for usability.
 * Each variant includes details for consistency in storage (e.g., as config keys in databases), caching, and validation utilities (e.g., regex checks in @framr/utils).
 *
 * - 'appBar': Top navigation bar for app-level actions and branding.
 *   Classifications: UI layout (header); aligns with Material Design app bars, Bootstrap navbar.
 *   Identifiers: lowercase: 'appbar', camelCase: 'appBar', snake_case: 'app_bar', ALL_CAP: 'APP_BAR', cache key: 'portal:appBar:instanceId'.
 *   Model Identifier Format: 'appbar-{layoutId}-{direction}' (kebab-case for consistent config storage in JSON files or PostgreSQL tables).
 *   Variations and Use Cases: Synonyms: 'header', 'topBar'; used in dashboard layouts for Trakfox navigation or HealthOrb toolbars; validate via utility like `isHeaderPortal(key)` for priority rendering.
 *   Example Usage: Render logo and menu in <FramrPortal target="appBar"> for Remix routes in DataOrb dashboards.
 *
 * - 'headerBar': Alternative header for secondary navigation or tools.
 *   Classifications: UI layout (header); similar to Ant Design header components.
 *   Identifiers: lowercase: 'headerbar', camelCase: 'headerBar', snake_case: 'header_bar', ALL_CAP: 'HEADER_BAR', cache key: 'portal:headerBar:instanceId'.
 *   Model Identifier Format: 'headerbar-{themeId}-{timestamp}' (kebab-case for versioned storage in MongoDB).
 *   Variations and Use Cases: Synonyms: 'subHeader'; applied in multi-level nav for GEOCoLab maps or DnDHubs marketplace headers.
 *   Example Usage: Inject search bar via <FramrPortal target="headerBar"> in Tailwind-styled Remix apps.
 *
 * - 'toolBar': Toolbar for quick actions or tools.
 *   Classifications: UI interactive (toolbar); aligns with Fluent UI toolbars.
 *   Identifiers: lowercase: 'toolbar', camelCase: 'toolBar', snake_case: 'tool_bar', ALL_CAP: 'TOOL_BAR', cache key: 'portal:toolBar:instanceId'.
 *   Model Identifier Format: 'toolbar-{actionId}-{userId}' (kebab-case for event logging in Elasticsearch).
 *   Variations and Use Cases: Synonyms: 'actionBar'; used in editing interfaces like richTextEditor in Trakfox content pages.
 *   Example Usage: Render edit buttons in <FramrPortal target="toolBar"> for HealthOrb form tools.
 *
 * - 'navigation': Main navigation menu or links.
 *   Classifications: UI layout (navigation); compliant with ARIA navigation roles.
 *   Identifiers: lowercase: 'navigation', camelCase: 'navigation', snake_case: 'navigation', ALL_CAP: 'NAVIGATION', cache key: 'portal:navigation:instanceId'.
 *   Model Identifier Format: 'navigation-{routeId}-{direction}' (kebab-case for route-based storage in Remix loaders).
 *   Variations and Use Cases: Synonyms: 'navMenu'; for sidebar or top nav in DnDHubs e-commerce pages.
 *   Example Usage: Use <SidebarPortal> equivalent for Remix Link components in navigation portals.
 *
 * - 'breadcrumb': Path-based navigation trail.
 *   Classifications: UI navigation (breadcrumb); aligns with WCAG 2.1 for orientation.
 *   Identifiers: lowercase: 'breadcrumb', camelCase: 'breadcrumb', snake_case: 'breadcrumb', ALL_CAP: 'BREADCRUMB', cache key: 'portal:breadcrumb:instanceId'.
 *   Model Identifier Format: 'breadcrumb-{pathId}-{timestamp}' (kebab-case for session storage in browsers).
 *   Variations and Use Cases: Synonyms: 'trail'; in hierarchical views like GEOCoLab geospatial sections.
 *   Example Usage: Render dynamic paths in <FramrPortal target="breadcrumb"> for DataOrb analytics navigation.
 *
 * - 'quickPanel': Quick access panel for shortcuts.
 *   Classifications: UI feedback (panel); similar to quick settings in mobile UIs.
 *   Identifiers: lowercase: 'quickpanel', camelCase: 'quickPanel', snake_case: 'quick_panel', ALL_CAP: 'QUICK_PANEL', cache key: 'portal:quickPanel:instanceId'.
 *   Model Identifier Format: 'quickpanel-{userPrefId}-{visibility}' (kebab-case for user config in PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'shortcutPanel'; for user dashboards in Trakfox loyalty programs.
 *   Example Usage: Inject favorites via <FramrPortal target="quickPanel"> in Remix client-only rendering.
 *
 * - 'skeleton': Loading skeleton for content placeholders.
 *   Classifications: UI content (loading); aligns with UX best practices for perceived performance.
 *   Identifiers: lowercase: 'skeleton', camelCase: 'skeleton', snake_case: 'skeleton', ALL_CAP: 'SKELETON', cache key: 'portal:skeleton:instanceId'.
 *   Model Identifier Format: 'skeleton-{contentType}-{timestamp}' (kebab-case for temp storage in Redis).
 *   Variations and Use Cases: Synonyms: 'loader'; used during data fetches in HealthOrb DHIS2 integrations.
 *   Example Usage: Show animate-pulse div in <FramrPortal target="skeleton"> fallback for SSR in Remix.
 *
 * - 'bodyContent': Main body content area.
 *   Classifications: UI layout (body); core to HTML body semantics.
 *   Identifiers: lowercase: 'bodycontent', camelCase: 'bodyContent', snake_case: 'body_content', ALL_CAP: 'BODY_CONTENT', cache key: 'portal:bodyContent:instanceId'.
 *   Model Identifier Format: 'bodycontent-{pageId}-{direction}' (kebab-case for main content logs).
 *   Variations and Use Cases: Synonyms: 'main'; central area in DnDHubs marketplace pages.
 *   Example Usage: Render primary UI in <FramrPortal target="bodyContent"> for Tailwind grid layouts.
 *
 * - 'sidebar': General sidebar for supplementary content.
 *   Classifications: UI layout (sidebar); aligns with CSS flex sidebar patterns.
 *   Identifiers: lowercase: 'sidebar', camelCase: 'sidebar', snake_case: 'sidebar', ALL_CAP: 'SIDEBAR', cache key: 'portal:sidebar:instanceId'.
 *   Model Identifier Format: 'sidebar-{side}-{themeId}' (kebab-case for layout configs).
 *   Variations and Use Cases: Synonyms: 'sideNav'; for filters in GEOCoLab maps or Trakfox feeds.
 *   Example Usage: Use <SidebarPortal> to inject nav in Remix responsive designs.
 *
 * - 'leftSidebar': Left-positioned sidebar.
 *   Classifications: UI layout (sidebar); direction-specific for LTR/RTL support.
 *   Identifiers: lowercase: 'leftsidebar', camelCase: 'leftSidebar', snake_case: 'left_sidebar', ALL_CAP: 'LEFT_SIDEBAR', cache key: 'portal:leftSidebar:instanceId'.
 *   Model Identifier Format: 'leftsidebar-{contentId}-{direction}' (kebab-case for RTL flipping).
 *   Variations and Use Cases: Synonyms: 'leftNav'; default in LTR layouts for HealthOrb patient lists.
 *   Example Usage: Render menu in <FramrPortal target="leftSidebar"> with Tailwind 'left-0'.
 *
 * - 'rightSidebar': Right-positioned sidebar.
 *   Classifications: UI layout (sidebar); direction-specific.
 *   Identifiers: lowercase: 'rightsidebar', camelCase: 'rightSidebar', snake_case: 'right_sidebar', ALL_CAP: 'RIGHT_SIDEBAR', cache key: 'portal:rightSidebar:instanceId'.
 *   Model Identifier Format: 'rightsidebar-{contentId}-{direction}' (kebab-case for RTL flipping).
 *   Variations and Use Cases: Synonyms: 'rightNav'; for chat in DnDHubs collaboration.
 *   Example Usage: Inject tools in <FramrPortal target="rightSidebar"> with Tailwind 'right-0'.
 *
 * - 'mainContent': Primary content area within body.
 *   Classifications: UI content (main); ARIA main role compliant.
 *   Identifiers: lowercase: 'maincontent', camelCase: 'mainContent', snake_case: 'main_content', ALL_CAP: 'MAIN_CONTENT', cache key: 'portal:mainContent:instanceId'.
 *   Model Identifier Format: 'maincontent-{sectionId}-{timestamp}' (kebab-case for content versioning).
 *   Variations and Use Cases: Synonyms: 'primaryContent'; core display in Trakfox articles.
 *   Example Usage: Render article body in <FramrPortal target="mainContent"> for Remix routes.
 *
 * - 'contentHeader': Header for content sections.
 *   Classifications: UI content (header); semantic section header.
 *   Identifiers: lowercase: 'contentheader', camelCase: 'contentHeader', snake_case: 'content_header', ALL_CAP: 'CONTENT_HEADER', cache key: 'portal:contentHeader:instanceId'.
 *   Model Identifier Format: 'contentheader-{titleId}-{direction}' (kebab-case for SEO storage).
 *   Variations and Use Cases: Synonyms: 'sectionHeader'; for titles in DataOrb reports.
 *   Example Usage: Inject h1 in <FramrPortal target="contentHeader"> with Tailwind typography.
 *
 * - 'contentFooter': Footer for content sections.
 *   Classifications: UI content (footer); semantic section footer.
 *   Identifiers: lowercase: 'contentfooter', camelCase: 'contentFooter', snake_case: 'content_footer', ALL_CAP: 'CONTENT_FOOTER', cache key: 'portal:contentFooter:instanceId'.
 *   Model Identifier Format: 'contentfooter-{linksId}-{timestamp}' (kebab-case for pagination storage).
 *   Variations and Use Cases: Synonyms: 'sectionFooter'; for related links in GEOCoLab docs.
 *   Example Usage: Render pagination in <FramrPortal target="contentFooter">.
 *
 * - 'modal': Overlay for modal dialogs.
 *   Classifications: UI feedback (modal); aligns with ARIA dialog roles.
 *   Identifiers: lowercase: 'modal', camelCase: 'modal', snake_case: 'modal', ALL_CAP: 'MODAL', cache key: 'portal:modal:instanceId'.
 *   Model Identifier Format: 'modal-{dialogId}-{visibility}' (kebab-case for state storage).
 *   Variations and Use Cases: Synonyms: 'popup'; for confirmations in HealthOrb forms.
 *   Example Usage: Use <ModalPortal> for user profile in DnDHubs.
 *
 * - 'notification': Notification or alert area.
 *   Classifications: UI feedback (notification); WCAG live region compliant.
 *   Identifiers: lowercase: 'notification', camelCase: 'notification', snake_case: 'notification', ALL_CAP: 'NOTIFICATION', cache key: 'portal:notification:instanceId'.
 *   Model Identifier Format: 'notification-{type}-{timestamp}' (kebab-case for queue storage).
 *   Variations and Use Cases: Synonyms: 'alert'; for system messages in Trakfox.
 *   Example Usage: Render toast-like notifications in <FramrPortal target="notification">.
 *
 * - 'command': Command palette or search command.
 *   Classifications: UI interactive (command); inspired by VS Code command palette.
 *   Identifiers: lowercase: 'command', camelCase: 'command', snake_case: 'command', ALL_CAP: 'COMMAND', cache key: 'portal:command:instanceId'.
 *   Model Identifier Format: 'command-{shortcutId}-{userId}' (kebab-case for keybinding storage).
 *   Variations and Use Cases: Synonyms: 'cmdPalette'; for quick actions in DataOrb.
 *   Example Usage: Open with Ctrl+K in <FramrPortal target="command">.
 *
 * - 'contextMenu': Right-click context menu.
 *   Classifications: UI interactive (menu); ARIA menu role.
 *   Identifiers: lowercase: 'contextmenu', camelCase: 'contextMenu', snake_case: 'context_menu', ALL_CAP: 'CONTEXT_MENU', cache key: 'portal:contextMenu:instanceId'.
 *   Model Identifier Format: 'contextmenu-{targetId}-{position}' (kebab-case for event coords).
 *   Variations and Use Cases: Synonyms: 'rightClickMenu'; for item actions in GEOCoLab.
 *   Example Usage: Render options on right-click in <FramrPortal target="contextMenu">.
 *
 * - 'tooltip': Hover tooltip for info.
 *   Classifications: UI feedback (tooltip); aligns with ARIA tooltip role.
 *   Identifiers: lowercase: 'tooltip', camelCase: 'tooltip', snake_case: 'tooltip', ALL_CAP: 'TOOLTIP', cache key: 'portal:tooltip:instanceId'.
 *   Model Identifier Format: 'tooltip-{elementId}-{text}' (kebab-case for accessibility labels).
 *   Variations and Use Cases: Synonyms: 'hoverInfo'; for button hints in HealthOrb.
 *   Example Usage: Show on hover in <FramrPortal target="tooltip"> with Tailwind positioning.
 *
 * - 'sidePanel': Slide-in side panel.
 *   Classifications: UI feedback (panel); similar to drawer but fixed.
 *   Identifiers: lowercase: 'sidepanel', camelCase: 'sidePanel', snake_case: 'side_panel', ALL_CAP: 'SIDE_PANEL', cache key: 'portal:sidePanel:instanceId'.
 *   Model Identifier Format: 'sidepanel-{side}-{contentId}' (kebab-case for position storage).
 *   Variations and Use Cases: Synonyms: 'infoPanel'; for details in DnDHubs products.
 *   Example Usage: Slide from right in <FramrPortal target="sidePanel">.
 *
 * - 'dialog': General dialog box.
 *   Classifications: UI feedback (dialog); ARIA dialog.
 *   Identifiers: lowercase: 'dialog', camelCase: 'dialog', snake_case: 'dialog', ALL_CAP: 'DIALOG', cache key: 'portal:dialog:instanceId'.
 *   Model Identifier Format: 'dialog-{type}-{id}' (kebab-case for modal vs non-modal).
 *   Variations and Use Cases: Synonyms: 'alertDialog'; for prompts in Trakfox.
 *   Example Usage: Use <FramrPortal target="dialog"> for confirmations.
 *
 * - 'popover': Popover for additional info.
 *   Classifications: UI feedback (popover); aligns with Popover API proposals.
 *   Identifiers: lowercase: 'popover', camelCase: 'popover', snake_case: 'popover', ALL_CAP: 'POPOVER', cache key: 'portal:popover:instanceId'.
 *   Model Identifier Format: 'popover-{anchorId}-{position}' (kebab-case for anchor refs).
 *   Variations and Use Cases: Synonyms: 'flyout'; for menu popovers in DataOrb.
 *   Example Usage: Anchor to button in <FramrPortal target="popover">.
 *
 * - 'drawer': Slide-in drawer from edges.
 *   Classifications: UI feedback (drawer); Material Design drawer.
 *   Identifiers: lowercase: 'drawer', camelCase: 'drawer', snake_case: 'drawer', ALL_CAP: 'DRAWER', cache key: 'portal:drawer:instanceId'.
 *   Model Identifier Format: 'drawer-{side}-{state}' (kebab-case for open/close storage).
 *   Variations and Use Cases: Synonyms: 'slideout'; for mobile nav in GEOCoLab.
 *   Example Usage: Use <DrawerPortal> for left slide-in.
 *
 * - 'progressBar': Progress indicator bar.
 *   Classifications: UI feedback (progress); ARIA progressbar role.
 *   Identifiers: lowercase: 'progressbar', camelCase: 'progressBar', snake_case: 'progress_bar', ALL_CAP: 'PROGRESS_BAR', cache key: 'portal:progressBar:instanceId'.
 *   Model Identifier Format: 'progressbar-{taskId}-{percentage}' (kebab-case for status updates).
 *   Variations and Use Cases: Synonyms: 'loadingBar'; for uploads in HealthOrb.
 *   Example Usage: Top bar in <FramrPortal target="progressBar"> during fetches.
 *
 * - 'loadingOverlay': Full-screen loading overlay.
 *   Classifications: UI feedback (loading); UX for blocking interactions.
 *   Identifiers: lowercase: 'loadingoverlay', camelCase: 'loadingOverlay', snake_case: 'loading_overlay', ALL_CAP: 'LOADING_OVERLAY', cache key: 'portal:loadingOverlay:instanceId'.
 *   Model Identifier Format: 'loadingoverlay-{pageId}-{timestamp}' (kebab-case for timeout storage).
 *   Variations and Use Cases: Synonyms: 'spinnerOverlay'; during SSR hydration in Remix.
 *   Example Usage: Cover screen in <FramrPortal target="loadingOverlay"> with animate-pulse.
 *
 * - 'confirmDialog': Confirmation dialog.
 *   Classifications: UI feedback (dialog); subset of dialog for yes/no.
 *   Identifiers: lowercase: 'confirmdialog', camelCase: 'confirmDialog', snake_case: 'confirm_dialog', ALL_CAP: 'CONFIRM_DIALOG', cache key: 'portal:confirmDialog:instanceId'.
 *   Model Identifier Format: 'confirmdialog-{actionId}-{response}' (kebab-case for logging responses).
 *   Variations and Use Cases: Synonyms: 'yesNoDialog'; for deletes in DnDHubs.
 *   Example Usage: Prompt before submit in <FramrPortal target="confirmDialog">.
 *
 * - 'survey': Survey form overlay.
 *   Classifications: UI feedback (survey); for user input collection.
 *   Identifiers: lowercase: 'survey', camelCase: 'survey', snake_case: 'survey', ALL_CAP: 'SURVEY', cache key: 'portal:survey:instanceId'.
 *   Model Identifier Format: 'survey-{questionId}-{responseId}' (kebab-case for form data storage).
 *   Variations and Use Cases: Synonyms: 'feedbackForm'; post-interaction in Trakfox.
 *   Example Usage: Popup survey in <FramrPortal target="survey"> after login.
 *
 * - 'rating': Rating component portal.
 *   Classifications: UI feedback (rating); for stars or likes.
 *   Identifiers: lowercase: 'rating', camelCase: 'rating', snake_case: 'rating', ALL_CAP: 'RATING', cache key: 'portal:rating:instanceId'.
 *   Model Identifier Format: 'rating-{itemId}-{score}' (kebab-case for analytics storage).
 *   Variations and Use Cases: Synonyms: 'starRating'; for products in DnDHubs marketplace.
 *   Example Usage: Inject stars in <FramrPortal target="rating"> for reviews.
 *
 * - 'poll': Poll or vote component.
 *   Classifications: UI feedback (poll); for quick votes.
 *   Identifiers: lowercase: 'poll', camelCase: 'poll', snake_case: 'poll', ALL_CAP: 'POLL', cache key: 'portal:poll:instanceId'.
 *   Model Identifier Format: 'poll-{optionId}-{voteCount}' (kebab-case for real-time updates).
 *   Variations and Use Cases: Synonyms: 'vote'; community polls in GEOCoLab.
 *   Example Usage: Render options in <FramrPortal target="poll"> with Tailwind buttons.
 *
 * - 'review': User review section.
 *   Classifications: UI feedback (review); for comments and ratings.
 *   Identifiers: lowercase: 'review', camelCase: 'review', snake_case: 'review', ALL_CAP: 'REVIEW', cache key: 'portal:review:instanceId'.
 *   Model Identifier Format: 'review-{productId}-{userId}' (kebab-case for moderation storage).
 *   Variations and Use Cases: Synonyms: 'feedbackReview'; for HealthOrb service reviews.
 *   Example Usage: List reviews in <FramrPortal target="review"> below content.
 *
 * - 'footerBar': Bottom footer bar for app-level info.
 *   Classifications: UI layout (footer); aligns with Bootstrap footer.
 *   Identifiers: lowercase: 'footerbar', camelCase: 'footerBar', snake_case: 'footer_bar', ALL_CAP: 'FOOTER_BAR', cache key: 'portal:footerBar:instanceId'.
 *   Model Identifier Format: 'footerbar-{legalId}-{direction}' (kebab-case for static content).
 *   Variations and Use Cases: Synonyms: 'bottomBar'; for copyright in Trakfox pages.
 *   Example Usage: Render links in <FramrPortal target="footerBar"> at page bottom.
 *
 * - 'footerNavigation': Navigation in footer.
 *   Classifications: UI navigation (footer); semantic nav in footer.
 *   Identifiers: lowercase: 'footernavigation', camelCase: 'footerNavigation', snake_case: 'footer_navigation', ALL_CAP: 'FOOTER_NAVIGATION', cache key: 'portal:footerNavigation:instanceId'.
 *   Model Identifier Format: 'footernavigation-{linkId}-{timestamp}' (kebab-case for sitemap storage).
 *   Variations and Use Cases: Synonyms: 'bottomNav'; for sitemaps in DataOrb.
 *   Example Usage: Inject Remix Links in <FramrPortal target="footerNavigation">.
 *
 * - 'bottomNavigation': Mobile bottom nav bar.
 *   Classifications: UI navigation (mobile); Material Design bottom nav.
 *   Identifiers: lowercase: 'bottomnavigation', camelCase: 'bottomNavigation', snake_case: 'bottom_navigation', ALL_CAP: 'BOTTOM_NAVIGATION', cache key: 'portal:bottomNavigation:instanceId'.
 *   Model Identifier Format: 'bottomnavigation-{iconId}-{active}' (kebab-case for mobile state).
 *   Variations and Use Cases: Synonyms: 'tabBarMobile'; for apps in DnDHubs.
 *   Example Usage: Render icons in <FramrPortal target="bottomNavigation"> for responsive views.
 *
 * - 'legalInfo': Legal information section in footer.
 *   Classifications: UI content (legal); GDPR-compliant disclosures.
 *   Identifiers: lowercase: 'legalinfo', camelCase: 'legalInfo', snake_case: 'legal_info', ALL_CAP: 'LEGAL_INFO', cache key: 'portal:legalInfo:instanceId'.
 *   Model Identifier Format: 'legalinfo-{policyId}-{version}' (kebab-case for compliance logs).
 *   Variations and Use Cases: Synonyms: 'termsSection'; for privacy links in GEOCoLab.
 *   Example Usage: Render terms in <FramrPortal target="legalInfo">.
 *
 * - 'bottomSection': General bottom content area.
 *   Classifications: UI layout (bottom); flexible footer extension.
 *   Identifiers: lowercase: 'bottomsection', camelCase: 'bottomSection', snake_case: 'bottom_section', ALL_CAP: 'BOTTOM_SECTION', cache key: 'portal:bottomSection:instanceId'.
 *   Model Identifier Format: 'bottomsection-{contentId}-{timestamp}' (kebab-case for dynamic content).
 *   Variations and Use Cases: Synonyms: 'footerExtension'; for newsletters in HealthOrb.
 *   Example Usage: Inject signup form in <FramrPortal target="bottomSection">.
 *
 * - 'megaMenu': Large dropdown menu.
 *   Classifications: UI navigation (menu); for complex nav.
 *   Identifiers: lowercase: 'megamenu', camelCase: 'megaMenu', snake_case: 'mega_menu', ALL_CAP: 'MEGA_MENU', cache key: 'portal:megaMenu:instanceId'.
 *   Model Identifier Format: 'megamenu-{categoryId}-{hover}' (kebab-case for submenu storage).
 *   Variations and Use Cases: Synonyms: 'dropdownMega'; for categories in Trakfox.
 *   Example Usage: Render grid menu in <FramrPortal target="megaMenu"> on hover.
 *
 * - 'mobileMenu': Menu for mobile views.
 *   Classifications: UI navigation (mobile); responsive hamburger menu.
 *   Identifiers: lowercase: 'mobilemenu', camelCase: 'mobileMenu', snake_case: 'mobile_menu', ALL_CAP: 'MOBILE_MENU', cache key: 'portal:mobileMenu:instanceId'.
 *   Model Identifier Format: 'mobilemenu-{toggleId}-{state}' (kebab-case for toggle events).
 *   Variations and Use Cases: Synonyms: 'hamburgerMenu'; for responsive DnDHubs.
 *   Example Usage: Slide-in menu in <FramrPortal target="mobileMenu"> for small screens.
 *
 * - 'tabBar': Tab navigation bar.
 *   Classifications: UI navigation (tabs); ARIA tablist role.
 *   Identifiers: lowercase: 'tabbar', camelCase: 'tabBar', snake_case: 'tab_bar', ALL_CAP: 'TAB_BAR', cache key: 'portal:tabBar:instanceId'.
 *   Model Identifier Format: 'tabbar-{tabId}-{active}' (kebab-case for state management).
 *   Variations and Use Cases: Synonyms: 'tabsNav'; for sections in DataOrb dashboards.
 *   Example Usage: Render tabs in <FramrPortal target="tabBar"> with Tailwind underline.
 *
 * - 'stepIndicator': Progress steps indicator.
 *   Classifications: UI navigation (steps); for wizards.
 *   Identifiers: lowercase: 'stepindicator', camelCase: 'stepIndicator', snake_case: 'step_indicator', ALL_CAP: 'STEP_INDICATOR', cache key: 'portal:stepIndicator:instanceId'.
 *   Model Identifier Format: 'stepindicator-{stepNum}-{completed}' (kebab-case for form progress).
 *   Variations and Use Cases: Synonyms: 'wizardSteps'; for onboarding in GEOCoLab.
 *   Example Usage: Show steps in <FramrPortal target="stepIndicator"> for multi-step forms.
 *
 * - 'codeEditor': Code editing area.
 *   Classifications: UI content (editor); for developer tools.
 *   Identifiers: lowercase: 'codeeditor', camelCase: 'codeEditor', snake_case: 'code_editor', ALL_CAP: 'CODE_EDITOR', cache key: 'portal:codeEditor:instanceId'.
 *   Model Identifier Format: 'codeeditor-{language}-{fileId}' (kebab-case for code storage).
 *   Variations and Use Cases: Synonyms: 'monacoEditor'; for integrations in HealthOrb scripts.
 *   Example Usage: Embed editor in <FramrPortal target="codeEditor">.
 *
 * - 'markdown': Markdown rendering area.
 *   Classifications: UI content (markdown); for rich text display.
 *   Identifiers: lowercase: 'markdown', camelCase: 'markdown', snake_case: 'markdown', ALL_CAP: 'MARKDOWN', cache key: 'portal:markdown:instanceId'.
 *   Model Identifier Format: 'markdown-{docId}-{rendered}' (kebab-case for cache invalidation).
 *   Variations and Use Cases: Synonyms: 'mdViewer'; for docs in Trakfox articles.
 *   Example Usage: Render MD in <FramrPortal target="markdown"> with Tailwind prose.
 *
 * - 'richTextEditor': WYSIWYG text editor.
 *   Classifications: UI content (editor); for content creation.
 *   Identifiers: lowercase: 'richtexteditor', camelCase: 'richTextEditor', snake_case: 'rich_text_editor', ALL_CAP: 'RICH_TEXT_EDITOR', cache key: 'portal:richTextEditor:instanceId'.
 *   Model Identifier Format: 'richtexteditor-{contentId}-{draft}' (kebab-case for autosave).
 *   Variations and Use Cases: Synonyms: 'wysiwyg'; for posts in DnDHubs forums.
 *   Example Usage: Embed Quill or TinyMCE in <FramrPortal target="richTextEditor">.
 *
 * - 'timeline': Timeline view for events.
 *   Classifications: UI content (timeline); for chronological data.
 *   Identifiers: lowercase: 'timeline', camelCase: 'timeline', snake_case: 'timeline', ALL_CAP: 'TIMELINE', cache key: 'portal:timeline:instanceId'.
 *   Model Identifier Format: 'timeline-{eventId}-{date}' (kebab-case for history logs).
 *   Variations and Use Cases: Synonyms: 'eventLine'; for activity in DataOrb.
 *   Example Usage: Render events in <FramrPortal target="timeline"> with Tailwind timeline CSS.
 *
 * - 'comparison': Comparison table or view.
 *   Classifications: UI content (comparison); for side-by-side data.
 *   Identifiers: lowercase: 'comparison', camelCase: 'comparison', snake_case: 'comparison', ALL_CAP: 'COMPARISON', cache key: 'portal:comparison:instanceId'.
 *   Model Identifier Format: 'comparison-{item1}-{item2}' (kebab-case for query params).
 *   Variations and Use Cases: Synonyms: 'vsTable'; for products in GEOCoLab tiers.
 *   Example Usage: Show table in <FramrPortal target="comparison">.
 *
 * - 'headerAd': Ad in header area.
 *   Classifications: UI ads (header); for monetization.
 *   Identifiers: lowercase: 'headerad', camelCase: 'headerAd', snake_case: 'header_ad', ALL_CAP: 'HEADER_AD', cache key: 'portal:headerAd:instanceId'.
 *   Model Identifier Format: 'headerad-{adId}-{impression}' (kebab-case for ad tracking).
 *   Variations and Use Cases: Synonyms: 'topAd'; for banners in HealthOrb.
 *   Example Usage: Inject Google Ad in <FramrPortal target="headerAd">.
 *
 * - 'sidebarAd': Ad in sidebar.
 *   Classifications: UI ads (sidebar).
 *   Identifiers: lowercase: 'sidebarad', camelCase: 'sidebarAd', snake_case: 'sidebar_ad', ALL_CAP: 'SIDEBAR_AD', cache key: 'portal:sidebarAd:instanceId'.
 *   Model Identifier Format: 'sidebarad-{adId}-{click}' (kebab-case for metrics).
 *   Variations and Use Cases: Synonyms: 'sideAd'; vertical banners in Trakfox.
 *   Example Usage: Render ad unit in <FramrPortal target="sidebarAd">.
 *
 * - 'inContentAd': Ad embedded in content.
 *   Classifications: UI ads (content); native ad integration.
 *   Identifiers: lowercase: 'incontentad', camelCase: 'inContentAd', snake_case: 'in_content_ad', ALL_CAP: 'IN_CONTENT_AD', cache key: 'portal:inContentAd:instanceId'.
 *   Model Identifier Format: 'incontentad-{position}-{adId}' (kebab-case for insertion points).
 *   Variations and Use Cases: Synonyms: 'inlineAd'; mid-article in DnDHubs blogs.
 *   Example Usage: Break content with ad in <FramrPortal target="inContentAd">.
 *
 * - 'footerAd': Ad in footer.
 *   Classifications: UI ads (footer).
 *   Identifiers: lowercase: 'footerad', camelCase: 'footerAd', snake_case: 'footer_ad', ALL_CAP: 'FOOTER_AD', cache key: 'portal:footerAd:instanceId'.
 *   Model Identifier Format: 'footerad-{adId}-{view}' (kebab-case for scroll tracking).
 *   Variations and Use Cases: Synonyms: 'bottomAd'; for sponsored links in DataOrb.
 *   Example Usage: Place ad at bottom in <FramrPortal target="footerAd">.
 *
 * - 'sponsoredContent': Sponsored content section.
 *   Classifications: UI ads (sponsored); native advertising.
 *   Identifiers: lowercase: 'sponsoredcontent', camelCase: 'sponsoredContent', snake_case: 'sponsored_content', ALL_CAP: 'SPONSORED_CONTENT', cache key: 'portal:sponsoredContent:instanceId'.
 *   Model Identifier Format: 'sponsoredcontent-{sponsorId}-{contentId}' (kebab-case for partnerships).
 *   Variations and Use Cases: Synonyms: 'paidPost'; featured in GEOCoLab.
 *   Example Usage: Render promoted article in <FramrPortal target="sponsoredContent">.
 *
 * - 'nativeAd': Native ad blending with content.
 *   Classifications: UI ads (native); IAB native ad standards.
 *   Identifiers: lowercase: 'nativead', camelCase: 'nativeAd', snake_case: 'native_ad', ALL_CAP: 'NATIVE_AD', cache key: 'portal:nativeAd:instanceId'.
 *   Model Identifier Format: 'nativead-{format}-{adId}' (kebab-case for type matching).
 *   Variations and Use Cases: Synonyms: 'blendAd'; in feeds for HealthOrb.
 *   Example Usage: Inject seamless ad in <FramrPortal target="nativeAd">.
 *
 * - 'videoAd': Video-based ad.
 *   Classifications: UI ads (video); VAST standards.
 *   Identifiers: lowercase: 'videoad', camelCase: 'videoAd', snake_case: 'video_ad', ALL_CAP: 'VIDEO_AD', cache key: 'portal:videoAd:instanceId'.
 *   Model Identifier Format: 'videoad-{duration}-{playCount}' (kebab-case for video metrics).
 *   Variations and Use Cases: Synonyms: 'preRollAd'; for intros in Trakfox videos.
 *   Example Usage: Play video in <FramrPortal target="videoAd">.
 *
 * - 'affiliatePanel': Affiliate links panel.
 *   Classifications: UI ads (affiliate); for monetization links.
 *   Identifiers: lowercase: 'affiliatepanel', camelCase: 'affiliatePanel', snake_case: 'affiliate_panel', ALL_CAP: 'AFFILIATE_PANEL', cache key: 'portal:affiliatePanel:instanceId'.
 *   Model Identifier Format: 'affiliatepanel-{linkId}-{commission}' (kebab-case for tracking).
 *   Variations and Use Cases: Synonyms: 'partnerLinks'; in DnDHubs products.
 *   Example Usage: Render links in <FramrPortal target="affiliatePanel">.
 *
 * - 'form': Form rendering area.
 *   Classifications: UI theme (form); for input collection.
 *   Identifiers: lowercase: 'form', camelCase: 'form', snake_case: 'form', ALL_CAP: 'FORM', cache key: 'portal:form:instanceId'.
 *   Model Identifier Format: 'form-{fieldId}-{submission}' (kebab-case for validation storage).
 *   Variations and Use Cases: Synonyms: 'inputForm'; for signups in DataOrb.
 *   Example Usage: Render fields in <FramrPortal target="form"> with Tailwind forms.
 *
 * - 'pagination': Pagination controls.
 *   Classifications: UI theme (pagination); for list navigation.
 *   Identifiers: lowercase: 'pagination', camelCase: 'pagination', snake_case: 'pagination', ALL_CAP: 'PAGINATION', cache key: 'portal:pagination:instanceId'.
 *   Model Identifier Format: 'pagination-{pageNum}-{total}' (kebab-case for query params).
 *   Variations and Use Cases: Synonyms: 'pager'; for tables in GEOCoLab data.
 *   Example Usage: Render prev/next in <FramrPortal target="pagination">.
 *
 * - 'tabs': Tab content panels.
 *   Classifications: UI theme (tabs); ARIA tabpanel.
 *   Identifiers: lowercase: 'tabs', camelCase: 'tabs', snake_case: 'tabs', ALL_CAP: 'TABS', cache key: 'portal:tabs:instanceId'.
 *   Model Identifier Format: 'tabs-{tabId}-{content}' (kebab-case for tab state).
 *   Variations and Use Cases: Synonyms: 'tabContent'; for switched views in HealthOrb.
 *   Example Usage: Switch panels in <FramrPortal target="tabs">.
 *
 * - 'hero': Hero banner section.
 *   Classifications: UI theme (hero); for prominent calls to action.
 *   Identifiers: lowercase: 'hero', camelCase: 'hero', snake_case: 'hero', ALL_CAP: 'HERO', cache key: 'portal:hero:instanceId'.
 *   Model Identifier Format: 'hero-{imageId}-{cta}' (kebab-case for landing storage).
 *   Variations and Use Cases: Synonyms: 'bannerHero'; for homepages in Trakfox.
 *   Example Usage: Render large image in <FramrPortal target="hero"> with Tailwind hero.
 *
 * - 'card': Card component portal.
 *   Classifications: UI theme (card); for modular content.
 *   Identifiers: lowercase: 'card', camelCase: 'card', snake_case: 'card', ALL_CAP: 'CARD', cache key: 'portal:card:instanceId'.
 *   Model Identifier Format: 'card-{itemId}-{layout}' (kebab-case for grid items).
 *   Variations and Use Cases: Synonyms: 'tile'; for dashboards in DnDHubs.
 *   Example Usage: Render KPI in <FramrPortal target="card">.
 *
 * - 'banner': General banner area.
 *   Classifications: UI theme (banner); for announcements.
 *   Identifiers: lowercase: 'banner', camelCase: 'banner', snake_case: 'banner', ALL_CAP: 'BANNER', cache key: 'portal:banner:instanceId'.
 *   Model Identifier Format: 'banner-{messageId}-{dismissed}' (kebab-case for user prefs).
 *   Variations and Use Cases: Synonyms: 'alertBanner'; for site-wide notices in DataOrb.
 *   Example Usage: Show promo in <FramrPortal target="banner">.
 *
 * - 'grid': Grid layout portal.
 *   Classifications: UI theme (grid); Tailwind grid system.
 *   Identifiers: lowercase: 'grid', camelCase: 'grid', snake_case: 'grid', ALL_CAP: 'GRID', cache key: 'portal:grid:instanceId'.
 *   Model Identifier Format: 'grid-{cols}-{rows}' (kebab-case for layout configs).
 *   Variations and Use Cases: Synonyms: 'layoutGrid'; for galleries in GEOCoLab.
 *   Example Usage: Render items in <FramrPortal target="grid"> with 'grid-cols-3'.
 *
 * - 'toast': Toast notification.
 *   Classifications: UI theme (toast); for transient messages.
 *   Identifiers: lowercase: 'toast', camelCase: 'toast', snake_case: 'toast', ALL_CAP: 'TOAST', cache key: 'portal:toast:instanceId'.
 *   Model Identifier Format: 'toast-{type}-{id}' (kebab-case for queue management).
 *   Variations and Use Cases: Synonyms: 'snackbar'; success messages in HealthOrb.
 *   Example Usage: Show brief alert in <FramrPortal target="toast">.
 *
 * - 'tabPanel': Content for tabs.
 *   Classifications: UI theme (tabpanel); ARIA tabpanel.
 *   Identifiers: lowercase: 'tabpanel', camelCase: 'tabPanel', snake_case: 'tab_panel', ALL_CAP: 'TAB_PANEL', cache key: 'portal:tabPanel:instanceId'.
 *   Model Identifier Format: 'tabpanel-{tabId}-{visible}' (kebab-case for lazy load).
 *   Variations and Use Cases: Synonyms: 'tabContent'; switched panels in Trakfox.
 *   Example Usage: Load content in <FramrPortal target="tabPanel"> on tab click.
 *
 * - 'accordion': Accordion collapsible sections.
 *   Classifications: UI theme (accordion); ARIA accordion role.
 *   Identifiers: lowercase: 'accordion', camelCase: 'accordion', snake_case: 'accordion', ALL_CAP: 'ACCORDION', cache key: 'portal:accordion:instanceId'.
 *   Model Identifier Format: 'accordion-{sectionId}-{expanded}' (kebab-case for state).
 *   Variations and Use Cases: Synonyms: 'collapse'; FAQs in DnDHubs.
 *   Example Usage: Render expandable in <FramrPortal target="accordion">.
 *
 * - 'search': Search bar or results portal.
 *   Classifications: UI theme (search); for query input.
 *   Identifiers: lowercase: 'search', camelCase: 'search', snake_case: 'search', ALL_CAP: 'SEARCH', cache key: 'portal:search:instanceId'.
 *   Model Identifier Format: 'search-{query}-{results}' (kebab-case for search logs).
 *   Variations and Use Cases: Synonyms: 'searchBox'; global search in DataOrb.
 *   Example Usage: Inject input in <FramrPortal target="search">.
 *
 * - 'article': Article content portal.
 *   Classifications: UI theme (article); semantic article tag.
 *   Identifiers: lowercase: 'article', camelCase: 'article', snake_case: 'article', ALL_CAP: 'ARTICLE', cache key: 'portal:article:instanceId'.
 *   Model Identifier Format: 'article-{slug}-{readTime}' (kebab-case for blog storage).
 *   Variations and Use Cases: Synonyms: 'post'; blog posts in GEOCoLab.
 *   Example Usage: Render body in <FramrPortal target="article"> with prose Tailwind.
 *
 * - 'section': General section portal.
 *   Classifications: UI theme (section); HTML section semantics.
 *   Identifiers: lowercase: 'section', camelCase: 'section', snake_case: 'section', ALL_CAP: 'SECTION', cache key: 'portal:section:instanceId'.
 *   Model Identifier Format: 'section-{id}-{heading}' (kebab-case for outline).
 *   Variations and Use Cases: Synonyms: 'block'; content blocks in HealthOrb.
 *   Example Usage: Group content in <FramrPortal target="section">.
 *
 * - 'carousel': Carousel slider.
 *   Classifications: UI theme (carousel); for sliding content.
 *   Identifiers: lowercase: 'carousel', camelCase: 'carousel', snake_case: 'carousel', ALL_CAP: 'CAROUSEL', cache key: 'portal:carousel:instanceId'.
 *   Model Identifier Format: 'carousel-{slideId}-{autoPlay}' (kebab-case for interval storage).
 *   Variations and Use Cases: Synonyms: 'slider'; product showcases in Trakfox.
 *   Example Usage: Render slides in <FramrPortal target="carousel"> with Tailwind carousel.
 *
 * - 'callout': Callout or highlight box.
 *   Classifications: UI theme (callout); for emphasized text.
 *   Identifiers: lowercase: 'callout', camelCase: 'callout', snake_case: 'callout', ALL_CAP: 'CALLOUT', cache key: 'portal:callout:instanceId'.
 *   Model Identifier Format: 'callout-{type}-{text}' (kebab-case for info/warning).
 *   Variations and Use Cases: Synonyms: 'highlightBox'; tips in DnDHubs docs.
 *   Example Usage: Render note in <FramrPortal target="callout">.
 *
 * - 'analytics': Analytics dashboard portal.
 *   Classifications: UI analytics (dashboard); for metrics display.
 *   Identifiers: lowercase: 'analytics', camelCase: 'analytics', snake_case: 'analytics', ALL_CAP: 'ANALYTICS', cache key: 'portal:analytics:instanceId'.
 *   Model Identifier Format: 'analytics-{metricId}-{range}' (kebab-case for data queries).
 *   Variations and Use Cases: Synonyms: 'statsPanel'; for reports in DataOrb.
 *   Example Usage: Embed charts in <FramrPortal target="analytics">.
 *
 * - 'heatmap': Heatmap visualization.
 *   Classifications: UI analytics (heatmap); for user interaction maps.
 *   Identifiers: lowercase: 'heatmap', camelCase: 'heatmap', snake_case: 'heatmap', ALL_CAP: 'HEATMAP', cache key: 'portal:heatmap:instanceId'.
 *   Model Identifier Format: 'heatmap-{sessionId}-{clicks}' (kebab-case for tracking data).
 *   Variations and Use Cases: Synonyms: 'clickMap'; for UX analysis in GEOCoLab.
 *   Example Usage: Overlay heatmap in <FramrPortal target="heatmap">.
 *
 * - 'sessionRecorder': Session recording player.
 *   Classifications: UI analytics (recorder); for replay sessions.
 *   Identifiers: lowercase: 'sessionrecorder', camelCase: 'sessionRecorder', snake_case: 'session_recorder', ALL_CAP: 'SESSION_RECORDER', cache key: 'portal:sessionRecorder:instanceId'.
 *   Model Identifier Format: 'sessionrecorder-{userId}-{duration}' (kebab-case for video-like storage).
 *   Variations and Use Cases: Synonyms: 'replayTool'; for debugging in HealthOrb.
 *   Example Usage: Play recording in <FramrPortal target="sessionRecorder">.
 *
 * - 'metricsPanel': Panel for key metrics.
 *   Classifications: UI analytics (panel); for KPIs.
 *   Identifiers: lowercase: 'metricspanel', camelCase: 'metricsPanel', snake_case: 'metrics_panel', ALL_CAP: 'METRICS_PANEL', cache key: 'portal:metricsPanel:instanceId'.
 *   Model Identifier Format: 'metricspanel-{kpiId}-{value}' (kebab-case for dashboard widgets).
 *   Variations and Use Cases: Synonyms: 'kpiPanel'; in Trakfox dashboards.
 *   Example Usage: Show numbers in <FramrPortal target="metricsPanel">.
 *
 * - 'chat': Chat interface portal.
 *   Classifications: UI collaboration (chat); for real-time messaging.
 *   Identifiers: lowercase: 'chat', camelCase: 'chat', snake_case: 'chat', ALL_CAP: 'CHAT', cache key: 'portal:chat:instanceId'.
 *   Model Identifier Format: 'chat-{roomId}-{messageId}' (kebab-case for message logs).
 *   Variations and Use Cases: Synonyms: 'messenger'; for support in DnDHubs.
 *   Example Usage: Render bubble in <FramrPortal target="chat">.
 *
 * - 'comments': Comments section.
 *   Classifications: UI collaboration (comments); for discussions.
 *   Identifiers: lowercase: 'comments', camelCase: 'comments', snake_case: 'comments', ALL_CAP: 'COMMENTS', cache key: 'portal:comments:instanceId'.
 *   Model Identifier Format: 'comments-{threadId}-{reply}' (kebab-case for nested storage).
 *   Variations and Use Cases: Synonyms: 'discussion'; below articles in DataOrb.
 *   Example Usage: List comments in <FramrPortal target="comments">.
 *
 * - 'annotations': Annotations on content.
 *   Classifications: UI collaboration (annotations); for notes on elements.
 *   Identifiers: lowercase: 'annotations', camelCase: 'annotations', snake_case: 'annotations', ALL_CAP: 'ANNOTATIONS', cache key: 'portal:annotations:instanceId'.
 *   Model Identifier Format: 'annotations-{elementId}-{note}' (kebab-case for positions).
 *   Variations and Use Cases: Synonyms: 'notes'; for reviews in GEOCoLab maps.
 *   Example Usage: Overlay notes in <FramrPortal target="annotations">.
 *
 * - 'presence': User presence indicators.
 *   Classifications: UI collaboration (presence); for online status.
 *   Identifiers: lowercase: 'presence', camelCase: 'presence', snake_case: 'presence', ALL_CAP: 'PRESENCE', cache key: 'portal:presence:instanceId'.
 *   Model Identifier Format: 'presence-{userId}-{status}' (kebab-case for real-time updates).
 *   Variations and Use Cases: Synonyms: 'onlineIndicator'; in chat for HealthOrb.
 *   Example Usage: Show avatars in <FramrPortal target="presence">.
 *
 * - 'collaboration': General collaboration tools.
 *   Classifications: UI collaboration (tools); for shared editing.
 *   Identifiers: lowercase: 'collaboration', camelCase: 'collaboration', snake_case: 'collaboration', ALL_CAP: 'COLLABORATION', cache key: 'portal:collaboration:instanceId'.
 *   Model Identifier Format: 'collaboration-{docId}-{user}' (kebab-case for multi-user).
 *   Variations and Use Cases: Synonyms: 'coEdit'; for docs in Trakfox.
 *   Example Usage: Render tools in <FramrPortal target="collaboration">.
 *
 * - 'faq': FAQ section.
 *   Classifications: UI collaboration (faq); for Q&A.
 *   Identifiers: lowercase: 'faq', camelCase: 'faq', snake_case: 'faq', ALL_CAP: 'FAQ', cache key: 'portal:faq:instanceId'.
 *   Model Identifier Format: 'faq-{questionId}-{answer}' (kebab-case for knowledge base).
 *   Variations and Use Cases: Synonyms: 'helpSection'; support in DnDHubs.
 *   Example Usage: Accordion FAQs in <FramrPortal target="faq">.
 *
 * - 'videoPlayer': Video player portal.
 *   Classifications: UI media (video); HTML video semantics.
 *   Identifiers: lowercase: 'videoplayer', camelCase: 'videoPlayer', snake_case: 'video_player', ALL_CAP: 'VIDEO_PLAYER', cache key: 'portal:videoPlayer:instanceId'.
 *   Model Identifier Format: 'videoplayer-{src}-{controls}' (kebab-case for media metadata).
 *   Variations and Use Cases: Synonyms: 'mediaVideo'; for tutorials in DataOrb.
 *   Example Usage: Embed video in <FramrPortal target="videoPlayer">.
 *
 * - 'audioPlayer': Audio player portal.
 *   Classifications: UI media (audio); HTML audio.
 *   Identifiers: lowercase: 'audioplayer', camelCase: 'audioPlayer', snake_case: 'audio_player', ALL_CAP: 'AUDIO_PLAYER', cache key: 'portal:audioPlayer:instanceId'.
 *   Model Identifier Format: 'audioplayer-{src}-{duration}' (kebab-case for playlist storage).
 *   Variations and Use Cases: Synonyms: 'mediaAudio'; for podcasts in GEOCoLab.
 *   Example Usage: Render player in <FramrPortal target="audioPlayer">.
 *
 * - 'imageGallery': Image gallery portal.
 *   Classifications: UI media (gallery); for image collections.
 *   Identifiers: lowercase: 'imagegallery', camelCase: 'imageGallery', snake_case: 'image_gallery', ALL_CAP: 'IMAGE_GALLERY', cache key: 'portal:imageGallery:instanceId'.
 *   Model Identifier Format: 'imagegallery-{imgId}-{thumb}' (kebab-case for alt texts).
 *   Variations and Use Cases: Synonyms: 'photoGrid'; for portfolios in HealthOrb.
 *   Example Usage: Carousel images in <FramrPortal target="imageGallery">.
 *
 * - 'mediaControls': Controls for media players.
 *   Classifications: UI media (controls); for play/pause.
 *   Identifiers: lowercase: 'mediacontrols', camelCase: 'mediaControls', snake_case: 'media_controls', ALL_CAP: 'MEDIA_CONTROLS', cache key: 'portal:mediaControls:instanceId'.
 *   Model Identifier Format: 'mediacontrols-{playerId}-{button}' (kebab-case for event handlers).
 *   Variations and Use Cases: Synonyms: 'playerButtons'; overlay on videos in Trakfox.
 *   Example Usage: Render buttons in <FramrPortal target="mediaControls">.
 *
 * - 'dashboardWidgets': Widgets for dashboards.
 *   Classifications: UI dashboard (widgets); modular dashboard components.
 *   Identifiers: lowercase: 'dashboardwidgets', camelCase: 'dashboardWidgets', snake_case: 'dashboard_widgets', ALL_CAP: 'DASHBOARD_WIDGETS', cache key: 'portal:dashboardWidgets:instanceId'.
 *   Model Identifier Format: 'dashboardwidgets-{widgetId}-{data}' (kebab-case for drag-drop storage).
 *   Variations and Use Cases: Synonyms: 'dashModules'; customizable in DnDHubs.
 *   Example Usage: Render charts in <FramrPortal target="dashboardWidgets"> using usePortalData.
 *
 * - 'kpiCards': KPI card displays.
 *   Classifications: UI dashboard (kpi); key performance indicators.
 *   Identifiers: lowercase: 'kpicards', camelCase: 'kpiCards', snake_case: 'kpi_cards', ALL_CAP: 'KPI_CARDS', cache key: 'portal:kpiCards:instanceId'.
 *   Model Identifier Format: 'kpicards-{metric}-{value}' (kebab-case for real-time updates).
 *   Variations and Use Cases: Synonyms: 'metricCards'; in analytics dashboards.
 *   Example Usage: Show numbers in <FramrPortal target="kpiCards">.
 *
 * - 'chartPanel': Chart visualization panel.
 *   Classifications: UI dashboard (chart); for graphs.
 *   Identifiers: lowercase: 'chartpanel', camelCase: 'chartPanel', snake_case: 'chart_panel', ALL_CAP: 'CHART_PANEL', cache key: 'portal:chartPanel:instanceId'.
 *   Model Identifier Format: 'chartpanel-{type}-{dataSet}' (kebab-case for library configs like Chart.js).
 *   Variations and Use Cases: Synonyms: 'graphPanel'; trends in DataOrb.
 *   Example Usage: Embed Recharts in <FramrPortal target="chartPanel">.
 *
 * - 'dataTable': Data table portal.
 *   Classifications: UI dashboard (table); for tabular data.
 *   Identifiers: lowercase: 'datatable', camelCase: 'dataTable', snake_case: 'data_table', ALL_CAP: 'DATA_TABLE', cache key: 'portal:dataTable:instanceId'.
 *   Model Identifier Format: 'datatable-{column}-{row}' (kebab-case for sorting storage).
 *   Variations and Use Cases: Synonyms: 'gridTable'; lists in GEOCoLab.
 *   Example Usage: Render TanStack Table in <FramrPortal target="dataTable">.
 *
 * - 'accessibilityPanel': Panel for accessibility tools.
 *   Classifications: UI accessibility (panel); WCAG tools.
 *   Identifiers: lowercase: 'accessibilitypanel', camelCase: 'accessibilityPanel', snake_case: 'accessibility_panel', ALL_CAP: 'ACCESSIBILITY_PANEL', cache key: 'portal:accessibilityPanel:instanceId'.
 *   Model Identifier Format: 'accessibilitypanel-{toolId}-{enabled}' (kebab-case for user settings).
 *   Variations and Use Cases: Synonyms: 'a11yTools'; contrast checker in HealthOrb.
 *   Example Usage: Inject options in <FramrPortal target="accessibilityPanel">.
 *
 * - 'focusTrap': Focus trap for modals.
 *   Classifications: UI accessibility (trap); ARIA focus management.
 *   Identifiers: lowercase: 'focustrap', camelCase: 'focusTrap', snake_case: 'focus_trap', ALL_CAP: 'FOCUS_TRAP', cache key: 'portal:focusTrap:instanceId'.
 *   Model Identifier Format: 'focustrap-{elementId}-{active}' (kebab-case for keyboard nav).
 *   Variations and Use Cases: Synonyms: 'modalTrap'; in dialogs for Trakfox.
 *   Example Usage: Trap focus in <FramrPortal target="focusTrap"> for overlays.
 *
 * - 'ariaLive': ARIA live region for announcements.
 *   Classifications: UI accessibility (live); for screen readers.
 *   Identifiers: lowercase: 'arialive', camelCase: 'ariaLive', snake_case: 'aria_live', ALL_CAP: 'ARIA_LIVE', cache key: 'portal:ariaLive:instanceId'.
 *   Model Identifier Format: 'arialive-{message}-{polite}' (kebab-case for assertive/polite).
 *   Variations and Use Cases: Synonyms: 'liveAnnounce'; updates in DnDHubs.
 *   Example Usage: Announce changes in <FramrPortal target="ariaLive">.
 *
 * - 'onboardingTour': Onboarding tour overlays.
 *   Classifications: UI onboarding (tour); for user guidance.
 *   Identifiers: lowercase: 'onboardingtour', camelCase: 'onboardingTour', snake_case: 'onboarding_tour', ALL_CAP: 'ONBOARDING_TOUR', cache key: 'portal:onboardingTour:instanceId'.
 *   Model Identifier Format: 'onboardingtour-{step}-{completed}' (kebab-case for progress).
 *   Variations and Use Cases: Synonyms: 'guideTour'; first-time user in DataOrb.
 *   Example Usage: Highlight elements in <FramrPortal target="onboardingTour">.
 *
 * - 'welcomeBanner': Welcome message banner.
 *   Classifications: UI onboarding (banner); for new users.
 *   Identifiers: lowercase: 'welcomebanner', camelCase: 'welcomeBanner', snake_case: 'welcome_banner', ALL_CAP: 'WELCOME_BANNER', cache key: 'portal:welcomeBanner:instanceId'.
 *   Model Identifier Format: 'welcomebanner-{userId}-{dismissed}' (kebab-case for prefs).
 *   Variations and Use Cases: Synonyms: 'introBanner'; on login in GEOCoLab.
 *   Example Usage: Show greeting in <FramrPortal target="welcomeBanner">.
 *
 * - 'tutorialOverlay': Tutorial overlay instructions.
 *   Classifications: UI onboarding (overlay); for step-by-step.
 *   Identifiers: lowercase: 'tutorialoverlay', camelCase: 'tutorialOverlay', snake_case: 'tutorial_overlay', ALL_CAP: 'TUTORIAL_OVERLAY', cache key: 'portal:tutorialOverlay:instanceId'.
 *   Model Identifier Format: 'tutorialoverlay-{tutorialId}-{step}' (kebab-case for sequences).
 *   Variations and Use Cases: Synonyms: 'helpOverlay'; feature tours in HealthOrb.
 *   Example Usage: Overlay tips in <FramrPortal target="tutorialOverlay">.
 *
 * - 'errorBoundary': Error handling boundary.
 *   Classifications: UI error (boundary); React error boundary.
 *   Identifiers: lowercase: 'errorboundary', camelCase: 'errorBoundary', snake_case: 'error_boundary', ALL_CAP: 'ERROR_BOUNDARY', cache key: 'portal:errorBoundary:instanceId'.
 *   Model Identifier Format: 'errorboundary-{componentId}-{errorCode}' (kebab-case for logs).
 *   Variations and Use Cases: Synonyms: 'fallbackUI'; crash recovery in Trakfox.
 *   Example Usage: Render error UI in <FramrPortal target="errorBoundary">.
 *
 * - 'errorToast': Toast for errors.
 *   Classifications: UI error (toast); error notifications.
 *   Identifiers: lowercase: 'errortoast', camelCase: 'errorToast', snake_case: 'error_toast', ALL_CAP: 'ERROR_TOAST', cache key: 'portal:errorToast:instanceId'.
 *   Model Identifier Format: 'errortoast-{code}-{message}' (kebab-case for alerts).
 *   Variations and Use Cases: Synonyms: 'errorAlert'; API failures in DnDHubs.
 *   Example Usage: Show red toast in <FramrPortal target="errorToast">.
 *
 * - 'retryPanel': Retry action panel for errors.
 *   Classifications: UI error (retry); for recovery actions.
 *   Identifiers: lowercase: 'retrypanel', camelCase: 'retryPanel', snake_case: 'retry_panel', ALL_CAP: 'RETRY_PANEL', cache key: 'portal:retryPanel:instanceId'.
 *   Model Identifier Format: 'retrypanel-{attempt}-{error}' (kebab-case for retry counts).
 *   Variations and Use Cases: Synonyms: 'reloadPanel'; network errors in DataOrb.
 *   Example Usage: Render retry button in <FramrPortal target="retryPanel">.
 *
 * - 'cartSummary': E-commerce cart summary.
 *   Classifications: UI e-commerce (cart); for checkout overview.
 *   Identifiers: lowercase: 'cartsummary', camelCase: 'cartSummary', snake_case: 'cart_summary', ALL_CAP: 'CART_SUMMARY', cache key: 'portal:cartSummary:instanceId'.
 *   Model Identifier Format: 'cartsummary-{itemCount}-{total}' (kebab-case for session storage).
 *   Variations and Use Cases: Synonyms: 'basketOverview'; in DnDHubs marketplace.
 *   Example Usage: Show totals in <FramrPortal target="cartSummary">.
 *
 * - 'productCarousel': Carousel for products.
 *   Classifications: UI e-commerce (product); for recommendations.
 *   Identifiers: lowercase: 'productcarousel', camelCase: 'productCarousel', snake_case: 'product_carousel', ALL_CAP: 'PRODUCT_CAROUSEL', cache key: 'portal:productCarousel:instanceId'.
 *   Model Identifier Format: 'productcarousel-{productId}-{index}' (kebab-case for recommendations).
 *   Variations and Use Cases: Synonyms: 'itemSlider'; featured products in Trakfox.
 *   Example Usage: Slide products in <FramrPortal target="productCarousel">.
 *
 * - 'wishlist': Wishlist display.
 *   Classifications: UI e-commerce (wishlist); for saved items.
 *   Identifiers: lowercase: 'wishlist', camelCase: 'wishlist', snake_case: 'wishlist', ALL_CAP: 'WISHLIST', cache key: 'portal:wishlist:instanceId'.
 *   Model Identifier Format: 'wishlist-{userId}-{item}' (kebab-case for user lists).
 *   Variations and Use Cases: Synonyms: 'favorites'; saved in GEOCoLab.
 *   Example Usage: List items in <FramrPortal target="wishlist">.
 *
 * - 'socialShare': Social sharing buttons.
 *   Classifications: UI social (share); for sharing links.
 *   Identifiers: lowercase: 'socialshare', camelCase: 'socialShare', snake_case: 'social_share', ALL_CAP: 'SOCIAL_SHARE', cache key: 'portal:socialShare:instanceId'.
 *   Model Identifier Format: 'socialshare-{platform}-{url}' (kebab-case for share counts).
 *   Variations and Use Cases: Synonyms: 'shareButtons'; article sharing in HealthOrb.
 *   Example Usage: Render icons in <FramrPortal target="socialShare">.
 *
 * - 'userProfile': User profile display.
 *   Classifications: UI social (profile); for user info.
 *   Identifiers: lowercase: 'userprofile', camelCase: 'userProfile', snake_case: 'user_profile', ALL_CAP: 'USER_PROFILE', cache key: 'portal:userProfile:instanceId'.
 *   Model Identifier Format: 'userprofile-{userId}-{edit}' (kebab-case for profile data).
 *   Variations and Use Cases: Synonyms: 'profileCard'; in community sections.
 *   Example Usage: Show avatar/bio in <FramrPortal target="userProfile">.
 *
 * - 'activityFeed': Activity or news feed.
 *   Classifications: UI social (feed); for updates.
 *   Identifiers: lowercase: 'activityfeed', camelCase: 'activityFeed', snake_case: 'activity_feed', ALL_CAP: 'ACTIVITY_FEED', cache key: 'portal:activityFeed:instanceId'.
 *   Model Identifier Format: 'activityfeed-{postId}-{like}' (kebab-case for social interactions).
 *   Variations and Use Cases: Synonyms: 'newsFeed'; user activities in Trakfox.
 *   Example Usage: List posts in <FramrPortal target="activityFeed">.
 *
 * - 'languageSelector': Language switcher.
 *   Classifications: UI localization (selector); for i18n.
 *   Identifiers: lowercase: 'languageselector', camelCase: 'languageSelector', snake_case: 'language_selector', ALL_CAP: 'LANGUAGE_SELECTOR', cache key: 'portal:languageSelector:instanceId'.
 *   Model Identifier Format: 'languageselector-{langCode}-{default}' (kebab-case for locale storage).
 *   Variations and Use Cases: Synonyms: 'localeSwitcher'; multi-lang in DnDHubs.
 *   Example Usage: Dropdown langs in <FramrPortal target="languageSelector">.
 *
 * - 'currencySwitcher': Currency selection.
 *   Classifications: UI localization (currency); for e-commerce.
 *   Identifiers: lowercase: 'currencyswitcher', camelCase: 'currencySwitcher', snake_case: 'currency_switcher', ALL_CAP: 'CURRENCY_SWITCHER', cache key: 'portal:currencySwitcher:instanceId'.
 *   Model Identifier Format: 'currencyswitcher-{currency}-{rate}' (kebab-case for exchange rates).
 *   Variations and Use Cases: Synonyms: 'moneySwitcher'; pricing in DataOrb.
 *   Example Usage: Select currency in <FramrPortal target="currencySwitcher">.
 */
export type PortalKeyTaxonomy = 'appBar' | 'headerBar' | 'toolBar' | 'navigation' | 'breadcrumb' | 'quickPanel' | 'skeleton' | 'bodyContent' | 'sidebar' | 'leftSidebar' | 'rightSidebar' | 'mainContent' | 'contentHeader' | 'contentFooter' | 'modal' | 'notification' | 'command' | 'contextMenu' | 'tooltip' | 'sidePanel' | 'dialog' | 'popover' | 'drawer' | 'progressBar' | 'loadingOverlay' | 'confirmDialog' | 'survey' | 'rating' | 'poll' | 'review' | 'footerBar' | 'footerNavigation' | 'bottomNavigation' | 'legalInfo' | 'bottomSection' | 'megaMenu' | 'mobileMenu' | 'tabBar' | 'stepIndicator' | 'codeEditor' | 'markdown' | 'richTextEditor' | 'timeline' | 'comparison' | 'headerAd' | 'sidebarAd' | 'inContentAd' | 'footerAd' | 'sponsoredContent' | 'nativeAd' | 'videoAd' | 'affiliatePanel' | 'form' | 'pagination' | 'tabs' | 'hero' | 'card' | 'banner' | 'grid' | 'toast' | 'tabPanel' | 'accordion' | 'search' | 'article' | 'section' | 'carousel' | 'callout' | 'analytics' | 'heatmap' | 'sessionRecorder' | 'metricsPanel' | 'chat' | 'comments' | 'annotations' | 'presence' | 'collaboration' | 'faq' | 'videoPlayer' | 'audioPlayer' | 'imageGallery' | 'mediaControls' | 'dashboardWidgets' | 'kpiCards' | 'chartPanel' | 'dataTable' | 'accessibilityPanel' | 'focusTrap' | 'ariaLive' | 'onboardingTour' | 'welcomeBanner' | 'tutorialOverlay' | 'errorBoundary' | 'errorToast' | 'retryPanel' | 'cartSummary' | 'productCarousel' | 'wishlist' | 'socialShare' | 'userProfile' | 'activityFeed' | 'languageSelector' | 'currencySwitcher';
```

## PortalColorTaxonomy
```typescript
/**
 * Union type representing PortalColor in the Framr UI ecosystem, defining semantic colors for theme integration via @framr/theme and Tailwind CSS.
 * These colors align with design systems like Material UI (palette modes) and WCAG for contrast, used for backgrounds, text, accents in components across PortalKeys.
 * Each variant includes details for consistency in storage (e.g., theme configs in JSON/PostgreSQL) and validation (e.g., regex in @framr/utils).
 *
 * - 'primary': Main brand color for actions/buttons.
 *   Classifications: Semantic color (primary); aligns with WCAG AA contrast, Material UI primary palette.
 *   Identifiers: lowercase: 'primary', camelCase: 'primaryColor', snake_case: 'primary_color', ALL_CAP: 'PRIMARY', cache key: 'color:primary:portalId'.
 *   Model Identifier Format: 'primary-{shade}-{hex}' (kebab-case for theme storage in PostgreSQL).
 *   Variations and Use Cases: Synonyms: 'main', 'brandPrimary'; used in buttons/modals for Trakfox CTAs or HealthOrb accents; validate via utility like `isValidColor(color)` for theme compliance.
 *   Example Usage: <FramrPortal color='primary'> for themed modals in Remix apps.
 *
 * - 'secondary': Supporting color for secondary actions.
 *   Classifications: Semantic color (secondary); WCAG compliant.
 *   Identifiers: lowercase: 'secondary', camelCase: 'secondaryColor', snake_case: 'secondary_color', ALL_CAP: 'SECONDARY', cache key: 'color:secondary:portalId'.
 *   Model Identifier Format: 'secondary-{shade}-{hex}' (kebab-case for configs).
 *   Variations and Use Cases: Synonyms: 'accent'; for links in DnDHubs navigation.
 *   Example Usage: Button variant='secondary' in Tailwind 'bg-secondary-500'.
 *
 * - 'accent': Highlight color for emphasis.
 *   Classifications: Semantic color (accent).
 *   Identifiers: lowercase: 'accent', camelCase: 'accentColor', snake_case: 'accent_color', ALL_CAP: 'ACCENT', cache key: 'color:accent:portalId'.
 *   Model Identifier Format: 'accent-{shade}-{hex}'.
 *   Variations and Use Cases: For badges in GEOCoLab dashboards.
 *   Example Usage: Highlight text with 'text-accent'.
 *
 * - 'neutral': Base gray-scale for backgrounds/text.
 *   Classifications: Semantic color (neutral).
 *   Identifiers: lowercase: 'neutral', camelCase: 'neutralColor', snake_case: 'neutral_color', ALL_CAP: 'NEUTRAL', cache key: 'color:neutral:portalId'.
 *   Model Identifier Format: 'neutral-{shade}-{hex}'.
 *   Variations and Use Cases: Synonyms: 'gray'; for cards in Trakfox.
 *   Example Usage: 'bg-neutral-100' for panels.
 *
 * - 'success': Positive feedback color (green).
 *   Classifications: Semantic color (success); WCAG for states.
 *   Identifiers: lowercase: 'success', camelCase: 'successColor', snake_case: 'success_color', ALL_CAP: 'SUCCESS', cache key: 'color:success:portalId'.
 *   Model Identifier Format: 'success-{shade}-{hex}'.
 *   Variations and Use Cases: For toasts in HealthOrb confirmations.
 *   Example Usage: 'bg-success-500' for alerts.
 *
 * - 'warning': Caution color (yellow).
 *   Classifications: Semantic color (warning).
 *   Identifiers: lowercase: 'warning', camelCase: 'warningColor', snake_case: 'warning_color', ALL_CAP: 'WARNING', cache key: 'color:warning:portalId'.
 *   Model Identifier Format: 'warning-{shade}-{hex}'.
 *   Variations and Use Cases: For validations in forms.
 *   Example Usage: 'text-warning' for messages.
 *
 * - 'error': Negative feedback color (red).
 *   Classifications: Semantic color (error).
 *   Identifiers: lowercase: 'error', camelCase: 'errorColor', snake_case: 'error_color', ALL_CAP: 'ERROR', cache key: 'color:error:portalId'.
 *   Model Identifier Format: 'error-{shade}-{hex}'.
 *   Variations and Use Cases: For errors in DnDHubs.
 *   Example Usage: 'border-error' for inputs.
 *
 * - 'info': Informational color (blue).
 *   Classifications: Semantic color (info).
 *   Identifiers: lowercase: 'info', camelCase: 'infoColor', snake_case: 'info_color', ALL_CAP: 'INFO', cache key: 'color:info:portalId'.
 *   Model Identifier Format: 'info-{shade}-{hex}'.
 *   Variations and Use Cases: For tooltips in GEOCoLab.
 *   Example Usage: 'bg-info-200' for banners.
 *
 * - 'inherit': Inherit from parent.
 *   Classifications: Semantic color (inherit).
 *   Identifiers: lowercase: 'inherit', camelCase: 'inheritColor', snake_case: 'inherit_color', ALL_CAP: 'INHERIT', cache key: 'color:inherit:portalId'.
 *   Model Identifier Format: 'inherit-{parent}-{hex}'.
 *   Variations and Use Cases: For nested components.
 *   Example Usage: 'color-inherit' in child elements.
 *
 * - 'transparent': No color (transparent).
 *   Classifications: Semantic color (transparent).
 *   Identifiers: lowercase: 'transparent', camelCase: 'transparentColor', snake_case: 'transparent_color', ALL_CAP: 'TRANSPARENT', cache key: 'color:transparent:portalId'.
 *   Model Identifier Format: 'transparent-{alpha}-{hex}'.
 *   Variations and Use Cases: For overlays/backdrops.
 *   Example Usage: 'bg-transparent' for modals.
 *
 * - 'inverse': Inverted colors for dark/light modes.
 *   Classifications: Semantic color (inverse).
 *   Identifiers: lowercase: 'inverse', camelCase: 'inverseColor', snake_case: 'inverse_color', ALL_CAP: 'INVERSE', cache key: 'color:inverse:portalId'.
 *   Model Identifier Format: 'inverse-{mode}-{hex}'.
 *   Variations and Use Cases: For theme switching.
 *   Example Usage: 'text-inverse' in dark mode.
 *
 * - 'brand': Custom brand color.
 *   Classifications: Semantic color (brand).
 *   Identifiers: lowercase: 'brand', camelCase: 'brandColor', snake_case: 'brand_color', ALL_CAP: 'BRAND', cache key: 'color:brand:portalId'.
 *   Model Identifier Format: 'brand-{shade}-{hex}'.
 *   Variations and Use Cases: For logos/elements in Trakfox.
 *   Example Usage: 'bg-brand' for headers.
 */
export type PortalColorTaxonomy = 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'inherit' | 'transparent' | 'inverse' | 'brand';
```

## PortalSizeTaxonomy
```typescript
/**
 * Union type representing PortalSize in the Framr UI ecosystem, defining size variants for responsive scaling in components via Tailwind CSS classes.
 * These sizes align with breakpoints in Remix apps and WCAG for readability, used for widths/heights across PortalKeys.
 * Each variant includes details for consistency in storage (e.g., layout configs in PostgreSQL) and validation (e.g., in @framr/utils).
 *
 * - 'xs': Extra small size for compact elements.
 *   Classifications: Size variant (xs); aligns with Tailwind xs, Bootstrap xs.
 *   Identifiers: lowercase: 'xs', camelCase: 'extraSmall', snake_case: 'extra_small', ALL_CAP: 'XS', cache key: 'size:xs:portalId'.
 *   Model Identifier Format: 'xs-{width}-{height}' (kebab-case for responsive storage).
 *   Variations and Use Cases: Synonyms: 'tiny'; for icons/tooltips in Trakfox.
 *   Example Usage: <FramrPortal size='xs'> for small modals.
 *
 * - 'sm': Small size for secondary elements.
 *   Classifications: Size variant (sm).
 *   Identifiers: lowercase: 'sm', camelCase: 'small', snake_case: 'small', ALL_CAP: 'SM', cache key: 'size:sm:portalId'.
 *   Model Identifier Format: 'sm-{width}-{height}'.
 *   Variations and Use Cases: For buttons in HealthOrb forms.
 *   Example Usage: Button size='sm' with 'text-sm'.
 *
 * - 'md': Medium/default size for standard use.
 *   Classifications: Size variant (md).
 *   Identifiers: lowercase: 'md', camelCase: 'medium', snake_case: 'medium', ALL_CAP: 'MD', cache key: 'size:md:portalId'.
 *   Model Identifier Format: 'md-{width}-{height}'.
 *   Variations and Use Cases: Default for cards in DnDHubs.
 *   Example Usage: 'h-md' for panels.
 *
 * - 'lg': Large size for emphasis.
 *   Classifications: Size variant (lg).
 *   Identifiers: lowercase: 'lg', camelCase: 'large', snake_case: 'large', ALL_CAP: 'LG', cache key: 'size:lg:portalId'.
 *   Model Identifier Format: 'lg-{width}-{height}'.
 *   Variations and Use Cases: For headers in GEOCoLab.
 *   Example Usage: Modal size='lg' with 'w-lg'.
 *
 * - 'xl': Extra large for prominent elements.
 *   Classifications: Size variant (xl).
 *   Identifiers: lowercase: 'xl', camelCase: 'extraLarge', snake_case: 'extra_large', ALL_CAP: 'XL', cache key: 'size:xl:portalId'.
 *   Model Identifier Format: 'xl-{width}-{height}'.
 *   Variations and Use Cases: For full-width banners.
 *   Example Usage: 'text-xl' for titles.
 *
 * - '2xl': Double extra large for oversized.
 *   Classifications: Size variant (2xl).
 *   Identifiers: lowercase: '2xl', camelCase: 'doubleExtraLarge', snake_case: 'double_extra_large', ALL_CAP: '2XL', cache key: 'size:2xl:portalId'.
 *   Model Identifier Format: '2xl-{width}-{height}'.
 *   Variations and Use Cases: For heroes in Trakfox landings.
 *   Example Usage: 'p-2xl' for spacing.
 *
 * - 'full': Full size (100% width/height).
 *   Classifications: Size variant (full).
 *   Identifiers: lowercase: 'full', camelCase: 'fullSize', snake_case: 'full_size', ALL_CAP: 'FULL', cache key: 'size:full:portalId'.
 *   Model Identifier Format: 'full-{viewport}-{direction}'.
 *   Variations and Use Cases: Synonyms: '100%'; for modals/overlays.
 *   Example Usage: 'w-full h-full' for fullscreens.
 *
 * - 'auto': Auto size based on content.
 *   Classifications: Size variant (auto).
 *   Identifiers: lowercase: 'auto', camelCase: 'autoSize', snake_case: 'auto_size', ALL_CAP: 'AUTO', cache key: 'size:auto:portalId'.
 *   Model Identifier Format: 'auto-{content}-{max}'.
 *   Variations and Use Cases: For dynamic widths in forms.
 *   Example Usage: 'width-auto' for inputs.
 *
 * - 'content': Size to fit content.
 *   Classifications: Size variant (content).
 *   Identifiers: lowercase: 'content', camelCase: 'contentSize', snake_case: 'content_size', ALL_CAP: 'CONTENT', cache key: 'size:content:portalId'.
 *   Model Identifier Format: 'content-{min}-{max}'.
 *   Variations and Use Cases: Synonyms: 'fit'; for tooltips/popovers.
 *   Example Usage: 'min-w-content' for dialogs.
 *
 * - 'viewport': Size to fit viewport.
 *   Classifications: Size variant (viewport).
 *   Identifiers: lowercase: 'viewport', camelCase: 'viewportSize', snake_case: 'viewport_size', ALL_CAP: 'VIEWPORT', cache key: 'size:viewport:portalId'.
 *   Model Identifier Format: 'viewport-{vh}-{vw}'.
 *   Variations and Use Cases: For full-screen modals.
 *   Example Usage: 'h-viewport' for overlays.
 */
export type PortalSizeTaxonomy = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'auto' | 'content' | 'viewport';
```

## PortalVariantTaxonomy
```typescript
/**
 * Union type representing PortalVariant in the Framr UI ecosystem, defining style flavors for visual customization in components via @framr/theme.
 * These variants align with Material UI/Ant Design patterns for filled/outlined styles, used for buttons/modals across PortalKeys.
 * Each variant includes details for consistency in storage (e.g., theme overrides in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'filled': Solid background fill.
 *   Classifications: Variant style (filled); aligns with Material UI filled, Bootstrap solid.
 *   Identifiers: lowercase: 'filled', camelCase: 'filledVariant', snake_case: 'filled_variant', ALL_CAP: 'FILLED', cache key: 'variant:filled:portalId'.
 *   Model Identifier Format: 'filled-{color}-{opacity}' (kebab-case for style storage).
 *   Variations and Use Cases: Synonyms: 'solid'; for primary buttons in Trakfox.
 *   Example Usage: Button variant='filled' with 'bg-primary'.
 *
 * - 'outlined': Bordered with transparent background.
 *   Classifications: Variant style (outlined).
 *   Identifiers: lowercase: 'outlined', camelCase: 'outlinedVariant', snake_case: 'outlined_variant', ALL_CAP: 'OUTLINED', cache key: 'variant:outlined:portalId'.
 *   Model Identifier Format: 'outlined-{border}-{color}'.
 *   Variations and Use Cases: For secondary actions in HealthOrb.
 *   Example Usage: 'border-2 border-primary text-primary'.
 *
 * - 'ghost': Transparent with visible text/icon.
 *   Classifications: Variant style (ghost).
 *   Identifiers: lowercase: 'ghost', camelCase: 'ghostVariant', snake_case: 'ghost_variant', ALL_CAP: 'GHOST', cache key: 'variant:ghost:portalId'.
 *   Model Identifier Format: 'ghost-{hover}-{color}'.
 *   Variations and Use Cases: Synonyms: 'text'; for subtle links in DnDHubs.
 *   Example Usage: 'bg-transparent hover:bg-gray-100'.
 *
 * - 'soft': Soft background with subtle fill.
 *   Classifications: Variant style (soft).
 *   Identifiers: lowercase: 'soft', camelCase: 'softVariant', snake_case: 'soft_variant', ALL_CAP: 'SOFT', cache key: 'variant:soft:portalId'.
 *   Model Identifier Format: 'soft-{alpha}-{color}'.
 *   Variations and Use Cases: For alerts in GEOCoLab.
 *   Example Usage: 'bg-primary-100 text-primary'.
 *
 * - 'solid': Fully solid without borders.
 *   Classifications: Variant style (solid).
 *   Identifiers: lowercase: 'solid', camelCase: 'solidVariant', snake_case: 'solid_variant', ALL_CAP: 'SOLID', cache key: 'variant:solid:portalId'.
 *   Model Identifier Format: 'solid-{color}-{shade}'.
 *   Variations and Use Cases: For cards in Trakfox dashboards.
 *   Example Usage: 'bg-primary border-none'.
 *
 * - 'gradient': Gradient background.
 *   Classifications: Variant style (gradient).
 *   Identifiers: lowercase: 'gradient', camelCase: 'gradientVariant', snake_case: 'gradient_variant', ALL_CAP: 'GRADIENT', cache key: 'variant:gradient:portalId'.
 *   Model Identifier Format: 'gradient-{from}-{to}'.
 *   Variations and Use Cases: For heroes in landings.
 *   Example Usage: 'bg-gradient-to-r from-primary to-secondary'.
 *
 * - 'glass': Glassmorphism with blur.
 *   Classifications: Variant style (glass).
 *   Identifiers: lowercase: 'glass', camelCase: 'glassVariant', snake_case: 'glass_variant', ALL_CAP: 'GLASS', cache key: 'variant:glass:portalId'.
 *   Model Identifier Format: 'glass-{blur}-{opacity}'.
 *   Variations and Use Cases: For modals in modern UIs.
 *   Example Usage: 'backdrop-blur-md bg-white/30'.
 *
 * - 'elevated': With shadow for depth.
 *   Classifications: Variant style (elevated).
 *   Identifiers: lowercase: 'elevated', camelCase: 'elevatedVariant', snake_case: 'elevated_variant', ALL_CAP: 'ELEVATED', cache key: 'variant:elevated:portalId'.
 *   Model Identifier Format: 'elevated-{shadow}-{level}'.
 *   Variations and Use Cases: For cards in dashboards.
 *   Example Usage: 'shadow-md'.
 *
 * - 'flat': No shadow or border.
 *   Classifications: Variant style (flat).
 *   Identifiers: lowercase: 'flat', camelCase: 'flatVariant', snake_case: 'flat_variant', ALL_CAP: 'FLAT', cache key: 'variant:flat:portalId'.
 *   Model Identifier Format: 'flat-{color}-{hover}'.
 *   Variations and Use Cases: For minimal designs.
 *   Example Usage: 'bg-transparent border-none'.
 *
 * - 'minimal': Stripped-down style.
 *   Classifications: Variant style (minimal).
 *   Identifiers: lowercase: 'minimal', camelCase: 'minimalVariant', snake_case: 'minimal_variant', ALL_CAP: 'MINIMAL', cache key: 'variant:minimal:portalId'.
 *   Model Identifier Format: 'minimal-{padding}-{border}'.
 *   Variations and Use Cases: For toolbars in HealthOrb.
 *   Example Usage: 'p-0 border-0'.
 */
export type PortalVariantTaxonomy = 'filled' | 'outlined' | 'ghost' | 'soft' | 'solid' | 'gradient' | 'glass' | 'elevated' | 'flat' | 'minimal';
```

## PortalPositionTaxonomy
```typescript
/**
 * Union type representing PortalPosition in the Framr UI ecosystem, defining positioning for layout control in components via Tailwind CSS utilities.
 * These positions align with CSS standards and Remix responsive patterns, used for overlays/menus across PortalKeys.
 * Each variant includes details for consistency in storage (e.g., layout configs) and validation.
 *
 * - 'static': Default flow positioning.
 *   Classifications: CSS position (static); default HTML behavior.
 *   Identifiers: lowercase: 'static', camelCase: 'staticPosition', snake_case: 'static_position', ALL_CAP: 'STATIC', cache key: 'position:static:portalId'.
 *   Model Identifier Format: 'static-{parent}-{child}' (kebab-case for DOM flow).
 *   Variations and Use Cases: Synonyms: 'default'; for inline content in Trakfox.
 *   Example Usage: 'position-static' for body text.
 *
 * - 'relative': Relative to normal position.
 *   Classifications: CSS position (relative).
 *   Identifiers: lowercase: 'relative', camelCase: 'relativePosition', snake_case: 'relative_position', ALL_CAP: 'RELATIVE', cache key: 'position:relative:portalId'.
 *   Model Identifier Format: 'relative-{top}-{left}'.
 *   Variations and Use Cases: For offsets in HealthOrb forms.
 *   Example Usage: 'relative top-2'.
 *
 * - 'absolute': Absolute to nearest positioned ancestor.
 *   Classifications: CSS position (absolute).
 *   Identifiers: lowercase: 'absolute', camelCase: 'absolutePosition', snake_case: 'absolute_position', ALL_CAP: 'ABSOLUTE', cache key: 'position:absolute:portalId'.
 *   Model Identifier Format: 'absolute-{inset}-{z}'.
 *   Variations and Use Cases: For tooltips in DnDHubs.
 *   Example Usage: 'absolute inset-0'.
 *
 * - 'fixed': Fixed to viewport.
 *   Classifications: CSS position (fixed).
 *   Identifiers: lowercase: 'fixed', camelCase: 'fixedPosition', snake_case: 'fixed_position', ALL_CAP: 'FIXED', cache key: 'position:fixed:portalId'.
 *   Model Identifier Format: 'fixed-{top}-{bottom}'.
 *   Variations and Use Cases: For headers in GEOCoLab.
 *   Example Usage: 'fixed top-0'.
 *
 * - 'sticky': Sticky within scrolling ancestor.
 *   Classifications: CSS position (sticky).
 *   Identifiers: lowercase: 'sticky', camelCase: 'stickyPosition', snake_case: 'sticky_position', ALL_CAP: 'STICKY', cache key: 'position:sticky:portalId'.
 *   Model Identifier Format: 'sticky-{threshold}-{z}'.
 *   Variations and Use Cases: For navbars in Trakfox.
 *   Example Usage: 'sticky top-0'.
 *
 * - 'floating': Floating like popovers.
 *   Classifications: Position (floating); Popover API inspired.
 *   Identifiers: lowercase: 'floating', camelCase: 'floatingPosition', snake_case: 'floating_position', ALL_CAP: 'FLOATING', cache key: 'position:floating:portalId'.
 *   Model Identifier Format: 'floating-{anchor}-{offset}'.
 *   Variations and Use Cases: For menus in HealthOrb.
 *   Example Usage: Floating div with anchor ref.
 *
 * - 'anchored': Anchored to element.
 *   Classifications: Position (anchored).
 *   Identifiers: lowercase: 'anchored', camelCase: 'anchoredPosition', snake_case: 'anchored_position', ALL_CAP: 'ANCHORED', cache key: 'position:anchored:portalId'.
 *   Model Identifier Format: 'anchored-{element}-{direction}'.
 *   Variations and Use Cases: For drawers.
 *   Example Usage: Anchored to right edge.
 *
 * - 'fullscreen': Full viewport cover.
 *   Classifications: Position (fullscreen).
 *   Identifiers: lowercase: 'fullscreen', camelCase: 'fullscreenPosition', snake_case: 'fullscreen_position', ALL_CAP: 'FULLSCREEN', cache key: 'position:fullscreen:portalId'.
 *   Model Identifier Format: 'fullscreen-{z}-{overlay}'.
 *   Variations and Use Cases: For modals.
 *   Example Usage: 'fixed inset-0'.
 *
 * - 'inline': Inline within text flow.
 *   Classifications: Position (inline).
 *   Identifiers: lowercase: 'inline', camelCase: 'inlinePosition', snake_case: 'inline_position', ALL_CAP: 'INLINE', cache key: 'position:inline:portalId'.
 *   Model Identifier Format: 'inline-{display}-{float}'.
 *   Variations and Use Cases: For badges in text.
 *   Example Usage: 'inline-block'.
 */
export type PortalPositionTaxonomy = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'floating' | 'anchored' | 'fullscreen' | 'inline';
```

## PortalElevationTaxonomy
```typescript
/**
 * Union type representing PortalElevation in the Framr UI ecosystem, defining shadow/z-index levels for depth in components via Tailwind CSS shadows.
 * These elevations align with Material UI dp levels and WCAG for visual hierarchy, used for cards/modals across PortalKeys.
 * Each variant includes details for consistency in storage and validation.
 *
 * - 0: No elevation (flat).
 *   Classifications: Elevation level (0); aligns with Material UI dp0.
 *   Identifiers: lowercase: '0', camelCase: 'elevation0', snake_case: 'elevation_0', ALL_CAP: 'ELEVATION_0', cache key: 'elevation:0:portalId'.
 *   Model Identifier Format: 'elevation-0-{shadow}-{z}' (kebab-case for styles).
 *   Variations and Use Cases: Synonyms: 'flat'; for backgrounds in Trakfox.
 *   Example Usage: 'shadow-none z-0'.
 *
 * - 1: Minimal elevation.
 *   Classifications: Elevation level (1).
 *   Identifiers: lowercase: '1', camelCase: 'elevation1', snake_case: 'elevation_1', ALL_CAP: 'ELEVATION_1', cache key: 'elevation:1:portalId'.
 *   Model Identifier Format: 'elevation-1-{shadow}-{z}'.
 *   Variations and Use Cases: For subtle cards in HealthOrb.
 *   Example Usage: 'shadow-sm z-10'.
 *
 * - 2: Low elevation.
 *   Classifications: Elevation level (2).
 *   Identifiers: lowercase: '2', camelCase: 'elevation2', snake_case: 'elevation_2', ALL_CAP: 'ELEVATION_2', cache key: 'elevation:2:portalId'.
 *   Model Identifier Format: 'elevation-2-{shadow}-{z}'.
 *   Variations and Use Cases: For buttons in DnDHubs.
 *   Example Usage: 'shadow z-20'.
 *
 * - 3: Standard elevation.
 *   Classifications: Elevation level (3).
 *   Identifiers: lowercase: '3', camelCase: 'elevation3', snake_case: 'elevation_3', ALL_CAP: 'ELEVATION_3', cache key: 'elevation:3:portalId'.
 *   Model Identifier Format: 'elevation-3-{shadow}-{z}'.
 *   Variations and Use Cases: For panels in GEOCoLab.
 *   Example Usage: 'shadow-md z-30'.
 *
 * - 4: Medium elevation.
 *   Classifications: Elevation level (4).
 *   Identifiers: lowercase: '4', camelCase: 'elevation4', snake_case: 'elevation_4', ALL_CAP: 'ELEVATION_4', cache key: 'elevation:4:portalId'.
 *   Model Identifier Format: 'elevation-4-{shadow}-{z}'.
 *   Variations and Use Cases: For modals.
 *   Example Usage: 'shadow-lg z-40'.
 *
 * - 5: High elevation.
 *   Classifications: Elevation level (5).
 *   Identifiers: lowercase: '5', camelCase: 'elevation5', snake_case: 'elevation_5', ALL_CAP: 'ELEVATION_5', cache key: 'elevation:5:portalId'.
 *   Model Identifier Format: 'elevation-5-{shadow}-{z}'.
 *   Variations and Use Cases: For tooltips.
 *   Example Usage: 'shadow-xl z-50'.
 *
 * - 6: Higher elevation.
 *   Classifications: Elevation level (6).
 *   Identifiers: lowercase: '6', camelCase: 'elevation6', snake_case: 'elevation_6', ALL_CAP: 'ELEVATION_6', cache key: 'elevation:6:portalId'.
 *   Model Identifier Format: 'elevation-6-{shadow}-{z}'.
 *   Variations and Use Cases: For overlays in Trakfox.
 *   Example Usage: 'shadow-2xl z-60'.
 *
 * - 8: Custom high elevation.
 *   Classifications: Elevation level (8).
 *   Identifiers: lowercase: '8', camelCase: 'elevation8', snake_case: 'elevation_8', ALL_CAP: 'ELEVATION_8', cache key: 'elevation:8:portalId'.
 *   Model Identifier Format: 'elevation-8-{shadow}-{z}'.
 *   Variations and Use Cases: For popovers.
 *   Example Usage: 'shadow-[0_4px_6px_rgba(0,0,0,0.1)] z-80'.
 *
 * - 12: Medium custom.
 *   Classifications: Elevation level (12).
 *   Identifiers: lowercase: '12', camelCase: 'elevation12', snake_case: 'elevation_12', ALL_CAP: 'ELEVATION_12', cache key: 'elevation:12:portalId'.
 *   Model Identifier Format: 'elevation-12-{shadow}-{z}'.
 *   Variations and Use Cases: For dialogs.
 *   Example Usage: 'shadow-[0_8px_12px_rgba(0,0,0,0.15)] z-120'.
 *
 * - 16: High custom.
 *   Classifications: Elevation level (16).
 *   Identifiers: lowercase: '16', camelCase: 'elevation16', snake_case: 'elevation_16', ALL_CAP: 'ELEVATION_16', cache key: 'elevation:16:portalId'.
 *   Model Identifier Format: 'elevation-16-{shadow}-{z}'.
 *   Variations and Use Cases: For drawers.
 *   Example Usage: 'shadow-[0_12px_16px_rgba(0,0,0,0.2)] z-160'.
 *
 * - 24: Maximum elevation.
 *   Classifications: Elevation level (24).
 *   Identifiers: lowercase: '24', camelCase: 'elevation24', snake_case: 'elevation_24', ALL_CAP: 'ELEVATION_24', cache key: 'elevation:24:portalId'.
 *   Model Identifier Format: 'elevation-24-{shadow}-{z}'.
 *   Variations and Use Cases: For full overlays.
 *   Example Usage: 'shadow-[0_16px_24px_rgba(0,0,0,0.25)] z-240'.
 */
export type PortalElevationTaxonomy = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12 | 16 | 24;
```

## PortalSpacingTaxonomy
```typescript
/**
 * Union type representing PortalSpacing in the Framr UI ecosystem, defining padding/margin presets using theme units in Tailwind CSS.
 * These spacings align with Material UI spacing scales, used for margins/paddings across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'none': No spacing.
 *   Classifications: Spacing preset (none).
 *   Identifiers: lowercase: 'none', camelCase: 'noSpacing', snake_case: 'no_spacing', ALL_CAP: 'NONE', cache key: 'spacing:none:portalId'.
 *   Model Identifier Format: 'none-{unit}-{value}' (kebab-case for zeros).
 *   Variations and Use Cases: Synonyms: '0'; for tight layouts in Trakfox.
 *   Example Usage: 'p-none' or 'p-0'.
 *
 * - 'xs': Extra small spacing.
 *   Classifications: Spacing preset (xs).
 *   Identifiers: lowercase: 'xs', camelCase: 'extraSmallSpacing', snake_case: 'extra_small_spacing', ALL_CAP: 'XS', cache key: 'spacing:xs:portalId'.
 *   Model Identifier Format: 'xs-{unit}-{value}'.
 *   Variations and Use Cases: For icons in HealthOrb.
 *   Example Usage: 'm-xs' with 'm-1'.
 *
 * - 'sm': Small spacing.
 *   Classifications: Spacing preset (sm).
 *   Identifiers: lowercase: 'sm', camelCase: 'smallSpacing', snake_case: 'small_spacing', ALL_CAP: 'SM', cache key: 'spacing:sm:portalId'.
 *   Model Identifier Format: 'sm-{unit}-{value}'.
 *   Variations and Use Cases: For buttons in DnDHubs.
 *   Example Usage: 'p-sm' with 'p-2'.
 *
 * - 'md': Medium spacing.
 *   Classifications: Spacing preset (md).
 *   Identifiers: lowercase: 'md', camelCase: 'mediumSpacing', snake_case: 'medium_spacing', ALL_CAP: 'MD', cache key: 'spacing:md:portalId'.
 *   Model Identifier Format: 'md-{unit}-{value}'.
 *   Variations and Use Cases: Default for cards.
 *   Example Usage: 'gap-md' with 'gap-4'.
 *
 * - 'lg': Large spacing.
 *   Classifications: Spacing preset (lg).
 *   Identifiers: lowercase: 'lg', camelCase: 'largeSpacing', snake_case: 'large_spacing', ALL_CAP: 'LG', cache key: 'spacing:lg:portalId'.
 *   Model Identifier Format: 'lg-{unit}-{value}'.
 *   Variations and Use Cases: For sections in GEOCoLab.
 *   Example Usage: 'm-lg' with 'm-6'.
 *
 * - 'xl': Extra large spacing.
 *   Classifications: Spacing preset (xl).
 *   Identifiers: lowercase: 'xl', camelCase: 'extraLargeSpacing', snake_case: 'extra_large_spacing', ALL_CAP: 'XL', cache key: 'spacing:xl:portalId'.
 *   Model Identifier Format: 'xl-{unit}-{value}'.
 *   Variations and Use Cases: For heroes.
 *   Example Usage: 'p-xl' with 'p-8'.
 *
 * - '2xl': Double extra large.
 *   Classifications: Spacing preset (2xl).
 *   Identifiers: lowercase: '2xl', camelCase: 'doubleExtraLargeSpacing', snake_case: 'double_extra_large_spacing', ALL_CAP: '2XL', cache key: 'spacing:2xl:portalId'.
 *   Model Identifier Format: '2xl-{unit}-{value}'.
 *   Variations and Use Cases: For full paddings.
 *   Example Usage: 'gap-2xl' with 'gap-12'.
 *
 * - '3xl': Triple extra large.
 *   Classifications: Spacing preset (3xl).
 *   Identifiers: lowercase: '3xl', camelCase: 'tripleExtraLargeSpacing', snake_case: 'triple_extra_large_spacing', ALL_CAP: '3XL', cache key: 'spacing:3xl:portalId'.
 *   Model Identifier Format: '3xl-{unit}-{value}'.
 *   Variations and Use Cases: For sections in landings.
 *   Example Usage: 'm-3xl' with 'm-16'.
 */
export type PortalSpacingTaxonomy = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
```

## PortalAnimationTaxonomy
```typescript
/**
 * Union type representing PortalAnimation in the Framr UI ecosystem, defining entry/exit effects with durations for components via CSS transitions.
 * These animations align with Framr's usePortalAnimation hook and reduced-motion prefs (WCAG), used for modals/toasts across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'fade': Fade in/out effect.
 *   Classifications: Animation type (fade); aligns with CSS opacity transitions.
 *   Identifiers: lowercase: 'fade', camelCase: 'fadeAnimation', snake_case: 'fade_animation', ALL_CAP: 'FADE', cache key: 'animation:fade:portalId'.
 *   Model Identifier Format: 'fade-{duration}-{timing}' (kebab-case for CSS keyframes).
 *   Variations and Use Cases: Synonyms: 'opacity'; for modals in Trakfox.
 *   Example Usage: Animate opacity from 0 to 1 in 300ms.
 *
 * - 'slide': Slide in/out from edge.
 *   Classifications: Animation type (slide).
 *   Identifiers: lowercase: 'slide', camelCase: 'slideAnimation', snake_case: 'slide_animation', ALL_CAP: 'SLIDE', cache key: 'animation:slide:portalId'.
 *   Model Identifier Format: 'slide-{direction}-{duration}'.
 *   Variations and Use Cases: For drawers in HealthOrb.
 *   Example Usage: TranslateX from 100% to 0.
 *
 * - 'scale': Scale up/down effect.
 *   Classifications: Animation type (scale).
 *   Identifiers: lowercase: 'scale', camelCase: 'scaleAnimation', snake_case: 'scale_animation', ALL_CAP: 'SCALE', cache key: 'animation:scale:portalId'.
 *   Model Identifier Format: 'scale-{from}-{to}'.
 *   Variations and Use Cases: For popovers in DnDHubs.
 *   Example Usage: Transform scale from 0.95 to 1.
 *
 * - 'rotate': Rotate in/out.
 *   Classifications: Animation type (rotate).
 *   Identifiers: lowercase: 'rotate', camelCase: 'rotateAnimation', snake_case: 'rotate_animation', ALL_CAP: 'ROTATE', cache key: 'animation:rotate:portalId'.
 *   Model Identifier Format: 'rotate-{degrees}-{duration}'.
 *   Variations and Use Cases: For loaders in GEOCoLab.
 *   Example Usage: Rotate 360deg for spinners.
 *
 * - 'bounce': Bounce effect.
 *   Classifications: Animation type (bounce).
 *   Identifiers: lowercase: 'bounce', camelCase: 'bounceAnimation', snake_case: 'bounce_animation', ALL_CAP: 'BOUNCE', cache key: 'animation:bounce:portalId'.
 *   Model Identifier Format: 'bounce-{height}-{timing}'.
 *   Variations and Use Cases: For notifications in Trakfox.
 *   Example Usage: TranslateY bounce keyframes.
 *
 * - 'zoom': Zoom in/out.
 *   Classifications: Animation type (zoom).
 *   Identifiers: lowercase: 'zoom', camelCase: 'zoomAnimation', snake_case: 'zoom_animation', ALL_CAP: 'ZOOM', cache key: 'animation:zoom:portalId'.
 *   Model Identifier Format: 'zoom-{scale}-{duration}'.
 *   Variations and Use Cases: For images in galleries.
 *   Example Usage: Scale from 0 to 1.
 *
 * - 'flip': Flip animation.
 *   Classifications: Animation type (flip).
 *   Identifiers: lowercase: 'flip', camelCase: 'flipAnimation', snake_case: 'flip_animation', ALL_CAP: 'FLIP', cache key: 'animation:flip:portalId'.
 *   Model Identifier Format: 'flip-{axis}-{degrees}'.
 *   Variations and Use Cases: For cards in dashboards.
 *   Example Usage: RotateY 180deg.
 *
 * - 'none': No animation.
 *   Classifications: Animation type (none).
 *   Identifiers: lowercase: 'none', camelCase: 'noAnimation', snake_case: 'no_animation', ALL_CAP: 'NONE', cache key: 'animation:none:portalId'.
 *   Model Identifier Format: 'none-{fallback}-{state}'.
 *   Variations and Use Cases: For reduced-motion prefs.
 *   Example Usage: 'transition-none'.
 *
 * - 'custom': User-defined animation.
 *   Classifications: Animation type (custom).
 *   Identifiers: lowercase: 'custom', camelCase: 'customAnimation', snake_case: 'custom_animation', ALL_CAP: 'CUSTOM', cache key: 'animation:custom:portalId'.
 *   Model Identifier Format: 'custom-{keyframe}-{duration}'.
 *   Variations and Use Cases: For branded effects.
 *   Example Usage: Custom keyframes via CSS.
 */
export type PortalAnimationTaxonomy = 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'zoom' | 'flip' | 'none' | 'custom';
```

## PortalBreakpointTaxonomy
```typescript
/**
 * Union type representing PortalBreakpoint in the Framr UI ecosystem, defining responsive thresholds for media queries in Tailwind CSS.
 * These breakpoints align with standard device sizes and Remix responsive patterns, used for layout adjustments across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'xs': Extra small (e.g., <320px).
 *   Classifications: Breakpoint (xs); aligns with Tailwind xs.
 *   Identifiers: lowercase: 'xs', camelCase: 'extraSmallBreakpoint', snake_case: 'extra_small_breakpoint', ALL_CAP: 'XS', cache key: 'breakpoint:xs:portalId'.
 *   Model Identifier Format: 'xs-{min}-{max}' (kebab-case for queries).
 *   Variations and Use Cases: Synonyms: 'mobile-xs'; for tiny screens in Trakfox.
 *   Example Usage: '@media (min-width: 320px)'.
 *
 * - 'sm': Small (e.g., 640px+).
 *   Classifications: Breakpoint (sm).
 *   Identifiers: lowercase: 'sm', camelCase: 'smallBreakpoint', snake_case: 'small_breakpoint', ALL_CAP: 'SM', cache key: 'breakpoint:sm:portalId'.
 *   Model Identifier Format: 'sm-{min}-{max}'.
 *   Variations and Use Cases: For mobiles in HealthOrb.
 *   Example Usage: 'sm:hidden' in Tailwind.
 *
 * - 'md': Medium (e.g., 768px+).
 *   Classifications: Breakpoint (md).
 *   Identifiers: lowercase: 'md', camelCase: 'mediumBreakpoint', snake_case: 'medium_breakpoint', ALL_CAP: 'MD', cache key: 'breakpoint:md:portalId'.
 *   Model Identifier Format: 'md-{min}-{max}'.
 *   Variations and Use Cases: For tablets in DnDHubs.
 *   Example Usage: 'md:grid-cols-2'.
 *
 * - 'lg': Large (e.g., 1024px+).
 *   Classifications: Breakpoint (lg).
 *   Identifiers: lowercase: 'lg', camelCase: 'largeBreakpoint', snake_case: 'large_breakpoint', ALL_CAP: 'LG', cache key: 'breakpoint:lg:portalId'.
 *   Model Identifier Format: 'lg-{min}-{max}'.
 *   Variations and Use Cases: For desktops in GEOCoLab.
 *   Example Usage: 'lg:flex'.
 *
 * - 'xl': Extra large (e.g., 1280px+).
 *   Classifications: Breakpoint (xl).
 *   Identifiers: lowercase: 'xl', camelCase: 'extraLargeBreakpoint', snake_case: 'extra_large_breakpoint', ALL_CAP: 'XL', cache key: 'breakpoint:xl:portalId'.
 *   Model Identifier Format: 'xl-{min}-{max}'.
 *   Variations and Use Cases: For wide screens.
 *   Example Usage: 'xl:text-xl'.
 *
 * - '2xl': Double extra large (e.g., 1536px+).
 *   Classifications: Breakpoint (2xl).
 *   Identifiers: lowercase: '2xl', camelCase: 'doubleExtraLargeBreakpoint', snake_case: 'double_extra_large_breakpoint', ALL_CAP: '2XL', cache key: 'breakpoint:2xl:portalId'.
 *   Model Identifier Format: '2xl-{min}-{max}'.
 *   Variations and Use Cases: For 4K displays.
 *   Example Usage: '2xl:p-8'.
 *
 * - 'all': Apply to all breakpoints.
 *   Classifications: Breakpoint (all).
 *   Identifiers: lowercase: 'all', camelCase: 'allBreakpoint', snake_case: 'all_breakpoint', ALL_CAP: 'ALL', cache key: 'breakpoint:all:portalId'.
 *   Model Identifier Format: 'all-{styles}-{overrides}'.
 *   Variations and Use Cases: For base styles.
 *   Example Usage: Base CSS without media.
 *
 * - 'mobile': Mobile devices (sm and below).
 *   Classifications: Breakpoint (mobile).
 *   Identifiers: lowercase: 'mobile', camelCase: 'mobileBreakpoint', snake_case: 'mobile_breakpoint', ALL_CAP: 'MOBILE', cache key: 'breakpoint:mobile:portalId'.
 *   Model Identifier Format: 'mobile-{min}-{max}'.
 *   Variations and Use Cases: Synonyms: 'handheld'; for touch optimizations.
 *   Example Usage: Custom query for <768px.
 *
 * - 'tablet': Tablet devices (md to lg).
 *   Classifications: Breakpoint (tablet).
 *   Identifiers: lowercase: 'tablet', camelCase: 'tabletBreakpoint', snake_case: 'tablet_breakpoint', ALL_CAP: 'TABLET', cache key: 'breakpoint:tablet:portalId'.
 *   Model Identifier Format: 'tablet-{min}-{max}'.
 *   Variations and Use Cases: For portrait/landscape.
 *   Example Usage: '@media (min-width: 768px)'.
 *
 * - 'desktop': Desktop devices (lg+).
 *   Classifications: Breakpoint (desktop).
 *   Identifiers: lowercase: 'desktop', camelCase: 'desktopBreakpoint', snake_case: 'desktop_breakpoint', ALL_CAP: 'DESKTOP', cache key: 'breakpoint:desktop:portalId'.
 *   Model Identifier Format: 'desktop-{min}-{max}'.
 *   Variations and Use Cases: For wide layouts.
 *   Example Usage: 'lg:block'.
 */
export type PortalBreakpointTaxonomy = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all' | 'mobile' | 'tablet' | 'desktop';
```

## PortalAlignmentTaxonomy
```typescript
/**
 * Union type representing PortalAlignment in the Framr UI ecosystem, defining content/text alignment for layout in Tailwind CSS.
 * These alignments align with CSS flex/grid standards, used for centering/justifying across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'left': Align to left.
 *   Classifications: Alignment (left); CSS text-align/left.
 *   Identifiers: lowercase: 'left', camelCase: 'leftAlignment', snake_case: 'left_alignment', ALL_CAP: 'LEFT', cache key: 'alignment:left:portalId'.
 *   Model Identifier Format: 'left-{rtl}-{direction}' (kebab-case for LTR/RTL).
 *   Variations and Use Cases: Synonyms: 'start'; for text in Trakfox articles.
 *   Example Usage: 'text-left' or 'justify-start'.
 *
 * - 'center': Center alignment.
 *   Classifications: Alignment (center).
 *   Identifiers: lowercase: 'center', camelCase: 'centerAlignment', snake_case: 'center_alignment', ALL_CAP: 'CENTER', cache key: 'alignment:center:portalId'.
 *   Model Identifier Format: 'center-{axis}-{type}'.
 *   Variations and Use Cases: For titles in HealthOrb.
 *   Example Usage: 'text-center mx-auto'.
 *
 * - 'right': Align to right.
 *   Classifications: Alignment (right).
 *   Identifiers: lowercase: 'right', camelCase: 'rightAlignment', snake_case: 'right_alignment', ALL_CAP: 'RIGHT', cache key: 'alignment:right:portalId'.
 *   Model Identifier Format: 'right-{rtl}-{direction}'.
 *   Variations and Use Cases: Synonyms: 'end'; for actions in DnDHubs.
 *   Example Usage: 'text-right'.
 *
 * - 'justify': Justify text.
 *   Classifications: Alignment (justify).
 *   Identifiers: lowercase: 'justify', camelCase: 'justifyAlignment', snake_case: 'justify_alignment', ALL_CAP: 'JUSTIFY', cache key: 'alignment:justify:portalId'.
 *   Model Identifier Format: 'justify-{hyphens}-{type}'.
 *   Variations and Use Cases: For paragraphs in GEOCoLab docs.
 *   Example Usage: 'text-justify'.
 *
 * - 'start': Align to start (LTR left, RTL right).
 *   Classifications: Alignment (start).
 *   Identifiers: lowercase: 'start', camelCase: 'startAlignment', snake_case: 'start_alignment', ALL_CAP: 'START', cache key: 'alignment:start:portalId'.
 *   Model Identifier Format: 'start-{direction}-{flex}'.
 *   Variations and Use Cases: For flex items.
 *   Example Usage: 'justify-start'.
 *
 * - 'end': Align to end (LTR right, RTL left).
 *   Classifications: Alignment (end).
 *   Identifiers: lowercase: 'end', camelCase: 'endAlignment', snake_case: 'end_alignment', ALL_CAP: 'END', cache key: 'alignment:end:portalId'.
 *   Model Identifier Format: 'end-{direction}-{flex}'.
 *   Variations and Use Cases: For flex ends.
 *   Example Usage: 'justify-end'.
 *
 * - 'space-between': Space between items.
 *   Classifications: Alignment (space-between).
 *   Identifiers: lowercase: 'space-between', camelCase: 'spaceBetweenAlignment', snake_case: 'space_between_alignment', ALL_CAP: 'SPACE_BETWEEN', cache key: 'alignment:space-between:portalId'.
 *   Model Identifier Format: 'space-between-{items}-{gap}'.
 *   Variations and Use Cases: For nav menus.
 *   Example Usage: 'justify-space-between'.
 */
export type PortalAlignmentTaxonomy = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end' | 'space-between';
```

## PortalTransitionTaxonomy
```typescript
/**
 * Union type representing PortalTransition in the Framr UI ecosystem, defining easing functions for smooth changes in CSS transitions.
 * These transitions align with CSS timing functions, used for animations/hovers across PortalKeys.
 * Each variant includes details for consistency and validation.
 *
 * - 'ease': Default ease timing.
 *   Classifications: Transition (ease); CSS ease.
 *   Identifiers: lowercase: 'ease', camelCase: 'easeTransition', snake_case: 'ease_transition', ALL_CAP: 'EASE', cache key: 'transition:ease:portalId'.
 *   Model Identifier Format: 'ease-{duration}-{delay}' (kebab-case for CSS).
 *   Variations and Use Cases: Synonyms: 'default'; for hovers in Trakfox.
 *   Example Usage: 'transition-ease duration-300'.
 *
 * - 'ease-in': Ease in acceleration.
 *   Classifications: Transition (ease-in).
 *   Identifiers: lowercase: 'ease-in', camelCase: 'easeInTransition', snake_case: 'ease_in_transition', ALL_CAP: 'EASE_IN', cache key: 'transition:ease-in:portalId'.
 *   Model Identifier Format: 'ease-in-{duration}-{delay}'.
 *   Variations and Use Cases: For entrances in HealthOrb.
 *   Example Usage: 'ease-in'.
 *
 * - 'ease-out': Ease out deceleration.
 *   Classifications: Transition (ease-out).
 *   Identifiers: lowercase: 'ease-out', camelCase: 'easeOutTransition', snake_case: 'ease_out_transition', ALL_CAP: 'EASE_OUT', cache key: 'transition:ease-out:portalId'.
 *   Model Identifier Format: 'ease-out-{duration}-{delay}'.
 *   Variations and Use Cases: For exits in DnDHubs.
 *   Example Usage: 'ease-out'.
 *
 * - 'ease-in-out': Ease in and out.
 *   Classifications: Transition (ease-in-out).
 *   Identifiers: lowercase: 'ease-in-out', camelCase: 'easeInOutTransition', snake_case: 'ease_in_out_transition', ALL_CAP: 'EASE_IN_OUT', cache key: 'transition:ease-in-out:portalId'.
 *   Model Identifier Format: 'ease-in-out-{duration}-{delay}'.
 *   Variations and Use Cases: For smooth changes in GEOCoLab.
 *   Example Usage: 'ease-in-out'.
 *
 * - 'linear': Constant speed.
 *   Classifications: Transition (linear).
 *   Identifiers: lowercase: 'linear', camelCase: 'linearTransition', snake_case: 'linear_transition', ALL_CAP: 'LINEAR', cache key: 'transition:linear:portalId'.
 *   Model Identifier Format: 'linear-{duration}-{delay}'.
 *   Variations and Use Cases: For progress bars.
 *   Example Usage: 'linear'.
 *
 * - 'bounce': Bounce effect timing.
 *   Classifications: Transition (bounce).
 *   Identifiers: lowercase: 'bounce', camelCase: 'bounceTransition', snake_case: 'bounce_transition', ALL_CAP: 'BOUNCE', cache key: 'transition:bounce:portalId'.
 *   Model Identifier Format: 'bounce-{duration}-{delay}'.
 *   Variations and Use Cases: For fun animations.
 *   Example Usage: Custom cubic-bezier for bounce.
 *
 * - 'spring': Spring physics timing.
 *   Classifications: Transition (spring).
 *   Identifiers: lowercase: 'spring', camelCase: 'springTransition', snake_case: 'spring_transition', ALL_CAP: 'SPRING', cache key: 'transition:spring:portalId'.
 *   Model Identifier Format: 'spring-{stiffness}-{damping}'.
 *   Variations and Use Cases: For natural motions.
 *   Example Usage: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'.
 */
export type PortalTransitionTaxonomy = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'bounce' | 'spring';
```

## PortalRoleTaxonomy
```typescript
/**
 * Union type representing PortalRole in the Framr UI ecosystem, defining ARIA roles for accessibility in components via semantic HTML and WCAG compliance.
 * These roles align with W3C ARIA 1.2 standards, used for dialogs, regions, interactive elements across PortalKeys to ensure screen reader/keyboard support.
 * Each variant includes details for consistency in storage (e.g., as aria-role attributes in configs) and validation (e.g., in @framr/utils for a11y checks).
 *
 * - 'dialog': Interactive dialog or modal window.
 *   Classifications: ARIA role (dialog); W3C ARIA dialog, WCAG 4.1.2 for name/state.
 *   Identifiers: lowercase: 'dialog', camelCase: 'dialogRole', snake_case: 'dialog_role', ALL_CAP: 'DIALOG', cache key: 'role:dialog:portalId'.
 *   Model Identifier Format: 'dialog-{modal}-{label}' (kebab-case for ARIA attrs in PostgreSQL configs).
 *   Variations and Use Cases: Synonyms: 'modalDialog'; used for popups in Trakfox confirmations or HealthOrb alerts; validate via utility like `validateAriaRole(role)` for required aria-modal.
 *   Example Usage: <div role='dialog' aria-modal='true'> for modals with focus trap.
 *
 * - 'region': Landmark region for navigable sections.
 *   Classifications: ARIA role (region); W3C ARIA region, WCAG 2.4.1 for bypass blocks.
 *   Identifiers: lowercase: 'region', camelCase: 'regionRole', snake_case: 'region_role', ALL_CAP: 'REGION', cache key: 'role:region:portalId'.
 *   Model Identifier Format: 'region-{label}-{live}'.
 *   Variations and Use Cases: For main content areas in DnDHubs dashboards; requires aria-label if no heading.
 *   Example Usage: <section role='region' aria-label='Main content'> for semantic sections.
 *
 * - 'progressbar': Progress indicator bar.
 *   Classifications: ARIA role (progressbar); W3C ARIA progressbar, WCAG 4.1.2 for value updates.
 *   Identifiers: lowercase: 'progressbar', camelCase: 'progressbarRole', snake_case: 'progressbar_role', ALL_CAP: 'PROGRESSBAR', cache key: 'role:progressbar:portalId'.
 *   Model Identifier Format: 'progressbar-{valuenow}-{valuemax}'.
 *   Variations and Use Cases: For loading in GEOCoLab maps; use aria-valuenow for dynamic progress.
 *   Example Usage: <div role='progressbar' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'>.
 *
 * - 'button': Interactive button element.
 *   Classifications: ARIA role (button); W3C ARIA button, WCAG 2.1.1 for keyboard operable.
 *   Identifiers: lowercase: 'button', camelCase: 'buttonRole', snake_case: 'button_role', ALL_CAP: 'BUTTON', cache key: 'role:button:portalId'.
 *   Model Identifier Format: 'button-{pressed}-{disabled}'.
 *   Variations and Use Cases: For custom buttons in Trakfox forms; add tabindex='0' for divs.
 *   Example Usage: <div role='button' tabindex='0' onKeyDown={handleEnter}>.
 *
 * - 'menu': Menu list of options.
 *   Classifications: ARIA role (menu); W3C ARIA menu, WCAG 2.1.1 for navigation.
 *   Identifiers: lowercase: 'menu', camelCase: 'menuRole', snake_case: 'menu_role', ALL_CAP: 'MENU', cache key: 'role:menu:portalId'.
 *   Model Identifier Format: 'menu-{item}-{selected}'.
 *   Variations and Use Cases: For dropdowns in HealthOrb; use with menuitem roles.
 *   Example Usage: <ul role='menu'> <li role='menuitem'>Option</li>.
 *
 * - 'tablist': List of tabs.
 *   Classifications: ARIA role (tablist); W3C ARIA tablist, WCAG 2.4.3 for focus order.
 *   Identifiers: lowercase: 'tablist', camelCase: 'tablistRole', snake_case: 'tablist_role', ALL_CAP: 'TABLIST', cache key: 'role:tablist:portalId'.
 *   Model Identifier Format: 'tablist-{tab}-{panel}'.
 *   Variations and Use Cases: For tab bars in DnDHubs dashboards; link with aria-controls.
 *   Example Usage: <div role='tablist'> <button role='tab' aria-selected='true'>.
 *
 * - 'presentation': Hide from accessibility tree.
 *   Classifications: ARIA role (presentation); W3C ARIA presentation, WCAG 1.3.1 for info/structure.
 *   Identifiers: lowercase: 'presentation', camelCase: 'presentationRole', snake_case: 'presentation_role', ALL_CAP: 'PRESENTATION', cache key: 'role:presentation:portalId'.
 *   Model Identifier Format: 'presentation-{decorative}-{none}'.
 *   Variations and Use Cases: Synonyms: 'none'; for decorative images in GEOCoLab.
 *   Example Usage: <img role='presentation' alt=''>.
 *
 * - 'alert': Live alert region.
 *   Classifications: ARIA role (alert); W3C ARIA alert, WCAG 4.1.3 for status messages.
 *   Identifiers: lowercase: 'alert', camelCase: 'alertRole', snake_case: 'alert_role', ALL_CAP: 'ALERT', cache key: 'role:alert:portalId'.
 *   Model Identifier Format: 'alert-{polite}-{assertive}'.
 *   Variations and Use Cases: For toasts in Trakfox; aria-live='assertive'.
 *   Example Usage: <div role='alert'>Error message</div>.
 *
 * - 'tooltip': Tooltip description.
 *   Classifications: ARIA role (tooltip); W3C ARIA tooltip, WCAG 1.3.1 for info.
 *   Identifiers: lowercase: 'tooltip', camelCase: 'tooltipRole', snake_case: 'tooltip_role', ALL_CAP: 'TOOLTIP', cache key: 'role:tooltip:portalId'.
 *   Model Identifier Format: 'tooltip-{describedby}-{id}'.
 *   Variations and Use Cases: For hover info in HealthOrb buttons.
 *   Example Usage: <div role='tooltip' id='tip1'>Info</div>, referenced by aria-describedby.
 *
 * - 'navigation': Navigation landmark.
 *   Classifications: ARIA role (navigation); W3C ARIA navigation, WCAG 2.4.1 for landmarks.
 *   Identifiers: lowercase: 'navigation', camelCase: 'navigationRole', snake_case: 'navigation_role', ALL_CAP: 'NAVIGATION', cache key: 'role:navigation:portalId'.
 *   Model Identifier Format: 'navigation-{label}-{type}'.
 *   Variations and Use Cases: For nav bars in DnDHubs.
 *   Example Usage: <nav role='navigation' aria-label='Main'>.
 *
 * - 'main': Main content landmark.
 *   Classifications: ARIA role (main); W3C ARIA main.
 *   Identifiers: lowercase: 'main', camelCase: 'mainRole', snake_case: 'main_role', ALL_CAP: 'MAIN', cache key: 'role:main:portalId'.
 *   Model Identifier Format: 'main-{content}-{label}'.
 *   Variations and Use Cases: For primary content in GEOCoLab.
 *   Example Usage: <main role='main'>.
 *
 * - 'complementary': Complementary landmark (aside).
 *   Classifications: ARIA role (complementary).
 *   Identifiers: lowercase: 'complementary', camelCase: 'complementaryRole', snake_case: 'complementary_role', ALL_CAP: 'COMPLEMENTARY', cache key: 'role:complementary:portalId'.
 *   Model Identifier Format: 'complementary-{sidebar}-{label}'.
 *   Variations and Use Cases: For sidebars in Trakfox.
 *   Example Usage: <aside role='complementary' aria-label='Sidebar'>.
 *
 * - 'search': Search landmark.
 *   Classifications: ARIA role (search).
 *   Identifiers: lowercase: 'search', camelCase: 'searchRole', snake_case: 'search_role', ALL_CAP: 'SEARCH', cache key: 'role:search:portalId'.
 *   Model Identifier Format: 'search-{form}-{label}'.
 *   Variations and Use Cases: For search forms in HealthOrb.
 *   Example Usage: <form role='search'>.
 *
 * - 'form': Form landmark.
 *   Classifications: ARIA role (form).
 *   Identifiers: lowercase: 'form', camelCase: 'formRole', snake_case: 'form_role', ALL_CAP: 'FORM', cache key: 'role:form:portalId'.
 *   Model Identifier Format: 'form-{name}-{label}'.
 *   Variations and Use Cases: For complex forms in DnDHubs.
 *   Example Usage: <form role='form' aria-label='Login'>.
 *
 * - 'listbox': Listbox for select options.
 *   Classifications: ARIA role (listbox).
 *   Identifiers: lowercase: 'listbox', camelCase: 'listboxRole', snake_case: 'listbox_role', ALL_CAP: 'LISTBOX', cache key: 'role:listbox:portalId'.
 *   Model Identifier Format: 'listbox-{multi}-{selected}'.
 *   Variations and Use Cases: For dropdowns in GEOCoLab.
 *   Example Usage: <ul role='listbox'> <li role='option'>.
 *
 * - 'tab': Tab button.
 *   Classifications: ARIA role (tab).
 *   Identifiers: lowercase: 'tab', camelCase: 'tabRole', snake_case: 'tab_role', ALL_CAP: 'TAB', cache key: 'role:tab:portalId'.
 *   Model Identifier Format: 'tab-{selected}-{controls}'.
 *   Variations and Use Cases: For tab buttons.
 *   Example Usage: <button role='tab' aria-selected='true' aria-controls='panel1'>.
 *
 * - 'tabpanel': Tab content panel.
 *   Classifications: ARIA role (tabpanel).
 *   Identifiers: lowercase: 'tabpanel', camelCase: 'tabpanelRole', snake_case: 'tabpanel_role', ALL_CAP: 'TABPANEL', cache key: 'role:tabpanel:portalId'.
 *   Model Identifier Format: 'tabpanel-{id}-{hidden}'.
 *   Variations and Use Cases: For tab contents in dashboards.
 *   Example Usage: <div role='tabpanel' id='panel1'>.
 *
 * - 'alertdialog': Alert dialog for urgent messages.
 *   Classifications: ARIA role (alertdialog).
 *   Identifiers: lowercase: 'alertdialog', camelCase: 'alertdialogRole', snake_case: 'alertdialog_role', ALL_CAP: 'ALERTDIALOG', cache key: 'role:alertdialog:portalId'.
 *   Model Identifier Format: 'alertdialog-{label}-{describedby}'.
 *   Variations and Use Cases: For error modals in Trakfox.
 *   Example Usage: <div role='alertdialog' aria-describedby='alert-text'>.
 *
 * - 'status': Status message region.
 *   Classifications: ARIA role (status); aria-live='polite'.
 *   Identifiers: lowercase: 'status', camelCase: 'statusRole', snake_case: 'status_role', ALL_CAP: 'STATUS', cache key: 'role:status:portalId'.
 *   Model Identifier Format: 'status-{message}-{live}'.
 *   Variations and Use Cases: For non-urgent updates.
 *   Example Usage: <div role='status'>Loading complete</div>.
 *
 * - 'log': Log message region.
 *   Classifications: ARIA role (log); aria-live='polite'.
 *   Identifiers: lowercase: 'log', camelCase: 'logRole', snake_case: 'log_role', ALL_CAP: 'LOG', cache key: 'role:log:portalId'.
 *   Model Identifier Format: 'log-{entry}-{live}'.
 *   Variations and Use Cases: For chat logs in collaboration.
 *   Example Usage: <div role='log'>New message</div>.
 *
 * - 'marquee': Marquee for scrolling text.
 *   Classifications: ARIA role (marquee); aria-live='off'.
 *   Identifiers: lowercase: 'marquee', camelCase: 'marqueeRole', snake_case: 'marquee_role', ALL_CAP: 'MARQUEE', cache key: 'role:marquee:portalId'.
 *   Model Identifier Format: 'marquee-{text}-{speed}'.
 *   Variations and Use Cases: For news tickers.
 *   Example Usage: <div role='marquee'>Scrolling news</div>.
 */
export type PortalRoleTaxonomy = 'dialog' | 'region' | 'progressbar' | 'button' | 'menu' | 'tablist' | 'presentation' | 'alert' | 'tooltip' | 'navigation' | 'main' | 'complementary' | 'search' | 'form' | 'listbox' | 'tab' | 'tabpanel' | 'alertdialog' | 'status' | 'log' | 'marquee';
```