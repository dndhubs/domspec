/**
 * Union type representing OsNameTaxonomy in the DOMSpec ecosystem.
 * Defines common operating system names for deviceFingerprint.os.name in @dndhub/error.
 * Supports user agent parsing for OS detection in error context.
 *
 * - 'Windows': Microsoft Windows OS.
 *   Classifications: Desktop OS.
 *   Identifiers: lowercase: 'windows', camelCase: 'windowsOs', snake_case: 'windows_os', ALL_CAP: 'WINDOWS', cache key: 'os:windows:errId'.
 *   Model Identifier Format: 'os-windows-{timestamp}'.
 *   Variations and Use Cases: Various versions (e.g., 10, 11); common in desktop apps.
 *   Example Usage: Windows-specific errors in deviceFingerprint.
 *
 * - 'macOS': Apple macOS.
 *   Classifications: Unix-based desktop OS.
 *   Identifiers: lowercase: 'macos', camelCase: 'macOs', snake_case: 'mac_os', ALL_CAP: 'MACOS', cache key: 'os:macos:errId'.
 *   Model Identifier Format: 'os-macos-{timestamp}'.
 *   Variations and Use Cases: Versions like Ventura; errors in Safari integrations.
 *   Example Usage: macOS UA errors in DomsClientError.tsx.
 *
 * - 'Linux': Linux distributions.
 *   Classifications: Open-source Unix-like OS.
 *   Identifiers: lowercase: 'linux', camelCase: 'linuxOs', snake_case: 'linux_os', ALL_CAP: 'LINUX', cache key: 'os:linux:errId'.
 *   Model Identifier Format: 'os-linux-{timestamp}'.
 *   Variations and Use Cases: Ubuntu/Fedora; server/desktop errors.
 *   Example Usage: Linux-specific hydration errors in fluxr.
 *
 * - 'Android': Google Android OS.
 *   Classifications: Mobile OS.
 *   Identifiers: lowercase: 'android', camelCase: 'androidOs', snake_case: 'android_os', ALL_CAP: 'ANDROID', cache key: 'os:android:errId'.
 *   Model Identifier Format: 'os-android-{timestamp}'.
 *   Variations and Use Cases: Versions like 14; mobile app errors.
 *   Example Usage: Android device errors in DndCoLab mobile.
 *
 * - 'iOS': Apple iOS.
 *   Classifications: Mobile OS.
 *   Identifiers: lowercase: 'ios', camelCase: 'iosOs', snake_case: 'ios_os', ALL_CAP: 'IOS', cache key: 'os:ios:errId'.
 *   Model Identifier Format: 'os-ios-{timestamp}'.
 *   Variations and Use Cases: Versions like 17; iPhone/iPad errors.
 *   Example Usage: iOS UA detection in error logs.
 *
 * - 'Ubuntu': Ubuntu Linux distribution.
 *   Classifications: Debian-based Linux.
 *   Identifiers: lowercase: 'ubuntu', camelCase: 'ubuntuOs', snake_case: 'ubuntu_os', ALL_CAP: 'UBUNTU', cache key: 'os:ubuntu:errId'.
 *   Model Identifier Format: 'os-ubuntu-{timestamp}'.
 *   Variations and Use Cases: Server/desktop; errors in Linux variants.
 *   Example Usage: Ubuntu-specific errors in server runtime.
 *
 * - 'Fedora': Fedora Linux distribution.
 *   Classifications: RPM-based Linux.
 *   Identifiers: lowercase: 'fedora', camelCase: 'fedoraOs', snake_case: 'fedora_os', ALL_CAP: 'FEDORA', cache key: 'os:fedora:errId'.
 *   Model Identifier Format: 'os-fedora-{timestamp}'.
 *   Variations and Use Cases: Community-driven; errors in package management.
 *   Example Usage: Fedora UA errors in development envs.
 *
 * - 'Chrome OS': Google Chrome OS.
 *   Classifications: Linux-based for Chromebooks.
 *   Identifiers: lowercase: 'chrome os', camelCase: 'chromeOs', snake_case: 'chrome_os', ALL_CAP: 'CHROME_OS', cache key: 'os:chrome os:errId'.
 *   Model Identifier Format: 'os-chrome-os-{timestamp}'.
 *   Variations and Use Cases: Web-centric; errors in web app compatibility.
 *   Example Usage: Chrome OS device errors in DomsError.ts.
 */
export type OsNameTaxonomy = CoreOsName | CustomOsName;
export type CoreOsName = 'windows' | 'macos' | 'linux' | 'ios' | 'android' | 'ubuntu' | 'fedora' | 'chrome';
export type CustomOsName = string & { __osName?: 'CustomOsName' };