import type { CamelCase, CamelCaseOptions, DefaultCamelCaseOptions } from './camel-case';
import type { ApplyDefaultOptions } from '../internal';

/**
 * Converts object properties to camel case (non-recursive).
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/camel-cased-properties.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20CamelCasedProperties
 * @remarks
 * Standardizes property naming in DNDHUBS API responses and component props, enhancing interoperability for Trakfox and HealthOrb DHIS2.
 * @template Value - The object type to convert.
 * @template Options - Camel case options.
 * @example
 * ```typescript
 * interface User { UserId: number; UserName: string; }
 * const result: CamelCasedProperties<User> = { userId: 1, userName: 'Tom' };
 * const preserveUppercase: CamelCasedProperties<{fooBAR: string}, {preserveConsecutiveUppercase: true}> = { fooBAR: 'string' };
 * ```
 * @see ./string-case/camel-case
 * @see ./string-case/camel-cased-properties-deep
 * @category Change case
 * @category Template literal
 * @category Object
 */
export type CamelCasedProperties<Value, Options extends CamelCaseOptions = {}> = Value extends Function
  ? Value
  : Value extends Array<infer U>
    ? Value
    : {
        [K in keyof Value as CamelCase<K, ApplyDefaultOptions<CamelCaseOptions, DefaultCamelCaseOptions, Options>>]: Value[K];
      };