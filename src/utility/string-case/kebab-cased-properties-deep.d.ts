import type { DefaultDelimiterCaseOptions } from './delimiter-case';
import type { DelimiterCasedPropertiesDeep } from './delimiter-cased-properties-deep';
import type { ApplyDefaultOptions } from '../internal';
import type { WordsOptions } from '../template-literal/words';

/**
 * Converts object properties to kebab case (recursive).
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/kebab-cased-properties-deep.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20KebabCasedPropertiesDeep
 * @remarks
 * Deeply standardizes nested object properties in DNDHUBS data models to kebab-case, ideal for API payloads and CSS in Trakfox and HealthOrb DHIS2.
 * @template Value - The object type to convert.
 * @template Options - Word splitting options.
 * @example
 * ```typescript
 * interface User { userId: number; userName: string; }
 * interface UserWithFriends { userInfo: User; userFriends: User[]; }
 * const result: KebabCasedPropertiesDeep<UserWithFriends> = {
 *   'user-info': { 'user-id': 1, 'user-name': 'Tom' },
 *   'user-friends': [{ 'user-id': 2, 'user-name': 'Jerry' }, { 'user-id': 3, 'user-name': 'Spike' }]
 * };
 * ```
 * @see ./string-case/kebab-case
 * @see ./string-case/kebab-cased-properties
 * @category Change case
 * @category Template literal
 * @category Object
 */
export type KebabCasedPropertiesDeep<
  Value,
  Options extends WordsOptions = {}
> = DelimiterCasedPropertiesDeep<Value, '-', ApplyDefaultOptions<WordsOptions, DefaultDelimiterCaseOptions, Options>>;