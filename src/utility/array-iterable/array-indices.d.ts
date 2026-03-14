/**
 * Provides valid indices for a constant array or tuple.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/array-iterable/array-indices.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ArrayIndices
 * @remarks
 * Enforces type-safety for index access in DNDHUBS constants, for UI and API validation in Trakfox and HealthOrb DHIS2.
 * @template Element - The array or tuple type.
 * @example
 * ```typescript
 * const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
 * type Weekday = ArrayIndices<typeof weekdays>;
 * ```
 * @see ./array-iterable/array-values
 * @category Array
 */
export type ArrayIndices<Element extends readonly unknown[]> =
  Exclude<Partial<Element>['length'], Element['length']>;