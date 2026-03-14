import type { CamelCase, CamelCaseOptions, DefaultCamelCaseOptions } from './camel-case';
import type { ApplyDefaultOptions } from '../internal';

/**
 * Converts a string literal to pascal-case.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/string-case/pascal-case.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20PascalCase
 * @remarks
 * Transforms strings for DNDHUBS component names and API types, aligning with TypeScript naming conventions for Trakfox and HealthOrb DHIS2.
 * @template Value - The string type to convert.
 * @template Options - Camel case options.
 * @example
 * ```typescript
 * const someVariable: PascalCase<'foo-bar'> = 'FooBar';
 * const preserveUppercase: PascalCase<'foo-BAR-baz', {preserveConsecutiveUppercase: true}> = 'FooBARBaz';
 * ```
 * @see ./string-case/pascal-cased-properties
 * @see ./string-case/camel-case
 * @category Change case
 * @category Template literal
 */
export type PascalCase<Value, Options extends CamelCaseOptions = {}> =
  _PascalCase<Value, ApplyDefaultOptions<CamelCaseOptions, DefaultCamelCaseOptions, Options>>;

type _PascalCase<Value, Options extends Required<CamelCaseOptions>> = CamelCase<Value, Options> extends string
  ? Capitalize<CamelCase<Value, Options>>
  : CamelCase<Value, Options>;