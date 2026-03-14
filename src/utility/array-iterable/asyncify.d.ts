import type { SetReturnType } from './set-return-type';

/**
 * Creates an async version of a function type, wrapping return in Promise.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/async-function/asyncify.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20Asyncify
 * @remarks
 * Reuses sync types for async in DNDHUBS hooks and services, for Trakfox and HealthOrb DHIS2.
 * @template Function_ - The function type.
 * @example
 * ```typescript
 * function getFooSync(someArg: SomeType): Foo {  }
 * type Asyncified = Asyncify<typeof getFooSync>;
 * // (someArg: SomeType) => Promise<Foo>
 * ```
 * @see ./async-function/async-return-type
 * @category Async
 */
export type Asyncify<Function_ extends (...arguments_: any[]) => any> =
  SetReturnType<Function_, Promise<Awaited<ReturnType<Function_>>>>;