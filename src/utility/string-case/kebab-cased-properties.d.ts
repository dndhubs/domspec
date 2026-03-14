import type { DefaultDelimiterCaseOptions } from./delimiter-case.js
import type { DelimiterCasedProperties } from './delimiter-cased-properties';
import type { ApplyDefaultOptions } from '../internal';
import type { WordsOptions } from '../template-literal/words';

/**
 * Converts object properties to kebab case (non-recursive).
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/kebab-cased-properties.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20KebabCasedProperties
 * @remarks
 * Standardizes property names in DNDHUBS API responses and props to kebab-case, supporting CSS and CLI conventions for Trakfox and HealthOrb DHIS2.
 * @template Value - The object type to convert.
 * @template Options - Word splitting options.
 * @example
 * ```typescript
 * interface User { userId: number; userName: string; }
 * const result: KebabCasedProperties<User> = { 'user-id': 1, 'user-name': 'Tom' };
 * const splitOnNumbers: KebabCasedProperties<{line1: string}, {splitOnNumbers: true}> = { 'line-1': 'string' };
 * ```
 * @see ./string-case/kebab-case
 * @see ./string-case/kebab-cased-properties-deep
 * @category Change case
 * @category Template literal
 * @category Object
 */
export type KebabCasedProperties<
  Value,
  Options extends WordsOptions = {}
> = DelimiterCasedProperties<Value, '-', ApplyDefaultOptions<WordsOptions, DefaultDelimiterCaseOptions, Options>>;