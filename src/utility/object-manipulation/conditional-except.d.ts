import type { Except } from './except';
import type { ConditionalKeys } from './conditional-keys';

/**
 * Excludes keys from a shape matching a condition.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/object-manipulation/conditional-except.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20ConditionalExcept
 * @remarks
 * Filters object shapes in DOMSPec models, excluding types for API and component development.
 * @template Base - The base object type.
 * @template Condition - The exclusion condition.
 * @example
 * ```typescript
 * class Awesome { name: string; successes: number; failures: bigint; run() {} }
 * type ExceptPrimitives = ConditionalExcept<Awesome, Primitive>;
 * // {run: () => void}
 * ```
 * @see ./object-manipulation/conditional-keys
 * @see ./object-manipulation/except
 * @category Object
 */
export type ConditionalExcept<Base, Condition> = Except<Base, ConditionalKeys<Base, Condition>>;