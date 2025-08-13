/**
 * Union type representing BrowserNameTaxonomy in the DOMSpec ecosystem.
 * Defines common browser names for deviceFingerprint.browser.name in @dndhub/error.
 * Supports user agent parsing for error context in browser detection.
 *
 * - 'chrome': Google Chrome browser.
 *   Classifications: Chromium-based.
 *   Identifiers: lowercase: 'chrome', camelCase: 'chromeBrowser', snake_case: 'chrome_browser', ALL_CAP: 'CHROME', cache key: 'browser:chrome:errId'.
 *   Model Identifier Format: 'browser-chrome-{timestamp}'.
 *   Variations and Use Cases: Desktop/mobile versions; common in web apps. Used with version for specificity.
 *   Example Usage: Chrome-specific errors in deviceFingerprint analysis.
 *
 * - 'firefox': Mozilla Firefox browser.
 *   Classifications: Gecko-based.
 *   Identifiers: lowercase: 'firefox', camelCase: 'firefoxBrowser', snake_case: 'firefox_browser', ALL_CAP: 'FIREFOX', cache key: 'browser:firefox:errId'.
 *   Model Identifier Format: 'browser-firefox-{timestamp}'.
 *   Variations and Use Cases: Privacy-focused; errors in extension compatibility.
 *   Example Usage: Firefox UA errors in DomsClientError.tsx.
 *
 * - 'safari': Apple Safari browser.
 *   Classifications: WebKit-based.
 *   Identifiers: lowercase: 'safari', camelCase: 'safariBrowser', snake_case: 'safari_browser', ALL_CAP: 'SAFARI', cache key: 'browser:safari:errId'.
 *   Model Identifier Format: 'browser-safari-{timestamp}'.
 *   Variations and Use Cases: iOS/macOS default; errors in PWA support.
 *   Example Usage: Safari-specific hydration errors in Next.js.
 *
 * - 'edge': Microsoft Edge browser.
 *   Classifications: Chromium-based.
 *   Identifiers: lowercase: 'edge', camelCase: 'edgeBrowser', snake_case: 'edge_browser', ALL_CAP: 'EDGE', cache key: 'browser:edge:errId'.
 *   Model Identifier Format: 'browser-edge-{timestamp}'.
 *   Variations and Use Cases: Windows default; errors in legacy IE modes.
 *   Example Usage: Edge UA detection in fluxr integrations.
 *
 * - 'opera': Opera browser.
 *   Classifications: Chromium-based.
 *   Identifiers: lowercase: 'opera', camelCase: 'operaBrowser', snake_case: 'opera_browser', ALL_CAP: 'OPERA', cache key: 'browser:opera:errId'.
 *   Model Identifier Format: 'browser-opera-{timestamp}'.
 *   Variations and Use Cases: Mobile/desktop; errors in VPN features.
 *   Example Usage: Opera UA errors in device context.
 *
 * - 'ie': Legacy Microsoft IE browser.
 *   Classifications: Trident-based.
 *   Identifiers: lowercase: 'ie', camelCase: 'ieBrowser', snake_case: 'ie_browser', ALL_CAP: 'IE', cache key: 'browser:ie:errId'.
 *   Model Identifier Format: 'browser-ie-{timestamp}'.
 *   Variations and Use Cases: Deprecated; errors in polyfill requirements. Short for 'Internet Explorer'.
 *   Example Usage: IE compatibility errors in DomsError.ts.
 *
 * - 'chromium': Chromium open-source browser engine.
 *   Classifications: Chromium-based.
 *   Identifiers: lowercase: 'chromium', camelCase: 'chromiumBrowser', snake_case: 'chromium_browser', ALL_CAP: 'CHROMIUM', cache key: 'browser:chromium:errId'.
 *   Model Identifier Format: 'browser-chromium-{timestamp}'.
 *   Variations and Use Cases: Base for many browsers; errors in engine-specific rendering.
 *   Example Usage: Chromium UA errors in custom builds.
 *
 * - 'electron': Electron framework for desktop apps.
 *   Classifications: Chromium-based desktop.
 *   Identifiers: lowercase: 'electron', camelCase: 'electronBrowser', snake_case: 'electron_browser', ALL_CAP: 'ELECTRON', cache key: 'browser:electron:errId'.
 *   Model Identifier Format: 'browser-electron-{timestamp}'.
 *   Variations and Use Cases: Used in cross-platform apps; errors in native integrations.
 *   Example Usage: Electron-specific errors in desktop DndHub apps.
 *
 * - 'brave': Brave browser.
 *   Classifications: Chromium-based.
 *   Identifiers: lowercase: 'brave', camelCase: 'braveBrowser', snake_case: 'brave_browser', ALL_CAP: 'BRAVE', cache key: 'browser:brave:errId'.
 *   Model Identifier Format: 'browser-brave-{timestamp}'.
 *   Variations and Use Cases: Privacy-focused; errors in ad-blocking.
 *   Example Usage: Brave-specific security errors.
 *
 * - 'vivaldi': Vivaldi browser.
 *   Classifications: Chromium-based.
 *   Identifiers: lowercase: 'vivaldi', camelCase: 'vivaldiBrowser', snake_case: 'vivaldi_browser', ALL_CAP: 'VIVALDI', cache key: 'browser:vivaldi:errId'.
 *   Model Identifier Format: 'browser-vivaldi-{timestamp}'.
 *   Variations and Use Cases: Customizable UI; errors in tab management.
 *   Example Usage: Vivaldi UA detection in error logs.
 */
export type BrowserNameTaxonomy = CoreBrowserName | CustomBrowserName;
export type CoreBrowserName = 'chrome' | 'firefox' | 'safari' | 'edge' | 'opera' | 'ie' | 'chromium' | 'electron' | 'brave' | 'vivaldi';
export type CustomBrowserName = string & { __browserName?: 'CustomBrowserName' };