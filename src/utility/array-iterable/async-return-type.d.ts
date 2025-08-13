type AsyncFunction = (...arguments_: any[]) => Promise<unknown>;

/**
 * Unwraps the return type of a function that returns a Promise.
 * @see https://github.com/dndhubs/domspec/blob/main/src/utility/async-function/async-return-type.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/Utility
 * @see https://github.com/dndhubs/domspec/discussions/new?category=feedback&title=Feedback%20on%20AsyncReturnType
 * @remarks
 * Simplifies async type handling in DNDHUBS API calls and hooks, for Trakfox and HealthOrb DHIS2.
 * @template Target - The async function type.
 * @example
 * ```typescript
 * import {asyncFunction} from 'api';
 * type Value = AsyncReturnType<typeof asyncFunction>;
 * ```
 * @see ./async-function/asyncify
 * @category Async
 */
export type AsyncReturnType<Target extends AsyncFunction> = Awaited<ReturnType<Target>>;