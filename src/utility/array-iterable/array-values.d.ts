/**
 * Provides all values for a constant array or tuple.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/array-iterable/array-values.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ArrayValues
 * @remarks
 * Enforces type-safety for values in DNDHUBS constant arrays, for enum-like structures in UI and API validation.
 * @template T - The array or tuple type.
 * @example
 * ```typescript
 * const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
 * type WeekdayName = ArrayValues<typeof weekdays>;
 * ```
 * @see ./array-iterable/array-indices
 * @category Array
 */
export type ArrayValues<T extends readonly unknown[]> = T[number];