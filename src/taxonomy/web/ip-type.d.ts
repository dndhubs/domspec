/**
 * Union type representing IpTypeTaxonomy in the DOMSpec ecosystem.
 * Defines IP address types for error context in @dndhub/error ipAddress prop.
 * Supports IPv4/IPv6 classification with expansions for proxy/Tor detection.
 *
 * - 'IPv4': Internet Protocol version 4 address.
 *   Classifications: RFC 791.
 *   Identifiers: lowercase: 'ipv4', camelCase: 'ipv4Type', snake_case: 'ipv4_type', ALL_CAP: 'IPV4', cache key: 'ip:type:ipv4:errId'.
 *   Model Identifier Format: 'ip-type-ipv4-{timestamp}'.
 *   Variations and Use Cases: Standard 32-bit addresses (e.g., 192.168.0.1); used for legacy networks. In ipAddress, combines with isProxy/isTor flags.
 *   Example Usage: IPv4 detection in ipAddress context for securityAnalyzer.
 *
 * - 'IPv6': Internet Protocol version 6 address.
 *   Classifications: RFC 8200.
 *   Identifiers: lowercase: 'ipv6', camelCase: 'ipv6Type', snake_case: 'ipv6_type', ALL_CAP: 'IPV6', cache key: 'ip:type:ipv6:errId'.
 *   Model Identifier Format: 'ip-type-ipv6-{timestamp}'.
 *   Variations and Use Cases: 128-bit addresses (e.g., 2001:db8::1); for modern, scalable networks. Supports dual-stack with IPv4.
 *   Example Usage: IPv6 errors in network category via DomsError.ts.
 *
 * - 'IPv4-mapped': IPv4-mapped IPv6 address.
 *   Classifications: RFC 4291.
 *   Identifiers: lowercase: 'ipv4-mapped', camelCase: 'ipv4Mapped', snake_case: 'ipv4_mapped', ALL_CAP: 'IPV4_MAPPED', cache key: 'ip:type:ipv4-mapped:errId'.
 *   Model Identifier Format: 'ip-type-ipv4-mapped-{timestamp}'.
 *   Variations and Use Cases: Embeds IPv4 in IPv6 (e.g., ::ffff:192.168.0.1); for transition mechanisms.
 *   Example Usage: Mapped IP detection in fluxr network drivers.
 *
 * - 'IPv6-link-local': Link-local IPv6 address.
 *   Classifications: RFC 4291.
 *   Identifiers: lowercase: 'ipv6-link-local', camelCase: 'ipv6LinkLocal', snake_case: 'ipv6_link_local', ALL_CAP: 'IPV6_LINK_LOCAL', cache key: 'ip:type:ipv6-link-local:errId'.
 *   Model Identifier Format: 'ip-type-ipv6-link-local-{timestamp}'.
 *   Variations and Use Cases: fe80:: prefix for local links; non-routable, used in device comms.
 *   Example Usage: Local network errors in deviceFingerprint.
 *
 * - 'IPv6-unique-local': Unique local IPv6 address.
 *   Classifications: RFC 4193.
 *   Identifiers: lowercase: 'ipv6-unique-local', camelCase: 'ipv6UniqueLocal', snake_case: 'ipv6_unique_local', ALL_CAP: 'IPV6_UNIQUE_LOCAL', cache key: 'ip:type:ipv6-unique-local:errId'.
 *   Model Identifier Format: 'ip-type-ipv6-unique-local-{timestamp}'.
 *   Variations and Use Cases: fc00::/7 prefix for private networks; site-local alternative.
 *   Example Usage: Private IP errors in internal routing.
 */
export type IpTypeTaxonomy = CoreIpType | CustomIpType;
export type CoreIpType = 'IPv4' | 'IPv6' | 'IPv4-mapped' | 'IPv6-link-local' | 'IPv6-unique-local';
export type CustomIpType = string & { __ipType?: 'CustomIpType' };