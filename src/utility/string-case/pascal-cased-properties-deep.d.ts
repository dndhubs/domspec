import type { CamelCaseOptions, DefaultCamelCaseOptions } from './camel-case';
import type { ApplyDefaultOptions } from '../internal';
import type { PascalCase } from './pascal-case';

/**
 * Converts object properties to pascal case (recursive).
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/pascal-cased-properties-deep.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20PascalCasedPropertiesDeep
 * @remarks
 * Deeply standardizes nested object properties in DNDHUBS data models to pascal-case, ideal for API payloads and TypeScript components in Trakfox and HealthOrb DHIS2.
 * @template Value - The object type to convert.
 * @template Options - Camel case options.
 * @example
 * ```typescript
 * interface User { userId: number; userName: string; }
 * interface UserWithFriends { userInfo: User; userFriends: User[]; }
 * const result: PascalCasedPropertiesDeep<UserWithFriends> = {
 *   UserInfo: { UserId: 1, UserName: 'Tom' },
 *   UserFriends: [{ UserId: 2, UserName: 'Jerry' }, { UserId: 3, UserName: 'Spike' }]
 * };
 * ```
 * @see ./string-case/pascal-case
 * @see ./string-case/pascal-cased-properties
 * @category Change case
 * @category Template literal
 * @category Object
 */
export type PascalCasedPropertiesDeep<Value, Options extends CamelCaseOptions = {}> =
  _PascalCasedPropertiesDeep<Value, ApplyDefaultOptions<CamelCaseOptions, DefaultCamelCaseOptions, Options>>;

type _PascalCasedPropertiesDeep<Value, Options extends Required<CamelCaseOptions>> = Value extends Function | Date | RegExp
  ? Value
  : Value extends Array<infer U>
    ? Array<_PascalCasedPropertiesDeep<U, Options>>
    : Value extends Set<infer U>
      ? Set<_PascalCasedPropertiesDeep<U, Options>>
      : Value extends object
        ? {
            [K in keyof Value as PascalCase<K, Options>]: _PascalCasedPropertiesDeep<Value[K], Options>;
          }
        : Value;