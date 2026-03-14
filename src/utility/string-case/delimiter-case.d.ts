import type { ApplyDefaultOptions, AsciiPunctuation, StartsWith } from '../internal';
import type { IsStringLiteral } from '../conditional-guards/is-literal';
import type { Merge } from '../object-manipulation/merge';
import type { RemovePrefix } from '../template-literal/remove-prefix';
import type { DefaultWordsOptions, Words, WordsOptions } from '../template-literal/words';

/**
 * Default options for delimiter case.
 */
export type DefaultDelimiterCaseOptions = Merge<DefaultWordsOptions, {splitOnNumbers: false}>;

/**
 * Converts an array of words to delimiter case with input capitalization.
 * @internal
 */
type DelimiterCaseFromArray<
  Words extends string[],
  Delimiter extends string,
  OutputString extends string = ''
> = Words extends [infer FirstWord extends string, ...infer RemainingWords extends string[]]
  ? DelimiterCaseFromArray<RemainingWords, Delimiter, `${OutputString}${
      StartsWith<FirstWord, AsciiPunctuation> extends true ? '' : Delimiter
    }${FirstWord}`>
  : OutputString;

/**
 * Converts a string literal to a custom delimiter-separated case.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/delimiter-case.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20DelimiterCase
 * @remarks
 * Provides flexible string transformations for DNDHUBS API keys and CSS names, supporting custom delimiters for Trakfox and HealthOrb DHIS2.
 * @template Value - The string type to convert.
 * @template Delimiter - The delimiter to use (e.g., '-').
 * @template Options - Word splitting options.
 * @example
 * ```typescript
 * const someVariable: DelimiterCase<'fooBar', '#'> = 'foo#bar';
 * const noSplitOnNumbers: DelimiterCase<'p2pNetwork', '#', {splitOnNumbers: false}> = 'p2p#network';
 * ```
 * @see ./string-case/kebab-case
 * @see ./string-case/snake-case
 * @category Change case
 * @category Template literal
 */
export type DelimiterCase<
  Value,
  Delimiter extends string,
  Options extends WordsOptions = {}
> = Value extends string
  ? IsStringLiteral<Value> extends false
    ? Value
    : Lowercase<RemovePrefix<DelimiterCaseFromArray<
        Words<Value, ApplyDefaultOptions<WordsOptions, DefaultDelimiterCaseOptions, Options>>,
        Delimiter
      >, string, {strict: false}>>
  : Value;