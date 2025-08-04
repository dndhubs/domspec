/**
 * Union type representing ErrorContentTypeTaxonomy in the DOMSpec ecosystem.
 * Defines MIME types for error context in @dndhub/error.
 *
 * - 'application/json': JSON data format.
 *   Classifications: MIME type (RFC 6838).
 *   Identifiers: lowercase: 'application/json', camelCase: 'jsonContent', snake_case: 'json_content', ALL_CAP: 'APPLICATION_JSON', cache key: 'content:application/json:errId'.
 *   Model Identifier Format: 'content-json-{timestamp}'.
 *   Variations and Use Cases: Used for API responses and data serialization; common in AJAX errors.
 *   Example Usage: JSON API response errors in DomsError.ts.
 *
 * - 'text/html': HTML document.
 *   Identifiers: lowercase: 'text/html', camelCase: 'htmlContent', snake_case: 'html_content', ALL_CAP: 'TEXT_HTML', cache key: 'content:text/html:errId'.
 *   Model Identifier Format: 'content-html-{timestamp}'.
 *   Variations and Use Cases: Used for web pages; errors in rendering or server-side templates.
 *   Example Usage: HTML rendering errors in DomsClientError.tsx.
 *
 * - 'text/plain': Plain text.
 *   Identifiers: lowercase: 'text/plain', camelCase: 'plainContent', snake_case: 'plain_content', ALL_CAP: 'TEXT_PLAIN', cache key: 'content:text/plain:errId'.
 *   Model Identifier Format: 'content-plain-{timestamp}'.
 *   Variations and Use Cases: Used for simple text responses; common in log files or error messages.
 *   Example Usage: Plain text error messages in DomsError.ts.
 *
 * - 'application/xml': XML data format.
 *   Identifiers: lowercase: 'application/xml', camelCase: 'xmlContent', snake_case: 'xml_content', ALL_CAP: 'APPLICATION_XML', cache key: 'content:application/xml:errId'.
 *   Model Identifier Format: 'content-xml-{timestamp}'.
 *   Variations and Use Cases: Used for structured data; errors in XML parsing or API responses.
 *   Example Usage: XML API errors in fluxr integrations.
 *
 * - 'multipart/form-data': Form data uploads.
 *   Identifiers: lowercase: 'multipart/form-data', camelCase: 'formDataContent', snake_case: 'form_data_content', ALL_CAP: 'MULTIPART_FORM_DATA', cache key: 'content:multipart/form-data:errId'.
 *   Model Identifier Format: 'content-form-data-{timestamp}'.
 *   Variations and Use Cases: Used for file uploads and form submissions; errors in multipart parsing.
 *   Example Usage: Form submission errors in Trakfox forms via DomsClientError.tsx.
 *
 * - 'application/pdf': Portable Document Format.
 *   Classifications: MIME type (RFC 3778).
 *   Identifiers: lowercase: 'application/pdf', camelCase: 'pdfContent', snake_case: 'pdf_content', ALL_CAP: 'APPLICATION_PDF', cache key: 'content:application/pdf:errId'.
 *   Model Identifier Format: 'content-pdf-{timestamp}'.
 *   Variations and Use Cases: Used for document downloads; errors in PDF generation or serving.
 *   Example Usage: PDF response errors in DomsError.ts for document APIs.
 *
 * - 'application/octet-stream': Binary data stream.
 *   Classifications: MIME type (RFC 2046).
 *   Identifiers: lowercase: 'application/octet-stream', camelCase: 'binaryContent', snake_case: 'binary_content', ALL_CAP: 'APPLICATION_OCTET_STREAM', cache key: 'content:application/octet-stream:errId'.
 *   Model Identifier Format: 'content-binary-{timestamp}'.
 *   Variations and Use Cases: Used for unknown or binary files; fallback for file downloads.
 *   Example Usage: Binary file errors in fluxr storage drivers.
 *
 * - 'image/jpeg': JPEG image format.
 *   Classifications: MIME type (RFC 2045).
 *   Identifiers: lowercase: 'image/jpeg', camelCase: 'jpegImage', snake_case: 'jpeg_image', ALL_CAP: 'IMAGE_JPEG', cache key: 'content:image/jpeg:errId'.
 *   Model Identifier Format: 'content-jpeg-{timestamp}'.
 *   Variations and Use Cases: Used for images; errors in image loading or processing.
 *   Example Usage: JPEG error responses in DomsClientError.tsx for UI images.
 *
 * - 'image/png': PNG image format.
 *   Classifications: MIME type (RFC 2083).
 *   Identifiers: lowercase: 'image/png', camelCase: 'pngImage', snake_case: 'png_image', ALL_CAP: 'IMAGE_PNG', cache key: 'content:image/png:errId'.
 *   Model Identifier Format: 'content-png-{timestamp}'.
 *   Variations and Use Cases: Used for transparent images; errors in PNG rendering.
 *   Example Usage: PNG file errors in DomsError.ts for asset loading.
 *
 * - 'application/javascript': JavaScript code.
 *   Classifications: MIME type (RFC 9239).
 *   Identifiers: lowercase: 'application/javascript', camelCase: 'jsContent', snake_case: 'js_content', ALL_CAP: 'APPLICATION_JAVASCRIPT', cache key: 'content:application/javascript:errId'.
 *   Model Identifier Format: 'content-js-{timestamp}'.
 *   Variations and Use Cases: Used for scripts; errors in script execution or loading.
 *   Example Usage: JS error responses in DomsClientError.tsx for client-side scripts.
 *
 * - 'text/css': Cascading Style Sheets.
 *   Classifications: MIME type (RFC 2318).
 *   Identifiers: lowercase: 'text/css', camelCase: 'cssContent', snake_case: 'css_content', ALL_CAP: 'TEXT_CSS', cache key: 'content:text/css:errId'.
 *   Model Identifier Format: 'content-css-{timestamp}'.
 *   Variations and Use Cases: Used for styling; errors in CSS parsing or loading.
 *   Example Usage: CSS file errors in DomsError.ts for Tailwind integrations.
 *
 * - 'image/gif': GIF image format.
 *   Classifications: MIME type (RFC 2045).
 *   Identifiers: lowercase: 'image/gif', camelCase: 'gifImage', snake_case: 'gif_image', ALL_CAP: 'IMAGE_GIF', cache key: 'content:image/gif:errId'.
 *   Model Identifier Format: 'content-gif-{timestamp}'.
 *   Variations and Use Cases: Used for animated images; errors in GIF loading.
 *   Example Usage: GIF response errors in DomsClientError.tsx for UI animations.
 *
 * - 'application/zip': ZIP archive format.
 *   Classifications: MIME type (RFC 2046).
 *   Identifiers: lowercase: 'application/zip', camelCase: 'zipArchive', snake_case: 'zip_archive', ALL_CAP: 'APPLICATION_ZIP', cache key: 'content:application/zip:errId'.
 *   Model Identifier Format: 'content-zip-{timestamp}'.
 *   Variations and Use Cases: Used for compressed files; errors in zip downloads.
 *   Example Usage: ZIP file errors in fluxr filesystem drivers.
 *
 * - 'audio/mpeg': MP3 audio format.
 *   Classifications: MIME type (RFC 3003).
 *   Identifiers: lowercase: 'audio/mpeg', camelCase: 'mp3Audio', snake_case: 'mp3_audio', ALL_CAP: 'AUDIO_MPEG', cache key: 'content:audio/mpeg:errId'.
 *   Model Identifier Format: 'content-mp3-{timestamp}'.
 *   Variations and Use Cases: Used for audio files; errors in audio streaming.
 *   Example Usage: MP3 response errors in DomsError.ts for multimedia.
 *
 * - 'video/mp4': MP4 video format.
 *   Classifications: MIME type (RFC 4337).
 *   Identifiers: lowercase: 'video/mp4', camelCase: 'mp4Video', snake_case: 'mp4_video', ALL_CAP: 'VIDEO_MP4', cache key: 'content:video/mp4:errId'.
 *   Model Identifier Format: 'content-mp4-{timestamp}'.
 *   Variations and Use Cases: Used for videos; errors in video loading.
 *   Example Usage: MP4 file errors in DomsClientError.tsx for video content.
 *
 * - 'text/xml': XML text format.
 *   Classifications: MIME type (RFC 3023).
 *   Identifiers: lowercase: 'text/xml', camelCase: 'xmlText', snake_case: 'xml_text', ALL_CAP: 'TEXT_XML', cache key: 'content:text/xml:errId'.
 *   Model Identifier Format: 'content-xml-text-{timestamp}'.
 *   Variations and Use Cases: Used for XML as text; errors in XML parsing.
 *   Example Usage: Text XML errors in fluxr integrations.
 *
 * - 'application/x-www-form-urlencoded': URL-encoded form data.
 *   Classifications: MIME type (RFC 2388).
 *   Identifiers: lowercase: 'application/x-www-form-urlencoded', camelCase: 'urlEncodedForm', snake_case: 'url_encoded_form', ALL_CAP: 'APPLICATION_X_WWW_FORM_URLENCODED', cache key: 'content:application/x-www-form-urlencoded:errId'.
 *   Model Identifier Format: 'content-url-encoded-{timestamp}'.
 *   Variations and Use Cases: Used for form submissions; errors in query string parsing.
 *   Example Usage: Form data errors in Trakfox forms via DomsError.ts.
 *
 * - 'application/gzip': GZIP compressed data.
 *   Classifications: MIME type (RFC 6713).
 *   Identifiers: lowercase: 'application/gzip', camelCase: 'gzipContent', snake_case: 'gzip_content', ALL_CAP: 'APPLICATION_GZIP', cache key: 'content:application/gzip:errId'.
 *   Model Identifier Format: 'content-gzip-{timestamp}'.
 *   Variations and Use Cases: Used for compressed responses; errors in decompression.
 *   Example Usage: GZIP error responses in DomsError.ts for compressed APIs.
 *
 * - 'application/vnd.ms-excel': Microsoft Excel spreadsheet.
 *   Classifications: MIME type (IANA).
 *   Identifiers: lowercase: 'application/vnd.ms-excel', camelCase: 'excelSheet', snake_case: 'excel_sheet', ALL_CAP: 'APPLICATION_VND_MS_EXCEL', cache key: 'content:application/vnd.ms-excel:errId'.
 *   Model Identifier Format: 'content-excel-{timestamp}'.
 *   Variations and Use Cases: Used for spreadsheets; errors in Excel file serving.
 *   Example Usage: Excel file errors in fluxr data processing drivers.
 */
export type ErrorContentTypeTaxonomy = CoreErrorContentType | CustomErrorContentType;
export type CoreErrorContentType = 'application/json' | 'text/html' | 'text/plain' | 'application/xml' | 'multipart/form-data' | 'application/pdf' | 'application/octet-stream' | 'image/jpeg' | 'image/png' | 'application/javascript' | 'text/css' | 'image/gif' | 'application/zip' | 'audio/mpeg' | 'video/mp4' | 'text/xml' | 'application/x-www-form-urlencoded' | 'application/gzip' | 'application/vnd.ms-excel';
export type CustomErrorContentType = string & { __contentType?: 'CustomErrorContentType' };