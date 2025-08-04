/**
 * Union type representing ErrorDeviceTypeTaxonomy in the DOMSpec ecosystem.
 * Defines device types for error context in @dndhub/error.
 *
 * - 'mobile': Mobile devices.
 * Classifications: W3C Device Detection.
 * Identifiers: lowercase: 'mobile', camelCase: 'mobileDevice', snake_case: 'mobile_device', ALL_CAP: 'MOBILE', cache key: 'device:mobile:errId'.
 * Model Identifier Format: 'device-mobile-{timestamp}'.
 * Example Usage: Mobile errors in DomsClientError.tsx.
 *
 * - 'desktop': Desktop devices.
 * Identifiers: lowercase: 'desktop', camelCase: 'desktopDevice', snake_case: 'desktop_device', ALL_CAP: 'DESKTOP', cache key: 'device:desktop:errId'.
 * Model Identifier Format: 'device-desktop-{timestamp}'.
 * Example Usage: Desktop browser errors.
 *
 * - 'tablet': Tablet devices.
 * Identifiers: lowercase: 'tablet', camelCase: 'tabletDevice', snake_case: 'tablet_device', ALL_CAP: 'TABLET', cache key: 'device:tablet:errId'.
 * Model Identifier Format: 'device-tablet-{timestamp}'.
 * Example Usage: Tablet-specific errors.
 *
 * - 'smarttv': Smart TV devices.
 * Identifiers: lowercase: 'smarttv', camelCase: 'smartTv', snake_case: 'smart_tv', ALL_CAP: 'SMARTTV', cache key: 'device:smarttv:errId'.
 * Model Identifier Format: 'device-smarttv-{timestamp}'.
 * Example Usage: Errors on TV operating systems.
 *
 * - 'wearable': Wearable devices.
 * Identifiers: lowercase: 'wearable', camelCase: 'wearableDevice', snake_case: 'wearable_device', ALL_CAP: 'WEARABLE', cache key: 'device:wearable:errId'.
 * Model Identifier Format: 'device-wearable-{timestamp}'.
 * Example Usage: Errors from smartwatches or fitness trackers.
 *
 * - 'console': Gaming consoles.
 * Identifiers: lowercase: 'console', camelCase: 'gamingConsole', snake_case: 'gaming_console', ALL_CAP: 'CONSOLE', cache key: 'device:console:errId'.
 * Model Identifier Format: 'device-console-{timestamp}'.
 * Example Usage: Errors on game consoles like PlayStation or Xbox.
 *
 * - 'embedded': Embedded systems.
 * Identifiers: lowercase: 'embedded', camelCase: 'embeddedSystem', snake_case: 'embedded_system', ALL_CAP: 'EMBEDDED', cache key: 'device:embedded:errId'.
 * Model Identifier Format: 'device-embedded-{timestamp}'.
 * Example Usage: Errors in IoT devices or kiosks.
 *
 * - 'other': Generic other devices.
 * Identifiers: lowercase: 'other', camelCase: 'otherDevice', snake_case: 'other_device', ALL_CAP: 'OTHER', cache key: 'device:other:errId'.
 * Model Identifier Format: 'device-other-{timestamp}'.
 * Example Usage: Devices that don't fit into other categories.
 *
 * - 'unknown': Undetectable or unknown devices.
 * Identifiers: lowercase: 'unknown', camelCase: 'unknownDevice', snake_case: 'unknown_device', ALL_CAP: 'UNKNOWN', cache key: 'device:unknown:errId'.
 * Model Identifier Format: 'device-unknown-{timestamp}'.
 * Example Usage: When device type detection fails.
 */
export type DeviceTypeTaxonomy = CoreDeviceType | CustomDeviceType;
export type CoreDeviceType = 'mobile' | 'desktop' | 'tablet' | 'smarttv' | 'wearable' | 'console' | 'embedded' | 'other' | 'unknown';
export type CustomDeviceType = string & { __deviceType?: 'CustomDeviceType' };