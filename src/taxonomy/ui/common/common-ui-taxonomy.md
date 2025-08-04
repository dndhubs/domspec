# Comprehensive Common UI Portal Taxonomy

## HeaderBehaviorTaxonomy
```typescript
/**
 * Union type representing HeaderBehavior in the Framr UI ecosystem, defining scroll/interaction behaviors for header/navigation components like 'appBar', 'headerBar', or other UI elements.
 * These behaviors align with CSS sticky/scroll events and Remix routing for responsive headers, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in PostgreSQL) and validation (e.g., in @framr/utils).
 *
 * - 'static': Fixed position, no scroll response.
 *   Classifications: Header behavior (static); aligns with CSS position: static.
 *   Identifiers: lowercase: 'static', camelCase: 'staticBehavior', snake_case: 'static_behavior', ALL_CAP: 'STATIC', cache key: 'behavior:static:headerId'.
 *   Model Identifier Format: 'static-{position}-{zIndex}' (kebab-case for CSS rules in theme storage).
 *   Variations and Use Cases: Synonyms: 'fixedNoScroll'; used for always-visible headers in Trakfox landings or static banners; no scroll listeners needed.
 *   Example Usage: <AppBarPortal behavior='static'> or <Banner behavior='static'> with 'position-static z-0'.
 *
 * - 'sticky': Sticks to top on scroll.
 *   Classifications: Header behavior (sticky).
 *   Identifiers: lowercase: 'sticky', camelCase: 'stickyBehavior', snake_case: 'sticky_behavior', ALL_CAP: 'STICKY', cache key: 'behavior:sticky:headerId'.
 *   Model Identifier Format: 'sticky-{threshold}-{shadow}'.
 *   Variations and Use Cases: For nav in HealthOrb dashboards or sticky toolbars; add shadow on stick.
 *   Example Usage: 'sticky top-0' with useEffect for scroll shadow.
 *
 * - 'hide-on-scroll': Hides when scrolling down, shows on up.
 *   Classifications: Header behavior (hide-on-scroll).
 *   Identifiers: lowercase: 'hide-on-scroll', camelCase: 'hideOnScrollBehavior', snake_case: 'hide_on_scroll_behavior', ALL_CAP: 'HIDE_ON_SCROLL', cache key: 'behavior:hide-on-scroll:headerId'.
 *   Model Identifier Format: 'hide-on-scroll-{direction}-{speed}'.
 *   Variations and Use Cases: For mobile headers in DnDHubs or responsive menus; use translateY on scroll direction.
 *   Example Usage: useScroll hook to toggle visibility.
 *
 * - 'shrink': Reduces size on scroll.
 *   Classifications: Header behavior (shrink).
 *   Identifiers: lowercase: 'shrink', camelCase: 'shrinkBehavior', snake_case: 'shrink_behavior', ALL_CAP: 'SHRINK', cache key: 'behavior:shrink:headerId'.
 *   Model Identifier Format: 'shrink-{heightFrom}-{heightTo}'.
 *   Variations and Use Cases: For logos in GEOCoLab headers or compact navs; animate height reduction.
 *   Example Usage: 'transition-height' on scroll threshold.
 *
 * - 'transparent-on-scroll': Becomes transparent on scroll.
 *   Classifications: Header behavior (transparent-on-scroll).
 *   Identifiers: lowercase: 'transparent-on-scroll', camelCase: 'transparentOnScrollBehavior', snake_case: 'transparent_on_scroll_behavior', ALL_CAP: 'TRANSPARENT_ON_SCROLL', cache key: 'behavior:transparent-on-scroll:headerId'.
 *   Model Identifier Format: 'transparent-on-scroll-{opacity}-{threshold}'.
 *   Variations and Use Cases: For hero headers in Trakfox or landing banners; fade background.
 *   Example Usage: 'bg-opacity-0' on scroll > 100px.
 */
export type HeaderBehaviorTaxonomy = 'static' | 'sticky' | 'hide-on-scroll' | 'shrink' | 'transparent-on-scroll';
```

## NavigationStyleTaxonomy
```typescript
/**
 * Union type representing NavigationStyle in the Framr UI ecosystem, defining layout styles for navigation components like 'navigation', 'breadcrumb', or menus/buttons.
 * These styles align with CSS flex/grid and Tailwind utilities for responsive menus, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'horizontal': Horizontal menu layout.
 *   Classifications: Nav style (horizontal); CSS flex-row.
 *   Identifiers: lowercase: 'horizontal', camelCase: 'horizontalStyle', snake_case: 'horizontal_style', ALL_CAP: 'HORIZONTAL', cache key: 'navstyle:horizontal:componentId'.
 *   Model Identifier Format: 'horizontal-{gap}-{align}' (kebab-case for CSS configs).
 *   Variations and Use Cases: Synonyms: 'rowNav'; for top nav in Trakfox or button groups; validate via `isValidNavStyle(style)`.
 *   Example Usage: <NavigationPortal style='horizontal'> or <ButtonGroup style='horizontal'> with 'flex flex-row gap-4'.
 *
 * - 'vertical': Vertical menu layout.
 *   Classifications: Nav style (vertical).
 *   Identifiers: lowercase: 'vertical', camelCase: 'verticalStyle', snake_case: 'vertical_style', ALL_CAP: 'VERTICAL', cache key: 'navstyle:vertical:componentId'.
 *   Model Identifier Format: 'vertical-{gap}-{align}'.
 *   Variations and Use Cases: For sidebars in HealthOrb or vertical menus; supports LTR/RTL.
 *   Example Usage: 'flex flex-col gap-2'.
 *
 * - 'dropdown': Dropdown submenu style.
 *   Classifications: Nav style (dropdown).
 *   Identifiers: lowercase: 'dropdown', camelCase: 'dropdownStyle', snake_case: 'dropdown_style', ALL_CAP: 'DROPDOWN', cache key: 'navstyle:dropdown:componentId'.
 *   Model Identifier Format: 'dropdown-{position}-{hover}'.
 *   Variations and Use Cases: For submenus in DnDHubs or button dropdowns; uses position: absolute.
 *   Example Usage: 'absolute z-10 mt-2' on hover.
 *
 * - 'mega': Mega menu with grid.
 *   Classifications: Nav style (mega).
 *   Identifiers: lowercase: 'mega', camelCase: 'megaStyle', snake_case: 'mega_style', ALL_CAP: 'MEGA', cache key: 'navstyle:mega:componentId'.
 *   Model Identifier Format: 'mega-{columns}-{width}'.
 *   Variations and Use Cases: For large nav in GEOCoLab or complex menus; grid-based.
 *   Example Usage: 'grid grid-cols-4 w-full'.
 *
 * - 'sidebar': Sidebar-style navigation.
 *   Classifications: Nav style (sidebar).
 *   Identifiers: lowercase: 'sidebar', camelCase: 'sidebarStyle', snake_case: 'sidebar_style', ALL_CAP: 'SIDEBAR', cache key: 'navstyle:sidebar:componentId'.
 *   Model Identifier Format: 'sidebar-{width}-{collapsible}'.
 *   Variations and Use Cases: For left/right bars in Trakfox or filter panels.
 *   Example Usage: 'w-64 h-full flex-col'.
 *
 * - 'drawer': Drawer slide-in navigation.
 *   Classifications: Nav style (drawer).
 *   Identifiers: lowercase: 'drawer', camelCase: 'drawerStyle', snake_case: 'drawer_style', ALL_CAP: 'DRAWER', cache key: 'navstyle:drawer:componentId'.
 *   Model Identifier Format: 'drawer-{anchor}-{animation}'.
 *   Variations and Use Cases: For mobile nav in HealthOrb or slide-in menus.
 *   Example Usage: 'fixed left-0 translate-x-[-100%] transition-transform'.
 */
export type NavigationStyleTaxonomy = 'horizontal' | 'vertical' | 'dropdown' | 'mega' | 'sidebar' | 'drawer';
```

## ModalBackdropTaxonomy
```typescript
/**
 * Union type representing ModalBackdrop in the Framr UI ecosystem, defining backdrop styles for feedback components like 'modal', 'dialog', or overlays.
 * These backdrops align with CSS overlay patterns and Tailwind utilities for dimming, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., theme configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'dark': Dark overlay backdrop.
 *   Classifications: Backdrop style (dark); CSS bg-black/50.
 *   Identifiers: lowercase: 'dark', camelCase: 'darkBackdrop', snake_case: 'dark_backdrop', ALL_CAP: 'DARK', cache key: 'backdrop:dark:componentId'.
 *   Model Identifier Format: 'dark-{opacity}-{color}' (kebab-case for CSS vars).
 *   Variations and Use Cases: Synonyms: 'dim'; for modals in Trakfox or alert overlays; blocks clicks.
 *   Example Usage: <ModalPortal backdrop='dark'> with 'fixed inset-0 bg-black/50'.
 *
 * - 'light': Light overlay backdrop.
 *   Classifications: Backdrop style (light).
 *   Identifiers: lowercase: 'light', camelCase: 'lightBackdrop', snake_case: 'light_backdrop', ALL_CAP: 'LIGHT', cache key: 'backdrop:light:componentId'.
 *   Model Identifier Format: 'light-{opacity}-{color}'.
 *   Variations and Use Cases: For dialogs in HealthOrb or light popups; subtle dim.
 *   Example Usage: 'bg-white/30'.
 *
 * - 'blur': Blurred backdrop effect.
 *   Classifications: Backdrop style (blur).
 *   Identifiers: lowercase: 'blur', camelCase: 'blurBackdrop', snake_case: 'blur_backdrop', ALL_CAP: 'BLUR', cache key: 'backdrop:blur:componentId'.
 *   Model Identifier Format: 'blur-{radius}-{filter}'.
 *   Variations and Use Cases: For glassmorphism in DnDHubs modals or modern overlays.
 *   Example Usage: 'backdrop-blur-md'.
 *
 * - 'transparent': Invisible backdrop.
 *   Classifications: Backdrop style (transparent).
 *   Identifiers: lowercase: 'transparent', camelCase: 'transparentBackdrop', snake_case: 'transparent_backdrop', ALL_CAP: 'TRANSPARENT', cache key: 'backdrop:transparent:componentId'.
 *   Model Identifier Format: 'transparent-{clickthrough}-{color}'.
 *   Variations and Use Cases: For non-blocking overlays in GEOCoLab or popovers.
 *   Example Usage: 'bg-transparent pointer-events-none'.
 *
 * - 'none': No backdrop.
 *   Classifications: Backdrop style (none).
 *   Identifiers: lowercase: 'none', camelCase: 'noBackdrop', snake_case: 'no_backdrop', ALL_CAP: 'NONE', cache key: 'backdrop:none:componentId'.
 *   Model Identifier Format: 'none-{fallback}-{state}'.
 *   Variations and Use Cases: For tooltips or inline dialogs in Trakfox.
 *   Example Usage: No backdrop element or 'hidden'.
 */
export type ModalBackdropTaxonomy = 'dark' | 'light' | 'blur' | 'transparent' | 'none';
```

## NotificationSeverityTaxonomy
```typescript
/**
 * Union type representing NotificationSeverity in the Framr UI ecosystem, defining severity levels for feedback components like 'notification', 'toast', or alerts.
 * These severities align with semantic colors and WCAG for status messages, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., message configs in PostgreSQL) and validation (e.g., in @framr/utils).
 *
 * - 'info': Informational message.
 *   Classifications: Severity (info); aligns with ARIA status, WCAG 4.1.3.
 *   Identifiers: lowercase: 'info', camelCase: 'infoSeverity', snake_case: 'info_severity', ALL_CAP: 'INFO', cache key: 'severity:info:componentId'.
 *   Model Identifier Format: 'info-{icon}-{color}' (kebab-case for toast configs).
 *   Variations and Use Cases: Synonyms: 'neutral'; for updates in Trakfox or system notices; validate via `isValidSeverity(severity)`.
 *   Example Usage: <ToastPortal severity='info'>Info message with 'bg-info-500'.
 *
 * - 'success': Positive success message.
 *   Classifications: Severity (success).
 *   Identifiers: lowercase: 'success', camelCase: 'successSeverity', snake_case: 'success_severity', ALL_CAP: 'SUCCESS', cache key: 'severity:success:componentId'.
 *   Model Identifier Format: 'success-{icon}-{color}'.
 *   Variations and Use Cases: For form submissions in HealthOrb or save confirmations.
 *   Example Usage: 'bg-success-500 text-white'.
 *
 * - 'warning': Caution message.
 *   Classifications: Severity (warning).
 *   Identifiers: lowercase: 'warning', camelCase: 'warningSeverity', snake_case: 'warning_severity', ALL_CAP: 'WARNING', cache key: 'severity:warning:componentId'.
 *   Model Identifier Format: 'warning-{icon}-{color}'.
 *   Variations and Use Cases: For alerts in DnDHubs or validation warnings.
 *   Example Usage: 'border-warning text-warning'.
 *
 * - 'error': Error message.
 *   Classifications: Severity (error).
 *   Identifiers: lowercase: 'error', camelCase: 'errorSeverity', snake_case: 'error_severity', ALL_CAP: 'ERROR', cache key: 'severity:error:componentId'.
 *   Model Identifier Format: 'error-{icon}-{color}'.
 *   Variations and Use Cases: For API failures in GEOCoLab or form errors.
 *   Example Usage: 'bg-error text-white'.
 *
 * - 'neutral': Neutral message without emphasis.
 *   Classifications: Severity (neutral).
 *   Identifiers: lowercase: 'neutral', camelCase: 'neutralSeverity', snake_case: 'neutral_severity', ALL_CAP: 'NEUTRAL', cache key: 'severity:neutral:componentId'.
 *   Model Identifier Format: 'neutral-{icon}-{color}'.
 *   Variations and Use Cases: For general toasts in Trakfox or non-urgent notices.
 *   Example Usage: 'bg-neutral-500 text-gray-800'.
 */
export type NotificationSeverityTaxonomy = 'info' | 'success' | 'warning' | 'error' | 'neutral';
```

## TooltipTriggerTaxonomy
```typescript
/**
 * Union type representing TooltipTrigger in the Framr UI ecosystem, defining trigger events for feedback components like 'tooltip' or hoverable elements.
 * These triggers align with event listeners and WCAG 3.2.1 for no context change, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., event configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'hover': Trigger on mouse hover.
 *   Classifications: Trigger (hover); CSS :hover, WCAG 2.1.1 for accessibility.
 *   Identifiers: lowercase: 'hover', camelCase: 'hoverTrigger', snake_case: 'hover_trigger', ALL_CAP: 'HOVER', cache key: 'trigger:hover:componentId'.
 *   Model Identifier Format: 'hover-{delay}-{leave}' (kebab-case for timeouts).
 *   Variations and Use Cases: Synonyms: 'mouseenter'; for desktop tooltips in Trakfox or button hints; validate via `isValidTrigger(trigger)`.
 *   Example Usage: <Tooltip trigger='hover'> with onMouseEnter show.
 *
 * - 'click': Trigger on click.
 *   Classifications: Trigger (click).
 *   Identifiers: lowercase: 'click', camelCase: 'clickTrigger', snake_case: 'click_trigger', ALL_CAP: 'CLICK', cache key: 'trigger:click:componentId'.
 *   Model Identifier Format: 'click-{toggle}-{position}'.
 *   Variations and Use Cases: For mobile tooltips in HealthOrb or toggleable info.
 *   Example Usage: onClick toggle visibility.
 *
 * - 'focus': Trigger on focus.
 *   Classifications: Trigger (focus); WCAG 2.1.1 for keyboard.
 *   Identifiers: lowercase: 'focus', camelCase: 'focusTrigger', snake_case: 'focus_trigger', ALL_CAP: 'FOCUS', cache key: 'trigger:focus:componentId'.
 *   Model Identifier Format: 'focus-{blur}-{keyboard}'.
 *   Variations and Use Cases: For keyboard users in DnDHubs or input hints.
 *   Example Usage: onFocus show, onBlur hide.
 *
 * - 'manual': Manual control via prop.
 *   Classifications: Trigger (manual).
 *   Identifiers: lowercase: 'manual', camelCase: 'manualTrigger', snake_case: 'manual_trigger', ALL_CAP: 'MANUAL', cache key: 'trigger:manual:componentId'.
 *   Model Identifier Format: 'manual-{state}-{prop}'.
 *   Variations and Use Cases: For controlled tooltips in GEOCoLab or custom popups.
 *   Example Usage: isOpen prop to show/hide.
 *
 * - 'touch': Trigger on touch events.
 *   Classifications: Trigger (touch).
 *   Identifiers: lowercase: 'touch', camelCase: 'touchTrigger', snake_case: 'touch_trigger', ALL_CAP: 'TOUCH', cache key: 'trigger:touch:componentId'.
 *   Model Identifier Format: 'touch-{start}-{end}'.
 *   Variations and Use Cases: For mobile touch in Trakfox or touchable badges.
 *   Example Usage: onTouchStart show tooltip.
 */
export type TooltipTriggerTaxonomy = 'hover' | 'click' | 'focus' | 'manual' | 'touch';
```

## ContentLayoutTaxonomy
```typescript
/**
 * Union type representing ContentLayout in the Framr UI ecosystem, defining layouts for content components like 'mainContent', 'article', or sections.
 * These layouts align with Tailwind grid/flex for responsive content, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'single': Single column layout.
 *   Classifications: Layout (single); CSS block.
 *   Identifiers: lowercase: 'single', camelCase: 'singleLayout', snake_case: 'single_layout', ALL_CAP: 'SINGLE', cache key: 'layout:single:componentId'.
 *   Model Identifier Format: 'single-{width}-{align}' (kebab-case for CSS configs).
 *   Variations and Use Cases: Synonyms: 'column'; for articles in Trakfox or blog posts; validate via `isValidLayout(layout)`.
 *   Example Usage: <MainContentPortal layout='single'> with 'flex flex-col w-full'.
 *
 * - 'split': Split view layout.
 *   Classifications: Layout (split).
 *   Identifiers: lowercase: 'split', camelCase: 'splitLayout', snake_case: 'split_layout', ALL_CAP: 'SPLIT', cache key: 'layout:split:componentId'.
 *   Model Identifier Format: 'split-{ratio}-{direction}'.
 *   Variations and Use Cases: For comparisons in HealthOrb or two-column pages.
 *   Example Usage: 'grid grid-cols-2 gap-4'.
 *
 * - 'grid': Grid-based layout.
 *   Classifications: Layout (grid).
 *   Identifiers: lowercase: 'grid', camelCase: 'gridLayout', snake_case: 'grid_layout', ALL_CAP: 'GRID', cache key: 'layout:grid:componentId'.
 *   Model Identifier Format: 'grid-{cols}-{gap}'.
 *   Variations and Use Cases: For galleries in DnDHubs or card grids.
 *   Example Usage: 'grid grid-cols-3 gap-4'.
 *
 * - 'masonry': Masonry staggered grid.
 *   Classifications: Layout (masonry).
 *   Identifiers: lowercase: 'masonry', camelCase: 'masonryLayout', snake_case: 'masonry_layout', ALL_CAP: 'MASONRY', cache key: 'layout:masonry:componentId'.
 *   Model Identifier Format: 'masonry-{cols}-{gap}'.
 *   Variations and Use Cases: For pins in GEOCoLab or staggered content.
 *   Example Usage: 'columns-3 gap-4' with masonry polyfill.
 *
 * - 'list': List view layout.
 *   Classifications: Layout (list).
 *   Identifiers: lowercase: 'list', camelCase: 'listLayout', snake_case: 'list_layout', ALL_CAP: 'LIST', cache key: 'layout:list:componentId'.
 *   Model Identifier Format: 'list-{ordered}-{bullet}'.
 *   Variations and Use Cases: For feeds in Trakfox or ordered lists.
 *   Example Usage: 'flex flex-col divide-y'.
 *
 * - 'cards': Card grid layout.
 *   Classifications: Layout (cards).
 *   Identifiers: lowercase: 'cards', camelCase: 'cardsLayout', snake_case: 'cards_layout', ALL_CAP: 'CARDS', cache key: 'layout:cards:componentId'.
 *   Model Identifier Format: 'cards-{cols}-{gap}'.
 *   Variations and Use Cases: For dashboards in HealthOrb or product cards.
 *   Example Usage: 'grid grid-cols-4 gap-6'.
 */
export type ContentLayoutTaxonomy = 'single' | 'split' | 'grid' | 'masonry' | 'list' | 'cards';
```

## SectionTypeTaxonomy
```typescript
/**
 * Union type representing SectionType in the Framr UI ecosystem, defining types for content components like 'section', 'article', or other structured blocks.
 * These types align with semantic HTML and Tailwind prose for structured content, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., content configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'hero': Hero section type.
 *   Classifications: Section type (hero); large banner.
 *   Identifiers: lowercase: 'hero', camelCase: 'heroType', snake_case: 'hero_type', ALL_CAP: 'HERO', cache key: 'sectiontype:hero:componentId'.
 *   Model Identifier Format: 'hero-{image}-{cta}' (kebab-case for hero configs).
 *   Variations and Use Cases: Synonyms: 'bannerHero'; for landing pages in Trakfox or featured sections.
 *   Example Usage: <Section type='hero'> with 'bg-cover h-96'.
 *
 * - 'callout': Callout highlight type.
 *   Classifications: Section type (callout).
 *   Identifiers: lowercase: 'callout', camelCase: 'calloutType', snake_case: 'callout_type', ALL_CAP: 'CALLOUT', cache key: 'sectiontype:callout:componentId'.
 *   Model Identifier Format: 'callout-{icon}-{color}'.
 *   Variations and Use Cases: For tips in HealthOrb docs or highlighted notes.
 *   Example Usage: 'border-l-4 p-4 bg-info-100'.
 *
 * - 'article': Article body type.
 *   Classifications: Section type (article).
 *   Identifiers: lowercase: 'article', camelCase: 'articleType', snake_case: 'article_type', ALL_CAP: 'ARTICLE', cache key: 'sectiontype:article:componentId'.
 *   Model Identifier Format: 'article-{prose}-{headings}'.
 *   Variations and Use Cases: For blogs in DnDHubs or long-form content.
 *   Example Usage: 'prose prose-lg max-w-3xl'.
 *
 * - 'faq': FAQ accordion type.
 *   Classifications: Section type (faq).
 *   Identifiers: lowercase: 'faq', camelCase: 'faqType', snake_case: 'faq_type', ALL_CAP: 'FAQ', cache key: 'sectiontype:faq:componentId'.
 *   Model Identifier Format: 'faq-{question}-{answer}'.
 *   Variations and Use Cases: For support sections in GEOCoLab or Q&A blocks.
 *   Example Usage: Accordion with question/answer pairs.
 *
 * - 'timeline': Timeline event type.
 *   Classifications: Section type (timeline).
 *   Identifiers: lowercase: 'timeline', camelCase: 'timelineType', snake_case: 'timeline_type', ALL_CAP: 'TIMELINE', cache key: 'sectiontype:timeline:componentId'.
 *   Model Identifier Format: 'timeline-{event}-{date}'.
 *   Variations and Use Cases: For histories in Trakfox or event logs.
 *   Example Usage: 'relative before:absolute before:left-4 before:w-0.5 before:h-full before:bg-gray-200'.
 *
 * - 'comparison': Comparison table type.
 *   Classifications: Section type (comparison).
 *   Identifiers: lowercase: 'comparison', camelCase: 'comparisonType', snake_case: 'comparison_type', ALL_CAP: 'COMPARISON', cache key: 'sectiontype:comparison:componentId'.
 *   Model Identifier Format: 'comparison-{columns}-{rows}'.
 *   Variations and Use Cases: For feature tables in HealthOrb or product comparisons.
 *   Example Usage: 'table w-full' with thead/tbody.
 */
export type SectionTypeTaxonomy = 'hero' | 'callout' | 'article' | 'faq' | 'timeline' | 'comparison';
```

## FormValidationTaxonomy
```typescript
/**
 * Union type representing FormValidation in the Framr UI ecosystem, defining validation timings for form/search components like 'form' or input fields.
 * These validations align with HTML5 validation and Framr form actions for real-time checks, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., validation configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'onBlur': Validate on field blur.
 *   Classifications: Validation timing (onBlur); HTML5 onblur event.
 *   Identifiers: lowercase: 'onblur', camelCase: 'onBlurValidation', snake_case: 'on_blur_validation', ALL_CAP: 'ON_BLUR', cache key: 'validation:onblur:componentId'.
 *   Model Identifier Format: 'onblur-{field}-{error}' (kebab-case for event handlers).
 *   Variations and Use Cases: Synonyms: 'onLeave'; for inputs in Trakfox forms or email fields; validate via `isValidValidationMode(mode)`.
 *   Example Usage: <Input validation='onBlur'> with onBlur={validateEmail}.
 *
 * - 'onChange': Validate on value change.
 *   Classifications: Validation timing (onChange).
 *   Identifiers: lowercase: 'onchange', camelCase: 'onChangeValidation', snake_case: 'on_change_validation', ALL_CAP: 'ON_CHANGE', cache key: 'validation:onchange:componentId'.
 *   Model Identifier Format: 'onchange-{debounce}-{error}'.
 *   Variations and Use Cases: For real-time validation in HealthOrb search inputs.
 *   Example Usage: onChange={debouncedValidate}.
 *
 * - 'onSubmit': Validate on form submit.
 *   Classifications: Validation timing (onSubmit).
 *   Identifiers: lowercase: 'onsubmit', camelCase: 'onSubmitValidation', snake_case: 'on_submit_validation', ALL_CAP: 'ON_SUBMIT', cache key: 'validation:onsubmit:componentId'.
 *   Model Identifier Format: 'onsubmit-{server}-{client}'.
 *   Variations and Use Cases: For Remix actions in DnDHubs checkout forms.
 *   Example Usage: onSubmit={validateAllFields}.
 *
 * - 'realtime': Continuous validation.
 *   Classifications: Validation timing (realtime).
 *   Identifiers: lowercase: 'realtime', camelCase: 'realtimeValidation', snake_case: 'realtime_validation', ALL_CAP: 'REALTIME', cache key: 'validation:realtime:componentId'.
 *   Model Identifier Format: 'realtime-{interval}-{error}'.
 *   Variations and Use Cases: For search bars in GEOCoLab or live form checks.
 *   Example Usage: useEffect on value change for instant feedback.
 */
export type FormValidationTaxonomy = 'onBlur' | 'onChange' | 'onSubmit' | 'realtime';
```

## FormLayoutTaxonomy
```typescript
/**
 * Union type representing FormLayout in the Framr UI ecosystem, defining layouts for form/search components like 'form' or input groups.
 * These layouts align with Tailwind grid/flex for responsive forms, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'vertical': Vertical stacked fields.
 *   Classifications: Layout (vertical); CSS flex-col.
 *   Identifiers: lowercase: 'vertical', camelCase: 'verticalLayout', snake_case: 'vertical_layout', ALL_CAP: 'VERTICAL', cache key: 'formlayout:vertical:componentId'.
 *   Model Identifier Format: 'vertical-{labelPosition}-{gap}' (kebab-case for CSS configs).
 *   Variations and Use Cases: Synonyms: 'stacked'; for long forms in Trakfox or signup pages; validate via `isValidFormLayout(layout)`.
 *   Example Usage: <FormPortal layout='vertical'> with 'flex flex-col gap-4'.
 *
 * - 'horizontal': Horizontal label-field layout.
 *   Classifications: Layout (horizontal).
 *   Identifiers: lowercase: 'horizontal', camelCase: 'horizontalLayout', snake_case: 'horizontal_layout', ALL_CAP: 'HORIZONTAL', cache key: 'formlayout:horizontal:componentId'.
 *   Model Identifier Format: 'horizontal-{ratio}-{gap}'.
 *   Variations and Use Cases: For compact forms in HealthOrb or inline filters.
 *   Example Usage: 'grid grid-cols-2 gap-4'.
 *
 * - 'inline': Inline fields layout.
 *   Classifications: Layout (inline).
 *   Identifiers: lowercase: 'inline', camelCase: 'inlineLayout', snake_case: 'inline_layout', ALL_CAP: 'INLINE', cache key: 'formlayout:inline:componentId'.
 *   Model Identifier Format: 'inline-{wrap}-{gap}'.
 *   Variations and Use Cases: For search bars in DnDHubs or quick inputs.
 *   Example Usage: 'flex flex-wrap gap-2'.
 *
 * - 'grid': Grid-based fields layout.
 *   Classifications: Layout (grid).
 *   Identifiers: lowercase: 'grid', camelCase: 'gridLayout', snake_case: 'grid_layout', ALL_CAP: 'GRID', cache key: 'formlayout:grid:componentId'.
 *   Model Identifier Format: 'grid-{cols}-{rows}'.
 *   Variations and Use Cases: For complex forms in GEOCoLab or multi-field inputs.
 *   Example Usage: 'grid grid-cols-3 gap-4'.
 *
 * - 'stepped': Stepped wizard layout.
 *   Classifications: Layout (stepped).
 *   Identifiers: lowercase: 'stepped', camelCase: 'steppedLayout', snake_case: 'stepped_layout', ALL_CAP: 'STEPPED', cache key: 'formlayout:stepped:componentId'.
 *   Model Identifier Format: 'stepped-{step}-{progress}'.
 *   Variations and Use Cases: For multi-step forms in Trakfox or onboarding wizards.
 *   Example Usage: 'flex flex-col with progress bar'.
 */
export type FormLayoutTaxonomy = 'vertical' | 'horizontal' | 'inline' | 'grid' | 'stepped';
```

## MediaControlsTaxonomy
```typescript
/**
 * Union type representing MediaControls in the Framr UI ecosystem, defining control styles for media components like 'videoPlayer', 'audioPlayer', or media embeds.
 * These controls align with HTML media APIs and Tailwind for custom players, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., media configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'minimal': Basic play/pause controls.
 *   Classifications: Controls (minimal); HTML controls attribute minimal.
 *   Identifiers: lowercase: 'minimal', camelCase: 'minimalControls', snake_case: 'minimal_controls', ALL_CAP: 'MINIMAL', cache key: 'controls:minimal:componentId'.
 *   Model Identifier Format: 'minimal-{buttons}-{hidden}' (kebab-case for player configs).
 *   Variations and Use Cases: Synonyms: 'basic'; for embedded videos in Trakfox or simple audio players; validate via `isValidMediaControls(controls)`.
 *   Example Usage: <VideoPlayerPortal controls='minimal'> with only play button.
 *
 * - 'standard': Standard media controls.
 *   Classifications: Controls (standard).
 *   Identifiers: lowercase: 'standard', camelCase: 'standardControls', snake_case: 'standard_controls', ALL_CAP: 'STANDARD', cache key: 'controls:standard:componentId'.
 *   Model Identifier Format: 'standard-{seek}-{volume}'.
 *   Variations and Use Cases: For default players in HealthOrb or video embeds.
 *   Example Usage: Play, pause, seek bar, volume controls.
 *
 * - 'advanced': Full controls with extras.
 *   Classifications: Controls (advanced).
 *   Identifiers: lowercase: 'advanced', camelCase: 'advancedControls', snake_case: 'advanced_controls', ALL_CAP: 'ADVANCED', cache key: 'controls:advanced:componentId'.
 *   Model Identifier Format: 'advanced-{speed}-{subtitles}'.
 *   Variations and Use Cases: For video players in DnDHubs with speed/subtitles.
 *   Example Usage: Add speed, subtitles, fullscreen buttons.
 *
 * - 'custom': User-defined controls.
 *   Classifications: Controls (custom).
 *   Identifiers: lowercase: 'custom', camelCase: 'customControls', snake_case: 'custom_controls', ALL_CAP: 'CUSTOM', cache key: 'controls:custom:componentId'.
 *   Model Identifier Format: 'custom-{components}-{events}'.
 *   Variations and Use Cases: For branded players in GEOCoLab or custom video UIs.
 *   Example Usage: Pass custom buttons via slotProps.
 *
 * - 'none': No controls visible.
 *   Classifications: Controls (none).
 *   Identifiers: lowercase: 'none', camelCase: 'noControls', snake_case: 'no_controls', ALL_CAP: 'NONE', cache key: 'controls:none:componentId'.
 *   Model Identifier Format: 'none-{autoplay}-{loop}'.
 *   Variations and Use Cases: For background media in Trakfox or auto-playing videos.
 *   Example Usage: <video controls={false}>.
 */
export type MediaControlsTaxonomy = 'minimal' | 'standard' | 'advanced' | 'custom' | 'none';
```

## MediaAutoplayTaxonomy
```typescript
/**
 * Union type representing MediaAutoplay in the Framr UI ecosystem, defining autoplay behaviors for media components like 'videoPlayer' or 'audioPlayer'.
 * These behaviors align with HTML autoplay attribute and WCAG 1.4.2 for user control, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., media configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'off': No autoplay, user-initiated.
 *   Classifications: Autoplay (off); default HTML behavior.
 *   Identifiers: lowercase: 'off', camelCase: 'offAutoplay', snake_case: 'off_autoplay', ALL_CAP: 'OFF', cache key: 'autoplay:off:componentId'.
 *   Model Identifier Format: 'off-{controls}-{loop}' (kebab-case for media attrs).
 *   Variations and Use Cases: Synonyms: 'manual'; for user-initiated videos in Trakfox or audio tracks; validate via `isValidAutoplay(mode)`.
 *   Example Usage: <VideoPlayerPortal autoplay='off'> with <video autoplay={false}>.
 *
 * - 'on': Autoplay on load.
 *   Classifications: Autoplay (on).
 *   Identifiers: lowercase: 'on', camelCase: 'onAutoplay', snake_case: 'on_autoplay', ALL_CAP: 'ON', cache key: 'autoplay:on:componentId'.
 *   Model Identifier Format: 'on-{muted}-{loop}'.
 *   Variations and Use Cases: For promotional videos in HealthOrb or auto-start audio.
 *   Example Usage: <video autoplay={true}>.
 *
 * - 'muted': Autoplay with muted audio.
 *   Classifications: Autoplay (muted); WCAG 1.4.2 compliant.
 *   Identifiers: lowercase: 'muted', camelCase: 'mutedAutoplay', snake_case: 'muted_autoplay', ALL_CAP: 'MUTED', cache key: 'autoplay:muted:componentId'.
 *   Model Identifier Format: 'muted-{volume}-{play}'.
 *   Variations and Use Cases: For background videos in DnDHubs or silent intros.
 *   Example Usage: <video autoplay muted>.
 *
 * - 'on-view': Autoplay when in viewport.
 *   Classifications: Autoplay (on-view); IntersectionObserver-based.
 *   Identifiers: lowercase: 'on-view', camelCase: 'onViewAutoplay', snake_case: 'on_view_autoplay', ALL_CAP: 'ON_VIEW', cache key: 'autoplay:on-view:componentId'.
 *   Model Identifier Format: 'on-view-{threshold}-{once}'.
 *   Variations and Use Cases: For galleries in GEOCoLab or scroll-triggered media.
 *   Example Usage: useIntersection to trigger play on visibility.
 */
export type MediaAutoplayTaxonomy = 'off' | 'on' | 'muted' | 'on-view';
```

## DashboardLayoutTaxonomy
```typescript
/**
 * Union type representing DashboardLayout in the Framr UI ecosystem, defining layouts for dashboard/analytic components like 'dashboardWidgets' or 'analytics'.
 * These layouts align with Tailwind grid/flex for responsive widgets, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., layout configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'grid': Fixed grid layout.
 *   Classifications: Layout (grid); CSS grid.
 *   Identifiers: lowercase: 'grid', camelCase: 'gridLayout', snake_case: 'grid_layout', ALL_CAP: 'GRID', cache key: 'dashlayout:grid:componentId'.
 *   Model Identifier Format: 'grid-{cols}-{gap}' (kebab-case for CSS configs).
 *   Variations and Use Cases: Synonyms: 'fixedGrid'; for KPI cards in Trakfox or chart grids; validate via `isValidDashboardLayout(layout)`.
 *   Example Usage: <DashboardWidgetsPortal layout='grid'> with 'grid grid-cols-4 gap-4'.
 *
 * - 'flex': Flexible wrap layout.
 *   Classifications: Layout (flex).
 *   Identifiers: lowercase: 'flex', camelCase: 'flexLayout', snake_case: 'flex_layout', ALL_CAP: 'FLEX', cache key: 'dashlayout:flex:componentId'.
 *   Model Identifier Format: 'flex-{wrap}-{justify}'.
 *   Variations and Use Cases: For responsive widgets in HealthOrb or dynamic dashboards.
 *   Example Usage: 'flex flex-wrap gap-4'.
 *
 * - 'masonry': Masonry staggered grid.
 *   Classifications: Layout (masonry).
 *   Identifiers: lowercase: 'masonry', camelCase: 'masonryLayout', snake_case: 'masonry_layout', ALL_CAP: 'MASONRY', cache key: 'dashlayout:masonry:componentId'.
 *   Model Identifier Format: 'masonry-{cols}-{gap}'.
 *   Variations and Use Cases: For pins in DnDHubs or staggered analytics.
 *   Example Usage: 'columns-3 gap-4' with masonry polyfill.
 *
 * - 'fixed': Fixed positions layout.
 *   Classifications: Layout (fixed).
 *   Identifiers: lowercase: 'fixed', camelCase: 'fixedLayout', snake_case: 'fixed_layout', ALL_CAP: 'FIXED', cache key: 'dashlayout:fixed:componentId'.
 *   Model Identifier Format: 'fixed-{positions}-{z}'.
 *   Variations and Use Cases: For custom dashboards in GEOCoLab or static widgets.
 *   Example Usage: 'absolute positioning per widget'.
 *
 * - 'responsive': Auto-adjust on resize.
 *   Classifications: Layout (responsive).
 *   Identifiers: lowercase: 'responsive', camelCase: 'responsiveLayout', snake_case: 'responsive_layout', ALL_CAP: 'RESPONSIVE', cache key: 'dashlayout:responsive:componentId'.
 *   Model Identifier Format: 'responsive-{breakpoints}-{cols}'.
 *   Variations and Use Cases: For multi-device dashboards in Trakfox or analytics panels.
 *   Example Usage: 'grid md:grid-cols-3 sm:grid-cols-2'.
 */
export type DashboardLayoutTaxonomy = 'grid' | 'flex' | 'masonry' | 'fixed' | 'responsive';
```

## DataRefreshTaxonomy
```typescript
/**
 * Union type representing DataRefresh in the Framr UI ecosystem, defining refresh modes for dashboard/analytic components like 'analytics' or 'kpiCards'.
 * These modes align with usePortalData hook and Remix loaders for data fetching, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., fetch configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'manual': Manual refresh by user.
 *   Classifications: Refresh mode (manual); button trigger.
 *   Identifiers: lowercase: 'manual', camelCase: 'manualRefresh', snake_case: 'manual_refresh', ALL_CAP: 'MANUAL', cache key: 'refresh:manual:componentId'.
 *   Model Identifier Format: 'manual-{button}-{icon}' (kebab-case for UI triggers).
 *   Variations and Use Cases: Synonyms: 'onDemand'; for charts in Trakfox or KPI updates; validate via `isValidRefreshMode(mode)`.
 *   Example Usage: <AnalyticsPortal refresh='manual'> with onClick={refetch}.
 *
 * - 'interval': Timed interval refresh.
 *   Classifications: Refresh mode (interval).
 *   Identifiers: lowercase: 'interval', camelCase: 'intervalRefresh', snake_case: 'interval_refresh', ALL_CAP: 'INTERVAL', cache key: 'refresh:interval:componentId'.
 *   Model Identifier Format: 'interval-{seconds}-{auto}'.
 *   Variations and Use Cases: For metrics in HealthOrb or periodic updates.
 *   Example Usage: useEffect setInterval(refetch, 30000).
 *
 * - 'realtime': Real-time updates.
 *   Classifications: Refresh mode (realtime).
 *   Identifiers: lowercase: 'realtime', camelCase: 'realtimeRefresh', snake_case: 'realtime_refresh', ALL_CAP: 'REALTIME', cache key: 'refresh:realtime:componentId'.
 *   Model Identifier Format: 'realtime-{socket}-{event}'.
 *   Variations and Use Cases: For live data in DnDHubs or WebSocket feeds.
 *   Example Usage: WebSocket onmessage={updateData}.
 *
 * - 'on-focus': Refresh on window focus.
 *   Classifications: Refresh mode (on-focus).
 *   Identifiers: lowercase: 'on-focus', camelCase: 'onFocusRefresh', snake_case: 'on_focus_refresh', ALL_CAP: 'ON_FOCUS', cache key: 'refresh:on-focus:componentId'.
 *   Model Identifier Format: 'on-focus-{visibility}-{refetch}'.
 *   Variations and Use Cases: For tabs in GEOCoLab or focus-driven updates.
 *   Example Usage: useEffect on focus event to refetch.
 */
export type DataRefreshTaxonomy = 'manual' | 'interval' | 'realtime' | 'on-focus';
```

## AdFormatTaxonomy
```typescript
/**
 * Union type representing AdFormat in the Framr UI ecosystem, defining ad formats for advertising components like 'headerAd', 'sidebarAd', or banners.
 * These formats align with IAB standards for monetization, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., ad configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'banner': Horizontal banner ad.
 *   Classifications: Ad format (banner); IAB banner standard.
 *   Identifiers: lowercase: 'banner', camelCase: 'bannerFormat', snake_case: 'banner_format', ALL_CAP: 'BANNER', cache key: 'adformat:banner:componentId'.
 *   Model Identifier Format: 'banner-{width}-{height}' (kebab-case for ad slots).
 *   Variations and Use Cases: Synonyms: 'leaderboard'; for header ads in Trakfox or top banners; validate via `isValidAdFormat(format)`.
 *   Example Usage: <HeaderAdPortal format='banner'> with 728x90 iframe.
 *
 * - 'square': Square ad unit.
 *   Classifications: Ad format (square).
 *   Identifiers: lowercase: 'square', camelCase: 'squareFormat', snake_case: 'square_format', ALL_CAP: 'SQUARE', cache key: 'adformat:square:componentId'.
 *   Model Identifier Format: 'square-{size}-{ratio}'.
 *   Variations and Use Cases: For sidebar ads in HealthOrb or small placements.
 *   Example Usage: 250x250 ad unit.
 *
 * - 'skyscraper': Vertical tall ad.
 *   Classifications: Ad format (skyscraper).
 *   Identifiers: lowercase: 'skyscraper', camelCase: 'skyscraperFormat', snake_case: 'skyscraper_format', ALL_CAP: 'SKYSCRAPER', cache key: 'adformat:skyscraper:componentId'.
 *   Model Identifier Format: 'skyscraper-{height}-{width}'.
 *   Variations and Use Cases: For right sidebars in DnDHubs or vertical banners.
 *   Example Usage: 160x600 ad unit.
 *
 * - 'rectangle': Rectangular ad.
 *   Classifications: Ad format (rectangle).
 *   Identifiers: lowercase: 'rectangle', camelCase: 'rectangleFormat', snake_case: 'rectangle_format', ALL_CAP: 'RECTANGLE', cache key: 'adformat:rectangle:componentId'.
 *   Model Identifier Format: 'rectangle-{medium}-{large}'.
 *   Variations and Use Cases: For in-content ads in GEOCoLab or medium placements.
 *   Example Usage: 300x250 ad unit.
 *
 * - 'leaderboard': Wide banner ad.
 *   Classifications: Ad format (leaderboard).
 *   Identifiers: lowercase: 'leaderboard', camelCase: 'leaderboardFormat', snake_case: 'leaderboard_format', ALL_CAP: 'LEADERBOARD', cache key: 'adformat:leaderboard:componentId'.
 *   Model Identifier Format: 'leaderboard-{width}-{height}'.
 *   Variations and Use Cases: For footer ads in Trakfox or wide banners.
 *   Example Usage: 728x90 at page top/bottom.
 *
 * - 'native': Native blended ad.
 *   Classifications: Ad format (native); IAB native standard.
 *   Identifiers: lowercase: 'native', camelCase: 'nativeFormat', snake_case: 'native_format', ALL_CAP: 'NATIVE', cache key: 'adformat:native:componentId'.
 *   Model Identifier Format: 'native-{content}-{sponsored}'.
 *   Variations and Use Cases: For in-content ads in HealthOrb or sponsored posts.
 *   Example Usage: Blended with article style in content flow.
 */
export type AdFormatTaxonomy = 'banner' | 'square' | 'skyscraper' | 'rectangle' | 'leaderboard' | 'native';
```

## AdLoadStrategyTaxonomy
```typescript
/**
 * Union type representing AdLoadStrategy in the Framr UI ecosystem, defining loading strategies for advertising components like 'inContentAd' or 'sidebarAd'.
 * These strategies align with performance optimizations and IntersectionObserver for lazy loading, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., fetch configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'eager': Load immediately.
 *   Classifications: Load strategy (eager); default browser behavior.
 *   Identifiers: lowercase: 'eager', camelCase: 'eagerStrategy', snake_case: 'eager_strategy', ALL_CAP: 'EAGER', cache key: 'loadstrategy:eager:componentId'.
 *   Model Identifier Format: 'eager-{priority}-{preload}' (kebab-case for fetch configs).
 *   Variations and Use Cases: Synonyms: 'immediate'; for header ads in Trakfox or critical banners; validate via `isValidLoadStrategy(strategy)`.
 *   Example Usage: <HeaderAdPortal load='eager'> with loading='eager' on img.
 *
 * - 'lazy': Lazy load on approach.
 *   Classifications: Load strategy (lazy).
 *   Identifiers: lowercase: 'lazy', camelCase: 'lazyStrategy', snake_case: 'lazy_strategy', ALL_CAP: 'LAZY', cache key: 'loadstrategy:lazy:componentId'.
 *   Model Identifier Format: 'lazy-{threshold}-{rootMargin}'.
 *   Variations and Use Cases: For below-fold ads in HealthOrb or sidebar placements.
 *   Example Usage: loading='lazy' on ad iframe.
 *
 * - 'on-view': Load when in viewport.
 *   Classifications: Load strategy (on-view); IntersectionObserver-based.
 *   Identifiers: lowercase: 'on-view', camelCase: 'onViewStrategy', snake_case: 'on_view_strategy', ALL_CAP: 'ON_VIEW', cache key: 'loadstrategy:on-view:componentId'.
 *   Model Identifier Format: 'on-view-{observer}-{callback}'.
 *   Variations and Use Cases: For infinite scroll ads in DnDHubs or view-triggered ads.
 *   Example Usage: useIntersection to load ad on visibility.
 *
 * - 'on-interaction': Load on user interaction.
 *   Classifications: Load strategy (on-interaction).
 *   Identifiers: lowercase: 'on-interaction', camelCase: 'onInteractionStrategy', snake_case: 'on_interaction_strategy', ALL_CAP: 'ON_INTERACTION', cache key: 'loadstrategy:on-interaction:componentId'.
 *   Model Identifier Format: 'on-interaction-{event}-{delay}'.
 *   Variations and Use Cases: For click-to-load ads in GEOCoLab or interactive banners.
 *   Example Usage: onClick={loadAd} for user-triggered ads.
 */
export type AdLoadStrategyTaxonomy = 'eager' | 'lazy' | 'on-view' | 'on-interaction';
```

## A11yPriorityTaxonomy
```typescript
/**
 * Union type representing A11yPriority in the Framr UI ecosystem, defining ARIA live priorities for accessibility components like 'ariaLive' or alert regions.
 * These priorities align with W3C ARIA live regions for screen reader announcements, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., ARIA configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'polite': Polite announcement, waits for pause.
 *   Classifications: A11y priority (polite); ARIA live='polite', WCAG 4.1.3.
 *   Identifiers: lowercase: 'polite', camelCase: 'politePriority', snake_case: 'polite_priority', ALL_CAP: 'POLITE', cache key: 'a11ypriority:polite:componentId'.
 *   Model Identifier Format: 'polite-{region}-{message}' (kebab-case for ARIA attrs).
 *   Variations and Use Cases: Synonyms: 'non-interruptive'; for status updates in Trakfox or log messages; validate via `isValidA11yPriority(priority)`.
 *   Example Usage: <div role='status' aria-live='polite'> for non-urgent updates.
 *
 * - 'assertive': Assertive interrupt announcement.
 *   Classifications: A11y priority (assertive); ARIA live='assertive'.
 *   Identifiers: lowercase: 'assertive', camelCase: 'assertivePriority', snake_case: 'assertive_priority', ALL_CAP: 'ASSERTIVE', cache key: 'a11ypriority:assertive:componentId'.
 *   Model Identifier Format: 'assertive-{region}-{message}'.
 *   Variations and Use Cases: For error alerts in HealthOrb or urgent toasts.
 *   Example Usage: <div role='alert' aria-live='assertive'> for errors.
 *
 * - 'off': No live announcements.
 *   Classifications: A11y priority (off); ARIA live='off'.
 *   Identifiers: lowercase: 'off', camelCase: 'offPriority', snake_case: 'off_priority', ALL_CAP: 'OFF', cache key: 'a11ypriority:off:componentId'.
 *   Model Identifier Format: 'off-{region}-{static}'.
 *   Variations and Use Cases: For static content in DnDHubs or non-live regions.
 *   Example Usage: <div aria-live='off'> for static text.
 */
export type A11yPriorityTaxonomy = 'polite' | 'assertive' | 'off';
```

## A11yModeTaxonomy
```typescript
/**
 * Union type representing A11yMode in the Framr UI ecosystem, defining accessibility modes for components like 'accessibilityPanel' or interactive elements.
 * These modes align with WCAG preferences for reduced motion/contrast, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., a11y configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'screen-reader': Optimized for screen readers.
 *   Classifications: A11y mode (screen-reader); WCAG 4.1.2 for name/state.
 *   Identifiers: lowercase: 'screen-reader', camelCase: 'screenReaderMode', snake_case: 'screen_reader_mode', ALL_CAP: 'SCREEN_READER', cache key: 'a11ymode:screen-reader:componentId'.
 *   Model Identifier Format: 'screen-reader-{aria}-{hidden}' (kebab-case for ARIA attrs).
 *   Variations and Use Cases: Synonyms: 'sr-only'; for voiceover in Trakfox or hidden text; validate via `isValidA11yMode(mode)`.
 *   Example Usage: <div a11yMode='screen-reader' class='sr-only'> for screen reader text.
 *
 * - 'keyboard': Keyboard navigation mode.
 *   Classifications: A11y mode (keyboard); WCAG 2.1.1 for keyboard operable.
 *   Identifiers: lowercase: 'keyboard', camelCase: 'keyboardMode', snake_case: 'keyboard_mode', ALL_CAP: 'KEYBOARD', cache key: 'a11ymode:keyboard:componentId'.
 *   Model Identifier Format: 'keyboard-{focus}-{tabindex}'.
 *   Variations and Use Cases: For focus traps in HealthOrb modals or button navigation.
 *   Example Usage: tabindex='0' on interactive divs.
 *
 * - 'high-contrast': High contrast colors.
 *   Classifications: A11y mode (high-contrast); WCAG 1.4.3 for contrast.
 *   Identifiers: lowercase: 'high-contrast', camelCase: 'highContrastMode', snake_case: 'high_contrast_mode', ALL_CAP: 'HIGH_CONTRAST', cache key: 'a11ymode:high-contrast:componentId'.
 *   Model Identifier Format: 'high-contrast-{ratio}-{colors}'.
 *   Variations and Use Cases: For low vision users in DnDHubs or contrast toggles.
 *   Example Usage: Media query prefers-contrast: high with high-contrast colors.
 *
 * - 'reduced-motion': Reduce animations.
 *   Classifications: A11y mode (reduced-motion); WCAG 2.3.3 for motion sensitivity.
 *   Identifiers: lowercase: 'reduced-motion', camelCase: 'reducedMotionMode', snake_case: 'reduced_motion_mode', ALL_CAP: 'REDUCED_MOTION', cache key: 'a11ymode:reduced-motion:componentId'.
 *   Model Identifier Format: 'reduced-motion-{transitions}-{off}'.
 *   Variations and Use Cases: For vestibular disorders in GEOCoLab or minimal animations.
 *   Example Usage: Media query prefers-reduced-motion: reduce, set transitions to 0s.
 */
export type A11yModeTaxonomy = 'screen-reader' | 'keyboard' | 'high-contrast' | 'reduced-motion';
```

## CollaborationModeTaxonomy
```typescript
/**
 * Union type representing CollaborationMode in the Framr UI ecosystem, defining modes for collaboration components like 'chat', 'comments', or real-time editors.
 * These modes align with WebSocket/polling for sync/async updates, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., sync configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'realtime': Real-time sync mode.
 *   Classifications: Collab mode (realtime); WebSocket-based.
 *   Identifiers: lowercase: 'realtime', camelCase: 'realtimeMode', snake_case: 'realtime_mode', ALL_CAP: 'REALTIME', cache key: 'collabmode:realtime:componentId'.
 *   Model Identifier Format: 'realtime-{socket}-{event}' (kebab-case for connection configs).
 *   Variations and Use Cases: Synonyms: 'live'; for chat in Trakfox or live editors; validate via `isValidCollabMode(mode)`.
 *   Example Usage: <ChatPortal mode='realtime'> with useWebSocket for updates.
 *
 * - 'async': Asynchronous mode with polling.
 *   Classifications: Collab mode (async).
 *   Identifiers: lowercase: 'async', camelCase: 'asyncMode', snake_case: 'async_mode', ALL_CAP: 'ASYNC', cache key: 'collabmode:async:componentId'.
 *   Model Identifier Format: 'async-{poll}-{interval}'.
 *   Variations and Use Cases: For comments in HealthOrb or delayed updates.
 *   Example Usage: setInterval(refetch, 5000) for comments.
 *
 * - 'hybrid': Mix of real-time and async.
 *   Classifications: Collab mode (hybrid).
 *   Identifiers: lowercase: 'hybrid', camelCase: 'hybridMode', snake_case: 'hybrid_mode', ALL_CAP: 'HYBRID', cache key: 'collabmode:hybrid:componentId'.
 *   Model Identifier Format: 'hybrid-{realtime}-{fallback}'.
 *   Variations and Use Cases: For annotations in DnDHubs or mixed-mode editors.
 *   Example Usage: WebSocket with polling fallback for annotations.
 */
export type CollaborationModeTaxonomy = 'realtime' | 'async' | 'hybrid';
```

## PresenceStatusTaxonomy
```typescript
/**
 * Union type representing PresenceStatus in the Framr UI ecosystem, defining user status indicators for collaboration components like 'presence' or chat avatars.
 * These statuses align with real-time indicators for online/offline states, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., user configs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'online': User is online.
 *   Classifications: Presence (online); green dot indicator.
 *   Identifiers: lowercase: 'online', camelCase: 'onlineStatus', snake_case: 'online_status', ALL_CAP: 'ONLINE', cache key: 'presence:online:componentId'.
 *   Model Identifier Format: 'online-{user}-{timestamp}' (kebab-case for real-time updates).
 *   Variations and Use Cases: Synonyms: 'active'; for chat indicators in Trakfox or user lists; validate via `isValidPresenceStatus(status)`.
 *   Example Usage: <PresencePortal status='online'> with 'bg-green-500 rounded-full'.
 *
 * - 'away': User is away.
 *   Classifications: Presence (away).
 *   Identifiers: lowercase: 'away', camelCase: 'awayStatus', snake_case: 'away_status', ALL_CAP: 'AWAY', cache key: 'presence:away:componentId'.
 *   Model Identifier Format: 'away-{idle}-{time}'.
 *   Variations and Use Cases: For idle users in HealthOrb or away indicators.
 *   Example Usage: 'bg-yellow-500 rounded-full'.
 *
 * - 'busy': User is busy.
 *   Classifications: Presence (busy).
 *   Identifiers: lowercase: 'busy', camelCase: 'busyStatus', snake_case: 'busy_status', ALL_CAP: 'BUSY', cache key: 'presence:busy:componentId'.
 *   Model Identifier Format: 'busy-{dnd}-{reason}'.
 *   Variations and Use Cases: For do-not-disturb in DnDHubs or busy avatars.
 *   Example Usage: 'bg-red-500 rounded-full'.
 *
 * - 'offline': User is offline.
 *   Classifications: Presence (offline).
 *   Identifiers: lowercase: 'offline', camelCase: 'offlineStatus', snake_case: 'offline_status', ALL_CAP: 'OFFLINE', cache key: 'presence:offline:componentId'.
 *   Model Identifier Format: 'offline-{lastSeen}-{reason}'.
 *   Variations and Use Cases: For disconnected users in GEOCoLab or grayed avatars.
 *   Example Usage: 'bg-gray-500 rounded-full'.
 *
 * - 'invisible': User appears offline but active.
 *   Classifications: Presence (invisible).
 *   Identifiers: lowercase: 'invisible', camelCase: 'invisibleStatus', snake_case: 'invisible_status', ALL_CAP: 'INVISIBLE', cache key: 'presence:invisible:componentId'.
 *   Model Identifier Format: 'invisible-{hidden}-{time}'.
 *   Variations and Use Cases: For privacy mode in Trakfox or hidden status.
 *   Example Usage: Hidden status but WebSocket active.
 */
export type PresenceStatusTaxonomy = 'online' | 'away' | 'busy' | 'offline' | 'invisible';
```

## ErrorSeverityTaxonomy
```typescript
/**
 * Union type representing ErrorSeverity in the Framr UI ecosystem, defining severity levels for error components like 'errorToast', 'errorBoundary', or alerts.
 * These severities align with semantic colors and ARIA for error messages, reusable across Framr components.
 * Each variant includes details for consistency in storage (e.g., error logs in JSON) and validation (e.g., in @framr/utils).
 *
 * - 'fatal': Fatal unrecoverable error.
 *   Classifications: Severity (fatal); ARIA alert, WCAG 4.1.3.
 *   Identifiers: lowercase: 'fatal', camelCase: 'fatalSeverity', snake_case: 'fatal_severity', ALL_CAP: 'FATAL', cache key: 'errorseverity:fatal:componentId'.
 *   Model Identifier Format: 'fatal-{code}-{message}' (kebab-case for error logs).
 *   Variations and Use Cases: Synonyms: 'critical'; for crashes in Trakfox or app failures; validate via `isValidErrorSeverity(severity)`.
 *   Example Usage: <ErrorBoundary severity='fatal'> with full-page error UI.
 *
 * - 'warning': Non-fatal warning.
 *   Classifications: Severity (warning).
 *   Identifiers: lowercase: 'warning', camelCase: 'warningSeverity', snake_case: 'warning_severity', ALL_CAP: 'WARNING', cache key: 'errorseverity:warning:componentId'.
 *   Model Identifier Format: 'warning-{code}-{message}'.
 *   Variations and Use Cases: For deprecation notices in HealthOrb or minor issues.
 *   Example Usage: <ErrorToast severity='warning'> with 'bg-yellow-500'.
 *
 * - 'info': Informational note.
 *   Classifications: Severity (info).
 *   Identifiers: lowercase: 'info', camelCase: 'infoSeverity', snake_case: 'info_severity', ALL_CAP: 'INFO', cache key: 'errorseverity:info:componentId'.
 *   Model Identifier Format: 'info-{code}-{message}'.
 *   Variations and Use Cases: For tips in DnDHubs or non-error notices.
 *   Example Usage: <ErrorToast severity='info'> with 'bg-blue-500'.
 */
export type ErrorSeverityTaxonomy = 'fatal' | 'warning' | 'info';
```

## OnboardingStepTaxonomy
```typescript
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
```

## SharePlatformTaxonomy
```typescript
/**
 * Union type representing SharePlatform in the Framr UI ecosystem, defining platforms for social portals like 'socialShare'.
 * These platforms align with sharing APIs for links.
 * Each variant includes details for consistency and validation.
 *
 * - 'x': Share on Twitter/X.
 * Classifications: Platform (x); now X API.
 * Identifiers: lowercase: 'x', camelCase: 'xPlatform', snake_case: 'twitter_platform', ALL_CAP: 'X', cache key: 'shareplatform:twitter:portalId'.
 * Model Identifier Format: 'x-{url}-{text}' (kebab-case for share URLs).
 * Variations and Use Cases: Synonyms: 'x'; for posts in Trakfox.
 * Example Usage: <button onClick={shareToTwitter}>.
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
export type SharePlatformTaxonomy = 'x' | 'facebook' | 'linkedin' | 'email' | 'whatsapp' | 'telegram' | 'pinterest' | 'reddit' | 'skype' | 'line' | 'messenger';
```