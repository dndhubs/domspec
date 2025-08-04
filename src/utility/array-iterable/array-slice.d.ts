import type { Sum } from '../numeric-math/sum';
import type { LessThanOrEqual } from '../numeric-math/less-than-or-equal';
import type { GreaterThanOrEqual } from '../numeric-math/greater-than-or-equal';
import type { GreaterThan } from '../numeric-math/greater-than';
import type { IsNegative } from '../numeric-math/numeric';
import type { And, Not, ArrayMin } from '../internal';
import type { IsEqual } from '../conditional-guards/is-equal';
import type { ArraySplice } from './array-splice';

/**
 * Helper for slicing variable-length arrays.
 * @internal
 */
type VariableLengthArraySliceHelper<
  Array_ extends readonly unknown[],
  Start extends number,
  End extends number,
> =
  And<Not<IsNegative<Start>>, IsEqual<End, never>> extends true
    ? ArraySplice<Array_, 0, Start>
    : And<
        And<Not<IsNegative<Start>>, Not<IsNegative<End>>>,
        IsEqual<GreaterThan<End, Start>, true>
      > extends true
      ? ArraySliceByPositiveIndex<Array_, Start, End>
      : [];

/**
 * Helper for slicing arrays with positive indices.
 * @internal
 */
type ArraySliceHelper<
  Array_ extends readonly unknown[],
  Start extends number = 0,
  End extends number = Array_['length'],
  TraversedElement extends Array<Array_[number]> = [],
  Result extends Array<Array_[number]> = [],
  ArrayLength extends number = Array_['length'],
  PositiveS extends number = IsNegative<Start> extends true
    ? Sum<ArrayLength, Start> extends infer AddResult extends number
      ? number extends AddResult
        ? 0
        : AddResult
      : never
    : Start,
  PositiveE extends number = IsNegative<End> extends true ? Sum<ArrayLength, End> : End,
> =
  true extends [IsNegative<PositiveS>, LessThanOrEqual<PositiveE, PositiveS>, GreaterThanOrEqual<PositiveS, ArrayLength>][number]
    ? []
    : ArraySliceByPositiveIndex<Array_, ArrayMin<[PositiveS, ArrayLength]>, ArrayMin<[PositiveE, ArrayLength]>>;

/**
 * Slices an array using positive indices.
 * @internal
 */
type ArraySliceByPositiveIndex<
  Array_ extends readonly unknown[],
  Start extends number,
  End extends number,
  Result extends Array<Array_[number]> = [],
> =
  Start extends End
    ? Result
    : ArraySliceByPositiveIndex<Array_, Sum<Start, 1>, End, [...Result, Array_[Start]]>;
    
/**
 * Returns an array slice of a given range, like Array#slice().
 * @see https://github.com/dndhubs/domspecs/blob/main/src/utility/array-iterable/array-slice.d.ts
 * @see https://github.com/dndhubs/domspecs/wiki/Utility
 * @see https://github.com/dndhubs/domspecs/discussions/new?category=feedback&title=Feedback%20on%20ArraySlice
 * @remarks
 * Provides type-safe slicing for arrays in DNDHUBS components and APIs, for Trakfox and HealthOrb DHIS2.
 * @template Array_ - The array to slice.
 * @template Start - Starting index (optional).
 * @template End - Ending index (optional).
 * @example
 * ```typescript
 * type T0 = ArraySlice<[0, 1, 2, 3, 4]>;
 * // [0, 1, 2, 3, 4]
 * type T1 = ArraySlice<[0, 1, 2, 3, 4], 0, -1>;
 * // [0, 1, 2, 3]
 * ```
 * @see ./array-iterable/array-splice
 * @category Array
 */
export type ArraySlice<
  Array_ extends readonly unknown[],
  Start extends number = never,
  End extends number = never,
> =
  And<IsEqual<Start, never>, IsEqual<End, never>> extends true
    ? Array_
    : number extends Array_['length']
      ? VariableLengthArraySliceHelper<Array_, Start, End>
      : ArraySliceHelper<Array_, IsEqual<Start, never> extends true ? 0 : Start, IsEqual<End, never> extends true ? Array_['length'] : End>;