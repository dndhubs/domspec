import type { ApplyDefaultOptions } from '../internal';
import type { Words } from '../template-literal/words';

/**
 * CamelCase options.
 * @see ./string-case/camel-case
 */
export type CamelCaseOptions = {
  /**
   * Preserve consecutive uppercase letters.
   * @default false
   */
  preserveConsecutiveUppercase?: boolean;
};

export type DefaultCamelCaseOptions = {
  preserveConsecutiveUppercase: false;
};

/**
 * Converts an array of words to camel-case.
 * @internal
 */
type CamelCaseFromArray<
  Words extends string[],
  Options extends Required<CamelCaseOptions>,
  OutputString extends string = ''
> = Words extends [infer FirstWord extends string, ...infer RemainingWords extends string[]]
  ? Options['preserveConsecutiveUppercase'] extends true
    ? `${Capitalize<FirstWord>}${CamelCaseFromArray<RemainingWords, Options>}`
    : `${Capitalize<Lowercase<FirstWord>>}${CamelCaseFromArray<RemainingWords, Options>}`
  : OutputString;

/**
 * Converts a string literal to camel-case.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/camel-case.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20CamelCase
 * @remarks
 * Normalizes strings for DNDHUBS API keys and component names, supporting RESTful standards and marketplace interoperability.
 * @template Type - The string type to convert.
 * @template Options - Camel case options.
 * @example
 * ```typescript
 * const someVariable: CamelCase<'foo-bar'> = 'fooBar';
 * const preserveUppercase: CamelCase<'foo-BAR-baz', {preserveConsecutiveUppercase: true}> = 'fooBARBaz';
 * ```
 * @see ./string-case/camel-cased-properties
 * @see ./string-case/camel-cased-properties-deep
 * @category Change case
 * @category Template literal
 */
export type CamelCase<Type, Options extends CamelCaseOptions = {}> = Type extends string
  ? string extends Type
    ? Type
    : Uncapitalize<CamelCaseFromArray<
        Words<Type extends Uppercase<Type> ? Lowercase<Type> : Type>,
        ApplyDefaultOptions<CamelCaseOptions, DefaultCamelCaseOptions, Options>
      >>
  : Type;