import type { DefaultDelimiterCaseOptions, DelimiterCase } from./delimiter-case.js
import type { ApplyDefaultOptions } from '../internal';
import type { WordsOptions } from '../template-literal/words';

/**
 * Converts a string literal to kebab-case.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/kebab-case.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20KebabCase
 * @remarks
 * Transforms strings for DNDHUBS API keys and CSS class names, ensuring RESTful and CSS-friendly naming conventions for Trakfox and HealthOrb DHIS2.
 * @template Value - The string type to convert.
 * @template Options - Word splitting options.
 * @example
 * ```typescript
 * const someVariable: KebabCase<'fooBar'> = 'foo-bar';
 * const noSplitOnNumbers: KebabCase<'p2pNetwork', {splitOnNumbers: false}> = 'p2p-network';
 * ```
 * @see ./string-case/kebab-cased-properties
 * @see ./string-case/delimiter-case
 * @category Change case
 * @category Template literal
 */
export type KebabCase<
  Value,
  Options extends WordsOptions = {}
> = DelimiterCase<Value, '-', ApplyDefaultOptions<WordsOptions, DefaultDelimiterCaseOptions, Options>>;