/**
 * Union type representing ErrorLibraryTaxonomy in the DOMSpec ecosystem.
 * Defines libraries causing errors in @dndhub/error.
 *
 * - 'react': React library errors.
 *   Classifications: React 19.1+.
 *   Identifiers: lowercase: 'react', camelCase: 'reactLibrary', snake_case: 'react_library', ALL_CAP: 'REACT', cache key: 'library:react:errId'.
 *   Model Identifier Format: 'library-react-{timestamp}'.
 *   Example Usage: React component errors in ErrorBoundary.tsx.
 *
 * - 'typescript': TypeScript-related errors.
 *   Identifiers: lowercase: 'typescript', camelCase: 'typescriptLibrary', snake_case: 'typescript_library', ALL_CAP: 'TYPESCRIPT', cache key: 'library:typescript:errId'.
 *   Model Identifier Format: 'library-typescript-{timestamp}'.
 *   Example Usage: TypeScript 5.8.3 type errors.
 *
 * - 'tailwind': Tailwind CSS errors.
 *   Identifiers: lowercase: 'tailwind', camelCase: 'tailwindLibrary', snake_case: 'tailwind_library', ALL_CAP: 'TAILWIND', cache key: 'library:tailwind:errId'.
 *   Model Identifier Format: 'library-tailwind-{timestamp}'.
 *   Example Usage: Tailwind CSS conflicts in DomsClientError.tsx.
 *
 *
 * - 'supabase': Supabase database errors.
 *   Identifiers: lowercase: 'supabase', camelCase: 'supabaseLibrary', snake_case: 'supabase_library', ALL_CAP: 'SUPABASE', cache key: 'library:supabase:errId'.
 *   Model Identifier Format: 'library-supabase-{timestamp}'.
 *   Example Usage: Supabase query failures.
 */
export type LibraryTaxonomy = CoreLibrary | CustomLibrary;
export type CoreLibrary = 'dndhub-idb' | 'react' | 'typescript' | 'tailwind-css' | 'supabase';
export type CustomLibrary = string & { __library?: 'CustomLibrary' };