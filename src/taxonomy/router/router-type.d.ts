/**
 * Union type representing RouterType in the DOMSpec ecosystem.
 * This taxonomy classifies different types of routers used for navigation and routing across various environments in the Trakfox platform, ensuring consistent handling of client-side, server-side, and specialized routing scenarios. It aligns with popular frameworks like React Router and supports extensibility for mobile, desktop, and testing contexts. Usage notes: These types are utilized in DOMSpec configurations for defining navigation flows, error handling in routes, and integration with analytics for tracking user journeys.
 *
 * - 'browser': Client-side routing in browser environments, using history API (e.g., BrowserRouter in React Router).
 *   Classifications: Web standards (History API, WHATWG URL), framework-specific (React Router v6+).
 *   Identifiers: lowercase: 'browser', camelCase: 'browserRouter', snake_case: 'browser_router', ALL_CAP: 'BROWSER', cache key: 'router:type:browser'.
 *   Model Identifier Format: 'browser-{environmentId}-{timestamp}' (kebab-case for storage in systems like Redis or PostgreSQL).
 *   Variations and Use Cases: Synonyms like 'history' or 'web'; scenarios include single-page applications (SPAs) for dynamic navigation without full page reloads, or in Trakfox Patron Journey Map for tracking browser-based user flows.
 *   Example Usage: Wrapping React app with <BrowserRouter> for client-side navigation, e.g., in Trakfox beta dashboard for seamless page transitions.
 *
 * - 'hash': Hash-based routing for client-side, suitable for static hosting without server support (e.g., HashRouter).
 *   Classifications: Legacy web routing (URL hash fragment), static site generators (Gatsby, Next.js static export).
 *   Identifiers: lowercase: 'hash', camelCase: 'hashRouter', snake_case: 'hash_router', ALL_CAP: 'HASH', cache key: 'router:type:hash'.
 *   Model Identifier Format: 'hash-{staticHostId}-{timestamp}' (kebab-case for consistent caching in CDNs like Cloudflare).
 *   Variations and Use Cases: Synonyms like 'fragment' or 'anchor'; ideal for GitHub Pages hosting or DnDHubs static prototypes where server configuration is unavailable.
 *   Example Usage: Implementing <HashRouter> in a React app for static deployments, e.g., in Trakfox documentation sites for anchor-based navigation.
 *
 * - 'memory': In-memory routing without URL changes, useful for testing or embedded apps (e.g., MemoryRouter).
 *   Classifications: Non-persistent routing (in-memory state), testing utilities (Jest, Cypress integrations).
 *   Identifiers: lowercase: 'memory', camelCase: 'memoryRouter', snake_case: 'memory_router', ALL_CAP: 'MEMORY', cache key: 'router:type:memory'.
 *   Model Identifier Format: 'memory-{testSessionId}-{timestamp}' (kebab-case for ephemeral storage in testing databases).
 *   Variations and Use Cases: Synonyms like 'in-memory' or 'virtual'; used in unit tests or embedded iframes within Trakfox apps to simulate navigation without affecting the browser URL.
 *   Example Usage: Using <MemoryRouter> in React testing library for isolated component tests, e.g., simulating user flows in Trakfox form submissions without real navigation.
 *
 * - 'static': Server-side routing for SSR/SSG scenarios where location is fixed (e.g., StaticRouter in React Router).
 *   Classifications: Server-rendered routing (Node.js, Express), static generation (Next.js ISR/SSG).
 *   Identifiers: lowercase: 'static', camelCase: 'staticRouter', snake_case: 'static_router', ALL_CAP: 'STATIC', cache key: 'router:type:static'.
 *   Model Identifier Format: 'static-{renderId}-{timestamp}' (kebab-case for server logs and databases like MongoDB).
 *   Variations and Use Cases: Synonyms like 'server' or 'fixed'; applied in server-side rendering for SEO-optimized pages in DnDHubs marketplace.
 *   Example Usage: Employing StaticRouter in Node.js for pre-rendering routes, e.g., generating static HTML for Trakfox landing pages.
 *
 * - 'mobile': Routing optimized for mobile apps, potentially with native navigation integration (e.g., React Native).
 *   Classifications: Mobile frameworks (React Native Navigator, Expo Router), native integrations (Android/iOS navigation stacks).
 *   Identifiers: lowercase: 'mobile', camelCase: 'mobileRouter', snake_case: 'mobile_router', ALL_CAP: 'MOBILE', cache key: 'router:type:mobile'.
 *   Model Identifier Format: 'mobile-{appId}-{timestamp}' (kebab-case for app store identifiers and local storage).
 *   Variations and Use Cases: Synonyms like 'native' or 'app'; scenarios include hybrid apps with deep linking in Trakfox mobile interfaces for loyalty programs.
 *   Example Usage: Integrating with React Native's NavigationContainer for tab-based routing, e.g., in Trakfox iOS/Android apps for user profile navigation.
 *
 * - 'desktop': Routing for desktop applications, such as Electron-based apps.
 *   Classifications: Desktop frameworks (Electron, NW.js), cross-platform routing (custom history management).
 *   Identifiers: lowercase: 'desktop', camelCase: 'desktopRouter', snake_case: 'desktop_router', ALL_CAP: 'DESKTOP', cache key: 'router:type:desktop'.
 *   Model Identifier Format: 'desktop-{windowId}-{timestamp}' (kebab-case for file system storage in desktop apps).
 *   Variations and Use Cases: Synonyms like 'electron' or 'standalone'; used in offline-capable desktop tools within the Trakfox ecosystem.
 *   Example Usage: Custom routing in Electron main process for window management, e.g., navigating between views in a Trakfox desktop admin tool.
 *
 * - 'test': Mock or test-specific routing for unit/integration testing environments.
 *   Classifications: Testing mocks (Jest mocks, Sinon stubs), CI/CD integrations (GitHub Actions, CircleCI).
 *   Identifiers: lowercase: 'test', camelCase: 'testRouter', snake_case: 'test_router', ALL_CAP: 'TEST', cache key: 'router:type:test'.
 *   Model Identifier Format: 'test-{suiteId}-{timestamp}' (kebab-case for test report databases).
 *   Variations and Use Cases: Synonyms like 'mock' or 'dummy'; essential for isolated testing of routing logic in HealthOrb DHIS2 integrations.
 *   Example Usage: Creating a mock router in Jest for testing route guards, e.g., validating authentication flows in Trakfox signup forms.
 */
export type RouterTypeTaxonomy = CoreRouterType | CustomRouterType;
export type CoreRouterType = 'browser' | 'hash' | 'memory' | 'static' | 'mobile' | 'desktop' | 'test';
export type CustomRouterType = string & { __type?: 'CustomRouterType' };