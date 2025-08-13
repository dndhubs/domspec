/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/navigation/request-destination-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/RequestDestination
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20RequestDestinationTaxonomy
 * Union type representing RequestDestinationTaxonomy in the DOMSpec ecosystem.
 * Defines the types of content being requested in HTTP requests across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * Aligns with the W3C Fetch specification for the `Request.destination` property, used by user agents to determine CORS rules, navigation paths, or content handling (e.g., data storage vs. script execution).
 * Note: This feature is available in Web Workers, ensuring compatibility in asynchronous environments.
 * Use Case in DNDHUBS DOMSpec Ecosystem: This taxonomy is critical for routing and processing requests in Trakfox for UI rendering (e.g., `image`, `style`), HealthOrb DHIS2 for data reporting (e.g., `report`), and DNDHUBS marketplace for resource fetching (e.g., `script`, `worker`). It supports validation of request types and ensures proper handling of resources like worklets or manifests.
 * Integration: Destinations are set implicitly by the type of request (e.g., `<img>` sets `image`, `fetch()` defaults to `''`). Developers can use this taxonomy to validate or configure request handling in APIs or UI components.
 * @example
 * // Trakfox image request
 * const request = new Request('/assets/flower.jpg');
 * console.log(request.destination); // 'image'
 * @example
 * // HealthOrb DHIS2 report request
 * fetch('/api/reports', { method: 'POST' }).then(res => console.log(res.destination)); // 'report'
 *
 * - '': Default value for requests without a specific destination.
 *   Directives: Used for requests made via APIs like `<a ping>`, `<area ping>`, `Cache`, `EventSource`, `fetch()`, `navigator.sendBeacon()`, `WebSocket`, or `XMLHttpRequest`.
 *   Classifications: Aligns with W3C Fetch specification; default for generic requests.
 *   Identifiers: lowercase: '', camelCase: 'defaultDestination', snake_case: 'default_destination', ALL_CAP: 'DEFAULT', cache key: 'destination:default:resourceId'.
 *   Model Identifier Format: 'default-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for generic API calls or WebSocket connections in real-time features.
 *   @example
 *   // Trakfox WebSocket connection
 *   const ws = new WebSocket('wss://api.trakfox.com'); // destination: ''
 *
 * - 'audio': Represents requests for audio data.
 *   Directives: Targets audio content, typically via `<audio>` elements.
 *   Classifications: Aligns with W3C HTML specification for media resources.
 *   Identifiers: lowercase: 'audio', camelCase: 'audioDestination', snake_case: 'audio_destination', ALL_CAP: 'AUDIO', cache key: 'destination:audio:resourceId'.
 *   Model Identifier Format: 'audio-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for streaming audio in media players.
 *   @example
 *   // Trakfox audio player
 *   <audio src="/media/song.mp3"></audio> // destination: 'audio'
 *
 * - 'audioworklet': Represents requests for audio worklet data.
 *   Directives: Targets data for `AudioWorklet` processing, used in Web Audio API.
 *   Classifications: Aligns with W3C Web Audio specification; script-based destination.
 *   Identifiers: lowercase: 'audioworklet', camelCase: 'audioWorkletDestination', snake_case: 'audio_worklet_destination', ALL_CAP: 'AUDIOWORKLET', cache key: 'destination:audioworklet:resourceId'.
 *   Model Identifier Format: 'audioworklet-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for real-time audio processing in medical diagnostics.
 *   @example
 *   // HealthOrb DHIS2 audio worklet
 *   audioContext.audioWorklet.addModule('/worklet.js'); // destination: 'audioworklet'
 *
 * - 'document': Represents requests for HTML or XML documents.
 *   Directives: Targets top-level navigation or iframe content, typically via `<a>` or `<iframe>`.
 *   Classifications: Aligns with W3C HTML specification for document resources.
 *   Identifiers: lowercase: 'document', camelCase: 'documentDestination', snake_case: 'document_destination', ALL_CAP: 'DOCUMENT', cache key: 'destination:document:resourceId'.
 *   Model Identifier Format: 'document-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for page navigation in the Patron Journey Map.
 *   @example
 *   // Trakfox page navigation
 *   window.location.href = '/dashboard'; // destination: 'document'
 *
 * - 'embed': Represents requests for embedded content.
 *   Directives: Targets content embedded via `<embed>` elements.
 *   Classifications: Aligns with W3C HTML specification for embedded resources.
 *   Identifiers: lowercase: 'embed', camelCase: 'embedDestination', snake_case: 'embed_destination', ALL_CAP: 'EMBED', cache key: 'destination:embed:resourceId'.
 *   Model Identifier Format: 'embed-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for embedded plugins or media.
 *   @example
 *   // DNDHUBS marketplace embed
 *   <embed src="/plugin.swf"> // destination: 'embed'
 *
 * - 'font': Represents requests for font resources.
 *   Directives: Targets font files, typically via `@font-face` in CSS.
 *   Classifications: Aligns with W3C CSS Fonts specification.
 *   Identifiers: lowercase: 'font', camelCase: 'fontDestination', snake_case: 'font_destination', ALL_CAP: 'FONT', cache key: 'destination:font:resourceId'.
 *   Model Identifier Format: 'font-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for custom typography in UI components.
 *   @example
 *   // Trakfox custom font
 *   @font-face { src: url('/fonts/custom.woff'); } // destination: 'font'
 *
 * - 'frame': Represents requests for frame content.
 *   Directives: Targets content for `<frame>` elements (deprecated but supported).
 *   Classifications: Aligns with W3C HTML specification; legacy support.
 *   Identifiers: lowercase: 'frame', camelCase: 'frameDestination', snake_case: 'frame_destination', ALL_CAP: 'FRAME', cache key: 'destination:frame:resourceId'.
 *   Model Identifier Format: 'frame-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in legacy DNDHUBS systems for backward compatibility.
 *   @example
 *   // Legacy DNDHUBS frame
 *   <frame src="/legacy.html"> // destination: 'frame'
 *
 * - 'iframe': Represents requests for iframe content.
 *   Directives: Targets content for `<iframe>` elements.
 *   Classifications: Aligns with W3C HTML specification for embedded resources.
 *   Identifiers: lowercase: 'iframe', camelCase: 'iframeDestination', snake_case: 'iframe_destination', ALL_CAP: 'IFRAME', cache key: 'destination:iframe:resourceId'.
 *   Model Identifier Format: 'iframe-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for embedded dashboards or third-party widgets.
 *   @example
 *   // Trakfox embedded dashboard
 *   <iframe src="/dashboard"></iframe> // destination: 'iframe'
 *
 * - 'image': Represents requests for image data.
 *   Directives: Targets image files, typically via `<img>` or CSS `background-image`.
 *   Classifications: Aligns with W3C HTML and CSS specifications.
 *   Identifiers: lowercase: 'image', camelCase: 'imageDestination', snake_case: 'image_destination', ALL_CAP: 'IMAGE', cache key: 'destination:image:resourceId'.
 *   Model Identifier Format: 'image-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for product images in the marketplace.
 *   @example
 *   // Trakfox product image
 *   <img src="/products/shirt.jpg"> // destination: 'image'
 *
 * - 'manifest': Represents requests for web app manifests.
 *   Directives: Targets manifest files, typically via `<link rel="manifest">`.
 *   Classifications: Aligns with W3C Web App Manifest specification.
 *   Identifiers: lowercase: 'manifest', camelCase: 'manifestDestination', snake_case: 'manifest_destination', ALL_CAP: 'MANIFEST', cache key: 'destination:manifest:resourceId'.
 *   Model Identifier Format: 'manifest-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for progressive web app configurations.
 *   @example
 *   // Trakfox PWA manifest
 *   <link rel="manifest" href="/manifest.json"> // destination: 'manifest'
 *
 * - 'object': Represents requests for object content.
 *   Directives: Targets content for `<object>` elements, such as plugins or media.
 *   Classifications: Aligns with W3C HTML specification for embedded resources.
 *   Identifiers: lowercase: 'object', camelCase: 'objectDestination', snake_case: 'object_destination', ALL_CAP: 'OBJECT', cache key: 'destination:object:resourceId'.
 *   Model Identifier Format: 'object-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in DNDHUBS marketplace for embedded objects like PDF viewers.
 *   @example
 *   // DNDHUBS marketplace object
 *   <object data="/doc.pdf"></object> // destination: 'object'
 *
 * - 'paintworklet': Represents requests for paint worklet data.
 *   Directives: Targets data for `PaintWorklet` processing, used in CSS Houdini API.
 *   Classifications: Aligns with W3C CSS Houdini specification; script-based destination.
 *   Identifiers: lowercase: 'paintworklet', camelCase: 'paintWorkletDestination', snake_case: 'paint_worklet_destination', ALL_CAP: 'PAINTWORKLET', cache key: 'destination:paintworklet:resourceId'.
 *   Model Identifier Format: 'paintworklet-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for custom CSS painting in UI components.
 *   @example
 *   // Trakfox paint worklet
 *   CSS.paintWorklet.addModule('/paint.js'); // destination: 'paintworklet'
 *
 * - 'report': Represents requests for report data.
 *   Directives: Targets report content, such as CSP or COEP violation reports.
 *   Classifications: Aligns with W3C Reporting API specification.
 *   Identifiers: lowercase: 'report', camelCase: 'reportDestination', snake_case: 'report_destination', ALL_CAP: 'REPORT', cache key: 'destination:report:resourceId'.
 *   Model Identifier Format: 'report-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for compliance and security reporting.
 *   @example
 *   // HealthOrb DHIS2 report
 *   navigator.sendBeacon('/reports/csp', data); // destination: 'report'
 *
 * - 'script': Represents requests for script files.
 *   Directives: Targets JavaScript files, typically via `<script>` elements.
 *   Classifications: Aligns with W3C HTML specification; script-based destination.
 *   Identifiers: lowercase: 'script', camelCase: 'scriptDestination', snake_case: 'script_destination', ALL_CAP: 'SCRIPT', cache key: 'destination:script:resourceId'.
 *   Model Identifier Format: 'script-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for dynamic script loading in UI components.
 *   @example
 *   // Trakfox script loading
 *   <script src="/app.js"></script> // destination: 'script'
 *
 * - 'sharedworker': Represents requests for shared worker scripts.
 *   Directives: Targets scripts for `SharedWorker` instances.
 *   Classifications: Aligns with W3C Web Workers specification; script-based destination.
 *   Identifiers: lowercase: 'sharedworker', camelCase: 'sharedWorkerDestination', snake_case: 'shared_worker_destination', ALL_CAP: 'SHAREDWORKER', cache key: 'destination:sharedworker:resourceId'.
 *   Model Identifier Format: 'sharedworker-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for shared background processing across tabs.
 *   @example
 *   // Trakfox shared worker
 *   new SharedWorker('/worker.js'); // destination: 'sharedworker'
 *
 * - 'style': Represents requests for stylesheet files.
 *   Directives: Targets CSS files, typically via `<link rel="stylesheet">`.
 *   Classifications: Aligns with W3C CSS specification.
 *   Identifiers: lowercase: 'style', camelCase: 'styleDestination', snake_case: 'style_destination', ALL_CAP: 'STYLE', cache key: 'destination:style:resourceId'.
 *   Model Identifier Format: 'style-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for styling UI components.
 *   @example
 *   // Trakfox stylesheet
 *   <link rel="stylesheet" href="/styles.css"> // destination: 'style'
 *
 * - 'track': Represents requests for track data.
 *   Directives: Targets `<track>` elements for subtitles or captions in media.
 *   Classifications: Aligns with W3C HTML specification for media resources.
 *   Identifiers: lowercase: 'track', camelCase: 'trackDestination', snake_case: 'track_destination', ALL_CAP: 'TRACK', cache key: 'destination:track:resourceId'.
 *   Model Identifier Format: 'track-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for video subtitles in media players.
 *   @example
 *   // Trakfox video subtitles
 *   <track src="/subtitles.vtt"> // destination: 'track'
 *
 * - 'video': Represents requests for video data.
 *   Directives: Targets video content, typically via `<video>` elements.
 *   Classifications: Aligns with W3C HTML specification for media resources.
 *   Identifiers: lowercase: 'video', camelCase: 'videoDestination', snake_case: 'video_destination', ALL_CAP: 'VIDEO', cache key: 'destination:video:resourceId'.
 *   Model Identifier Format: 'video-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in Trakfox for streaming video in media players.
 *   @example
 *   // Trakfox video player
 *   <video src="/media/video.mp4"></video> // destination: 'video'
 *
 * - 'worker': Represents requests for worker scripts.
 *   Directives: Targets scripts for `Worker` instances.
 *   Classifications: Aligns with W3C Web Workers specification; script-based destination.
 *   Identifiers: lowercase: 'worker', camelCase: 'workerDestination', snake_case: 'worker_destination', ALL_CAP: 'WORKER', cache key: 'destination:worker:resourceId'.
 *   Model Identifier Format: 'worker-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for background data processing.
 *   @example
 *   // HealthOrb DHIS2 worker
 *   new Worker('/data-worker.js'); // destination: 'worker'
 *
 * - 'xslt': Represents requests for XSLT transforms.
 *   Directives: Targets XSLT files for XML transformations.
 *   Classifications: Aligns with W3C XSLT specification.
 *   Identifiers: lowercase: 'xslt', camelCase: 'xsltDestination', snake_case: 'xslt_destination', ALL_CAP: 'XSLT', cache key: 'destination:xslt:resourceId'.
 *   Model Identifier Format: 'xslt-{resourceType}-{timestamp}' (kebab-case for PostgreSQL storage).
 *   Variations and Use Cases: Used in HealthOrb DHIS2 for XML-based data reporting.
 *   @example
 *   // HealthOrb DHIS2 XSLT
 *   fetch('/transform.xslt'); // destination: 'xslt'
 */
export type RequestDestinationTaxonomy = '' | 'audio' | 'audioworklet' | 'document' | 'embed' | 'font' | 'frame' | 'iframe' | 'image' | 'manifest' | 'object' | 'paintworklet' | 'report' | 'script' | 'sharedworker' | 'style' | 'track' | 'video' | 'worker' | 'xslt';