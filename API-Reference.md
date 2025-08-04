---
layout: default
title: DNDHUBS DOMSpec API Reference
---

# DNDHUBS DOMSpec API Reference

The DNDHUBS DOMSpec API, managed by DNDHUBS LIMITED (`https://dndhubs.com`), provides a TypeScript-first framework for standardizing DOM APIs and web development patterns. This reference documents the core types, utility functions, and validation tools available in the `@dndhub/domspec` package, designed for use in projects like Trakfox, HealthOrb DHIS2, and DataOrb.

## Installation
Install the package via npm or Yarn:

```bash
npm install @dndhub/domspec
# or
yarn add @dndhub/domspec
```

Requires TypeScript >=5.0 with `strict: true` in `tsconfig.json`.

## Core Types

### ResourceSpec
The foundational interface for defining resources in the DNDHUBS DOMSpec ecosystem.

```typescript
/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/types/resource-spec.ts
 * @see https://github.com/dndhubs/domspec/wiki/ResourceSpec
 * @see https://github.com/dndhubs/domspec/discussions/new?category=general&title=Feedback%20on%20ResourceSpec
 * Interface for defining resources in the DNDHUBS DOMSpec ecosystem.
 * @example
 * const buttonSpec: ResourceSpec = {
 *   taxonomy: 'ui',
 *   type: 'component',
 *   name: 'Button',
 *   props: { variant: ['primary', 'secondary'] }
 * };
 */
export interface ResourceSpec {
  taxonomy: ResourceTaxonomy;
  type: string;
  name: string;
  description?: string;
  props?: Record<string, any>;
  methods?: string[];
  events?: string[];
}
```

### ResourceTaxonomy
A taxonomy for categorizing web development resources.

```typescript
/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/taxonomy/resource-taxonomy.ts
 * @see https://github.com/dndhubs/domspec/wiki/ResourceTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=general&title=Feedback%20on%20ResourceTaxonomy
 * Union type representing ResourceTaxonomy in the DNDHUBS DOMSpec ecosystem.
 * Defines resource types used across DNDHUBS platforms, including Trakfox and HealthOrb DHIS2 integrations.
 * @example
 * const resource: ResourceTaxonomy = 'ui';
 */
export type ResourceTaxonomy = CoreResource | CustomResource;
export type CoreResource = 'ui' | 'content' | 'geospatial' | 'financial' | 'healthcare';
export type CustomResource = string & { __resource?: 'CustomResource' };
```

## Utility Types
The `@dndhub/domspec` package includes utility types for type manipulation, especially for taxonomies. These are located in `src/utilities/`.

### TaxonomyUnion
Extracts the union type from a Taxonomy.

```typescript
/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/utilities/taxonomy-union.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/TaxonomyUnion
 * @see https://github.com/dndhubs/domspec/discussions/new?category=general&title=Feedback%20on%20TaxonomyUnion
 * Extracts the union type from a Taxonomy (Core | Custom).
 * @template Taxonomy - The taxonomy type to extract the union from.
 * @example
 * type Union = TaxonomyUnion<ResourceTaxonomy>;
 * // 'ui' | 'content' | ... | string & { __resource?: 'CustomResource' }
 */
export type TaxonomyUnion<Taxonomy> = Taxonomy extends CoreTaxonomy | CustomTaxonomy ? CoreTaxonomy | CustomTaxonomy : never;
```

### BrandedTaxonomy
Brands taxonomy items for type safety.

```typescript
/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/utilities/branded-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/BrandedTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=general&title=Feedback%20on%20BrandedTaxonomy
 * Brands taxonomy items for type safety.
 * @example
 * type Branded = BrandedTaxonomy<'ui', 'Resource'>; // 'ui' & { __resource?: 'Resource' }
 */
export type BrandedTaxonomy<Item extends string, Brand extends string> = Item & { [K in `__${Brand}`]?: Brand };
```

### ValidateTaxonomy
Ensures an item is in a Taxonomy union.

```typescript
/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/utilities/validate-taxonomy.d.ts
 * @see https://github.com/dndhubs/domspec/wiki/ValidateTaxonomy
 * @see https://github.com/dndhubs/domspec/discussions/new?category=general&title=Feedback%20on%20ValidateTaxonomy
 * Ensures Item is in Taxonomy union.
 * @example
 * type Valid = ValidateTaxonomy<'ui', ResourceTaxonomy>; // 'ui'
 * type Invalid = ValidateTaxonomy<'invalid', ResourceTaxonomy>; // never
 */
export type ValidateTaxonomy<Item extends string, Taxonomy> = Item extends TaxonomyUnion<Taxonomy> ? Item : never;
```

## Validation Functions
### validateSpec
Validates a resource against a `ResourceSpec`.

```typescript
/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/validation/validate-spec.ts
 * @see https://github.com/dndhubs/domspec/wiki/ValidateSpec
 * @see https://github.com/dndhubs/domspec/discussions/new?category=general&title=Feedback%20on%20ValidateSpec
 * Validates a resource against a ResourceSpec.
 * @param spec - The resource specification.
 * @param data - The data to validate.
 * @returns Validation result with validity and errors.
 * @example
 * const result = validateSpec(buttonSpec, { variant: 'primary', size: 'large' });
 * if (!result.valid) console.error(result.errors);
 */
export function validateSpec(spec: ResourceSpec, data: any): { valid: boolean; errors: string[] };
```

### validateTaxonomy
Validates if a value belongs to a taxonomy.

```typescript
/**
 * @see https://github.com/dndhubs/domspec/blob/main/src/validation/validate-taxonomy.ts
 * @see https://github.com/dndhubs/domspec/wiki/ValidateTaxonomyFunction
 * @see https://github.com/dndhubs/domspec/discussions/new?category=general&title=Feedback%20on%20ValidateTaxonomyFunction
 * Validates if a value belongs to a taxonomy.
 * @param value - The value to validate.
 * @returns True if the value is a valid taxonomy item.
 * @example
 * const isValid = validateTaxonomy('ui'); // true
 * const isInvalid = validateTaxonomy('invalid'); // false
 */
export function validateTaxonomy(value: string): boolean;
```

## CLI Tools
### browse-taxonomy
Interactively explore the taxonomy.

```bash
npx @dndhub/domspec browse-taxonomy
```

### generate-types
Generate TypeScript types from a taxonomy.

```bash
npx @dndhub/domspec generate-types --taxonomy ui --output ./types
```

### validate
Validate resources against specifications.

```bash
npx @dndhub/domspec validate ./my-resources/**/*.json
```

## Integration Examples
### With React
```typescript
import React from 'react';
import { useResourceSpec } from '@dndhub/domspec/react';

const buttonSpec: ResourceSpec = {
  taxonomy: 'ui',
  type: 'component',
  name: 'Button',
  props: {
    variant: ['primary', 'secondary'],
    size: ['small', 'medium', 'large']
  }
};

function Button() {
  const spec = useResourceSpec(buttonSpec);
  return (
    <button className={`btn btn-${spec.props.variant} btn-${spec.props.size}`}>
      {spec.props.children}
    </button>
  );
}
```

### With Node.js
```typescript
import { validateSpec, ResourceRegistry } from '@dndhub/domspec';

const registry = new ResourceRegistry();
registry.register(buttonSpec);

const isValid = validateSpec(buttonSpec, { variant: 'primary', size: 'large' });
```

## Contributing
Propose new API features or improvements via:

- Issues: `https://github.com/dndhubs/domspec/issues`
- Discussions: `https://github.com/dndhubs/domspec/discussions`
- Pull Requests: See [Contributing Guide](https://github.com/dndhubs/domspec/blob/main/CONTRIBUTING.md)

## Need Help?
- 📖 [FAQ](https://github.com/dndhubs/domspec/wiki/FAQ)
- 💬 [Discussions](https://github.com/dndhubs/domspec/discussions)
- 📧 Email: jetroolowole@dndhub.com
- 🌐 Website: [https://dndhubs.com](https://dndhubs.com)