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