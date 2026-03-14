import type { CamelCase, CamelCaseOptions, DefaultCamelCaseOptions } from './camel-case';
import type { ApplyDefaultOptions, NonRecursiveType } from '../internal';
import type { UnknownArray } from '../array-iterable/unknown-array';

/**
 * Converts object properties to camel case (recursive).
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/camel-cased-properties-deep.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20CamelCasedPropertiesDeep
 * @remarks
 * Deeply standardizes nested objects in DNDHUBS data models, enhancing type safety for complex API payloads in Trakfox and HealthOrb DHIS2.
 * @template Value - The object type to convert.
 * @template Options - Camel case options.
 * @example
 * ```typescript
 * interface User { UserId: number; UserName: string; }
 * interface UserWithFriends { UserInfo: User; UserFriends: User[]; }
 * const result: CamelCasedPropertiesDeep<UserWithFriends> = {
 *   userInfo: { userId: 1, userName: 'Tom' },
 *   userFriends: [{ userId: 2, userName: 'Jerry' }, { userId: 3, userName: 'Spike' }]
 * };
 * ```
 * @see ./string-case/camel-cased-properties
 * @see ./string-case/camel-case
 * @category Change case
 * @category Template literal
 * @category Object
 */
export type CamelCasedPropertiesDeep<
  Value,
  Options extends CamelCaseOptions = {}
> = _CamelCasedPropertiesDeep<Value, ApplyDefaultOptions<CamelCaseOptions, DefaultCamelCaseOptions, Options>>;

type _CamelCasedPropertiesDeep<
  Value,
  Options extends Required<CamelCaseOptions>
> = Value extends NonRecursiveType
  ? Value
  : Value extends UnknownArray
    ? CamelCasedPropertiesArrayDeep<Value, Options>
    : Value extends Set<infer U>
      ? Set<_CamelCasedPropertiesDeep<U, Options>>
      : Value extends object
        ? {
            [K in keyof Value as CamelCase<K, Options>]: _CamelCasedPropertiesDeep<Value[K], Options>;
          }
        : Value;

type CamelCasedPropertiesArrayDeep<
  Value extends UnknownArray,
  Options extends Required<CamelCaseOptions>
> = Value extends []
  ? []
  : Value extends [infer U, ...infer V]
    ? [_CamelCasedPropertiesDeep<U, Options>, ..._CamelCasedPropertiesDeep<V, Options>]
    : Value extends readonly [infer U, ...infer V]
      ? readonly [_CamelCasedPropertiesDeep<U, Options>, ..._CamelCasedPropertiesDeep<V, Options>]
      : Value extends readonly [...infer U, infer V]
        ? [..._CamelCasedPropertiesDeep<U, Options>, _CamelCasedPropertiesDeep<V, Options>]
        : Value extends Array<infer U>
          ? Array<_CamelCasedPropertiesDeep<U, Options>>
          : Value extends ReadonlyArray<infer U>
            ? ReadonlyArray<_CamelCasedPropertiesDeep<U, Options>>
            : never;