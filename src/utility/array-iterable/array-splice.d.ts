import type { BuildTuple, StaticPartOfArray, VariablePartOfArray } from '../internal';
import type { GreaterThanOrEqual } from '../numeric-math/greater-than-or-equal';
import type { Subtract } from '../numeric-math/subtract';
import type { UnknownArray } from './unknown-array';

/**
 * Splits a fixed-length array at the given index.
 * @internal
 */
type SplitFixedArrayByIndex<T extends UnknownArray, SplitIndex extends number> =
  SplitIndex extends 0
    ? [[], T]
    : T extends readonly [...BuildTuple<SplitIndex>, ...infer V]
      ? T extends readonly [...infer U, ...V]
        ? [U, V]
        : [never, never]
      : [never, never];

/**
 * Splits a variable-length array at the given index.
 * @internal
 */
type SplitVariableArrayByIndex<
  T extends UnknownArray,
  SplitIndex extends number,
  T1 = Subtract<SplitIndex, StaticPartOfArray<T>['length']>,
  T2 = T1 extends number ? BuildTuple<T1, VariablePartOfArray<T>[number]> : []
> =
  SplitIndex extends 0
    ? [[], T]
    : GreaterThanOrEqual<StaticPartOfArray<T>['length'], SplitIndex> extends true
      ? [
          SplitFixedArrayByIndex<StaticPartOfArray<T>, SplitIndex>[0],
          [...SplitFixedArrayByIndex<StaticPartOfArray<T>, SplitIndex>[1], ...VariablePartOfArray<T>]
        ]
      : [[...StaticPartOfArray<T>, ...(T2 extends UnknownArray ? T2 : [])], VariablePartOfArray<T>];

/**
 * Splits an array at the given index, supporting both fixed and variable-length arrays.
 * @internal
 */
type SplitArrayByIndex<T extends UnknownArray, SplitIndex extends number> =
  SplitIndex extends 0
    ? [[], T]
    : number extends T['length']
      ? SplitVariableArrayByIndex<T, SplitIndex>
      : SplitFixedArrayByIndex<T, SplitIndex>;

/**
 * Creates a new array type by adding or removing elements at a specified index range.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/array-iterable/array-splice.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ArraySplice
 * @remarks
 * Enhances type-safe array manipulations for DNDHUBS APIs and UI components, compatible with Trakfox and HealthOrb DHIS2.
 * @template T - The array type to splice.
 * @template Start - The starting index.
 * @template DeleteCount - Number of elements to delete.
 * @template Items - Items to insert (optional).
 * @example
 * ```typescript
 * type Months = ['January', 'April', 'June'];
 * type Result = ArraySplice<Months, 1, 0, ['Feb', 'March']>;
 * // Result: ['January', 'Feb', 'March', 'April', 'June']
 * ```
 * @see ./array-iterable/array-slice
 * @category Array
 */
export type ArraySplice<
  T extends UnknownArray,
  Start extends number,
  DeleteCount extends number,
  Items extends UnknownArray = []
> =
  SplitArrayByIndex<T, Start> extends [infer U extends UnknownArray, infer V extends UnknownArray]
    ? SplitArrayByIndex<V, DeleteCount> extends [infer _Deleted extends UnknownArray, infer X extends UnknownArray]
      ? [...U, ...Items, ...X]
      : never
    : never;