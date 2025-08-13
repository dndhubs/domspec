import type { CamelCaseOptions, DefaultCamelCaseOptions } from './camel-case';
import type { ApplyDefaultOptions } from '../internal';
import type { PascalCase } from './pascal-case';

/**
 * Converts object properties to pascal case (non-recursive).
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/pascal-cased-properties.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20PascalCasedProperties
 * @remarks
 * Standardizes property names in DNDHUBS API responses and props to pascal-case, supporting TypeScript conventions for Trakfox and HealthOrb DHIS2.
 * @template Value - The object type to convert.
 * @template Options - Camel case options.
 * @example
 * ```typescript
 * interface User { userId: number; userName: string; }
 * const result: PascalCasedProperties<User> = { UserId: 1, UserName: 'Tom' };
 * const preserveUppercase: PascalCasedProperties<{fooBAR: string}, {preserveConsecutiveUppercase: true}> = { FooBAR: 'string' };
 * ```
 * @see ./string-case/pascal-case
 * @see ./string-case/pascal-cased-properties-deep
 * @category Change case
 * @category Template literal
 * @category Object
 */
export type PascalCasedProperties<Value, Options extends CamelCaseOptions = {}> = Value extends Function
  ? Value
  : Value extends Array<infer U>
    ? Value
    : {
        [K in keyof Value as PascalCase<K, ApplyDefaultOptions<CamelCaseOptions, DefaultCamelCaseOptions, Options>>]: Value[K];
      };